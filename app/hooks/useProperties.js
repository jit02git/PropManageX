
'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useCreateProperty = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (newProperty) => 
      fetch('/api/properties', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProperty),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(['properties']);
    }
  });
};

const fetchProperties = async (category) => {
  const url = category 
    ? `/api/properties?category=${category}`
    : '/api/properties';
  const res = await fetch(url);
  return res.json();
};

export const useGetProperties = () => {
  const selectedCategory = useSelector(state => state.filter.selectedCategory);
  return useQuery({
    queryKey: ['properties', selectedCategory],
    queryFn: () => fetchProperties(selectedCategory)
  });
};

export const useUpdateProperty = (id) => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (updatedProperty) => 
      fetch(`/api/properties/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProperty),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(['properties']);
      queryClient.invalidateQueries(['property', id]);
    }
  });
};