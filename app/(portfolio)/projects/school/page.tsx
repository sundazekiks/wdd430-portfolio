"use client"
import { useProjects } from "@/hooks/projects/projectsHook"
import { type Project } from "@/lib/project-db"
import ProjectCard from "@/components/ProjectCard"
import { useEffect } from "react"


export default function Page() {
    const { projects, loading, fetchProjects } = useProjects()

    useEffect(() => {
        fetchProjects('school')
    }, []); // eslint-disable-line

    return (<>
        <h1 className="text-3xl font-bold mb-4">School Projects</h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                loading ? (
                    <p>Loading...</p>
                ) : (
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
                )
            }
        </ul>
    </>)
}