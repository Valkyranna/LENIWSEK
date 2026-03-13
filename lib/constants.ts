import { TourDate, Release } from './types';

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

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
    id: 'mystique',
    title: "Mystique",
    year: "2026",
    type: "Single",
    coverUrl: "https://f4.bcbits.com/img/a0558301594_10.jpg",
    spotifyLink: "https://leniwsek.bandcamp.com/track/mystique",
    description: "Inspired by Klimeks with a wave/trap vibe. A deep dive into atmospheric textures and driving rhythms.",
    story: "This track was an exploration of the wave genre, heavily influenced by Klimeks' signature sound. It matches a wave/trap vibe that I've been wanting to explore for a while.",
    process: "Created with a focus on atmospheric depth, layering ethereal pads with sharp, energetic trap percussion. It's a track that didn't make it onto my future EP but stands strong as a single."
  },
  {
    id: 'valkyrie',
    title: "Valkyrie",
    year: "2026",
    type: "Single",
    coverUrl: "https://f4.bcbits.com/img/a2549966444_10.jpg",
    spotifyLink: "https://leniwsek.bandcamp.com/track/valkyrie",
    description: "Inspired by Game of Thrones and dedicated to a friend. Cinematic wave music with powerful emotional undertones.",
    story: "Heavily inspired by the epic atmosphere of Game of Thrones. I dedicated this track to a very close friend of mine, aiming to capture a sense of strength and destiny.",
    process: "The production involved blending cinematic orchestral elements like strings and brass with deep, resonant wave filters. It was about finding that balance between epic scale and intimate emotion."
  },
  {
    id: 'madhouse',
    title: "Madhouse",
    year: "2025",
    type: "Single",
    coverUrl: "https://f4.bcbits.com/img/a3920959247_10.jpg",
    spotifyLink: "https://leniwsek.bandcamp.com/track/madhouse",
    description: "Leniwsek's first song ever released, created shortly after getting a DAW in early December 2025.",
    story: "My debut release. I made this track just days after getting my first DAW in early December 2025. It represents the very beginning of my journey into music production.",
    process: "A raw and experimental track where I was learning the ropes of my DAW. It's built around a haunting vocal sample and layered with experimental sound design that sets the tone for my project."
  }
];

export const CONTACT_EMAIL = "mgmt@leniswek.cz";