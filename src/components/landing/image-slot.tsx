import Image from "next/image";
import { cn } from "@/lib/utils";

type ImageSlotProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  label?: string;
};

/** Blank image slot — swap the SVG in /public/images with your real asset. */
export function ImageSlot({
  src,
  alt,
  width,
  height,
  className,
  label,
}: ImageSlotProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-full w-full object-contain"
      />
      {label ? (
        <span className="pointer-events-none absolute inset-x-2 bottom-2 rounded-md bg-white/80 px-2 py-1 text-center text-[10px] text-muted-ink">
          {label}
        </span>
      ) : null}
    </div>
  );
}
