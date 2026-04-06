import React from "react";

type TimelineEvent = {
  customer: string;
  title: string;
  description: string;
  url: string;
};

type CompanyEvent = {
  companyName: string;
  years: {
    year: string;
    customers: TimelineEvent[];
  }[];
};

const companyEvents: CompanyEvent[] = [
  {
    companyName: "Red Ant",
    years: [
      {
        year: "2026",
        customers: [
          { customer: "Red Ant", title: "Lead Editor", description: "Temporary Position", url: "" },
        ],
      },
    ],
  },
  {
    companyName: "ITV Studios Norge",
    years: [
      {
        year: "2026",
        customers: [
          { customer: "The Voice", title: "Season 11", description: "Editor for Blind auditions, Duel and Knockouts.", url: "" },
        ],
      },
      {
        year: "2025",
        customers: [
          { customer: "I Kissed a Boy", title: "Season 1", description: "Editor", url: "" },
          { customer: "The Voice", title: "Season 10", description: "Editor for Blind auditions, Duels, Knockouts and Live.", url: "" },
        ],
      },
    ],
  },
  {
    companyName: "Mastiff",
    years: [
      {
        year: "2025",
        customers: [
          { customer: "Vokteren", title: "Season 2", description: "Storyline editor", url: "" },
        ],
      },
    ],
  },
  {
    companyName: "Red Ant",
    years: [
      {
        year: "2025",
        customers: [
          { customer: "Red Ant", title: "Commercial Work", description: "Freelance Editor", url: "" },
          { customer: "Historical Museum", title: "Exhibition Film", description: "Freelance Editor", url: "" },
          { customer: "Norwegian Public Roads Administration", title: "Commercial Work", description: "Freelance Editor", url: "" },
          { customer: "Atea", title: "Commercial Work", description: "Freelance Editor", url: "" },
          { customer: "Radio Player", title: "Commercial Work", description: "Freelance Editor", url: "" },
        ],
      },
      {
        year: "2024",
        customers: [
          { customer: "Norwegian Directorate for Higher Education and Skills", title: "Commercial Work", description: "Freelance Editor", url: "" },
          { customer: "Norwegian Public Roads Administration", title: "Commercial Work", description: "Freelance Editor", url: "" },
          { customer: "Red Ant", title: "Freelance Editor", description: "Freelance Editor on commercial work and corporate videos.", url: "" },
        ],
      },
    ],
  },
  {
    companyName: "Warner Music Norway",
    years: [
      {
        year: "2024",
        customers: [
          { customer: "Yasir Moa", title: "Kron", description: "Promotional content for EP release. Editor, director and photography.", url: "https://www.instagram.com/reel/C2LQ7cMqvOY/?igsh=MWZubDVqMGY2Mm9teg==" },
        ],
      },
    ],
  },
  {
    companyName: "ITV Studios Norge",
    years: [
      {
        year: "2024",
        customers: [
          { customer: "The Voice", title: "Season 9", description: "Editor for Blind auditions, Duel and Knockouts.", url: "https://www.youtube.com/watch?v=rZp_xhay120" },
        ],
      },
    ],
  },
  {
    companyName: "Odeon Kino",
    years: [
      {
        year: "2023",
        customers: [
          { customer: "Odeon Kino", title: "Mission Impossible 7 Premiere Promotion", description: "Editor for a social media promotion.", url: "https://www.instagram.com/reel/CupD1y1g6GQ/?igsh=cHVmY2U5N2MxMm9o" },
        ],
      },
    ],
  },
  {
    companyName: "Skråblikk AS",
    years: [
      {
        year: "2023",
        customers: [
          { customer: "Evelon", title: "Employer Branding Film", description: "Editor and on-set work.", url: "" },
          { customer: "CGI", title: "Social Media Advertisements", description: "Meteorological Institute, CGI's Talent Program, Osloskolen and senior interviews.", url: "" },
          { customer: "Daikin", title: "Testimonial Films & Heat Pump Advertisements", description: "Editor and on-set work.", url: "https://www.facebook.com/watch/?v=3039536746350029" },
          { customer: "Fornybar Norge", title: "PTK 2023 Conference Films", description: "Editor and on-set work.", url: "" },
          { customer: "Experis", title: "Advertisement for Stand at a Conference", description: "Editor.", url: "" },
          { customer: "Metos", title: "Recruitment Films", description: "Editor.", url: "" },
          { customer: "Nortura", title: "Recruitment Films", description: "Editor.", url: "" },
          { customer: "Norisma", title: "TV & Social Media Advertisements", description: "Editor for Betakaroten Premium, Coffee Zero, Tea Zero, and Premium White.", url: "https://premiumwhite.no/bruksanvisning" },
          { customer: "Workshop Bemanning", title: "Recruitment Films", description: "Editor.", url: "" },
        ],
      },
      {
        year: "2022",
        customers: [
          { customer: "CGI", title: "Annual Tour 2023 Webinar & Seminar", description: "Edited presentation with annual report and in-between seminar segments.", url: "" },
          { customer: "Daikin", title: "Heat Pump Advertisements", description: "Studio shoot with Otto Robsahm and Mads Østberg, plus additional spots with Stig André Berge.", url: "https://www.facebook.com/DaikinNorway/videos/595452595497698" },
          { customer: "ManpowerGroup", title: "Social Media Advertisements & Event Films", description: "Editor for Manpower, Experis, Talent Solution, and Jefferson Wells.", url: "https://www.facebook.com/watch/?v=938925483937305" },
          { customer: "Elektroskandia Nordic Fiber", title: "Social Media Advertisements", description: "Editor.", url: "" },
          { customer: "Elkem Salten", title: "Advertisements", description: "Editor.", url: "" },
          { customer: "Møller Logistikk", title: "Recruitment Films", description: "Editor and on-set work.", url: "" },
          { customer: "Norisma", title: "TV & Social Media Advertisements", description: "Editor for Betakaroten Premium, Coffee Zero, Tea Zero, and Premium White.", url: "" },
          { customer: "Postnord Strålfors", title: "Multiple Films for a Conference", description: "Editor and on-set work.", url: "" },
          { customer: "Skynova", title: "Stock Footage Advertisement with Voice Over", description: "Editor.", url: "" },
          { customer: "Svea", title: "Ad-campaign with Magnus Devold", description: "Editor and on-set work.", url: "https://www.youtube.com/watch?v=8HU6CRSDlnU&feature=youtu.be" },
        ],
      },
    ],
  },
  {
    companyName: "ITV Studios Norge",
    years: [
      {
        year: "2021–2022",
        customers: [
          { customer: "The Voice", title: "Season 7", description: "Editor for Blind auditions, Duel and Knockouts.", url: "https://youtu.be/X3ruKFDmChY?si=b4eULSUZihkOyBEl" },
        ],
      },
    ],
  },
  {
    companyName: "Feelgood TV",
    years: [
      {
        year: "2021",
        customers: [
          { customer: "Gjett hvem", title: "Season 1", description: "Rough cut editor.", url: "https://www.youtube.com/watch?v=R3MyspIdVro&feature=youtu.be" },
        ],
      },
    ],
  },
  {
    companyName: "Freelance & Various Assignments",
    years: [
      {
        year: "2016–2021",
        customers: [
          { customer: "Hjem til jul", title: "Production Assistant", description: "", url: "https://www.youtube.com/watch?v=MB-onpdR56E&feature=youtu.be" },
          { customer: "Férdi Film", title: "Internship", description: "Editor and on-set work.", url: "" },
          { customer: "Høyskolen Kristiania", title: "Student Assistant", description: "Promo films, technical assistant, editing assistant.", url: "" },
          { customer: "Gullruten 2021", title: "Award for Best TV-Entertainment", description: "Jury Member.", url: "" },
          { customer: "NSKI", title: "Short Film", description: "Editor.", url: "" },
          { customer: "Vevet", title: "Music Video", description: "Producer, director and editor.", url: "" },
          { customer: "Høyskolen Kristiania 2018", title: "School Projects", description: "Fittefaen (Bachelor Short Film), Glemt, Sølvrygg, Valkyrien (TV Series).", url: "" },
          { customer: "Folkehøyskole 2016–2017", title: "School Projects", description: "Wayho (Music Video), Various Humor Sketches, Various Fiction Projects.", url: "" },
        ],
      },
    ],
  },
];

