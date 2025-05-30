
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, MapPin, Heart, Plus, ChefHat, Users, Globe } from 'lucide-react';

const StyleGuide = () => {
  return (
    <div className="min-h-screen bg-marmeet-cream p-6 space-y-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="mb-6">
            <img 
              src="/lovable-uploads/ce65e1e3-f597-4d02-a56f-167ec3683ad9.png" 
              alt="MARMEET Logo" 
              className="h-16 mx-auto animate-glow"
            />
          </div>
          <h1 className="logo-text text-5xl font-bold mb-4">MARMEET</h1>
          <p className="text-marmeet-text-light text-xl font-raleway">
            Guide de Style — Direction Artistique Multiculturelle
          </p>
        </div>

        {/* Palette de couleurs */}
        <Card className="p-8 mb-8 shadow-warm-lg">
          <h2 className="text-2xl font-bold text-marmeet-text mb-6 font-poppins">🎨 Palette de couleurs</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="w-full h-20 bg-marmeet-primary rounded-xl shadow-warm"></div>
              <p className="text-sm font-medium text-marmeet-text">Primaire</p>
              <p className="text-xs text-marmeet-text-muted">#FCD34D</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-20 bg-marmeet-secondary rounded-xl shadow-orange"></div>
              <p className="text-sm font-medium text-marmeet-text">Secondaire</p>
              <p className="text-xs text-marmeet-text-muted">#FFA726</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-20 bg-marmeet-world rounded-xl"></div>
              <p className="text-sm font-medium text-marmeet-text">Mondial</p>
              <p className="text-xs text-marmeet-text-muted">#D14D4D</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-20 bg-marmeet-cream-soft border border-marmeet-primary/20 rounded-xl"></div>
              <p className="text-sm font-medium text-marmeet-text">Fond</p>
              <p className="text-xs text-marmeet-text-muted">#FFF8E7</p>
            </div>
          </div>
        </Card>

        {/* Typographie */}
        <Card className="p-8 mb-8 shadow-warm-lg">
          <h2 className="text-2xl font-bold text-marmeet-text mb-6 font-poppins">🅰️ Typographie</h2>
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold font-poppins text-marmeet-text mb-2">
                Poppins Bold - Titres
              </h1>
              <p className="text-marmeet-text-muted">Pour les titres principaux et les éléments d'emphase</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold font-raleway text-marmeet-text mb-2">
                Raleway Semi-Bold - Sous-titres
              </h2>
              <p className="text-marmeet-text-muted">Pour les sous-titres et sections importantes</p>
            </div>
            <div>
              <p className="text-lg font-nunito text-marmeet-text-light mb-2">
                Nunito Regular - Texte courant
              </p>
              <p className="text-marmeet-text-muted">Pour le contenu principal et les descriptions</p>
            </div>
          </div>
        </Card>

        {/* Boutons */}
        <Card className="p-8 mb-8 shadow-warm-lg">
          <h2 className="text-2xl font-bold text-marmeet-text mb-6 font-poppins">🔘 Boutons</h2>
          <div className="flex flex-wrap gap-4">
            <Button className="btn-marmeet h-12 px-6">
              <Plus className="w-5 h-5 mr-2" />
              Bouton Principal
            </Button>
            <Button variant="outline" className="border-2 border-marmeet-primary text-marmeet-text hover:bg-marmeet-primary hover:text-white rounded-xl h-12 px-6 transition-all duration-200">
              Bouton Secondaire
            </Button>
            <Button className="bg-marmeet-world hover:bg-marmeet-world-dark text-white rounded-xl h-12 px-6 transition-all duration-200">
              <Globe className="w-5 h-5 mr-2" />
              Action Mondiale
            </Button>
          </div>
        </Card>

        {/* Cartes de plats */}
        <Card className="p-8 mb-8 shadow-warm-lg">
          <h2 className="text-2xl font-bold text-marmeet-text mb-6 font-poppins">🍽️ Cartes de plats</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Carte exemple 1 */}
            <Card className="overflow-hidden card-hover shadow-warm">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=200&fit=crop"
                  alt="Plat exemple"
                  className="w-full h-40 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-marmeet-world text-white font-medium text-xs px-3 py-1">
                    🇵🇱 Polonais
                  </Badge>
                </div>
                <div className="absolute top-3 right-3 bg-white/90 rounded-full p-2">
                  <Heart className="w-4 h-4 text-marmeet-world" />
                </div>
              </div>
              
              <div className="p-4 space-y-3">
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg leading-tight font-poppins text-marmeet-text">
                    Pierogi traditionnels
                  </h3>
                  <p className="text-marmeet-text-muted text-sm line-clamp-2 font-nunito">
                    Raviolis farcis aux pommes de terre et fromage blanc
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-marmeet-text-muted">
                    <Clock className="w-4 h-4" />
                    <span>18h30 - 20h</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-marmeet-secondary">13€</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 pt-2 border-t border-marmeet-cream-soft">
                  <div className="w-6 h-6 rounded-full bg-marmeet-primary flex items-center justify-center">
                    <ChefHat className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm text-marmeet-text-light font-medium">Anna K.</span>
                  <div className="flex items-center space-x-1 ml-auto">
                    <MapPin className="w-3 h-3 text-marmeet-text-muted" />
                    <span className="text-xs text-marmeet-text-muted">0.6km</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Carte exemple 2 */}
            <Card className="overflow-hidden card-hover shadow-warm">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&h=200&fit=crop"
                  alt="Plat exemple"
                  className="w-full h-40 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-marmeet-world text-white font-medium text-xs px-3 py-1">
                    🇮🇳 Indien
                  </Badge>
                </div>
                <div className="absolute top-3 right-3 bg-white/90 rounded-full p-2">
                  <Star className="w-4 h-4 text-marmeet-primary fill-current" />
                </div>
              </div>
              
              <div className="p-4 space-y-3">
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg leading-tight font-poppins text-marmeet-text">
                    Curry de poulet
                  </h3>
                  <p className="text-marmeet-text-muted text-sm line-clamp-2 font-nunito">
                    Délicieux curry aux épices traditionnelles et riz basmati
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-marmeet-text-muted">
                    <Clock className="w-4 h-4" />
                    <span>19h - 20h30</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-marmeet-secondary">12€</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 pt-2 border-t border-marmeet-cream-soft">
                  <div className="w-6 h-6 rounded-full bg-marmeet-primary flex items-center justify-center">
                    <ChefHat className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm text-marmeet-text-light font-medium">Priya K.</span>
                  <div className="flex items-center space-x-1 ml-auto">
                    <MapPin className="w-3 h-3 text-marmeet-text-muted" />
                    <span className="text-xs text-marmeet-text-muted">0.5km</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Card>

        {/* Formulaires */}
        <Card className="p-8 mb-8 shadow-warm-lg">
          <h2 className="text-2xl font-bold text-marmeet-text mb-6 font-poppins">📝 Formulaires</h2>
          <div className="space-y-4 max-w-md">
            <Input 
              placeholder="Rechercher un plat, cuisine..." 
              className="input-marmeet h-12 font-nunito"
            />
            <Input 
              type="email" 
              placeholder="votre@email.com" 
              className="input-marmeet h-12 font-nunito"
            />
            <Button className="btn-marmeet w-full h-12">
              <Users className="w-5 h-5 mr-2" />
              S'inscrire
            </Button>
          </div>
        </Card>

        {/* Badges culturels */}
        <Card className="p-8 shadow-warm-lg">
          <h2 className="text-2xl font-bold text-marmeet-text mb-6 font-poppins">🌍 Badges culturels</h2>
          <div className="flex flex-wrap gap-3">
            <Badge className="bg-marmeet-world text-white px-3 py-1 text-sm font-medium">🇫🇷 Français</Badge>
            <Badge className="bg-marmeet-world text-white px-3 py-1 text-sm font-medium">🇮🇹 Italien</Badge>
            <Badge className="bg-marmeet-world text-white px-3 py-1 text-sm font-medium">🇯🇵 Japonais</Badge>
            <Badge className="bg-marmeet-world text-white px-3 py-1 text-sm font-medium">🇲🇦 Marocain</Badge>
            <Badge className="bg-marmeet-world text-white px-3 py-1 text-sm font-medium">🇮🇳 Indien</Badge>
            <Badge className="bg-marmeet-world text-white px-3 py-1 text-sm font-medium">🇨🇳 Chinois</Badge>
            <Badge className="bg-marmeet-world text-white px-3 py-1 text-sm font-medium">🇹🇭 Thaï</Badge>
            <Badge className="bg-marmeet-world text-white px-3 py-1 text-sm font-medium">🇲🇽 Mexicain</Badge>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default StyleGuide;
