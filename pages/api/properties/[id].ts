import type { NextApiRequest, NextApiResponse } from "next";

const properties = [
  {
    id: "1",
    title: "Modern Studio Apartment",
    location: "Accra, Ghana",
    price: 200,
    imageUrl: "/studio.jpg",
    description: "A cozy studio in the heart of Accra.",
  },
  {
    id: "2",
    title: "Luxury Villa",
    location: "East Legon",
    price: 550,
    imageUrl: "/villa.jpg",
    description: "Spacious luxury villa with pool.",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  const property = properties.find((prop) => prop.id === id);

  if (!property) {
    return res.status(404).json({ message: "Property not found" });
  }

  return res.status(200).json(property);
}
