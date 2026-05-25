import { useState, useEffect } from "react";
import TopBar from "./components/TopBar";
import PageTab from "./components/PageTab";
import SectionTabs from "./components/SectionTabs";
import BottomBox from "./components/BottomBox";
import MapPage from "./pages/MapPage";
import BlogPage from "./pages/BlogPage";
import ProjectsPage from "./pages/ProjectsPage";
import AchievementsPage from "./pages/AchievementsPage";
import AboutPage from "./pages/AboutPage";
import type { MenuItem } from "./types";

export default function App() {
  const [currPage, setCurrPage] = useState<string>("home");
  const [hoveredItem, setHoveredItem] = useState<MenuItem | null>(null);
  const [transition, setTransition] = useState(false);
  const [transitionDir, setTransitionDir] = useState<"toPage" | "toHome">(
    "toPage",
  );
  const [blackoutState, setBlackoutState] = useState<"none" | "in" | "out">(
    "none",
  );
  const [contentReady, setContentReady] = useState(false);
  const isHome = currPage === "home";

  const handleSelect = (id: string) => {
    setHoveredItem(null);
    setTransitionDir("toPage");
    setTransition(true);
    setContentReady(false);
    setTimeout(() => setBlackoutState("in"), 200);
    setTimeout(() => setCurrPage(id), 500);
    setTimeout(() => setBlackoutState("out"), 520);
    setTimeout(() => setContentReady(true), 520);

    setTimeout(() => {
      setBlackoutState("none");
      setTransition(false);
    }, 800);
  };

  const goHome = () => {
    setTransitionDir("toHome");
    setTransition(true);
    setContentReady(false);
    setTimeout(() => setBlackoutState("in"), 200);

    setTimeout(() => {
      setHoveredItem(null);
      setCurrPage("home");
    }, 500);

    setTimeout(() => setBlackoutState("out"), 520);
    setTimeout(() => setContentReady(true), 520);

    setTimeout(() => {
      setBlackoutState("none");
      setTransition(false);
    }, 800);
  };

  const renderPage = () => {
    const entering = contentReady && transitionDir === "toPage";
    const exiting = transition && transitionDir === "toHome";

    switch (currPage) {
      case "map":
        return (
          <MapPage onBack={goHome} entering={entering} exiting={exiting} />
        );
      case "blog":
        return (
          <BlogPage onBack={goHome} entering={entering} exiting={exiting} />
        );
      case "projects":
        return (
          <ProjectsPage onBack={goHome} entering={entering} exiting={exiting} />
        );
      case "achievements":
        return (
          <AchievementsPage
            onBack={goHome}
            entering={entering}
            exiting={exiting}
          />
        );
      case "about":
        return (
          <AboutPage onBack={goHome} entering={entering} exiting={exiting} />
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    document.title = "Main Menu";
    return () => {
      document.title = "Main Menu";
    };
  }, []);

  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <div
        className="relative overflow-hidden pokenav-bg"
        style={{
          aspectRatio: "3 / 2",
          maxHeight: "100vh",
          maxWidth: "calc(100vh * 1.5)",
          width: "100%",
          ["--gp" as string]: "calc(min(100vw / 240, 100vh / 160))",
        }}
      >
        {isHome && (
          <TopBar
            exiting={transition && transitionDir === "toPage"}
            entering={contentReady && transitionDir === "toHome"}
          />
        )}
        {isHome && (
          <PageTab
            hoveredItem={hoveredItem}
            exiting={transition && transitionDir === "toPage"}
            entering={contentReady && transitionDir === "toHome"}
          />
        )}
        {isHome ? (
          <>
            <SectionTabs
              onSelect={handleSelect}
              onHover={setHoveredItem}
              onLeave={() => setHoveredItem(null)}
              exiting={transition && transitionDir === "toPage"}
              entering={contentReady && transitionDir === "toHome"}
            />
            <BottomBox text={hoveredItem?.description ?? null} />
          </>
        ) : (
          renderPage()
        )}

        {/* Blackout overlay */}
        {blackoutState !== "none" && (
          <div
            className={`absolute inset-0 pointer-events-none z-50 ${blackoutState === "in" ? "fade-to-black" : "fade-from-black"}`}
            style={{ background: "black" }}
          />
        )}
      </div>
    </main>
  );
}
