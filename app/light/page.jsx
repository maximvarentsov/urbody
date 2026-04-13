"use client";

import { useState } from "react";

const apps = [
  {
    id: 1,
    name: "Balance",
    tagline: "The #1 Hormone Health App",
    founder: "Dr. Louise Newson",
    url: "https://www.balance-menopause.com/balance-app/",
    price: "Free + Premium",
    priceDetail: "Core features free, premium ~$9.99/mo",
    rating: 4.8,
    downloads: "5M+",
    badge: "Apple App of the Day",
    color: "#7B6BA8",
    colorLight: "#F0ECF7",
    pros: [
      "Created by leading menopause specialist Dr. Louise Newson",
      "ORCHA-certified & NHS-trusted digital health accreditation",
      "Free health report generator for doctor appointments",
      "132M+ hormone symptoms logged — massive dataset",
      "Evidence-based content, medically reviewed",
    ],
    cons: [
      "Limited wearable integrations (no Fitbit/Garmin sync)",
      "Calendar view lacks cross-app data correlation",
      "Premium content gated behind subscription",
    ],
    bestFor: "Women wanting trusted, doctor-created menopause education & symptom tracking",
    highlight: "BEST OVERALL",
  },
  {
    id: 2,
    name: "Flo",
    tagline: "Cycle Tracking Meets Perimenopause",
    founder: "Flo Health",
    url: "https://flo.health/",
    price: "Free + Premium",
    priceDetail: "Basic free, Premium ~$49.99/year",
    rating: 4.7,
    downloads: "380M+",
    badge: "Most Downloaded",
    color: "#E8627C",
    colorLight: "#FDE8ED",
    pros: [
      "380M+ downloads — largest women's health community",
      "Dedicated Perimenopause Score assessment tool (2025)",
      "Cycle Irregularity Tracking with range-based predictions",
      "Menopause Timeline showing your transition stage",
      "Seamless transition from fertility/period tracking",
    ],
    cons: [
      "Perimenopause features are relatively new (mid-2025)",
      "Premium required for personalized perimenopause insights",
      "Past privacy controversies (data sharing with third parties)",
    ],
    bestFor: "Existing Flo users or women wanting one app for cycle + perimenopause",
    highlight: "LARGEST COMMUNITY",
  },
  {
    id: 3,
    name: "Midday",
    tagline: "AI-Powered Menopause Management",
    founder: "Lisa Health × Mayo Clinic",
    url: "https://www.trymidday.com/",
    price: "Free + Premium",
    priceDetail: "Free trial, then quarterly/annual subscription",
    rating: 4.6,
    downloads: "500K+",
    badge: "Mayo Clinic Backed",
    color: "#2D7D9A",
    colorLight: "#E8F4F8",
    pros: [
      "Built with Mayo Clinic — gold-standard medical partnership",
      "AI algorithms detect & predict hot flashes via wearables",
      "Hormone therapy decision-support tool (Mayo Clinic algorithm)",
      "Telehealth access to menopause specialists",
      "Fitbit & smartwatch integration for biometric insights",
    ],
    cons: [
      "iOS only — no Android app available",
      "Premium features required for best AI experience",
      "Smaller user community compared to Balance or Flo",
    ],
    bestFor: "Tech-savvy women wanting AI-driven, data-heavy menopause management",
    highlight: "BEST AI & TECH",
  },
  {
    id: 4,
    name: "Health & Her",
    tagline: "Expert-Led Hormonal Health Support",
    founder: "Dr. Harriet Connell (reviewer)",
    url: "https://healthandher.com/en-us/pages/menopause-perimenopause-app",
    price: "Free",
    priceDetail: "100% free app with full toolkit access",
    rating: 4.5,
    downloads: "1M+",
    badge: "#1 ORCHA Rated (86%)",
    color: "#C4567A",
    colorLight: "#FBE8EF",
    pros: [
      "Ranked #1 by ORCHA — highest clinical quality score",
      "Completely free — no paywalls or premium tiers",
      "Built-in CBT exercises & pelvic floor training",
      "Sleep meditation & muscle relaxation audio included",
      "Hydration reminders & daily habit-building system",
    ],
    cons: [
      "Reported crashes & lagging issues on some devices",
      "Limited custom symptom tracking (can't add your own)",
      "Short cycle tracking struggles with irregular periods",
    ],
    bestFor: "Women wanting a free, clinically-validated toolkit with CBT & lifestyle tools",
    highlight: "BEST FREE APP",
  },
  
  {
    id: 5,
    name: "mySysters",
    tagline: "Community-First Symptom Tracking",
    founder: "Cindy Moy Carr",
    url: "https://mysysters.com/",
    price: "Free",
    priceDetail: "Free to download and use",
    rating: 4.4,
    downloads: "100K+",
    badge: "Pioneer (est. 2017)",
    color: "#6B8E6B",
    colorLight: "#EDF5ED",
    pros: [
      "Founded by a woman in perimenopause — authentic mission",
      "Color-coded symptom severity shows patterns at a glance",
      "Printable symptom chart for doctor appointments",
      "Active discussion forums & community support groups",
      "OBGYN-recommended for objective symptom tracking",
    ],
    cons: [
      "Smaller team — slower feature development cycle",
      "UI feels dated compared to newer competitors",
      "No wearable integration or AI-powered insights",
    ],
    bestFor: "Women wanting peer support & straightforward symptom tracking",
    highlight: "BEST COMMUNITY",
  },
];

