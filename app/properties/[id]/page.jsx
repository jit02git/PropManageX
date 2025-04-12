'use client';

import { use } from 'react';
import { useQuery } from '@tanstack/react-query';
import PropertyForm from '../../components/PropertyForm';
import { useRouter } from 'next/navigation';
import { useUpdateProperty } from '../../hooks/useProperties';

export default function EditProperty({ params }) {
  const router = useRouter();
  const { id } = use(params);
  
  const { data: property, isLoading } = useQuery({
    queryKey: ['property', id],
    queryFn: () => fetch(`/api/properties/${id}`).then(res => res.json())
  });

  const updateProperty = useUpdateProperty(id);

  const handleSubmit = (data) => {
    updateProperty.mutate(data, {
      onSuccess: () => router.push('/')
    });
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Edit Property</h1>
      <PropertyForm onSubmit={handleSubmit} initialData={property} />
    </div>
  );
}