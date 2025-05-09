'use client';

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import ServiceSelector from '../components/ServiceSelector';

type ServiceType = 'pc' | 'web';



export default function ServicesPage() {
  const [selectedService] = useState<ServiceType | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedService ? 'auto' : 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedService]);



  return (
    <>
      <Header />

      <ServiceSelector />
    </>
  );
}
