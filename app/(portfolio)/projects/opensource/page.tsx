"use client"
import { useProjects } from "@/hooks/projects/projectsHook";
import { useEffect } from "react";
import { type Project } from "@/lib/project-db";
import ProjectCard from "@/components/ProjectCard";

export default function Page() {
    const { projects, loading, fetchProjects } = useProjects();

    useEffect(() => {
        fetchProjects('opensource');
    }, []); // eslint-disable-line

    return (<>
        <h1 className="text-3xl font-bold mb-4">Open Source Projects</h1>
        {
            loading ? (
                <p>Loading...</p>
            ) : (
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        projects.map((project: Project) => (
                            <li key={project.id} className="mb-4">
                                <ProjectCard
                                    title={project.title}
                                    description={project.description}
                                    technologies={project.technologies}
                                    link={project.link}
                                />
                            </li>
                        ))
                    }
                </ul>
            )
        }
    </>)
}