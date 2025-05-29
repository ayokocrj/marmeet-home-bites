
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const Checkout = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('apple-pay');

  // Get order from localStorage
  const orderData = JSON.parse(localStorage.getItem('currentOrder') || '{}');
  
  const handlePayment = () => {
    // Generate random confirmation code
    const confirmationCode = Math.floor(1000 + Math.random() * 9000).toString();
    localStorage.setItem('confirmationCode', confirmationCode);
    navigate('/client/confirmation');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="flex items-center p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-semibold ml-4">Confirmation</h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Order Summary */}
        <Card className="p-4">
          <h2 className="font-semibold mb-4">Récapitulatif de commande</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Poulet au curry</span>
              <span>12€</span>
            </div>
            <div className="flex justify-between">
              <span>Quantité: {orderData.quantity || 1}</span>
              <span></span>
            </div>
            <div className="border-t border-gray-200 pt-3 flex justify-between font-semibold">
              <span>Total</span>
              <span>{orderData.total || 12}€</span>
            </div>
          </div>
        </Card>

        {/* Pickup Info */}
        <Card className="p-4 bg-gradient-soft border-yellow-200">
          <h3 className="font-semibold text-marmeet-dark-orange mb-2">Informations de collecte</h3>
          <div className="space-y-1 text-sm">
            <p><strong>Chef:</strong> Priya Kumar</p>
            <p><strong>Adresse:</strong> 15 rue des Épices, Paris 11e</p>
            <p><strong>Heure:</strong> 18h30 - 20h</p>
            <p className="text-marmeet-dark-orange font-medium mt-2">
              Montrez votre code de confirmation au chef
            </p>
          </div>
        </Card>

        {/* Payment Methods */}
        <Card className="p-4">
          <h2 className="font-semibold mb-4">Méthode de paiement</h2>
          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                <RadioGroupItem value="apple-pay" id="apple-pay" />
                <Label htmlFor="apple-pay" className="flex items-center space-x-3 flex-1 cursor-pointer">
                  <Smartphone className="w-5 h-5" />
                  <span>Apple Pay</span>
                </Label>
              </div>
              
              <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card" className="flex items-center space-x-3 flex-1 cursor-pointer">
                  <CreditCard className="w-5 h-5" />
                  <span>Carte bancaire</span>
                </Label>
              </div>
            </div>
          </RadioGroup>
        </Card>
      </div>

      {/* Payment Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <Button
          onClick={handlePayment}
          className="w-full h-12 bg-black text-white font-semibold rounded-xl flex items-center justify-center space-x-2"
        >
          {paymentMethod === 'apple-pay' ? (
            <>
              <Smartphone className="w-5 h-5" />
              <span>Pay</span>
            </>
          ) : (
            <span>Payer {orderData.total || 12}€</span>
          )}
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
