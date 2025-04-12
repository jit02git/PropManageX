import { useForm } from 'react-hook-form';

const PropertyForm = ({ onSubmit, initialData }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialData || {}
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          {...register('title', { required: true })}
          className="mt-1 block w-full rounded-md border p-2"
        />
        {errors.title && <span className="text-red-500 text-sm">Title is required</span>}
      </div>

      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea
          {...register('description')}
          className="mt-1 block w-full rounded-md border p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Price</label>
        <input
          type="number"
          {...register('price', { required: true })}
          className="mt-1 block w-full rounded-md border p-2"
        />
        {errors.price && <span className="text-red-500 text-sm">Price is required</span>}
      </div>

      <div>
        <label className="block text-sm font-medium">Category</label>
        <select
          {...register('category', { required: true })}
          className="mt-1 block w-full rounded-md border p-2"
        >
          <option value="">Select Category</option>
          {['Apartment', 'Villa', 'Studio', 'House'].map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">Image URL</label>
        <input
          type="url"
          {...register('image')}
          className="mt-1 block w-full rounded-md border p-2"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default PropertyForm;