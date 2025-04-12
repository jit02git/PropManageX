'use client';

import PropertyForm from '../components/PropertyForm';
import { useRouter } from 'next/navigation';
import { useCreateProperty } from '../hooks/useProperties';

export default function CreateProperty() {
  const router = useRouter();
  const createProperty = useCreateProperty();

  const handleSubmit = (data) => {
    createProperty.mutate(data, {
      onSuccess: () => router.push('/')
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Create New Property</h1>
      <PropertyForm onSubmit={handleSubmit} />
    </div>
  );
}