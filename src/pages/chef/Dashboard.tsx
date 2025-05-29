
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Plus, 
  Edit, 
  Eye, 
  Clock, 
  Users, 
  Star,
  Settings,
  LogOut
} from 'lucide-react';

const ChefDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dishes');

  // Données simulées
  const chefProfile = {
    name: 'Marie Dupont',
    rating: 4.8,
    totalOrders: 127,
    profilePicture: '/placeholder.svg'
  };

  const dishes = [
    {
      id: 1,
      name: 'Lasagnes maison',
      image: '/placeholder.svg',
      price: 12,
      status: 'active',
      orders: 15,
      rating: 4.9
    },
    {
      id: 2,
      name: 'Coq au vin traditionnel',
      image: '/placeholder.svg',
      price: 18,
      status: 'active',
      orders: 8,
      rating: 4.7
    }
  ];

  const orders = [
    {
      id: 'ORD001',
      dish: 'Lasagnes maison',
      client: 'Sophie M.',
      quantity: 2,
      total: 24,
      pickupTime: '12:30',
      confirmationCode: '1234',
      status: 'confirmed'
    },
    {
      id: 'ORD002',
      dish: 'Coq au vin traditionnel',
      client: 'Thomas L.',
      quantity: 1,
      total: 18,
      pickupTime: '19:00',
      confirmationCode: '5678',
      status: 'pending'
    }
  ];

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userType');
    localStorage.removeItem('chefProfile');
    navigate('/welcome');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-marmeet text-white p-4">
        <div className="max-w-sm mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold">marmeet</h1>
            <button 
              onClick={handleLogout}
              className="p-2 hover:bg-white/10 rounded-lg"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xl">👨‍🍳</span>
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-lg">{chefProfile.name}</h2>
              <div className="flex items-center space-x-4 text-sm text-white/80">
                <span className="flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  {chefProfile.rating}
                </span>
                <span className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {chefProfile.totalOrders} commandes
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-sm mx-auto p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="dishes">Mes plats</TabsTrigger>
            <TabsTrigger value="orders">Commandes</TabsTrigger>
          </TabsList>

          <TabsContent value="dishes" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Mes plats</h3>
              <Button className="bg-gradient-marmeet text-white">
                <Plus className="w-4 h-4 mr-2" />
                Ajouter
              </Button>
            </div>

            <div className="space-y-3">
              {dishes.map((dish) => (
                <Card key={dish.id} className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🍝</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{dish.name}</h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{dish.price}€</span>
                        <span className="flex items-center">
                          <Star className="w-3 h-3 mr-1" />
                          {dish.rating}
                        </span>
                        <span>{dish.orders} commandes</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-400 hover:text-marmeet-orange">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-marmeet-orange">
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="orders" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Commandes du jour</h3>
              <div className="text-sm text-gray-600">
                {orders.length} commande{orders.length > 1 ? 's' : ''}
              </div>
            </div>

            <div className="space-y-3">
              {orders.map((order) => (
                <Card key={order.id} className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">{order.dish}</h4>
                        <p className="text-sm text-gray-600">
                          {order.client} • Quantité: {order.quantity}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-marmeet-orange">{order.total}€</div>
                        <div className={`text-xs px-2 py-1 rounded-full ${
                          order.status === 'confirmed' 
                            ? 'bg-green-100 text-green-600' 
                            : 'bg-yellow-100 text-yellow-600'
                        }`}>
                          {order.status === 'confirmed' ? 'Confirmé' : 'En attente'}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        Récupération: {order.pickupTime}
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">Code de récupération</div>
                        <div className="font-mono font-bold text-marmeet-orange text-lg">
                          {order.confirmationCode}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="max-w-sm mx-auto grid grid-cols-3 h-16">
          <button className="flex flex-col items-center justify-center text-xs text-gray-600">
            <Eye className="w-5 h-5 mb-1" />
            Mon Profil
          </button>
          <button className="flex flex-col items-center justify-center text-xs text-marmeet-orange">
            <Plus className="w-5 h-5 mb-1" />
            Ajouter
          </button>
          <button className="flex flex-col items-center justify-center text-xs text-gray-600">
            <Settings className="w-5 h-5 mb-1" />
            Paramètres
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefDashboard;
