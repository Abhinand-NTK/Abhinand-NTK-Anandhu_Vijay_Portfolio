import React, { useEffect, useState } from "react";

const youtubeVideos = [
    "https://www.youtube.com/embed/nTfQKC6QaSY",
    "https://www.youtube.com/embed/ZOiNTrrGL4Q",
];

const instagramReels = [
    "https://www.instagram.com/reel/C_cv_XrIREw/",
    "https://www.instagram.com/reel/ZOiNTrrGL4Q/",
    "https://www.instagram.com/reel/DR_vOpHD0m8/",
    "https://www.instagram.com/reel/DTKkECvD_eP/",
    "https://www.instagram.com/reel/DFkdk15uUkg/",
    "https://www.instagram.com/reel/DEXcHEGTBl1/",
    "https://www.instagram.com/reel/DNid6H0zfCb/",
    "https://www.instagram.com/reel/C_KxHdqyUbZ/",
    "https://www.instagram.com/reel/DF0AGWVPnSV/",
    "https://www.instagram.com/reel/DPBjROQDw6X/",
    "https://www.instagram.com/reel/DBDMIIuxina/",
    "https://www.instagram.com/reel/DMCU_k2uObk/",
    "https://www.instagram.com/reel/DEXJI9RyAZN/",
];

const InstagramIcon = ({ size = 14 }: { size?: number }) => (
    <svg viewBox="0 0 24 24" style={{ width: size, height: size, fill: "white" }}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
);

const PlayIcon = () => (
    <svg viewBox="0 0 24 24" style={{ width: 32, height: 32, fill: "white" }}>
        <path d="M8 5v14l11-7z" />
    </svg>
);

// Fetch thumbnail from Instagram's public oEmbed API (no token needed for public posts)
async function fetchOembedThumbnail(reelUrl: string): Promise<string | null> {
    try {
        const endpoint = `https://www.instagram.com/oembed/?url=${encodeURIComponent(reelUrl)}&maxwidth=640`;
        const res = await fetch(endpoint);
        if (!res.ok) return null;
        const data = await res.json();
        return data.thumbnail_url || null;
    } catch {
        return null;
    }
}

