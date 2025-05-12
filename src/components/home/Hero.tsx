
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Since framer-motion isn't installed, we'll create a simple version
const MotionDiv = ({ children, className, ...props }: any) => (
  <div className={`animate-fade-in ${className}`} {...props}>
    {children}
  </div>
);

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-white to-purple-50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -top-20 w-72 h-72 bg-korea-accent rounded-full opacity-20 animate-float"></div>
        <div className="absolute left-10 top-40 w-40 h-40 bg-korea-primary rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute right-1/4 bottom-20 w-60 h-60 bg-korea-secondary rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <MotionDiv className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-korea-dark font-playfair leading-tight mb-4">
              Откройте для себя корейскую культуру
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Погрузитесь в увлекательное путешествие по корейской истории, традициям и их влиянию на современное российское общество.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-korea-primary hover:bg-korea-secondary text-white">
                <Link to="/timeline">Исследовать историю</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-korea-primary text-korea-primary hover:bg-korea-primary/10">
                <Link to="/education">Учебные материалы</Link>
              </Button>
            </div>
          </MotionDiv>

          <MotionDiv className="md:w-1/2 relative">
            <div className="relative max-w-md mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-korea-primary to-korea-secondary rounded-lg blur-md opacity-75"></div>
              <div className="relative bg-white rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1534274867514-d5b47ef89238?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                  alt="Корейская культура" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <div className="text-sm font-medium mb-1">Фестиваль культуры</div>
                    <div className="text-lg font-bold font-playfair">Влияние K-pop и дорам на российскую молодежь</div>
                  </div>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
