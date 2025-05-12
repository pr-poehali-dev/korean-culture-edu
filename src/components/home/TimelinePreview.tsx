
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TimelinePreview = () => {
  const timelineEvents = [
    {
      year: 1990,
      title: "Начало дипломатических отношений",
      description: "Установление дипломатических отношений между Россией и Республикой Корея"
    },
    {
      year: 2005,
      title: "Корейская волна",
      description: "Первые корейские сериалы и музыка появляются на российском рынке"
    },
    {
      year: 2012,
      title: "Феномен K-pop",
      description: "Рост популярности K-pop музыки среди российской молодежи"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-korea-dark mb-4">
            История распространения корейской культуры
          </h2>
          <p className="text-lg text-gray-600">
            Проследите ключевые моменты влияния корейской культуры на российское общество с 1990-х годов до наших дней
          </p>
        </div>

        <div className="timeline-container">
          {timelineEvents.map((event, index) => (
            <div 
              key={index} 
              className={`timeline-item ${index % 2 !== 0 ? 'timeline-item-right' : ''}`}
            >
              <div className="timeline-dot"></div>
              <div className="font-bold text-korea-primary text-lg">{event.year}</div>
              <h3 className="text-xl font-semibold font-playfair text-korea-dark mt-2">{event.title}</h3>
              <p className="mt-2 text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild className="bg-korea-primary hover:bg-korea-secondary">
            <Link to="/timeline">Изучить полную временную шкалу</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TimelinePreview;
