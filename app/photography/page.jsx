import Image from 'next/image';

export const metadata = {
    title: 'Photography'
};

export default function PhotographyPage() {
    return (
        <div className="py-12">
            <header className="page-header">
                <h1>Photography</h1>
                <p className="page-subtitle">
                    A selection of photographic work.
                    Add a brief description of your photographic practice or interests here.
                </p>
            </header>

            <div className="image-grid">
                <figure>
                    <div className="image-item">
                        <div className="w-full h-full bg-bg-alt flex items-center justify-center text-muted">
                            Image 1
                        </div>
                    </div>
                    <figcaption className="image-caption">Title, Year</figcaption>
                </figure>

                <figure>
                    <div className="image-item">
                        <div className="w-full h-full bg-bg-alt flex items-center justify-center text-muted">
                            Image 2
                        </div>
                    </div>
                    <figcaption className="image-caption">Title, Year</figcaption>
                </figure>

                <figure>
                    <div className="image-item">
                        <div className="w-full h-full bg-bg-alt flex items-center justify-center text-muted">
                            Image 3
                        </div>
                    </div>
                    <figcaption className="image-caption">Title, Year</figcaption>
                </figure>

                <figure>
                    <div className="image-item">
                        <div className="w-full h-full bg-bg-alt flex items-center justify-center text-muted">
                            Image 4
                        </div>
                    </div>
                    <figcaption className="image-caption">Title, Year</figcaption>
                </figure>

                <figure>
                    <div className="image-item">
                        <div className="w-full h-full bg-bg-alt flex items-center justify-center text-muted">
                            Image 5
                        </div>
                    </div>
                    <figcaption className="image-caption">Title, Year</figcaption>
                </figure>

                <figure>
                    <div className="image-item">
                        <div className="w-full h-full bg-bg-alt flex items-center justify-center text-muted">
                            Image 6
                        </div>
                    </div>
                    <figcaption className="image-caption">Title, Year</figcaption>
                </figure>
            </div>

            <p className="mt-12 text-center text-muted text-sm">
                Replace placeholder images with your own photographs.
            </p>
        </div>
    );
}
