'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Header from '../components/Header';
import ServiceSelector from '../components/ServiceSelector';

type ServiceType = 'pc' | 'web';

const curtainVariants = {
  closed: { width: '50%' },
  openLeft: { width: 0, transition: { duration: 1, ease: 'easeInOut' } },
  openRight: { width: 0, transition: { duration: 1, ease: 'easeInOut' } },
};

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedService ? 'auto' : 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedService]);

  const handleSelect = (service: ServiceType) => {
    setSelectedService(service);
  };

  const spotlightFadeOut = { opacity: 0, transition: { duration: 1, ease: 'easeInOut' } };

  return (
    <>
      <Header />

      <ServiceSelector />
    </>
  );
}
