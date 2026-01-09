export const metadata = {
    title: 'About'
};

export default function AboutPage() {
    return (
        <div className="py-12">
            <header className="page-header">
                <h1>About</h1>
            </header>

            <div className="grid gap-12 md:grid-cols-[2fr_1fr] md:gap-16">
                <div className="prose">
                    <p className="text-lg">
                        Write a more detailed biography here. This page is an opportunity to share your background,
                        interests, and approach to your work in greater depth than the home page allows.
                    </p>

                    <p>
                        You might discuss your academic training, the questions that drive your research,
                        or the themes that recur in your artistic practice. Consider what makes your perspective unique.
                    </p>

                    <p>
                        This is also a good place to mention any ongoing projects, collaborations,
                        or affiliations that are important to your work.
                    </p>

                    <h2>Background</h2>
                    <p>
                        Share more about your educational background, formative experiences,
                        or the path that led you to your current work.
                    </p>

                    <h2>Research Interests</h2>
                    <p>
                        Detail your primary areas of inquiry, methodological approaches,
                        or the questions you're currently exploring.
                    </p>

                    <h2>Beyond Work</h2>
                    <p>
                        If appropriate, share a bit about your life outside of academia or art.
                        This helps visitors connect with you as a person.
                    </p>
                </div>

                <aside>
                    <div className="aspect-[3/4] bg-bg-alt mb-4 flex items-center justify-center text-muted">
                        Your Photo
                    </div>
                    <p className="text-sm text-muted">
                        Optional caption or photo credit.
                    </p>
                </aside>
            </div>
        </div>
    );
}