function InstagramReelCard({ url, index }: { url: string; index: number }) {
    const [hovered, setHovered] = useState(false);
    const [thumbnail, setThumbnail] = useState < string | null > (null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        fetchOembedThumbnail(url).then((thumb) => {
            if (!cancelled) {
                setThumbnail(thumb);
                setLoading(false);
            }
        });
        return () => { cancelled = true; };
    }, [url]);

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: "block",
                textDecoration: "none",
                borderRadius: 14,
                overflow: "hidden",
                background: "#0d0d0d",
                border: `1px solid ${hovered ? "#bc8cff" : "#222"}`,
                boxShadow: hovered
                    ? "0 16px 48px rgba(188,140,255,0.18)"
                    : "0 4px 16px rgba(0,0,0,0.5)",
                transform: hovered ? "translateY(-5px) scale(1.01)" : "translateY(0) scale(1)",
                transition: "all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)",
                cursor: "pointer",
            }}
        >
            {/* Square thumbnail area */}
            <div style={{ position: "relative", width: "100%", paddingTop: "100%", overflow: "hidden" }}>

                {/* Dark gradient base — always visible */}
                <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(135deg, #1a0a2e 0%, #0d0d1a 50%, #0a1220 100%)",
                }} />

                {/* Dot grid pattern */}
                <div style={{
                    position: "absolute", inset: 0,
                    backgroundImage: "radial-gradient(circle, rgba(188,140,255,0.07) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                }} />

                {/* Shimmer while loading */}
                {loading && (
                    <div style={{
                        position: "absolute", inset: 0,
                        background: "linear-gradient(90deg, #111 25%, #1d1d2a 50%, #111 75%)",
                        backgroundSize: "200% 100%",
                        animation: "shimmer 1.6s infinite linear",
                    }} />
                )}

                {/* Actual thumbnail image from oEmbed */}
                {thumbnail && (
                    <img
                        src={thumbnail}
                        alt={`Reel ${index + 1}`}
                        style={{
                            position: "absolute", inset: 0,
                            width: "100%", height: "100%",
                            objectFit: "cover",
                            opacity: hovered ? 0.5 : 0.88,
                            transition: "opacity 0.3s ease",
                        }}
                    />
                )}

                {/* Bottom fade overlay */}
                <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.0) 45%, rgba(0,0,0,0.2) 100%)",
                }} />

                {/* Top-left: index */}
                <div style={{
                    position: "absolute", top: 12, left: 14,
                    fontSize: 11, color: "rgba(255,255,255,0.4)",
                    fontWeight: 700, letterSpacing: "0.1em",
                }}>
                    {String(index + 1).padStart(2, "0")}
                </div>

                {/* Top-right: REEL badge */}
                <div style={{
                    position: "absolute", top: 10, right: 10,
                    display: "flex", alignItems: "center", gap: 5,
                    background: "rgba(0,0,0,0.55)", backdropFilter: "blur(10px)",
                    borderRadius: 20, padding: "4px 10px 4px 8px",
                    border: "1px solid rgba(255,255,255,0.12)",
                }}>
                    <svg viewBox="0 0 24 24" style={{ width: 13, height: 13, fill: "white", opacity: 0.85 }}>
                        <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z" />
                    </svg>
                    <span style={{ fontSize: 10, color: "rgba(255,255,255,0.85)", letterSpacing: "0.1em", fontWeight: 600 }}>
                        REEL
                    </span>
                </div>

                {/* Center play button */}
                <div style={{
                    position: "absolute", inset: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                    <div style={{
                        width: 60, height: 60, borderRadius: "50%",
                        background: hovered ? "rgba(188,140,255,0.85)" : "rgba(0,0,0,0.45)",
                        backdropFilter: "blur(12px)",
                        border: `2px solid ${hovered ? "rgba(188,140,255,1)" : "rgba(255,255,255,0.35)"}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transform: hovered ? "scale(1.15)" : "scale(1)",
                        transition: "all 0.25s ease",
                        boxShadow: hovered ? "0 0 40px rgba(188,140,255,0.55)" : "none",
                    }}>
                        <PlayIcon />
                    </div>
                </div>

                {/* Bottom: View on Instagram */}
                <div style={{
                    position: "absolute", bottom: 12, left: 12, right: 12,
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{
                            width: 26, height: 26, borderRadius: 8, flexShrink: 0,
                            background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                            <InstagramIcon size={13} />
                        </div>
                        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>
                            View on Instagram
                        </span>
                    </div>
                    <div style={{
                        width: 26, height: 26, borderRadius: "50%",
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transform: hovered ? "translateX(3px)" : "translateX(0)",
                        transition: "transform 0.2s ease",
                    }}>
                        <svg viewBox="0 0 24 24" style={{ width: 12, height: 12, fill: "white" }}>
                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
                        </svg>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default function Project() {
    return (
        <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#0d0d0d", color: "#f0ece4", minHeight: "100vh" }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');
        .yt-card { transition: border-color 0.25s, box-shadow 0.25s; }
        .yt-card:hover { border-color: #c8a96e !important; box-shadow: 0 0 32px rgba(200,169,110,0.08); }
        * { box-sizing: border-box; }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>

            <div style={{ padding: "2px 48px 40px" }} />

            <div style={{ padding: "0 48px 80px" }}>

                {/* YouTube */}
                <div style={{ paddingTop: 60 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
                        <span style={{ background: "#161616", border: "1px solid #2a2a2a", borderRadius: 100, padding: "6px 14px", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#c8a96e", fontWeight: 500 }}>
                            ▶ YouTube
                        </span>
                        <div style={{ flex: 1, height: 1, background: "#2a2a2a" }} />
                        <span style={{ fontSize: 11, color: "#7a7570" }}>{youtubeVideos.length} Videos</span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
                        {youtubeVideos.map((src, i) => (
                            <div key={i} className="yt-card" style={{ background: "#161616", border: "1px solid #2a2a2a", borderRadius: 12, overflow: "hidden" }}>
                                <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
                                    <iframe src={src} title={`YouTube Video ${i + 1}`} allow="autoplay; encrypted-media" allowFullScreen
                                        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }} />
                                </div>
                                <div style={{ padding: "14px 18px", display: "flex", alignItems: "center", gap: 10, borderTop: "1px solid #2a2a2a" }}>
                                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff4444" }} />
                                    <span style={{ fontSize: 12, color: "#7a7570" }}>YouTube · Video {String(i + 1).padStart(2, "0")}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Instagram Reels */}
                <div style={{ paddingTop: 60 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
                        <span style={{ background: "#161616", border: "1px solid #2a2a2a", borderRadius: 100, padding: "6px 14px", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#bc8cff", fontWeight: 500 }}>
                            ◈ Instagram Reels
                        </span>
                        <div style={{ flex: 1, height: 1, background: "#2a2a2a" }} />
                        <span style={{ fontSize: 11, color: "#7a7570" }}>{instagramReels.length} Reels</span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
                        {instagramReels.map((url, i) => (
                            <InstagramReelCard key={url} url={url} index={i} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}