
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Upload, Euro, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const EditDish = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { toast } = useToast();
  const isEdit = Boolean(id);
  
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

  // Simulate loading existing dish data for edit mode
  useEffect(() => {
    if (isEdit && id) {
      // In a real app, you would fetch the dish data from your API
      const mockDishData = {
        name: 'Lasagnes maison',
        description: 'Lasagnes traditionnelles avec sauce bolognaise maison et béchamel onctueuse',
        price: '12',
        preparationTime: '45 min',
        portions: '4',
        tags: ['Fait maison', 'Réchauffable', 'Plat complet'],
        image: ''
      };
      setDishData(mockDishData);
    }
  }, [isEdit, id]);
  
  const toggleTag = (tag: string) => {
    setDishData(prev => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag]
    }));
  };
  
  const handleSave = () => {
    // Validation
    if (!dishData.name || !dishData.description || !dishData.price) {
      toast({
        title: "Champs manquants",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive"
      });
      return;
    }

    // Save the dish (simulate API call)
    console.log('Plat sauvegardé:', dishData);
    
    toast({
      title: isEdit ? "Plat modifié" : "Plat créé",
      description: isEdit ? "Vos modifications ont été enregistrées" : "Votre nouveau plat est maintenant disponible",
    });
    
    navigate('/chef/dashboard');
  };

  const handleImageUpload = () => {
    // Simulate image upload
    toast({
      title: "Image téléchargée",
      description: "Votre photo de plat a été ajoutée avec succès",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
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
            <Button 
              onClick={handleImageUpload}
              className="bg-gradient-marmeet text-white"
            >
              Sélectionner une image
            </Button>
          </div>
        </Card>
        
        {/* Dish Details */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom du plat *
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
              Description *
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
                Prix (€) *
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
            <p className="text-sm text-gray-600 mb-4">
              Définissez les moments où ce plat sera disponible à la commande.
            </p>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="h-10 text-sm">
                  Aujourd'hui 12h-14h
                </Button>
                <Button variant="outline" className="h-10 text-sm">
                  Demain 19h-21h
                </Button>
              </div>
              <Button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800">
                + Ajouter un créneau
              </Button>
            </div>
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
