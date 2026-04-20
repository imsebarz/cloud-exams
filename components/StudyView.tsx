"use client";

import { useMemo, useState, useEffect } from "react";
import { ArrowLeft, Search, X, BookOpen, Lightbulb, Target, Layers } from "lucide-react";
import { CloudService } from "@/lib/gcp-services";

type Provider = "gcp" | "aws";

interface StudyViewProps {
  provider: Provider;
  providerName: string;
  themeColor: string;
  bgColor: string;
  services: CloudService[];
  categories: string[];
  onBack: () => void;
}

// Small provider-flavored icon tile. GCP uses a hexagon-ish rounded-square,
// AWS uses a square with a folded corner — both just stylized containers, not
// reproductions of the official icon set.
function ServiceTile({
  service,
  provider,
  onClick,
}: {
  service: CloudService;
  provider: Provider;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group relative bg-white border border-[#dadce0] rounded-lg p-2 sm:p-3 text-left hover:shadow-md active:scale-95 sm:hover:-translate-y-0.5 transition-all flex flex-col items-center gap-1.5 sm:gap-2 min-h-[100px] sm:min-h-[120px]"
    >
      <div
        className={
          "relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center font-bold text-white text-[10px] sm:text-[11px] leading-none shrink-0 " +
          (provider === "gcp" ? "rounded-[12px] sm:rounded-[14px]" : "rounded-md")
        }
        style={{
          background: `linear-gradient(135deg, ${service.color} 0%, ${shade(service.color, -15)} 100%)`,
          boxShadow: `0 2px 6px ${service.color}33`,
        }}
        aria-hidden
      >
        {provider === "aws" && (
          <span className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 48 48">
              <path
                d="M36 4 L44 12 L44 44 L4 44 L4 4 Z"
                fill="none"
                stroke="white"
                strokeOpacity="0.35"
                strokeWidth="1.5"
              />
              <path d="M36 4 L36 12 L44 12" fill="none" stroke="white" strokeOpacity="0.55" strokeWidth="1.5" />
            </svg>
          </span>
        )}
        <span className="relative z-10 px-1 text-center">{service.code}</span>
      </div>
      <div className="text-center w-full">
        <div className="text-[11px] sm:text-[13px] font-medium text-[#202124] leading-tight line-clamp-2">{service.name}</div>
        <div className="text-[9px] sm:text-[10px] text-[#5f6368] mt-0.5 truncate">{service.category}</div>
      </div>
    </button>
  );
}

// Lighten / darken a hex color by a percent. Used to produce a subtle gradient
// on the service tile without shipping a color-manipulation library.
function shade(hex: string, percent: number): string {
  const h = hex.replace("#", "");
  const num = parseInt(h, 16);
  const r = Math.min(255, Math.max(0, (num >> 16) + Math.round(255 * (percent / 100))));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0xff) + Math.round(255 * (percent / 100))));
  const b = Math.min(255, Math.max(0, (num & 0xff) + Math.round(255 * (percent / 100))));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

