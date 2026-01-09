export const metadata = {
    title: 'Contact'
};

export default function ContactPage() {
    return (
        <div className="py-12">
            <header className="page-header">
                <h1>Contact</h1>
                <p className="page-subtitle">
                    Get in touch for inquiries, collaborations, or just to say hello.
                </p>
            </header>

            <div className="max-w-xl">
                <div className="space-y-1 mb-12">
                    <div className="contact-item">
                        <span className="contact-label">Email</span>
                        <span className="contact-value">
                            <a href="mailto:your@email.com">your@email.com</a>
                        </span>
                    </div>

                    <div className="contact-item">
                        <span className="contact-label">Institution</span>
                        <span className="contact-value">
                            Your Department<br />
                            University Name<br />
                            City, Country
                        </span>
                    </div>

                    <div className="contact-item">
                        <span className="contact-label">Social</span>
                        <span className="contact-value">
                            <a href="#" className="block">Twitter / X</a>
                            <a href="#" className="block">Instagram</a>
                            <a href="#" className="block">LinkedIn</a>
                        </span>
                    </div>
                </div>

                <hr />

                <div className="mt-12">
                    <h2>Office Hours</h2>
                    <p>
                        If you're a student or colleague looking to meet, my office hours are
                        [Day] from [Time] to [Time], or by appointment.
                    </p>
                </div>

                <div className="mt-8">
                    <h2>For Media Inquiries</h2>
                    <p>
                        For press or media-related questions, please contact [appropriate contact or department].
                    </p>
                </div>
            </div>
        </div>
    );
}
