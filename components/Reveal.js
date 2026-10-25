"use client";

import useReveal from "../hooks/useReveal.js";

// Scroll-triggered animation built only from Tailwind transition utilities.
const hidden = {
  up: "opacity-0 translate-y-8",
  left: "opacity-0 -translate-x-8",
  right: "opacity-0 translate-x-8",
  zoom: "opacity-0 scale-95",
};

export default function Reveal({ children, direction = "up", delay = 0, className = "", as: Tag = "div" }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? "opacity-100 translate-x-0 translate-y-0 scale-100" : hidden[direction]
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
