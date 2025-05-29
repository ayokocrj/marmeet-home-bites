
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
    // Store user type in localStorage for now
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
      <div className="min-h-screen bg-gradient-marmeet flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-sm space-y-8 animate-fade-in">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-white text-shadow mb-2">
              marmeet
            </h1>
            <p className="text-white/90 text-lg font-medium">
              Découvrez la cuisine de quartier
            </p>
          </div>

          <div className="space-y-4">
            <Card 
              className="p-6 cursor-pointer hover:shadow-lg transition-all duration-200 border-2 border-transparent hover:border-white/20"
              onClick={() => setUserType('client')}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-marmeet rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Je veux commander</h3>
                  <p className="text-sm text-gray-600">Découvrir des plats faits maison</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            </Card>

            <Card 
              className="p-6 cursor-pointer hover:shadow-lg transition-all duration-200 border-2 border-transparent hover:border-white/20"
              onClick={() => setUserType('chef')}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-soft rounded-full flex items-center justify-center">
                  <ChefHat className="w-6 h-6 text-marmeet-orange" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Je veux cuisiner</h3>
                  <p className="text-sm text-gray-600">Partager mes créations culinaires</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-marmeet flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-8 animate-slide-up">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-white text-shadow">
            marmeet
          </h1>
          <p className="text-white/80">
            {userType === 'client' ? 'Connectez-vous pour commander' : 'Rejoignez nos chefs'}
          </p>
        </div>

        <Card className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 border-gray-200 focus:border-marmeet-orange"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="password"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 h-12 border-gray-200 focus:border-marmeet-orange"
                />
              </div>
            </div>
          </div>

          <Button
            onClick={handleAuth}
            className="w-full h-12 bg-gradient-marmeet hover:opacity-90 text-white font-semibold rounded-xl"
          >
            {isLogin ? 'Se connecter' : 'Créer un compte'}
          </Button>

          <div className="text-center space-y-2">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-gray-600 hover:text-marmeet-orange transition-colors"
            >
              {isLogin ? "Pas de compte ? S'inscrire" : "Déjà un compte ? Se connecter"}
            </button>
          </div>
        </Card>

        <button
          onClick={() => setUserType(null)}
          className="w-full text-white/80 text-sm hover:text-white transition-colors"
        >
          ← Retour au choix
        </button>
      </div>
    </div>
  );
};

export default Welcome;
