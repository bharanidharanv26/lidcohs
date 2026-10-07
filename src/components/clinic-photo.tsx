"use client";

import { useState } from "react";

export function ClinicPhoto({ src, alt, icon, caption, variant = "split-media", priority = false, id }: {
  src: string; alt: string; icon: string; caption: string; variant?: "split-media" | "hero-photo" | "gallery-item"; priority?: boolean; id?: string;
}) {
  const [failed, setFailed] = useState(false);
  const Tag = variant === "gallery-item" ? "figure" : "div";
  return <Tag id={id} className={`${variant}${failed ? " ph-fallback" : ""}`}>
    {failed ? <div><div className="big">{icon}</div><strong>{caption}</strong><br /><small style={{ color: "var(--muted)" }}>Add photo: <code>{src.replace(/^\//, "")}</code></small></div>
      : <><img src={src} alt={alt} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : undefined}
        ref={(image) => { if (image?.complete && image.naturalWidth === 0) setFailed(true); }}
        onError={() => setFailed(true)} />
        {variant === "gallery-item" && <figcaption className="gallery-cap">{caption}</figcaption>}
      </>}
  </Tag>;
}
