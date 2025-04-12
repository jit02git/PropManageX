'use client';

import { useSelector } from 'react-redux';
import PropertyCard from './components/PropertyCard';
import FilterDropdown from './components/FilterDropdown';
import { useGetProperties } from './hooks/useProperties';
import Link from 'next/link';

export default function Home() {
  const { data: properties, isLoading } = useGetProperties();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Properties</h1>
        <div className="flex gap-4">
          <FilterDropdown />
          <Link
            href="/create"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Add Property
          </Link>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties?.map(property => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </div>
  );
}