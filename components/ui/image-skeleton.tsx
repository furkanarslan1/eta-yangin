"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Props = Omit<ImageProps, "placeholder" | "onLoad"> & {
  containerClassName?: string;
};

export function ImageWithSkeleton({
  alt,
  containerClassName,
  className,
  ...props
}: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {!loaded && (
        <div className="absolute inset-0 bg-neutral-200 animate-pulse" />
      )}
      <Image
        {...props}
        alt={alt}
        className={cn(
          "transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
