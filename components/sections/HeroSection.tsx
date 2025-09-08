import { HeroSectionProps } from '@/types/type';

import AnimatedChartBG from '../ui/AnimatedChartBG';
import ContactDetailsList from './components/ContactDetailsList';
import SocialMediaGrid from './components/SocialMediaGrid';
import Name_Text from './components/Name_Text';

const HeroSection = ({ isVisible }: HeroSectionProps) => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32"
    >
      <AnimatedChartBG isVisible={isVisible} />

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">

        <div className="flex flex-row items-start gap-8 lg:gap-12 mb-16">

          <div className="flex-shrink-0">
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <div className="relative">
                <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full">
                  <div className="w-full h-full rounded-full bg-border flex items-center justify-center overflow-hidden">
                    <img
                      src="/spiderman.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Name_Text isVisible={isVisible} />
        </div>

        <ContactDetailsList isVisible={isVisible} />

        <SocialMediaGrid isVisible={isVisible} />
      </div>
    </section>
  );
};

export default HeroSection;
