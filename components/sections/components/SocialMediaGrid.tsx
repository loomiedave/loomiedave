import Image from 'next/image';
import Link from 'next/link';

import { SOCIAL_CONFIG } from '@/config/socials';

interface gridProps {
  isVisible: boolean;
}

export default function SocialMediaGrid({ isVisible }: gridProps) {
  return (
    <div>
      <h2 className="text-lg underline text-center mb-8">Connect with me</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {SOCIAL_CONFIG.map((SOCIAL_CONFIG, index) => (
          <Link
            key={SOCIAL_CONFIG.name}
            href={SOCIAL_CONFIG.url}
            className={`group flex items-center space-x-3 p-4 bg-background rounded-xl shadow-sm border border-border`}
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div className="w-12 h-12 relative">
              <Image
                src={SOCIAL_CONFIG.src}
                alt={SOCIAL_CONFIG.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-medium group-hover:underline text-sm font-second">
                {SOCIAL_CONFIG.name}
              </span>
              <span className="text-xs text-muted-foreground">
                {SOCIAL_CONFIG.username}
              </span>
            </div>
            <div className="ml-auto">
              <svg
                className="w-4 h-4 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
