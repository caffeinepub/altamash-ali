import { useState, useCallback } from 'react';
import { pricingData, getAllPackagesForService } from '../data/pricingData';

export interface OrderFormState {
  serviceId: string;
  packageLabel: string;
  profileUrl: string;
  price: number;
  customerWhatsApp: string;
  isSubmitted: boolean;
  orderId: bigint | null;
}

export function useOrderForm() {
  const [serviceId, setServiceId] = useState('');
  const [packageLabel, setPackageLabel] = useState('');
  const [profileUrl, setProfileUrl] = useState('');
  const [price, setPrice] = useState(0);
  const [customerWhatsApp, setCustomerWhatsApp] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderId, setOrderId] = useState<bigint | null>(null);

  const availablePackages = serviceId ? getAllPackagesForService(serviceId) : [];

  const handleServiceChange = useCallback((newServiceId: string) => {
    setServiceId(newServiceId);
    setPackageLabel('');
    setPrice(0);
  }, []);

  const handlePackageChange = useCallback((label: string) => {
    setPackageLabel(label);
    const pkg = availablePackages.find(p => p.label === label);
    if (pkg) setPrice(pkg.price);
  }, [availablePackages]);

  const getWhatsAppMessage = useCallback(() => {
    const service = pricingData.find(s => s.id === serviceId);
    const serviceName = service?.name ?? serviceId;
    return encodeURIComponent(
      `Hi Altamash! I want to order:\n\n` +
      `📦 Service: ${serviceName}\n` +
      `📊 Package: ${packageLabel}\n` +
      `🔗 Profile/Video URL: ${profileUrl}\n` +
      `💰 Price: ₹${price}\n\n` +
      `Please confirm my order. Thank you!`
    );
  }, [serviceId, packageLabel, profileUrl, price]);

  const getWhatsAppUrl = useCallback(() => {
    return `https://wa.me/917668237595?text=${getWhatsAppMessage()}`;
  }, [getWhatsAppMessage]);

  const isValid = serviceId !== '' && packageLabel !== '' && profileUrl.trim() !== '';

  const markSubmitted = useCallback((id: bigint) => {
    setIsSubmitted(true);
    setOrderId(id);
  }, []);

  const reset = useCallback(() => {
    setServiceId('');
    setPackageLabel('');
    setProfileUrl('');
    setPrice(0);
    setCustomerWhatsApp('');
    setIsSubmitted(false);
    setOrderId(null);
  }, []);

  return {
    serviceId,
    packageLabel,
    profileUrl,
    price,
    customerWhatsApp,
    isSubmitted,
    orderId,
    availablePackages,
    isValid,
    handleServiceChange,
    handlePackageChange,
    setProfileUrl,
    setCustomerWhatsApp,
    getWhatsAppUrl,
    markSubmitted,
    reset,
  };
}
