
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';

const cuisines = [
  { name: 'Tout', flag: '🌍' },
  { name: 'Indien', flag: '🇮🇳' },
  { name: 'Japonais', flag: '🇯🇵' },
  { name: 'Italien', flag: '🇮🇹' },
  { name: 'Marocain', flag: '🇲🇦' },
  { name: 'Sénégalais', flag: '🇸🇳' },
  { name: 'Libanais', flag: '🇱🇧' },
  { name: 'Chinois', flag: '🇨🇳' },
  { name: 'Ivoirien', flag: '🇨🇮' },
  { name: 'Végétarien', flag: '🌱' },
];

interface CuisineFiltersProps {
  onFilterChange?: (cuisine: string) => void;
}

export const CuisineFilters: React.FC<CuisineFiltersProps> = ({ onFilterChange }) => {
  const [selectedCuisine, setSelectedCuisine] = useState('Tout');

  const handleFilterClick = (cuisine: string) => {
    setSelectedCuisine(cuisine);
    onFilterChange?.(cuisine);
  };

  return (
    <div className="p-4 bg-white">
      <h3 className="text-lg font-semibold text-marmeet-text mb-3 font-poppins">
        Filtrer par cuisine
      </h3>
      <div className="flex flex-wrap gap-2">
        {cuisines.map((cuisine) => (
          <Badge
            key={cuisine.name}
            variant={selectedCuisine === cuisine.name ? "default" : "outline"}
            className={`cursor-pointer transition-all duration-200 px-3 py-2 text-sm font-nunito ${
              selectedCuisine === cuisine.name
                ? 'bg-marmeet-primary text-white hover:bg-marmeet-secondary shadow-warm'
                : 'bg-white text-marmeet-text border-marmeet-primary/30 hover:bg-marmeet-cream-soft hover:border-marmeet-primary'
            }`}
            onClick={() => handleFilterClick(cuisine.name)}
          >
            <span className="mr-1">{cuisine.flag}</span>
            {cuisine.name}
          </Badge>
        ))}
      </div>
    </div>
  );
};
