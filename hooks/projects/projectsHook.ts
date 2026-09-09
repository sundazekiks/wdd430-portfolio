"use client"
import { useState } from "react";

export function useProjects() {
    const [projects, setProjects] = useState<[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchProjects = async (type: string | null) => {
        setLoading(true);
        try {
            const url = type ? `/api/projects?type=${type}` : '/api/projects';
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error fetching projects: ${response.statusText}`);
            }
            const data = await response.json();
            setProjects(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return { projects, loading, fetchProjects };
}