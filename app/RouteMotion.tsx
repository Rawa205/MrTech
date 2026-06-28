"use client";

import { useEffect } from "react";

function getTargetId(href: string) {
  if (!href.startsWith("#") || href.length <= 1) {
    return null;
  }

  return decodeURIComponent(href.slice(1));
}

const revealSelector = [
  ".section-heading",
  ".highlights span",
  ".service-card",
  ".process-card",
  ".work-card",
  ".about-copy",
  ".about-list > div",
  ".contact-grid",
].join(", ");

export function RouteMotion() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let linkTimer: number | undefined;
    let targetTimer: number | undefined;
    let fallbackRevealTimer: number | undefined;
    let progressTimer: number | undefined;
    let scrollEndTarget: HTMLElement | undefined;

    function clearRouteTimers() {
      window.clearTimeout(linkTimer);
      window.clearTimeout(targetTimer);
      window.clearTimeout(fallbackRevealTimer);
      window.clearTimeout(progressTimer);
    }

    function finishTargetReveal(target: HTMLElement) {
      target.classList.remove("route-target-active");
      target
        .querySelectorAll<HTMLElement>(revealSelector)
        .forEach((item) => item.classList.add("is-visible"));

      void target.offsetWidth;
      target.classList.add("route-target-active");

      document.body.classList.remove("route-navigating");

      targetTimer = window.setTimeout(() => {
        target.classList.remove("route-target-active");
      }, 1800);
    }

    function handleScrollEnd() {
      if (!scrollEndTarget) {
        return;
      }

      window.clearTimeout(fallbackRevealTimer);
      finishTargetReveal(scrollEndTarget);
      scrollEndTarget = undefined;
    }

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

      clearRouteTimers();
      window.removeEventListener("scrollend", handleScrollEnd);

      link.classList.remove("route-link-clicked");
      target.classList.remove("route-target-active");
      document.body.classList.remove("route-navigating");

      void link.offsetWidth;
      void target.offsetWidth;
      void document.body.offsetWidth;

      link.classList.add("route-link-clicked");

      const distance = Math.abs(target.getBoundingClientRect().top);
      const fallbackRevealDelay = prefersReducedMotion
        ? 0
        : Math.min(1450, Math.max(720, distance * 0.55));

      if (!prefersReducedMotion) {
        document.body.classList.add("route-navigating");
      }

      target.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
      window.history.pushState(null, "", `#${targetId}`);

      if (prefersReducedMotion) {
        finishTargetReveal(target);
      } else {
        scrollEndTarget = target;
        window.addEventListener("scrollend", handleScrollEnd, { once: true });

        fallbackRevealTimer = window.setTimeout(() => {
          window.removeEventListener("scrollend", handleScrollEnd);
          finishTargetReveal(target);
          scrollEndTarget = undefined;
        }, fallbackRevealDelay);

        progressTimer = window.setTimeout(() => {
          document.body.classList.remove("route-navigating");
        }, fallbackRevealDelay + 520);
      }

      linkTimer = window.setTimeout(() => {
        link.classList.remove("route-link-clicked");
      }, 700);
    }

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("scrollend", handleScrollEnd);
      clearRouteTimers();
      document.body.classList.remove("route-navigating");
    };
  }, []);

  return null;
}
