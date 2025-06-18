'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import ServiceSelector from '../components/services/ServiceSelector';

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


  return (
    <>
      
      <ServiceSelector
        selectedService={selectedService}
        setSelectedService={setSelectedService}
      />
    </>
  );
}