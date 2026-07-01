import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero";
import AboutSection from "@/components/about";
import SkillsSection from "@/components/skills";
import WorkSection from "@/components/work";
import ExperienceTimeline from "@/components/experience";
import CertificationsSection from "@/components/certifications";
import ContactSection from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans text-foreground antialiased selection:bg-accent selection:text-accent-foreground">
      {/* Floating Header Navigation */}
      <Navbar />

      <main className="flex-grow flex flex-col w-full">
        {/* Welcome Hero Section */}
        <div id="hero">
          <HeroSection />
        </div>

        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects/Work Section */}
        <WorkSection />

        {/* Experience & Education Timeline Section */}
        <ExperienceTimeline />

        {/* Certifications Section */}
        <CertificationsSection />

        {/* Contact Form Section */}
        <ContactSection />
      </main>

      {/* Website Footer */}
      <Footer />
    </div>
  );
}
