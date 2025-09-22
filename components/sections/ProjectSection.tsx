import { EXPERIENCE_CONFIG } from '@/config/experience';

interface ExperienceSectionProps {
  isVisible: boolean;
}

const ProjectSection = ({ isVisible }: ExperienceSectionProps) => {
  return (
    <section id="experience" className="min-h-screen py-20">
      <div className="container mx-auto px-8 max-w-6xl">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center mb-12">
            <h2 className="text-4xl font-light underline">Projects</h2>
          </div>

          <div className="space-y-8">
            {EXPERIENCE_CONFIG.map((exp, index) => (
              <div
                key={index}
                className={` p-8 rounded-lg border border-border transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-md font-medium mb-1">{exp.role}</h3>
                    <p className="text-chart-2 text-lg font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-3 ">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-chart-2 text-foreground px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
