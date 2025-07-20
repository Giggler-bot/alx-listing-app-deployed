import Link from "next/link";

// ✅ DO this:
type Property = {
  id: string;
  title: string;
  location: string;
  price: number;
  imageUrl: string;
};

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Link href={`/property/${property.id}`}>
      <div className="bg-white rounded-xl shadow p-4 cursor-pointer hover:shadow-lg transition">
        <h3 className="text-xl font-semibold">{property.title}</h3>
        <p className="text-gray-600">{property.location}</p>
        <p className="text-indigo-600 font-bold mt-2">${property.price}</p>
      </div>
    </Link>
  );
}

