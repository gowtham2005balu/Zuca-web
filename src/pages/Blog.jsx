import { useState } from "react";
import { Zap } from "lucide-react";

const W = "#ffffff";
const P2 = "#a78bfa";

const TOPIC_TAGS = ["Makeup", "Skincare", "Hair Care", "Salon", "Nail Care", "Bridal Beauty", "Beauty Treatments", "Wellness"];

const TRENDING = [
  { id: 1, tag: "Makeup", color: "#2d5a1b", title: "10 Makeup Trends You'll See Everywhere", meta: "8 min · 12.6K views" },
  { id: 2, tag: "Skincare", color: "#1a3a5c", title: "The Complete Morning & Night Routine", meta: "7 min · 10.9K views" },
  { id: 3, tag: "Hair Care", color: "#1a4a3a", title: "Professional Hair Care Secrets", meta: "6 min · 9.8K views" },
  { id: 4, tag: "Salon", color: "#3a1a5c", title: "How to Choose the Perfect Salon", meta: "5 min · 8.4K views" },
  { id: 5, tag: "Nail Care", color: "#3a3a1a", title: "Nail Art Trends Taking Over in 2026", meta: "6 min · 9.1K views" },
];

const ARTICLES = [
  {
    bg: "linear-gradient(135deg, #4a1a8a 0%, #6a3aaa 100%)",
    label: "Makeup Trends",
    tag: "Makeup", tagColor: "#4a90d9",
    title: "10 Makeup Trends You'll See Everywhere This Year",
    desc: "From natural glowing skin to bold eye looks, explore the makeup styles defining this year's beauty scene.",
    author: "Emily Carter", date: "June 12 · 8 min", saves: "12.6K",
  },
  {
    bg: "linear-gradient(135deg, #1a7a5a 0%, #2aaa7a 100%)",
    label: "Skincare Essentials",
    tag: "Skincare", tagColor: "#2aaa7a",
    title: "The Complete Morning & Night Skincare Routine",
    desc: "Learn the essential steps for healthy, radiant skin using dermatologist-recommended practices.",
    author: "Olivia Brown", date: "June 10 · 7 min", saves: "10.9K",
  },
  {
    bg: "linear-gradient(135deg, #c04a10 0%, #e06a20 100%)",
    label: "Healthy Hair",
    tag: "Hair Care", tagColor: "#e06a20",
    title: "Professional Hair Care Secrets for Healthy Hair",
    desc: "Expert tips to reduce damage, improve shine, and maintain strong, beautiful hair.",
    author: "Jessica Miller", date: "June 8 · 6 min", saves: "9.8K",
  },
  {
    bg: "linear-gradient(135deg, #1a3a5c 0%, #2a5a8c 100%)",
    label: "Salon Guide",
    tag: "Salon", tagColor: "#e06a20",
    title: "How to Choose the Perfect Salon for Every Beauty Service",
    desc: "Know what to look for before booking your next haircut, facial, manicure, or spa treatment.",
    author: "Rachel Green", date: "June 5 · 5 min", saves: "8.4K",
  },
  {
    bg: "linear-gradient(135deg, #8a7a10 0%, #c0aa20 100%)",
    label: "Nail Art",
    tag: "Nail Care", tagColor: "#c0aa20",
    title: "Nail Art Trends That Are Taking Over in 2026",
    desc: "Discover elegant, minimalist, and luxury nail designs loved by beauty professionals.",
    author: "Mia Johnson", date: "June 3 · 6 min", saves: "9.1K",
  },
  {
    bg: "linear-gradient(135deg, #6a1a8a 0%, #c040c0 100%)",
    label: "Bridal Looks",
    tag: "Bridal Beauty", tagColor: "#a040d0",
    title: "Bridal Makeup Tips for a Long-Lasting Glow",
    desc: "Professional makeup artists share techniques for achieving flawless bridal looks that last all day.",
    author: "Emma Wilson", date: "June 1 · 8 min", saves: "11.3K",
  },
  {
    bg: "linear-gradient(135deg, #4a1a8a 0%, #e06a20 100%)",
    label: "Salon Treatments",
    tag: "Beauty Treatments", tagColor: "#e06a20",
    title: "Popular Salon Treatments Worth Trying",
    desc: "Explore hydrafacials, keratin treatments, hair spas, lash lifts, and other beauty services growing in popularity.",
    author: "Sophia Adams", date: "May 29 · 7 min", saves: "8.7K",
  },
  {
    bg: "linear-gradient(135deg, #1a7a5a 0%, #4a90d9 100%)",
    label: "Self-Care",
    tag: "Wellness", tagColor: "#4a90d9",
    title: "Self-Care Rituals That Support Healthy Skin & Hair",
    desc: "Simple daily habits that improve your overall beauty and wellness naturally.",
    author: "Natalie Brooks", date: "May 27 · 5 min", saves: "7.9K",
  }
];

