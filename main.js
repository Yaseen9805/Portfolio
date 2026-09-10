"use strict";

/**
 * Syed Yaseen — Portfolio
 * Handles: footer year, tech marquee, scroll progress/nav state,
 * and the staggered scroll-reveal animation.
 */

const SKILLS = [
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Python",
  "REST APIs",
  "JWT Auth",
  "Tailwind CSS",
  "Next.js",
  "Docker",
  "GitHub Actions",
  "Jest",
  "Git",
  "Figma",
  "Linux",
];

const REVEAL_STAGGER_MS = 90;
const REVEAL_STAGGER_STEPS = 6;
const NAV_SCROLL_THRESHOLD = 24;

function setFooterYear() {
  const yearEl = document.getElementById("yr");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

function buildMarquee() {
  const track = document.getElementById("track");
  if (!track) return;

  // Duplicate the list so the CSS animation (translateX -50%) loops seamlessly.
  const fragment = document.createDocumentFragment();
  [...SKILLS, ...SKILLS].forEach((label) => {
    const item = document.createElement("span");
    item.className = "i";
    item.textContent = label;
    fragment.appendChild(item);

    const dot = document.createElement("i");
    fragment.appendChild(dot);
  });
  track.appendChild(fragment);
}

function initNavProgress() {
  const nav = document.getElementById("nav");
  const bar = document.getElementById("bar");
  if (!nav || !bar) return;

  const updateOnScroll = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    bar.style.width = `${progress}%`;
    nav.classList.toggle("scrolled", window.scrollY > NAV_SCROLL_THRESHOLD);
  };

  updateOnScroll();
  window.addEventListener("scroll", updateOnScroll, { passive: true });
}

function initScrollReveal() {
  const targets = document.querySelectorAll(".reveal");
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const delay = Number(el.dataset.i || 0) * REVEAL_STAGGER_MS;
        setTimeout(() => el.classList.add("vis"), delay);
        observer.unobserve(el);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  targets.forEach((el, i) => {
    el.dataset.i = i % REVEAL_STAGGER_STEPS;
    observer.observe(el);
  });
}

setFooterYear();
buildMarquee();
initNavProgress();
initScrollReveal();
