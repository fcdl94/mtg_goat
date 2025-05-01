import { NavBar } from '@/components/nav-bar';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <NavBar />
            <main className="flex-1 container py-6">
                {children}
            </main>
            <footer className="border-t bg-white py-4">
                <div className="container flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} MTG Goat
                    </p>
                </div>
            </footer>
        </>
    );
} 