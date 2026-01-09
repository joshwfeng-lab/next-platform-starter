export const metadata = {
    title: 'Home'
};

export default function HomePage() {
    return (
        <div className="py-12">
            <h1>Welcome</h1>
            <div className="prose mt-8">
                <p className="text-lg">
                    A brief introduction about yourself goes here. This is your opportunity to make a first impression
                    and give visitors a sense of who you are and what you do.
                </p>
                <p>
                    You might mention your current role, your research interests, or your artistic practice.
                    Keep it concise but engaging.
                </p>
            </div>

            <hr />

            <section>
                <h2>Recent Work</h2>
                <p>
                    Highlight your most recent projects, publications, or exhibitions here.
                    This section can serve as a quick overview for visitors who want to see what you've been up to.
                </p>
            </section>

            <section className="mt-12">
                <h2>News</h2>
                <ul>
                    <li>
                        <span className="text-muted">2024</span> — Example news item or update
                    </li>
                    <li>
                        <span className="text-muted">2024</span> — Another example news item
                    </li>
                    <li>
                        <span className="text-muted">2023</span> — A third example news item
                    </li>
                </ul>
            </section>
        </div>
    );
}
