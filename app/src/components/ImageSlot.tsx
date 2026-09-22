import { useEffect, useRef, useState } from 'react';

const STORAGE_PREFIX = 'wine-barn-pos:image:';

function readStored(id: string): string | null {
  try {
    return localStorage.getItem(STORAGE_PREFIX + id);
  } catch {
    return null;
  }
}

function writeStored(id: string, dataUrl: string | null) {
  try {
    if (dataUrl) localStorage.setItem(STORAGE_PREFIX + id, dataUrl);
    else localStorage.removeItem(STORAGE_PREFIX + id);
  } catch {
    // storage unavailable (private mode, quota) — image just won't persist
  }
}

interface ImageSlotProps {
  id: string;
  label: string;
  height: number;
  radius?: number;
}

export default function ImageSlot({ id, label, height, radius = 10 }: ImageSlotProps) {
  const [src, setSrc] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const dragDepth = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setSrc(readStored(id));
  }, [id]);

  const applyFile = (file: File | undefined | null) => {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      setSrc(dataUrl);
      writeStored(id, dataUrl);
    };
    reader.readAsDataURL(file);
  };

  const clear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSrc(null);
    writeStored(id, null);
  };

  return (
    <div
      className="wb-image-slot"
      style={{ height, borderRadius: radius, borderColor: dragging ? 'var(--champagne)' : undefined }}
      onClick={() => inputRef.current?.click()}
      onDragEnter={(e) => {
        e.preventDefault();
        dragDepth.current += 1;
        setDragging(true);
      }}
      onDragOver={(e) => {
        e.preventDefault();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
      }}
      onDragLeave={() => {
        dragDepth.current = Math.max(0, dragDepth.current - 1);
        if (dragDepth.current === 0) setDragging(false);
      }}
      onDrop={(e) => {
        e.preventDefault();
        dragDepth.current = 0;
        setDragging(false);
        applyFile(e.dataTransfer.files?.[0]);
      }}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={(e) => applyFile(e.target.files?.[0])}
      />
      {src ? (
        <>
          <img src={src} alt={label} className="wb-image-slot-img" style={{ borderRadius: radius }} />
          <button type="button" className="wb-image-slot-clear" onClick={clear} aria-label="Remove photo">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </>
      ) : (
        <div className="wb-image-slot-empty">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B0A79C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2.5" />
            <circle cx="9" cy="10.5" r="1.6" />
            <path d="m4 17 5-5 4 4 3-3 4 4" />
          </svg>
          <span>{label}</span>
        </div>
      )}
    </div>
  );
}
