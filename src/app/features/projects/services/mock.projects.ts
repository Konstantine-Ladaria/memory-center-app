import { Project } from '../../../core/models/project.model';

export const mockProjects: Project[] = [
  // 1. The NUPI IDP Project
  {
    id: 'proj-nupi-ivory-tower-2015',
    title: {
      en: 'Research Beyond the Academy: Teaching Politics and Communications for University Groups',
      ka: 'კვლევა აკადემიის მიღმა: პოლიტიკის და კომუნიკაციების სწავლება საუნივერსიტეტო ჯგუფებისთვის',
      ru: 'Исследования за пределами академии: преподавание политики и коммуникаций для университетских групп',
      az: 'Akademiyadan Kənarda Tədqiqat: Universitet Qrupları üçün Siyasət və Kommunikasiyaların Tədrisi',
      hy: 'Հետազոտություն ակադեմիայից դուրս. Քաղաքականության և հաղորդակցության դասավանդում համալսարանական խմբերի համար',
    },
    shortDescription: {
      en: 'A research project titled "Trapped in the past: suppressed voices of Georgian IDPs and the dilemma of social integration," examining symbolic and political obstacles.',
      ka: 'კვლევითი პროექტი „წარსულის ტყვეობაში: ქართველი დევნილების ჩახშული ხმები და სოციალური ინტეგრაციის დილემა“, რომელიც შეისწავლის სიმბოლურ და პოლიტიკურ დაბრკოლებებს.',
      ru: 'Исследовательский проект «В ловушке прошлого: подавленные голоса грузинских ВПЛ и дилемма социальной интеграции», изучающий символические и политические препятствия.',
      az: '"Keçmişin tələsində: Gürcüstan Məcburi Köçkünlərinin basdırılmış səsləri və sosial inteqrasiya dilemması" adlı tədqiqat layihəsi.',
      hy: '«Անցյալի թակարդում. Վրացի Տեղահանվածների ճնշված ձայները և սոցիալական ինտեգրման երկընտրանքը» հետազոտական նախագիծ:',
    },
    status: 'completed',
    startDate: '2015-06',
    endDate: '2016-06',
    funders: [
      {
        name: {
          en: 'Norwegian Ministry of Foreign Affairs',
          ka: 'ნორვეგიის საგარეო საქმეთა სამინისტრო',
          ru: 'Министерство иностранных дел Норвегии',
          az: 'Norveç Xarici İşlər Nazirliyi',
          hy: 'Նորվեգիայի արտաքին գործերի նախարարություն',
        },
      },
      {
        name: {
          en: 'Norwegian Institute of International Affairs (NUPI)',
          ka: 'ნორვეგიის საერთაშორისო ურთიერთობების ინსტიტუტი (NUPI)',
          ru: 'Норвежский институт международных отношений (NUPI)',
          az: 'Norveç Beynəlxalq Münasibətlər İnstitutu (NUPI)',
          hy: 'Նորվեգիայի միջազգային հարաբերությունների ինստիտուտ (NUPI)',
        },
        websiteUrl: 'https://www.nupi.no/',
      },
    ],
    results: [
      {
        title: {
          en: 'Scientific Article: Trapped in the past: memories of Georgian IDPs on the margins of society (Nationalities Papers)',
          ka: 'სამეცნიერო სტატია: Trapped in the past: memories of Georgian IDPs on the margins of society (Nationalities Papers)',
          ru: 'Научная статья: Trapped in the past: memories of Georgian IDPs on the margins of society (Nationalities Papers)',
          az: 'Elmi Məqalə: Trapped in the past: memories of Georgian IDPs on the margins of society (Nationalities Papers)',
          hy: 'Գիտական հոդված. Trapped in the past: memories of Georgian IDPs on the margins of society (Nationalities Papers)',
        },
        externalLink: 'https://doi.org/10.1080/00905992.2018.1506509',
      },
    ],
    principalInvestigatorId: 'malkhaz-toria',
    teamMemberIds: ['nino-pirtskhalava', 'elene-kekelia', 'konstantine-ladaria'],
    relatedPublicationIds: ['pub-toria-etal-2019-trapped-in-past'],
  },

  // 2. The Shota Rustaveli Foundation Project
  {
    id: 'proj-rustaveli-memory-sites-2018',
    title: {
      en: 'Georgian National Identity and "Sites of Memory": Dominant and Alternative Perspectives of Constructing the Past',
      ka: 'ქართული ნაციონალური იდენტობა და „მეხსიერების ადგილები“: წარსულის კონსტრუირების დომინანტური და ალტერნატიული პერსპექტივები',
      ru: 'Грузинская национальная идентичность и «места памяти»: Доминантные и альтернативные перспективы конструирования прошлого',
      az: 'Gürcüstan Milli Kimliyi və "Yaddaş Yerləri": Keçmişin Qurulmasının Dominant və Alternativ Perspektivləri',
      hy: 'Վրացական ազգային ինքնությունը և «հիշողության վայրերը»․ Անցյալի կառուցման գերիշխող և այլընտրանքային հեռանկարները',
    },
    shortDescription: {
      en: 'A comprehensive study of 10 researchers exploring how national identity is constructed and maintained through cultural memory, central vs. regional perceptions, and minority viewpoints.',
      ka: '10 მკვლევარისგან შემდგარი კომპლექსური პროექტი, რომელიც შეისწავლის ეროვნული იდენტობის კონსტრუირებას მეხსიერების ადგილების, ცენტრი-რეგიონისა და უმცირესობების აღქმების პერსპექტივიდან.',
      ru: 'Комплексное исследование 10 ученых, изучающих конструирование национальной идентичности через культурную память, восприятие центра и регионов, а также точки зрения меньшинств.',
      az: 'Milli kimliyin mədəni yaddaş, mərkəz və region qavrayışları və azlıqların nöqteyi-nəzərindən necə qurulduğunu araşdıran 10 tədqiqatçının hərtərəfli tədqiqatı.',
      hy: '10 հետազոտողների համապարփակ ուսումնասիրություն, որն ուսումնասիրում է, թե ինչպես է կառուցվում ազգային ինքնությունը մշակութային հիշողության, կենտրոնի և տարածաշրջանի ընկալումների և փոքրամասնությունների տեսակետների միջոցով:',
    },
    status: 'completed',
    startDate: '2018-01',
    endDate: '2021-01',
    funders: [
      {
        name: {
          en: 'Shota Rustaveli National Science Foundation of Georgia',
          ka: 'შოთა რუსთაველის საქართველოს ეროვნული სამეცნიერო ფონდი',
          ru: 'Национальный научный фонд Грузии имени Шота Руставели',
          az: 'Şota Rustaveli Gürcüstan Milli Elm Fondu',
          hy: 'Շոթա Ռուսթավելիի Վրաստանի ազգային գիտական հիմնադրամ',
        },
      },
    ],
    results: [
      {
        title: {
          en: 'Special Issue Publication: The Caucasus Survey',
          ka: 'სპეციალური გამოცემა: The Caucasus Survey',
          ru: 'Специальный выпуск: The Caucasus Survey',
          az: 'Xüsusi Buraxılış: The Caucasus Survey',
          hy: 'Հատուկ թողարկում. The Caucasus Survey',
        },
      },
    ],
    principalInvestigatorId: 'malkhaz-toria',
    coordinatorId: 'konstantine-ladaria', // Optional: Uncomment if added to the model
    teamMemberIds: [
      'stephen-jones',
      'bezhan-javakhia',
      'nino-pirtskhalava',
      'oliver-reisner',
      'elene-kekelia',
      'nino-chikovani',
    ],
    relatedPublicationIds: ['pub-araviashvili-ladaria-2021-constructing-sites'],
  },

  // 3. The ASCN Orthodox Church Project
  {
    id: 'proj-ascn-orthodox-church-2010',
    title: {
      en: 'The Role of the Orthodox Church in the Formation of Georgian National Identity',
      ka: 'მართლმადიდებელი ეკლესიის როლი ქართული ეროვნული იდენტობის ფორმირებაში',
      ru: 'Роль Православной церкви в формировании грузинской национальной идентичности',
      az: 'Gürcüstan Milli Kimliyinin Formalaşmasında Pravoslav Kilsəsinin Rolu',
      hy: 'Ուղղափառ եկեղեցու դերը վրացական ազգային ինքնության ձևավորման գործում',
    },
    shortDescription: {
      en: 'An in-depth sociological analysis utilizing interviews, case studies, and content analysis to understand the post-Soviet influence of the Georgian Orthodox Church.',
      ka: 'სიღრმისეული სოციოლოგიური ანალიზი, რომელიც იყენებს ინტერვიუებს, ქეისების შესწავლასა და შინაარსის ანალიზს საქართველოს მართლმადიდებელი ეკლესიის პოსტსაბჭოთა გავლენის გასაგებად.',
      ru: 'Глубокий социологический анализ с использованием интервью, тематических исследований и контент-анализа для понимания постсоветского влияния Грузинской православной церкви.',
      az: 'Gürcüstan Pravoslav Kilsəsinin postsovet təsirini anlamaq üçün müsahibələr, nümunəvi tədqiqatlar və məzmun təhlilindən istifadə edən dərin sosioloji analiz.',
      hy: 'Խորը սոցիոլոգիական վերլուծություն՝ օգտագործելով հարցազրույցներ, դեպքերի ուսումնասիրություններ և բովանդակության վերլուծություն՝ հասկանալու Վրաց ուղղափառ եկեղեցու հետխորհրդային ազդեցությունը:',
    },
    status: 'completed',
    startDate: '2010-01',
    endDate: '2013-12',
    funders: [
      {
        name: {
          en: 'Academic Swiss Caucasus Net (ASCN)',
          ka: 'შვეიცარიის აკადემიური ქსელი კავკასიაში (ASCN)',
          ru: 'Швейцарская академическая сеть на Кавказе (ASCN)',
          az: 'Qafqazda İsveçrə Akademik Şəbəkəsi (ASCN)',
          hy: 'Կովկասի շվեյցարական ակադեմիական ցանց (ASCN)',
        },
      },
    ],
    results: [
      {
        title: {
          en: 'Book/Report: The Role of Orthodox Church in Formation of Georgian National Identity (2013)',
          ka: 'წიგნი/ანგარიში: მართლმადიდებელი ეკლესიის როლი ქართული ეროვნული იდენტობის ფორმირებაში (2013)',
          ru: 'Книга/Отчет: Роль Православной церкви в формировании грузинской национальной идентичности (2013)',
          az: 'Kitab/Hesabat: Gürcüstan Milli Kimliyinin Formalaşmasında Pravoslav Kilsəsinin Rolu (2013)',
          hy: 'Գիրք/Զեկույց. Ուղղափառ եկեղեցու դերը վրացական ազգային ինքնության ձևավորման գործում (2013)',
        },
      },
    ],
    teamMemberIds: ['konstantine-ladaria'],
  },

  // 4. The Ongoing International Project (2023-2025)
  {
    id: 'proj-intl-hybrid-memory-2023',
    title: {
      en: 'International Research Project: Post-Soviet Cultural Trauma and Propaganda',
      ka: 'საერთაშორისო კვლევითი პროექტი: პოსტსაბჭოთა კულტურული ტრავმა და პროპაგანდა',
      ru: 'Международный исследовательский проект: Постсоветская культурная травма и пропаганда',
      az: 'Beynəlxalq Tədqiqat Layihəsi: Postsovet Mədəni Travması və Təbliğat',
      hy: 'Միջազգային հետազոտական ծրագիր. Հետխորհրդային մշակութային տրավմա և քարոզչություն',
    },
    shortDescription: {
      en: 'A collaborative international research initiative (Project #06-336) investigating modern hybrid warfare, propaganda, and the historical weaponization of memory.',
      ka: 'ერთობლივი საერთაშორისო კვლევითი ინიციატივა (პროექტი #06-336), რომელიც იკვლევს თანამედროვე ჰიბრიდულ ომს, პროპაგანდასა და მეხსიერების ისტორიულ იარაღად გამოყენებას.',
      ru: 'Совместная международная исследовательская инициатива (Проект № 06-336), исследующая современную гибридную войну, пропаганду и историческое использование памяти в качестве оружия.',
      az: 'Müasir hibrid müharibəsi, təbliğat və yaddaşın tarixi silaha çevrilməsini araşdıran birgə beynəlxalq tədqiqat təşəbbüsü (Layihə #06-336).',
      hy: 'Համատեղ միջազգային հետազոտական նախաձեռնություն (Ծրագիր #06-336), որն ուսումնասիրում է ժամանակակից հիբրիդային պատերազմը, քարոզչությունը և հիշողության պատմական զինումը:',
    },
    status: 'completed',
    startDate: '2023-01',
    endDate: '2025-12',
    teamMemberIds: ['konstantine-ladaria'],
    relatedPublicationIds: [
      'pub-ladaria-2024-making-stalin-georgian',
      'pub-ladaria-mevrishvili-2022-hybrid-war',
    ],
  },
];
