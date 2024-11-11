import type { Metadata } from 'next';

export const baseMetadata: Metadata = {
  title: {
    template: '%s | Computer Repair Shop',
    default: 'Computer Repair Shop',
  },
  description: "Dan's computer repair shop",
  applicationName: 'Repair Shop',
};

export const errorMetadata: Metadata = {
  title: 'Page Not Found',
  description: "Dan's computer repair shop",
};
