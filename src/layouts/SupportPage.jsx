import React from 'react';
import { HeroSupport } from './support/Hero';
import { FAQPreview } from './support/FAQPreview';
import { Assistance } from './support/Assistance';

export const SupportPage = () => (
  <>
    <HeroSupport />
    <FAQPreview />
    <Assistance />
  </>
);
