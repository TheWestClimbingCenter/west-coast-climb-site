import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface ImmersiveViewerProps {
  images: string[];
  startIndex?: number;
  open: boolean;
  onClose: () => void;
  alt?: string;
}

export function ImmersiveViewer({ images, startIndex = 0, open, onClose, alt = "" }: ImmersiveViewerProps) {
  const [index, setIndex] = useState(startIndex);
  const [showClose, setShowClose] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (open) setIndex(startIndex);
  }, [open, startIndex]);

  useEffect(() => {
    if (!open) return;
    setShowClose(false);
    const t = setTimeout(() => setShowClose(true), 500);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
      else if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, images.length, onClose]);

  // Preload adjacent
  useEffect(() => {
    if (!open) return;
    [(index + 1) % images.length, (index - 1 + images.length) % images.length].forEach((i) => {
      const img = new Image();
      img.src = images[i];
    });
  }, [index, images, open]);

  if (!open || typeof document === "undefined") return null;

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] bg-[#0a0a0a] animate-fade-in"
      onClick={onClose}
      onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStartX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
        touchStartX.current = null;
      }}
    >
      {/* Click zones */}
      <button
        aria-label="Previous image"
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-0 top-0 h-full w-1/2 z-10 cursor-w-resize focus:outline-none"
      />
      <button
        aria-label="Next image"
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="absolute right-0 top-0 h-full w-1/2 z-10 cursor-e-resize focus:outline-none"
      />

      {/* Images stacked with crossfade */}
      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${alt} ${i + 1}`}
            className="absolute max-h-full max-w-full object-contain transition-all duration-500 ease-out"
            style={{
              opacity: i === index ? 1 : 0,
              transform: i === index ? "scale(1)" : "scale(0.98)",
            }}
            draggable={false}
          />
        ))}
      </div>

      <button
        aria-label="Close"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className={`absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 ${
          showClose ? "opacity-100" : "opacity-0"
        }`}
      >
        <X className="w-5 h-5" />
      </button>
    </div>,
    document.body,
  );
}
