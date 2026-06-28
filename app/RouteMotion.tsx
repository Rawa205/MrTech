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
    let linkTimer: number | undefined;
    let targetTimer: number | undefined;

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

      link.classList.remove("route-link-clicked");
      target.classList.remove("route-target-active");

      void link.offsetWidth;
      void target.offsetWidth;

      link.classList.add("route-link-clicked");
      target.classList.add("route-target-active");

      target.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
      window.history.pushState(null, "", `#${targetId}`);

      linkTimer = window.setTimeout(() => {
        link.classList.remove("route-link-clicked");
      }, 520);

      targetTimer = window.setTimeout(() => {
        target.classList.remove("route-target-active");
      }, 920);
    }

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
      window.clearTimeout(linkTimer);
      window.clearTimeout(targetTimer);
    };
  }, []);

  return null;
}
