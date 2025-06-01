import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Filter, ShoppingBag } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { HeroSection } from '@/components/ui/hero-section';
import { CuisineFilters } from '@/components/ui/cuisine-filters';
import { ChefCard } from '@/components/ui/chef-card';
import { DiscoverySection } from '@/components/ui/discovery-section';
import { AdvancedFilters } from '@/components/ui/advanced-filters';
import { CartDrawer } from '@/components/ui/cart-drawer';
import { BackgroundPattern } from '@/components/ui/decorative-elements';

const ClientHome = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('Tout');
  const [showFilters, setShowFilters] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(savedCart);
  }, []);

  // Update cart in localStorage
  const updateCart = (newCart: any[]) => {
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const updateCartQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(id);
      return;
    }
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    );
    updateCart(updatedCart);
  };

  const removeFromCart = (id: string) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    updateCart(updatedCart);
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Données simulées des chefs avec vos images uploadées
  const chefs = [
    {
      id: '1',
      name: 'Amina Benali',
      cuisine: 'Marocain',
      flag: '🇲🇦',
      avatar: '/lovable-uploads/19775d7c-3ae5-4780-ae39-bcfe5d30b86b.png',
      rating: 4.9,
      price: '12',
      distance: '0.8 km',
      specialty: 'Couscous royal aux légumes de saison'
    },
    {
      id: '2', 
      name: 'Giuseppe Romano',
      cuisine: 'Italien',
      flag: '🇮🇹',
      avatar: '/lovable-uploads/0529c752-1736-4dc5-8439-c516551acb01.png',
      rating: 4.7,
      price: '15',
      distance: '1.2 km',
      specialty: 'Pasta fraîche et sauces maison'
    },
    {
      id: '3',
      name: 'Fatou Diallo',
      cuisine: 'Sénégalais',
      flag: '🇸🇳',
      avatar: '/lovable-uploads/f7f8638c-ad58-47c0-85ea-aa46c3e0c90b.png',
      rating: 4.8,
      price: '10',
      distance: '0.5 km',
      specialty: 'Thieboudienne traditionnel au poisson frais'
    },
    {
      id: '4',
      name: 'Priya Sharma',
      cuisine: 'Indien',
      flag: '🇮🇳',
      avatar: '/placeholder.svg',
      rating: 4.6,
      price: '8',
      distance: '2.1 km',
      specialty: 'Curry de légumes et naans chauds'
    },
    {
      id: '5',
      name: 'Yuki Tanaka',
      cuisine: 'Japonais',
      flag: '🇯🇵',
      avatar: '/placeholder.svg',
      rating: 4.9,
      price: '20',
      distance: '1.8 km',
      specialty: 'Sushi frais et chirashi bowl'
    },
    {
      id: '6',
      name: 'Leila Mansouri',
      cuisine: 'Libanais',
      flag: '🇱🇧',
      avatar: '/placeholder.svg',
      rating: 4.7,
      price: '14',
      distance: '1.0 km',
      specialty: 'Mezze authentique et houmous maison'
    }
  ];

  const filteredChefs = chefs.filter(chef => {
    const matchesCuisine = selectedCuisine === 'Tout' || chef.cuisine === selectedCuisine;
    const matchesSearch = chef.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         chef.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         chef.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCuisine && matchesSearch;
  });

  const handleChefClick = (chefId: string) => {
    navigate(`/chef/profile/${chefId}`);
  };

  return (
    <div className="min-h-screen bg-marmeet-cream relative overflow-hidden">
      <BackgroundPattern />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Search Bar */}
        <div className="px-4 -mt-3">
          <div className="max-w-sm mx-auto">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-marmeet-secondary" />
              <Input
                placeholder="Rechercher un plat, un chef..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-20 h-12 bg-white border-marmeet-primary/30 rounded-2xl shadow-warm font-nunito"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
                <Button
                  size="sm"
                  variant="ghost"
                  className="bg-marmeet-primary hover:bg-marmeet-secondary text-white rounded-xl h-8 w-8 p-0"
                  onClick={() => setShowFilters(true)}
                >
                  <Filter className="w-4 h-4" />
                </Button>
                {cartItemCount > 0 && (
                  <Button
                    size="sm"
                    variant="ghost"
                    className="bg-marmeet-secondary hover:bg-marmeet-primary text-white rounded-xl h-8 w-8 p-0 relative"
                    onClick={() => setShowCart(true)}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <div className="absolute -top-1 -right-1 bg-marmeet-world text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
                      {cartItemCount}
                    </div>
                  </Button>
                )}
              </div>
            </div>

            {/* Address Banner */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 mb-4 shadow-warm border border-marmeet-primary/20">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-marmeet-secondary" />
                <span className="text-sm text-marmeet-text font-nunito">
                  Livraison à <span className="font-semibold">123 Rue de la Paix, Paris 11ème</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Cuisine Filters */}
        <CuisineFilters onFilterChange={setSelectedCuisine} />

        {/* Discovery Section */}
        <DiscoverySection />

        {/* Chefs Grid */}
        <div className="px-4 pb-20">
          <div className="max-w-sm mx-auto">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-marmeet-text font-poppins">
                Chefs disponibles
              </h2>
              <p className="text-sm text-marmeet-text-muted font-nunito">
                {filteredChefs.length} chef{filteredChefs.length > 1 ? 's' : ''} près de chez vous
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {filteredChefs.map((chef) => (
                <ChefCard
                  key={chef.id}
                  chef={chef}
                  onClick={() => handleChefClick(chef.id)}
                />
              ))}
            </div>

            {filteredChefs.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-lg font-semibold text-marmeet-text mb-2 font-poppins">
                  Aucun chef trouvé
                </h3>
                <p className="text-marmeet-text-muted font-nunito">
                  Essayez de modifier vos critères de recherche
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modals */}
      <AdvancedFilters 
        isOpen={showFilters} 
        onClose={() => setShowFilters(false)}
        onFilterChange={(filters) => console.log('Filters applied:', filters)}
      />
      
      <CartDrawer
        isOpen={showCart}
        onClose={() => setShowCart(false)}
        items={cartItems}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
      />
    </div>
  );
};

export default ClientHome;
