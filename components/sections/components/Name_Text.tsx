import { useEffect, useState } from 'react';
import { SITE_CONFIG, TEXTS_CONFIG } from '@/config/site';

interface props {
  isVisible: boolean;
}
export default function Name_Text({ isVisible }: props) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!isVisible) return;

    const currentText = TEXTS_CONFIG[currentTextIndex];

    if (isTyping) {
      if (displayText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentTextIndex(prev => (prev + 1) % TEXTS_CONFIG.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, currentTextIndex, isVisible]);

  return (
    <div className="flex-1 min-w-0">
      <div
        className={`transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl">{SITE_CONFIG.personal.name}</h1>
            <div className="flex items-center justify-center w-6 h-6 lg:w-8 lg:h-8 bg-blue-500 rounded-full">
              <svg
                className="w-4 h-4 lg:w-5 lg:h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="w-16 h-1 bg-chart-2" />
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-second sm:text-xl lg:text-3xl text-muted-foreground min-h-[2rem] sm:min-h-[2.5rem] lg:min-h-[4rem]">
            {displayText}
            <span className="animate-pulse text-chart-2">|</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
