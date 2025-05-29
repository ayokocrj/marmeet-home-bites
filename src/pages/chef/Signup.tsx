
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight, Upload, Camera } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ChefSignup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    accessCode: '',
    bio: '',
    interests: [] as string[],
    profilePhoto: '',
    dishes: [] as any[],
    availability: {}
  });

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const interestOptions = [
    'Cuisine française', 'Cuisine italienne', 'Cuisine asiatique', 'Végétarien',
    'Vegan', 'Sans gluten', 'Pâtisserie', 'Cuisine du monde', 'Plats épicés', 'Bio'
  ];

  const nextStep = () => {
    console.log('NextStep called, current step:', currentStep);
    console.log('Form data:', formData);
    console.log('Can proceed:', canProceed());
    
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      console.log('Moving to step:', currentStep + 1);
    } else {
      // Finaliser l'inscription
      localStorage.setItem('chefProfile', JSON.stringify(formData));
      localStorage.setItem('userType', 'chef');
      
      toast({
        title: "Bienvenue sur MARMEET !",
        description: "Votre profil chef a été créé avec succès",
      });
      
      navigate('/chef/dashboard');
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const canProceed = () => {
    console.log('Checking canProceed for step:', currentStep);
    switch (currentStep) {
      case 1:
        const step1Valid = formData.name.trim() !== '' && formData.address.trim() !== '';
        console.log('Step 1 validation:', { name: formData.name, address: formData.address, valid: step1Valid });
        return step1Valid;
      case 2:
        const step2Valid = formData.bio.trim() !== '' || formData.interests.length > 0;
        console.log('Step 2 validation:', { bio: formData.bio, interests: formData.interests, valid: step2Valid });
        return step2Valid;
      case 3:
      case 4:
      case 5:
        return true;
      default:
        return true;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-gray-900">Informations de base</h2>
              <p className="text-gray-600">Commençons par vous connaître</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Votre nom complet *
                </label>
                <Input
                  placeholder="Ex: Marie Dupont"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="h-12"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Adresse complète *
                </label>
                <Input
                  placeholder="Ex: 15 rue de la Paix, 75001 Paris"
                  value={formData.address}
                  onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                  className="h-12"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Code d'accès (optionnel)
                </label>
                <Input
                  placeholder="Ex: Bâtiment A, 2ème étage, porte droite"
                  value={formData.accessCode}
                  onChange={(e) => setFormData(prev => ({ ...prev, accessCode: e.target.value }))}
                  className="h-12"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Indications pour faciliter la récupération des plats
                </p>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-gray-900">Votre profil</h2>
              <p className="text-gray-600">Parlez-nous de votre passion culinaire</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-24 h-24 bg-gradient-soft rounded-full flex items-center justify-center border-2 border-dashed border-marmeet-orange">
                  <Camera className="w-8 h-8 text-marmeet-orange" />
                </div>
                <Button variant="outline" className="text-marmeet-orange border-marmeet-orange">
                  <Upload className="w-4 h-4 mr-2" />
                  Ajouter une photo
                </Button>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Présentez-vous en quelques mots
                </label>
                <Textarea
                  placeholder="Ex: Passionnée de cuisine depuis 10 ans, j'adore partager mes recettes familiales et découvrir de nouvelles saveurs..."
                  value={formData.bio}
                  onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                  className="h-24"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Vos spécialités culinaires
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {interestOptions.map((interest) => (
                    <button
                      key={interest}
                      onClick={() => toggleInterest(interest)}
                      className={`p-3 rounded-xl text-sm font-medium transition-all ${
                        formData.interests.includes(interest)
                          ? 'bg-gradient-marmeet text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-gray-900">Vos plats</h2>
              <p className="text-gray-600">Ajoutez vos créations culinaires</p>
            </div>
            
            <div className="space-y-4">
              <Card className="p-4 border-2 border-dashed border-marmeet-orange bg-gradient-soft">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-marmeet-orange rounded-full flex items-center justify-center mx-auto">
                    <Upload className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Créer votre premier plat</h3>
                    <p className="text-sm text-gray-600">Photo, description, prix et créneaux</p>
                  </div>
                  <Button className="bg-gradient-marmeet text-white">
                    Ajouter un plat
                  </Button>
                </div>
              </Card>
              
              <div className="text-center text-sm text-gray-500">
                Vous pourrez ajouter d'autres plats depuis votre tableau de bord
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-gray-900">Vos disponibilités</h2>
              <p className="text-gray-600">Quand proposez-vous vos plats ?</p>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium text-gray-600">
                {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((day) => (
                  <div key={day} className="p-2">{day}</div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 7 }, (_, i) => (
                  <div key={i} className="space-y-2">
                    <button className="w-full h-12 bg-gray-100 rounded-lg hover:bg-marmeet-orange hover:text-white transition-colors">
                      12h-14h
                    </button>
                    <button className="w-full h-12 bg-gray-100 rounded-lg hover:bg-marmeet-orange hover:text-white transition-colors">
                      19h-21h
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="text-center text-sm text-gray-500">
                Vous pourrez modifier vos créneaux à tout moment
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-marmeet rounded-full flex items-center justify-center mx-auto">
                <span className="text-3xl">🎉</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Félicitations !</h2>
              <p className="text-gray-600">
                Votre profil chef est maintenant public.<br />
                Les clients peuvent découvrir vos plats !
              </p>
            </div>
            
            <Card className="p-4 bg-gradient-soft border-marmeet-orange">
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Prochaines étapes :</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Ajoutez vos premiers plats avec photos</li>
                  <li>• Définissez vos créneaux de récupération</li>
                  <li>• Recevez vos premières commandes</li>
                </ul>
              </div>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-marmeet p-4">
      <div className="max-w-sm mx-auto space-y-6 pt-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <button 
            onClick={currentStep > 1 ? prevStep : () => navigate('/welcome')} 
            className="p-2 text-white"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold text-white">marmeet</h1>
          <div className="w-10" />
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <Progress value={progress} className="h-2 bg-white/20" />
          <div className="text-center text-white/80 text-sm">
            Étape {currentStep} sur {totalSteps}
          </div>
        </div>

        {/* Content */}
        <Card className="p-6">
          {renderStep()}
        </Card>

        {/* Navigation */}
        <div className="flex justify-between space-x-4">
          {currentStep > 1 && (
            <Button
              variant="outline"
              onClick={prevStep}
              className="flex-1 h-12 bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              Précédent
            </Button>
          )}
          <Button
            onClick={() => {
              console.log('Button clicked, canProceed:', canProceed());
              if (canProceed()) {
                nextStep();
              }
            }}
            disabled={!canProceed()}
            className="flex-1 h-12 bg-white text-marmeet-orange hover:bg-white/90 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {currentStep === totalSteps ? 'Commencer' : 'Suivant'}
            {currentStep < totalSteps && <ArrowRight className="w-4 h-4 ml-2" />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChefSignup;
