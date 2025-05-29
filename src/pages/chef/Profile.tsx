
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Star, Clock, MapPin, Heart, Share2 } from 'lucide-react';

const ChefProfile = () => {
  const navigate = useNavigate();
  
  // Données simulées du chef
  const chef = {
    id: 1,
    name: 'Marie Dupont',
    profilePicture: '/placeholder.svg',
    bio: 'Passionnée de cuisine depuis plus de 15 ans, j\'aime partager mes recettes familiales et mes créations inspirées de mes voyages. Diplômée d\'une école de cuisine, je privilégie les produits locaux et de saison.',
    rating: 4.8,
    reviews: 45,
    location: 'Paris 11ème',
    interests: ['Cuisine française', 'Pâtisserie', 'Bio', 'Sans gluten'],
    dishes: [
      {
        id: 1,
        name: 'Lasagnes maison',
        description: 'Lasagnes traditionnelles avec sauce bolognaise maison et béchamel onctueuse',
        price: 12,
        image: '/placeholder.svg',
        tags: ['Fait maison', 'Réchauffable']
      },
      {
        id: 2,
        name: 'Coq au vin traditionnel',
        description: 'Recette familiale mijotée avec du vin rouge de Bourgogne et des légumes frais',
        price: 18,
        image: '/placeholder.svg',
        tags: ['Plat complet', 'Traditionnel']
      },
      {
        id: 3,
        name: 'Tarte Tatin aux pommes',
        description: 'Dessert caramélisé aux pommes, servi avec une boule de crème fraîche',
        price: 8,
        image: '/placeholder.svg',
        tags: ['Dessert', 'Végétarien']
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <div className="bg-gradient-marmeet h-48 relative">
        <div className="absolute top-0 left-0 right-0 p-4">
          <div className="flex items-center justify-between">
            <button onClick={() => navigate(-1)} className="p-2 bg-white/20 rounded-full">
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <div className="flex space-x-2">
              <button className="p-2 bg-white/20 rounded-full">
                <Heart className="w-5 h-5 text-white" />
              </button>
              <button className="p-2 bg-white/20 rounded-full">
                <Share2 className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Profile Card */}
      <div className="max-w-sm mx-auto px-4 -mt-16">
        <Card className="p-6">
          <div className="flex items-center space-x-4 mb-3">
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center border-4 border-white">
              <span className="text-2xl">👨‍🍳</span>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900">{chef.name}</h2>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <span className="flex items-center">
                  <Star className="w-4 h-4 mr-1 text-yellow-500" />
                  {chef.rating} ({chef.reviews} avis)
                </span>
              </div>
              <div className="flex items-center text-xs text-gray-500 mt-1">
                <MapPin className="w-3 h-3 mr-1" />
                {chef.location}
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <p className="text-sm text-gray-700">{chef.bio}</p>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {chef.interests.map((interest, index) => (
              <span 
                key={index}
                className="text-xs bg-gradient-soft px-3 py-1 rounded-full text-gray-700"
              >
                {interest}
              </span>
            ))}
          </div>
          
          <Button className="w-full bg-gradient-marmeet text-white">
            Suivre ce chef
          </Button>
        </Card>
        
        {/* Dishes */}
        <div className="mt-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Plats disponibles</h3>
          
          <div className="space-y-4">
            {chef.dishes.map((dish) => (
              <Card key={dish.id} className="overflow-hidden">
                <div className="h-40 bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl">{dish.id === 1 ? '🍝' : dish.id === 2 ? '🍗' : '🥧'}</span>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900">{dish.name}</h4>
                    <div className="font-bold text-marmeet-orange">{dish.price}€</div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mt-1 mb-3">{dish.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                      {dish.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link to={`/client/meal/${dish.id}`}>
                      <Button size="sm" className="bg-marmeet-orange text-white">
                        Commander
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefProfile;
