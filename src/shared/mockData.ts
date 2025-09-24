const data = [
  {
    id: "q234324234234",
    employerName: "Встек",
    name: "HTML-верстальщик",
    experience: "between1And3",
    salary: {
      from: 100000,
      to: null,
    },
    workFormat: "ON_SITE",
    area: "Санкт-Петербург",
    requirement:
      "Что нужно от тебя: Уверенная верстка по макетам (Figma/PSD) — HTML5, CSS3, JS (базовый уровень). Опыт работы с...",
    responsibility: "Не указано",
  },
  {
    id: "q2343242342341",
    employerName: "СП Солюшен",
    name: "Frontend-разработчик React + Typescript",
    experience: "between1And3",
    salary: {
      from: null,
      to: null,
    },
    workFormat: "REMOTE",
    area: "Санкт-Петербург",
    requirement:
      "Уверенно владеешь React и понимаешь жизненный цикл компонентов, контекст и паттерны. Пишешь на TypeScript в продакшене, умеешь описывать типы и...",
    responsibility:
      "Участвовать в проектировании и разработке нового функционала для игровых продуктов. Поддерживать и оптимизировать существующие сервисы. Работать с современным стеком (React...",
  },
  {
    id: "q2343242342342",
    employerName: "Филиал в г. Санкт-Петербург АО Концерн Радиостроения Вега",
    name: "Frontend-разработчик",
    experience: "between3And6",
    salary: {
      from: null,
      to: null,
    },
    workFormat: "ON_SITE",
    area: "Санкт-Петербург",
    requirement:
      "Уверенное владение Vue/React от 2 лет. Опыт работы с OpenLayers обязательно. Понимание базовых принципов работы HTTP. Понимание принципов функционирования...",
    responsibility:
      "Разработка интеллектуальных систем. Участие в разработке и проектировании ПО для приема, обработки и визуализации данных с различных летательных аппаратов (материалы...",
  },
  {
    id: "q2343242342344",
    employerName: "KAMAZ DIGITAL",
    name: "Frontend-разработчик",
    experience: "between1And3",
    salary: {
      from: null,
      to: null,
    },
    workFormat: "HYBRID",
    area: "Санкт-Петербург",
    requirement:
      "От 2х лет опыта с любим из современных фреймворков (vue, angular, react, svelte). Знание Typescript на уровне написания типов...",
    responsibility:
      "Разрабатывать и поддерживать проект по управлению архитектурными и градостроительными решениями мегаполиса (3D).",
  },
  {
    id: "q2343242342345",
    employerName: "Fortech",
    name: "GO разработчик middle",
    experience: "between3And6",
    salary: {
      from: 180000,
      to: null,
    },
    workFormat: "Не указано",
    area: "Санкт-Петербург",
    requirement:
      "Глубокое знание Golang. - Опыт работы с реляционными базами данных MySQL, PostgreSQL. - Опыт работы с gRPC, Kafka, Redis. - Опыт работы с...",
    responsibility:
      "Разработка системы КЭДО. - Реализация продуктовых задач. - Code review и покрытие кода unit-тестами. - Желание развивать команду и делиться экспертизой.",
  },
  {
    id: "q2343242342346",
    employerName: "ИНДЕВЛАБС",
    name: "Frontend-разработчик React",
    experience: "between1And3",
    salary: {
      from: null,
      to: null,
    },
    workFormat: "REMOTE",
    area: "Санкт-Петербург",
    requirement:
      "Stack: React. Опыт работы с React (от 2 лет). Уверенное знание ES6-12. Опыт работы с Git. ",
    responsibility:
      "Material UI. Gitlab repositories and CI/CD. Поддерживать и улучшать существующие приложения. Писать автоматические тесты. Разрабатывать новый функционал. ",
  },
  {
    id: "q2343242342347",
    employerName: "Вайт Код",
    name: "Frontend Developer Junior+/Middle (React)",
    experience: "between3And6",
    salary: {
      from: null,
      to: null,
    },
    workFormat: "ON_SITE",
    area: "Санкт-Петербург",
    requirement:
      "Необходимые навыки: Опыт работы с библиотеками и фреймворками: React, Redux, Next JS. Хорошие знания JavaScript (работа с DOM,Fetch, Promise...",
    responsibility:
      "Создание интерфейсов на React (верстка компонентов). Разработка и сопровождение React-приложений разной сложности. Верстка статичных страниц (html/css/js). ",
  },
  {
    id: "q2343242342348",
    employerName: "Shtab",
    name: "Frontend-разработчик (Vue)",
    experience: "between3And6",
    salary: {
      from: null,
      to: null,
    },
    workFormat: "ON_SITE",
    area: "Санкт-Петербург",
    requirement:
      "Уверенные знания TypeScript, Vue 3, JavaScript, CSS, HTML. Умение профилировать и оптимизировать работу кода в браузере. Опыт работы в команде...",
    responsibility:
      "Разрабатывать новые функции в сервисе Shtab — уже есть роадмап на 3+ года, который проходит переприоретизацию каждый квартал. ",
  },
  {
    id: "q2343242342349",
    employerName: "Цифровая Лаборатория",
    name: "Junior Golang разработчик",
    experience: "noExperience",
    salary: {
      from: null,
      to: null,
    },
    workFormat: "HYBRID",
    area: "Санкт-Петербург",
    requirement:
      "Имеете опыт работы с Golang от 1 года. Имеете базовое понимание HTTP, REST, JSON. У вас есть опыт работы с...",
    responsibility:
      "Разрабатывать backend приложения на Golang. Интегрироваться с внешними системами и базами данных. Поддерживать и дорабатывать существующие микросервисы. Писать unit‑тесты...",
  },
  {
    id: "q2343242342340",
    employerName: "ЦИФРА",
    name: "C#/.NET-разработчик",
    experience: "between1And3",
    salary: {
      from: null,
      to: null,
    },
    workFormat: "REMOTE",
    area: "Санкт-Петербург",
    requirement:
      "C# (.NET Core). PostgreSQL. Протоколы HTTP/HTTPS. Многопоточность и асинхронность. Понимание принципов организации API (WebAPI, REST API). Понимание архитектуры ASP.NET. ",
    responsibility:
      "Разрабатывать программное обеспечение в соответствии с функциональными и архитектурными требованиями. Разрабатывать модульные тесты. Участвовать в анализе требований и проектировании решений.",
  },
];

export default data;
