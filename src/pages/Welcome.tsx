
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ChefHat, Users, Mail, Lock, ArrowRight, Star, MapPin } from 'lucide-react';

const Welcome = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState<'client' | 'chef' | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAuth = () => {
    localStorage.setItem('userType', userType || 'client');
    localStorage.setItem('isAuthenticated', 'true');
    
    if (userType === 'client') {
      navigate('/client/onboarding');
    } else {
      navigate('/chef/signup');
    }
  };

  const featuredDishes = [
    {
      name: "Houmous Libanais",
      image: "/lovable-uploads/c964eb7d-6234-4fa0-9496-2790245866f3.png",
      country: "🇱🇧 Libanais",
      price: "10€"
    },
    {
      name: "Poisson Sénégalais",
      image: "/lovable-uploads/4f442c2b-7d84-40df-b71a-d9b852b9f5cc.png",
      country: "🇸🇳 Sénégalais",
      price: "18€"
    },
    {
      name: "Pastéis de Nata",
      image: "/lovable-uploads/19775d7c-3ae5-4780-ae39-bcfe5d30b86b.png",
      country: "🇵🇹 Portugais",
      price: "8€"
    },
    {
      name: "Keftas aux Grenades",
      image: "/lovable-uploads/108e5697-8eb9-4c04-8974-78e6535a17d1.png",
      country: "🇲🇦 Marocain",
      price: "16€"
    }
  ];

  const featuredChefs = [
    {
      name: "Asha",
      image: "/lovable-uploads/94eea079-9c66-4cdb-b972-de40bdf0bbc1.png",
      specialty: "Cuisine Indienne",
      rating: 4.9,
      flag: "🇮🇳"
    },
    {
      name: "Kenji",
      image: "/lovable-uploads/6891e55f-098c-43d1-b562-cce60bd31d85.png",
      specialty: "Cuisine Japonaise", 
      rating: 4.8,
      flag: "🇯🇵"
    },
    {
      name: "Amara",
      image: "/lovable-uploads/1430b70e-6f80-4389-939c-2ea86e40070d.png",
      specialty: "Cuisine Kenyane",
      rating: 4.9,
      flag: "🇰🇪"
    }
  ];

  if (!userType) {
    return (
      <div className="min-h-screen bg-gradient-warm overflow-hidden">
        {/* Hero Section */}
        <div className="relative pt-8 pb-12">
          <div className="text-center space-y-6 px-4">
            <div className="mb-8">
              <img 
                src="/lovable-uploads/ce65e1e3-f597-4d02-a56f-167ec3683ad9.png" 
                alt="MARMEET Logo" 
                className="h-16 mx-auto animate-glow"
              />
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl font-bold text-marmeet-gold text-shadow-strong font-poppins leading-tight">
                Découvrez des plats
              </h1>
              <h2 className="logo-text text-3xl font-bold">
                faits maison du monde entier
              </h2>
            </div>
            <p className="text-marmeet-gold text-lg font-medium px-4">
              Connectez-vous avec des chefs passionnés de votre quartier
            </p>
          </div>

          {/* Featured Dishes Gallery */}
          <div className="mt-12 px-4">
            <h3 className="text-2xl font-bold text-marmeet-gold text-center mb-6">
              Spécialités du monde
            </h3>
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
              {featuredDishes.map((dish, index) => (
                <Card key={index} className="overflow-hidden bg-white/95 backdrop-blur-sm shadow-lg border border-marmeet-yellow/20 hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={dish.image} 
                      alt={dish.name}
                      className="w-full h-24 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-white/90 rounded-full px-2 py-1">
                      <span className="text-xs font-medium text-marmeet-gold">{dish.country}</span>
                    </div>
                  </div>
                  <div className="p-3">
                    <h4 className="font-semibold text-sm text-gray-900 mb-1">{dish.name}</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-marmeet-orange font-bold">{dish.price}</span>
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Featured Chefs */}
          <div className="mt-12 px-4">
            <h3 className="text-2xl font-bold text-marmeet-gold text-center mb-6">
              Nos chefs passionnés
            </h3>
            <div className="flex space-x-4 overflow-x-auto pb-4 max-w-sm mx-auto">
              {featuredChefs.map((chef, index) => (
                <div key={index} className="flex-shrink-0">
                  <Card className="w-32 bg-white/95 backdrop-blur-sm shadow-lg border border-marmeet-yellow/20">
                    <div className="p-3 text-center space-y-2">
                      <div className="relative">
                        <img 
                          src={chef.image} 
                          alt={chef.name}
                          className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-marmeet-yellow/30"
                        />
                        <span className="absolute -top-1 -right-1 text-lg">{chef.flag}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900">{chef.name}</h4>
                        <p className="text-xs text-gray-600">{chef.specialty}</p>
                        <div className="flex items-center justify-center space-x-1 mt-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-xs font-medium">{chef.rating}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* User Type Selection */}
        <div className="px-4 pb-8">
          <div className="space-y-4 max-w-sm mx-auto">
            <Card 
              className="p-6 cursor-pointer hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-marmeet-yellow/30 bg-white/95 backdrop-blur-sm"
              onClick={() => setUserType('client')}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-marmeet rounded-full flex items-center justify-center shadow-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 font-poppins">Je veux commander</h3>
                  <p className="text-sm text-gray-600">Découvrir des plats faits maison</p>
                </div>
                <ArrowRight className="w-5 h-5 text-marmeet-yellow" />
              </div>
            </Card>

            <Card 
              className="p-6 cursor-pointer hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-marmeet-yellow/30 bg-white/95 backdrop-blur-sm"
              onClick={() => setUserType('chef')}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-soft rounded-full flex items-center justify-center shadow-lg border-2 border-marmeet-yellow/20">
                  <ChefHat className="w-6 h-6 text-marmeet-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 font-poppins">Je veux cuisiner</h3>
                  <p className="text-sm text-gray-600">Partager mes créations culinaires</p>
                </div>
                <ArrowRight className="w-5 h-5 text-marmeet-yellow" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-warm flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-8 animate-slide-up">
        <div className="text-center space-y-4">
          <div className="mb-4">
            <img 
              src="/lovable-uploads/ce65e1e3-f597-4d02-a56f-167ec3683ad9.png" 
              alt="MARMEET Logo" 
              className="h-12 mx-auto"
            />
          </div>
          <h1 className="logo-text text-3xl font-bold">
            MARMEET
          </h1>
          <p className="text-marmeet-gold font-medium">
            {userType === 'client' ? 'Connectez-vous pour commander' : 'Rejoignez nos chefs'}
          </p>
        </div>

        <Card className="p-6 space-y-6 bg-white/95 backdrop-blur-sm shadow-xl border border-marmeet-yellow/20">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-marmeet-gold" />
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 border-marmeet-yellow/30 focus:border-marmeet-yellow focus:ring-marmeet-yellow/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-marmeet-gold" />
                <Input
                  type="password"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 h-12 border-marmeet-yellow/30 focus:border-marmeet-yellow focus:ring-marmeet-yellow/20"
                />
              </div>
            </div>
          </div>

          <Button
            onClick={handleAuth}
            className="w-full h-12 bg-gradient-marmeet hover:opacity-90 text-white font-semibold rounded-xl shadow-lg font-poppins"
          >
            {isLogin ? 'Se connecter' : 'Créer un compte'}
          </Button>

          <div className="text-center space-y-2">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-marmeet-gold hover:text-marmeet-gold/80 transition-colors font-medium"
            >
              {isLogin ? "Pas de compte ? S'inscrire" : "Déjà un compte ? Se connecter"}
            </button>
          </div>
        </Card>

        <button
          onClick={() => setUserType(null)}
          className="w-full text-marmeet-gold/80 text-sm hover:text-marmeet-gold transition-colors font-medium"
        >
          ← Retour au choix
        </button>
      </div>
    </div>
  );
};

export default Welcome;
