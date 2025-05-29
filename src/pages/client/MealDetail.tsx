
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Star, Clock, MapPin, Plus, Minus, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const MealDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Mock data - in real app this would come from API
  const meal = {
    id: 1,
    title: "Poulet au curry",
    description: "Un délicieux curry de poulet aux épices indiennes, accompagné de riz basmati parfumé. Recette transmise par ma grand-mère, avec des épices fraîchement moulues.",
    price: 12,
    cuisine: "Indien",
    pickupTime: "18h30 - 20h",
    distance: "0.5km",
    rating: 4.8,
    reviews: 23,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&h=400&fit=crop",
    tags: ["Épicé", "Sans gluten", "Fait maison"],
    chef: {
      name: "Priya Kumar",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=100&h=100&fit=crop&crop=face",
      bio: "Passionnée de cuisine indienne depuis l'enfance",
      rating: 4.9,
      address: "15 rue des Épices, Paris 11e"
    }
  };

  const handleOrder = () => {
    // Store order details
    localStorage.setItem('currentOrder', JSON.stringify({
      mealId: meal.id,
      quantity,
      total: meal.price * quantity
    }));
    navigate('/client/checkout');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative">
        <img 
          src={meal.image} 
          alt={meal.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 left-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="bg-white/80 hover:bg-white/90 backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </div>
        <div className="absolute top-4 right-4">
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/80 hover:bg-white/90 backdrop-blur-sm"
          >
            <Heart className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Meal Info */}
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2 flex-1">
              <h1 className="text-2xl font-bold text-gray-900">{meal.title}</h1>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="font-medium">{meal.rating}</span>
                  <span>({meal.reviews} avis)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{meal.pickupTime}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-marmeet-orange">{meal.price}€</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {meal.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-marmeet-yellow text-marmeet-dark-orange">
                {tag}
              </Badge>
            ))}
          </div>

          <p className="text-gray-700 leading-relaxed">{meal.description}</p>
        </div>

        {/* Chef Info */}
        <Card className="p-4">
          <div className="flex items-center space-x-4">
            <img 
              src={meal.chef.avatar} 
              alt={meal.chef.name}
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{meal.chef.name}</h3>
              <p className="text-sm text-gray-600">{meal.chef.bio}</p>
              <div className="flex items-center space-x-2 mt-1">
                <Star className="w-3 h-3 text-yellow-500 fill-current" />
                <span className="text-xs text-gray-500">{meal.chef.rating} • Chef vérifié</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Pickup Info */}
        <Card className="p-4 bg-gradient-soft border-yellow-200">
          <div className="space-y-2">
            <h3 className="font-semibold text-marmeet-dark-orange">Informations de collecte</h3>
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="w-4 h-4 text-marmeet-orange" />
              <span>{meal.chef.address}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Clock className="w-4 h-4 text-marmeet-orange" />
              <span>Collecte: {meal.pickupTime}</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Bottom Order Section */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-3 bg-gray-100 rounded-xl p-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="h-8 w-8 rounded-lg"
            >
              <Minus className="w-4 h-4" />
            </Button>
            <span className="font-semibold text-lg min-w-[2rem] text-center">{quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setQuantity(quantity + 1)}
              className="h-8 w-8 rounded-lg"
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          
          <Button
            onClick={handleOrder}
            className="flex-1 h-12 bg-gradient-marmeet hover:opacity-90 text-white font-semibold rounded-xl"
          >
            Commander • {meal.price * quantity}€
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MealDetail;
