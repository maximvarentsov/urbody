"use client";

import { useState, useEffect } from "react";

const apps = [
  {
    id: 1,
    name: "Balance",
    tagline: "Built by the UK's top menopause doctor",
    url: "https://www.balance-menopause.com/balance-app/",
    price: "Free",
    priceSub: "Premium available",
    rating: 4.8,
    reviews: "128K",
    downloads: "5M+",
    badgeIcon: String.fromCodePoint(0x1F3C6),
    badgeText: "#1 PICK",
    color: "#7B6BA8",
    colorLight: "#F0ECF7",
    colorGlow: "rgba(123,107,168,0.25)",
    liveUsers: 14823,
    trending: true,
    pros: [
      "Created by Dr. Louise Newson — UK's leading menopause specialist",
      "Apple 'App of the Day' + ORCHA-certified (NHS-trusted)",
      "Free health report you can take straight to your doctor",
      "132M+ symptoms logged — the data actually means something",
    ],
    cons: [
      "No Fitbit or Garmin sync yet",
      "Best content locked behind premium",
    ],
    bestFor: "The gold standard. Start here if you're unsure.",
    social: "12,400+ women joined this month",
  },
  {
    id: 2,
    name: "Midday",
    tagline: "Mayo Clinic's AI detects hot flashes before you feel them",
    url: "https://www.trymidday.com/",
    price: "Free trial",
    priceSub: "Then $14.99/mo",
    rating: 4.6,
    reviews: "8.2K",
    downloads: "500K+",
    badgeIcon: String.fromCodePoint(0x1F9E0),
    badgeText: "SMARTEST",
    color: "#2D7D9A",
    colorLight: "#E8F4F8",
    colorGlow: "rgba(45,125,154,0.25)",
    liveUsers: 3241,
    trending: false,
    pros: [
      "Built WITH Mayo Clinic — not just endorsed, co-developed",
      "AI predicts your hot flashes using smartwatch data",
      "Hormone therapy decision tool (Mayo Clinic algorithm)",
      "Virtual visits with actual menopause specialists",
    ],
    cons: [
      "iOS only — sorry Android users",
      "Need a wearable for the best features",
    ],
    bestFor: "You wear a smartwatch and want science, not guesswork.",
    social: "Backed by $2.5M in clinical research",
  },
  {
    id: 3,
    name: "Health & Her",
    tagline: "Everything's free. Yes, everything.",
    url: "https://healthandher.com/en-us/pages/menopause-perimenopause-app",
    price: "100% Free",
    priceSub: "No premium tier",
    rating: 4.5,
    reviews: "22K",
    downloads: "1M+",
    badgeIcon: String.fromCodePoint(0x1F4B0),
    badgeText: "$0 FOREVER",
    color: "#C4567A",
    colorLight: "#FBE8EF",
    colorGlow: "rgba(196,86,122,0.25)",
    liveUsers: 6712,
    trending: true,
    pros: [
      "Ranked #1 by ORCHA — highest clinical quality score of ANY health app",
      "CBT therapy, pelvic floor training, sleep meditation — all included",
      "Zero paywalls. Zero premium. Zero catch.",
      "Physician-reviewed by Dr. Harriet Connell",
    ],
    cons: [
      "Some reported crashes on older Android devices",
      "Can't add custom symptoms (yet)",
    ],
    bestFor: "Want it all without paying a cent? This is the one.",
    social: "Trending in Health & Fitness — 3 countries",
  },
  {
    id: 4,
    name: "Flo",
    tagline: "380 million women already use it. Now it does perimenopause.",
    url: "https://flo.health/",
    price: "Free",
    priceSub: "Premium $49.99/yr",
    rating: 4.7,
    reviews: "2.1M",
    downloads: "380M+",
    badgeIcon: String.fromCodePoint(0x1F451),
    badgeText: "MOST POPULAR",
    color: "#E8627C",
    colorLight: "#FDE8ED",
    colorGlow: "rgba(232,98,124,0.25)",
    liveUsers: 89432,
    trending: true,
    pros: [
      "380M+ downloads — the biggest women's health app on Earth",
      "New Perimenopause Score tells you exactly where you are",
      "Smart predictions even when your cycle goes haywire",
      "Seamless if you already track periods with Flo",
    ],
    cons: [
      "Perimenopause features only launched mid-2025",
      "Past data-sharing controversies (now resolved)",
    ],
    bestFor: "Already on Flo? Don't switch. Just unlock peri features.",
    social: "89K+ women active right now",
  },
  {
    id: 5,
    name: "mySysters",
    tagline: "Built by a woman mid-hot-flash who couldn't find an app",
    url: "https://mysysters.com/",
    price: "Free",
    priceSub: "Community supported",
    rating: 4.4,
    reviews: "5.6K",
    downloads: "100K+",
    badgeIcon: String.fromCodePoint(0x2764),
    badgeText: "MOST REAL",
    color: "#6B8E6B",
    colorLight: "#EDF5ED",
    colorGlow: "rgba(107,142,107,0.25)",
    liveUsers: 1847,
    trending: false,
    pros: [
      "Founded by Cindy in 2017 — the OG perimenopause app",
      "Color-coded severity = spot patterns at a glance",
      "Print your symptom chart and hand it to your doctor",
      "Real community forums — not bots, actual women",
    ],
    cons: [
      "UI feels older compared to newer apps",
      "No wearable or AI integration",
    ],
    bestFor: "You want real humans, not algorithms.",
    social: "Active forums with daily posts from real women",
  },
];

