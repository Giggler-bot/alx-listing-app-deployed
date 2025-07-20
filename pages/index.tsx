import { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "@/components/property/PropertyCard"; // ✅ Make sure this is the component, not a type

type Property = {
  id: string;
  title: string;
  location: string;
  price: number;
  imageUrl: string;
};

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties");
        setProperties(response.data);
      } catch  {
        setError("Something went wrong while loading properties.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <section className="py-12 px-6">
      <h1 className="text-4xl text-center font-bold mb-4">Find your favorite place here!</h1>
      {loading && <p className="text-center">Loading properties...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
}
