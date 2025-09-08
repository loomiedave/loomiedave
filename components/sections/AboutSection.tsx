import { ABOUT_CONFIG } from '@/config/site';
import Stack from './components/Stack';

interface AboutSectionProps {
  isVisible: boolean;
}

const AboutSection = ({ isVisible }: AboutSectionProps) => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-8 max-w-6xl">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center mb-12">
            <h2 className="text-4xl font-light underline">About Me</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              {ABOUT_CONFIG.description.map((paragraph, index) => (
                <p key={index} className="text-sm leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            <Stack isVisible={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
