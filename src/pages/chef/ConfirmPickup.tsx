
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ConfirmPickup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [confirmationCode, setConfirmationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleVerifyCode = async () => {
    if (!confirmationCode || confirmationCode.length !== 4) {
      toast({
        title: "Code invalide",
        description: "Le code de confirmation doit contenir 4 chiffres",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch('/api/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          confirmationCode,
          chefId: localStorage.getItem('userId') || 'user-2'
        }),
      });

      if (response.ok) {
        const result = await response.json();
        toast({
          title: "✅ Commande confirmée !",
          description: "Le plat a été remis avec succès",
        });
        navigate('/chef/dashboard');
      } else {
        const error = await response.json();
        toast({
          title: "Code incorrect",
          description: error.error || "Code de confirmation non trouvé",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de vérifier le code",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-warm p-4">
      <div className="max-w-sm mx-auto space-y-6 pt-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigate('/chef/dashboard')} 
            className="p-2 text-marmeet-gold"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold text-marmeet-gold font-poppins">Confirmer retrait</h1>
          <div className="w-10" />
        </div>

        <Card className="p-6 space-y-6 bg-white/95 backdrop-blur-sm shadow-xl border border-marmeet-yellow/20">
          <div className="text-center space-y-2">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            <h2 className="text-xl font-semibold font-poppins">Code de confirmation</h2>
            <p className="text-gray-600 text-sm">
              Demandez au client son code à 4 chiffres pour confirmer la remise du plat
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 font-poppins">
                Code de confirmation
              </label>
              <Input
                type="text"
                placeholder="1234"
                value={confirmationCode}
                onChange={(e) => setConfirmationCode(e.target.value.replace(/\D/g, '').slice(0, 4))}
                className="text-center text-2xl font-mono tracking-widest border-marmeet-yellow/30 focus:border-marmeet-yellow focus:ring-marmeet-yellow/20"
                maxLength={4}
              />
            </div>

            <Button 
              onClick={handleVerifyCode}
              disabled={confirmationCode.length !== 4 || isLoading}
              className="w-full bg-gradient-marmeet hover:opacity-90 shadow-lg font-poppins"
            >
              {isLoading ? 'Vérification...' : 'Confirmer la remise'}
            </Button>
          </div>

          <div className="bg-marmeet-cream p-4 rounded-lg border border-marmeet-yellow/20">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-marmeet-gold mt-0.5 flex-shrink-0" />
              <div className="text-sm text-marmeet-gold">
                <p className="font-medium mb-1 font-poppins">Comment ça marche ?</p>
                <p>Le client a reçu un code unique lors de sa commande. Ce code confirme que le bon plat est remis à la bonne personne.</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ConfirmPickup;
