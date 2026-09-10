import { ContactCard } from '@/components/ContactCard';
import profile from '@/public/profile.json';
import { type ContactCardProps } from '@/components/ContactCard';

export default function Page() {
    return (<>
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <ContactCard {...(profile as ContactCardProps)} />
    </>)
}