
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-korea-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <span className="text-korea-primary font-bold text-lg">K</span>
              </div>
              <span className="font-playfair text-xl font-semibold text-white">КореяФокус</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Образовательный ресурс о корейской культуре и ее влиянии на российское общество.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Главная</Link></li>
              <li><Link to="/timeline" className="text-gray-300 hover:text-white transition-colors">История распространения</Link></li>
              <li><Link to="/culture" className="text-gray-300 hover:text-white transition-colors">Культура</Link></li>
              <li><Link to="/education" className="text-gray-300 hover:text-white transition-colors">Образование</Link></li>
              <li><Link to="/research" className="text-gray-300 hover:text-white transition-colors">Исследования</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Ресурсы</h3>
            <ul className="space-y-2">
              <li><Link to="/articles" className="text-gray-300 hover:text-white transition-colors">Статьи</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors">Курсы</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-white transition-colors">События</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Галерея</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">ЧЗВ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <Icon name="Mail" size={18} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">info@koreafocus.ru</span>
              </li>
              <li className="flex items-start space-x-2">
                <Icon name="Phone" size={18} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">+7 (XXX) XXX-XX-XX</span>
              </li>
              <li className="flex items-start space-x-2">
                <Icon name="MapPin" size={18} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">Москва, Россия</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} КореяФокус. Все права защищены.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">
              Условия использования
            </Link>
            <Link to="/contacts" className="text-gray-400 text-sm hover:text-white transition-colors">
              Контакты
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
