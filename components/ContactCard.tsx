import { Mail, Phone } from 'lucide-react';

export interface ContactCardProps {
    name: string;
    email: string;
    phone?: string;
    title?: string;
    socials?: { platform: string; url: string }[];
}

export function ContactCard({ name, email, phone, title, socials }: ContactCardProps) {
    const initials = name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase();

    return (
        <div className="rounded-xl border border-gray-200 bg-white p-4 my-4 shadow-md w-full max-w-sm">
            <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
                    {initials}
                </div>
                <div className="min-w-0">
                    <h3 className="truncate font-semibold text-gray-900">{name}</h3>
                    {title && <p className="text-sm text-gray-500">{title}</p>}
                </div>
            </div>

            <div className="mt-3 space-y-1.5 text-sm text-gray-600">
                <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-blue-600">
                    <Mail className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">{email}</span>
                </a>
                {phone && (
                    <div className="flex items-center gap-2">
                        <Phone className="h-3.5 w-3.5 shrink-0" />
                        <span>{phone}</span>
                    </div>
                )}
            </div>

            {socials && socials.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                    {socials.map((social, index) => (

                        <a key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600 hover:bg-gray-200"
                        >
                            {social.platform}
                        </a>
                    ))}
                </div>
            )
            }
        </div >
    );
}