// Fixed HeroSection Component
import { HeroSectionProps } from '@/types/type';
import ContactDetailsList from './components/ContactDetailsList';
import SocialMediaGrid from './components/SocialMediaGrid';
import Name_Text from './components/Name_Text';
import { Grid } from '../ui/Grid';

const HeroSection = ({ isVisible }: HeroSectionProps) => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative px-8 pt-16"
    >
      <Grid />
      <div className="container lg:px-8 relative z-10">
        <div className="flex flex-row items-start gap-8 lg:gap-12 mb-6">
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-16 h-16 md:w-48 md:h-48 rounded-full">
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
          <Name_Text isVisible={isVisible} />
        </div>

        <ContactDetailsList isVisible={isVisible} />
        <SocialMediaGrid isVisible={isVisible} />
      </div>
    </section>
  );
};

export default HeroSection;
