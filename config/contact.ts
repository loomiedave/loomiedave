import { Phone, MapPin, Mail, Briefcase } from 'lucide-react';

export const CONTACT_DETAILS = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+228 70 68 89 77',
    href: 'tel:+22870688977',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'loomiedave@gmail.com',
    href: 'mailto:john.doe@example.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Lome, Togo',
    href: null,
  },
  {
    icon: Briefcase,
    label: 'Experience',
    value: '4+ Years',
    href: null,
  },
];
