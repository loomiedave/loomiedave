import { cards } from '@/config/cards';
import ExpandableCard from '../expandable-card';

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
          <ExpandableCard cards={cards} />
        </div>
    </section>
  );
};

export default ExperienceSection;
