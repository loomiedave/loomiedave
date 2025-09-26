import { Timeline } from '../ui/timeline-component';
import { WORK_EXPERIENCE } from '@/config/experience';

interface ProjectProps {
  isVisible: boolean;
}
const ExperienceSection = ({ isVisible }: ProjectProps) => {
  return (
    <section id="projects" className="p-6">
      <div className="mb-4">
        <div className="flex items-center mb-4 px-4">
          <h2 className="text-2xl font-light underline">Experience</h2>
        </div>
        <Timeline entries={WORK_EXPERIENCE} />
      </div>
    </section>
  );
};

export default ExperienceSection;
