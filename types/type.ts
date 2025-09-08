export interface NavigationProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
  alwaysShow?: boolean;
}

export interface HeroSectionProps {
  isVisible: boolean;
}
