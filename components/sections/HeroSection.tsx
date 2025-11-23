'use client';
import { PixelatedCanvas } from '@/components/ui/pixelated-canvas';
import { HeroSectionProps } from '@/types/type';
import ContactDetailsList from './components/ContactDetailsList';
import SocialMediaGrid from './components/SocialMediaGrid';
import Name_Text from './components/Name_Text';
import { Grid } from '../ui/Grid';
import { useState, useEffect } from 'react';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';

const HeroSection = ({ isVisible }: HeroSectionProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const showTooltipRandomly = () => {
      const randomDelay = Math.random() * 1000 + 3000;
      
      setTimeout(() => {
        setShowTooltip(true);
        setTimeout(() => {
          setShowTooltip(false);
          showTooltipRandomly();
        }, 3000);
      }, randomDelay);
    };

    showTooltipRandomly();
  }, []);

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
              <Tooltip open={showTooltip}>
                <TooltipTrigger asChild>
                  <div className="w-24 h-24 md:w-48 md:h-48 rounded-full">
                    <div className="w-full h-full rounded-full bg-border flex items-center justify-center overflow-hidden">
                      <PixelatedCanvas
                        src="/spiderman.jpg"
                        width={192}
                        height={192}
                        cellSize={4}
                        dotScale={0.9}
                        shape="square"
                        backgroundColor="#000000"
                        dropoutStrength={0.1}
                        interactive
                        distortionStrength={0.1}
                        distortionRadius={200}
                        distortionMode="repel"
                        followSpeed={0.4}
                        jitterStrength={4}
                        jitterSpeed={1}
                        sampleAverage
                        className="rounded-xl shadow-lg w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Hi! hover over this image</p>
                </TooltipContent>
              </Tooltip>
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