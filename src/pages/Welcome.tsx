
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ChefHat, Users, Mail, Lock, ArrowRight, Globe } from 'lucide-react';

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
              <h1 className="text-3xl font-bold text-marmeet-text text-shadow-warm font-poppins">
                Bienvenue sur
              </h1>
              <h2 className="logo-text text-4xl font-bold">
                MARMEET
              </h2>
            </div>
            <p className="text-marmeet-text-light text-lg font-medium font-nunito">
              Découvrez la cuisine de quartier
            </p>
            <div className="flex items-center justify-center space-x-2 text-marmeet-text-muted">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-nunito">Cuisines du monde entier</span>
            </div>
          </div>

          <div className="space-y-4">
            <Card 
              className="p-6 cursor-pointer card-hover shadow-warm border-2 border-transparent hover:border-marmeet-primary/30 bg-white/95 backdrop-blur-sm"
              onClick={() => setUserType('client')}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-marmeet rounded-full flex items-center justify-center shadow-warm">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-marmeet-text font-poppins">
                    Je veux commander
                  </h3>
                  <p className="text-sm text-marmeet-text-muted font-nunito">
                    Découvrir des plats faits maison
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-marmeet-secondary" />
              </div>
            </Card>

            <Card 
              className="p-6 cursor-pointer card-hover shadow-warm border-2 border-transparent hover:border-marmeet-primary/30 bg-white/95 backdrop-blur-sm"
              onClick={() => setUserType('chef')}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-warm border-2 border-marmeet-primary/20">
                  <ChefHat className="w-6 h-6 text-marmeet-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-marmeet-text font-poppins">
                    Je veux cuisiner
                  </h3>
                  <p className="text-sm text-marmeet-text-muted font-nunito">
                    Partager mes créations culinaires
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-marmeet-secondary" />
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
          <p className="text-marmeet-text-light font-medium font-nunito">
            {userType === 'client' ? 'Connectez-vous pour commander' : 'Rejoignez nos chefs'}
          </p>
        </div>

        <Card className="p-6 space-y-6 bg-white/95 backdrop-blur-sm shadow-warm-lg border border-marmeet-primary/20">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-marmeet-secondary" />
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 input-marmeet font-nunito"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-marmeet-secondary" />
                <Input
                  type="password"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 h-12 input-marmeet font-nunito"
                />
              </div>
            </div>
          </div>

          <Button
            onClick={handleAuth}
            className="w-full h-12 btn-marmeet font-poppins"
          >
            {isLogin ? 'Se connecter' : 'Créer un compte'}
          </Button>

          <div className="text-center space-y-2">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-marmeet-text-light hover:text-marmeet-secondary transition-colors font-medium font-nunito"
            >
              {isLogin ? "Pas de compte ? S'inscrire" : "Déjà un compte ? Se connecter"}
            </button>
          </div>
        </Card>

        <button
          onClick={() => setUserType(null)}
          className="w-full text-marmeet-text-light/80 text-sm hover:text-marmeet-text-light transition-colors font-medium font-nunito"
        >
          ← Retour au choix
        </button>
      </div>
    </div>
  );
};

export default Welcome;
