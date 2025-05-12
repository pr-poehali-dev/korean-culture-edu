
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const cultureItems = [
  {
    title: "K-pop музыка",
    image: "https://images.unsplash.com/photo-1619855544858-e05e60ee5801?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "K-pop (корейская поп-музыка) стала феноменом, объединяющим миллионы поклонников по всему миру, включая Россию.",
    link: "/culture/kpop"
  },
  {
    title: "Корейские дорамы",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    description: "Сериалы из Южной Кореи завоевали популярность благодаря увлекательным сюжетам и высокому качеству производства.",
    link: "/culture/drama"
  },
  {
    title: "Корейская кухня",
    image: "https://images.unsplash.com/photo-1583224964978-2d1c9c338f5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "От острого кимчи до сытного пибимпаба — корейская кухня становится все более популярной в России.",
    link: "/culture/food"
  }
];

const CultureCards = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-korea-dark mb-4">
            Элементы корейской культуры
          </h2>
          <p className="text-lg text-gray-600">
            Исследуйте различные аспекты корейской культуры и их влияние на современное российское общество
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cultureItems.map((item, index) => (
            <Card key={index} className="overflow-hidden card-hover border-none shadow-md">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-playfair text-korea-dark">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="border-korea-primary text-korea-primary hover:bg-korea-primary/10">
                  <Link to={item.link}>Узнать больше</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CultureCards;
