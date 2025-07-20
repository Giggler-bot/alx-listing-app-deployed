import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import PropertyDetail from "@/components/property/PropertyDetail";

type Property = {
  id: string;
  title: string;
  location: string;
  price: number;
  imageUrl: string;
  description: string;
};

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchProperty = async () => {
      try {
        const response = await axios.get(`/api/properties/${id}`);
        setProperty(response.data);
      } catch  {
        setError("Failed to load property details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!property) return <p className="text-center">Property not found</p>;

  return <PropertyDetail property={property} />;
}
