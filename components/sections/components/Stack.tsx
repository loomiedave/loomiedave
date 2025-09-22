import Image from 'next/image';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '../../ui/tooltip';
import { STACK_CONFIG } from '@/config/stack';

interface StackProps {
  isVisible: boolean;
}

export default function Stack({ isVisible }: StackProps) {
  return (
    <div className="container mx-auto">
      <div className="justify-start items-left mb-2">
        <h2 className="text-2xl font-light underline ">Stack</h2>
      </div>
      <TooltipProvider>
        <div className="flex flex-wrap gap-4">
          {STACK_CONFIG.techStack.map((tech, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <div
                  className={`transition-all duration-300 hover:scale-110 cursor-pointer ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  <div className="w-12 h-12 relative">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{tech.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </div>
  );
}
