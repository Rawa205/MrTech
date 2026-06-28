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
    let linkTimer: number | undefined;
    let targetTimer: number | undefined;

    function handleClick(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );

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

      window.clearTimeout(linkTimer);
      window.clearTimeout(targetTimer);

      link.classList.remove("route-link-clicked");
      target.classList.remove("route-target-active");

      void link.offsetWidth;
      void target.offsetWidth;

      link.classList.add("route-link-clicked");
      target.classList.add("route-target-active");

      linkTimer = window.setTimeout(() => {
        link.classList.remove("route-link-clicked");
      }, 620);

      targetTimer = window.setTimeout(() => {
        target.classList.remove("route-target-active");
      }, 1400);
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
