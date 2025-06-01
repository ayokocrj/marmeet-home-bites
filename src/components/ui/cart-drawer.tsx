
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CartItem {
  id: string;
  name: string;
  chef: string;
  price: number;
  quantity: number;
  cuisine: string;
  flag: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem
}) => {
  const navigate = useNavigate();
  
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    localStorage.setItem('currentOrder', JSON.stringify({
      items,
      total,
      itemCount
    }));
    navigate('/client/checkout');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
      <Card className="w-full max-h-[80vh] rounded-t-3xl bg-white overflow-hidden">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-marmeet-text font-poppins flex items-center">
              <ShoppingBag className="w-5 h-5 mr-2" />
              Panier ({itemCount})
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-full"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="text-lg font-semibold text-marmeet-text mb-2 font-poppins">
                Votre panier est vide
              </h3>
              <p className="text-marmeet-text-muted font-nunito">
                Découvrez nos délicieux plats faits maison
              </p>
            </div>
          ) : (
            <>
              {/* Items */}
              <div className="max-h-96 overflow-y-auto space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 bg-marmeet-cream-soft rounded-2xl">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <Badge className="bg-marmeet-world text-white text-xs px-2 py-1 rounded-full">
                          {item.flag} {item.cuisine}
                        </Badge>
                      </div>
                      <h4 className="font-semibold text-marmeet-text font-poppins">
                        {item.name}
                      </h4>
                      <p className="text-sm text-marmeet-text-muted font-nunito">
                        Par {item.chef}
                      </p>
                      <p className="text-lg font-bold text-marmeet-secondary font-poppins">
                        {item.price}€
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 rounded-full border-marmeet-primary/30"
                        onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="w-8 text-center font-semibold font-nunito">
                        {item.quantity}
                      </span>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 rounded-full border-marmeet-primary/30"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                    
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 text-red-500 hover:bg-red-50"
                      onClick={() => onRemoveItem(item.id)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>

              {/* Total et Checkout */}
              <div className="space-y-4 pt-4 border-t border-marmeet-cream">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-marmeet-text font-poppins">
                    Total
                  </span>
                  <span className="text-2xl font-bold text-marmeet-secondary font-poppins">
                    {total}€
                  </span>
                </div>
                
                <Button
                  onClick={handleCheckout}
                  className="w-full h-14 bg-gradient-marmeet text-white font-bold text-lg rounded-2xl shadow-warm-lg hover:shadow-cozy transition-all duration-200"
                >
                  Commander • {total}€
                </Button>
              </div>
            </>
          )}
        </div>
      </Card>
    </div>
  );
};
