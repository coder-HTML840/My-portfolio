const horoscopes = [
  {
    title: 'aries',
    time: 'today',
    text: 'Сегодня Овнам стоит быть внимательными к своим решениям и действиям. Возможны неожиданные ситуации, требующие быстрой реакции. Помните о своих целях и не отклоняйтесь от них. Будьте готовы к переменам, но доверяйте своей интуиции. Удачи вам!',
  },
  {
    title: 'aries',
    time: 'tomorrow',
    text: 'Завтра для Овнов благоприятен день для начала новых проектов и инициатив. Будьте открыты к новым возможностям и не бойтесь выходить за пределы комфортной зоны. Ваши усилия будут вознаграждены, если вы будете настойчиво идти к своим целям. Помните о своей силе и уверенности, и ничто не сможет помешать вам. Удачи вам!',
  },
  {
    title: 'aries',
    time: 'after tomorrow',
    text: 'Послезавтра для Овнов будет благоприятным временем для саморазвития и духовного роста. Вы почувствуете внутреннюю гармонию и умиротворение, что поможет вам принимать верные решения. Будьте открыты к новым знаниям и опыту, и вы обнаружите, что мир вокруг вас начнет открываться с новой стороны. Ваша интуиция будет направлять вас к правильному пути, доверьтесь ей. Поддерживайте позитивный настрой и верьте в себя – успех не за горами.',
  },
  {
    title: 'aries',
    time: 'week',
    text: 'На этой неделе Овнам стоит быть готовыми к новым возможностям и вызовам, которые могут появиться на их пути. Ваша энергия будет высока, и вы будете готовы действовать решительно в любой ситуации. Однако будьте осторожны и не торопитесь с принятием важных решений – лучше взвесьте все за и против и действуйте осознанно. В личной жизни возможны неожиданные сюрпризы и приятные встречи, которые принесут радость и волнение. Будьте открыты к новым знакомствам и не упускайте возможность расширить свой круг общения. В работе следите за своими целями и не отвлекайтесь на мелочи – у вас есть все необходимое для достижения успеха. Берегите свое здоровье и не забывайте о регулярном отдыхе – это поможет вам сохранить баланс и гармонию.',
  },
  {
    title: 'aries',
    time: 'next week',
    text: 'На следующей неделе Овнам предстоит столкнуться с несколькими важными решениями и вызовами. Будьте готовы к переменам и новым возможностям, которые могут появиться на вашем пути. Ваша энергия будет высока, и вы сможете справиться с любыми задачами, которые возникнут. Однако будьте осторожны и не давайте эмоциям взять верх над разумом. Помните о важности планирования и анализа, прежде чем принимать решения. В личной жизни возможны неожиданные события, которые могут повлиять на ваши отношения. Будьте открыты к общению и готовы к изменениям. В работе уделите внимание своим профессиональным целям и стремлениям. Используйте свои навыки и таланты на полную мощность, чтобы достичь успеха. Берегите свое здоровье и не забывайте об отдыхе.',
  },
  {
    title: 'aries',
    time: 'month',
    text: 'В этом месяце для Овнов наступает период перемен и возможностей. Вы будете ощущать прилив энергии и мотивации, что поможет вам реализовать свои цели и задуманные планы. Будьте открыты для новых идей и не бойтесь выходить за пределы привычного. Этот месяц будет благоприятным для саморазвития и личностного роста. Возможно, вы найдете новые способы улучшить свои навыки или расширить свой кругозор. В личной жизни возможны яркие и романтические моменты, которые принесут радость и удовлетворение. Будьте внимательны к своим близким и проявляйте заботу. В работе уделите внимание своим проектам и обязанностям, старайтесь быть организованными и целеустремленными. Возможно, вы получите предложение о новой работе или повышении. Главное - оставайтесь уверенными в себе и не бойтесь идти к своим целям.',
  },
  {
    title: 'aries',
    time: 'next month',
    text: 'В следующем месяце для Овнов начнется период активных изменений. Вы будете испытывать прилив энергии и вдохновения, помогающие воплотить амбициозные планы. Готовьтесь к неожиданным поворотам событий и новым возможностям. Это благоприятный период для начала проектов, принятия решений и углубления отношений. Покажите инициативу и решимость в работе, оставаясь оптимистичными и уверенными в себе.',
  },
  {
    title: 'aries',
    time: 'year',
    text: 'В этом году для Овнов будет много возможностей и вызовов. Вы будете стремиться к новым достижениям и экспериментам. Ожидайте увеличения энергии и страсти к жизни, что поможет вам преодолеть препятствия. Будьте готовы к переменам и оставайтесь открытыми для новых идей и возможностей. Важно следовать своим целям, но помните о балансе и саморазвитии.',
  },
  {
    title: 'aries',
    time: 'next year',
    text: 'В следующем году для Овнов откроются новые горизонты. Вы будете испытывать сильное внутреннее преображение и рост. Будьте готовы к неожиданным поворотам событий, которые могут привести к новым возможностям и вызовам. Важно сохранять оптимизм и уверенность в своих силах, так как это поможет вам преодолеть любые препятствия. Помните, что ваша решимость и настойчивость приведут к успеху во всех начинаниях.',
  },



  {
    title: 'leo',
    time: 'today',
    text: 'Ожидается, что Львы будут испытывать волнение и энтузиазм в своих делах. Ваши силы и энергия помогут вам достичь поставленных целей. Будьте уверены в себе и действуйте решительно, чтобы преодолеть любые препятствия. Важно сохранить баланс между работой и отдыхом, чтобы поддерживать свою эмоциональную и физическую выносливость.',
  },
  {
    title: 'leo',
    time: 'tomorrow',
    text: 'Необходимо быть готовым к новым возможностям и вызовам, которые могут возникнуть в ближайшем будущем. Важно сохранять баланс и спокойствие, чтобы эффективно решать любые задачи, которые могут возникнуть. Помните, что ваша сила и уверенность в себе помогут вам преодолеть любые трудности.',
  },
  {
    title: 'leo',
    time: 'after tomorrow',
    text: 'Это время, когда ваша целеустремленность и решительность принесут плоды. Будьте готовы к возможным изменениям и новым возможностям, которые могут подвергнуть вашу уверенность испытанию. Не бойтесь выходить за пределы зоны комфорта и принимать вызовы, которые появляются на вашем пути.',
  },
  {
    title: 'leo',
    time: 'week',
    text: 'Ваша неделя преисполнена энергии и решимости. Вам предстоит преодолеть некоторые испытания, но благодаря своей силе и целеустремленности вы справитесь с любыми вызовами. Ваши лидерские качества помогут вам вести других к успеху. Поддерживайте баланс между работой и отдыхом для сохранения гармонии.',
  },
  {
    title: 'leo',
    time: 'next week',
    text: 'Эта неделя будет для Львов периодом возможностей и новых начинаний. Ваши лидерские качества придадут уверенности в достижении поставленных целей. Будьте открыты для изменений и готовы к неожиданностям. Важно сохранять баланс между работой и отдыхом, чтобы поддерживать энергию и эмоциональное равновесие.',
  },
  {
    title: 'leo',
    time: 'month',
    text: 'Предстоящий месяц для Львов обещает быть периодом значительных изменений и возможностей. Раскройте свой потенциал, будьте готовы к новым вызовам и идите вперед с уверенностью. Ваши усилия будут вознаграждены, поэтому не бойтесь стремиться к своим целям и мечтам.',
  },
  {
    title: 'leo',
    time: 'next month',
    text: 'В следующем месяце для Львов наступит период значительного роста и развития. Будьте открыты новым возможностям и готовы к переменам. Ваши таланты и усилия принесут заслуженное признание и успех. Поддерживайте баланс между работой и личной жизнью, чтобы сохранить гармонию и благополучие.',
  },
  {
    title: 'leo',
    time: 'year',
    text: 'В этом году Львы будут на пике своего творческого потенциала и энергии. Они смогут преодолеть любые препятствия, достигнуть поставленных целей и раскрыть свой истинный потенциал. Уверенность и решительность помогут преодолеть любые трудности и достичь великих высот.',
  },
  {
    title: 'leo',
    time: 'next year',
    text: 'Львы, в следующем году ожидает период роста и саморазвития. Вам предстоит преодолеть некоторые вызовы, но благодаря вашей целеустремленности и решимости, вы сможете достичь успеха во всех начинаниях. Важно держать глаза на цели и действовать на основе интуиции.',
  },



  {
    title: 'sagittarius',
    time: 'today',
    text: 'Сегодня для Стрельцов наступает день возможностей и новых начинаний. Будьте открыты для перемен и следуйте своим интуициям. Ваш оптимизм и уверенность помогут вам преодолеть любые препятствия и достичь успеха во всем, что вы предпримете.',
  },
  {
    title: 'sagittarius',
    time: 'tomorrow',
    text: 'Ваша энергия завтра будет на пике, что поможет вам справиться с любыми задачами и достичь своих целей. Будьте уверенными в себе и действуйте с решимостью, и успех не заставит себя долго ждать.',
  },
  {
    title: 'sagittarius',
    time: 'after tomorrow',
    text: 'Ждут вас неожиданные возможности, которые могут принести значительные изменения в вашу жизнь. Будьте готовы к переменам и не бойтесь выходить за пределы своей зоны комфорта. Ваше открытое отношение и готовность к приключениям помогут вам добиться успеха.',
  },
  {
    title: 'sagittarius',
    time: 'week',
    text: 'Раскройте свой талант креативно. Будьте открыты к новым идеям и готовы принять вызовы. Планируйте свои действия с умом и стремитесь к достижению своих целей. Взгляните на мир с оптимизмом и верой в свои силы, и успех обязательно будет на вашей стороне.',
  },
  {
    title: 'sagittarius',
    time: 'next week',
    text: 'Проявите решительность в достижении поставленных целей. Будьте готовы к неожиданностям и изменениям. Доверьтесь своей интуиции и следуйте за своим сердцем. Ваши таланты будут выходить на передний план, привлекая внимание окружающих. Важно сохранять баланс между работой и отдыхом.',
  },
  {
    title: 'sagittarius',
    time: 'month',
    text: 'В этом месяце у Стрельцов будет яркая возможность раскрыть свой творческий потенциал и проявить свои лучшие качества. Будьте открыты новым идеям и готовы к неожиданным поворотам. Взгляните на мир с оптимизмом и верой в свои силы, и успех не заставит себя долго ждать.',
  },
  {
    title: 'sagittarius',
    time: 'next month',
    text: 'Стрельцы, следующий месяц принесет вам возможности для проявления вашей силы и энергии. Будьте решительны в достижении своих целей и не бойтесь выходить за пределы зоны комфорта. Ваш оптимизм и уверенность помогут вам преодолеть любые препятствия и добиться успеха.',
  },
  {
    title: 'sagittarius',
    time: 'year',
    text: 'Стрельцам в этом году следует ожидать множество новых возможностей и вызовов. Будьте готовы к переменам и будьте открыты к их принятию. Ваша решительность и оптимизм будут вашими главными союзниками в достижении целей. Доверьтесь своей интуиции и следуйте за своими мечтами с уверенностью.',
  },
  {
    title: 'sagittarius',
    time: 'next year',
    text: 'Стрельцам предстоит год перемен и новых возможностей. Будьте открыты к изменениям и готовы к приключениям. Ваши усилия будут вознаграждены, если вы будете настойчиво двигаться вперед, проявлять смелость и решительность. Доверьтесь своей интуиции и идите к своим целям с оптимизмом.',
  },



  {
    title: 'taurus',
    time: 'today',
    text: 'Планеты благоприятно расположены для Тельцов сегодня. Вам следует доверять своей интуиции и принимать решения на основе внутреннего чувства. Возможны приятные сюрпризы и неожиданные возможности. Будьте открыты новым идеям и готовы к переменам.',
  },
  {
    title: 'taurus',
    time: 'tomorrow',
    text: 'Не торопитесь сегодня, Тельцы. Остановитесь на мгновение и внимательно прислушайтесь к своим мыслям и чувствам. Возможно, вы найдете ответы на свои вопросы внутри себя. Будьте готовы к неожиданностям и изменениям в планах.',
  },
  {
    title: 'taurus',
    time: 'after tomorrow',
    text: 'Не упускайте возможности, Тельцы. Придерживайтесь своих целей и стремлений, даже если вокруг возникают препятствия. Важно сохранять спокойствие и уверенность в своих силах. Ваши усилия будут вознаграждены, если вы будете настойчивы и целеустремлены.',
  },
  {
    title: 'taurus',
    time: 'week',
    text: 'Ожидайте перспективные возможности на этой неделе, Тельцы. Ваши умения и таланты будут востребованы, поэтому не стесняйтесь брать на себя ответственность и идти вперед. Будьте готовы к новым вызовам и действуйте с уверенностью.',
  },
  {
    title: 'taurus',
    time: 'next week',
    text: 'Ожидайте возможных изменений и новых возможностей, Тельцы. Ваша настойчивость и целеустремленность помогут вам преодолеть любые препятствия. Будьте готовы к переменам и открыты к новым идеям.',
  },
  {
    title: 'taurus',
    time: 'month',
    text: 'В этом месяце Тельцы будут на пути к достижению своих целей. Возможны некоторые препятствия, но ваша настойчивость и упорство помогут вам преодолеть все трудности. Будьте готовы к переменам и действуйте с уверенностью. Ваша целеустремленность приведет вас к успеху.',
  },
  {
    title: 'taurus',
    time: 'next month',
    text: 'Тельцам следует быть настойчивыми и решительными в следующем месяце. Они могут столкнуться с вызовами, но уверенность и целеустремленность помогут им преодолеть любые препятствия. Важно держать свои цели на виду и двигаться к ним шаг за шагом, не отвлекаясь на мелочи.',
  },
  {
    title: 'taurus',
    time: 'year',
    text: 'Тельцам предстоит год творческих достижений и финансового роста. Стремитесь к саморазвитию и новым возможностям. Ваша стойкость и целеустремленность приведут к успеху в любых начинаниях. Важно доверять своим инстинктам и не бояться идти вперед, даже если путь кажется неясным.',
  },
  {
    title: 'taurus',
    time: 'next year',
    text: 'Предстоящий год обещает Тельцам процветание в деловой сфере и укрепление отношений. Будьте настойчивы в достижении своих целей и открыты к новым возможностям. Важно доверять своим способностям и слушать свое внутреннее ведомство. Вас ждут удача и стабильность во всех сферах жизни.',
  },



  {
    title: 'virgo',
    time: 'today',
    text: 'Ожидайте неожиданностей сегодня. Будьте гибкими и адаптируйтесь к переменам. Ваша интуиция будет вашим лучшим советником. Важно сохранять спокойствие и не терять оптимизма, даже если возникают трудности. Удача ждет тех, кто верит в себя и стремится к своим целям.',
  },
  {
    title: 'virgo',
    time: 'tomorrow',
    text: 'Будьте готовы к неожиданностям завтра. Планы могут измениться, но не паникуйте. Возможно, это будет шанс для новых возможностей. Сосредоточьтесь на своих целях и доверьтесь своей интуиции. Важно сохранять спокойствие и гибкость в любой ситуации.',
  },
  {
    title: 'virgo',
    time: 'after tomorrow',
    text: 'Ваша решительность будет ключом к успеху послезавтра. Будьте готовы к испытаниям и действуйте на основе своих ценностей. Ваша целеустремленность поможет вам преодолеть любые препятствия. Держите фокус на своих целях и доверьтесь своим способностям.',
  },
  {
    title: 'virgo',
    time: 'week',
    text: 'Будьте готовы к новым возможностям на этой неделе, Девы. Ваша энергия и настойчивость помогут вам преодолеть препятствия. Оставайтесь открытыми для новых идей и будьте готовы к переменам. Ваши усилия не останутся незамеченными, и вы сможете добиться значительных успехов.',
  },
  {
    title: 'virgo',
    time: 'next week',
    text: 'Раскройте свой потенциал, Девы. Следующая неделя будет благоприятным временем для роста и самоосознания. Используйте свои навыки и таланты на полную мощность. Будьте открыты к новым возможностям и стремитесь к самосовершенствованию. Ваши усилия принесут вам заслуженное вознаграждение.',
  },
  {
    title: 'virgo',
    time: 'month',
    text: 'В этом месяце для Дев будет нарастающая энергия успеха и достижений. Используйте свою целеустремленность и организационные способности для реализации задуманного. Будьте открыты новым возможностям и готовы к переменам. Ваша уверенность и настойчивость помогут вам преодолеть любые препятствия и добиться поставленных целей.',
  },
  {
    title: 'virgo',
    time: 'next month',
    text: 'Очередной месяц приносит Девам новые возможности и вызовы. Будьте готовы к переменам и не бойтесь выходить за пределы зоны комфорта. Ваши таланты и умения помогут вам преодолевать трудности и добиваться желаемого. Доверьтесь своей интуиции и действуйте решительно, чтобы достичь успеха.',
  },
  {
    title: 'virgo',
    time: 'year',
    text: 'Год будет периодом больших возможностей для Дев. Они смогут проявить свои таланты и достичь новых высот в карьере и личной жизни. Важно быть открытым к переменам и готовым к принятию вызовов. Доверьтесь своей интуиции и стремитесь к самореализации во всем.',
  },
  {
    title: 'virgo',
    time: 'next year',
    text: 'В следующем году Девам откроются новые возможности для саморазвития и достижения целей. Будьте готовы к переменам и не бойтесь рисковать. Ваше трудолюбие и настойчивость приведут к успеху в любой области жизни. Доверьтесь своим способностям и стремитесь к самосовершенствованию.',
  },



  {
    title: 'capricorn',
    time: 'today',
    text: 'Не упускайте возможности, которые сегодня представятся перед вами. Будьте решительными и целеустремленными в своих действиях. Ваше терпение и настойчивость принесут желаемый результат. Возможно, встреча с важным человеком приведет к перспективным переговорам или сделке.',
  },
  {
    title: 'capricorn',
    time: 'tomorrow',
    text: 'Освежите свой ум и поддержите свое тело здоровыми привычками. Завтра будет отличным временем для самоанализа и самоусовершенствования. Постарайтесь уделить время для занятий спортом или йогой. Будьте внимательны к своим мыслям и эмоциям, они могут подсказать вам правильное направление.',
  },
  {
    title: 'capricorn',
    time: 'after tomorrow',
    text: 'Вам предстоит принять важное решение. Перед тем как действовать, внимательно взвесьте все за и против. Доверьтесь своей интуиции и обдуманности. Не бойтесь просить совета у близких людей, иногда внешний взгляд может пролить свет на вашу ситуацию.',
  },
  {
    title: 'capricorn',
    time: 'week',
    text: 'Неделя будет полна возможностей для роста и развития. Важно сохранить баланс между работой и отдыхом, чтобы избежать излишнего стресса. Не забывайте выделять время для саморазвития и личного благополучия. Помните, что позитивный настрой и уверенность в себе помогут вам преодолеть любые трудности.',
  },
  {
    title: 'capricorn',
    time: 'next week',
    text: 'Неделя будет благоприятным временем для принятия новых вызовов и стремления к самосовершенствованию. Постарайтесь быть настойчивыми в достижении своих целей, но не забывайте об умеренности и здравом смысле. Важно оставаться целеустремленными и готовыми к изменениям.',
  },
  {
    title: 'capricorn',
    time: 'month',
    text: 'Фокусируйтесь на целях, разработайте план и следуйте ему на протяжении всего месяца. Будьте терпеливы и решительны в достижении своих амбициозных целей. Важно также уделять внимание своему здоровью и благополучию.',
  },
  {
    title: 'capricorn',
    time: 'next month',
    text: 'Поддерживайте баланс между работой и личной жизнью. Вложите усилия в саморазвитие и профессиональный рост, но не забывайте об отдыхе и релаксации. Общение с близкими поможет вам найти вдохновение и поддержку во всех начинаниях.',
  },
  {
    title: 'capricorn',
    time: 'year',
    text: 'Стремитесь к самосовершенствованию и укреплению своей внутренней силы. Будьте готовы к вызовам и преодолевайте препятствия с решимостью. Вкладывайте время и энергию в развитие личности и достижение целей. Старайтесь оставаться гибкими и открытыми к новым возможностям.',
  },
  {
    title: 'capricorn',
    time: 'next year',
    text: 'Поставьте перед собой амбициозные цели и стремитесь к их достижению с решимостью и упорством. Будьте готовы к переменам и новым возможностям, которые могут предстать на вашем пути. Доверяйте своим интуиции и следуйте своим мечтам с уверенностью.',
  },



  {
    title: 'gemini',
    time: 'today',
    text: 'Будьте открыты новым идеям и возможностям. Ваша коммуникабельность и интеллект помогут вам решать проблемы и достигать успеха во всем. Осознайте свои цели и стремитесь к их достижению с уверенностью. Поддерживайте баланс между работой и отдыхом для сохранения энергии и эмоционального благополучия.',
  },
  {
    title: 'gemini',
    time: 'tomorrow',
    text: 'Сегодняшний день будет благоприятен для общения и обмена идеями. Будьте открыты новым возможностям и не бойтесь высказывать свои мысли. Важно сохранять ясность в мыслях и избегать спешки при принятии решений. Помните о важности коммуникации и уважительного отношения к окружающим.',
  },
  {
    title: 'gemini',
    time: 'after tomorrow',
    text: 'Не теряйте фокус на важных целях. Будьте готовы к неожиданностям, но не позволяйте им отвлекать от основных задач. Оставайтесь гибкими и адаптируйтесь к изменениям, но не забывайте о своих приоритетах. Важно сохранять спокойствие и ясность мышления в любой ситуации.',
  },
  {
    title: 'gemini',
    time: 'week',
    text: 'Освежите свой взгляд на текущие обстоятельства. Общайтесь открыто, но осторожно, чтобы избежать недопонимания. Важно поддерживать баланс между работой и отдыхом. Не забывайте о саморазвитии и личном росте.',
  },
  {
    title: 'gemini',
    time: 'next week',
    text: 'Поддерживайте баланс между работой и личной жизнью. Будьте открыты к новым возможностям, но оценивайте риски. Общение с близкими принесет вам радость и поддержку. Важно сохранять оптимизм и уверенность в себе.',
  },
  {
    title: 'gemini',
    time: 'month',
    text: 'Фокусируйтесь на саморазвитии и обучении. Будьте гибкими и адаптивными к переменам. Не бойтесь исследовать новые возможности и экспериментировать. Старайтесь поддерживать баланс между работой и отдыхом для сохранения энергии и вдохновения.',
  },
  {
    title: 'gemini',
    time: 'next month',
    text: 'В следующем месяце будьте открыты для новых возможностей и идей. Поддерживайте коммуникацию и контакты с окружающими. Не бойтесь выходить за пределы своей зоны комфорта и экспериментировать. Будьте гибкими и адаптивными к изменениям, которые могут возникнуть.',
  },
  {
    title: 'gemini',
    time: 'year',
    text: 'Не теряйте связь с собой в суете. Оставайтесь гибкими и открытыми к переменам. Используйте свои коммуникативные способности для построения отношений. Важно также развивать свои знания и умения, готовясь к новым вызовам.',
  },
  {
    title: 'gemini',
    time: 'next year',
    text: 'В следующем году будьте гибкими и открытыми к новым возможностям. Углубляйтесь в изучение интересующих вас областей и не бойтесь рисковать. Старайтесь поддерживать хорошие отношения с окружающими и не забывайте выделить время для саморазвития и отдыха.',
  },



  {
    title: 'libra',
    time: 'today',
    text: 'Не теряйте баланс между работой и личной жизнью. Сегодня придайте приоритет отдыху и самопомощи. Обратите внимание на свои эмоции и потребности. Возможно, пригодится время для размышлений и планирования.',
  },
  {
    title: 'libra',
    time: 'tomorrow',
    text: 'Сфокусируйтесь на ваших целях завтра. Будьте гибкими в планах и готовы адаптироваться к изменениям. Важно поддерживать баланс между работой и личной жизнью. Не забывайте выделять время для отдыха и заботы о себе.',
  },
  {
    title: 'libra',
    time: 'after tomorrow',
    text: 'Послезавтра будьте готовы к неожиданностям, но не паникуйте. Оставайтесь гибкими и действуйте со спокойствием. При возникновении проблем найдите творческие решения и доверьтесь своей интуиции.',
  },
  {
    title: 'libra',
    time: 'week',
    text: 'Неделя будет временем возможностей и вызовов. Оставайтесь сбалансированными и открытыми новым идеям. Помните о своих целях, но будьте готовы к адаптации планов под изменяющиеся обстоятельства.',
  },
  {
    title: 'libra',
    time: 'next week',
    text: 'Эта неделя будет наполнена новыми возможностями и вызовами. Оставайтесь гибкими и открытыми для перемен. Доверьтесь своей интуиции и действуйте с уверенностью.',
  },
  {
    title: 'libra',
    time: 'month',
    text: 'Разнообразие и изменения будут определять этот месяц. Будьте открыты для новых возможностей и не бойтесь выходить за пределы комфортной зоны. Ваше творческое мышление и дипломатия помогут вам добиться успеха.',
  },
  {
    title: 'libra',
    time: 'next month',
    text: 'Обратите внимание на баланс в своей жизни. Постарайтесь уделить внимание как своей карьере, так и личной жизни. Не забывайте о себе и своих нуждах, но также будьте готовы поддерживать баланс в отношениях с окружающими.',
  },
  {
    title: 'libra',
    time: 'year',
    text: 'Сосредоточьтесь на гармонии и справедливости в своей жизни. Ищите баланс между своими различными обязанностями и стремлениями. Будьте открыты к сотрудничеству и компромиссам во всех сферах жизни. Развивайте свои отношения с окружающими и старайтесь быть более толерантными и дипломатичными.',
  },
  {
    title: 'libra',
    time: 'next year',
    text: 'Фокусируйтесь на саморазвитии и укреплении своего внутреннего мира. Поддерживайте гармонию в отношениях и стремитесь к достижению своих целей, сохраняя баланс между личной жизнью и карьерным ростом. Будьте готовы к переменам и оставайтесь открытыми новым возможностям.',
  },



  {
    title: 'aquarius',
    time: 'today',
    text: 'Не стоит слишком сосредотачиваться на деталях сегодня. Вместо этого, обратите внимание на общую картину и держите свои цели на горизонте. Будьте готовы к неожиданностям и примите перемену как часть процесса. Главное - сохранять спокойствие и оставаться гибкими в любой ситуации.',
  },
  {
    title: 'aquarius',
    time: 'tomorrow',
    text: 'Сфокусируйтесь на своей энергии и привлекайте позитивные вибрации. Будьте открыты к новым возможностям и не бойтесь экспериментировать. Ваша спонтанность может принести неожиданные, но приятные результаты. Помните, что ваша уверенность и оптимизм будут вашими сильными сторонами завтра.',
  },
  {
    title: 'aquarius',
    time: 'after tomorrow',
    text: 'Расширьте свой круг общения и открыто общайтесь с окружающими. Будьте готовы к неожиданным обстоятельствам и оставайтесь гибкими в своих планах. Важно сохранять спокойствие и доверие к себе, чтобы эффективно решать любые возникающие задачи.',
  },
  {
    title: 'aquarius',
    time: 'week',
    text: 'Оставайтесь открытыми новым идеям и возможностям на этой неделе. Будьте готовы к переменам и не бойтесь исследовать неизведанные области. Ваше интуитивное понимание поможет вам принимать правильные решения',
  },
  {
    title: 'aquarius',
    time: 'next week',
    text: 'Сосредоточьтесь на своих целях и не позволяйте сомнениям или отвлекающим факторам мешать вашему прогрессу. Будьте решительными и действуйте с уверенностью. Возможно, придется преодолеть некоторые препятствия, но вы сможете преуспеть, если будете настойчивыми.',
  },
  {
    title: 'aquarius',
    time: 'month',
    text: 'Поощряйте свою креативность и исследуйте новые возможности. Будьте открыты для перемен и готовы адаптироваться к переменам. Не бойтесь выходить за пределы зоны комфорта и следуйте своим страстям.',
  },
  {
    title: 'aquarius',
    time: 'next month',
    text: 'Не упускайте возможностей для саморазвития. Обратите внимание на свои цели и стремления, они могут измениться. Будьте открыты для новых знакомств и идей.',
  },
  {
    title: 'aquarius',
    time: 'year',
    text: 'Стремитесь к саморазвитию и новым знаниям. Оставайтесь открытыми для новых возможностей и не бойтесь экспериментировать. Важно поддерживать баланс между работой и личной жизнью.',
  },
  {
    title: 'aquarius',
    time: 'next year',
    text: 'Сфокусируйтесь на развитии личности и профессиональном росте. Будьте гибкими и адаптируйтесь к переменам. Вложите усилия в укрепление отношений с близкими.',
  },



  {
    title: 'cancer',
    time: 'today',
    text: 'Сегодня Ракам стоит обратить внимание на свои внутренние ощущения и интуицию. Возможно, вам придется столкнуться с неожиданными ситуациями, но не теряйте спокойствия. Доверьтесь своей интуиции и внутреннему голосу - они подскажут верное решение. Будьте гибкими и открытыми к изменениям, это поможет вам преодолеть любые трудности.',
  },
  {
    title: 'cancer',
    time: 'tomorrow',
    text: 'Ракам стоит быть более внимательными к окружающим людям и проявлять больше эмпатии. Возможно, вам придется решать конфликтные ситуации, поэтому старайтесь сохранять спокойствие и избегать конфликтов. Будьте готовы к неожиданным поворотам событий, но помните, что ваша сила - в вашей способности адаптироваться и решать проблемы с мудростью.',
  },
  {
    title: 'cancer',
    time: 'after tomorrow',
    text: 'Ракам сегодня стоит обратить особое внимание на свои цели и стремления. Не бойтесь выходить за пределы комфортной зоны и идти вперед к своим мечтам. Будьте настойчивыми и целеустремленными, несмотря на возможные препятствия. Важно сохранять оптимизм и веру в себя, это поможет вам достичь успеха во всем, что вы предпримете.',
  },
  {
    title: 'cancer',
    time: 'week',
    text: 'Неделя будет наполнена возможностями для саморазвития и достижения целей. Вам следует быть настойчивыми и целеустремленными, готовыми к преодолению препятствий. Важно также уделить внимание своему внутреннему миру и эмоциональному благополучию.',
  },
  {
    title: 'cancer',
    time: 'next week',
    text: 'Неделя принесет Ракам новые возможности и вызовы. Будьте гибкими и открытыми к переменам. Доверьтесь своей интуиции и стремитесь к гармонии в отношениях с окружающими.',
  },
  {
    title: 'cancer',
    time: 'month',
    text: 'Месяц будет благоприятным для самоанализа и внутреннего роста. Откройте для себя новые интересы и увлечения, которые могут привести к душевному удовлетворению. Важно также уделить внимание своим близким и поддерживать гармоничные отношения с ними.',
  },
  {
    title: 'cancer',
    time: 'next month',
    text: 'Предстоящий месяц станет периодом возможностей для профессионального роста. Будьте готовы к новым вызовам и не бойтесь выходить за пределы своей зоны комфорта. Важно также уделить внимание своему здоровью и эмоциональному благополучию.',
  },
  {
    title: 'cancer',
    time: 'year',
    text: 'Год будет благоприятным для самопознания и роста. Изучайте новые направления и развивайте свои таланты. Важно сохранять эмоциональную устойчивость и стремиться к гармонии в отношениях с окружающими.',
  },
  {
    title: 'cancer',
    time: 'next year',
    text: 'Год будет периодом изменений и возможностей для саморазвития. Будьте открытыми к новым идеям и готовыми к адаптации к переменам. Старайтесь строить отношения на основе взаимного уважения и поддержки.',
  },



  {
    title: 'scorpio',
    time: 'today',
    text: 'Сегодня скорпионам стоит доверять своей интуиции и не поддаваться влиянию сомнений. Будьте решительными в своих действиях и готовыми к переменам.',
  },
  {
    title: 'scorpio',
    time: 'tomorrow',
    text: 'Завтра скорпионам стоит быть более внимательными к своему окружению и доверять своей интуиции. Возможно, вам придется столкнуться с неожиданными ситуациями, поэтому будьте готовы к любым переменам.',
  },
  {
    title: 'scorpio',
    time: 'after tomorrow',
    text: 'Послезавтра скорпионам стоит проявить гибкость и терпение во взаимодействии с окружающими. Важно быть открытым к разным точкам зрения и готовым к компромиссам.',
  },
  {
    title: 'scorpio',
    time: 'week',
    text: 'Скорпионам предстоит неделя новых возможностей и вызовов. Будьте решительными и готовыми к переменам. Старайтесь сохранять баланс между работой и личной жизнью для гармонии и успеха.',
  },
  {
    title: 'scorpio',
    time: 'next week',
    text: 'На следующей неделе скорпионам стоит проявить гибкость и терпение во взаимодействии с окружающими. Будьте открыты к новым идеям и готовы к адаптации к переменам.',
  },
  {
    title: 'scorpio',
    time: 'month',
    text: 'Месяц будет периодом возможностей для личностного роста и развития. Используйте свои таланты и умения на полную мощность, не бойтесь выходить за пределы зоны комфорта.',
  },
  {
    title: 'scorpio',
    time: 'next month',
    text: 'Следующий месяц принесет скорпионам новые возможности и вызовы. Будьте готовы к переменам и открыты к новым идеям. Доверяйте своей интуиции и следуйте своим целям с решительностью.',
  },
  {
    title: 'scorpio',
    time: 'year',
    text: 'Год будет временем интенсивного роста и развития для скорпионов. Доверьтесь своей интуиции и стремитесь к достижению своих целей с упорством и решительностью. Будьте открыты к новым возможностям и готовы к переменам.',
  },
  {
    title: 'scorpio',
    time: 'next year',
    text: 'Год будет периодом перемен и возможностей для скорпионов. Откройтесь новым возможностям и стремитесь к личностному росту. Важно сохранять оптимизм и уверенность в себе, даже в сложных ситуациях.',
  },



  {
    title: 'pisces',
    time: 'today',
    text: 'Сегодня рыбам стоит обратить внимание на свои внутренние ощущения и следовать своей интуиции. Доверьтесь своей внутренней мудрости и стремитесь к гармонии в отношениях с окружающими.',
  },
  {
    title: 'pisces',
    time: 'tomorrow',
    text: 'Завтра рыбам стоит быть внимательными к своему окружению и доверять своей интуиции. Будьте готовы к неожиданным ситуациям и реагируйте с уверенностью и спокойствием.',
  },
  {
    title: 'pisces',
    time: 'after tomorrow',
    text: 'Послезавтра рыбам стоит проявлять гибкость и терпение во взаимодействии с окружающими. Важно сохранять спокойствие и доверять себе, даже в сложных ситуациях.',
  },
  {
    title: 'pisces',
    time: 'week',
    text: 'На этой неделе рыбам следует прислушиваться к своей интуиции и доверять своим внутренним ощущениям. Будьте готовы к неожиданным событиям и открыты к новым возможностям.',
  },
  {
    title: 'pisces',
    time: 'next week',
    text: 'В следующей неделе рыбам стоит быть более активными и настойчивыми в достижении своих целей. Положите больше усилий в работу и проявляйте инициативу в общении с окружающими.',
  },
  {
    title: 'pisces',
    time: 'month',
    text: 'Месяц будет периодом возможностей для рыб. Используйте свои таланты и ресурсы на полную мощность. Будьте открыты к новым возможностям и готовы к переменам.',
  },
  {
    title: 'pisces',
    time: 'next month',
    text: 'В следующем месяце рыбам стоит сосредоточиться на саморазвитии и поиске гармонии. Используйте время для изучения новых интересов и укрепления связей с близкими.',
  },
  {
    title: 'pisces',
    time: 'year',
    text: 'Год принесёт рыбам новые возможности и вызовы. Доверьтесь своей интуиции и стремитесь к гармонии в отношениях с окружающими. Будьте готовы к переменам и открыты к новым идеям.',
  },
  {
    title: 'pisces',
    time: 'next year',
    text: 'Год будет периодом роста и возможностей для рыб. Поверьте в себя и свои способности, идите к своим целям с решимостью. Будьте открыты к новым идеям и готовы к переменам.',
  },
]

module.exports = horoscopes;