export default function Timeline() {
  return (
    <main
      id="timeline"
      className="min-h-screen"
      style={{ background: "#0e0e0e", color: "#f5f0e8", fontFamily: "'DM Mono', monospace" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&display=swap');
        .tl-hero-title { font-family: 'DM Serif Display', serif; font-style: italic; }
        .tl-customer   { font-family: 'DM Serif Display', serif; font-style: italic; }
        .tl-link { color: #c9a96e; text-decoration: none; border-bottom: 1px solid transparent; transition: border-color .2s; }
        .tl-link:hover { border-bottom-color: #c9a96e; }
        .tl-event-dot { width: 7px; height: 7px; border-radius: 50%; background: #1a1a1a; border: 1.5px solid #444; flex-shrink: 0; margin-top: 6px; }
      `}</style>

      <div style={{ maxWidth: 780, margin: "0 auto", padding: "60px 28px 100px" }}>

        {/* Hero */}
        <div style={{ marginBottom: 72 }}>
          <p style={{ fontSize: 11, letterSpacing: "0.2em", color: "#c9a96e", textTransform: "uppercase", marginBottom: 12 }}>
            Work History
          </p>
          <h1 className="tl-hero-title" style={{ fontSize: "clamp(52px, 10vw, 80px)", lineHeight: 0.92, color: "#f5f0e8" }}>
            Portfolio
          </h1>
          <p style={{ fontSize: 11, letterSpacing: "0.12em", color: "#4a4a4a", marginTop: 18, textTransform: "uppercase" }}>
            Film & Television Editor — Oslo, Norway
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {companyEvents.map((company, ci) => (
            <div key={ci}>
              {/* Company label row */}
              <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "28px 0 14px" }}>
                <div style={{
                  width: 16, height: 16, borderRadius: "50%",
                  border: "1px solid #c9a96e", background: "#0e0e0e",
                  flexShrink: 0, zIndex: 2,
                }} />
                <span style={{
                  fontSize: 10, letterSpacing: "0.18em",
                  textTransform: "uppercase", color: "#c9a96e",
                }}>
                  {company.companyName}
                </span>
              </div>

              {company.years.map((yg, yi) => (
                <div key={yi} style={{ display: "flex", alignItems: "flex-start" }}>
                  {/* Year column */}
                  <div style={{ width: 88, flexShrink: 0, paddingTop: 20, paddingRight: 20 }}>
                    <span style={{
                      display: "block", textAlign: "right",
                      fontSize: 10, letterSpacing: "0.07em", color: "#3a3a3a",
                    }}>
                      {yg.year}
                    </span>
                  </div>

                  {/* Events column */}
                  <div style={{
                    flex: 1,
                    borderLeft: "1px solid #1e1e1e",
                    paddingLeft: 28,
                  }}>
                    {yg.customers.map((ev, ei) => (
                      <div
                        key={ei}
                        style={{
                          padding: "18px 0",
                          borderBottom: ei < yg.customers.length - 1 ? "1px solid #181818" : "none",
                          display: "flex",
                          gap: 14,
                          alignItems: "flex-start",
                        }}
                      >
                        <div className="tl-event-dot" />
                        <div>
                          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "6px 8px", marginBottom: 3 }}>
                            <span className="tl-customer" style={{ fontSize: 18, color: "#f5f0e8" }}>
                              {ev.customer}
                            </span>
                            <span style={{ fontSize: 11, color: "#2e2e2e" }}>—</span>
                            <span style={{ fontSize: 11, color: "#555", letterSpacing: "0.04em" }}>
                              {ev.url ? (
                                <a href={ev.url} className="tl-link" target="_blank" rel="noopener noreferrer">
                                  {ev.title} ↗
                                </a>
                              ) : ev.title}
                            </span>
                          </div>
                          {ev.description && (
                            <p style={{ fontSize: 11, color: "#383838", lineHeight: 1.65, letterSpacing: "0.02em" }}>
                              {ev.description}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}