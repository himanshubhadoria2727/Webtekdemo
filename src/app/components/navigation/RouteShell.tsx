"use client";

import { useEffect, useLayoutEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";

type RouteShellProps = {
  children: ReactNode;
};

function resetDocumentScrollState() {
  document.documentElement.style.removeProperty("overflow");
  document.documentElement.style.removeProperty("position");
  document.documentElement.style.removeProperty("height");
  document.body.style.removeProperty("overflow");
  document.body.style.removeProperty("position");
  document.body.style.removeProperty("height");
}

function scrollToRouteTop() {
  if (window.location.hash) return;

  const previousHtmlScrollBehavior = document.documentElement.style.scrollBehavior;
  const previousBodyScrollBehavior = document.body.style.scrollBehavior;

  document.documentElement.style.scrollBehavior = "auto";
  document.body.style.scrollBehavior = "auto";
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  document.documentElement.style.scrollBehavior = previousHtmlScrollBehavior;
  document.body.style.scrollBehavior = previousBodyScrollBehavior;
}

export function RouteShell({ children }: RouteShellProps) {
  const pathname = usePathname();

  useLayoutEffect(() => {
    resetDocumentScrollState();
    scrollToRouteTop();
  }, [pathname]);

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useEffect(() => {
    if (window.location.hash) return;

    const animationFrame = window.requestAnimationFrame(scrollToRouteTop);
    const shortReset = window.setTimeout(scrollToRouteTop, 50);
    const finalReset = window.setTimeout(scrollToRouteTop, 180);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(shortReset);
      window.clearTimeout(finalReset);
    };
  }, [pathname]);

  useEffect(() => {
    const recoverFromHistoryNavigation = () => {
      resetDocumentScrollState();
      window.requestAnimationFrame(scrollToRouteTop);
      window.setTimeout(scrollToRouteTop, 80);
    };

    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        recoverFromHistoryNavigation();
      }
    };

    window.addEventListener("pageshow", handlePageShow);
    window.addEventListener("popstate", recoverFromHistoryNavigation);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
      window.removeEventListener("popstate", recoverFromHistoryNavigation);
    };
  }, []);

  return <div key={pathname}>{children}</div>;
}
