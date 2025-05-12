
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const lessonModules = [
    {
      id: 1,
      title: "Введение в K-pop",
      description: "Основные понятия, история и особенности корейской поп-музыки",
      lessons: [
        { id: "1-1", title: "История K-pop индустрии", duration: "30 мин", type: "video" },
        { id: "1-2", title: "Основные термины и понятия", duration: "20 мин", type: "text" },
        { id: "1-3", title: "Структура K-pop индустрии", duration: "25 мин", type: "text" },
        { id: "1-4", title: "Поколения K-pop артистов", duration: "45 мин", type: "interactive" },
      ]
    },
    {
      id: 2,
      title: "K-pop в России",
      description: "Распространение корейской музыкальной культуры в российском обществе",
      lessons: [
        { id: "2-1", title: "Хронология проникновения K-pop в Россию", duration: "35 мин", type: "text" },
        { id: "2-2", title: "Фан-культура и сообщества в России", duration: "40 мин", type: "video" },
        { id: "2-3", title: "Концерты и фестивали K-pop в России", duration: "25 мин", type: "gallery" },
        { id: "2-4", title: "Восприятие K-pop российской аудиторией", duration: "30 мин", type: "interactive" },
      ]
    },
    {
      id: 3,
      title: "Музыкальный анализ K-pop",
      description: "Разбор музыкальных и стилистических особенностей корейской поп-музыки",
      lessons: [
        { id: "3-1", title: "Жанровое разнообразие в K-pop", duration: "45 мин", type: "audio" },
        { id: "3-2", title: "Структура K-pop композиций", duration: "30 мин", type: "text" },
        { id: "3-3", title: "Корейская хореография и танцевальные стили", duration: "50 мин", type: "video" },
        { id: "3-4", title: "Визуальная эстетика и концепты", duration: "35 мин", type: "gallery" },
      ]
    },
    {
      id: 4,
      title: "Социокультурное влияние",
      description: "Влияние K-pop на российскую молодежную культуру и социальные тренды",
      lessons: [
        { id: "4-1", title: "K-pop и молодежные субкультуры", duration: "40 мин", type: "text" },
        { id: "4-2", title: "Влияние на моду и стиль", duration: "35 мин", type: "gallery" },
        { id: "4-3", title: "K-pop как инструмент мягкой силы", duration: "45 мин", type: "text" },
        { id: "4-4", title: "Языковое влияние и интерес к корейскому языку", duration: "30 мин", type: "interactive" },
      ]
    }
  ];

  const recommendedResources = [
    {
      title: "Документальные фильмы",
      items: [
        "K-pop Evolution (YouTube Originals)",
        "Rise of Bangtan (Документальный фильм о BTS)",
        "9 Мьюз: История K-pop группы TWICE",
        "BLACKPINK: Light Up the Sky (Netflix)"
      ]
    },
    {
      title: "Книги",
      items: [
        "K-pop: Популярная музыка, медиаиндустрия и фан-культура",
        "The Birth of Korean Cool: Как один народ стал законодателем мировых трендов",
        "Корейская волна: Как феномен массовой культуры завоевал весь мир",
        "BTS и ARMY Культура: Руководство по самому популярному бойз-бенду в мире"
      ]
    },
    {
      title: "Онлайн-курсы",
      items: [
        "Введение в K-pop: История и феномен (Coursera)",
        "Корейская культура и современное общество (EdX)",
        "Музыкальный анализ K-pop композиций (Skillshare)",
        "Корейский язык для фанатов K-pop (Talk To Me In Korean)"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-korea-primary/10 to-korea-secondary/10 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair text-center text-korea-dark mb-4">
              Образовательные материалы
            </h1>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Изучайте корейскую музыкальную культуру и ее влияние на российское общество с помощью наших структурированных учебных материалов
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="course" className="mb-8">
            <div className="flex justify-center mb-6">
              <TabsList>
                <TabsTrigger value="course">Учебный курс</TabsTrigger>
                <TabsTrigger value="articles">Статьи</TabsTrigger>
                <TabsTrigger value="resources">Дополнительные ресурсы</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="course">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {lessonModules.map((module) => (
                  <Card key={module.id} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-korea-primary/10 flex items-center justify-center mb-4">
                        <span className="font-bold text-korea-primary">{module.id}</span>
                      </div>
                      <CardTitle className="font-playfair text-lg text-korea-dark">{module.title}</CardTitle>
                      <CardDescription>{module.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 mb-2">{module.lessons.length} уроков</p>
                      <ul className="space-y-2">
                        {module.lessons.slice(0, 2).map((lesson) => (
                          <li key={lesson.id} className="flex items-center text-sm">
                            <span className="h-2 w-2 rounded-full bg-korea-primary mr-2"></span>
                            <span className="text-gray-700">{lesson.title}</span>
                          </li>
                        ))}
                        {module.lessons.length > 2 && (
                          <li className="text-sm text-gray-500 italic">И ещё {module.lessons.length - 2} урока...</li>
                        )}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-korea-primary hover:bg-korea-secondary">
                        Начать изучение
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold font-playfair text-korea-dark mb-4">
                  Содержание курса
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {lessonModules.map((module) => (
                    <AccordionItem key={module.id} value={`module-${module.id}`}>
                      <AccordionTrigger className="hover:text-korea-primary">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-korea-primary/10 flex items-center justify-center mr-3">
                            <span className="font-bold text-sm text-korea-primary">{module.id}</span>
                          </div>
                          <span className="font-playfair">{module.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-11 space-y-4">
                          {module.lessons.map((lesson) => (
                            <div key={lesson.id} className="flex items-center justify-between border-b pb-3">
                              <div className="flex items-center">
                                <div className="mr-3">
                                  {lesson.type === 'video' && <Icon name="Video" className="text-korea-primary" />}
                                  {lesson.type === 'text' && <Icon name="FileText" className="text-korea-primary" />}
                                  {lesson.type === 'interactive' && <Icon name="MousePointer" className="text-korea-primary" />}
                                  {lesson.type === 'gallery' && <Icon name="Image" className="text-korea-primary" />}
                                  {lesson.type === 'audio' && <Icon name="Music" className="text-korea-primary" />}
                                </div>
                                <div>
                                  <div className="font-medium">{lesson.title}</div>
                                  <div className="text-xs text-gray-500">{lesson.duration}</div>
                                </div>
                              </div>
                              <Badge variant="outline" className="text-korea-primary border-korea-primary">
                                {lesson.type === 'video' && 'Видео'}
                                {lesson.type === 'text' && 'Текст'}
                                {lesson.type === 'interactive' && 'Интерактив'}
                                {lesson.type === 'gallery' && 'Галерея'}
                                {lesson.type === 'audio' && 'Аудио'}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-korea-primary/10 flex items-center justify-center">
                    <Icon name="Award" className="h-6 w-6 text-korea-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-playfair text-korea-dark">Сертификация</h3>
                    <p className="text-gray-600">Получите сертификат о прохождении курса</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  После успешного завершения всех модулей и прохождения итогового тестирования вы получите сертификат, подтверждающий ваши знания о корейской музыкальной культуре и ее влиянии на российское общество.
                </p>
                <div className="flex justify-end">
                  <Button className="bg-korea-primary hover:bg-korea-secondary">
                    Подробнее о сертификации
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="articles">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-white shadow-md">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-korea-primary">Исследование</Badge>
                      <Badge variant="outline">2023</Badge>
                    </div>
                    <CardTitle className="font-playfair text-xl text-korea-dark">
                      Корейская волна в России: особенности восприятия K-pop различными возрастными группами
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Статья представляет результаты социологического исследования, проведенного в 2022-2023 годах, которое анализирует особенности восприятия корейской поп-музыки различными возрастными группами российского общества.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Icon name="Clock" className="mr-1 h-4 w-4" />
                      <span className="mr-4">20 мин чтения</span>
                      <Icon name="Calendar" className="mr-1 h-4 w-4" />
                      <span>15 марта 2023</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-korea-primary hover:bg-korea-secondary">
                      Читать статью
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="bg-white shadow-md">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-korea-primary">Аналитика</Badge>
                      <Badge variant="outline">2023</Badge>
                    </div>
                    <CardTitle className="font-playfair text-xl text-korea-dark">
                      Влияние K-pop на формирование культурной идентичности российской молодежи
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Аналитическая статья рассматривает, как увлечение корейской поп-музыкой влияет на формирование культурной идентичности молодежи в России и какие изменения в ценностных ориентациях происходят под влиянием K-pop.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Icon name="Clock" className="mr-1 h-4 w-4" />
                      <span className="mr-4">25 мин чтения</span>
                      <Icon name="Calendar" className="mr-1 h-4 w-4" />
                      <span>5 мая 2023</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-korea-primary hover:bg-korea-secondary">
                      Читать статью
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="bg-white shadow-md">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-korea-primary">История</Badge>
                      <Badge variant="outline">2022</Badge>
                    </div>
                    <CardTitle className="font-playfair text-xl text-korea-dark">
                      Трансформация K-pop индустрии: от национального феномена до глобального явления
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Историческая статья прослеживает эволюцию K-pop от локального южнокорейского феномена до глобального культурного явления, оказывающего влияние на музыкальную индустрию и массовую культуру по всему миру.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Icon name="Clock" className="mr-1 h-4 w-4" />
                      <span className="mr-4">30 мин чтения</span>
                      <Icon name="Calendar" className="mr-1 h-4 w-4" />
                      <span>12 ноября 2022</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-korea-primary hover:bg-korea-secondary">
                      Читать статью
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="bg-white shadow-md">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-korea-primary">Интервью</Badge>
                      <Badge variant="outline">2023</Badge>
                    </div>
                    <CardTitle className="font-playfair text-xl text-korea-dark">
                      Российские K-pop фанаты: истории, мотивация и культурная идентичность
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Серия интервью с российскими фанатами K-pop разных возрастных групп, рассказывающих о своем опыте знакомства с корейской музыкой, участии в фан-культуре и влиянии K-pop на их повседневную жизнь.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Icon name="Clock" className="mr-1 h-4 w-4" />
                      <span className="mr-4">35 мин чтения</span>
                      <Icon name="Calendar" className="mr-1 h-4 w-4" />
                      <span>28 июля 2023</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-korea-primary hover:bg-korea-secondary">
                      Читать статью
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              
              <div className="flex justify-center">
                <Button variant="outline" className="border-korea-primary text-korea-primary hover:bg-korea-primary/10">
                  Показать больше статей
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="resources">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {recommendedResources.map((resource, index) => (
                  <Card key={index} className="bg-white shadow-md">
                    <CardHeader>
                      <CardTitle className="font-playfair text-xl text-korea-dark flex items-center">
                        {resource.title === "Документальные фильмы" && (
                          <Icon name="Film" className="mr-2 text-korea-primary" />
                        )}
                        {resource.title === "Книги" && (
                          <Icon name="BookOpen" className="mr-2 text-korea-primary" />
                        )}
                        {resource.title === "Онлайн-курсы" && (
                          <Icon name="Laptop" className="mr-2 text-korea-primary" />
                        )}
                        {resource.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {resource.items.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="h-2 w-2 rounded-full bg-korea-primary mt-2 mr-2 flex-shrink-0"></span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-korea-primary hover:bg-korea-secondary">
                        {resource.title === "Документальные фильмы" && "Смотреть"}
                        {resource.title === "Книги" && "Изучить"}
                        {resource.title === "Онлайн-курсы" && "Записаться"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold font-playfair text-korea-dark mb-4 flex items-center">
                  <Icon name="Download" className="mr-2 text-korea-primary" />
                  Скачиваемые материалы
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="bg-gray-50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Учебное пособие по K-pop культуре</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-2">
                        Комплексное учебное пособие для изучения корейской поп-музыки и ее влияния на глобальную и российскую культуру.
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Icon name="FileText" className="mr-1 h-4 w-4" />
                        <span className="mr-2">PDF, 5.2 MB</span>
                        <Icon name="Download" className="mr-1 h-4 w-4" />
                        <span>1245 загрузок</span>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button variant="outline" className="w-full border-korea-primary text-korea-primary hover:bg-korea-primary/10">
                        Скачать
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card className="bg-gray-50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Инфографика: История K-pop в России</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-2">
                        Визуальное представление истории распространения корейской поп-музыки в России с 1990-х годов до наших дней.
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Icon name="Image" className="mr-1 h-4 w-4" />
                        <span className="mr-2">PNG, 3.8 MB</span>
                        <Icon name="Download" className="mr-1 h-4 w-4" />
                        <span>876 загрузок</span>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button variant="outline" className="w-full border-korea-primary text-korea-primary hover:bg-korea-primary/10">
                        Скачать
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card className="bg-gray-50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Словарь K-pop терминологии</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-2">
                        Подробный словарь терминов, используемых в K-pop индустрии и фан-сообществах, с переводом и пояснениями.
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Icon name="FileText" className="mr-1 h-4 w-4" />
                        <span className="mr-2">PDF, 1.7 MB</span>
                        <Icon name="Download" className="mr-1 h-4 w-4" />
                        <span>2156 загрузок</span>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button variant="outline" className="w-full border-korea-primary text-korea-primary hover:bg-korea-primary/10">
                        Скачать
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card className="bg-gray-50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Презентация: Влияние K-pop на молодежь</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-2">
                        Образовательная презентация о влиянии корейской поп-музыки на формирование ценностей и культурных предпочтений молодежи.
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Icon name="FilePresentation" className="mr-1 h-4 w-4" />
                        <span className="mr-2">PPTX, 8.3 MB</span>
                        <Icon name="Download" className="mr-1 h-4 w-4" />
                        <span>932 загрузки</span>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button variant="outline" className="w-full border-korea-primary text-korea-primary hover:bg-korea-primary/10">
                        Скачать
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Призыв к действию */}
          <div className="bg-gradient-to-r from-korea-primary to-korea-secondary rounded-lg shadow-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold font-playfair mb-4">
              Готовы углубить свои знания о K-pop и его влиянии?
            </h3>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              Зарегистрируйтесь на нашей платформе, чтобы получить доступ ко всем образовательным материалам и отслеживать свой прогресс
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-korea-primary hover:bg-gray-100">
                Создать учетную запись
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Education;
