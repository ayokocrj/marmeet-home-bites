
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Filter, X } from 'lucide-react';

const cuisineTypes = [
  { name: 'Indien', flag: '🇮🇳', count: 12 },
  { name: 'Japonais', flag: '🇯🇵', count: 8 },
  { name: 'Italien', flag: '🇮🇹', count: 15 },
  { name: 'Marocain', flag: '🇲🇦', count: 6 },
  { name: 'Sénégalais', flag: '🇸🇳', count: 9 },
  { name: 'Libanais', flag: '🇱🇧', count: 4 },
  { name: 'Chinois', flag: '🇨🇳', count: 11 },
  { name: 'Végétarien', flag: '🌱', count: 7 }
];

const specialties = [
  'Sans gluten',
  'Végétarien', 
  'Végan',
  'Halal',
  'Bio',
  'Épicé',
  'Sucré',
  'Sans lactose'
];

interface AdvancedFiltersProps {
  isOpen: boolean;
  onClose: () => void;
  onFilterChange?: (filters: any) => void;
}

export const AdvancedFilters: React.FC<AdvancedFiltersProps> = ({ 
  isOpen, 
  onClose, 
  onFilterChange 
}) => {
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 30]);
  const [distance, setDistance] = useState([5]);

  const toggleCuisine = (cuisine: string) => {
    setSelectedCuisines(prev => 
      prev.includes(cuisine) 
        ? prev.filter(c => c !== cuisine)
        : [...prev, cuisine]
    );
  };

  const toggleSpecialty = (specialty: string) => {
    setSelectedSpecialties(prev =>
      prev.includes(specialty)
        ? prev.filter(s => s !== specialty)
        : [...prev, specialty]
    );
  };

  const applyFilters = () => {
    onFilterChange?.({
      cuisines: selectedCuisines,
      specialties: selectedSpecialties,
      priceRange,
      distance: distance[0]
    });
    onClose();
  };

  const clearFilters = () => {
    setSelectedCuisines([]);
    setSelectedSpecialties([]);
    setPriceRange([0, 30]);
    setDistance([5]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
      <Card className="w-full max-h-[80vh] rounded-t-3xl bg-white overflow-hidden">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-marmeet-text font-poppins flex items-center">
              <Filter className="w-5 h-5 mr-2" />
              Filtres
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-full"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          <div className="max-h-96 overflow-y-auto space-y-6">
            {/* Cuisines */}
            <div>
              <h3 className="font-semibold text-marmeet-text mb-3 font-poppins">
                Type de cuisine
              </h3>
              <div className="flex flex-wrap gap-2">
                {cuisineTypes.map((cuisine) => (
                  <Badge
                    key={cuisine.name}
                    variant={selectedCuisines.includes(cuisine.name) ? "default" : "outline"}
                    className={`cursor-pointer transition-all duration-200 px-3 py-2 font-nunito ${
                      selectedCuisines.includes(cuisine.name)
                        ? 'bg-marmeet-primary text-white shadow-warm'
                        : 'bg-white text-marmeet-text border-marmeet-primary/30 hover:bg-marmeet-cream-soft'
                    }`}
                    onClick={() => toggleCuisine(cuisine.name)}
                  >
                    {cuisine.flag} {cuisine.name} ({cuisine.count})
                  </Badge>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div>
              <h3 className="font-semibold text-marmeet-text mb-3 font-poppins">
                Budget: {priceRange[0]}€ - {priceRange[1]}€
              </h3>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={50}
                min={0}
                step={5}
                className="w-full"
              />
            </div>

            {/* Distance */}
            <div>
              <h3 className="font-semibold text-marmeet-text mb-3 font-poppins">
                Distance: {distance[0]} km
              </h3>
              <Slider
                value={distance}
                onValueChange={setDistance}
                max={10}
                min={1}
                step={0.5}
                className="w-full"
              />
            </div>

            {/* Spécialités */}
            <div>
              <h3 className="font-semibold text-marmeet-text mb-3 font-poppins">
                Spécialités
              </h3>
              <div className="flex flex-wrap gap-2">
                {specialties.map((specialty) => (
                  <Badge
                    key={specialty}
                    variant={selectedSpecialties.includes(specialty) ? "default" : "outline"}
                    className={`cursor-pointer transition-all duration-200 px-3 py-2 font-nunito ${
                      selectedSpecialties.includes(specialty)
                        ? 'bg-marmeet-secondary text-white shadow-warm'
                        : 'bg-white text-marmeet-text border-marmeet-secondary/30 hover:bg-marmeet-cream-soft'
                    }`}
                    onClick={() => toggleSpecialty(specialty)}
                  >
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-3 pt-4 border-t border-marmeet-cream">
            <Button
              variant="outline"
              onClick={clearFilters}
              className="flex-1 border-marmeet-primary/30 text-marmeet-text hover:bg-marmeet-cream rounded-2xl h-12"
            >
              Effacer
            </Button>
            <Button
              onClick={applyFilters}
              className="flex-1 bg-gradient-marmeet text-white hover:shadow-warm-lg rounded-2xl h-12"
            >
              Appliquer
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
