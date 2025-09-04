import { Hero3D } from '@/components/sections/3d-hero';
import { SkillsSection } from '@/components/sections/skills';
import { FeaturedProjectsSection } from '@/components/sections/featured-projects';
import { ExperienceSection } from '@/components/sections/experience';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <div>
      <Hero3D />
      <div className="pt-8">
        <SkillsSection />
        <ExperienceSection /> {/* Add experience here */}
        <FeaturedProjectsSection />
        <ContactSection />
      </div>
    </div>
  );
}
