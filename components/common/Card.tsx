import React from 'react';

export interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc }) => (
  <div className="border rounded-lg shadow-md p-4">
    <img src={imageSrc} alt={title} className="w-full h-48 object-cover rounded mb-2" />
    <h2 className="text-lg font-semibold">{title}</h2>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default Card;
