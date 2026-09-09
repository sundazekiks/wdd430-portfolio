"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function Header() {
    const pathname = usePathname();

    // Create a function to determine if the link is active; so I don't have to repeat the logic for each link
    function ActiveLink(href: string) {
        return pathname === href ? 'text-yellow-400' : '';
    }
    return (
        <header className="bg-blue-600 text-white py-4 shadow-md px-2 flex *:flex-col md:flex-row md:justify-between items-center">
            <div id="header-title" className="text-2xl">
                <h1 className="text-2xl font-bold">TA</h1>
                <hr className="border-t border-gray-300" />
            </div>
            <nav className="max-w-4xl mx-auto px-4 flex justify-between items-center">
                <ul className="flex gap-6">
                    <li><Link href="/" className={ActiveLink('/')}>Home</Link></li>
                    <li><Link href="/about" className={ActiveLink('/about')}>About</Link></li>
                    <li><Link href="/contact" className={ActiveLink('/contact')}>Contact</Link></li>
                    <li><Link href="/projects" className={ActiveLink('/projects')}>Projects</Link></li>
                </ul>
            </nav>
        </header >
    );
}