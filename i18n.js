(function () {
  var PACKS = [
    // —— page / gallery titles ——
    { ru: "Лариса — концепции резюме", en: "Larisa — Resume Concepts", sr: "Larisa — koncepti CV-a" },
    { ru: "Лариса Слободянюк — Минимализм", en: "Larisa Slobodyanyuk — Minimal", sr: "Larisa Slobodjanjuk — Minimalizam" },
    { ru: "Лариса Слободянюк — Журнальный", en: "Larisa Slobodyanyuk — Editorial", sr: "Larisa Slobodjanjuk — Časopisni" },
    { ru: "Лариса Слободянюк — Гельветика", en: "Larisa Slobodyanyuk — Helvetica", sr: "Larisa Slobodjanjuk — Helvetica" },
    { ru: "Лариса Слободянюк — Таймлайн", en: "Larisa Slobodyanyuk — Timeline", sr: "Larisa Slobodjanjuk — Vremenska linija" },
    { ru: "Лариса Слободянюк — Клиника", en: "Larisa Slobodyanyuk — Clinical", sr: "Larisa Slobodjanjuk — Klinički" },
    { ru: "Лариса Слободянюк — Вечерний", en: "Larisa Slobodyanyuk — Evening", sr: "Larisa Slobodjanjuk — Večernji" },
    { ru: "Лариса Слободянюк — Шалфей", en: "Larisa Slobodyanyuk — Sage", sr: "Larisa Slobodjanjuk — Žalfija" },
    { ru: "Лариса Слободянюк — Индиго", en: "Larisa Slobodyanyuk — Indigo", sr: "Larisa Slobodjanjuk — Indigo" },
    { ru: "Лариса Слободянюк — Газетный", en: "Larisa Slobodyanyuk — Broadsheet", sr: "Larisa Slobodjanjuk — Novinski" },
    { ru: "Лариса Слободянюк — Сетка", en: "Larisa Slobodyanyuk — Grid", sr: "Larisa Slobodjanjuk — Mreža" },
    { ru: "Лариса Слободянюк — Портрет", en: "Larisa Slobodyanyuk — Portrait", sr: "Larisa Slobodjanjuk — Portret" },
    { ru: "Лариса Слободянюк — Лаборатория", en: "Larisa Slobodyanyuk — Laboratory", sr: "Larisa Slobodjanjuk — Laboratorija" },
    { ru: "Лариса Слободянюк — резюме", en: "Larisa Slobodyanyuk — CV", sr: "Larisa Slobodjanjuk — CV" },

    // —— gallery copy ——
    { ru: "Двенадцать визуальных направлений, один и тот же текст. Нажмите на карточку, чтобы открыть страницу. Каждая страница готова к печати (A4).", en: "Twelve visual directions, the same content. Click any card to open the full page. Each page is print-ready in A4 format.", sr: "Dvanaest vizuelnih koncepata, isti sadržaj. Kliknite na karticu da biste otvorili celu stranicu. Svaka stranica je spremna za štampu na formatu A4." },
    { ru: "Минимализм", en: "Minimal", sr: "Minimalizam" },
    { ru: "Журнальный", en: "Editorial", sr: "Časopisni" },
    { ru: "Гельветика", en: "Helvetica", sr: "Helvetica" },
    { ru: "Таймлайн", en: "Timeline", sr: "Vremenska linija" },
    { ru: "Клиника", en: "Clinical", sr: "Klinički" },
    { ru: "Вечерний", en: "Evening", sr: "Večernji" },
    { ru: "Чёрно-белая типографика, один шрифт (Inter), табличные даты, цветное фото. Без декора.", en: "Black and white typography, one typeface (Inter), tabular dates, and a colour photo. No decoration.", sr: "Crno-bela tipografija, jedan font (Inter), datumi tabularnim ciframa i fotografija u boji. Bez dekoracije." },
    { ru: "Тёплая бумага, антиква Cormorant Garamond, терракотовые акценты, фото в рамке. Боковая колонка справа.", en: "Warm paper, Cormorant Garamond serif, terracotta accents, framed photo. Sidebar on the right.", sr: "Topla hartija, serif Cormorant Garamond, terakota akcenti, fotografija u ramu. Bočna kolona desno." },
    { ru: "Швейцарский плакатный стиль: ультрамариновый блок, Archivo 900 капителью, нумерованные разделы, квадратная рамка фото.", en: "Swiss poster style: an ultramarine block, Archivo 900 capitals, numbered sections, and a photo in a square frame.", sr: "Švajcarski plakatni stil: ultramarin blok, verzalna slova u fontu Archivo 900, numerisani odeljci i fotografija u kvadratnom okviru." },
    { ru: "Центрированный заголовок с круглым фото, карьера одной непрерывной линией, обследования в мягкой боковой панели.", en: "Centered header with a round photo, the career shown as one continuous timeline, and examinations in a subtle side panel.", sr: "Centrirano zaglavlje sa okruglom fotografijom, karijera prikazana kao neprekidna vremenska linija i pregledi u diskretnom bočnom panelu." },
    { ru: "Современные медицинские карточки на мятном фоне, IBM Plex, обследования облаком тегов внизу.", en: "Modern healthcare cards on a mint background, IBM Plex, and examinations shown as a cloud of pill-shaped tags along the bottom.", sr: "Moderne medicinske kartice na pozadini boje mente, IBM Plex i pregledi prikazani kao oblak oznaka u obliku kapsula pri dnu." },
    { ru: "Угольная панель на всю высоту с золотыми акцентами, Cormorant + Jost, крупное фото в кольце. Ближе всего к оригиналу, но сильнее.", en: "A full-height charcoal panel with gold accents, Cormorant + Jost, and a large photo in a circular frame. Closest in spirit to the original, but bolder.", sr: "Tamnosivi panel preko cele visine sa zlatnim akcentima, Cormorant + Jost i velika fotografija u kružnom okviru. Najbliže originalu, ali smelije." },
    { ru: "Шалфей", en: "Sage", sr: "Žalfija" },
    { ru: "Индиго", en: "Indigo", sr: "Indigo" },
    { ru: "Газетный", en: "Broadsheet", sr: "Novinski" },
    { ru: "Сетка", en: "Grid", sr: "Mreža" },
    { ru: "Портрет", en: "Portrait", sr: "Portret" },
    { ru: "Лаборатория", en: "Laboratory", sr: "Laboratorija" },
    { ru: "Светло-зелёная боковая панель с фото во всю ширину, Fraunces + DM Sans. Имя и опыт — в белой части.", en: "Pale sage sidebar with a full-width photo, Fraunces + DM Sans. Name and career on the white side.", sr: "Bledozelena bočna traka sa fotografijom preko cele širine, Fraunces + DM Sans. Ime i karijera na beloj strani." },
    { ru: "Тёмно-синяя шапка с фото на всю высоту у правого края, Playfair Display, золотые линии. Обследования в светлой колонке слева.", en: "Navy header with a full-height photo on the right edge, Playfair Display, gold rules. Exams in a pale left column.", sr: "Tamnoplavo zaglavlje sa fotografijom pune visine uz desnu ivicu, Playfair Display, zlatne linije. Pregledi u svetloj levoj koloni." },
    { ru: "Газетная вёрстка: шапка с двойными линиями, Libre Baskerville, текст колонками, фото с подписью.", en: "Newspaper layout: double-ruled masthead, Libre Baskerville, columns of text, captioned photo.", sr: "Novinski prelom: zaglavlje sa dvostrukim linijama, Libre Baskerville, tekst u kolonama, fotografija sa potpisom." },
    { ru: "Жёсткая сетка с чёрными линиями, Space Grotesk, кислотно-жёлтая ячейка с именем, фото в отдельной ячейке.", en: "Hard grid with black rules, Space Grotesk, acid-yellow name cell, photo in its own cell.", sr: "Stroga mreža sa crnim linijama, Space Grotesk, kiselo-žuto polje sa imenom, fotografija u zasebnom polju." },
    { ru: "Крупное портретное фото на кремовой бумаге, Bodoni Moda, бордовые акценты, обследования и образование внизу.", en: "Large portrait photo on cream paper, Bodoni Moda, burgundy accents, exams and education across the bottom.", sr: "Velika portretna fotografija na krem papiru, Bodoni Moda, bordo akcenti, pregledi i obrazovanje u donjem delu." },
    { ru: "Лабораторный стиль: моноширинные подписи JetBrains Mono, нумерованные обследования, фото с уголками, бирюзовый акцент.", en: "Lab style: JetBrains Mono labels, numbered examinations, corner-bracketed photo, teal accent.", sr: "Laboratorijski stil: JetBrains Mono oznake, numerisani pregledi, fotografija sa uglovima, tirkizni akcenat." },
    { ru: "Скачать PDF", en: "Download PDF", sr: "Preuzmi PDF" },

    // —— identity ——
    { ru: "Лариса Слободянюк", en: "Larisa Slobodyanyuk", sr: "Larisa Slobodjanjuk" },
    { ru: "ЛАРИСА", en: "LARISA", sr: "LARISA" },
    { ru: "СЛОБОДЯНЮК", en: "SLOBODYANYUK", sr: "SLOBODJANJUK" },
    { ru: "Лариса", en: "Larisa", sr: "Larisa" },
    { ru: "Слободянюк", en: "Slobodyanyuk", sr: "Slobodjanjuk" },
    { ru: "Фото", en: "Photo", sr: "Foto" },

    { ru: "Кандидат медицинских наук · Врач ультразвуковой диагностики", en: "Candidate of Medical Sciences · Physician specializing in ultrasound diagnostics", sr: "Kandidat medicinskih nauka · Lekar ultrazvučne dijagnostike" },
    { ru: "Кандидат медицинских наук — врач ультразвуковой диагностики", en: "Candidate of Medical Sciences — physician specializing in ultrasound diagnostics", sr: "Kandidat medicinskih nauka — lekar ultrazvučne dijagnostike" },
    { ru: "Кандидат медицинских наук · Врач УЗД", en: "Candidate of Medical Sciences · Ultrasound physician", sr: "Kandidat medicinskih nauka · Lekar UZ dijagnostike" },
    { ru: "Кандидат медицинских наук", en: "Candidate of Medical Sciences", sr: "Kandidat medicinskih nauka" },
    { ru: "Врач ультразвуковой диагностики", en: "Physician specializing in ultrasound diagnostics", sr: "Lekar ultrazvučne dijagnostike" },

    // —— section headings ——
    { ru: "Провожу обследования", en: "Examinations I perform", sr: "Pregledi koje radim" },
    { ru: "Провожу", en: "I perform", sr: "Radim" },
    { ru: "обследования", en: "examinations", sr: "preglede" },
    { ru: "Опыт работы", en: "Work experience", sr: "Radno iskustvo" },
    { ru: "Образование", en: "Education", sr: "Obrazovanje" },
    { ru: "Контакты", en: "Contact", sr: "Kontakt" },
    { ru: "Обследования", en: "Examinations", sr: "Pregledi" },
    { ru: "Адрес", en: "Address", sr: "Adresa" },
    { ru: "Телефон", en: "Phone", sr: "Telefon" },

    { ru: "Москва, Сокольнический Вал 1, кв. 444", en: "Moscow, Sokolnichesky Val 1, apt. 444", sr: "Moskva, Sokolničeski Val 1, stan 444" },

    // —— exams ——
    { ru: "УЗИ органов брюшной полости", en: "Abdominal ultrasound", sr: "Ultrazvuk organa trbušne duplje" },
    { ru: "УЗИ почек и надпочечников", en: "Ultrasound of the kidneys and adrenal glands", sr: "Ultrazvuk bubrega i nadbubrežnih žlezda" },
    { ru: "УЗИ органов малого таза женщин (трансабдом. и ТВУЗИ с ЦДК)", en: "Pelvic ultrasound for women (transabdominal and transvaginal, with color Doppler)", sr: "Ultrazvuk organa male karlice kod žena (transabdominalno i transvaginalno, sa kolor doplerom)" },
    { ru: "УЗИ беременности 1 триместр", en: "First-trimester pregnancy ultrasound", sr: "Ultrazvuk trudnoće u prvom trimestru" },
    { ru: "УЗИ — фолликулометрия", en: "Ultrasound — folliculometry", sr: "Ultrazvuk — folikulometrija" },
    { ru: "УЗИ молочной железы", en: "Breast ultrasound", sr: "Ultrazvuk dojke" },
    { ru: "УЗИ щитовидной железы", en: "Thyroid ultrasound", sr: "Ultrazvuk štitaste žlezde" },
    { ru: "УЗИ мочевого пузыря", en: "Bladder ultrasound", sr: "Ultrazvuk mokraćne bešike" },
    { ru: "УЗИ предстательной железы", en: "Prostate ultrasound", sr: "Ultrazvuk prostate" },
    { ru: "УЗИ мошонки", en: "Scrotal ultrasound", sr: "Ultrazvuk skrotuma" },
    { ru: "УЗИ шейного и поясничного отдела позвоночника", en: "Ultrasound of the cervical and lumbar regions of the spine", sr: "Ultrazvuk vratnog i lumbalnog dela kičme" },
    { ru: "УЗИ тазобедренных суставов детей", en: "Pediatric hip ultrasound", sr: "Ultrazvuk kukova kod dece" },
    { ru: "УЗИ голеностопных суставов", en: "Ankle ultrasound", sr: "Ultrazvuk skočnih zglobova" },
    { ru: "УЗИ локтевых суставов", en: "Elbow ultrasound", sr: "Ultrazvuk lakatnih zglobova" },
    { ru: "УЗИ лучезапястных суставов", en: "Wrist ultrasound", sr: "Ultrazvuk ručnih zglobova" },
    { ru: "УЗИ мягких тканей", en: "Soft-tissue ultrasound", sr: "Ultrazvuk mekih tkiva" },
    { ru: "УЗИ коленных суставов", en: "Knee ultrasound", sr: "Ultrazvuk kolenskih zglobova" },
    { ru: "УЗИ экстракраниальных сосудов", en: "Extracranial vascular ultrasound", sr: "Ultrazvuk ekstrakranijalnih krvnih sudova" },
    { ru: "УЗИ вен нижних конечностей", en: "Ultrasound of the lower-limb veins", sr: "Ultrazvuk vena donjih ekstremiteta" },
    { ru: "УЗИ навигация при биопсиях и пункциях", en: "Ultrasound guidance for biopsies and other needle procedures", sr: "Ultrazvučno vođenje biopsija i punkcija" },
    { ru: "УЗИ контроль инвазивных процедур", en: "Ultrasound monitoring during invasive procedures", sr: "Ultrazvučna kontrola tokom invazivnih procedura" },
    { ru: "УЗИ в косметологии", en: "Ultrasound in aesthetic medicine", sr: "Ultrazvuk u kozmetologiji" },

    // —— dates ——
    { ru: "2021 г. – настоящее время", en: "2021 – present", sr: "2021 – danas" },
    { ru: "2020 – 2021 гг.", en: "2020 – 2021", sr: "2020 – 2021." },
    { ru: "2019 – 2020 гг.", en: "2019 – 2020", sr: "2019 – 2020." },
    { ru: "2017 – 2019 гг.", en: "2017 – 2019", sr: "2017 – 2019." },
    { ru: "1999 – 2017 гг.", en: "1999 – 2017", sr: "1999 – 2017." },
    { ru: "1986 – 1998 гг.", en: "1986 – 1998", sr: "1986 – 1998." },
    { ru: "2024 – 2025 гг.", en: "2024 – 2025", sr: "2024 – 2025." },
    { ru: "1999 – 2019 гг.", en: "1999 – 2019", sr: "1999 – 2019." },
    { ru: "2001 – 2003 гг.", en: "2001 – 2003", sr: "2001 – 2003." },
    { ru: "2007 – 2011 гг.", en: "2007 – 2011", sr: "2007 – 2011." },
    { ru: "1979 – 1985 гг.", en: "1979 – 1985", sr: "1979 – 1985." },
    { ru: "2016 г.", en: "2016", sr: "2016." },
    { ru: "2005 г.", en: "2005", sr: "2005." },
    { ru: "1998 г.", en: "1998", sr: "1998." },
    { ru: "1986 г.", en: "1986", sr: "1986." },

    // —— jobs (clinic names kept; descriptive words translated) ——
    { ru: "Врач УЗД", en: "Ultrasound physician", sr: "Lekar UZ dijagnostike" },
    { ru: "Врач акушер-гинеколог", en: "Obstetrician-gynecologist", sr: "Ginekolog-akušer" },
    { ru: "— «Клиника лечения позвоночника и суставов доктора Длина», Москва", en: "— Dr. Dlin Clinic for Spine and Joint Treatment, Moscow", sr: "— Klinika za lečenje kičme i zglobova doktora Dlina, Moskva" },
    { ru: "— ООО «Клиника Центральная», Москва", en: "— Tsentralnaya Clinic LLC, Moscow", sr: "— Klinika Centralnaja d.o.o., Moskva" },
    { ru: "— «Центравиамед», Москва", en: "— Tsentraviamed, Moscow", sr: "— Centraviamed, Moskva" },
    { ru: "— Лечебно-реабилитационный центр «Открытая клиника», Москва", en: "— Otkrytaya Klinika Medical Rehabilitation Center, Moscow", sr: "— Medicinsko-rehabilitacioni centar „Otvorena klinika“, Moskva" },
    { ru: "— «Клиника профессора Кинзерского А.Ю.», Челябинск", en: "— Professor A.Yu. Kinzerskiy Clinic, Chelyabinsk", sr: "— Klinika profesora A. Ju. Kinzerskog, Čeljabinsk" },

    // —— education ——
    { ru: "Являюсь автором", en: "Author of", sr: "Autorka" },
    { ru: "более 20 статей и 1 патента", en: "more than 20 articles and one patent", sr: "više od 20 radova i jednog patenta" },
    { ru: "на изобретение", en: "for an invention", sr: "za pronalazak" },
    { ru: "Первый Московский государственный медицинский университет им. И.М. Сеченова, «Биохакинг» — диплом о профессиональной переподготовке с предоставлением права на ведение профессиональной деятельности в сфере «консультирование в области превентивного персонализированного управления здоровьем»", en: "I.M. Sechenov First Moscow State Medical University, “Biohacking” — professional retraining diploma conferring the right to work in “preventive, personalized health management consulting”", sr: "Prvi moskovski državni medicinski univerzitet I. M. Sečenova, „Biohaking“ — diploma o stručnoj prekvalifikaciji koja daje pravo na rad u oblasti „savetovanja o preventivnom, personalizovanom upravljanju zdravljem“" },
    { ru: "Сертификат о прохождении обучения «Нюансы в теле человека. Функциональная неврология»", en: "Certificate of completion: “Nuances in the Human Body. Functional Neurology”", sr: "Sertifikat o završenoj obuci „Nijanse u ljudskom telu. Funkcionalna neurologija“" },
    { ru: "Регулярное прохождение сертификационных курсов и курсов повышения квалификации по специальности — врач УЗД", en: "Regular completion of certification and continuing education courses in ultrasound diagnostics", sr: "Redovno pohađanje sertifikacionih kurseva i kurseva stručnog usavršavanja za lekara UZ dijagnostike" },
    { ru: "Обучение в рамках реализации модели отработки основных принципов непрерывного медицинского образования и получение зачётных единиц, обеспеченных Российской ассоциацией УЗД в медицине (РАСУДМ), с индивидуальным кодом подтверждения", en: "Training under the continuing medical education model, with CME credits issued by the Russian Association of Specialists in Ultrasound Diagnostics in Medicine (RASUDM) and an individual confirmation code", sr: "Obuka po modelu kontinuirane medicinske edukacije i sticanje kreditnih poena koje dodeljuje Ruska asocijacija specijalista UZ dijagnostike u medicini (RASUDM), uz individualni kod za potvrdu" },
    { ru: "Регулярное участие во всероссийских конгрессах и мастер-классах по УЗД", en: "Regular participation in Russian national congresses and workshops in ultrasound diagnostics", sr: "Redovno učešće na ruskim nacionalnim kongresima i stručnim radionicama iz UZ dijagnostike" },
    { ru: "Клиническая ординатура на кафедре лучевой диагностики и лучевой терапии с курсом УЗД УГМАДО", en: "Clinical residency in the Department of Radiology and Radiotherapy, including ultrasound diagnostics, at UGMADO", sr: "Klinička specijalizacija na katedri za radiološku dijagnostiku i radioterapiju, sa kursom UZ dijagnostike, na UGMADO" },
    { ru: "Ассистент кафедры УЗД УГМАДО (г. Челябинск), ведущий специалист по преподаванию сертификационного курса УЗД позвоночника", en: "Assistant in the Department of Ultrasound Diagnostics at UGMADO (Chelyabinsk); lead instructor for the certification course in spinal ultrasound", sr: "Asistent na katedri za UZ dijagnostiku UGMADO (Čeljabinsk), vodeći predavač na sertifikacionom kursu iz UZ dijagnostike kičme" },
    { ru: "Решением диссертационного совета Российского центра рентгенорадиологии присуждена учёная степень кандидата медицинских наук", en: "Awarded the degree of Candidate of Medical Sciences by the dissertation council of the Russian Scientific Center of Roentgenoradiology", sr: "Stečeno zvanje kandidata medicinskih nauka odlukom disertacionog saveta Ruskog naučnog centra za rendgenradiologiju" },
    { ru: "Первичная специализация и присвоение специальности врача УЗД", en: "Initial specialization and qualification as an ultrasound physician", sr: "Primarna specijalizacija i sticanje specijalnosti lekara UZ dijagnostike" },
    { ru: "Интернатура по специальности акушерство и гинекология, присвоена квалификация акушера-гинеколога", en: "Internship in obstetrics and gynecology; qualified as an obstetrician-gynecologist", sr: "Pripravnički staž iz akušerstva i ginekologije; stečena kvalifikacija ginekologa-akušera" },
    { ru: "Волгоградская государственная медицинская академия, специальность — лечебное дело", en: "Volgograd State Medical Academy, specialty — General Medicine", sr: "Volgogradska državna medicinska akademija, smer — opšta medicina" }
  ];

  var LANGS = [
    { id: "ru", label: "Русский", title: "Русский" },
    { id: "sr", label: "Srpski", title: "Srpski" },
    { id: "en", label: "English", title: "English" }
  ];

  var FLAGS = {
    ru: '<svg viewBox="0 0 9 6" aria-hidden="true"><rect width="9" height="2" y="0" fill="#fff"/><rect width="9" height="2" y="2" fill="#0039a6"/><rect width="9" height="2" y="4" fill="#d52b1e"/></svg>',
    sr: '<svg viewBox="0 0 9 6" aria-hidden="true"><rect width="9" height="2" y="0" fill="#c6363c"/><rect width="9" height="2" y="2" fill="#0c4076"/><rect width="9" height="2" y="4" fill="#fff"/></svg>',
    en: '<svg viewBox="0 0 60 30" aria-hidden="true"><clipPath id="i18n-uk"><rect width="60" height="30"/></clipPath><g clip-path="url(#i18n-uk)"><rect width="60" height="30" fill="#012169"/><path d="M0,0 60,30 M60,0 0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 60,30 M60,0 0,30" stroke="#C8102E" stroke-width="2"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/></g></svg>'
  };

  var SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEXTAREA: 1 };

  function norm(s) {
    return String(s).replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim();
  }

  var byNorm = Object.create(null);
  PACKS.forEach(function (p) {
    ["ru", "en", "sr"].forEach(function (lang) {
      var key = norm(p[lang]);
      if (key) byNorm[key] = p;
    });
  });

  function translateString(raw, lang) {
    if (raw == null) return raw;
    var lead = raw.match(/^\s*/)[0];
    var tail = raw.match(/\s*$/)[0];
    var core = raw.slice(lead.length, raw.length - tail.length);
    if (!core) return raw;
    var hit = byNorm[norm(core)];
    if (hit) return lead + hit[lang] + tail;
    return raw;
  }

  function walk(node, lang) {
    if (node.nodeType === 3) {
      var next = translateString(node.nodeValue, lang);
      if (next !== node.nodeValue) node.nodeValue = next;
      return;
    }
    if (node.nodeType !== 1) return;
    if (SKIP[node.tagName]) return;
    if (node.classList && node.classList.contains("i18n-bar")) return;
    ["alt", "title", "aria-label"].forEach(function (attr) {
      if (node.hasAttribute && node.hasAttribute(attr)) {
        node.setAttribute(attr, translateString(node.getAttribute(attr), lang));
      }
    });
    var child = node.firstChild;
    while (child) {
      var nxt = child.nextSibling;
      walk(child, lang);
      child = nxt;
    }
  }

  var PAGE_W = 794;
  var PDF_LABEL = { ru: "Скачать PDF", en: "Download PDF", sr: "Preuzmi PDF" };
  var PDF_ICON =
    '<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8.5 1.5a.5.5 0 0 0-1 0V9.3L5.35 7.15a.5.5 0 1 0-.7.7l3 3a.5.5 0 0 0 .7 0l3-3a.5.5 0 1 0-.7-.7L8.5 9.3V1.5zM3 12.5A1.5 1.5 0 0 0 4.5 14h7a1.5 1.5 0 0 0 1.5-1.5V11a.5.5 0 0 0-1 0v1.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5V11a.5.5 0 0 0-1 0v1.5z"/></svg>';

  function isPreview() {
    try {
      if (window.self !== window.top) return true;
    } catch (e) {
      return true;
    }
    return /(?:\?|&)preview=1(?:&|$)/.test(location.search);
  }

  function scaleThumbs() {
    [].forEach.call(document.querySelectorAll(".thumb iframe"), function (frame) {
      var parent = frame.parentElement;
      if (!parent) return;
      var w = parent.clientWidth;
      if (!w) return;
      frame.style.transform = "scale(" + w / PAGE_W + ")";
    });
  }

  function notifyPreviews(lang) {
    if (window !== window.top) return;
    [].forEach.call(document.querySelectorAll(".thumb iframe"), function (frame) {
      try {
        if (frame.contentWindow) {
          frame.contentWindow.postMessage({ type: "resume-lang", lang: lang }, "*");
        }
      } catch (e) {}
    });
  }

  function apply(lang) {
    if (LANGS.every(function (l) { return l.id !== lang; })) lang = "ru";
    try { localStorage.setItem("resume-lang", lang); } catch (e) {}
    document.documentElement.lang = lang === "sr" ? "sr" : lang;
    document.title = translateString(document.title, lang);
    walk(document.body, lang);
    var bar = document.querySelector(".i18n-bar");
    if (bar) {
      [].forEach.call(bar.querySelectorAll("button[data-lang]"), function (btn) {
        btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
      });
    }
    notifyPreviews(lang);
    syncPdfLabels(lang);
  }

  function syncPdfLabels(lang) {
    var label = PDF_LABEL[lang] || PDF_LABEL.ru;
    [].forEach.call(document.querySelectorAll(".pdf-dl, .i18n-pdf"), function (btn) {
      var span = btn.querySelector(".pdf-label");
      if (span) span.textContent = label;
      btn.setAttribute("aria-label", label);
      btn.setAttribute("title", label);
    });
  }

  function printResume(win) {
    var target = win || window;
    try {
      target.focus();
    } catch (e) {}
    try {
      target.print();
    } catch (e) {
      if (target !== window) window.print();
    }
  }

  function downloadFromFrame(frame) {
    if (!frame) return;
    function go() {
      try {
        if (frame.contentWindow) printResume(frame.contentWindow);
      } catch (e) {
        var src = frame.getAttribute("src") || "";
        window.open(src.replace(/\?preview=1/, ""), "_blank");
      }
    }
    var doc = null;
    try { doc = frame.contentDocument; } catch (e) {}
    if (doc && doc.readyState === "complete" && doc.querySelector(".page")) {
      go();
      return;
    }
    frame.addEventListener("load", go, { once: true });
    try { frame.loading = "eager"; } catch (e) {}
  }

  function current() {
    try {
      var saved = localStorage.getItem("resume-lang");
      if (saved) return saved;
    } catch (e) {}
    var htmlLang = (document.documentElement.lang || "").toLowerCase();
    if (htmlLang.indexOf("en") === 0) return "en";
    if (htmlLang.indexOf("sr") === 0) return "sr";
    return "ru";
  }

  function injectBar() {
    if (document.querySelector(".i18n-bar")) return;
    var style = document.createElement("style");
    style.textContent =
      "html{scroll-padding-top:52px}" +
      ".i18n-bar{position:fixed;top:0;left:0;right:0;z-index:400;display:flex;align-items:center;gap:8px;" +
      "padding:8px 14px;background:rgba(23,26,31,.92);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);" +
      "border-bottom:1px solid rgba(255,255,255,.08);font-family:Manrope,Inter,'Segoe UI',system-ui,sans-serif}" +
      ".i18n-langs{display:flex;gap:6px;margin-left:auto}" +
      ".i18n-bar button{display:inline-flex;align-items:center;gap:8px;border:1px solid transparent;background:transparent;" +
      "color:#e8eaee;border-radius:999px;padding:5px 11px 5px 7px;cursor:pointer;font:600 12px/1 inherit;letter-spacing:.02em}" +
      ".i18n-bar button:hover{background:rgba(255,255,255,.08)}" +
      ".i18n-bar button[aria-pressed='true']{background:#fff;color:#171a1f;border-color:#fff}" +
      ".i18n-bar svg{width:18px;height:12px;border-radius:2px;box-shadow:0 0 0 1px rgba(0,0,0,.25);flex:0 0 auto;display:block}" +
      ".i18n-pdf{border-color:rgba(255,255,255,.18)!important;gap:6px!important}" +
      ".i18n-pdf svg{width:14px;height:14px;border-radius:0;box-shadow:none}" +
      "body{padding-top:52px !important}" +
      "@media print{.i18n-bar{display:none !important}html{scroll-padding-top:0}body{padding-top:0 !important}}";
    document.head.appendChild(style);

    var bar = document.createElement("div");
    bar.className = "i18n-bar";
    bar.setAttribute("role", "navigation");
    bar.setAttribute("aria-label", "Language");

    if (document.querySelector(".page")) {
      var pdf = document.createElement("button");
      pdf.type = "button";
      pdf.className = "i18n-pdf";
      pdf.innerHTML = PDF_ICON + '<span class="pdf-label">Download PDF</span>';
      pdf.addEventListener("click", function () { printResume(window); });
      bar.appendChild(pdf);
    }

    var langs = document.createElement("div");
    langs.className = "i18n-langs";
    LANGS.forEach(function (l) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("data-lang", l.id);
      btn.setAttribute("title", l.title);
      btn.innerHTML = FLAGS[l.id] + "<span>" + l.label + "</span>";
      btn.addEventListener("click", function () { apply(l.id); });
      langs.appendChild(btn);
    });
    bar.appendChild(langs);
    document.body.insertBefore(bar, document.body.firstChild);
  }

  function injectPreview() {
    document.documentElement.classList.add("preview");
    var style = document.createElement("style");
    style.textContent =
      "html.preview,html.preview body{padding:0!important;margin:0!important;min-height:0!important;" +
      "width:" + PAGE_W + "px!important;height:1123px!important;overflow:hidden!important;display:block!important}" +
      "html.preview .i18n-bar{display:none!important}" +
      "html.preview .page{margin:0!important;box-shadow:none!important}" +
      "@media print{html.preview,html.preview body{width:auto!important;height:auto!important;overflow:visible!important;" +
      "background:#fff!important}html.preview .page{width:210mm!important;height:297mm!important}}";
    document.head.appendChild(style);
  }

  function boot() {
    var preview = isPreview();
    if (preview) injectPreview();
    else injectBar();
    apply(current());
    window.addEventListener("storage", function (e) {
      if (e.key === "resume-lang" && e.newValue) apply(e.newValue);
    });
    window.addEventListener("message", function (e) {
      if (e.data && e.data.type === "resume-lang" && e.data.lang) apply(e.data.lang);
      if (e.data && e.data.type === "resume-pdf") printResume(window);
    });
    if (!preview) {
      scaleThumbs();
      window.addEventListener("resize", scaleThumbs);
      [].forEach.call(document.querySelectorAll(".thumb iframe"), function (frame) {
        frame.addEventListener("load", scaleThumbs);
      });
      document.addEventListener("click", function (e) {
        var btn = e.target.closest && e.target.closest(".pdf-dl");
        if (!btn) return;
        e.preventDefault();
        e.stopPropagation();
        var card = btn.closest(".card");
        downloadFromFrame(card && card.querySelector("iframe"));
      });
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
