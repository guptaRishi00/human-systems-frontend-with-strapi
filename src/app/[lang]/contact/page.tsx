import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import SharedCta from "@/components/shared/SharedCta";

export const metadata = {
    title: "Contact Us — Socle RH | Human Systems",
    description:
        "Get in touch with the Human Systems team. Request a demo, ask about pricing, or learn how Socle RH can transform your HR operations.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <ContactHero />
            <ContactForm />
            <SharedCta />
        </main>
    );
}
