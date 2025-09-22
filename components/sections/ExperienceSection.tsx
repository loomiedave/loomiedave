import { cards } from '@/config/cards';
import ExpandableCard from '../expandable-card';

interface ProjectProps {
  isVisible: boolean;
}
const ExperienceSection = ({ isVisible }: ProjectProps) => {
  return (
    <section id="projects" className="p-6">
      <div
        className={`transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="mb-4">
          <div className="flex items-center mb-4 px-4">
            <h2 className="text-2xl font-light underline">Experience</h2>
          </div>
          <ExpandableCard cards={cards} />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
