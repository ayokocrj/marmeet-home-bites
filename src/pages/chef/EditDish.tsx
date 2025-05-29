
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Upload, Euro, Clock } from 'lucide-react';

const EditDish = () => {
  const navigate = useNavigate();
  const isEdit = false; // Changer à true pour le mode édition
  
  const [dishData, setDishData] = useState({
    name: '',
    description: '',
    price: '',
    preparationTime: '',
    portions: '',
    tags: [] as string[],
    image: ''
  });
  
  const availableTags = [
    'Végétarien', 'Vegan', 'Sans gluten', 'Sans lactose', 'Épicé',
    'Plat complet', 'Entrée', 'Dessert', 'Bio', 'Fait maison',
    'Réchauffable', 'Pour enfants', 'Healthy'
  ];
  
  const toggleTag = (tag: string) => {
    setDishData(prev => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag]
    }));
  };
  
  const handleSave = () => {
    // Sauvegarder le plat
    console.log('Plat sauvegardé:', dishData);
    navigate('/chef/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <div className="bg-gradient-marmeet p-4">
        <div className="max-w-sm mx-auto">
          <div className="flex items-center justify-between">
            <button onClick={() => navigate(-1)} className="p-2 bg-white/20 rounded-full">
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <h1 className="text-xl font-bold text-white">
              {isEdit ? 'Modifier le plat' : 'Nouveau plat'}
            </h1>
            <div className="w-10"></div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-sm mx-auto p-4 space-y-6">
        {/* Image Upload */}
        <Card className="p-4 border-2 border-dashed border-marmeet-orange bg-gradient-soft">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-marmeet-orange rounded-full flex items-center justify-center mx-auto">
              <Upload className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Photo du plat</h3>
              <p className="text-sm text-gray-600">Ajoutez une belle photo pour attirer les clients</p>
            </div>
            <Button className="bg-gradient-marmeet text-white">
              Sélectionner une image
            </Button>
          </div>
        </Card>
        
        {/* Dish Details */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom du plat
            </label>
            <Input
              placeholder="Ex: Lasagnes maison à la bolognaise"
              value={dishData.name}
              onChange={(e) => setDishData(prev => ({ ...prev, name: e.target.value }))}
              className="h-12"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <Textarea
              placeholder="Décrivez votre plat, ses ingrédients principaux, sa préparation..."
              value={dishData.description}
              onChange={(e) => setDishData(prev => ({ ...prev, description: e.target.value }))}
              className="min-h-[100px]"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prix (€)
              </label>
              <div className="relative">
                <Input
                  type="number"
                  placeholder="12.50"
                  value={dishData.price}
                  onChange={(e) => setDishData(prev => ({ ...prev, price: e.target.value }))}
                  className="h-12 pl-9"
                />
                <Euro className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Temps de préparation
              </label>
              <div className="relative">
                <Input
                  placeholder="30 min"
                  value={dishData.preparationTime}
                  onChange={(e) => setDishData(prev => ({ ...prev, preparationTime: e.target.value }))}
                  className="h-12 pl-9"
                />
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nombre de portions
            </label>
            <Input
              type="number"
              placeholder="2"
              value={dishData.portions}
              onChange={(e) => setDishData(prev => ({ ...prev, portions: e.target.value }))}
              className="h-12 w-20"
            />
          </div>
        </div>
        
        {/* Tags */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Caractéristiques du plat
          </label>
          <div className="grid grid-cols-2 gap-2">
            {availableTags.map((tag) => (
              <div key={tag} className="flex items-center space-x-2 p-2 border border-gray-200 rounded-lg">
                <Checkbox
                  id={`tag-${tag}`}
                  checked={dishData.tags.includes(tag)}
                  onCheckedChange={() => toggleTag(tag)}
                />
                <label
                  htmlFor={`tag-${tag}`}
                  className="text-sm text-gray-700 cursor-pointer flex-1"
                >
                  {tag}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        {/* Availability */}
        <div>
          <h3 className="font-medium text-gray-800 mb-3">Créneaux de disponibilité</h3>
          <Card className="p-4">
            <p className="text-sm text-gray-600">
              Définissez les moments où ce plat sera disponible à la commande.
              Vous pouvez le faire depuis votre tableau de bord dans la section Disponibilités.
            </p>
            <Button className="mt-4 w-full bg-gray-200 hover:bg-gray-300 text-gray-800">
              Gérer les disponibilités
            </Button>
          </Card>
        </div>
        
        {/* Save Button */}
        <Button
          onClick={handleSave}
          className="w-full h-12 bg-gradient-marmeet text-white font-semibold"
        >
          {isEdit ? 'Enregistrer les modifications' : 'Créer le plat'}
        </Button>
      </div>
    </div>
  );
};

export default EditDish;
