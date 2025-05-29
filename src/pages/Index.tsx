
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to welcome page
    navigate('/welcome');
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-marmeet">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white text-shadow mb-4">
          marmeet
        </h1>
        <p className="text-white/90 text-lg">
          Chargement...
        </p>
      </div>
    </div>
  );
};

export default Index;
