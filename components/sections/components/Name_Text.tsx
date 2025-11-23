import { SITE_CONFIG } from '@/config/site';

interface props {
  isVisible: boolean;
}

export default function Name_Text({ isVisible }: props) {
  return (
    <div className="flex-1 min-w-0">
      <div>
        <div className="mb-6">
          <div className="flex flex-col mb-2">
            <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-md font-bold text-transparent md:text-3xl">
              {SITE_CONFIG.personal.name}
            </p>

            <p className="relative z-20 underline decoration-neutral-400 bg-gradient-to-b from-neutral-400 to-neutral-400 bg-clip-text py-6 text-sm font-bold text-transparent md:text-xl">
              -- {SITE_CONFIG.personal.title} --
            </p>

            {/* <div className="flex items-center justify-center w-4 h-4 md:w-6 md:h-6 bg-blue-500 rounded-full">
              <Svg />
            </div> */}
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-x-0 {
          transform: rotateX(0deg);
        }
        .rotate-x-180 {
          transform: rotateX(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .duration-600 {
          transition-duration: 600ms;
        }
      `}</style>
    </div>
  );
}

const Svg = () => {
  return (
    <svg
      className="w-4 h-4 md:w-8 md:h-8 text-white"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
