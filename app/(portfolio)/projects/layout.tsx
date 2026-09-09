import Link from 'next/link';

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <nav className="p-4 bg-gray-100 dark:bg-gray-800 mb-4">
                <Link href="/projects">Overview</Link> | {' '}
                <Link href="/projects/opensource">Open Source</Link> | {' '}
                <Link href="/projects/school">School</Link>
            </nav>
            {children}
        </section>
    );
}