import { AppError } from "./errors/AppError";
import { sql } from "./psql/sql";

// lib/projects-db.ts
export interface Project {
    id: number;
    title: string;
    description: string;
    type: 'opensource' | 'school';
    technologies: string[];
    link?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'My First Open Source Contribution',
        description: 'A bug fix contributed to a popular library.',
        type: 'opensource',
        technologies: ['TypeScript', 'React'],
        link: 'https://github.com/example/repo'
    },
    {
        id: 2,
        title: 'Database Design Final Project',
        description: 'An ER diagram and normalized schema for a library system.',
        type: 'school',
        technologies: ['PostgreSQL', 'SQL']
    }
];

export async function getProjects(type?: string | null): Promise<Project[]> {
    let projects: Project[] = []
    // TODO: re write this to another file 
    if (type) {
        projects = await sql`SELECT * 
        FROM portfolio.projects 
        WHERE type = ${type} ORDER BY id` as Project[] // FIX: potential error
        return projects;
    }
    projects = await sql`SELECT * FROM portfolio.projects` as Project[]
    return projects;
}

export async function getProjectById(id: number): Promise<Project | null> {
    // return projects.find(p => p.id === id) ?? null;
    // TODO: fix this, organize this
    const project = await sql`SELECT *
    FROM portfolio.projects
    WHERE id = ${id}` as Project[]
    if (project.length < 1) throw new AppError("Project doesn't exist", 404);
    return project[0] ?? null;
}