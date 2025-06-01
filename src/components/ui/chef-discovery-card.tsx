
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Plus, Heart } from 'lucide-react';

interface ChefDiscoveryCardProps {
  chef: {
    id: string;
    name: string;
    cuisine: string;
    flag: string;
    avatar: string;
    rating: number;
    price: string;
    distance?: string;
    specialty: string;
    dish: string;
  };
  onClick?: () => void;
  onAddToCart?: () => void;
}

export const ChefDiscoveryCard: React.FC<ChefDiscoveryCardProps> = ({ 
  chef, 
  onClick, 
  onAddToCart 
}) => {
  return (
    <Card className="overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-warm-lg hover:-translate-y-1 bg-white rounded-3xl border-0 shadow-cozy">
      {/* Image principale avec overlay */}
      <div className="relative h-64 bg-gradient-warm overflow-hidden">
        <img 
          src={chef.avatar} 
          alt={chef.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder.svg';
          }}
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        
        {/* Badge pays en haut */}
        <div className="absolute top-4 left-4">
          <Badge className="bg-white/95 text-marmeet-text font-medium px-3 py-1 shadow-warm rounded-full border-0">
            {chef.flag} {chef.cuisine}
          </Badge>
        </div>
        
        {/* Bouton favori */}
        <div className="absolute top-4 right-4">
          <Button
            size="icon"
            variant="ghost"
            className="bg-white/90 hover:bg-white text-marmeet-text h-9 w-9 rounded-full shadow-warm"
          >
            <Heart className="w-4 h-4" />
          </Button>
        </div>
        
        {/* Prix en bas de l'image */}
        <div className="absolute bottom-4 right-4">
          <div className="bg-marmeet-primary text-white px-3 py-2 rounded-full font-bold text-lg shadow-warm">
            {chef.price}€
          </div>
        </div>
      </div>
      
      {/* Informations du chef */}
      <div className="p-5 space-y-4">
        <div className="space-y-2">
          <h3 className="font-bold text-xl text-marmeet-text font-poppins">
            {chef.name}
          </h3>
          <p className="text-marmeet-secondary font-semibold text-lg font-poppins">
            {chef.dish}
          </p>
          <p className="text-marmeet-text-muted text-sm font-nunito leading-relaxed">
            {chef.specialty}
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-marmeet-primary fill-current" />
              <span className="text-sm font-semibold text-marmeet-text font-nunito">
                {chef.rating}
              </span>
            </div>
            {chef.distance && (
              <span className="text-xs text-marmeet-text-muted font-nunito">
                • {chef.distance}
              </span>
            )}
          </div>
        </div>
        
        <div className="flex space-x-3">
          <Button 
            variant="outline"
            className="flex-1 border-2 border-marmeet-primary/30 text-marmeet-secondary hover:bg-marmeet-cream font-semibold rounded-2xl h-12"
            onClick={onClick}
          >
            Voir le profil
          </Button>
          <Button 
            className="flex-1 bg-gradient-marmeet text-white hover:shadow-warm-lg font-semibold rounded-2xl h-12 transition-all duration-200"
            onClick={onAddToCart}
          >
            <Plus className="w-4 h-4 mr-2" />
            Réserver
          </Button>
        </div>
      </div>
    </Card>
  );
};
