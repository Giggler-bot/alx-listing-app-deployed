import type { NextApiRequest, NextApiResponse } from "next";
// import { title } from "process";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json([
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
    {
        id: "3",
        title: "Heroman Mansion",
        location: "Giggler City",
        price: 500,
        description: "Heroman mansion at it's finest"
    }
  ]);
}
