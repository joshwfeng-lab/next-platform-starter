export const metadata = {
    title: 'Writing'
};

export default function WritingPage() {
    return (
        <div className="py-12">
            <header className="page-header">
                <h1>Writing</h1>
                <p className="page-subtitle">
                    Essays, articles, and other written work.
                    Add a brief description of your writing practice or interests here.
                </p>
            </header>

            <div className="divide-y divide-border">
                <article className="writing-item">
                    <h3 className="writing-title">
                        <a href="#">Example Article Title</a>
                    </h3>
                    <p className="writing-meta">Published in Journal Name, 2024</p>
                    <p className="writing-excerpt">
                        A brief excerpt or description of the article goes here. This should give readers
                        a sense of what the piece is about and why they might want to read it.
                    </p>
                </article>

                <article className="writing-item">
                    <h3 className="writing-title">
                        <a href="#">Another Essay Title</a>
                    </h3>
                    <p className="writing-meta">Published in Publication Name, 2023</p>
                    <p className="writing-excerpt">
                        Another excerpt or description. You can link to external publications or host
                        the full text on your site.
                    </p>
                </article>

                <article className="writing-item">
                    <h3 className="writing-title">
                        <a href="#">A Third Piece of Writing</a>
                    </h3>
                    <p className="writing-meta">2023</p>
                    <p className="writing-excerpt">
                        This could be a personal essay, academic paper, book review, or any other
                        form of writing you want to share.
                    </p>
                </article>
            </div>
        </div>
    );
}