const TagBadge = ({ text, color }) => (
  <span style={{
    background: color + "22",
    color: color,
    border: `1px solid ${color}44`,
    borderRadius: 4,
    padding: "2px 8px",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: 0.3,
  }}>{text}</span>
);

export default function Blog({ setCurrentPage }) {
  const [activeSubTab, setActiveSubTab] = useState(0);

  return (
    <div style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", background: "#f5f6fa", minHeight: "100vh", color: "#1a1a2e" }}>
      {/* HERO */}
      <div style={{
        background: "linear-gradient(135deg, #0d0d2b 0%, #1a1060 40%, #2a1a80 70%, #1a0d40 100%)",
        paddingTop: 160,
        paddingBottom: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: 32, minHeight: 280,
        position: "relative", overflow: "hidden",
      }} className="flex-col md:flex-row px-4 md:px-12 lg:px-[100px]">
        {/* Background circles */}
        <div style={{ position: "absolute", top: -60, right: 300, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, #6a3aff33, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -80, left: 200, width: 250, height: 250, borderRadius: "50%", background: "radial-gradient(circle, #3a1aff22, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 480, zIndex: 1 }}>
          <div style={{ display: "inline-block", background: "#ffffff18", border: "1px solid #ffffff30", borderRadius: 20, padding: "3px 12px", fontSize: 12, color: "#c0b8ff", marginBottom: 16 }}>
            ✦ Zuca Insights
          </div>
          <h1 style={{ color: "#fff", fontSize: 38, fontWeight: 800, lineHeight: 1.15, margin: "0 0 14px", letterSpacing: -0.5 }}>
            Discover Beauty,<br />Makeup & Salon<br />Trends
          </h1>
          <p style={{ color: "#b0aacc", fontSize: 14, lineHeight: 1.6, margin: "0 0 24px" }}>
            Expert beauty tips, skincare routines, makeup tutorials, salon guides, haircare advice, and the latest beauty trends.
          </p>
          <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
            <input placeholder="Search articles, guides, more..." style={{
              background: "#ffffff18", border: "1px solid #ffffff30", borderRadius: 8,
              padding: "9px 14px", color: "#fff", fontSize: 13, width: 240, outline: "none",
            }} />
            <button style={{ background: "#7c5fff", color: "#fff", border: "none", borderRadius: 8, padding: "9px 18px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Search</button>
          </div>
          {/* Tags were removed based on previous request */}
        </div>

        {/* Featured card */}
        <div style={{ width: 260, zIndex: 1, marginTop: "32px" }} className="md:mt-0">
          <div style={{ background: "#c8b8ff", borderRadius: 12, padding: "14px 16px", marginBottom: 12 }}>
            <div style={{ fontWeight: 700, fontSize: 15, color: "#1a1060", marginBottom: 4 }}>Beauty Trends 2026</div>
            <div style={{ fontSize: 11, color: "#5a4a99" }}>The definitive guide</div>
          </div>
          <div style={{ background: "#ffffff12", border: "1px solid #ffffff20", borderRadius: 12, padding: "14px 16px" }}>
            <span style={{ background: "#2aaa7a22", color: "#2aaa7a", border: "1px solid #2aaa7a44", borderRadius: 4, padding: "2px 8px", fontSize: 11, fontWeight: 600 }}>Featured Article</span>
            <div style={{ fontWeight: 700, fontSize: 14, color: "#fff", margin: "10px 0 8px", lineHeight: 1.4 }}>
              The Beauty Trends Everyone Will Be Following in 2026
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#5b4fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#fff", fontWeight: 700 }}>SB</div>
              <div>
                <div style={{ fontSize: 11, color: "#c0b8ff", fontWeight: 600 }}>Sophia Bennett</div>
                <div style={{ fontSize: 10, color: "#8880aa" }}>Beauty Editor · Zuca</div>
              </div>
            </div>
            <div style={{ fontSize: 11, color: "#8880aa", marginTop: 8 }}>✦ 9 min read · ⊙ 21.8K views</div>
          </div>
        </div>
      </div>

      {/* TRENDING */}
      <div style={{ background: "#fff", padding: "28px 100px", borderBottom: "1px solid #e8e8f0" }} className="px-4 md:px-12 lg:px-[100px]">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 18 }}>
          <div>
            <span style={{ fontSize: 20, fontWeight: 800, color: "#1a1a2e" }}>Trending Now</span>
            <div style={{ fontSize: 12, color: "#999", marginTop: 2 }}>What the community is reading this week</div>
          </div>
          <a href="#" style={{ fontSize: 13, color: "#5b4fff", textDecoration: "none", fontWeight: 500 }}>View all →</a>
        </div>
        <div style={{ display: "grid", gap: 16 }} className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {TRENDING.map((item, i) => (
            <div key={item.id} style={{ borderRadius: 12, overflow: "hidden", cursor: "pointer" }}>
              <div style={{ background: item.color, height: 120, position: "relative", display: "flex", alignItems: "flex-start", padding: 10 }}>
                <span style={{ position: "absolute", top: 8, right: 10, fontSize: 11, color: "#ffffff80", fontWeight: 700 }}>{i + 1}</span>
                <span style={{ background: "#ffffff20", border: "1px solid #ffffff30", borderRadius: 4, padding: "2px 8px", fontSize: 10, color: "#fff", fontWeight: 600 }}>{item.tag}</span>
              </div>
              <div style={{ padding: "10px 0 4px" }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#1a1a2e", marginBottom: 4, lineHeight: 1.4 }}>{item.title}</div>
                <div style={{ fontSize: 11, color: "#999" }}>{item.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LATEST ARTICLES */}
      <div style={{ padding: "32px 100px 100px" }} className="px-4 md:px-12 lg:px-[100px] pb-24">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 20 }}>
          <div>
            <span style={{ fontSize: 20, fontWeight: 800, color: "#1a1a2e" }}>Latest Articles</span>
            <div style={{ fontSize: 12, color: "#999", marginTop: 2 }}>Fresh perspectives from our editorial team</div>
          </div>
          <a href="#" style={{ fontSize: 13, color: "#5b4fff", textDecoration: "none", fontWeight: 500 }}>See all articles →</a>
        </div>
        <div style={{ display: "grid", gap: 24 }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 14, overflow: "hidden", boxShadow: "0 2px 12px #00000010", cursor: "pointer", transition: "transform 0.2s", }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              <div style={{ background: a.bg, height: 140, position: "relative", display: "flex", alignItems: "flex-end", padding: "12px 14px" }}>
                <span style={{ fontSize: 12, color: "#ffffffcc", fontWeight: 600 }}>{a.label}</span>
              </div>
              <div style={{ padding: "14px 16px 16px" }}>
                <TagBadge text={a.tag} color={a.tagColor} />
                <div style={{ fontSize: 14, fontWeight: 700, color: "#1a1a2e", margin: "10px 0 6px", lineHeight: 1.45 }}>{a.title}</div>
                <div style={{ fontSize: 12, color: "#777", lineHeight: 1.55, marginBottom: 14 }}>{a.desc}</div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg, #5b4fff, #a040d0)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#fff", fontWeight: 700 }}>
                      {a.author.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 600, color: "#333" }}>{a.author}</div>
                      <div style={{ fontSize: 10, color: "#999" }}>{a.date}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: 11, color: "#999" }}>🔖 {a.saves}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
