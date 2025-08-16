import Image from "next/image";
import ProfileCard from "@/components/ProfileCard";
import SkillsSection from "@/components/SkillsSection";
import Timeline from "@/components/Timeline";
import pic from "../../../public/profile.jpg";

export const metadata = {
  title: "Portfolio - About",
  description: "The about page of my portfolio.",
};

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      {/* Intro Section */}
      <section className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <Image
            src={pic}
            alt="Profile photo"
            width={200}
            height={200}
            className="rounded-full border-4 border-primary shadow-lg"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Anthony Escobedo</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I&apos;m Anthony Richard Escobedo Conislla, a dedicated software engineering student at Ensign College
            (B.S., expected 2025, GPA 3.8) with a strong foundation in computer science from San Ignacio de Loyola
            Institute in Lima, Peru (GPA 3.9). With over a decade of experience, I specialize in creating impactful
            solutions, from my current role as LMS Support at Ensign College, where I troubleshoot Canvas issues and
            enhance processes using APIs, to my previous position as Tech Lead at Intellisoft, where I developed custom
            software, managed databases, and led client projects. My technical skills include React.js, JavaScript,
            RESTful APIs, GraphQL, Jest, Docker, and Git, complemented by certifications in JavaScript Essentials and
            RESTful API Design. Notable projects include Shepherd&apos;s Guide, a Django and React web app for tracking
            at-risk students, and an electronic invoicing system certified by SUNAT Peru. Passionate about teamwork,
            honesty, and innovation, I’m excited to build user-focused solutions and collaborate on meaningful tech
            ventures.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Timeline / Experience Section */}
      <Timeline />
    </main>
  );
}
