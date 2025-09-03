import { Hero3D } from '@/components/sections/3d-hero';
import { SkillsSection } from '@/components/sections/skills';
import { FeaturedProjectsSection } from '@/components/sections/featured-projects';

export default function Home() {
  return (
    <div>
      <Hero3D />
      <div className="pt-8">
        <SkillsSection />
        <FeaturedProjectsSection />
      </div>
    </div>
  );
}
