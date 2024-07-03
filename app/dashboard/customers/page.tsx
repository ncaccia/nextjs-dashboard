import { Metadata } from 'next';

// Nested Pages metadata will overrride parent layout metadata
export const metadata: Metadata = {
    title: 'Customers',
};

export default function Page() {
    return (
        <p>Customers Page</p>
    )
}