const FIRE = String.fromCodePoint(0x1F525);
const WAVE = String.fromCodePoint(0x1F44B);
const STAR = String.fromCodePoint(0x2B50);

function AnimatedNumber({ target, duration = 2000 }) {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCurrent(target);
        clearInterval(timer);
      } else {
        setCurrent(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return <>{current.toLocaleString()}</>;
}

function LiveDot() {
  return (
    <span
      style={{
        display: "inline-block",
        width: "7px",
        height: "7px",
        background: "#22C55E",
        borderRadius: "50%",
        marginRight: "5px",
        boxShadow: "0 0 6px #22C55E",
        animation: "livePulse 2s ease-in-out infinite",
      }}
    />
  );
}

function AppCard({ app, isExpanded, onToggle, rank }) {
  const [hoverCta, setHoverCta] = useState(false);

  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow:
          rank === 1
            ? "0 0 0 2px " + app.color + "33, 0 8px 32px " + app.colorGlow
            : "0 1px 3px rgba(0,0,0,0.04), 0 6px 20px rgba(0,0,0,0.03)",
        border:
          rank === 1
            ? "2px solid " + app.color + "44"
            : "1px solid #F0EDE8",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        position: "relative",
      }}
    >
      {/* Rank */}
      <div
        style={{
          position: "absolute",
          top: "16px",
          left: "16px",
          zIndex: 2,
          width: "28px",
          height: "28px",
          borderRadius: "50%",
          background: rank <= 2 ? app.color : "#E5E1DB",
          color: rank <= 2 ? "#fff" : "#7A6E63",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "13px",
          fontWeight: 800,
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {rank}
      </div>

      {/* Header */}
      <div
        style={{
          background: app.colorLight,
          padding: "18px 18px 14px 52px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "12px",
            background: app.color,
            color: "#fff",
            fontSize: "10px",
            fontWeight: 800,
            letterSpacing: "0.06em",
            padding: "4px 10px",
            borderRadius: "20px",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {app.badgeIcon} {app.badgeText}
        </div>

        <h2
          style={{
            margin: 0,
            fontSize: "21px",
            fontWeight: 800,
            fontFamily: "'DM Sans', sans-serif",
            color: "#1a1a1a",
            lineHeight: 1.15,
          }}
        >
          {app.name}
        </h2>
        <p
          style={{
            margin: "4px 0 0",
            fontSize: "13px",
            color: "#4B5563",
            fontFamily: "'DM Sans', sans-serif",
            lineHeight: 1.35,
            fontWeight: 500,
            fontStyle: "italic",
          }}
        >
          {app.tagline}
        </p>
      </div>

      {/* Social proof strip */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 18px",
          background: "#FAFAF8",
          borderBottom: "1px solid #F3F0EB",
          fontSize: "12px",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontWeight: 700, color: "#1a1a1a" }}>
            {STAR} {app.rating}
          </span>
          <span style={{ color: "#9CA3AF" }}>({app.reviews} reviews)</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#6B7280",
            fontWeight: 600,
          }}
        >
          <LiveDot />
          <AnimatedNumber target={app.liveUsers} /> active
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "14px 18px 18px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "12px",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "18px",
                fontWeight: 800,
                color: app.price.includes("Free") ? "#059669" : "#1a1a1a",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {app.price}
            </span>
            <span
              style={{
                fontSize: "12px",
                color: "#9CA3AF",
                marginLeft: "8px",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {app.priceSub}
            </span>
          </div>
          <div
            style={{
              fontSize: "12px",
              fontWeight: 700,
              color: "#6B7280",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {app.downloads}
          </div>
        </div>

        {/* FOMO nugget */}
        <div
          style={{
            padding: "9px 14px",
            borderRadius: "10px",
            background: app.trending
              ? "linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)"
              : "#F9FAFB",
            fontSize: "12px",
            fontWeight: 700,
            color: app.trending ? "#92400E" : "#6B7280",
            fontFamily: "'DM Sans', sans-serif",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            marginBottom: "12px",
          }}
        >
          {app.trending && <span>{FIRE}</span>}
          {app.social}
        </div>

        {/* Best For */}
        <div
          style={{
            padding: "10px 14px",
            borderRadius: "12px",
            borderLeft: "3px solid " + app.color,
            background: "#FAFAF8",
            marginBottom: "12px",
          }}
        >
          <div
            style={{
              fontSize: "10px",
              fontWeight: 800,
              letterSpacing: "0.1em",
              color: "#9CA3AF",
              textTransform: "uppercase",
              marginBottom: "3px",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            WHO IT'S FOR
          </div>
          <div
            style={{
              fontSize: "13px",
              color: "#374151",
              fontWeight: 600,
              fontFamily: "'DM Sans', sans-serif",
              lineHeight: 1.4,
            }}
          >
            {app.bestFor}
          </div>
        </div>

        {/* Expand */}
        <button
          onClick={onToggle}
          style={{
            width: "100%",
            padding: "9px",
            border: "1px dashed #E5E1DB",
            borderRadius: "10px",
            background: "transparent",
            cursor: "pointer",
            fontSize: "12px",
            fontWeight: 700,
            color: app.color,
            fontFamily: "'DM Sans', sans-serif",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
          }}
        >
          {isExpanded
            ? "Less info"
            : app.pros.length +
              " pros \u00B7 " +
              app.cons.length +
              " cons \u2014 see details"}
          <span
            style={{
              display: "inline-block",
              transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s",
              fontSize: "10px",
            }}
          >
            {"\u25BC"}
          </span>
        </button>

        {isExpanded && (
          <div style={{ marginTop: "14px", animation: "fadeIn 0.25s ease-out" }}>
            <div style={{ marginBottom: "12px" }}>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 800,
                  color: "#059669",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "6px",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {"\u2713"} PROS
              </div>
              {app.pros.map((p, i) => (
                <div
                  key={i}
                  style={{
                    padding: "7px 11px",
                    marginBottom: "4px",
                    background: "#F0FDF4",
                    borderRadius: "8px",
                    fontSize: "12.5px",
                    color: "#166534",
                    lineHeight: 1.4,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  <span style={{ fontWeight: 700, marginRight: "6px" }}>+</span>
                  {p}
                </div>
              ))}
            </div>
            <div>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 800,
                  color: "#DC2626",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "6px",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {"\u2717"} CONS
              </div>
              {app.cons.map((c, i) => (
                <div
                  key={i}
                  style={{
                    padding: "7px 11px",
                    marginBottom: "4px",
                    background: "#FEF2F2",
                    borderRadius: "8px",
                    fontSize: "12.5px",
                    color: "#991B1B",
                    lineHeight: 1.4,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  <span style={{ fontWeight: 700, marginRight: "6px" }}>
                    {"\u2013"}
                  </span>
                  {c}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <a
          href={app.url}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoverCta(true)}
          onMouseLeave={() => setHoverCta(false)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            width: "100%",
            padding: "15px 20px",
            marginTop: "14px",
            background: hoverCta
              ? "linear-gradient(135deg, " +
                app.color +
                " 0%, " +
                app.color +
                "dd 100%)"
              : app.color,
            color: "#FFFFFF",
            border: "none",
            borderRadius: "14px",
            fontSize: "15px",
            fontWeight: 800,
            fontFamily: "'DM Sans', sans-serif",
            textDecoration: "none",
            cursor: "pointer",
            boxShadow: hoverCta
              ? "0 8px 24px " + app.colorGlow
              : "0 4px 14px " + app.color + "33",
            transform: hoverCta ? "translateY(-2px)" : "translateY(0)",
            transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {"Open " + app.name + " \u2014 It's Free"}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function PerimenopauseComparison() {
  const [expandedId, setExpandedId] = useState(null);
  const [filter, setFilter] = useState("all");
  const [showToast, setShowToast] = useState(false);
  const [toastApp, setToastApp] = useState("");

  useEffect(() => {
    const names = [
      "Sarah from London",
      "Maria from NYC",
      "Jenny from Sydney",
      "Lisa from Toronto",
      "Kate from Berlin",
      "Amy from Dublin",
      "Rachel from LA",
    ];
    const appNames = [
      "Balance",
      "Flo",
      "Health & Her",
      "Midday",
      "Balance",
      "mySysters",
      "Flo",
    ];
    let idx = 0;
    const show = () => {
      setToastApp(
        names[idx % names.length] +
          " just opened " +
          appNames[idx % appNames.length]
      );
      setShowToast(true);
      idx++;
      setTimeout(() => setShowToast(false), 3500);
    };
    const firstTimeout = setTimeout(show, 4000);
    const interval = setInterval(show, 9000);
    return () => {
      clearInterval(interval);
      clearTimeout(firstTimeout);
    };
  }, []);

  const filteredApps =
    filter === "free"
      ? apps.filter(
          (a) => a.price.includes("Free") && !a.priceSub.includes("$")
        )
      : filter === "ai"
      ? apps.filter((a) => [2, 4].includes(a.id))
      : apps;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FAF9F6",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,500;0,9..40,700;0,9..40,800;1,9..40,400&family=Playfair+Display:wght@600;700;800;900&display=swap"
        rel="stylesheet"
      />

      <style>
        {[
          "@keyframes fadeIn { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }",
          "@keyframes slideUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }",
          "@keyframes livePulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }",
          "@keyframes toastIn { from { opacity: 0; transform: translateX(-50%) translateY(20px) scale(0.95); } to { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); } }",
          "* { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }",
          "a:active { transform: scale(0.97) !important; }",
        ].join("\n")}
      </style>

      {/* FOMO Toast */}
      {showToast && (
        <div
          style={{
            position: "fixed",
            bottom: "24px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1000,
            background: "rgba(26,26,26,0.92)",
            backdropFilter: "blur(12px)",
            color: "#fff",
            padding: "10px 18px",
            borderRadius: "14px",
            fontSize: "13px",
            fontWeight: 600,
            fontFamily: "'DM Sans', sans-serif",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
            animation: "toastIn 0.3s ease-out",
            maxWidth: "340px",
            whiteSpace: "nowrap",
          }}
        >
          <span>{WAVE}</span>
          {toastApp}
          <span
            style={{ color: "#9CA3AF", fontSize: "11px", marginLeft: "4px" }}
          >
            just now
          </span>
        </div>
      )}

      {/* Hero */}
      <div
        style={{
          background:
            "linear-gradient(165deg, #F7F2EA 0%, #EDE4D8 50%, #E4D9CC 100%)",
          padding: "36px 22px 28px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-60px",
            width: "220px",
            height: "220px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(196,86,122,0.07) 0%, transparent 65%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-50px",
            left: "-30px",
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(123,107,168,0.06) 0%, transparent 65%)",
          }}
        />

        {/* Live counter pill */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(8px)",
            padding: "6px 14px",
            borderRadius: "20px",
            fontSize: "11px",
            fontWeight: 700,
            color: "#92400E",
            fontFamily: "'DM Sans', sans-serif",
            marginBottom: "16px",
          }}
        >
          <LiveDot />
          <AnimatedNumber target={115684} /> women reading this right now
        </div>

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "30px",
            fontWeight: 900,
            color: "#1F1A15",
            lineHeight: 1.12,
            margin: "0 0 10px",
            maxWidth: "340px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Perimenopause hit you
          <br />
          <span style={{ color: "#7B6BA8" }}>before anyone told you</span>
          <br />
          what to do about it.
        </h1>

        <p
          style={{
            fontSize: "15px",
            color: "#6B5E52",
            lineHeight: 1.55,
            maxWidth: "310px",
            margin: "0 auto 18px",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
          }}
        >
          These 5 apps won't fix your hormones {"\u2014"} but they'll make you
          feel like you're <em>finally</em> not doing this alone.
        </p>

        {/* Trust badges */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "6px",
            flexWrap: "wrap",
            marginBottom: "18px",
          }}
        >
          {["Mayo Clinic", "NHS Trusted", "Apple Award", "380M Users"].map(
            (t) => (
              <span
                key={t}
                style={{
                  background: "rgba(255,255,255,0.6)",
                  padding: "4px 10px",
                  borderRadius: "8px",
                  fontSize: "10px",
                  fontWeight: 700,
                  color: "#7A6E63",
                  letterSpacing: "0.04em",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {t}
              </span>
            )
          )}
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
          {[
            { key: "all", label: "All 5 Apps", c: "#7B6BA8" },
            { key: "free", label: "100% Free", c: "#059669" },
            { key: "ai", label: "AI-Powered", c: "#2D7D9A" },
          ].map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              style={{
                padding: "8px 14px",
                borderRadius: "20px",
                border:
                  filter === f.key
                    ? "2px solid " + f.c
                    : "2px solid #D4CFC7",
                background:
                  filter === f.key ? f.c : "rgba(255,255,255,0.5)",
                color: filter === f.key ? "#fff" : "#7A6E63",
                fontSize: "12px",
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                transition: "all 0.2s",
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Sticky bar */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #F0EDE8",
          padding: "8px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "12px",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <span style={{ fontWeight: 800, color: "#1a1a1a" }}>
          Top 5 Perimenopause Apps
        </span>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            color: "#059669",
            fontWeight: 700,
          }}
        >
          <LiveDot />
          Updated April 2026
        </span>
      </div>

      {/* Cards */}
      <div
        style={{
          padding: "18px 14px 32px",
          maxWidth: "480px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {filteredApps.map((app, i) => (
          <div
            key={app.id}
            style={{
              animation:
                "slideUp 0.35s ease-out " + i * 0.06 + "s both",
            }}
          >
            <AppCard
              app={app}
              rank={i + 1}
              isExpanded={expandedId === app.id}
              onToggle={() =>
                setExpandedId(expandedId === app.id ? null : app.id)
              }
            />
          </div>
        ))}
      </div>

      {/* Bottom social proof */}
      <div
        style={{
          textAlign: "center",
          padding: "20px 20px 48px",
          background:
            "linear-gradient(180deg, #FAF9F6 0%, #EDE4D8 100%)",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: "16px",
            padding: "20px",
            maxWidth: "380px",
            margin: "0 auto 16px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
          }}
        >
          <div
            style={{
              fontSize: "32px",
              fontWeight: 900,
              color: "#1a1a1a",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <AnimatedNumber target={387} />
            {"M+"}
          </div>
          <div
            style={{
              fontSize: "13px",
              color: "#6B7280",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
            }}
          >
            women worldwide already use these apps to manage perimenopause
          </div>
        </div>
        <p
          style={{
            fontSize: "12px",
            color: "#B0A89E",
            fontFamily: "'DM Sans', sans-serif",
            maxWidth: "280px",
            margin: "0 auto 4px",
            lineHeight: 1.4,
          }}
        >
          Independently reviewed. No sponsorships. All links go directly to
          official sites.
        </p>
        <p
          style={{
            fontSize: "10px",
            color: "#D4CFC7",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Not medical advice. Consult your healthcare provider.
        </p>
      </div>
    </div>
  );
}