// Modal on ≥ sm, bottom drawer on < sm.
function ServiceDetail({
  service,
  provider,
  themeColor,
  onClose,
}: {
  service: CloudService;
  provider: Provider;
  themeColor: string;
  onClose: () => void;
}) {
  // lock body scroll while open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white w-full sm:max-w-2xl sm:mx-4 sm:rounded-xl rounded-t-2xl shadow-2xl max-h-[88vh] sm:max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* drawer grab handle on mobile */}
        <div className="sm:hidden flex justify-center pt-2.5 pb-1">
          <div className="w-10 h-1 rounded-full bg-[#dadce0]" />
        </div>

        <div className="flex items-start gap-4 px-5 sm:px-6 pt-4 pb-4 border-b border-[#f1f3f4]">
          <div
            className={
              "w-14 h-14 flex items-center justify-center font-bold text-white text-xs leading-none shrink-0 " +
              (provider === "gcp" ? "rounded-[16px]" : "rounded-md")
            }
            style={{
              background: `linear-gradient(135deg, ${service.color} 0%, ${shade(service.color, -15)} 100%)`,
              boxShadow: `0 3px 10px ${service.color}44`,
            }}
          >
            {service.code}
          </div>
          <div className="flex-1 min-w-0 pt-1">
            <h2 className="text-lg font-semibold text-[#202124] leading-tight">{service.name}</h2>
            {service.shortName && service.shortName !== service.name && (
              <p className="text-xs text-[#5f6368] mt-0.5">{service.shortName}</p>
            )}
            <span
              className="inline-block mt-1.5 text-[10px] font-medium rounded-full px-2 py-0.5"
              style={{ backgroundColor: service.bgColor, color: service.color }}
            >
              {service.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 p-1.5 rounded-full hover:bg-[#f1f3f4] transition-colors text-[#5f6368]"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-5 space-y-5">
          <section>
            <h3 className="text-xs font-semibold text-[#5f6368] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              What it is
            </h3>
            <p className="text-sm text-[#202124] leading-relaxed">{service.description}</p>
          </section>

          {service.useCases.length > 0 && (
            <section>
              <h3 className="text-xs font-semibold text-[#5f6368] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5" />
                Common use cases
              </h3>
              <ul className="space-y-1">
                {service.useCases.map((u, i) => (
                  <li key={i} className="text-sm text-[#3c4043] flex gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#5f6368] shrink-0" />
                    {u}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {service.keyFeatures.length > 0 && (
            <section>
              <h3 className="text-xs font-semibold text-[#5f6368] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                Key features
              </h3>
              <ul className="space-y-1">
                {service.keyFeatures.map((f, i) => (
                  <li key={i} className="text-sm text-[#3c4043] flex gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#5f6368] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section
            className="rounded-lg border px-4 py-3"
            style={{ backgroundColor: `${themeColor}0d`, borderColor: `${themeColor}33` }}
          >
            <h3
              className="text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-1.5"
              style={{ color: themeColor }}
            >
              <Lightbulb className="w-3.5 h-3.5" />
              Exam tips
            </h3>
            <ul className="space-y-1.5">
              {service.examTips.map((t, i) => (
                <li key={i} className="text-sm text-[#3c4043] leading-relaxed flex gap-2">
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: themeColor }}
                  />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default function StudyView({
  provider,
  providerName,
  themeColor,
  bgColor,
  services,
  categories,
  onBack,
}: StudyViewProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selected, setSelected] = useState<CloudService | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return services.filter((s) => {
      if (activeCategory !== "All" && s.category !== activeCategory) return false;
      if (!q) return true;
      return (
        s.name.toLowerCase().includes(q) ||
        s.shortName?.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        s.code.toLowerCase().includes(q)
      );
    });
  }, [services, query, activeCategory]);

  // Group by category when no search query is active and no category filter
  // — keeps the cheatsheet navigable at a glance.
  const grouped = useMemo(() => {
    if (query || activeCategory !== "All") {
      return [{ category: "Results", items: filtered }];
    }
    return categories
      .map((c) => ({ category: c, items: services.filter((s) => s.category === c) }))
      .filter((g) => g.items.length > 0);
  }, [filtered, query, activeCategory, categories, services]);

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <header
        className="sticky top-0 z-20 backdrop-blur border-b border-[#dadce0]"
        style={{ backgroundColor: `${bgColor}dd` }}
      >
        <div className="max-w-6xl mx-auto px-3 sm:px-4 py-2.5 sm:py-3">
          <button
            onClick={onBack}
            className="text-sm text-[#5f6368] hover:text-[#202124] flex items-center gap-1 mb-2 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="min-w-0">
              <h1 className="text-lg sm:text-xl font-semibold text-[#202124] leading-tight">{providerName} Cheatsheet</h1>
              <p className="text-xs sm:text-sm text-[#5f6368]">
                {services.length} services · tap any tile for exam tips
              </p>
            </div>
            <div className="relative w-full sm:flex-1 sm:w-auto sm:max-w-xs">
              <Search className="w-4 h-4 text-[#5f6368] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services…"
                className="w-full bg-white border border-[#dadce0] rounded-full pl-9 pr-9 py-2 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                style={{ outlineColor: themeColor, boxShadow: "none" }}
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-[#f1f3f4] text-[#5f6368]"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          <div className="mt-3 flex gap-1.5 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-none">
            {["All", ...categories].map((c) => {
              const active = activeCategory === c;
              return (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`shrink-0 text-xs rounded-full px-3 py-1.5 border transition-colors ${
                    active
                      ? "text-white border-transparent"
                      : "bg-white text-[#3c4043] border-[#dadce0] hover:bg-[#f1f3f4]"
                  }`}
                  style={active ? { backgroundColor: themeColor } : undefined}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-[#5f6368] text-sm">
            No services match &ldquo;{query}&rdquo;.
          </div>
        ) : (
          <div className="space-y-6 sm:space-y-8">
            {grouped.map((g) => (
              <section key={g.category}>
                <h2 className="text-sm font-semibold text-[#202124] mb-2.5 sm:mb-3 flex items-center gap-2 sticky top-[9.5rem] sm:static bg-[#f8f9fa]/90 backdrop-blur sm:bg-transparent z-10 py-1">
                  <span className="w-1 h-4 rounded-full" style={{ backgroundColor: themeColor }} />
                  {g.category}
                  <span className="text-xs font-normal text-[#5f6368]">({g.items.length})</span>
                </h2>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-2.5">
                  {g.items.map((s) => (
                    <ServiceTile
                      key={s.id}
                      service={s}
                      provider={provider}
                      onClick={() => setSelected(s)}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </main>

      {selected && (
        <ServiceDetail
          service={selected}
          provider={provider}
          themeColor={themeColor}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}
