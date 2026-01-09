export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="pt-16 pb-12 border-t border-border mt-auto">
            <p className="text-sm text-muted">
                &copy; {currentYear} Your Name. All rights reserved.
            </p>
        </footer>
    );
}
