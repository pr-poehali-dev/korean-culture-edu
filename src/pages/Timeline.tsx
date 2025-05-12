
import { useState } from "react";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Timeline = () => {
  const [selectedEra, setSelectedEra] = useState<string>("1990s");

  // Временная шкала с описанием этапов распространения K-pop в России
  const timelineData = {
    "1990s": {
      title: "Зарождение интереса (1990-1999)",
      description: "Первое знакомство российской аудитории с корейской музыкой после установления дипломатических отношений между странами в 1990 году.",
      events: [
        {
          year: 1990,
          title: "Установление дипломатических отношений",
          description: "Начало официальных отношений между Россией и Республикой Корея открыло путь для культурного обмена."
        },
        {
          year: 1996,
          title: "Первые корейские телепередачи",
          description: "Единичные телепрограммы о корейской культуре начали появляться на российском телевидении."
        },
        {
          year: 1999,
          title: "Появление интернет-сообществ",
          description: "Формирование первых русскоязычных интернет-форумов, посвященных корейской культуре."
        }
      ],
      keyArtists: ["Seo Taiji and Boys", "H.O.T", "S.E.S"],
      impact: "Минимальное влияние, ограниченное в основном дипломатическими и академическими кругами."
    },
    "2000s": {
      title: "Первая волна (2000-2009)",
      description: "Начало формирования корейской волны «Халлю» и появление первых фанатских сообществ в России.",
      events: [
        {
          year: 2003,
          title: "Первые K-pop форумы",
          description: "Создание первых русскоязычных форумов и сообществ, посвященных корейской музыке."
        },
        {
          year: 2006,
          title: "Распространение через интернет",
          description: "Рост популярности корейской музыки благодаря видеохостингам и пиринговым сетям."
        },
        {
          year: 2008,
          title: "Первые фан-клубы",
          description: "Формирование организованных фан-сообществ в крупных городах России."
        }
      ],
      keyArtists: ["TVXQ", "Super Junior", "BIGBANG", "Wonder Girls"],
      impact: "Формирование первых субкультурных сообществ в крупных городах, преимущественно среди молодежи."
    },
    "2010s": {
      title: "Глобализация (2010-2019)",
      description: "Массовое распространение K-pop в России и интеграция в молодежную культуру.",
      events: [
        {
          year: 2011,
          title: "Первые K-pop концерты",
          description: "Организация первых официальных концертов корейских исполнителей в России."
        },
        {
          year: 2012,
          title: "Gangnam Style",
          description: "Мировой хит PSY привлек массовое внимание к корейской музыке."
        },
        {
          year: 2016,
          title: "K-pop фестивали",
          description: "Регулярное проведение фестивалей корейской культуры в крупных городах России."
        },
        {
          year: 2018,
          title: "Коммерческий успех BTS",
          description: "Альбомы BTS официально продаются в России и попадают в чарты."
        }
      ],
      keyArtists: ["BTS", "EXO", "BLACKPINK", "TWICE", "PSY"],
      impact: "Значительное влияние на молодежную моду, танцевальную культуру и музыкальные предпочтения."
    },
    "2020s": {
      title: "Мейнстрим (2020-наст. время)",
      description: "K-pop становится частью массовой культуры в России, появление русскоязычных K-pop исполнителей.",
      events: [
        {
          year: 2020,
          title: "K-pop в медиа",
          description: "Регулярное освещение K-pop в крупных российских СМИ и на телевидении."
        },
        {
          year: 2021,
          title: "Российские K-pop группы",
          description: "Формирование первых российских групп, работающих в K-pop стилистике."
        },
        {
          year: 2022,
          title: "Коммерческое сотрудничество",
          description: "Корейские музыкальные компании начинают активно сотрудничать с российскими брендами."
        },
        {
          year: 2023,
          title: "Образовательные программы",
          description: "Включение элементов корейской популярной культуры в образовательные программы."
        }
      ],
      keyArtists: ["aespa", "Stray Kids", "NewJeans", "ENHYPEN", "SEVENTEEN"],
      impact: "Полноценная интеграция в российскую массовую культуру, влияние на музыкальную индустрию, моду и медиа-контент."
    }
  };

  // Данные о текущей эпохе
  const currentEra = timelineData[selectedEra as keyof typeof timelineData];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-korea-primary/10 to-korea-secondary/10 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair text-center text-korea-dark mb-4">
              История K-pop в России
            </h1>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Интерактивная временная шкала, отражающая этапы популяризации корейской музыкальной культуры в России с 1990-х годов до наших дней
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Навигация по временной шкале */}
          <Tabs 
            defaultValue="1990s" 
            value={selectedEra} 
            onValueChange={setSelectedEra}
            className="mb-8"
          >
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white border shadow-sm p-1">
                <TabsTrigger value="1990s" className="px-6 py-2 font-medium">1990-е</TabsTrigger>
                <TabsTrigger value="2000s" className="px-6 py-2 font-medium">2000-е</TabsTrigger>
                <TabsTrigger value="2010s" className="px-6 py-2 font-medium">2010-е</TabsTrigger>
                <TabsTrigger value="2020s" className="px-6 py-2 font-medium">2020-е</TabsTrigger>
              </TabsList>
            </div>

            {/* Содержимое для эпохи */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-3xl font-bold font-playfair text-korea-dark mb-3">
                {currentEra.title}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {currentEra.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Music" className="text-korea-primary" />
                      Ключевые артисты
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {currentEra.keyArtists.map((artist, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-korea-primary"></span>
                          {artist}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="TrendingUp" className="text-korea-primary" />
                      Влияние на общество
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{currentEra.impact}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Globe" className="text-korea-primary" />
                      Мировой контекст
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {selectedEra === "1990s" && "Первое поколение K-pop артистов в мире, формирование основ индустрии в Корее."}
                      {selectedEra === "2000s" && "Второе поколение K-pop артистов, начало экспансии корейской музыки в Азии."}
                      {selectedEra === "2010s" && "Третье поколение K-pop, глобальный прорыв и мировое признание корейской музыки."}
                      {selectedEra === "2020s" && "Четвертое поколение K-pop, полноценная интеграция в мировую музыкальную индустрию."}
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-bold font-playfair text-korea-dark mb-4">
                Ключевые события
              </h3>

              <div className="timeline-container mb-8">
                {currentEra.events.map((event, index) => (
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
            </div>
          </Tabs>

          {/* Дополнительная информация */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-korea-dark">
                  Фан-сообщества в России
                </CardTitle>
                <CardDescription>
                  Развитие и влияние K-pop фан-культуры
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  K-pop фан-сообщества в России прошли путь от небольших групп энтузиастов до крупных и хорошо организованных объединений с собственными медиа-ресурсами, мероприятиями и даже благотворительными проектами.
                </p>
                <Button className="bg-korea-primary hover:bg-korea-secondary">
                  Подробнее о фан-культуре
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-korea-dark">
                  Социологические исследования
                </CardTitle>
                <CardDescription>
                  Результаты опросов о восприятии K-pop в России
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  По данным исследований, наибольшую популярность K-pop имеет среди аудитории 14-25 лет. Среди основных причин привлекательности - высокое качество производства, визуальная эстетика и танцевальное мастерство исполнителей.
                </p>
                <Button className="bg-korea-primary hover:bg-korea-secondary">
                  Изучить результаты опросов
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Призыв к действию */}
          <div className="bg-gradient-to-r from-korea-primary to-korea-secondary rounded-lg shadow-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold font-playfair mb-4">
              Хотите глубже изучить влияние K-pop на российскую культуру?
            </h3>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              Ознакомьтесь с нашими образовательными материалами и исследованиями о феномене K-pop в России
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-white text-korea-primary hover:bg-gray-100">
                Учебные материалы
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                Пройти опрос
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Timeline;
