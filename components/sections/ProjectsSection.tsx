
import TimelineProjects from './components/TimelineProjects';

interface ProjectsSectionProps {
  isVisible: boolean;
}

const ProjectsSection = ({ isVisible }: ProjectsSectionProps) => {
  return (
    <section id="projects" className="min-h-screen py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <h2 className="text-4xl font-light underline">Projects</h2>
            </div>
          </div>
          <TimelineProjects isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
