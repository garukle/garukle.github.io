import type { MenuItem } from "../types";

export const menuItems: MenuItem[] = [
  {
    id: "map",
    label: "HOENN MAP",
    color: "#20c068",
    squareDark: "#488838",
    squareLight: "#f8e860",
    description: "Check the map of the HOENN region.",
  },
  {
    id: "blog",
    label: "BLOG",
    color: "#6850d8",
    squareDark: "#5040a0",
    squareLight: "#f8e860",
    description: "Thoughts and writeups.",
  },
  {
    id: "projects",
    label: "PROJECTS",
    color: "#f84020",
    squareDark: "#b00000",
    squareLight: "#f8e860",
    description: "Things I've built.",
  },
  {
    id: "achievements",
    label: "ACHIEVEMENTS",
    color: "#f06868",
    squareDark: "#c84840",
    squareLight: "#f8e860",
    description: "Certifications, awards, etc.",
  },
  {
    id: "about",
    label: "ABOUT ME",
    color: "#f8f8f8",
    squareDark: "#807848",
    squareLight: "#d8d0a0",
    description: "Who I am and how to get in contact.",
    tabStyle: "muted",
  },
];
