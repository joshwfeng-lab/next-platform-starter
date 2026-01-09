'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Writing', href: '/writing' },
    { linkText: 'Photography', href: '/photography' },
    { linkText: 'CV', href: '/cv' },
    { linkText: 'About', href: '/about' },
    { linkText: 'Contact', href: '/contact' }
];

export function Header() {
    const pathname = usePathname();

    return (
        <nav className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-border">
            <Link href="/" className="nav-link text-xl font-light tracking-wide">
                Your Name
            </Link>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-6 gap-y-2">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className={`nav-link text-sm ${
                                    pathname === item.href ? 'nav-link-active' : ''
                                }`}
                            >
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
