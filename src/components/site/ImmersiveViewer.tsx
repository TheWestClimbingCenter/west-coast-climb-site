import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface ImmersiveViewerProps {
  images: string[];
  startIndex?: number;
  open: boolean;
  onClose: () => void;
  alt?: string;
}

const AUTOPLAY_MS = 5000;
const RESUME_AFTER_MS = 8000;

export function ImmersiveViewer({ images, startIndex = 0, open, onClose, alt = "" }: ImmersiveViewerProps) {
  const [index, setIndex] = useState(startIndex);
  const [showClose, setShowClose] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pauseAutoplay = useCallback(() => {
    setIsPlaying(false);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setIsPlaying(true), RESUME_AFTER_MS);
  }, []);

  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);

  useEffect(() => {
    if (open) {
      setIndex(startIndex);
      setIsPlaying(true);
    }
  }, [open, startIndex]);

  useEffect(() => {
    if (!open) return;
    setShowClose(false);
    const t = setTimeout(() => setShowClose(true), 600);
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
      else if (e.key === "ArrowRight") { pauseAutoplay(); next(); }
      else if (e.key === "ArrowLeft") { pauseAutoplay(); prev(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, next, prev, onClose, pauseAutoplay]);

  // Autoplay
  useEffect(() => {
    if (!open || !isPlaying || images.length < 2) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [open, isPlaying, images.length, next]);

  useEffect(() => () => { if (resumeTimer.current) clearTimeout(resumeTimer.current); }, []);

  // Preload adjacent
  useEffect(() => {
    if (!open) return;
    [(index + 1) % images.length, (index - 1 + images.length) % images.length].forEach((i) => {
      const img = new Image();
      img.src = images[i];
    });
  }, [index, images, open]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] bg-[#0a0a0a] animate-fade-in"
      style={{ animationDuration: "500ms", animationTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
      onClick={onClose}
      onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; pauseAutoplay(); }}
      onTouchEnd={(e) => {
        if (touchStartX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
        touchStartX.current = null;
      }}
    >
      <button
        aria-label="Previous image"
        onClick={(e) => { e.stopPropagation(); pauseAutoplay(); prev(); }}
        className="absolute left-0 top-0 h-full w-1/2 z-10 cursor-w-resize focus:outline-none"
      />
      <button
        aria-label="Next image"
        onClick={(e) => { e.stopPropagation(); pauseAutoplay(); next(); }}
        className="absolute right-0 top-0 h-full w-1/2 z-10 cursor-e-resize focus:outline-none"
      />

      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${alt} ${i + 1}`}
            className="absolute max-h-full max-w-full object-contain"
            style={{
              opacity: i === index ? 1 : 0,
              transform: i === index ? "scale(1)" : "scale(1.02)",
              transition: "opacity 900ms cubic-bezier(0.4, 0, 0.2, 1), transform 1200ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            draggable={false}
          />
        ))}
      </div>

      <button
        aria-label="Close"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className={`absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 ${
          showClose ? "opacity-100" : "opacity-0"
        }`}
        style={{ transition: "opacity 500ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms ease" }}
      >
        <X className="w-5 h-5" />
      </button>
    </div>,
    document.body,
  );
}
