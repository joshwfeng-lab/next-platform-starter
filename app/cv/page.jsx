export const metadata = {
    title: 'CV'
};

export default function CVPage() {
    return (
        <div className="py-12">
            <header className="page-header">
                <h1>Curriculum Vitae</h1>
                <p className="page-subtitle">
                    Academic and professional background.
                </p>
            </header>

            <section className="cv-section">
                <h2>Education</h2>
                <div className="cv-entry">
                    <p className="cv-title">Ph.D. in Your Field</p>
                    <p className="cv-meta">University Name, Expected 2025</p>
                    <p className="cv-description">
                        Dissertation: "Title of Your Dissertation"
                    </p>
                </div>
                <div className="cv-entry">
                    <p className="cv-title">M.A. in Your Field</p>
                    <p className="cv-meta">University Name, 2020</p>
                </div>
                <div className="cv-entry">
                    <p className="cv-title">B.A. in Your Field</p>
                    <p className="cv-meta">University Name, 2018</p>
                </div>
            </section>

            <section className="cv-section">
                <h2>Publications</h2>
                <div className="cv-entry">
                    <p className="cv-title">"Title of Your Publication"</p>
                    <p className="cv-meta">Journal Name, Volume, Year</p>
                </div>
                <div className="cv-entry">
                    <p className="cv-title">"Another Publication Title"</p>
                    <p className="cv-meta">Book Chapter in Edited Volume, Publisher, Year</p>
                </div>
            </section>

            <section className="cv-section">
                <h2>Exhibitions / Presentations</h2>
                <div className="cv-entry">
                    <p className="cv-title">Exhibition or Conference Title</p>
                    <p className="cv-meta">Venue, Location, Year</p>
                    <p className="cv-description">Brief description of your contribution.</p>
                </div>
                <div className="cv-entry">
                    <p className="cv-title">Another Exhibition or Talk</p>
                    <p className="cv-meta">Venue, Location, Year</p>
                </div>
            </section>

            <section className="cv-section">
                <h2>Awards & Fellowships</h2>
                <div className="cv-entry">
                    <p className="cv-title">Fellowship or Award Name</p>
                    <p className="cv-meta">Granting Institution, Year</p>
                </div>
                <div className="cv-entry">
                    <p className="cv-title">Another Award</p>
                    <p className="cv-meta">Granting Institution, Year</p>
                </div>
            </section>

            <section className="cv-section">
                <h2>Teaching</h2>
                <div className="cv-entry">
                    <p className="cv-title">Course Title</p>
                    <p className="cv-meta">Teaching Assistant, University Name, Semester Year</p>
                </div>
                <div className="cv-entry">
                    <p className="cv-title">Another Course</p>
                    <p className="cv-meta">Instructor, University Name, Semester Year</p>
                </div>
            </section>

            <section className="cv-section">
                <h2>Skills & Languages</h2>
                <p className="text-secondary">
                    Languages: English (native), Another Language (proficient)
                </p>
                <p className="text-secondary mt-2">
                    Technical: Relevant software, tools, or methodologies
                </p>
            </section>
        </div>
    );
}
