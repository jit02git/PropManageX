import Link from 'next/link';

const PropertyCard = ({ property }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      {property.image && (
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-48 object-cover rounded-t-lg"
        />
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold">{property.title}</h3>
        <p className="text-gray-600 mt-2">{property.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold">₹{property.price}</span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            {property.category}
          </span>
        </div>
        <Link 
          href={`/properties/${property._id}`}
          className="mt-4 inline-block text-blue-500 hover:text-blue-700"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;