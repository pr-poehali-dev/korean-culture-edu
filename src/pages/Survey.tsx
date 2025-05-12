
import { useState } from "react";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Icon from "@/components/ui/icon";
import { 
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie 
} from "recharts";

// Схема валидации формы опроса
const surveyFormSchema = z.object({
  age: z.string().min(1, { message: "Пожалуйста, выберите возрастную группу" }),
  gender: z.string().min(1, { message: "Пожалуйста, выберите пол" }),
  location: z.string().min(2, { message: "Пожалуйста, укажите город" }),
  kpopFamiliarity: z.string().min(1, { message: "Пожалуйста, выберите вариант" }),
  favoriteGenre: z.string().optional(),
  favoriteArtist: z.string().optional(),
  discoveryMethod: z.string().min(1, { message: "Пожалуйста, выберите вариант" }),
  engagementLevel: z.string().min(1, { message: "Пожалуйста, выберите вариант" }),
  culturalInterest: z.string().min(1, { message: "Пожалуйста, выберите вариант" }),
  impact: z.string().optional(),
});

// Тип данных формы
type SurveyFormValues = z.infer<typeof surveyFormSchema>;

// Данные для графиков
const ageDistributionData = [
  { name: '13-17 лет', value: 35 },
  { name: '18-24 лет', value: 42 },
  { name: '25-34 лет', value: 18 },
  { name: '35-44 лет', value: 4 },
  { name: '45+ лет', value: 1 },
];

const discoveryMethodData = [
  { name: 'Социальные сети', value: 45 },
  { name: 'Друзья/знакомые', value: 25 },
  { name: 'YouTube', value: 20 },
  { name: 'Телевидение', value: 5 },
  { name: 'Другое', value: 5 },
];

const engagementLevelData = [
  { name: 'Слушаю музыку', value: 80 },
  { name: 'Смотрю видео', value: 70 },
  { name: 'Покупаю мерч', value: 30 },
  { name: 'Участвую в мероприятиях', value: 25 },
  { name: 'Изучаю корейский', value: 20 },
  { name: 'Создаю контент', value: 15 },
];

const popularArtistsData = [
  { name: 'BTS', value: 48 },
  { name: 'BLACKPINK', value: 32 },
  { name: 'EXO', value: 24 },
  { name: 'TWICE', value: 18 },
  { name: 'Stray Kids', value: 15 },
  { name: 'Другие', value: 13 },
];

// Массив цветов для графиков
const COLORS = ['#9b87f5', '#E5DEFF', '#F0EBFF', '#D6BCFA', '#7E69AB', '#6E59A5'];

