import PageSkeleton from "../components/PageSkeleton";
import { useEffect, useState } from "react";
import type { Achievement } from "../types";
import { achievements } from "../data/achievements";

interface Props {
  onBack: () => void;
  entering?: boolean;
  exiting?: boolean;
}

const categoryIcon: Record<Achievement["category"], string> = {
  cert: "verified",
  academic: "school",
  competition: "emoji_events",
  other: "star",
};

export default function AchievementsPage({ onBack, entering, exiting }: Props) {
  const [hovered, setHovered] = useState<Achievement | null>(null);

  useEffect(() => {
    document.title = "Achievements";
    return () => {
      document.title = "Main Menu";
    };
  }, []);

  return (
    <PageSkeleton
      label="ACHIEVEMENTS"
      color="#f06868"
      borderTop="#f8a8a0"
      borderRight="#c84840"
      borderBottom="#c84840"
      onBack={onBack}
      entering={entering}
      exiting={exiting}
    >
      <div className="flex h-[calc(100vh-8rem)] pt-4 pr-4 pb-16 gap-4">
        <div className="flex flex-col w-64 shrink-0 gap-3 ml-2 mt-16">
          <div className="border-2 border-pink-500 bg-pink-400 px-4 py-2 flex items-center justify-center">
            <span className="text-white font-bold text-center">
              {hovered ? hovered.dateEarned : "-"}
            </span>
          </div>

          <div className="border-2 border-pink-500 bg-pink-400 overflow-hidden flex items-center justify-center h-50">
            {hovered ? (
              <img
                src={hovered.image}
                alt={hovered.name}
                className="w-full h-full object-contain p-2"
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  t.style.display = "none";
                  t.parentElement!.innerHTML = `<span className="text-white text-xs p-2 text-center">No image.</span>`;
                }}
              />
            ) : (
              <span className="text-white text-xs text-center p-2">
                Hover a ribbon to preview.
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col flex-1 min-w-0 gap-3">
          <div className="border-2 border-pink-500 bg-pink-400 px-4 py-3 shrink-0 h-16 overflow-hidden">
            {hovered ? (
              <div>
                <p className="text-white text-xs font-semibold">
                  {hovered.issuer}
                </p>
                <p className="text-white font-bold text-xl leading-tight">
                  {hovered.name}
                </p>
              </div>
            ) : (
              <p className="text-white text-sm">Hover a ribbon...</p>
            )}
          </div>

          <div className="flex-1 flex flex-wrap gap-4 content-start p-2">
            {achievements.map((a) => (
              <button
                key={a.id}
                className="flex flex-col items-center gap-1 p-2 transition-all hover:scale-200"
                onMouseEnter={() => setHovered(a)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="material-symbols-outlined text-pink-400">
                  {categoryIcon[a.category]}
                </span>
              </button>
            ))}
          </div>

          <div className="shrink-0 flex justify-center py-2">
            <div className="px-6 py-3 border-2 border-pink-500 bg-pink-400 min-w-80 max-w-lg flex items-center justify-center">
              <p className="text-sm text-center leading-snug">
                {hovered ? hovered.description : "Hover over a ribbon..."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageSkeleton>
  );
}
