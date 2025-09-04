export const ContactSection = () => {
    return (
        <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Interested in collaborating or have a project in mind? Reach out and let's create something amazing together!
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
            <a
                href="mailto:protik7777777@gmail.com"
                className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition"
            >
                Email Me
            </a>
            <a
                href="/contact"
                className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition"
            >
                Contact Page
            </a>
            </div>
        </div>
        </section>
    );
}