function StarRating({ rating }) {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.3;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < full ? "#F59E0B" : i === full && hasHalf ? "url(#half)" : "#E5E7EB"}>
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="50%" stopColor="#E5E7EB" />
            </linearGradient>
          </defs>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
      <span style={{ marginLeft: "6px", fontSize: "14px", fontWeight: 700, color: "#374151" }}>{rating}</span>
    </div>
  );
}

function AppCard({ app, isExpanded, onToggle }) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)",
        border: "1px solid #F3F0EB",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: isExpanded ? "scale(1.01)" : "scale(1)",
      }}
    >
      {/* Header */}
      <div style={{ background: app.colorLight, padding: "20px 20px 16px", position: "relative" }}>
        <div style={{
          position: "absolute", top: "12px", right: "12px",
          background: app.color, color: "#fff",
          fontSize: "10px", fontWeight: 800, letterSpacing: "0.08em",
          padding: "4px 10px", borderRadius: "20px",
          fontFamily: "'DM Sans', sans-serif",
        }}>
          {app.highlight}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "12px" }}>
          <div style={{
            width: "52px", height: "52px", borderRadius: "14px",
            background: app.color, display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontSize: "22px", fontWeight: 800,
            fontFamily: "'DM Sans', sans-serif",
            boxShadow: `0 4px 12px ${app.color}44`,
          }}>
            {app.name[0]}
          </div>
          <div>
            <h2 style={{
              margin: 0, fontSize: "20px", fontWeight: 800,
              fontFamily: "'DM Sans', sans-serif", color: "#1a1a1a",
              lineHeight: 1.2,
            }}>
              {app.name}
            </h2>
            <p style={{
              margin: "2px 0 0", fontSize: "13px", color: "#6B7280",
              fontFamily: "'DM Sans', sans-serif",
            }}>
              {app.tagline}
            </p>
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
          <StarRating rating={app.rating} />
          <span style={{
            fontSize: "12px", color: "#6B7280", fontFamily: "'DM Sans', sans-serif",
            padding: "2px 8px", background: "#fff", borderRadius: "8px",
          }}>
            {app.downloads} downloads
          </span>
        </div>
      </div>

      {/* Quick Info */}
      <div style={{ padding: "16px 20px" }}>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          marginBottom: "12px",
        }}>
          <div>
            <div style={{ fontSize: "11px", color: "#9CA3AF", fontWeight: 700, letterSpacing: "0.06em", fontFamily: "'DM Sans', sans-serif", textTransform: "uppercase" }}>
              Pricing
            </div>
            <div style={{ fontSize: "15px", fontWeight: 700, color: "#1a1a1a", fontFamily: "'DM Sans', sans-serif" }}>
              {app.price}
            </div>
            <div style={{ fontSize: "12px", color: "#6B7280", fontFamily: "'DM Sans', sans-serif" }}>
              {app.priceDetail}
            </div>
          </div>
          <div style={{
            background: app.colorLight, padding: "4px 10px", borderRadius: "8px",
            fontSize: "11px", fontWeight: 700, color: app.color,
            fontFamily: "'DM Sans', sans-serif",
          }}>
            {app.badge}
          </div>
        </div>

        <div style={{
          padding: "10px 14px", background: "#FAFAF8", borderRadius: "12px",
          marginBottom: "14px", borderLeft: `3px solid ${app.color}`,
        }}>
          <div style={{ fontSize: "11px", color: "#9CA3AF", fontWeight: 700, letterSpacing: "0.06em", fontFamily: "'DM Sans', sans-serif", textTransform: "uppercase", marginBottom: "2px" }}>
            Best For
          </div>
          <div style={{ fontSize: "13px", color: "#374151", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.4 }}>
            {app.bestFor}
          </div>
        </div>

        {/* Expand/Collapse */}
        <button
          onClick={onToggle}
          style={{
            width: "100%", padding: "10px", border: "1px dashed #E5E1DB",
            borderRadius: "12px", background: "transparent", cursor: "pointer",
            fontSize: "13px", fontWeight: 700, color: app.color,
            fontFamily: "'DM Sans', sans-serif",
            display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
            transition: "all 0.2s",
          }}
        >
          {isExpanded ? "Hide Details" : "Show Pros & Cons"}
          <span style={{
            display: "inline-block",
            transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s",
          }}>▼</span>
        </button>

        {/* Expanded Details */}
        {isExpanded && (
          <div style={{
            marginTop: "16px",
            animation: "fadeIn 0.3s ease-out",
          }}>
            {/* Pros */}
            <div style={{ marginBottom: "16px" }}>
              <div style={{
                fontSize: "12px", fontWeight: 800, color: "#059669",
                fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.06em",
                textTransform: "uppercase", marginBottom: "8px",
                display: "flex", alignItems: "center", gap: "6px",
              }}>
                <span style={{ fontSize: "16px" }}>✓</span> PROS
              </div>
              {app.pros.map((pro, i) => (
                <div key={i} style={{
                  padding: "8px 12px", marginBottom: "6px",
                  background: "#F0FDF4", borderRadius: "10px",
                  fontSize: "13px", color: "#166534",
                  fontFamily: "'DM Sans', sans-serif", lineHeight: 1.4,
                  display: "flex", alignItems: "flex-start", gap: "8px",
                }}>
                  <span style={{ color: "#059669", fontWeight: 700, flexShrink: 0, marginTop: "1px" }}>+</span>
                  {pro}
                </div>
              ))}
            </div>

            {/* Cons */}
            <div style={{ marginBottom: "16px" }}>
              <div style={{
                fontSize: "12px", fontWeight: 800, color: "#DC2626",
                fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.06em",
                textTransform: "uppercase", marginBottom: "8px",
                display: "flex", alignItems: "center", gap: "6px",
              }}>
                <span style={{ fontSize: "16px" }}>✗</span> CONS
              </div>
              {app.cons.map((con, i) => (
                <div key={i} style={{
                  padding: "8px 12px", marginBottom: "6px",
                  background: "#FEF2F2", borderRadius: "10px",
                  fontSize: "13px", color: "#991B1B",
                  fontFamily: "'DM Sans', sans-serif", lineHeight: 1.4,
                  display: "flex", alignItems: "flex-start", gap: "8px",
                }}>
                  <span style={{ color: "#DC2626", fontWeight: 700, flexShrink: 0, marginTop: "1px" }}>–</span>
                  {con}
                </div>
              ))}
            </div>

            <div style={{
              fontSize: "12px", color: "#9CA3AF",
              fontFamily: "'DM Sans', sans-serif", textAlign: "center",
              marginBottom: "4px",
            }}>
              by {app.founder}
            </div>
          </div>
        )}

        {/* CTA Button — Max CTR */}
        <a
          href={app.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            width: "100%",
            padding: "14px 20px",
            marginTop: "14px",
            background: app.color,
            color: "#FFFFFF",
            border: "none",
            borderRadius: "14px",
            fontSize: "15px",
            fontWeight: 800,
            fontFamily: "'DM Sans', sans-serif",
            textDecoration: "none",
            cursor: "pointer",
            boxShadow: `0 4px 14px ${app.color}44`,
            letterSpacing: "0.02em",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = `0 6px 20px ${app.color}66`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = `0 4px 14px ${app.color}44`;
          }}
        >
          Try {app.name} Free
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
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

  const filteredApps = filter === "free"
    ? apps.filter(a => a.price === "Free")
    : filter === "ai"
    ? apps.filter(a => [2, 4].includes(a.id))
    : apps;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#FAF9F6",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,500;0,9..40,700;0,9..40,800;1,9..40,400&family=Playfair+Display:wght@600;700;800&display=swap" rel="stylesheet" />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        * { box-sizing: border-box; }
        a:active { transform: scale(0.97) !important; }
      `}</style>

      {/* Hero Header */}
      <div style={{
        background: "linear-gradient(160deg, #F5F0E8 0%, #EDE4D8 40%, #E8DFD4 100%)",
        padding: "40px 20px 32px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "-60px", right: "-40px",
          width: "200px", height: "200px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(196,86,122,0.08) 0%, transparent 70%)",
        }} />
        <div style={{
          position: "absolute", bottom: "-30px", left: "-20px",
          width: "140px", height: "140px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(123,107,168,0.08) 0%, transparent 70%)",
        }} />

        <div style={{
          fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em",
          color: "#9B8B7A", textTransform: "uppercase", marginBottom: "10px",
          fontFamily: "'DM Sans', sans-serif",
        }}>
          2026 COMPARISON GUIDE
        </div>

        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "32px", fontWeight: 800,
          color: "#2D2420", lineHeight: 1.15,
          margin: "0 0 12px",
          maxWidth: "340px", marginLeft: "auto", marginRight: "auto",
        }}>
          Top 5 Women Apps
        </h1>

        <p style={{
          fontSize: "15px", color: "#7A6E63", lineHeight: 1.5,
          maxWidth: "320px", margin: "0 auto 20px",
          fontFamily: "'DM Sans', sans-serif",
        }}>
          Evidence-based picks to track symptoms, find support & take control of your health journey
        </p>

        {/* Filter Pills */}
        <div style={{
          display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap",
        }}>
          {[
            { key: "all", label: "All Apps" },
            { key: "free", label: "Free Only" },
            { key: "ai", label: "AI-Powered" },
          ].map(f => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              style={{
                padding: "8px 16px", borderRadius: "20px",
                border: filter === f.key ? "2px solid #7B6BA8" : "2px solid #D4CFC7",
                background: filter === f.key ? "#7B6BA8" : "transparent",
                color: filter === f.key ? "#fff" : "#7A6E63",
                fontSize: "13px", fontWeight: 700, cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                transition: "all 0.2s",
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div style={{
        display: "flex", justifyContent: "center", gap: "24px",
        padding: "16px 20px",
        background: "#FFFFFF",
        borderBottom: "1px solid #F0EDE8",
      }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "18px", fontWeight: 800, color: "#2D2420", fontFamily: "'DM Sans', sans-serif" }}>5</div>
          <div style={{ fontSize: "10px", color: "#9CA3AF", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>Apps Reviewed</div>
        </div>
        <div style={{ width: "1px", background: "#F0EDE8" }} />
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "18px", fontWeight: 800, color: "#2D2420", fontFamily: "'DM Sans', sans-serif" }}>386M+</div>
          <div style={{ fontSize: "10px", color: "#9CA3AF", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>Total Downloads</div>
        </div>
        <div style={{ width: "1px", background: "#F0EDE8" }} />
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "18px", fontWeight: 800, color: "#2D2420", fontFamily: "'DM Sans', sans-serif" }}>2 Free</div>
          <div style={{ fontSize: "10px", color: "#9CA3AF", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>No Paywall</div>
        </div>
      </div>

      {/* Cards */}
      <div style={{
        padding: "20px 16px 40px",
        maxWidth: "480px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "18px",
      }}>
        {filteredApps.map((app, i) => (
          <div key={app.id} style={{ animation: `slideUp 0.4s ease-out ${i * 0.08}s both` }}>
            <AppCard
              app={app}
              isExpanded={expandedId === app.id}
              onToggle={() => setExpandedId(expandedId === app.id ? null : app.id)}
            />
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div style={{
        textAlign: "center",
        padding: "24px 20px 48px",
        background: "linear-gradient(180deg, #FAF9F6 0%, #F0EDE8 100%)",
      }}>
        <p style={{
          fontSize: "13px", color: "#9B8B7A", fontFamily: "'DM Sans', sans-serif",
          maxWidth: "300px", margin: "0 auto 8px", lineHeight: 1.5,
        }}>
          All ratings & features verified April 2026. Tap any app to visit their official site.
        </p>
        <p style={{
          fontSize: "11px", color: "#C4BDB3", fontFamily: "'DM Sans', sans-serif",
        }}>
          Not medical advice. Consult your healthcare provider.
        </p>
      </div>
    </div>
  );
}
