'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Header from '../components/Header';
import ServiceSelector from '../components/ServiceSelector';

type ServiceType = 'pc' | 'web';

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Reset selectedService when navigating to /services
  useEffect(() => {
    if (pathname === '/services') {
      console.log('Navigated to /services, resetting selectedService');
      setSelectedService(null);
    }
  }, [pathname]);

  // Function to handle manual reset (passed to Header)
  const resetServiceSelection = () => {
    console.log('Resetting service selection');
    setSelectedService(null);
    router.push('/services?reset=true', { scroll: false });
  };

  return (
    <>
      <Header resetServiceSelection={resetServiceSelection} />
      <ServiceSelector
        selectedService={selectedService}
        setSelectedService={setSelectedService}
      />
    </>
  );
}