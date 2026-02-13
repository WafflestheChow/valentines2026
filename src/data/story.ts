import type { ImageMetadata } from 'astro';

import heroFavorite from '../assets/photos/hero-favorite.svg';
import septemberHero from '../assets/photos/september-hero.svg';
import septemberExtra1 from '../assets/photos/september-extra-1.svg';
import septemberExtra2 from '../assets/photos/september-extra-2.svg';
import octoberLeft from '../assets/photos/october-left.svg';
import octoberRight from '../assets/photos/october-right.svg';
import novemberHero from '../assets/photos/november-hero.svg';
import novemberExtra1 from '../assets/photos/november-extra-1.svg';
import novemberExtra2 from '../assets/photos/november-extra-2.svg';
import decemberHero from '../assets/photos/december-hero.svg';
import decemberExtra1 from '../assets/photos/december-extra-1.svg';
import decemberExtra2 from '../assets/photos/december-extra-2.svg';
import januaryHero from '../assets/photos/january-hero.svg';
import januaryExtra1 from '../assets/photos/january-extra-1.svg';
import januaryExtra2 from '../assets/photos/january-extra-2.svg';
import februaryHero from '../assets/photos/february-hero.svg';

export type Month =
  | 'September'
  | 'October'
  | 'November'
  | 'December'
  | 'January'
  | 'February';

export type ChapterMode = 'photo-heavy' | 'long-distance' | 'closing';

export interface Chapter {
  id: string;
  month: Month;
  title: string;
  dateRange?: string;
  body: string;
  heroImage?: ImageMetadata;
  galleryImages?: ImageMetadata[];
  mode: ChapterMode;
  showInJourney: boolean;
  leftImage?: ImageMetadata;
  rightImage?: ImageMetadata;
  leftLine?: string;
  rightLine?: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  image: ImageMetadata;
  imageAlt: string;
}

export const heroContent: HeroContent = {
  title: 'Distance to Reunion',
  subtitle: 'From September to February, every month gave us a new reason to choose each other.',
  image: heroFavorite,
  imageAlt: 'A favorite memory together'
};

export const chapters: Chapter[] = [
  {
    id: 'september',
    month: 'September',
    title: 'A Week in New York',
    body: 'A week that felt both ordinary and unforgettable, one block and one laugh at a time.',
    heroImage: septemberHero,
    galleryImages: [septemberExtra1, septemberExtra2],
    mode: 'photo-heavy',
    showInJourney: false
  },
  {
    id: 'october',
    month: 'October',
    title: 'Long Distance, Still Us',
    dateRange: 'Oct 4 - Nov 6',
    body: 'Even with miles between us, we kept showing up for each other in the little daily ways.',
    mode: 'long-distance',
    showInJourney: false,
    leftImage: octoberLeft,
    rightImage: octoberRight,
    leftLine: 'Same moon, different skyline.',
    rightLine: 'Still ending every day with you.'
  },
  {
    id: 'november',
    month: 'November',
    title: 'Seoul, Jeju, Busan',
    body: 'Three cities, one long adventure, and the feeling that every train stop was a new memory.',
    heroImage: novemberHero,
    galleryImages: [novemberExtra1, novemberExtra2],
    mode: 'photo-heavy',
    showInJourney: true
  },
  {
    id: 'december',
    month: 'December',
    title: 'A New Home Together',
    body: 'Boxes, late-night takeout, Christmas lights, and a New Year that finally felt like home.',
    heroImage: decemberHero,
    galleryImages: [decemberExtra1, decemberExtra2],
    mode: 'photo-heavy',
    showInJourney: true
  },
  {
    id: 'january',
    month: 'January',
    title: 'Tokyo Days',
    body: 'New streets, quiet stations, and that familiar comfort of walking side by side.',
    heroImage: januaryHero,
    galleryImages: [januaryExtra1, januaryExtra2],
    mode: 'photo-heavy',
    showInJourney: true
  },
  {
    id: 'february',
    month: 'February',
    title: 'A Quiet Valentine\'s',
    body: 'No grand plans needed, just us and one more reason to celebrate this love.',
    heroImage: februaryHero,
    mode: 'closing',
    showInJourney: false
  }
];
