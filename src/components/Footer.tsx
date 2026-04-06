import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const email = "anthusgs@gmail.com";
  const phone = "85476 50461";
  const whatsapp = "918547650461";

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.borderColor = "#c8a96e";
    e.currentTarget.style.color = "#c8a96e";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.borderColor = "#2a2a2a";
    e.currentTarget.style.color = "#7a7570";
  };

  const iconButtonStyle: React.CSSProperties = {
    width: 36,
    height: 36,
    borderRadius: "50%",
    border: "1px solid #2a2a2a",
    background: "#161616",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#7a7570",
    textDecoration: "none",
    transition: "all 0.2s ease",
  };

  return (
    <footer
      style={{
        background: "#0d0d0d",
        borderTop: "1px solid #2a2a2a",
        padding: "40px 48px",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        {/* LEFT - ALL ICONS */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {/* Email */}
          <a
            href={`mailto:${email}`}
            style={iconButtonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={iconButtonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          {/* Phone */}
          <a
            href={`tel:${phone}`}
            style={iconButtonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FontAwesomeIcon icon={faPhone} />
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            style={iconButtonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>

          {/* Location (non-clickable) */}
          <div style={iconButtonStyle}>
            <FontAwesomeIcon icon={faLocationDot} />
          </div>
        </div>

        {/* RIGHT - TEXT INFO */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 6,
            color: "#7a7570",
            fontSize: 14,
          }}
        >
          <span>Kerala, India</span>
          <span>{phone}</span>
          <span>{email}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;