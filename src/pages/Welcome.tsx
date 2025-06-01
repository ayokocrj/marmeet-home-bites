
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ChefHat, Users, Mail, Lock, ArrowRight } from 'lucide-react';

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

  if (!userType) {
    return (
      <div className="min-h-screen bg-gradient-warm flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-sm space-y-8 animate-fade-in">
          <div className="text-center space-y-6">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/ce65e1e3-f597-4d02-a56f-167ec3683ad9.png" 
                alt="MARMEET Logo" 
                className="h-16 mx-auto animate-glow"
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-marmeet-gold text-shadow-strong font-poppins">
                Bienvenue sur
              </h1>
              <h2 className="logo-text text-4xl font-bold">
                MARMEET
              </h2>
            </div>
            <p className="text-marmeet-gold text-lg font-medium">
              Découvrez la cuisine de quartier
            </p>
          </div>

          <div className="space-y-4">
            <Card 
              className="p-6 cursor-pointer hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-marmeet-yellow/30 bg-white/90 backdrop-blur-sm"
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
              className="p-6 cursor-pointer hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-marmeet-yellow/30 bg-white/90 backdrop-blur-sm"
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
