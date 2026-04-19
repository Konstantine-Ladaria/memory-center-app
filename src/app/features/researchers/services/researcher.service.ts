import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Researcher } from '../../../core/models/researcher.model';

@Injectable({
  providedIn: 'root', // Makes it accessible feature-wide
})
export class ResearcherService {
  // Temporary Mock Data
  private mockResearchers: Researcher[] = [
    {
      id: 'malkhaz-toria',
      affiliation: 'member',

      firstName: {
        en: 'Malkhaz',
        ka: 'მალხაზ',
        ru: 'Малхаз',
        az: 'Malxaz',
        hy: 'Մալխազ',
      },

      lastName: {
        en: 'Toria',
        ka: 'თორია',
        ru: 'Тория',
        az: 'Toria',
        hy: 'Թորիա',
      },

      title: {
        en: 'Associate Professor of History',
        ka: 'ასოცირებული პროფესორი ისტორიის მიმართულებით',
        ru: 'Доцент кафедры истории',
        az: 'Tarix üzrə dosent',
        hy: 'Պատմության դոցենտ',
      },

      disciplines: [
        {
          en: 'History',
          ka: 'ისტორია',
          ru: 'История',
          az: 'Tarix',
          hy: 'Պատմություն',
        },
        {
          en: 'Memory Studies',
          ka: 'მეხსიერების კვლევები',
          ru: 'Исследования памяти',
          az: 'Yaddaş Tədqiqatları',
          hy: 'Հիշողության ուսումնասիրություններ',
        },
      ],

      bio: {
        en: `Malkhaz Toria is an Associate Professor of History and a member of the Institute of Comparative Literature at Ilia State University. Since 2015, he has directed the Memory Studies Center in the Caucasus at the Faculty of Arts and Sciences. He defended his PhD in 2009 at Tbilisi State University with a dissertation on time perception and the concept of history in medieval Georgian culture. He has been awarded numerous postdoctoral and research fellowships (DAAD, OSF, Fulbright, Rustaveli Foundation) allowing him to conduct research at institutions like Central European University, UC Berkeley, Columbia University, and Humboldt University. His primary research interests include historical thinking in medieval and modern Georgia, the politics of memory, instrumentalization of the past, conflicts in post-Soviet Georgia, and the memories of IDPs from Georgia's conflict regions.`,
        ka: `მალხაზ თორია არის ილიას სახელმწიფო უნივერსიტეტის ასოცირებული პროფესორი ისტორიის მიმართულებაზე და შედარებითი ლიტერატურის ინსტიტუტის წევრი. 2015 წლიდან იგი ხელმძღვანელობს მეცნიერებათა და ხელოვნების ფაკულტეტის მეხსიერების კვლევების კავკასიურ ცენტრს. 2009 წელს თბილისის სახელმწიფო უნივერსიტეტში დაიცვა სადოქტორო დისერტაცია თემაზე „დროის აღქმა და ისტორიის კონცეფცია შუა საუკუნეების ქართულ კულტურაში“. რიგი საერთაშორისო სტიპენდიების ფარგლებში მუშაობდა ცენტრალური ევროპის უნივერსიტეტში, კოლუმბიის უნივერსიტეტში, ბერკლისა და ჰუმბოლდტის უნივერსიტეტებში. მისი სამეცნიერო ინტერესები მოიცავს შუა საუკუნეებისა და თანამედროვე საქართველოს ისტორიულ აზროვნებას, მეხსიერების პოლიტიკას, წარსულის ინსტრუმენტალიზაციას, კონფლიქტებს პოსტსაბჭოთა საქართველოში და დევნილების მეხსიერებებს.`,
        ru: `Малхаз Тория является доцентом кафедры истории и членом Института сравнительного литературоведения в Государственном университете Илии. С 2015 года он руководит Кавказским центром исследований памяти. В 2009 году в Тбилисском государственном университете защитил докторскую диссертацию на тему «Восприятие времени и концепция истории в средневековой грузинской культуре». В рамках различных исследовательских стипендий (DAAD, OSF, Fulbright, Фонд Руставели) работал в Центрально-Европейском университете, Колумбийском университете, Калифорнийском университете в Беркли и Гумбольдтском университете. Его научные интересы включают историческое мышление в средневековой и современной Грузии, политику памяти, инструментализацию прошлого, конфликты в постсоветской Грузии и память вынужденно перемещенных лиц.`,
        az: `Malxaz Toria İlya Dövlət Universitetinin Tarix üzrə dosenti və Müqayisəli Ədəbiyyat İnstitutunun üzvüdür. 2015-ci ildən İncəsənət və Elmlər Fakültəsində Qafqazda Yaddaş Tədqiqatları Mərkəzinə rəhbərlik edir. 2009-cu ildə Tbilisi Dövlət Universitetində orta əsrlər gürcü mədəniyyətində zaman qavrayışı və tarix konsepsiyası mövzusunda doktorluq dissertasiyasını müdafiə etmişdir. Çoxsaylı beynəlxalq təqaüdlər çərçivəsində (DAAD, OSF, Fulbright, Rustaveli Fondu) Mərkəzi Avropa Universiteti, Kolumbiya Universiteti, UC Berkeley və Humboldt Universiteti kimi qurumlarda tədqiqatlar aparmışdır. Əsas elmi maraqlarına orta əsrlər və müasir Gürcüstanda tarixi təfəkkür, yaddaş siyasəti, keçmişin alətləşdirilməsi, postsovet Gürcüstanındakı münaqişələr və məcburi köçkünlərin xatirələri daxildir.`,
        hy: `Մալխազ Թորիան Իլիայի պետական համալսարանի պատմության դոցենտ է և Համեմատական գրականության ինստիտուտի անդամ։ 2015 թվականից նա ղեկավարում է Կովկասի հիշողության ուսումնասիրությունների կենտրոնը արվեստի և գիտությունների ֆակուլտետում: 2009 թվականին Թբիլիսիի պետական համալսարանում պաշտպանել է դոկտորական ատենախոսություն միջնադարյան վրացական մշակույթում ժամանակի ընկալման և պատմության հայեցակարգի թեմայով: Բազմաթիվ միջազգային կրթաթոշակների շրջանակներում (DAAD, OSF, Fulbright, Ռուսթավելի հիմնադրամ) նա հետազոտություններ է անցկացրել Կենտրոնական Եվրոպայի համալսարանում, Կոլումբիայի համալսարանում, Բերքլիի և Հումբոլդտի համալսարաններում: Նրա գիտական հետաքրքրությունները ներառում են պատմական մտածողությունը միջնադարյան և ժամանակակից Վրաստանում, հիշողության քաղաքականությունը, անցյալի գործիքայնացումը, հակամարտությունները հետխորհրդային Վրաստանում և փախստականների հիշողությունները:`,
      },

      email: 'malkhaz.toria@iliauni.edu.ge',
      photoUrl:
        'https://netgazeti.ge/wp-content/uploads/2022/12/318092585_1299304337527529_5537320100524961365_n-1-1-e1670242302863.jpg',
      isFeatured: true,

      // --- External Profiles ---
      // facebookUrl: '',
      // researchGateUrl: '',
      // academiaUrl: '',

      // --- Relational Data ---
      publicationIds: [
        'pub-toria-etal-2019-trapped-in-past', // The one co-authored with you!
        'pub-toria-2015-remembering-homeland',
        'pub-toria-2014-soviet-occupation',
        'pub-toria-2013-suchumi',
      ],
    },
    {
      id: 'nino-pirtskhalava',
      affiliation: 'member',

      firstName: {
        en: 'Nino',
        ka: 'ნინო',
        ru: 'Нино',
        az: 'Nino',
        hy: 'Նինո',
      },

      lastName: {
        en: 'Pirtskhalava',
        ka: 'ფირცხალავა',
        ru: 'Пирцхалава',
        az: 'Pirtsxalava',
        hy: 'Փիրցխալավա',
      },

      title: {
        en: 'Professor of Comparative Literature',
        ka: 'პროფესორი შედარებითი ლიტერატურათმცოდნეობის მიმართულებით',
        ru: 'Профессор сравнительного литературоведения',
        az: 'Müqayisəli Ədəbiyyat Professoru',
        hy: 'Համեմատական գրականության պրոֆեսոր',
      },

      disciplines: [
        {
          en: 'Comparative Literature',
          ka: 'შედარებითი ლიტერატურათმცოდნეობა',
          ru: 'Сравнительное литературоведение',
          az: 'Müqayisəli ədəbiyyat',
          hy: 'Համեմատական գրականություն',
        },
        {
          en: 'Critical Theory',
          ka: 'კრიტიკული თეორია',
          ru: 'Критическая теория',
          az: 'Tənqidi nəzəriyyə',
          hy: 'Քննադատական տեսություն',
        },
        {
          en: 'Philosophy of History',
          ka: 'ისტორიის ფილოსოფია',
          ru: 'Философия истории',
          az: 'Tarix fəlsəfəsi',
          hy: 'Պատմության փիլիսոփայություն',
        },
        {
          en: 'History and Philosophy of Art',
          ka: 'ხელოვნების ისტორია და ფილოსოფია',
          ru: 'История и философия искусства',
          az: 'İncəsənət tarixi və fəlsəfəsi',
          hy: 'Արվեստի պատմություն և փիլիսոփայություն',
        },
        {
          en: 'Cultural Studies',
          ka: 'კულტურის კვლევები',
          ru: 'Культурология',
          az: 'Kulturologiya',
          hy: 'Մշակութաբանություն',
        },
      ],

      bio: {
        en: `Nino Pirtskhalava graduated from the Faculty of Literature and Art Studies at Friedrich Schiller University Jena in 1980. In 1984, she defended her candidate dissertation on the reception of antiquity in modern Western European drama, and in 1994 completed her doctoral dissertation on the model of the world and culture in Thomas Mann's works. Her extensive academic career includes teaching German-language literature at the Austrian Embassy's Cultural Institute in Iran, serving as a professor at Tbilisi State University, acting as Rector of Ilia Chavchavadze State University of Language and Culture (2005-2006), and serving as Dean of the Faculty of Foreign Languages and Philology at Ilia State University (2006-2010). Since 2010, she has been a Professor at the Faculty of Arts and Sciences at Ilia State University.`,
        ka: `ნინო ფირცხალავამ 1980 წელს დაამთავრა იენის ფრიდრიხ შილერის სახელობის ლიტერატურისა და ხელოვნებათმცოდნეობის ფაკულტეტი. 1984 წელს დაიცვა საკანდიდატო დისერტაცია, ხოლო 1994 წელს სადოქტორო დისერტაცია თომას მანის შემოქმედებაში სამყაროსა და კულტურის მოდელის შესახებ. 2005-2006 წლებში იყო ილია ჭავჭავაძის სახელობის ენისა და კულტურის თბილისის სახელმწიფო უნივერსიტეტის რექტორის მოვალეობის შემსრულებელი. 2006-2010 წლებში იყო ილიას სახელმწიფო უნივერსიტეტის უცხო ენათა ფილოლოგიის ფაკულტეტის დეკანი. 2010 წლიდან არის ილიას სახელმწიფო უნივერსიტეტის მეცნიერებათა და ხელოვნების ფაკულტეტის პროფესორი.`,
        ru: `Нино Пирцхалава окончила факультет литературы и искусствоведения Йенского университета имени Фридриха Шиллера в 1980 году. В 1984 году защитила кандидатскую диссертацию, а в 1994 году — докторскую диссертацию о модели мира и культуры в творчестве Томаса Манна. В 2005-2006 годах исполняла обязанности ректора Тбилисского государственного университета языка и культуры имени Илии Чавчавадзе. В 2006-2010 годах была деканом факультета филологии иностранных языков Государственного университета Илии. С 2010 года является профессором факультета искусств и наук Государственного университета Илии.`,
        az: `Nino Pirtsxalava 1980-ci ildə Yena Fridrix Şiller Universitetinin Ədəbiyyat və İncəsənət Tədqiqatları fakültəsini bitirib. 1984-cü ildə namizədlik dissertasiyasını, 1994-cü ildə isə Tomas Mannın əsərlərində dünya və mədəniyyət modeli mövzusunda doktorluq dissertasiyasını müdafiə edib. 2005-2006-cı illərdə İlya Çavçavadze adına Tbilisi Dövlət Dil və Mədəniyyət Universitetinin rektoru əvəzi vəzifəsində çalışıb. 2006-2010-cu illərdə İlya Dövlət Universitetinin Xarici dillər və filologiya fakültəsinin dekanı olub. 2010-cu ildən İlya Dövlət Universitetinin İncəsənət və Elmlər fakültəsinin professorudur.`,
        hy: `Նինո Փիրցխալավան 1980 թվականին ավարտել է Ենայի Ֆրիդրիխ Շիլլերի համալսարանի գրականության և արվեստագիտության ֆակուլտետը: 1984 թվականին պաշտպանել է թեկնածուական ատենախոսություն, իսկ 1994 թվականին՝ դոկտորական ատենախոսություն Թոմաս Մանի ստեղծագործություններում աշխարհի և մշակույթի մոդելի վերաբերյալ: 2005-2006 թվականներին եղել է Իլիա Ճավճաւաձեի անվան լեզվի և մշակույթի Թբիլիսիի պետական համալսարանի ռեկտորի պաշտոնակատար: 2006-2010 թվականներին եղել է Իլիայի պետական համալսարանի օտար լեզուների և բանասիրության ֆակուլտետի դեկան։ 2010 թվականից Իլիայի պետական համալսարանի արվեստի և գիտությունների ֆակուլտետի պրոֆեսոր է:`,
      },

      email: 'nino_pirtskhalava@iliauni.edu.ge',
      photoUrl: 'https://i.ytimg.com/vi/aHmqZlbu7VA/maxresdefault.jpg',
      isFeatured: false,

      // --- External Profiles ---
      // facebookUrl: '',
      // researchGateUrl: '',
      // academiaUrl: '',

      // --- Relational Data ---
      publicationIds: [
        'pub-pirtskhalava-2020-magic-mountain-guide',
        'pub-pirtskhalava-2019-trapped-in-past',
        'pub-pirtskhalava-2018-jewish-identity-georgia',
        'pub-pirtskhalava-2012-kafka-prometheus',
      ], // Missing comma was here
    },
    {
      id: 'oliver-reisner',
      affiliation: 'member',

      firstName: {
        en: 'Oliver',
        ka: 'ოლივერ',
        ru: 'Оливер',
        az: 'Oliver',
        hy: 'Օլիվեր',
      },

      lastName: {
        en: 'Reisner',
        ka: 'რაისნერი',
        ru: 'Райснер',
        az: 'Reisner',
        hy: 'Ռայսներ',
      },

      title: {
        en: 'Jean Monnet Professor of European and Caucasian Studies',
        ka: 'ჟან მონეს პროფესორი ევროპულ და კავკასიურ კვლევებში',
        ru: 'Профессор Жана Моне в области европейских и кавказских исследований',
        az: 'Avropa və Qafqaz Tədqiqatları üzrə Jan Mone Professoru',
        hy: 'Եվրոպական և կովկասյան ուսումնասիրությունների Ժան Մոնեի պրոֆեսոր',
      },

      disciplines: [
        {
          en: 'Caucasian Studies',
          ka: 'კავკასიის კვლევები',
          ru: 'Кавказоведение',
          az: 'Qafqazşünaslıq',
          hy: 'Կովկասագիտություն',
        },
        {
          en: 'European Studies',
          ka: 'ევროპისმცოდნეობა',
          ru: 'Европеистика',
          az: 'Avropaşünaslıq',
          hy: 'Եվրոպագիտություն',
        },
        {
          en: 'Eastern European History',
          ka: 'აღმოსავლეთ ევროპის ისტორია',
          ru: 'История Восточной Европы',
          az: 'Şərqi Avropa Tarixi',
          hy: 'Արևելյան Եվրոպայի պատմություն',
        },
        {
          en: 'Memory Studies',
          ka: 'მეხსიერების კვლევები',
          ru: 'Исследования памяти',
          az: 'Yaddaş Tədqiqatları',
          hy: 'Հիշողության ուսումնասիրություններ',
        },
      ],

      bio: {
        en: `Since September 2016, Oliver Reisner has been a Jean Monnet Professor of European and Caucasian Studies at Ilia State University, where he teaches Bachelor's, Master's, and Doctoral students. He received his PhD in 2000 from the University of Göttingen (Germany) in Eastern European History, Slavic Studies, and Medieval and Modern History. From 2005 to 2015, he worked as a project manager at the EU Delegation to Georgia, focusing on democratization, minority, education, youth, and social issues. His primary research interests include nation-building and identity in the 19th/20th century Caucasus, memory studies of the Soviet past, the history of Caucasian studies as a regional science, and the role of religion in Georgia.`,
        ka: `2016 წლის სექტემბრიდან ოლივერ რაისნერი ილიას სახელმწიფო უნივერსიტეტში ჟან მონეს პროგრამის ევროპის კვლევებისა და კავკასიის კვლევების პროფესორია. იგი ევროპის კვლევებისა და კავკასიის კვლევების მიმართულების ბაკალავრიატის, მაგისტრატურისა და დოქტორანტურის სტუდენტებს ასწავლის. 2000 წელს მიიღო გოტინგენის გეორგ-აუგუსტუსის უნივერსიტეტის (გერმანია) ფილოსოფიის დოქტორის ხარისხი აღმოსავლეთ ევროპის ისტორიაში, სლავისტიკასა და შუა საუკუნეებისა და თანამედროვე ისტორიაში. 2005-2015 წლებში საქართველოში ევროკავშირის წარმომადგენლობაში პროექტის მენეჯერის რანგში მუშაობდა დემოკრატიზაციის, უმცირესობის, განათლების, ახალგაზრდობის, შრომისა და სოციალურ საკითხებზე. მისი სამეცნიერო ინტერესის სფეროებია ერის ფორმირება და იდენტობა კავკასიაში, საბჭოთა წარსულის მეხსიერება, კავკასიის კვლევების ისტორია და რელიგიის როლი საქართველოში.`,
        ru: `С сентября 2016 года Оливер Райснер является профессором программы Жана Моне по европейским и кавказским исследованиям в Государственном университете Илии. В 2000 году он получил степень доктора философии в Геттингенском университете (Германия) по истории Восточной Европы, славистике, а также средневековой и новой истории. С 2005 по 2015 год он работал руководителем проектов в Представительстве ЕС в Грузии, уделяя особое внимание вопросам демократизации, прав меньшинств, образования, молодежи и социальных проблем. Его основные исследовательские интересы включают формирование нации и идентичности на Кавказе, исследования памяти о советском прошлом, историю кавказоведения и роль религии в Грузии.`,
        az: `2016-cı ilin sentyabr ayından Oliver Reisner İlya Dövlət Universitetində Avropa və Qafqaz Tədqiqatları üzrə Jan Mone Professorudur. O, 2000-ci ildə Göttingen Universitetində (Almaniya) Şərqi Avropa Tarixi, Slavyanşünaslıq, Orta Əsrlər və Müasir Tarix üzrə fəlsəfə doktoru dərəcəsi almışdır. 2005-2015-ci illərdə Avropa İttifaqının Gürcüstandakı Nümayəndəliyində demokratikləşmə, azlıqlar, təhsil, gənclər və sosial məsələlərə diqqət yetirərək layihə rəhbəri kimi çalışmışdır. Əsas tədqiqat maraqlarına Qafqazda millət quruculuğu və kimlik, sovet keçmişinin yaddaş tədqiqatları, qafqazşünaslığın tarixi və Gürcüstanda dinin rolu daxildir.`,
        hy: `2016 թվականի սեպտեմբերից Օլիվեր Ռայսները Եվրոպական և կովկասյան ուսումնասիրությունների Ժան Մոնեի պրոֆեսոր է Իլիայի պետական համալսարանում: 2000 թվականին Գյոթինգենի համալսարանում (Գերմանիա) ստացել է փիլիսոփայության դոկտորի կոչում Արևելյան Եվրոպայի պատմության, սլավոնագիտության, ինչպես նաև միջնադարյան և նորագույն պատմության ոլորտներում: 2005-2015 թվականներին նա աշխատել է Վրաստանում ԵՄ պատվիրակությունում որպես ծրագրի ղեկավար՝ կենտրոնանալով ժողովրդավարացման, փոքրամասնությունների, կրթության, երիտասարդության և սոցիալական հարցերի վրա։ Նրա հիմնական հետազոտական ​​հետաքրքրությունները ներառում են ազգաշինությունը և ինքնությունը Կովկասում, խորհրդային անցյալի հիշողության ուսումնասիրությունները, կովկասագիտության պատմությունը և կրոնի դերը Վրաստանում:`,
      },

      email: 'oliver.reisner@iliauni.edu.ge',
      photoUrl:
        'https://www.kuleuven.be/her-ukr/about/team/images/oliver-reisner.png/@@images/image-400-fce38ec36b1d5e8e763ac90857995794.png',
      isFeatured: true,

      publicationIds: [
        'pub-reisner-2004-schule',
        'pub-reisner-2017-autokephalie',
        'pub-reisner-2015-sakral-national',
        'pub-reisner-2015-unter-dem-schnee',
      ],
    },
    {
      id: 'elene-kekelia',
      affiliation: 'member',

      firstName: {
        en: 'Elene',
        ka: 'ელენე',
        ru: 'Элене',
        az: 'Elene',
        hy: 'Էլենե',
      },

      lastName: {
        en: 'Kekelia',
        ka: 'კეკელია',
        ru: 'Кекелия',
        az: 'Kekelia',
        hy: 'Կեկելիա',
      },

      title: {
        en: 'Visiting Faculty',
        ka: 'მოწვეული ლექტორი',
        ru: 'Приглашенный преподаватель',
        az: 'Dəvət olunmuş müəllim',
        hy: 'Հրավիրյալ դասախոս',
      },

      disciplines: [
        {
          en: 'Comparative-Historical Sociology',
          ka: 'შედარებით-ისტორიული სოციოლოგია',
          ru: 'Сравнительно-историческая социология',
          az: 'Müqayisəli-Tarixi Sosiologiya',
          hy: 'Համեմատական-պատմական սոցիոլոգիա',
        },
        {
          en: 'Memory Studies',
          ka: 'მეხსიერების კვლევები',
          ru: 'Исследования памяти',
          az: 'Yaddaş Tədqiqatları',
          hy: 'Հիշողության ուսումնասիրություններ',
        },
        {
          en: 'Sociology of Exile',
          ka: 'გადასახლების სოციოლოგია',
          ru: 'Социология изгнания',
          az: 'Sürgün Sosiologiyası',
          hy: 'Աքսորի սոցիոլոգիա',
        },
        {
          en: 'Cultural Studies',
          ka: 'კულტურის კვლევები',
          ru: 'Культурология',
          az: 'Kulturologiya',
          hy: 'Մշակութաբանություն',
        },
      ],

      bio: {
        en: `Elene Kekelia holds a Ph.D. in Sociology from the University of Virginia and a Ph.D. in Cultural Studies from Ilia State University (2019). Her work engages deeply with comparative-historical sociology, memory studies, and the sociology of exile. She is particularly interested in the third wave of memory studies, focusing on transnational and migrant memories. Her recent dissertation compared Georgian, Ukrainian, and Azerbaijani exiled communities fleeing Soviet occupation in the 1920s. Previously, her research has explored Soviet Georgian sites of memory, including the conflicted memory around Stalin, national pantheons, and Soviet art.`,
        ka: `ელენე კეკელიამ სოციოლოგიის დოქტორის ხარისხი ვირჯინიის უნივერსიტეტში, ხოლო კულტურის კვლევების დოქტორის ხარისხი ილიას სახელმწიფო უნივერსიტეტში (2019) მოიპოვა. მისი ნაშრომები სიღრმისეულად ეხება შედარებით-ისტორიულ სოციოლოგიას, მეხსიერების კვლევებსა და გადასახლების სოციოლოგიას. იგი განსაკუთრებით დაინტერესებულია მეხსიერების კვლევების მესამე ტალღით, ტრანსნაციონალური და მიგრანტთა მეხსიერების ფოკუსირებით. მისმა ბოლოდროინდელმა სადისერტაციო ნაშრომმა შეისწავლა და შეადარა 1920-იან წლებში საბჭოთა ოკუპაციას გამოქცეული ქართველი, უკრაინელი და აზერბაიჯანელი დევნილების თემები. მანამდე მისი კვლევა მოიცავდა საბჭოთა საქართველოს მეხსიერების ადგილებს, მათ შორის სტალინთან დაკავშირებულ კონფლიქტურ მეხსიერებას, ეროვნულ პანთეონებსა და საბჭოთა ხელოვნებას.`,
        ru: `Элене Кекелия получила степень доктора социологии в Университете Вирджинии и степень доктора культурологии в Государственном университете Илии (2019). Ее работы глубоко затрагивают сравнительно-историческую социологию, исследования памяти и социологию изгнания. Она особенно интересуется третьей волной исследований памяти, уделяя внимание транснациональной памяти и памяти мигрантов. В ее недавней диссертации сравнивались грузинские, украинские и азербайджанские общины изгнанников, бежавших от советской оккупации в 1920-х годах. Ранее ее исследования были посвящены советским грузинским местам памяти, включая противоречивую память о Сталине, национальные пантеоны и советское искусство.`,
        az: `Elene Kekelia Virciniya Universitetində Sosiologiya üzrə, İlya Dövlət Universitetində (2019) isə Kulturologiya üzrə fəlsəfə doktoru dərəcəsi almışdır. Onun əsərləri müqayisəli-tarixi sosiologiya, yaddaş tədqiqatları və sürgün sosiologiyası ilə dərindən əlaqəlidir. O, xüsusilə transmilli və miqrant xatirələrinə diqqət yetirərək yaddaş tədqiqatlarının üçüncü dalğası ilə maraqlanır. Son dissertasiya işi 1920-ci illərdə sovet işğalından qaçan gürcü, ukraynalı və azərbaycanlı sürgün icmalarını müqayisə etmişdir. Əvvəllər onun tədqiqatları sovet gürcü yaddaş yerlərini, o cümlədən Stalinlə bağlı ziddiyyətli yaddaşı, milli panteonları və sovet incəsənətini əhatə edirdi.`,
        hy: `Էլենե Կեկելիան սոցիոլոգիայի դոկտորի կոչում է ստացել Վիրջինիայի համալսարանում և մշակութաբանության դոկտորի կոչում Իլիայի պետական համալսարանում (2019): Նրա աշխատանքները խորապես առնչվում են համեմատական-պատմական սոցիոլոգիային, հիշողության ուսումնասիրություններին և աքսորի սոցիոլոգիային: Նա հատկապես հետաքրքրված է հիշողության ուսումնասիրությունների երրորդ ալիքով՝ կենտրոնանալով անդրազգային և միգրանտների հիշողությունների վրա: Նրա վերջին ատենախոսությունը համեմատում էր 1920-ականներին խորհրդային օկուպացիայից փախած վրացի, ուկրաինացի և ադրբեջանցի աքսորյալների համայնքները: Նախկինում նրա հետազոտությունները վերաբերում էին խորհրդային վրացական հիշողության վայրերին, ներառյալ Ստալինի, ազգային պանթեոնների և խորհրդային արվեստի շուրջ հակասական հիշողությունը:`,
      },

      email: 'elene.kekelia@example.com',
      photoUrl:
        'https://daviscenter.fas.harvard.edu/sites/default/files/styles/profile_large/public/profile-pictures/kekelia_elene.jpg?itok=fgD-YnsE',
      isFeatured: false,

      // --- External Profiles ---
      // facebookUrl: '',
      // researchGateUrl: '',
      // academiaUrl: '',

      // --- Relational Data ---
      publicationIds: [
        'pub-kekelia-2019-trapped-in-past',
        'pub-kekelia-2019-monuments-narratives',
        'pub-kekelia-uva-forced-migrants',
      ],

      /* * OR if you are embedding the publications directly for now:
       * * publications: [
       * {
       * id: 'pub-kekelia-2019-trapped-in-past',
       * title: 'Trapped in the Past: Memories of Georgian Internally Displaced Persons on the Margins of Society',
       * year: 2019,
       * type: 'Article',
       * journal: 'Nationalities Papers, Volume 47 - Issue 3',
       * pages: '429-444' // Co-authored with Malkhaz Toria, Nino Pirtskhalava, Konstantine Ladaria
       * },
       * {
       * id: 'pub-kekelia-2019-monuments-narratives',
       * title: 'The 20th century monuments and national narratives in Georgia',
       * year: 2019,
       * type: 'Dissertation',
       * publisher: 'Ilia State University'
       * }
       * ]
       */
    },
    {
      id: 'konstantine-ladaria',
      affiliation: 'member',

      firstName: {
        en: 'Konstantine',
        ka: 'კონსტანტინე',
        ru: 'Константин',
        az: 'Konstantin',
        hy: 'Կոնստանտինե',
      },

      lastName: {
        en: 'Ladaria',
        ka: 'ლადარია',
        ru: 'Ладария',
        az: 'Ladaria',
        hy: 'Լադարիա',
      },

      title: {
        en: 'Assistant Professor of Sociology',
        ka: 'ასისტენტ-პროფესორი სოციოლოგიის მიმართულებით',
        ru: 'Доцент кафедры социологии',
        az: 'Sosiologiya üzrə dosent',
        hy: 'Սոցիոլոգիայի ասիստենտ պրոֆեսոր',
      },

      disciplines: [
        {
          en: 'Sociology of Culture',
          ka: 'კულტურის სოციოლოგია',
          ru: 'Социология культуры',
          az: 'Mədəniyyət Sosiologiyası',
          hy: 'Մշակույթի սոցիոլոգիա',
        },
        {
          en: 'Sociology of Religion',
          ka: 'რელიგიის სოციოლოგია',
          ru: 'Социология религии',
          az: 'Din Sosiologiyası',
          hy: 'Կրոնի սոցիոլոգիա',
        },
        {
          en: 'Sociology of Emotions',
          ka: 'ემოციების სოციოლოგია',
          ru: 'Социология эмоций',
          az: 'Emosiyalar Sosiologiyası',
          hy: 'Հույզերի սոցիոլոգիա',
        },
        {
          en: 'Memory Studies',
          ka: 'მეხსიერების კვლევები',
          ru: 'Исследования памяти',
          az: 'Yaddaş Tədqiqatları',
          hy: 'Հիշողության ուսումնասիրություններ',
        },
      ],

      bio: {
        en: `Konstantine Ladaria is an Assistant Professor of Sociology at the Faculty of Arts and Sciences at Ilia State University, where he has been teaching since 2015. He earned his Ph.D. in Sociology in 2023 with a dissertation focusing on post-Soviet Georgian Stalinist literature and the construction of cultural trauma. Alongside his academic teaching—which covers the sociology of religion, crime, and emotions—he serves as the Executive Director of the ASCN Alumni Network and is an active researcher at the Memory Studies Center in the Caucasus. His recent research explores collective memory, nationalism, and hybrid warfare.`,

        ka: `კონსტანტინე ლადარია არის ილიას სახელმწიფო უნივერსიტეტის მეცნიერებათა და ხელოვნების ფაკულტეტის სოციოლოგიის მიმართულების ასისტენტ-პროფესორი, სადაც იგი 2015 წლიდან კითხულობს ლექციებს. 2023 წელს მან მოიპოვა სოციოლოგიის დოქტორის ხარისხი დისერტაციით, რომელიც იკვლევს პოსტსაბჭოთა ქართულ სტალინისტურ ლიტერატურასა და კულტურული ტრავმის კონსტრუირებას. აკადემიურ საქმიანობასთან ერთად, რომელიც ფარავს რელიგიის, დამნაშავეობისა და ემოციების სოციოლოგიას, იგი არის ASCN-ის კურსდამთავრებულთა ქსელის აღმასრულებელი დირექტორი და კავკასიის მეხსიერების კვლევების ცენტრის აქტიური მკვლევარი. მისი უახლესი კვლევები ეხება კოლექტიურ მეხსიერებას, ნაციონალიზმსა და ჰიბრიდულ ომებს.`,

        ru: `Константин Ладария — доцент кафедры социологии факультета искусств и наук Государственного университета Илии, где он преподает с 2015 года. В 2023 году он получил степень доктора социологии, защитив диссертацию, посвященную постсоветской грузинской сталинистской литературе и конструированию культурной травмы. Наряду с академической деятельностью, охватывающей социологию религии, преступности и эмоций, он является исполнительным директором Сети выпускников ASCN и активным исследователем в Центре исследований памяти на Кавказе. Его недавние исследования посвящены коллективной памяти, национализму и гибридным войнам.`,

        az: `Konstantin Ladaria, 2015-ci ildən dərs dediyi İlya Dövlət Universitetinin İncəsənət və Elmlər Fakültəsində Sosiologiya üzrə dosentdir. O, 2023-cü ildə postsovet Gürcüstanının stalinist ədəbiyyatı və mədəni travmanın qurulmasına diqqət yetirən dissertasiya ilə sosiologiya üzrə fəlsəfə doktoru dərəcəsi almışdır. Din, cinayət və emosiyalar sosiologiyasını əhatə edən akademik fəaliyyəti ilə yanaşı, ASCN Məzunlar Şəbəkəsinin icraçı direktoru kimi fəaliyyət göstərir və Qafqazda Yaddaş Tədqiqatları Mərkəzinin fəal tədqiqatçısıdır. Onun son tədqiqatları kollektiv yaddaş, millətçilik və hibrid müharibələri araşdırır.`,

        hy: `Կոնստանտինե Լադարիան Իլիայի պետական համալսարանի արվեստի և գիտությունների ֆակուլտետի սոցիոլոգիայի ասիստենտ պրոֆեսոր է, որտեղ դասավանդում է 2015 թվականից։ 2023 թվականին նա ստացել է սոցիոլոգիայի դոկտորի կոչում՝ պաշտպանելով ատենախոսություն, որը նվիրված է հետխորհրդային վրացական ստալինյան գրականությանը և մշակութային տրավմայի կառուցմանը: Կրոնի, հանցագործության և հույզերի սոցիոլոգիան ընդգրկող իր ակադեմիական գործունեությանը զուգահեռ, նա ծառայում է որպես ASCN Շրջանավարտների ցանցի գործադիր տնօրեն և ակտիվ հետազոտող է Կովկասի հիշողության ուսումնասիրությունների կենտրոնում: Նրա վերջին հետազոտություններն ուսումնասիրում են հավաքական հիշողությունը, ազգայնականությունը և հիբրիդային պատերազմները:`,
      },

      email: 'konstantine.ladaria.1@iliauni.edu.ge',
      // You can add your headshot URL here once you have it uploaded to your assets or server
      photoUrl:
        'https://i1.rgstatic.net/ii/profile.image/11431281156399012-1683531448081_Q512/Konstantine-Ladaria.jpg',
      isFeatured: true, // Assuming you want your own profile featured!

      // --- External Profiles ---
      // facebookUrl: '',
      // researchGateUrl: '',
      // academiaUrl: 'https://iliauni.academia.edu/KonstantineLadaria',

      // --- Relational Data ---
      publicationIds: [
        'pub-ladaria-2024-making-stalin-georgian',
        'pub-ladaria-mevrishvili-2022-hybrid-war',
        'pub-araviashvili-ladaria-2021-constructing-sites',
        'pub-toria-etal-2019-trapped-in-past',
        'pub-ladaria-2018-russian-war',
      ],
    },
    {
      id: 'stephen-jones',

      // We use the new affiliation property we created!
      affiliation: 'collaborator',

      firstName: {
        en: 'Stephen',
        ka: 'სტივენ',
        ru: 'Стивен',
        az: 'Stiven',
        hy: 'Սթիվեն',
      },

      lastName: {
        en: 'Jones',
        ka: 'ჯონსი',
        ru: 'Джонс',
        az: 'Cons',
        hy: 'Ջոնս',
      },

      title: {
        en: 'Professor of Modern Georgian History',
        ka: 'თანამედროვე საქართველოს ისტორიის პროფესორი',
        ru: 'Профессор современной истории Грузии',
        az: 'Müasir Gürcüstan Tarixi Professoru',
        hy: 'Ժամանակակից Վրաստանի պատմության պրոֆեսոր',
      },

      disciplines: [
        {
          en: 'Modern Georgian History',
          ka: 'საქართველოს უახლესი ისტორია',
          ru: 'Современная история Грузии',
          az: 'Müasir Gürcüstan Tarixi',
          hy: 'Ժամանակակից Վրաստանի պատմություն',
        },
        {
          en: 'Political Science',
          ka: 'პოლიტიკის მეცნიერება',
          ru: 'Политология',
          az: 'Politologiya',
          hy: 'Քաղաքագիտություն',
        },
        {
          en: 'Post-Soviet Studies',
          ka: 'პოსტსაბჭოთა კვლევები',
          ru: 'Постсоветские исследования',
          az: 'Postsovet Tədqiqatları',
          hy: 'Հետխորհրդային ուսումնասիրություններ',
        },
      ],

      bio: {
        en: `Stephen F. Jones is a Professor of Modern Georgian History at Ilia State University and the Chairman of the Advisory Board for the Program on Georgian Studies at Harvard University's Davis Center. Since 1989, he has taught in the Russian and Eurasian Studies Department at Mount Holyoke College. He received his Ph.D. from the London School of Economics in 1984. A renowned expert on post-communist societies, he specializes in the history and politics of the South Caucasus. He is a foreign member of the Georgian Academy of Sciences and has received honorary doctorates from both Tbilisi State University and Ilia State University. His foundational books include "Socialism in Georgian Colors" and "Georgia: A Political History Since Independence."`,

        ka: `სტივენ ფ. ჯონსი არის ილიას სახელმწიფო უნივერსიტეტის თანამედროვე საქართველოს ისტორიის პროფესორი და ჰარვარდის უნივერსიტეტის დევისის ცენტრის საქართველოს კვლევების პროგრამის მრჩეველთა საბჭოს თავმჯდომარე. 1989 წლიდან იგი ასწავლის მაუნთ ჰოლიოკის კოლეჯში. 1984 წელს მან მოიპოვა დოქტორის ხარისხი ლონდონის ეკონომიკის სკოლაში. როგორც პოსტკომუნისტური საზოგადოებების ცნობილი ექსპერტი, იგი იკვლევს სამხრეთ კავკასიის ისტორიასა და პოლიტიკას. ის არის საქართველოს მეცნიერებათა ეროვნული აკადემიის უცხოელი წევრი და მინიჭებული აქვს თბილისისა და ილიას სახელმწიფო უნივერსიტეტების საპატიო დოქტორის წოდებები. მისი ცნობილი წიგნებია "სოციალიზმი ქართულ ფერებში" და "საქართველო: პოლიტიკური ისტორია დამოუკიდებლობის შემდეგ."`,

        ru: `Стивен Ф. Джонс — профессор современной истории Грузии в Государственном университете Илии и председатель консультативного совета Программы грузинских исследований в Центре Дэвиса Гарвардского университета. Преподает в колледже Маунт-Холиок с 1989 года. В 1984 году получил степень доктора философии в Лондонской школе экономики. Будучи известным экспертом по посткоммунистическим обществам, он специализируется на истории и политике Южного Кавказа. Является иностранным членом Национальной академии наук Грузии, а также почетным доктором Тбилисского и Илийского государственных университетов. Его основополагающие книги включают «Социализм в грузинских тонах» и «Грузия: политическая история после независимости».`,

        az: `Stiven F. Cons İlya Dövlət Universitetinin Müasir Gürcüstan Tarixi professoru və Harvard Universitetinin Devis Mərkəzində Gürcüstan Tədqiqatları Proqramının Məsləhət Şurasının sədridir. O, 1989-cu ildən Mount Holyoke Kollecində dərs deyir. 1984-cü ildə London İqtisadiyyat Məktəbində fəlsəfə doktoru dərəcəsi almışdır. Postkommunist cəmiyyətlər üzrə tanınmış ekspert kimi Cənubi Qafqazın tarixi və siyasəti üzrə ixtisaslaşıb. Gürcüstan Milli Elmlər Akademiyasının xarici üzvüdür və həm Tbilisi, həm də İlya Dövlət Universitetlərinin fəxri doktoru adına layiq görülmüşdür.`,

        hy: `Սթիվեն Ֆ. Ջոնսը Իլիայի պետական համալսարանի ժամանակակից Վրաստանի պատմության պրոֆեսոր է և Հարվարդի համալսարանի Դևիսի կենտրոնի Վրաստանի ուսումնասիրությունների ծրագրի խորհրդատվական խորհրդի նախագահը։ 1989 թվականից դասավանդում է Մաունթ Հոլիոկ քոլեջում։ 1984 թվականին ստացել է դոկտորի կոչում Լոնդոնի տնտեսագիտության դպրոցում: Որպես հետկոմունիստական հասարակությունների հայտնի փորձագետ՝ նա մասնագիտացած է Հարավային Կովկասի պատմության և քաղաքականության մեջ: Նա Վրաստանի Գիտությունների ազգային ակադեմիայի օտարերկրյա անդամ է և արժանացել է ինչպես Թբիլիսիի, այնպես էլ Իլիայի պետական համալսարանների պատվավոր դոկտորի կոչման։`,
      },

      // Used his official Harvard Davis center email & portrait
      email: 'sfjones@fas.harvard.edu',
      photoUrl:
        'https://www.mtholyoke.edu/sites/default/files/styles/690x460/public/2025-10/stephen-jones-2-s17-16x9-web.jpg?itok=33C-0Q-n',
      isFeatured: false,

      // --- Relational Data ---
      // This is the publication we just added earlier!
      publicationIds: ['pub-jones-toria-2021'],
    },
    {
      id: 'nino-chikovani',

      // External academic collaborating with your center
      affiliation: 'collaborator',

      firstName: {
        en: 'Nino',
        ka: 'ნინო',
        ru: 'Нино',
        az: 'Nino',
        hy: 'Նինո',
      },

      lastName: {
        en: 'Chikovani',
        ka: 'ჩიქოვანი',
        ru: 'Чиковани',
        az: 'Çikovani',
        hy: 'Չիքովանի',
      },

      title: {
        en: 'Professor of Cultural Studies',
        ka: 'კულტურის კვლევების პროფესორი',
        ru: 'Профессор культурологии',
        az: 'Mədəniyyət Tədqiqatları Professoru',
        hy: 'Մշակութաբանության պրոֆեսոր',
      },

      disciplines: [
        {
          en: 'Cultural Studies',
          ka: 'კულტურის კვლევები',
          ru: 'Культурология',
          az: 'Kulturologiya',
          hy: 'Մշակութաբանություն',
        },
        {
          en: 'Memory Studies',
          ka: 'მეხსიერების კვლევები',
          ru: 'Исследования памяти',
          az: 'Yaddaş Tədqiqatları',
          hy: 'Հիշողության ուսումնասիրություններ',
        },
        {
          en: 'History',
          ka: 'ისტორია',
          ru: 'История',
          az: 'Tarix',
          hy: 'Պատմություն',
        },
        {
          en: 'Intercultural Communication',
          ka: 'ინტერკულტურული კომუნიკაცია',
          ru: 'Межкультурная коммуникация',
          az: 'Mədəniyyətlərarası Kommunikasiya',
          hy: 'Միջմշակութային հաղորդակցություն',
        },
      ],

      bio: {
        en: `Nino Chikovani is a Professor and the Head of the Institute of Cultural Studies at Ivane Javakhishvili Tbilisi State University (TSU). She graduated from the Faculty of History at TSU in 1978 and holds a Doctor of Historical Sciences degree. Her academic research focuses on collective and cultural memory, memory politics, identity construction, and intercultural communication. She has led numerous international and local research projects funded by organizations such as the Shota Rustaveli National Science Foundation, UNESCO, DAAD, and the Volkswagen Foundation. She has authored over 60 scientific articles and three monographs, and serves as the Head of the Editorial Board for the international scientific journal "Civilization Researches".`,

        ka: `ნინო ჩიქოვანი არის ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტის (თსუ) პროფესორი და კულტურის კვლევების ინსტიტუტის ხელმძღვანელი. მან 1978 წელს დაამთავრა თსუ-ს ისტორიის ფაკულტეტი და არის ისტორიის მეცნიერებათა დოქტორი. მისი აკადემიური კვლევები ფოკუსირდება კოლექტიურ და კულტურულ მეხსიერებაზე, მეხსიერების პოლიტიკაზე, იდენტობის კონსტრუირებასა და ინტერკულტურულ კომუნიკაციაზე. იგი ხელმძღვანელობდა არაერთ საერთაშორისო და ადგილობრივ კვლევით პროექტს, რომლებიც დაფინანსებულია შოთა რუსთაველის ეროვნული სამეცნიერო ფონდის, UNESCO-ს, DAAD-ისა და ფოლკსვაგენის ფონდის მიერ. არის 60-ზე მეტი სამეცნიერო სტატიისა და სამი მონოგრაფიის ავტორი, ასევე საერთაშორისო სამეცნიერო ჟურნალის "ცივილიზაციური ძიებანი" სარედაქციო საბჭოს ხელმძღვანელი.`,

        ru: `Нино Чиковани — профессор и руководитель Института культурологии Тбилисского государственного университета имени Иване Джавахишвили (ТГУ). Окончила исторический факультет ТГУ в 1978 году, имеет степень доктора исторических наук. Ее академические исследования сосредоточены на коллективной и культурной памяти, политике памяти, конструировании идентичности и межкультурной коммуникации. Руководила многочисленными международными и местными исследовательскими проектами, финансируемыми Национальным научным фондом имени Шота Руставели, ЮНЕСКО, DAAD и Фондом Фольксвагена. Является автором более 60 научных статей и трех монографий, а также возглавляет редакционную коллегию международного научного журнала «Цивилизационные исследования».`,

        az: `Nino Çikovani İvane Cavaxişvili adına Tbilisi Dövlət Universitetinin (TDU) professoru və Kulturologiya İnstitutunun rəhbəridir. 1978-ci ildə TDU-nun Tarix fakültəsini bitirmişdir və tarix elmləri doktoru dərəcəsinə malikdir. Akademik tədqiqatları kollektiv və mədəni yaddaş, yaddaş siyasəti, kimliyin qurulması və mədəniyyətlərarası kommunikasiya üzərində cəmlənib. O, Şota Rustaveli Milli Elm Fondu, YUNESKO, DAAD və Volkswagen Fondu tərəfindən maliyyələşdirilən çoxsaylı beynəlxalq və yerli tədqiqat layihələrinə rəhbərlik etmişdir. 60-dan çox elmi məqalənin və üç monoqrafiyanın müəllifidir, həmçinin "Sivilizasiya Tədqiqatları" beynəlxalq elmi jurnalının Redaksiya Şurasının rəhbəridir.`,

        hy: `Նինո Չիքովանին Իվանե Ջավախիշվիլիի անվան Թբիլիսիի պետական համալսարանի (ԹՊՀ) պրոֆեսոր է և Մշակութաբանության ինստիտուտի ղեկավարը։ 1978 թվականին ավարտել է ԹՊՀ-ի պատմության ֆակուլտետը և ունի պատմական գիտությունների դոկտորի կոչում: Նրա ակադեմիական հետազոտությունները կենտրոնացած են հավաքական և մշակութային հիշողության, հիշողության քաղաքականության, ինքնության կառուցման և միջմշակութային հաղորդակցության վրա: Նա ղեկավարել է բազմաթիվ միջազգային և տեղական հետազոտական նախագծեր, որոնք ֆինանսավորվել են Շոթա Ռուսթավելիի ազգային գիտական հիմնադրամի, ՅՈՒՆԵՍԿՕ-ի, DAAD-ի և Վոլկսվագեն հիմնադրամի կողմից: Ավելի քան 60 գիտական հոդվածների և երեք մենագրությունների հեղինակ է, ինչպես նաև ղեկավարում է «Քաղաքակրթական որոնումներ» միջազգային գիտական ամսագրի խմբագրական խորհուրդը։`,
      },

      email: 'nino.chikovani@tsu.ge',
      photoUrl:
        'https://isyshold.tsu.ge/assets/media/uploads/images/nino-chikovani_6347d86588db9.jpg',
      isFeatured: false,

      // This is the Caucasus Survey article we added earlier!
      publicationIds: ['pub-chikovani-2021'],
    },
    {
      id: 'bezhan-javakhia',

      // Co-author and faculty collaborator
      affiliation: 'collaborator',

      firstName: {
        en: 'Bezhan',
        ka: 'ბეჟან',
        ru: 'Бежан',
        az: 'Bejan',
        hy: 'Բեժան',
      },

      lastName: {
        en: 'Javakhia',
        ka: 'ჯავახია',
        ru: 'Джавахия',
        az: 'Cavaxiya',
        hy: 'Ջավախիա',
      },

      title: {
        en: 'Professor of History',
        ka: 'ისტორიის პროფესორი',
        ru: 'Профессор истории',
        az: 'Tarix Professoru',
        hy: 'Պատմության պրոֆեսոր',
      },

      disciplines: [
        {
          en: 'Medieval History',
          ka: 'შუა საუკუნეების ისტორია',
          ru: 'Средневековая история',
          az: 'Orta Əsrlər Tarixi',
          hy: 'Միջնադարյան պատմություն',
        },
        {
          en: 'Byzantine History',
          ka: 'ბიზანტიის ისტორია',
          ru: 'История Византии',
          az: 'Bizans Tarixi',
          hy: 'Բյուզանդիայի պատմություն',
        },
        {
          en: 'World History',
          ka: 'მსოფლიო ისტორია',
          ru: 'Всемирная история',
          az: 'Dünya Tarixi',
          hy: 'Համաշխարհային պատմություն',
        },
        {
          en: 'Memory Studies',
          ka: 'მეხსიერების კვლევები',
          ru: 'Исследования памяти',
          az: 'Yaddaş Tədqiqatları',
          hy: 'Հիշողության ուսումնասիրություններ',
        },
      ],

      bio: {
        en: `Bezhan Javakhia is a Professor of History at Ilia State University, where he serves as the Head of the BA, MA, and PhD programs in Medieval Studies. He received his Doctor of History degree in World History from Ivane Javakhishvili Tbilisi State University (TSU) in 1986. His extensive academic career includes working as an Associate Professor and later as a Professor at TSU's Institute of World History until 2013, when he joined Ilia State University. In 1992, he completed a post-doctoral program at Saarland University in Germany, and has been a visiting scholar at Humboldt University of Berlin and the University of Tübingen. Notably, he was a member of the first convocation of the Supreme Council of the Republic of Georgia from 1990 to 1992. His research explores medieval Georgia, Byzantine culture, and the cultural memory of fateful historical events.`,

        ka: `ბეჟან ჯავახია არის ილიას სახელმწიფო უნივერსიტეტის ისტორიის პროფესორი, სადაც იგი შუა საუკუნეების კვლევების საბაკალავრო, სამაგისტრო და სადოქტორო პროგრამების ხელმძღვანელია. მან 1986 წელს ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტში (თსუ) დაიცვა სადოქტორო დისერტაცია მსოფლიო ისტორიის მიმართულებით. მისი აკადემიური კარიერა მოიცავს თსუ-ში მოღვაწეობას დოცენტად და მსოფლიო ისტორიის ინსტიტუტის პროფესორად 2013 წლამდე, რის შემდეგაც მუშაობა გააგრძელა ილიას სახელმწიფო უნივერსიტეტში. 1992 წელს მან გაიარა პოსტსადოქტორო პროგრამა ზაარლანდის უნივერსიტეტში, ასევე იყო მიწვეული მკვლევარი ბერლინის ჰუმბოლდტისა და ტიუბინგენის უნივერსიტეტებში. აღსანიშნავია, რომ 1990-1992 წლებში იგი იყო საქართველოს რესპუბლიკის უზენაესი საბჭოს პირველი მოწვევის წევრი. მისი კვლევები ფოკუსირდება შუა საუკუნეების საქართველოზე, ბიზანტიურ კულტურასა და საბედისწერო ისტორიული მოვლენების კულტურულ მეხსიერებაზე.`,

        ru: `Бежан Джавахия — профессор истории Государственного университета Илии, где он руководит программами бакалавриата, магистратуры и докторантуры по медиевистике. В 1986 году он получил степень доктора исторических наук по всемирной истории в Тбилисском государственном университете (ТГУ). Его обширная академическая карьера включает работу доцентом, а затем профессором в Институте всемирной истории ТГУ до 2013 года, после чего он перешел в Государственный университет Илии. В 1992 году он окончил постдокторантуру в Саарском университете (Германия), был приглашенным исследователем в Берлинском университете имени Гумбольдта и Тюбингенском университете. Примечательно, что с 1990 по 1992 год он был депутатом Верховного Совета Республики Грузия первого созыва. Его исследования посвящены средневековой Грузии, византийской культуре и культурной памяти о судьбоносных исторических событиях.`,

        az: `Bejan Cavaxiya İlya Dövlət Universitetinin Tarix professorudur və burada Orta Əsrlər Tədqiqatları üzrə bakalavr, magistr və doktorantura proqramlarının rəhbəridir. O, 1986-cı ildə İvane Cavaxişvili adına Tbilisi Dövlət Universitetində (TDU) Dünya Tarixi üzrə tarix elmləri doktoru dərəcəsini almışdır. Onun geniş akademik karyerasına 2013-cü ilə qədər TDU-nun Dünya Tarixi İnstitutunda dosent və daha sonra professor kimi işləmək daxildir, bundan sonra o, İlya Dövlət Universitetinə keçmişdir. 1992-ci ildə Almaniyanın Saarland Universitetində postdoktorantura proqramını tamamlamış, Berlin Humboldt Universiteti və Tübingen Universitetində dəvətli tədqiqatçı olmuşdur. 1990-1992-ci illərdə Gürcüstan Respublikası Ali Sovetinin birinci çağırışının üzvü olmuşdur. Tədqiqatları orta əsrlər Gürcüstanı, Bizans mədəniyyəti və mühüm tarixi hadisələrin mədəni yaddaşına həsr olunub.`,

        hy: `Բեժան Ջավախիան Իլիայի պետական համալսարանի պատմության պրոֆեսոր է, որտեղ ղեկավարում է միջնադարյան ուսումնասիրությունների բակալավրիատի, մագիստրատուրայի և դոկտորանտուրայի ծրագրերը: 1986 թվականին Իվանե Ջավախիշվիլիի անվան Թբիլիսիի պետական համալսարանում (ԹՊՀ) ստացել է պատմական գիտությունների դոկտորի կոչում համաշխարհային պատմության ոլորտում: Նրա ընդարձակ ակադեմիական կարիերան ներառում է աշխատանք ԹՊՀ-ի Համաշխարհային պատմության ինստիտուտում որպես դոցենտ, ապա որպես պրոֆեսոր մինչև 2013 թվականը, որից հետո նա տեղափոխվել է Իլիայի պետական համալսարան: 1992 թվականին Գերմանիայի Սաարլանդի համալսարանում ավարտել է հետդոկտորական ծրագիր և եղել է հրավիրյալ գիտնական Բեռլինի Հումբոլդտի և Տյուբինգենի համալսարաններում: Հատկանշական է, որ 1990-1992 թվականներին նա եղել է Վրաստանի Հանրապետության Գերագույն խորհրդի առաջին գումարման պատգամավոր: Նրա հետազոտություններն ուսումնասիրում են միջնադարյան Վրաստանը, բյուզանդական մշակույթը և ճակատագրական պատմական իրադարձությունների մշակութային հիշողությունը։`,
      },

      email: 'bezhan.javakhia@iliauni.edu.ge',
      photoUrl: 'https://newposts.ge/uploads/files/2025/04/09/32561/bezhan-javakhia_w_h.jpeg', // You can add a headshot URL here later
      isFeatured: false,

      // Linking him to the Caucasus Survey publication with Malkhaz Toria
      publicationIds: ['pub-toria-javakhia-2021'],
    },
    {
      id: 'maia-araviashvili',

      // ISU faculty and Center contributor
      affiliation: 'collaborator',

      firstName: {
        en: 'Maia',
        ka: 'მაია',
        ru: 'Маия',
        az: 'Maia',
        hy: 'Մայա',
      },

      lastName: {
        en: 'Araviashvili',
        ka: 'არავიაშვილი',
        ru: 'Аравиашвили',
        az: 'Araviaşvili',
        hy: 'Արավիաշվիլի',
      },

      title: {
        en: 'Assistant Professor of Sociology',
        ka: 'ასისტენტ-პროფესორი სოციოლოგიის მიმართულებით',
        ru: 'Доцент кафедры социологии',
        az: 'Sosiologiya üzrə dosent',
        hy: 'Սոցիոլոգիայի ասիստենտ պրոֆեսոր',
      },

      disciplines: [
        {
          en: 'Sociology',
          ka: 'სოციოლოგია',
          ru: 'Социология',
          az: 'Sosiologiya',
          hy: 'Սոցիոլոգիա',
        },
        {
          en: 'Gender Studies',
          ka: 'გენდერის კვლევები',
          ru: 'Гендерные исследования',
          az: 'Gender Tədqiqatları',
          hy: 'Գենդերային ուսումնասիրություններ',
        },
        {
          en: 'Migration Studies',
          ka: 'მიგრაციის კვლევები',
          ru: 'Исследования миграции',
          az: 'Miqrasiya Tədqiqatları',
          hy: 'Միգրացիոն ուսումնասիրություններ',
        },
        {
          en: 'Civil Society Studies',
          ka: 'სამოქალაქო საზოგადოების კვლევები',
          ru: 'Исследования гражданского общества',
          az: 'Vətəndaş Cəmiyyəti Tədqiqatları',
          hy: 'Քաղաքացիական հասարակության ուսումնասիրություններ',
        },
      ],

      bio: {
        en: `Maia Araviashvili is an Assistant Professor of Sociology at the School of Arts and Sciences at Ilia State University. She received her Ph.D. in Sociology from Ilia State University in 2015, defending her dissertation on "Gender Aspects of Inheritance Distribution in Georgian Culture". She holds an MA in Social Sciences from the Center for Social Sciences at Tbilisi State University and a BA in Sociology from Telavi I. Gogebashvili State University. She has been a visiting scholar at various international institutions, including the New School for Social Research in New York under the Faculty Development Program. Her primary research interests cover gender studies, formal and informal organizations of civil society, and issues surrounding migration and identity transformation.`,

        ka: `მაია არავიაშვილი არის ილიას სახელმწიფო უნივერსიტეტის მეცნიერებათა და ხელოვნების ფაკულტეტის ასისტენტ-პროფესორი სოციოლოგიის მიმართულებით. 2015 წელს მან მოიპოვა სოციოლოგიის დოქტორის ხარისხი ილიას სახელმწიფო უნივერსიტეტში დისერტაციით „მემკვიდრეობის განაწილების გენდერული ასპექტები ქართულ კულტურაში“. მას აქვს სოციალურ მეცნიერებათა მაგისტრის ხარისხი თბილისის სახელმწიფო უნივერსიტეტის სოციალურ მეცნიერებათა ცენტრიდან და სოციოლოგიის ბაკალავრის ხარისხი თელავის ი. გოგებაშვილის სახელობის სახელმწიფო უნივერსიტეტიდან. როგორც მიწვეული მკვლევარი, იგი მუშაობდა სხვადასხვა საერთაშორისო ინსტიტუტში, მათ შორის ნიუ-იორკის ახალ სოციალურ კვლევათა სკოლაში Faculty Development პროგრამის ფარგლებში. მისი ძირითადი კვლევითი ინტერესები მოიცავს გენდერის კვლევებს, სამოქალაქო საზოგადოების ფორმალურ და არაფორმალურ ორგანიზაციებს და მიგრაციისა და იდენტობის ტრანსფორმაციის საკითხებს.`,

        ru: `Маия Аравиашвили — доцент кафедры социологии факультета искусств и наук Государственного университета Илии. В 2015 году она получила степень доктора социологии в Государственном университете Илии, защитив диссертацию на тему «Гендерные аспекты распределения наследства в грузинской культуре». Она имеет степень магистра Центра социальных наук Тбилисского государственного университета и степень бакалавра социологии Телавского государственного университета имени И. Гогебашвили. В качестве приглашенного исследователя работала в ряде международных институтов, включая Новую школу социальных исследований в Нью-Йорке. Ее основные научные интересы охватывают гендерные исследования, формальные и неформальные организации гражданского общества, а также вопросы миграции и трансформации идентичности.`,

        az: `Maia Araviaşvili İlya Dövlət Universitetinin İncəsənət və Elmlər Məktəbində Sosiologiya üzrə dosentdir. O, 2015-ci ildə İlya Dövlət Universitetində Sosiologiya üzrə fəlsəfə doktoru dərəcəsi almışdır və dissertasiyası "Gürcü mədəniyyətində miras bölgüsünün gender aspektləri" mövzusunda olmuşdur. Tbilisi Dövlət Universitetinin Sosial Elmlər Mərkəzində Sosial Elmlər üzrə magistr, Telavi İ. Qoqebaşvili Dövlət Universitetində isə Sosiologiya üzrə bakalavr dərəcəsi almışdır. Müxtəlif beynəlxalq qurumlarda, o cümlədən Nyu-Yorkdakı Yeni Sosial Tədqiqatlar Məktəbində dəvətli tədqiqatçı olmuşdur. Əsas tədqiqat maraqlarına gender tədqiqatları, vətəndaş cəmiyyətinin rəsmi və qeyri-rəsmi təşkilatları, miqrasiya və kimliyin transformasiyası məsələləri daxildir.`,

        hy: `Մայա Արավիաշվիլին Իլիայի պետական համալսարանի արվեստի և գիտությունների ֆակուլտետի սոցիոլոգիայի ասիստենտ պրոֆեսոր է: 2015 թվականին նա ստացել է սոցիոլոգիայի դոկտորի կոչում Իլիայի պետական համալսարանում՝ պաշտպանելով «Ժառանգության բաշխման գենդերային ասպեկտները վրացական մշակույթում» թեմայով ատենախոսություն: Նա ունի սոցիալական գիտությունների մագիստրոսի կոչում Թբիլիսիի պետական համալսարանի սոցիալական գիտությունների կենտրոնից և սոցիոլոգիայի բակալավրի աստիճան Թելավիի Ի. Գոգեբաշվիլիի պետական համալսարանից: Որպես հրավիրյալ հետազոտող աշխատել է մի շարք միջազգային հաստատություններում, այդ թվում՝ Նյու Յորքի Նոր սոցիալական հետազոտությունների դպրոցում: Նրա հիմնական գիտական հետաքրքրությունները ներառում են գենդերային ուսումնասիրություններ, քաղաքացիական հասարակության պաշտոնական և ոչ պաշտոնական կազմակերպություններ, ինչպես նաև միգրացիայի և ինքնության փոխակերպման հարցեր:`,
      },

      email: 'maia.araviashvili@iliauni.edu.ge',
      photoUrl:
        'https://blogs.netgazeti.ge/wp-content/uploads/336423925_815843400071908_1601350141215279706_n-e1678980958439.jpg', // Can be added later when available
      isFeatured: false,

      // This references the Caucasus Survey publication with Konstantine Ladaria
      publicationIds: ['pub-araviashvili-ladaria-2021'],
    },
    {
      id: 'irakli-khvadagiani',

      // Invited Lecturer and SovLab Chairman
      affiliation: 'collaborator',

      firstName: {
        en: 'Irakli',
        ka: 'ირაკლი',
        ru: 'Ираклий',
        az: 'İrakli',
        hy: 'Իրակլի',
      },

      lastName: {
        en: 'Khvadagiani',
        ka: 'ხვადაგიანი',
        ru: 'Хвадагиани',
        az: 'Xvadaqiani',
        hy: 'Խվադագիանի',
      },

      title: {
        en: 'Invited Lecturer and Chairman of the Board at SovLab',
        ka: 'მოწვეული ლექტორი და SovLab-ის გამგეობის თავმჯდომარე',
        ru: 'Приглашенный лектор и председатель правления SovLab',
        az: 'Dəvət olunmuş müəllim və SovLab idarə heyətinin sədri',
        hy: 'Հրավիրյալ դասախոս և SovLab-ի խորհրդի նախագահ',
      },

      disciplines: [
        {
          en: 'Modern History of Georgia',
          ka: 'საქართველოს უახლესი ისტორია',
          ru: 'Современная история Грузии',
          az: 'Müasir Gürcüstan Tarixi',
          hy: 'Վրաստանի ժամանակակից պատմություն',
        },
        {
          en: 'Soviet Past Research',
          ka: 'საბჭოთა წარსულის კვლევა',
          ru: 'Исследования советского прошлого',
          az: 'Sovet Keçmişinin Tədqiqi',
          hy: 'Խորհրդային անցյալի ուսումնասիրություն',
        },
        {
          en: 'Memory Studies',
          ka: 'მეხსიერების კვლევები',
          ru: 'Исследования памяти',
          az: 'Yaddaş Tədqiqatları',
          hy: 'Հիշողության ուսումնասիրություններ',
        },
      ],

      bio: {
        en: `Irakli Khvadagiani is an invited lecturer at Ilia State University and the Chairman of the Board of the Soviet Past Research Laboratory (SovLab). He studied Journalism at Tbilisi State University (2005-2009) and completed his MA at Ilia State University, specializing in the Caucasus in the European and Global context (2010-2013). Since 2014, he has been a Ph.D. candidate at Ilia State University. His academic research focuses heavily on the social and political developments of the 19th and 20th centuries, including the domestic politics of the First Democratic Republic of Georgia (1918-1921), the Soviet Russian occupation, and the Georgian resistance movement. He is the author of numerous publications exploring Soviet terror and political emigration.`,

        ka: `ირაკლი ხვადაგიანი არის ილიას სახელმწიფო უნივერსიტეტის მოწვეული ლექტორი და საბჭოთა წარსულის კვლევის ლაბორატორიის (SovLab) გამგეობის თავმჯდომარე. 2005-2009 წლებში სწავლობდა თბილისის სახელმწიფო უნივერსიტეტში ჟურნალისტიკის მიმართულებით, ხოლო 2010-2013 წლებში დაასრულა ილიას სახელმწიფო უნივერსიტეტის სამაგისტრო პროგრამა. 2014 წლიდან არის ილიას სახელმწიფო უნივერსიტეტის დოქტორანტი. მისი აკადემიური კვლევები ძირითადად ფოკუსირდება მე-19 და მე-20 საუკუნეების სოციალურ-პოლიტიკურ პროცესებზე, მათ შორის საქართველოს პირველი დემოკრატიული რესპუბლიკის (1918-1921) საშინაო პოლიტიკაზე, საბჭოთა რუსულ ოკუპაციასა და ქართულ წინააღმდეგობის მოძრაობაზე. ავტორია არაერთი პუბლიკაციისა საბჭოთა ტერორისა და პოლიტიკური ემიგრაციის შესახებ.`,

        ru: `Ираклий Хвадагиани — приглашенный лектор Государственного университета Илии и председатель правления Лаборатории исследования советского прошлого (SovLab). Он изучал журналистику в Тбилисском государственном университете (2005–2009) и получил степень магистра в Государственном университете Илии (2010–2013). С 2014 года является докторантом Государственного университета Илии. Его академические исследования в основном сосредоточены на социально-политическом развитии 19 и 20 веков, включая внутреннюю политику Первой Демократической Республики Грузия (1918–1921 гг.), советскую российскую оккупацию и грузинское движение сопротивления. Автор многочисленных публикаций о советском терроре и политической эмиграции.`,

        az: `İrakli Xvadaqiani İlya Dövlət Universitetinin dəvət olunmuş müəllimi və Sovet Keçmişini Araşdırma Laboratoriyasının (SovLab) idarə heyətinin sədridir. O, Tbilisi Dövlət Universitetində jurnalistika (2005-2009) üzrə təhsil almış və İlya Dövlət Universitetində magistr dərəcəsi almışdır (2010-2013). 2014-cü ildən İlya Dövlət Universitetinin doktorantıdır. Onun akademik tədqiqatları əsasən 19-cu və 20-ci əsrlərin sosial və siyasi proseslərinə, o cümlədən Birinci Gürcüstan Demokratik Respublikasının daxili siyasəti (1918-1921), Sovet Rusiyasının işğalı və Gürcüstan müqavimət hərəkatına yönəlib. Sovet terroru və siyasi mühacirətə dair çoxsaylı nəşrlərin müəllifidir.`,

        hy: `Իրակլի Խվադագիանին Իլիայի պետական համալսարանի հրավիրյալ դասախոս է և Խորհրդային անցյալի հետազոտական լաբորատորիայի (SovLab) խորհրդի նախագահը: Սովորել է ժուռնալիստիկա Թբիլիսիի պետական համալսարանում (2005-2009) և ստացել մագիստրոսի կոչում Իլիայի պետական համալսարանում (2010-2013)։ 2014 թվականից Իլիայի պետական համալսարանի ասպիրանտ է: Նրա ակադեմիական հետազոտությունները հիմնականում կենտրոնացած են 19-րդ և 20-րդ դարերի սոցիալ-քաղաքական զարգացումների վրա, ներառյալ Վրաստանի Առաջին Դեմոկրատական Հանրապետության (1918-1921) ներքին քաղաքականությունը, խորհրդային ռուսական բռնազավթումը և վրացական դիմադրության շարժումը: Հեղինակ է խորհրդային տեռորի և քաղաքական արտագաղթի վերաբերյալ բազմաթիվ հրապարակումների։`,
      },

      email: 'iraklikhvadagianni@gmail.com', //
      photoUrl:
        'https://api.tabula.ge/files/styles/news_thumb_square_md/public/photos/2024/09/275384430_10221805370265882_7921071881880463034_n.jpg?itok=1qpfEP_s', // You can add a headshot URL here later
      isFeatured: false,

      // Add any related publication IDs here if you have any in your publication service
      publicationIds: [],
    },
  ];

  // Fetch all researchers
  getAllResearchers(): Observable<Researcher[]> {
    return of(this.mockResearchers).pipe(delay(500)); // 500ms delay simulates network
  }

  // Fetch a single researcher by ID
  getResearcherById(id: string): Observable<Researcher | undefined> {
    return of(this.mockResearchers.find((r) => r.id === id)).pipe(delay(300));
  }
}
