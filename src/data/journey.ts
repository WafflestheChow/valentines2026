export type JourneyMonth = 'November' | 'December' | 'January';

export interface JourneyStop {
  id: string;
  label: string;
  month: JourneyMonth;
  tag?: string;
  xDesktop: number;
  yDesktop: number;
  order: number;
}

export const journeyStops: JourneyStop[] = [
  {
    id: 'seoul',
    label: 'Seoul',
    month: 'November',
    tag: 'reunion',
    xDesktop: 10,
    yDesktop: 55,
    order: 1
  },
  {
    id: 'jeju',
    label: 'Jeju',
    month: 'November',
    tag: 'coast',
    xDesktop: 28,
    yDesktop: 20,
    order: 2
  },
  {
    id: 'busan',
    label: 'Busan',
    month: 'November',
    tag: 'night',
    xDesktop: 46,
    yDesktop: 58,
    order: 3
  },
  {
    id: 'new-home',
    label: 'New Home',
    month: 'December',
    tag: 'home',
    xDesktop: 66,
    yDesktop: 28,
    order: 4
  },
  {
    id: 'tokyo',
    label: 'Tokyo',
    month: 'January',
    tag: 'wonder',
    xDesktop: 86,
    yDesktop: 50,
    order: 5
  }
];
