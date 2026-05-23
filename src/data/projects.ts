import type { Project } from "../types";

export const projects: Project[] = [
    {
        id: 'proj01',
        type: 'cs',
        category: 'Web Dev',
        name: 'SportsTracker',
        thumbnail: '',
        repoUrl: 'https://github.com/SaimSiddique1/SportsTracker',
        demoUrl: '',
        status: 'complete',
        sections: [
            {label: 'Intro', content: 'A capstone project done as part of CMSC447. My team and I developed a full-stack web app that uses a sports API to allow users to find teams, players, and competition statistics for all things soccer. We worked using an Agile/Scrum workflow across three sprints, using Jira to organize ourselves and GitHub for version control. My primary role was developing the UI and integrating the indivudal parts my teamates built into the app.'},
            {label: 'Stack', content: 'React, JavaScript/TypeScript, Node.js, Express.js, Supabase, TailwindCSS'},
            {label: 'Reflection', content: 'Working in a team was a valuable experience and learning to handle the development along the way helped me understand how to function in a group environment.'}
        ]
    }
]