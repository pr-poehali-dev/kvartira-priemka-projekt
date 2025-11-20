import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

const Index = () => {

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="CheckCircle2" size={28} className="text-primary" />
            <span className="text-xl font-bold text-secondary">ПриёмкаПро</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm hover:text-primary transition-colors">Услуги</a>
            <a href="#process" className="text-sm hover:text-primary transition-colors">Процесс</a>
            <a href="#prices" className="text-sm hover:text-primary transition-colors">Цены</a>
            <a href="#defects" className="text-sm hover:text-primary transition-colors">База дефектов</a>
            <a href="#legal" className="text-sm hover:text-primary transition-colors">Правовая база</a>
            <a href="#reviews" className="text-sm hover:text-primary transition-colors">Отзывы</a>
          </div>
          <Button className="hidden md:inline-flex">
            Консультация
            <Icon name="ArrowRight" size={16} className="ml-2" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge variant="outline" className="w-fit">По закону РФ</Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Приёмка квартир и домов
              </h1>
              <p className="text-lg text-muted-foreground">
                Профессиональная экспертиза новостроек с юридическим сопровождением. 
                Защитим ваши права и найдём все дефекты до подписания акта.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base">
                  Заказать приёмку
                  <Icon name="Calendar" size={18} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-base">
                  <Icon name="Phone" size={18} className="mr-2" />
                  +7 (495) 123-45-67
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">1500+</div>
                  <div className="text-sm text-muted-foreground">Квартир принято</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Нашли дефекты</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">5 лет</div>
                  <div className="text-sm text-muted-foreground">На рынке</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl flex items-center justify-center">
                <Icon name="Home" size={180} className="text-primary/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Наши услуги</Badge>
            <h2 className="text-4xl font-bold mb-4">Что входит в приёмку</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Комплексная проверка всех конструктивных элементов и инженерных систем
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'Ruler', title: 'Геометрия помещений', desc: 'Проверка размеров, высоты потолков, ровности стен и полов' },
              { icon: 'Droplets', title: 'Инженерные системы', desc: 'Водоснабжение, канализация, отопление, вентиляция' },
              { icon: 'Zap', title: 'Электрика', desc: 'Розетки, выключатели, автоматы, разводка по квартире' },
              { icon: 'DoorOpen', title: 'Окна и двери', desc: 'Фурнитура, уплотнители, откосы, подоконники' },
              { icon: 'FileText', title: 'Документация', desc: 'Проверка соответствия документам и ДДУ' },
              { icon: 'Scale', title: 'Юридическая поддержка', desc: 'Составление претензий, сопровождение до устранения' },
            ].map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Как это работает</Badge>
            <h2 className="text-4xl font-bold mb-4">Процесс приёмки</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', icon: 'Phone', title: 'Заявка', desc: 'Звоните или оставляете заявку на сайте' },
              { step: '02', icon: 'Calendar', title: 'Запись', desc: 'Согласовываем удобное время осмотра' },
              { step: '03', icon: 'ClipboardCheck', title: 'Осмотр', desc: 'Проводим детальную инспекцию 3-5 часов' },
              { step: '04', icon: 'FileText', title: 'Отчёт', desc: 'Получаете акт с дефектами и рекомендациями' },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-bold text-primary/10 mb-4">{item.step}</div>
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <Icon name={item.icon} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
                {idx < 3 && (
                  <Icon name="ArrowRight" size={24} className="hidden md:block absolute top-8 -right-6 text-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 bg-white">Экономия</Badge>
            <h2 className="text-4xl font-bold mb-4">Выгода от приёмки по закону</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Профессиональная приёмка окупается многократно благодаря защите ваших прав
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Wallet" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-primary mb-2">до 500 000 ₽</CardTitle>
                <CardDescription className="text-base">Средняя экономия на устранении дефектов</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Застройщик устраняет дефекты за свой счёт до передачи квартиры. После подписания акта ремонт за ваш счёт.
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-primary mb-2">2-3 месяца</CardTitle>
                <CardDescription className="text-base">Экономия времени на ремонте</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Не нужно делать капремонт сразу после заселения. Въезжайте в готовую квартиру без скрытых дефектов.
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-primary mb-2">100%</CardTitle>
                <CardDescription className="text-base">Юридическая защита прав</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Документальная фиксация дефектов даёт право требовать устранения по закону ФЗ-214 в течение 5 лет.
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Icon name="XCircle" size={28} className="text-destructive" />
                    Без профессиональной приёмки
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Пропускаете скрытые дефекты',
                      'Застройщик откажет в устранении после подписания акта',
                      'Ремонт дефектов за свой счёт — 300-500 тыс. ₽',
                      'Потеря времени на судебные разбирательства',
                      'Невозможно доказать вину застройщика',
                      'Риск проблем с эксплуатацией квартиры'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <Icon name="X" size={18} className="text-destructive mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Icon name="CheckCircle2" size={28} className="text-primary" />
                    С профессиональной приёмкой
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Находим 98% всех дефектов',
                      'Застройщик устраняет всё до передачи квартиры',
                      'Экономия 300-500 тыс. ₽ на ремонте',
                      'Юридическое сопровождение включено',
                      'Документальная фиксация всех нарушений',
                      'Спокойствие и уверенность в качестве'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center pt-8 border-t">
                <p className="text-lg mb-4">
                  <span className="font-bold text-2xl text-primary">12 000 ₽</span> 
                  <span className="text-muted-foreground"> за приёмку экономят </span>
                  <span className="font-bold text-2xl text-primary">300-500 тыс. ₽</span>
                </p>
                <Button size="lg" className="text-base">
                  Заказать приёмку сейчас
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Частые вопросы</Badge>
            <h2 className="text-4xl font-bold mb-4">Ответы на популярные вопросы</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Всё, что нужно знать о приёмке квартиры
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left">
                <span className="font-semibold">Когда нужно заказывать приёмку квартиры?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Приёмку следует заказывать сразу после получения уведомления от застройщика о готовности квартиры, 
                но до подписания акта приёма-передачи. Это позволит зафиксировать все дефекты и обязать застройщика 
                устранить их до передачи квартиры вам.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left">
                <span className="font-semibold">Сколько времени занимает приёмка?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                В среднем приёмка однокомнатной квартиры занимает 3-4 часа, двухкомнатной — 4-5 часов, 
                трёхкомнатной — 5-6 часов. Время зависит от площади, количества помещений и сложности инженерных систем.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left">
                <span className="font-semibold">Что делать, если обнаружены дефекты?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Не подписывайте акт приёма-передачи! Составьте перечень недостатков в двух экземплярах, 
                один передайте застройщику под роспись. По закону застройщик обязан устранить все дефекты в разумный срок. 
                Мы поможем составить претензию и проконтролируем устранение.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left">
                <span className="font-semibold">Могу ли я отказаться от квартиры?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, по закону № 214-ФЗ вы можете отказаться от квартиры и расторгнуть ДДУ, если обнаружены 
                существенные недостатки, которые делают квартиру непригодной для проживания. К таким относятся: 
                критические нарушения несущих конструкций, отклонения от проектной документации более 5%, 
                отсутствие инженерных коммуникаций.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left">
                <span className="font-semibold">Входит ли в стоимость повторный осмотр?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                В тарифы «Стандарт» и «Премиум» входит один повторный осмотр после устранения дефектов застройщиком. 
                Это позволяет убедиться, что все недостатки исправлены качественно. Дополнительные повторные осмотры 
                оплачиваются отдельно.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left">
                <span className="font-semibold">Какие документы я получу после приёмки?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Вы получите подробный акт осмотра с описанием всех выявленных дефектов, фотофиксацией, 
                замерами и рекомендациями по устранению. При необходимости наши юристы подготовят официальную претензию 
                застройщику с требованием устранить недостатки.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left">
                <span className="font-semibold">Нужно ли мне присутствовать при приёмке?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Ваше присутствие желательно, но не обязательно. Мы можем провести приёмку по вашей доверенности. 
                Однако мы рекомендуем присутствовать, чтобы лично увидеть все выявленные проблемы и сразу задать 
                интересующие вопросы нашим специалистам.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-left">
                <span className="font-semibold">Что такое гарантийные обязательства застройщика?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                По закону застройщик несёт гарантийные обязательства в течение 5 лет с момента передачи квартиры. 
                Это значит, что если в течение этого срока вы обнаружите дефекты строительства, застройщик обязан 
                их устранить бесплатно. Важно зафиксировать дефекты документально и вовремя направить претензию.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Card className="mt-8 bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Icon name="HelpCircle" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Остались вопросы?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Свяжитесь с нами для бесплатной консультации. Мы ответим на все ваши вопросы и поможем определиться с тарифом.
                  </p>
                  <Button>
                    Получить консультацию
                    <Icon name="Phone" size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="prices" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Прозрачные цены</Badge>
            <h2 className="text-4xl font-bold mb-4">Стоимость услуг</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Базовая', price: '8 000', area: 'до 50 м²', features: ['Визуальный осмотр', 'Базовые измерения', 'Фотофиксация', 'Акт осмотра'] },
              { name: 'Стандарт', price: '12 000', area: 'до 80 м²', features: ['Всё из Базовой', 'Приборная диагностика', 'Проверка документов', 'Юрконсультация', 'Претензия застройщику'], popular: true },
              { name: 'Премиум', price: '18 000', area: 'до 120 м²', features: ['Всё из Стандарт', 'Расширенная экспертиза', 'Тепловизор', 'Полное юрсопровождение', 'Контроль устранения'] },
            ].map((plan, idx) => (
              <Card key={idx} className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary">Популярный</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.area}</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground"> ₽</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  <Button className="w-full mt-6" variant={plan.popular ? 'default' : 'outline'}>
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="defects" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">База знаний</Badge>
            <h2 className="text-4xl font-bold mb-4">Типичные дефекты и нарушения закона</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Самые распространённые проблемы при приёмке и как они нарушают законодательство РФ
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                title: 'Неровные стены и полы', 
                severity: 'Средняя', 
                desc: 'Отклонение от вертикали более 10 мм на 2 метра. Требует выравнивания.',
                law: 'СП 71.13330.2017: допустимое отклонение стен не более 5 мм на 2 метра'
              },
              { 
                title: 'Протечки окон', 
                severity: 'Высокая', 
                desc: 'Нарушение герметичности оконных конструкций. Может привести к плесени.',
                law: 'ГОСТ 30971-2012: окна должны обеспечивать полную герметичность в закрытом положении'
              },
              { 
                title: 'Трещины в стяжке', 
                severity: 'Высокая', 
                desc: 'Трещины в полу более 0.3 мм. Указывают на нарушение технологии заливки.',
                law: 'СП 29.13330.2011: трещины шириной более 0.3 мм недопустимы'
              },
              { 
                title: 'Отклонение площади', 
                severity: 'Критическая', 
                desc: 'Площадь квартиры меньше указанной в ДДУ более чем на 5%.',
                law: 'ФЗ-214: застройщик обязан передать объект с отклонением площади не более 5%'
              },
              { 
                title: 'Проблемы с электрикой', 
                severity: 'Критическая', 
                desc: 'Нерабочие розетки, неправильная разводка. Угроза безопасности.',
                law: 'ПУЭ 7-е издание: все электроустановки должны быть исправны и соответствовать нормам'
              },
              { 
                title: 'Плохая вентиляция', 
                severity: 'Высокая', 
                desc: 'Недостаточная тяга в вентканалах. Приводит к влажности и плесени.',
                law: 'СП 54.13330.2016: приток свежего воздуха не менее 3 м³/час на 1 м² площади'
              },
            ].map((defect, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{defect.title}</CardTitle>
                    <Badge variant={defect.severity === 'Критическая' ? 'destructive' : defect.severity === 'Высокая' ? 'default' : 'secondary'}>
                      {defect.severity}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">{defect.desc}</p>
                  <div className="flex items-start gap-2 pt-2 border-t">
                    <Icon name="Scale" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm text-primary/80">{defect.law}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="legal" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Правовая информация</Badge>
            <h2 className="text-4xl font-bold mb-4">Ваши права при приёмке</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Icon name="FileText" size={32} className="text-primary mb-4" />
                <CardTitle className="text-2xl">Федеральный закон № 214-ФЗ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Закон «Об участии в долевом строительстве» защищает права покупателей квартир в новостройках.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Право отказаться от подписания акта при наличии дефектов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Застройщик обязан устранить недостатки в разумный срок</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Возможность требовать уменьшения цены или возврата средств</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Icon name="Scale" size={32} className="text-primary mb-4" />
                <CardTitle className="text-2xl">Постановление № 1521</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Определяет минимальный перечень дефектов и сроки их устранения.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Критические недостатки — устранение до 45 дней</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Гарантийные обязательства застройщика — 5 лет</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Право на независимую экспертизу за счёт застройщика</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Отзывы клиентов</Badge>
            <h2 className="text-4xl font-bold mb-4">Что говорят наши клиенты</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Анна Смирнова', text: 'Огромное спасибо! Нашли 47 дефектов, о которых я бы никогда не догадалась. Застройщик всё устранил за 3 недели.', rating: 5 },
              { name: 'Дмитрий Иванов', text: 'Профессиональный подход, детальный отчёт. Юристы помогли составить претензию, застройщик быстро отреагировал.', rating: 5 },
              { name: 'Мария Петрова', text: 'Очень рада, что заказала приёмку. Обнаружили серьёзные проблемы с электрикой. Могло быть опасно!', rating: 5 },
            ].map((review, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">Готовы принять квартиру?</h2>
          <p className="text-lg mb-8 text-white/80">
            Запишитесь на профессиональную приёмку и защитите свои права
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-base">
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить сейчас
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent text-white border-white hover:bg-white/10">
              Оставить заявку
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-secondary/5 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="CheckCircle2" size={24} className="text-primary" />
                <span className="font-bold">ПриёмкаПро</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональная приёмка недвижимости с юридической поддержкой
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Приёмка квартир</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Приёмка домов</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Экспертиза</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Юрподдержка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Наши эксперты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Портфолио</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@priemkapro.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Примерная, 1
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 ПриёмкаПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;