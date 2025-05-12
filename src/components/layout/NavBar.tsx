
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Главная', path: '/' },
    { name: 'История распространения', path: '/timeline' },
    { name: 'Культура', path: '/culture' },
    { name: 'Образование', path: '/education' },
    { name: 'Исследования', path: '/research' },
  ];

  return (
    <nav className="w-full bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 rounded-full bg-korea-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <span className="font-playfair text-xl font-semibold text-korea-dark">КореяФокус</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className="text-gray-600 hover:text-korea-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-korea-primary hover:bg-korea-secondary transition-colors">
              Начать изучение
            </Button>
          </div>
          
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Icon name="Menu" className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="text-lg text-gray-600 hover:text-korea-primary py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button className="bg-korea-primary hover:bg-korea-secondary w-full mt-4">
                    Начать изучение
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
