
import { useState } from 'react';
import { Search, Filter, Star, Clock, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const MealCard = ({ 
  meal, 
  onClick 
}: { 
  meal: any; 
  onClick: () => void;
}) => (
  <Card 
    className="overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
    onClick={onClick}
  >
    <div className="relative">
      <img 
        src={meal.image} 
        alt={meal.title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-3 left-3">
        <Badge className="bg-white/90 text-gray-800 font-medium">
          {meal.cuisine}
        </Badge>
      </div>
      <div className="absolute top-3 right-3 bg-white/90 rounded-full p-2">
        <Star className="w-4 h-4 text-yellow-500 fill-current" />
      </div>
    </div>
    
    <div className="p-4 space-y-3">
      <div className="space-y-1">
        <h3 className="font-semibold text-lg leading-tight">{meal.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{meal.description}</p>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Clock className="w-4 h-4" />
          <span>{meal.pickupTime}</span>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-marmeet-orange">{meal.price}€</div>
        </div>
      </div>
      
      <div className="flex items-center space-x-2 pt-2 border-t border-gray-100">
        <img 
          src={meal.chef.avatar} 
          alt={meal.chef.name}
          className="w-6 h-6 rounded-full"
        />
        <span className="text-sm text-gray-600">{meal.chef.name}</span>
        <div className="flex items-center space-x-1 ml-auto">
          <MapPin className="w-3 h-3 text-gray-400" />
          <span className="text-xs text-gray-500">{meal.distance}</span>
        </div>
      </div>
    </div>
  </Card>
);

const ClientHome = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const mockMeals = [
    {
      id: 1,
      title: "Poulet au curry",
      description: "Un délicieux curry de poulet aux épices indiennes, accompagné de riz basmati parfumé",
      price: 12,
      cuisine: "Indien",
      pickupTime: "18h30 - 20h",
      distance: "0.5km",
      image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&h=300&fit=crop",
      chef: {
        name: "Priya K.",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=100&h=100&fit=crop&crop=face"
      }
    },
    {
      id: 2,
      title: "Sushis traditionnels",
      description: "Assortiment de nigiri, maki et sashimi préparés selon la tradition japonaise avec du poisson frais",
      price: 22,
      cuisine: "Japonais",
      pickupTime: "19h - 20h30",
      distance: "0.3km",
      image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop",
      chef: {
        name: "Yuki T.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      }
    },
    {
      id: 3,
      title: "Canard laqué de Pékin",
      description: "Canard laqué traditionnel aux notes sucrées-salées, servi avec des crêpes et sauce hoisin",
      price: 28,
      cuisine: "Chinois",
      pickupTime: "19h30 - 21h",
      distance: "0.7km",
      image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&h=300&fit=crop",
      chef: {
        name: "Li W.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
      }
    },
    {
      id: 4,
      title: "Lasagnes maison",
      description: "Lasagnes traditionnelles avec viande hachée, béchamel et parmesan, cuites au four",
      price: 15,
      cuisine: "Italien", 
      pickupTime: "19h - 20h30",
      distance: "0.8km",
      image: "https://images.unsplash.com/photo-1619895092538-128341789043?w=400&h=300&fit=crop",
      chef: {
        name: "Marco R.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      }
    },
    {
      id: 5,
      title: "Poulet à la Moambé",
      description: "Plat traditionnel angolais avec poulet doré, sauce aux graines de palme, piment et banane",
      price: 16,
      cuisine: "Angolais",
      pickupTime: "18h - 19h30",
      distance: "1.1km",
      image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop",
      chef: {
        name: "Maria S.",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=100&h=100&fit=crop&crop=face"
      }
    },
    {
      id: 6,
      title: "Piri-Piri Chicken",
      description: "Poulet rôti mozambicain avec sauce piquante aux piments piri-piri, ail et citron",
      price: 18,
      cuisine: "Mozambicain",
      pickupTime: "19h - 20h",
      distance: "0.9km",
      image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&h=300&fit=crop",
      chef: {
        name: "João M.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      }
    },
    {
      id: 7,
      title: "Pierogi polonais",
      description: "Raviolis traditionnels farcis aux pommes de terre, fromage blanc et oignons caramélisés",
      price: 13,
      cuisine: "Polonais",
      pickupTime: "18h30 - 20h",
      distance: "0.6km",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
      chef: {
        name: "Anna K.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
      }
    },
    {
      id: 8,
      title: "Pastéis de Nata",
      description: "Tartelettes portugaises à la crème pâtissière, cannelle et sucre glace",
      price: 8,
      cuisine: "Portugais",
      pickupTime: "16h - 18h",
      distance: "0.4km",
      image: "/lovable-uploads/19775d7c-3ae5-4780-ae39-bcfe5d30b86b.png",
      chef: {
        name: "Carlos P.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      }
    },
    {
      id: 9,
      title: "Couscous royal",
      description: "Couscous traditionnel avec agneau, merguez et légumes, préparé selon la recette familiale",
      price: 18,
      cuisine: "Maghrébin",
      pickupTime: "19h30 - 21h",
      distance: "1.2km", 
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop",
      chef: {
        name: "Fatima B.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
      }
    },
    {
      id: 10,
      title: "Houmous libanais",
      description: "Houmous crémeux aux pois chiches, tahini et huile d'olive, servi avec pain pita chaud",
      price: 10,
      cuisine: "Libanais",
      pickupTime: "17h - 19h",
      distance: "0.7km",
      image: "/lovable-uploads/0529c752-1736-4dc5-8439-c516551acb01.png",
      chef: {
        name: "Leila H.",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=100&h=100&fit=crop&crop=face"
      }
    },
    {
      id: 11,
      title: "Poulet DG camerounais",
      description: "Poulet sauté aux légumes et plantains, spécialité camerounaise riche et savoureuse",
      price: 17,
      cuisine: "Camerounais",
      pickupTime: "19h - 20h30",
      distance: "1.0km",
      image: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=400&h=300&fit=crop",
      chef: {
        name: "Grace N.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
      }
    },
    {
      id: 12,
      title: "Attiéké au poisson",
      description: "Spécialité ivoirienne avec semoule de manioc et poisson grillé aux épices locales",
      price: 14,
      cuisine: "Ivoirien",
      pickupTime: "18h30 - 20h",
      distance: "0.8km",
      image: "/lovable-uploads/f7f8638c-ad58-47c0-85ea-aa46c3e0c90b.png",
      chef: {
        name: "Adjoa K.",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=100&h=100&fit=crop&crop=face"
      }
    },
    {
      id: 13,
      title: "Pavlova néo-zélandaise",
      description: "Dessert aux blancs d'œufs meringués, crème fouettée et fruits frais de saison",
      price: 12,
      cuisine: "Néo-Zélandais",
      pickupTime: "15h - 17h",
      distance: "0.5km",
      image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=300&fit=crop",
      chef: {
        name: "Emma L.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
      }
    },
    {
      id: 14,
      title: "Samoussas végétariens",
      description: "Beignets croustillants farcis aux légumes épicés, accompagnés de chutneys maison",
      price: 9,
      cuisine: "Indien",
      pickupTime: "17h30 - 19h",
      distance: "0.6km",
      image: "https://images.unsplash.com/photo-1601050690117-94dc026089ca?w=400&h=300&fit=crop",
      chef: {
        name: "Raj P.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Bonjour !</h1>
              <p className="text-gray-600 text-sm">Que voulez-vous manger aujourd'hui ?</p>
            </div>
            <Button variant="ghost" size="icon" className="relative">
              <Filter className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Rechercher un plat, cuisine..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 border-gray-200 focus:border-marmeet-orange rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Address Banner */}
      <div className="bg-gradient-soft border-b border-yellow-200">
        <div className="p-4">
          <div className="flex items-center space-x-2 text-marmeet-dark-orange">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">Livraison à: 15 Rue de la Paix, Paris</span>
          </div>
        </div>
      </div>

      {/* Meals Grid */}
      <div className="p-4">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Plats disponibles</h2>
            <span className="text-sm text-gray-500">{mockMeals.length} plats</span>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {mockMeals.map((meal) => (
              <MealCard
                key={meal.id}
                meal={meal}
                onClick={() => navigate(`/client/meal/${meal.id}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientHome;
