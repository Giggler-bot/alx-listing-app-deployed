type Property = {
  id: string;
  title: string;
  location: string;
  price: number;
  imageUrl: string;
  description: string;
};

export default function PropertyDetail({ property }: { property: Property }) {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-2">{property.title}</h2>
      <p className="text-gray-500 mb-2">{property.location}</p>
      <p className="text-xl font-semibold text-indigo-600 mb-4">${property.price}</p>
      <p className="text-gray-700">{property.description}</p>
    </div>
  );
}
