import { TourDate, Release } from './types';

export const TOUR_DATES: TourDate[] = [
  {
    id: '1',
    date: 'OCT 24',
    venue: 'ROXY',
    city: 'Prague',
    country: 'CZ',
    ticketLink: '#',
    soldOut: true,
  },
  {
    id: '2',
    date: 'NOV 02',
    venue: 'Fléda Club',
    city: 'Brno',
    country: 'CZ',
    ticketLink: '#',
  },
  {
    id: '3',
    date: 'NOV 15',
    venue: 'Cross Club',
    city: 'Prague',
    country: 'CZ',
    ticketLink: '#',
  },
  {
    id: '4',
    date: 'DEC 05',
    venue: 'Fabric',
    city: 'Ostrava',
    country: 'CZ',
    ticketLink: '#',
  },
  {
    id: '5',
    date: 'DEC 12',
    venue: 'Storm Club',
    city: 'Prague',
    country: 'CZ',
    ticketLink: '#',
  },
  {
    id: '6',
    date: 'JAN 20',
    venue: 'Berghain',
    city: 'Berlin',
    country: 'DE',
    ticketLink: '#',
  }
];

export const RELEASES: Release[] = [
  {
    id: 'r1',
    title: "There's Always Time",
    type: 'Single',
    year: '2025',
    coverUrl: '/LENIWSEK/a2662732270_10.webp',
    spotifyLink: '#',
    appleLink: '#'
  },
  {
    id: 'r2',
    title: "Madhouse",
    type: 'Single',
    year: '2025',
    coverUrl: '/LENIWSEK/madhouse.webp',
    spotifyLink: 'https://soundcloud.com/leniwsek/madhouse',
    appleLink: 'https://soundcloud.com/leniwsek/madhouse'
  },
  {
    id: 'r3',
    title: "There's Always Time",
    type: 'Single',
    year: '2025',
    coverUrl: '/a2662732270_10.webp',
    spotifyLink: '#',
    appleLink: '#'
  },
  {
    id: 'r4',
    title: "There's Always Time",
    type: 'Single',
    year: '2025',
    coverUrl: '/a2662732270_10.webp',
    spotifyLink: '#',
    appleLink: '#'
  }
];

export const CONTACT_EMAIL = "mgmt@leniswek.cz";