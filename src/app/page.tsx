import { HeroSection } from '@/components/sections/hero';
import { SkillsSection } from '@/components/sections/skills';
import { FeaturedProjectsSection } from '@/components/sections/featured-projects';

export default function Home() {
  return (
    <div className="pt-16 md:pt-20">
      <HeroSection />
      <SkillsSection />
      <FeaturedProjectsSection />
    </div>
  );
}
