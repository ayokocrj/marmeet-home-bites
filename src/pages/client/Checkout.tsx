
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const Checkout = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('apple-pay');
  const [orderData, setOrderData] = useState<any>({});

  useEffect(() => {
    // Get order from localStorage
    const order = JSON.parse(localStorage.getItem('currentOrder') || '{}');
    setOrderData(order);
  }, []);
  
  const handlePayment = () => {
    // Generate random confirmation code
    const confirmationCode = Math.floor(1000 + Math.random() * 9000).toString();
    localStorage.setItem('confirmationCode', confirmationCode);
    
    // Clear cart after successful payment
    localStorage.removeItem('cart');
    localStorage.removeItem('currentOrder');
    
    navigate('/client/confirmation');
  };

  return (
    <div className="min-h-screen bg-marmeet-cream">
      {/* Header */}
      <div className="bg-white border-b border-marmeet-primary/20 shadow-warm">
        <div className="flex items-center p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-semibold ml-4 font-poppins text-marmeet-text">Confirmation</h1>
        </div>
      </div>

      <div className="p-4 space-y-6 max-w-sm mx-auto">
        {/* Order Summary */}
        <Card className="p-6 bg-white rounded-2xl shadow-warm border-0">
          <h2 className="font-bold text-lg mb-4 text-marmeet-text font-poppins">Récapitulatif de commande</h2>
          <div className="space-y-3">
            {orderData.items?.map((item: any, index: number) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-xs">{item.flag}</span>
                    <span className="text-sm font-medium text-marmeet-text font-poppins">{item.name}</span>
                  </div>
                  <p className="text-xs text-marmeet-text-muted font-nunito">Par {item.chef}</p>
                  <p className="text-xs text-marmeet-text-muted font-nunito">Quantité: {item.quantity}</p>
                </div>
                <span className="font-semibold text-marmeet-secondary font-poppins">{item.price * item.quantity}€</span>
              </div>
            )) || (
              <div className="flex justify-between">
                <span>Commande</span>
                <span>12€</span>
              </div>
            )}
            
            <div className="border-t border-marmeet-cream pt-3 flex justify-between font-bold text-lg">
              <span className="text-marmeet-text font-poppins">Total</span>
              <span className="text-marmeet-secondary font-poppins">{orderData.total || 12}€</span>
            </div>
          </div>
        </Card>

        {/* Pickup Info */}
        <Card className="p-6 bg-gradient-warm border-marmeet-primary/20 shadow-warm rounded-2xl">
          <h3 className="font-bold text-marmeet-text mb-3 font-poppins">Informations de collecte</h3>
          <div className="space-y-2 text-sm font-nunito">
            <p className="text-marmeet-text"><strong>Chef:</strong> Priya Kumar</p>
            <p className="text-marmeet-text"><strong>Adresse:</strong> 15 rue des Épices, Paris 11e</p>
            <p className="text-marmeet-text"><strong>Heure:</strong> 18h30 - 20h</p>
            <p className="text-marmeet-secondary font-semibold mt-3 bg-white/80 p-2 rounded-xl">
              💡 Montrez votre code de confirmation au chef
            </p>
          </div>
        </Card>

        {/* Payment Methods */}
        <Card className="p-6 bg-white rounded-2xl shadow-warm border-0">
          <h2 className="font-bold text-lg mb-4 text-marmeet-text font-poppins">Méthode de paiement</h2>
          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-4 border-2 border-marmeet-primary/20 rounded-2xl hover:border-marmeet-primary/40 transition-colors">
                <RadioGroupItem value="apple-pay" id="apple-pay" />
                <Label htmlFor="apple-pay" className="flex items-center space-x-3 flex-1 cursor-pointer font-nunito">
                  <Smartphone className="w-5 h-5 text-marmeet-secondary" />
                  <span>Apple Pay</span>
                </Label>
              </div>
              
              <div className="flex items-center space-x-3 p-4 border-2 border-marmeet-primary/20 rounded-2xl hover:border-marmeet-primary/40 transition-colors">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card" className="flex items-center space-x-3 flex-1 cursor-pointer font-nunito">
                  <CreditCard className="w-5 h-5 text-marmeet-secondary" />
                  <span>Carte bancaire</span>
                </Label>
              </div>
            </div>
          </RadioGroup>
        </Card>
      </div>

      {/* Payment Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-marmeet-primary/20 p-4 shadow-cozy">
        <div className="max-w-sm mx-auto">
          <Button
            onClick={handlePayment}
            className="w-full h-14 bg-gradient-marmeet text-white font-bold text-lg rounded-2xl shadow-warm-lg hover:shadow-cozy transition-all duration-200 flex items-center justify-center space-x-3"
          >
            {paymentMethod === 'apple-pay' ? (
              <>
                <Smartphone className="w-6 h-6" />
                <span>Payer avec Apple Pay</span>
              </>
            ) : (
              <span>Payer {orderData.total || 12}€</span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
