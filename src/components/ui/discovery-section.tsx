
import React from 'react';
import { ChefDiscoveryCard } from './chef-discovery-card';
import { useNavigate } from 'react-router-dom';

const discoverChefs = [
  {
    id: '7',
    name: 'Kenji',
    cuisine: 'Japonais',
    flag: '🇯🇵',
    avatar: '/lovable-uploads/1d8e4541-4558-4066-ad92-3eacd9f6d06b.png',
    rating: 4.9,
    price: '15',
    distance: '1.2 km',
    specialty: 'Sushi frais et traditionnel préparé avec des ingrédients premium',
    dish: 'Sushi Sashimi'
  },
  {
    id: '8',
    name: 'Asha',
    cuisine: 'Indien',
    flag: '🇮🇳',
    avatar: '/lovable-uploads/d2d17281-a829-4ec8-b06f-8a2a9c54510a.png',
    rating: 4.8,
    price: '10',
    distance: '0.8 km',
    specialty: 'Chicken curry authentique aux épices traditionnelles maison',
    dish: 'Chicken Curry'
  },
  {
    id: '9',
    name: 'Aminata',
    cuisine: 'Sénégalais',
    flag: '🇸🇳',
    avatar: '/lovable-uploads/9bc9e0df-123b-4687-b2f5-b413f5acc3e0.png',
    rating: 4.9,
    price: '12',
    distance: '1.5 km',
    specialty: 'Thieboudienne royal avec poisson frais et légumes de saison',
    dish: 'Thieboudienne'
  }
];

export const DiscoverySection: React.FC = () => {
  const navigate = useNavigate();

  const handleChefClick = (chefId: string) => {
    navigate(`/chef/profile/${chefId}`);
  };

  const handleAddToCart = (chef: typeof discoverChefs[0]) => {
    // Animation d'ajout au panier
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const newItem = {
      id: chef.id,
      name: chef.dish,
      chef: chef.name,
      price: parseInt(chef.price),
      quantity: 1,
      cuisine: chef.cuisine,
      flag: chef.flag
    };
    
    const updatedCart = [...existingCart, newItem];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    
    // Feedback visuel simple
    console.log(`${chef.dish} ajouté au panier!`);
  };

  return (
    <div className="px-4 pb-8">
      <div className="max-w-sm mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-marmeet-text font-poppins mb-2">
            Découvrez nos chefs
          </h2>
          <p className="text-marmeet-text-muted font-nunito">
            Rencontrez les cuisiniers passionnés de votre quartier
          </p>
        </div>

        <div className="space-y-6">
          {discoverChefs.map((chef) => (
            <ChefDiscoveryCard
              key={chef.id}
              chef={chef}
              onClick={() => handleChefClick(chef.id)}
              onAddToCart={() => handleAddToCart(chef)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
