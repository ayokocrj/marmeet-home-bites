
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Copy, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Confirmation = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const confirmationCode = localStorage.getItem('confirmationCode') || '1234';

  const copyCode = () => {
    navigator.clipboard.writeText(confirmationCode);
    toast({
      title: "Code copié !",
      description: "Le code de confirmation a été copié dans votre presse-papiers.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-marmeet flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-8 animate-fade-in">
        {/* Success Icon */}
        <div className="text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
          <h1 className="text-2xl font-bold text-white text-shadow mb-2">
            Commande confirmée !
          </h1>
          <p className="text-white/90">
            Votre plat vous attend chez Priya
          </p>
        </div>

        {/* Confirmation Code */}
        <Card className="p-6 text-center">
          <h2 className="font-semibold mb-4">Code de confirmation</h2>
          <div className="bg-gray-100 rounded-xl p-6 mb-4">
            <div className="text-4xl font-bold text-marmeet-orange tracking-wider">
              {confirmationCode}
            </div>
          </div>
          <Button
            variant="outline"
            onClick={copyCode}
            className="w-full"
          >
            <Copy className="w-4 h-4 mr-2" />
            Copier le code
          </Button>
        </Card>

        {/* Pickup Details */}
        <Card className="p-4 bg-gradient-soft border-yellow-200">
          <h3 className="font-semibold text-marmeet-dark-orange mb-3">Détails de collecte</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-marmeet-orange" />
              <span>15 rue des Épices, Paris 11e</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-marmeet-orange" />
              <span>18h30 - 20h</span>
            </div>
            <p className="text-marmeet-dark-orange font-medium mt-3">
              Présentez ce code à Priya pour récupérer votre commande
            </p>
          </div>
        </Card>

        <div className="space-y-3">
          <Button
            onClick={() => navigate('/client/home')}
            className="w-full h-12 bg-white text-marmeet-orange hover:bg-white/90 font-semibold rounded-xl"
          >
            Retour à l'accueil
          </Button>
          
          <Button
            variant="ghost"
            onClick={() => navigate('/client/orders')}
            className="w-full text-white/80 hover:text-white hover:bg-white/10"
          >
            Voir mes commandes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
