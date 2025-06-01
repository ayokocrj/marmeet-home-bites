
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin } from 'lucide-react';

interface ChefCardProps {
  chef: {
    id: string;
    name: string;
    cuisine: string;
    flag: string;
    avatar: string;
    rating: number;
    price: string;
    distance?: string;
    specialty?: string;
  };
  onClick?: () => void;
}

export const ChefCard: React.FC<ChefCardProps> = ({ chef, onClick }) => {
  return (
    <Card 
      className="overflow-hidden cursor-pointer card-hover shadow-warm bg-white relative rounded-2xl"
      onClick={onClick}
    >
      {/* Coin haut gauche - Badge pays */}
      <div className="absolute top-3 left-3 z-10">
        <Badge className="bg-marmeet-world text-white font-medium text-xs px-2 py-1 shadow-sm rounded-full">
          {chef.flag} {chef.cuisine}
        </Badge>
      </div>

      {/* Photo du chef */}
      <div className="relative h-48 bg-gradient-warm">
        <img 
          src={chef.avatar} 
          alt={chef.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder.svg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      
      {/* Informations du chef */}
      <div className="p-4 space-y-3 bg-gradient-warm">
        <div className="space-y-1">
          <h3 className="font-bold text-xl text-marmeet-text font-poppins">
            {chef.name}
          </h3>
          {chef.specialty && (
            <p className="text-marmeet-text-muted text-sm font-nunito">
              {chef.specialty}
            </p>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-marmeet-primary fill-current" />
              <span className="text-sm font-medium text-marmeet-text font-nunito">
                {chef.rating}
              </span>
            </div>
            {chef.distance && (
              <div className="flex items-center space-x-1">
                <MapPin className="w-3 h-3 text-marmeet-text-muted" />
                <span className="text-xs text-marmeet-text-muted font-nunito">
                  {chef.distance}
                </span>
              </div>
            )}
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-marmeet-secondary font-poppins">
              À partir de {chef.price}€
            </div>
          </div>
        </div>
        
        <Button className="w-full btn-marmeet h-10 font-poppins">
          Réserver
        </Button>
      </div>
    </Card>
  );
};
