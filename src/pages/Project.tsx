import React, { useState } from "react";
import { InstagramEmbed, YouTubeEmbed } from "react-social-media-embed";
import { useSpring, animated } from "react-spring";

/* =========================
   DATA & THEMES
========================= */
const THEMES = {
  youtube: { color: "#c8a96e", label: "YouTube" },
  instagram: { color: "#bc8cff", label: "Instagram" }
};

const youtubeVideos = [
  "https://www.youtube.com/watch?v=nTfQKC6QaSY",
  "https://www.youtube.com/watch?v=ZOiNTrrGL4Q",
];

const instagramReels = [
  "https://www.instagram.com/reel/C_cv_XrIREw/",
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
  "https://www.instagram.com/reel/DTYEYQtDcYy/",
];

/* =========================
   VIDEO MODAL COMPONENT
========================= */
function VideoModal({ url, type, onClose }: { url: string; type: 'youtube' | 'instagram'; onClose: () => void }) {
  const [rotation, setRotation] = useState(0);
  const theme = THEMES[type];
  const isRotated = rotation % 180 !== 0;

  // Function to format YT URL (Crucial for <iframe>)
  const getYouTubeEmbed = (link: string) => {
    const id = link.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${id}?autoplay=1`;
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.98)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10000,
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          // --- FIX HERE: Increased width during rotation ---
          width: type === 'instagram'
            ? (isRotated ? "500px" : "500px")  // Increased from 50vh to 90vh
            : (isRotated ? "500px" : "450px"),
            
          maxWidth: "1205vw",
          transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}
      >
        {/* Controls */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '15px' }}>
          <button
            onClick={() => setRotation(r => r + 90)}
            style={{ cursor: 'pointer', background: '#333', color: '#fff', border: '1px solid #555', borderRadius: '20px', padding: '6px 15px' }}
          >
            Rotate ↻
          </button>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '30px', cursor: 'pointer' }}>×</button>
        </div>

        {/* Video Box */}
        <div style={{
          width: '100%',
          backgroundColor: '#000',
          borderRadius: '16px',
          overflow: 'hidden',
          // Use aspectRatio for YouTube to maintain the 16:9 shape
          aspectRatio: type === 'youtube' ? '16 / 9' : 'unset',
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.5s ease-in-out",
          boxShadow: `0 0 50px ${theme.color}33`,
        }}>
          {type === "youtube" ? (
            <iframe
              src={getYouTubeEmbed(url)}
              style={{ width: '100%', height: '100%', border: 'none' }}
              allowFullScreen
            />
          ) : (
            <div style={{ width: '100%', maxHeight: '75vh', overflowY: 'auto' }}>
              <InstagramEmbed url={url} width="100%" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* =========================
   MAIN PROJECT
========================= */
export default function Project() {
  const [selectedVideo, setSelectedVideo] = useState<{ url: string, type: 'youtube' | 'instagram' } | null>(null);

  return (
    <div style={{ background: "#0d0d0d", minHeight: "100vh", padding: "40px" }}>
      {/* YouTube Section */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
        {youtubeVideos.map((url, i) => (
          <div
            key={i}
            onClick={() => setSelectedVideo({ url, type: 'youtube' })}
            style={{ cursor: 'pointer', border: '1px solid #222', borderRadius: '12px', padding: '10px' }}
          >
            <YouTubeEmbed url={url} width="100%" height={350} />
            <p style={{ color: THEMES.youtube.color, fontSize: '12px', marginTop: '10px' }}>Open Detail View</p>
          </div>
        ))}
      </div>

      {/* Instagram Section (Simplified for example) */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "20px", marginTop: "40px" }}>
        {instagramReels.map((url, i) => (
          <div
            key={i}
            onClick={() => setSelectedVideo({ url, type: 'instagram' })}
            style={{ cursor: 'pointer', border: '1px solid #222', borderRadius: '12px', overflow: 'hidden' }}
          >
            <div style={{ height: '600px', overflow: 'hidden' }}><InstagramEmbed url={url} width="100%" /></div>
            <p style={{ color: THEMES.instagram.color, fontSize: '12px', padding: '10px' }}>View Reel</p>
          </div>
        ))}
      </div>

      {/* MODAL RENDER */}
      {selectedVideo && (
        <VideoModal
          url={selectedVideo.url}
          type={selectedVideo.type}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
}