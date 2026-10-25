"use client";

import Image from "next/image";
import { useState } from "react";

// Optimised image (next/image). If the image fails to load, a branded
// ajrak-pattern placeholder is shown instead so the layout never breaks.
export default function ImageBox({
  src,
  alt,
  className = "",
  label,
  sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw",
  priority = false,
  fill = false,
}) {
  const [failed, setFailed] = useState(!src);
  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`ajrak-pattern flex items-center justify-center bg-maroon-50 text-center text-xs font-medium text-maroon-700/70 ${className}`}
      >
        {label || alt}
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      sizes={sizes}
      fill={fill}
      priority={priority}
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}
