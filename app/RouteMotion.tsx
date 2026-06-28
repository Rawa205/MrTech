"use client";

import { useEffect } from "react";

function getTargetId(href: string) {
  if (!href.startsWith("#") || href.length <= 1) {
    return null;
  }

  return decodeURIComponent(href.slice(1));
}

export function RouteMotion() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const scrollDelay = prefersReducedMotion ? 0 : 180;
    const revealDelay = prefersReducedMotion ? 0 : 420;
    const transitionDuration = prefersReducedMotion ? 0 : 980;
    let linkTimer: number | undefined;
    let targetTimer: number | undefined;
    let scrollTimer: number | undefined;
    let revealTimer: number | undefined;
    let transitionTimer: number | undefined;

    function handleClick(event: MouseEvent) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      if (!(event.target instanceof Element)) {
        return;
      }

      const link = event.target.closest<HTMLAnchorElement>('a[href^="#"]');

      if (!link) {
        return;
      }

      const targetId = getTargetId(link.getAttribute("href") ?? "");
      if (!targetId) {
        return;
      }

      const target = document.getElementById(targetId);
      if (!target) {
        return;
      }

      event.preventDefault();

      window.clearTimeout(linkTimer);
      window.clearTimeout(targetTimer);
      window.clearTimeout(scrollTimer);
      window.clearTimeout(revealTimer);
      window.clearTimeout(transitionTimer);

      document.body.classList.remove("route-transitioning");
      link.classList.remove("route-link-clicked");
      target.classList.remove("route-target-active");

      void document.body.offsetWidth;
      void link.offsetWidth;
      void target.offsetWidth;

      document.body.classList.add("route-transitioning");
      link.classList.add("route-link-clicked");

      scrollTimer = window.setTimeout(() => {
        target.scrollIntoView({
          behavior: prefersReducedMotion ? "auto" : "smooth",
          block: "start",
        });
        window.history.pushState(null, "", `#${targetId}`);
      }, scrollDelay);

      revealTimer = window.setTimeout(() => {
        target.classList.add("route-target-active");
      }, revealDelay);

      linkTimer = window.setTimeout(() => {
        link.classList.remove("route-link-clicked");
      }, 620);

      targetTimer = window.setTimeout(() => {
        target.classList.remove("route-target-active");
      }, revealDelay + 1500);

      transitionTimer = window.setTimeout(() => {
        document.body.classList.remove("route-transitioning");
      }, transitionDuration);
    }

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
      window.clearTimeout(linkTimer);
      window.clearTimeout(targetTimer);
      window.clearTimeout(scrollTimer);
      window.clearTimeout(revealTimer);
      window.clearTimeout(transitionTimer);
      document.body.classList.remove("route-transitioning");
    };
  }, []);

  return null;
}
