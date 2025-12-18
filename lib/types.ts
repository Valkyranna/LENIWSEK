import React from 'react';

export interface TourDate {
  id: string;
  date: string;
  venue: string;
  city: string;
  country: string;
  ticketLink: string;
  soldOut?: boolean;
}

export interface Release {
  id: string;
  title: string;
  type: 'Single' | 'EP' | 'Album';
  year: string;
  coverUrl: string;
  spotifyLink: string;
  appleLink: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}