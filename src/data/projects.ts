import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "proj01",
    type: "cs",
    category: "Web Dev",
    name: "Personal Website",
    thumbnail: "",
    repoUrl: "https://github.com/rpgunasekara/rpgunasekara.github.io",
    demoUrl: "https://rpgunasekara.com",
    status: "complete",
    lastUpdated: "May 2026",
    sections: [
      {
        label: "Intro",
        content: "My personal website inspired by Pokemon Emerald's PokeNav!",
      },
      {
        label: "Stack",
        content: "React, JavaScript/TypeScript, Node.js, TailwindCSS",
      },
      {
        label: "Reflection",
        content:
          "Fun and engaging project I'm working on to show employers and others who I am and the things I've done. Trying to imitate the PokeNav has been challenging but fun to find workarounds to make the proportions as accurate as possible, while presenting my information in an easily accessible way.",
      },
    ],
  },
  {
    id: "proj02",
    type: "cs",
    category: "Web Dev",
    name: "SportsTracker",
    thumbnail: "",
    repoUrl: "https://github.com/SaimSiddique1/SportsTracker",
    demoUrl: "",
    status: "complete",
    lastUpdated: "May 2026",
    sections: [
      {
        label: "Intro",
        content:
          "A capstone project done as part of CMSC447. My team and I developed a full-stack web app that uses a sports API to allow users to find teams, players, and competition statistics for all things soccer. We worked using an Agile/Scrum workflow across three sprints, using Jira to organize ourselves and GitHub for version control. My primary role was developing the UI and integrating the individual parts my teammates built into the app.",
      },
      {
        label: "Stack",
        content:
          "React, JavaScript/TypeScript, Node.js, Express.js, Supabase, TailwindCSS",
      },
      {
        label: "Reflection",
        content:
          "Working in a team was a valuable experience and learning to handle the development along the way helped me understand how to function in a group environment.",
      },
    ],
  },
];
