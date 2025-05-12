
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <Card className="card-hover bg-white border border-gray-100">
      <CardHeader className="pb-2">
        <div className="h-12 w-12 rounded-full bg-korea-primary/10 flex items-center justify-center mb-4">
          <Icon name={icon} className="h-6 w-6 text-korea-primary" />
        </div>
        <CardTitle className="text-xl font-playfair">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

const FeatureSection = () => {
  const features = [
    {
      title: "Интерактивная история",
      description: "Изучите развитие корейской культуры в России с 1990-х годов до наших дней через интерактивную временную шкалу.",
      icon: "History"
    },
    {
      title: "Культурное влияние",
      description: "Исследуйте влияние K-pop, корейских дорам, кухни и других аспектов корейской культуры на российское общество.",
      icon: "Globe"
    },
    {
      title: "Образовательные материалы",
      description: "Получите доступ к учебным пособиям, статьям и материалам для изучения корейской культуры и языка.",
      icon: "BookOpen"
    },
    {
      title: "Исследования и аналитика",
      description: "Ознакомьтесь с результатами социологических опросов о восприятии корейской культуры различными возрастными группами.",
      icon: "BarChart"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-korea-dark mb-4">Изучайте корейскую культуру</h2>
          <p className="text-lg text-gray-600">
            Наш образовательный портал предоставляет разнообразные ресурсы для изучения влияния корейской культуры
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
