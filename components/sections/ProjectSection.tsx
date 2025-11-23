import { Timeline } from '../ui/timeline-component';
import { PROJECTS } from '@/config/projects';

interface ExperienceSectionProps {
  isVisible: boolean;
}

const ProjectSection = ({ isVisible }: ExperienceSectionProps) => {
  return (
    <section id="experience" className="py-6">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="flex items-center mb-12">
          <h2 className="text-4xl font-light underline">Featured Project</h2>
        </div>
        <Timeline entries={PROJECTS} />
      </div>
    </section>
  );
};

export default ProjectSection;
