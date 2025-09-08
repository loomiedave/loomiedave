import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { PROJECTS_CONFIG } from '@/config/site';

interface TimelineProjectsProps {
  isVisible: boolean;
}

const TimelineProjects = ({ isVisible }: TimelineProjectsProps) => {
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});

  const toggleItem = (index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

      <div className="space-y-2">
        {PROJECTS_CONFIG.map((project, index) => (
          <div
            key={index}
            className={`relative pl-8 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <div className="absolute left-2 top-2 w-4 h-4 bg-chart-2 rounded-full border-4 border-sidebar-border shadow-lg" />

            <Collapsible
              open={openItems[index]}
              onOpenChange={() => toggleItem(index)}
            >
              <div className=" rounded-lg shadow-sm border border-border">
                <CollapsibleTrigger className="w-full p-6 text-left transition-colors rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-between w-full mr-2 ">
                      <h3 className="text-lg font-medium text-foreground">
                        {project.title}
                      </h3>
                      <span className="text-sm text-muted-foreground border border-border px-3 py-1 rounded font-second">
                        {project.year}
                      </span>
                    </div>
                    {openItems[index] ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 pb-6">
                  <div className="pt-2 border-t border-border/20">
                    <p className="text-muted-foreground mb-3 text-sm">
                      {project.description}
                    </p>
                    <div className="text-sm text-chart-3 font-medium">
                      {project.tech}
                    </div>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineProjects;
