import {
  ChevronsDownUpIcon,
  ChevronsUpDownIcon,
  CodeXmlIcon,
  DraftingCompassIcon,
  BriefcaseBusinessIcon,
  GraduationCapIcon,
} from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Separator } from '@/components/ui/Separator';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';

const iconMap = {
  code: CodeXmlIcon,
  design: DraftingCompassIcon,
  business: BriefcaseBusinessIcon,
  education: GraduationCapIcon,
} as const;

export type TimelineEntry = {
  id: string;
  title?: string; // Company name or Project title
  subtitle?: string; // -- this is optiional
  period?: string; // Employment period and project period
  logo?: string; // Company logo also optional
  icon?: keyof typeof iconMap;
  description?: string;
  skills?: string[];
  isExpanded?: boolean;
  isCurrent?: boolean; // For "current employer" indicator
  children?: TimelineEntry[]; // Nested items (positions inside company)
};

export function Timeline({
  className,
  entries,
}: {
  className?: string;
  entries: TimelineEntry[];
}) {
  return (
    <div className={cn('bg-background px-4', className)}>
      {entries.map(entry => (
        <TimelineItem key={entry.id} entry={entry} />
      ))}
    </div>
  );
}

function TimelineItem({ entry }: { entry: TimelineEntry }) {
  return (
    <div className="space-y-4 py-4">
      {/* Header (logo + title) */}
      <div className="not-prose flex items-center gap-3">
        <div
          className="flex size-6 shrink-0 items-center justify-center"
          aria-hidden
        >
          {entry.logo ? (
            <Image
              src={entry.logo}
              alt={'IMG'}
              width={24}
              height={24}
              quality={100}
              className="rounded-full"
              unoptimized
            />
          ) : (
            <span className="flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
          )}
        </div>
        <h3 className="text-lg leading-snug font-medium">{entry.title}</h3>

        {entry.isCurrent && (
          <span className="relative flex items-center justify-center">
            <span className="absolute inline-flex size-3 animate-ping rounded-full bg-info opacity-50" />
            <span className="relative inline-flex size-2 rounded-full bg-info" />
            <span className="sr-only">Current</span>
          </span>
        )}
      </div>

      {/* Children (positions or project details) */}
      {entry.children ? (
        <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
          {entry.children.map(child => (
            <TimelinePosition key={child.id} entry={child} />
          ))}
        </div>
      ) : (
        <TimelinePosition entry={entry} />
      )}
    </div>
  );
}

function TimelinePosition({ entry }: { entry: TimelineEntry }) {
  const Icon = iconMap[entry.icon || 'business'];

  return (
    <Collapsible defaultOpen={entry.isExpanded} asChild>
      <div className="relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-background">
        {/* Trigger */}
        <CollapsibleTrigger
          className={cn(
            'group/timeline not-prose block w-full text-left select-none',
            'relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7 before:rounded-lg hover:before:bg-muted/50'
          )}
        >
          <div className="relative z-1 mb-1 flex items-center gap-3">
            <div
              className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground"
              aria-hidden
            >
              <Icon className="size-4" />
            </div>

            <h4 className="flex-1 text-base font-medium text-balance">
              {entry.title}
            </h4>

            <div
              className="shrink-0 text-muted-foreground [&_svg]:size-4"
              aria-hidden
            >
              <ChevronsDownUpIcon className="hidden group-data-[state=open]/timeline:block" />
              <ChevronsUpDownIcon className="hidden group-data-[state=closed]/timeline:block" />
            </div>
          </div>

          <div className="relative z-1 flex items-center gap-2 pl-9 text-sm text-muted-foreground">
            {entry.subtitle && (
              <>
                <dl>
                  <dt className="sr-only">Subtitle</dt>
                  <dd>{entry.subtitle}</dd>
                </dl>

                <Separator
                  className="data-[orientation=vertical]:h-4"
                  orientation="vertical"
                />
              </>
            )}

            <dl>
              <dt className="sr-only">Period</dt>
              <dd>{entry.period}</dd>
            </dl>
          </div>
        </CollapsibleTrigger>

        {/* Content */}
        <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          {entry.description && (
            <Prose className="pt-2 pl-9">
              <ReactMarkdown>{entry.description}</ReactMarkdown>
            </Prose>
          )}

          {Array.isArray(entry.skills) && entry.skills.length > 0 && (
            <ul className="not-prose flex flex-wrap gap-1.5 pt-2 pl-9">
              {entry.skills.map((skill, index) => (
                <li key={index} className="flex">
                  <Skill>{skill}</Skill>
                </li>
              ))}
            </ul>
          )}
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}

function Prose({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'prose prose-sm max-w-none font-mono text-foreground prose-zinc dark:prose-invert',
        'prose-a:font-medium prose-a:break-words prose-a:text-foreground prose-a:underline prose-a:underline-offset-4',
        'prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none',
        className
      )}
      {...props}
    />
  );
}

function Skill({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-lg border bg-muted/50 px-1.5 py-0.5 font-mono text-xs text-muted-foreground',
        className
      )}
      {...props}
    />
  );
}