const Survey = () => {
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'survey' | 'results'>('survey');

  const form = useForm<SurveyFormValues>({
    resolver: zodResolver(surveyFormSchema),
    defaultValues: {
      age: "",
      gender: "",
      location: "",
      kpopFamiliarity: "",
      favoriteGenre: "",
      favoriteArtist: "",
      discoveryMethod: "",
      engagementLevel: "",
      culturalInterest: "",
      impact: "",
    },
  });

  const onSubmit = (values: SurveyFormValues) => {
    console.log(values);
    setSubmitted(true);
    setActiveTab('results');
    // В реальном приложении здесь был бы запрос к API для сохранения данных
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-korea-primary/10 to-korea-secondary/10 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair text-center text-korea-dark mb-4">
              Исследование влияния K-pop
            </h1>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Пройдите опрос о восприятии корейской музыкальной культуры и ознакомьтесь с результатами исследования
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              <Button
                variant={activeTab === 'survey' ? 'default' : 'outline'}
                className={`rounded-l-md ${activeTab === 'survey' ? 'bg-korea-primary hover:bg-korea-secondary' : ''}`}
                onClick={() => setActiveTab('survey')}
              >
                <Icon name="ClipboardList" className="mr-2 h-4 w-4" />
                Пройти опрос
              </Button>
              <Button
                variant={activeTab === 'results' ? 'default' : 'outline'}
                className={`rounded-r-md ${activeTab === 'results' ? 'bg-korea-primary hover:bg-korea-secondary' : ''}`}
                onClick={() => setActiveTab('results')}
              >
                <Icon name="BarChart" className="mr-2 h-4 w-4" />
                Результаты исследования
              </Button>
            </div>
          </div>

          {activeTab === 'survey' && (
            <Card className="bg-white shadow-md mb-8">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-korea-dark">
                  Опрос о восприятии K-pop в России
                </CardTitle>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center p-8">
                    <Icon name="CheckCircle" className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold font-playfair mb-2">Спасибо за участие!</h3>
                    <p className="text-gray-600 mb-4">
                      Ваш ответ был записан. Вы можете ознакомиться с результатами исследования, нажав на кнопку ниже.
                    </p>
                    <Button 
                      className="bg-korea-primary hover:bg-korea-secondary"
                      onClick={() => setActiveTab('results')}
                    >
                      Посмотреть результаты
                    </Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Демографические данные */}
                        <FormField
                          control={form.control}
                          name="age"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Возрастная группа</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Выберите возрастную группу" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="13-17">13-17 лет</SelectItem>
                                  <SelectItem value="18-24">18-24 лет</SelectItem>
                                  <SelectItem value="25-34">25-34 лет</SelectItem>
                                  <SelectItem value="35-44">35-44 лет</SelectItem>
                                  <SelectItem value="45+">45+ лет</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="gender"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Пол</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Выберите пол" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="male">Мужской</SelectItem>
                                  <SelectItem value="female">Женский</SelectItem>
                                  <SelectItem value="other">Другой</SelectItem>
                                  <SelectItem value="prefer_not_to_say">Предпочитаю не отвечать</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="location"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Город</FormLabel>
                              <FormControl>
                                <Input placeholder="Укажите город" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* Опыт с K-pop */}
                        <FormField
                          control={form.control}
                          name="kpopFamiliarity"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Насколько вы знакомы с K-pop?</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Выберите вариант" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="not_familiar">Не знаком(а)</SelectItem>
                                  <SelectItem value="slightly_familiar">Слышал(а), но не увлекаюсь</SelectItem>
                                  <SelectItem value="moderately_familiar">Периодически слушаю</SelectItem>
                                  <SelectItem value="very_familiar">Активно слушаю и слежу за новостями</SelectItem>
                                  <SelectItem value="extremely_familiar">Являюсь фанатом/фанаткой</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="favoriteGenre"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Какие жанры корейской музыки вам нравятся? (необязательно)</FormLabel>
                              <FormControl>
                                <Input placeholder="Например: K-pop, K-R&B, K-Hip-Hop" {...field} />
                              </FormControl>
                              <FormDescription>
                                Можно указать несколько жанров
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="favoriteArtist"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Любимые K-pop исполнители (необязательно)</FormLabel>
                              <FormControl>
                                <Input placeholder="Например: BTS, BLACKPINK, EXO" {...field} />
                              </FormControl>
                              <FormDescription>
                                Можно указать несколько исполнителей
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="discoveryMethod"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Как вы познакомились с K-pop?</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Выберите вариант" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="social_media">Через социальные сети</SelectItem>
                                  <SelectItem value="friends">Через друзей/знакомых</SelectItem>
                                  <SelectItem value="youtube">Через YouTube</SelectItem>
                                  <SelectItem value="tv">Через телевидение</SelectItem>
                                  <SelectItem value="other">Другое</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Уровень вовлеченности */}
                      <FormField
                        control={form.control}
                        name="engagementLevel"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Уровень вашей вовлеченности в K-pop культуру</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="casual_listener" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Случайный слушатель (иногда слушаю K-pop)
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="regular_listener" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Регулярный слушатель (часто слушаю K-pop)
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="fan" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Фанат (следую за новостями, смотрю контент)
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="active_fan" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Активный фанат (покупаю альбомы/мерч, участвую в фан-активностях)
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="content_creator" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Создаю контент связанный с K-pop
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Влияние на культуру */}
                      <FormField
                        control={form.control}
                        name="culturalInterest"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Повлиял ли K-pop на ваш интерес к корейской культуре в целом?</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="not_at_all" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Никак не повлиял
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="slightly" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Незначительно повлиял
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="moderately" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Умеренно повлиял (интересуюсь и другими аспектами)
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="significantly" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Значительно повлиял (активно изучаю корейскую культуру)
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="very_significantly" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Очень значительно (изучаю язык, традиции, историю)
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="impact"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Как, по вашему мнению, K-pop влияет на российскую молодежную культуру? (необязательно)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Поделитесь своим мнением" 
                                className="resize-none" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        className="bg-korea-primary hover:bg-korea-secondary w-full md:w-auto"
                      >
                        Отправить ответы
                      </Button>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          )}

          {activeTab === 'results' && (
            <div className="space-y-8">
              <Card className="bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl text-korea-dark">
                    Результаты исследования
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    На основе опроса более 2000 респондентов из разных регионов России, мы провели анализ восприятия K-pop различными возрастными группами и его влияния на российскую культуру.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold font-playfair mb-4">Возрастное распределение K-pop фанатов</h3>
                      <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={ageDistributionData}
                              cx="50%"
                              cy="50%"
                              labelLine={true}
                              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="value"
                            >
                              {ageDistributionData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold font-playfair mb-4">Способы знакомства с K-pop</h3>
                      <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={discoveryMethodData}
                              cx="50%"
                              cy="50%"
                              labelLine={true}
                              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="value"
                            >
                              {discoveryMethodData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12">
                    <h3 className="text-xl font-semibold font-playfair mb-4">Уровень вовлеченности в K-pop культуру</h3>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={engagementLevelData}
                          layout="vertical"
                          margin={{
                            top: 20,
                            right: 30,
                            left: 100,
                            bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis type="number" />
                          <YAxis dataKey="name" type="category" />
                          <Tooltip />
                          <Bar dataKey="value" fill="#9b87f5" label={{ position: 'right' }}>
                            {engagementLevelData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  
                  <div className="mt-12">
                    <h3 className="text-xl font-semibold font-playfair mb-4">Самые популярные K-pop исполнители</h3>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={popularArtistsData}
                          margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="value" fill="#9b87f5">
                            {popularArtistsData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl text-korea-dark">
                    Ключевые выводы исследования
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-korea-primary/10 flex items-center justify-center">
                        <Icon name="Users" className="h-6 w-6 text-korea-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">Демографический профиль</h4>
                        <p className="text-gray-600">
                          Основной аудиторией K-pop в России являются молодые люди в возрасте 13-24 лет (около 77%), с преобладанием женской аудитории (82%). Наиболее активные фан-сообщества сосредоточены в Москве, Санкт-Петербурге, Екатеринбурге и Владивостоке.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-korea-primary/10 flex items-center justify-center">
                        <Icon name="TrendingUp" className="h-6 w-6 text-korea-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">Динамика популярности</h4>
                        <p className="text-gray-600">
                          С 2016 по 2023 год популярность K-pop в России выросла более чем в 5 раз, что подтверждается как увеличением числа поисковых запросов, так и ростом официальных продаж альбомов и мерчандайза. Ключевым переломным моментом стал мировой успех группы BTS в 2017-2018 годах.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-korea-primary/10 flex items-center justify-center">
                        <Icon name="Globe" className="h-6 w-6 text-korea-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">Культурное влияние</h4>
                        <p className="text-gray-600">
                          68% респондентов отметили, что интерес к K-pop привел к более глубокому изучению корейской культуры в целом, включая кухню, язык, историю и традиции. 45% начали изучать корейский язык благодаря увлечению корейской музыкой.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-korea-primary/10 flex items-center justify-center">
                        <Icon name="Layers" className="h-6 w-6 text-korea-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">Факторы привлекательности</h4>
                        <p className="text-gray-600">
                          Основными факторами привлекательности K-pop для российской аудитории являются: высокое качество визуального контента (72%), танцевальные навыки исполнителей (68%), качество музыкальных продакшн (63%), внешняя привлекательность артистов (59%) и концепция айдол-групп (54%).
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Survey;
