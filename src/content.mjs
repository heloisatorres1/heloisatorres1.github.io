/**
 * All visible text, in both languages. Copy follows the verified content: nothing here
 * should claim more than the résumé or the public repositories show.
 */

export const LINKS = {
  linkedin: 'https://www.linkedin.com/in/heloisa-torres-94250814a',
  github: 'https://github.com/heloisatorres1',
};

export const LOCALES = {
  en: {
    lang: 'en',
    label: 'English',
    title: 'Heloisa Oller Torres · QA Test Lead / Senior QA',
    description:
      'Portfolio of Heloisa Oller Torres, QA Test Lead and Senior QA with 6+ years in game QA: experience, games worked on, and public QA projects.',
    skip: 'Skip to content',
    nav: { label: 'Sections', about: 'About', experience: 'Experience', projects: 'Projects', contact: 'Contact' },
    langSwitch: 'Language',
    hero: {
      eyebrow: 'QA Test Lead / Senior QA',
      headline: 'I help teams deliver quality experiences.',
      intro:
        "I'm Heloisa, a QA Test Lead and Senior QA with 6+ years in game QA, bringing team leadership, hands-on testing and automation to games and software.",
      explore: 'Explore my work',
      resume: 'Download résumé',
      resumeFile: 'resume/resume-heloisa-oller-torres-en.pdf',
      resumeHint: 'PDF, English',
      portraitAlt: 'Heloisa Oller Torres',
      expertiseLabel: 'Expertise',
      expertise: ['QA leadership', 'Exploratory testing', 'Automation', 'Performance', 'ISTQB CTFL'],
    },
    experience: {
      heading: 'Experience',
      jobs: [
        { company: 'Fortis Games', role: 'Test Lead', dates: 'Mar 2022 – Nov 2026', start: '2022-03', end: '2026-11', summary: 'Led internal and external QA teams, defined test strategy and supported releases with clear evidence.' },
        { company: 'Oktagon Games', role: 'Assistant QA (Lead)', dates: 'Jan 2020 – Mar 2022', start: '2020-01', end: '2022-03', summary: 'Tested games from development to launch, contributing test cases, exploratory testing and actionable bug reports.' },
        { company: 'Veltec Soluções Tecnológicas', role: 'IT Intern', dates: 'Dec 2018 – Dec 2019', start: '2018-12', end: '2019-12' },
      ],
      education: 'Systems Analysis and Development, Instituto Federal do Paraná (2017–2019) · ISTQB Certified Tester Foundation Level',
      languages: 'Portuguese (native) · English (fluent) · Spanish (basic)',
    },
    games: {
      heading: 'Games I worked on',
      caption: 'QA contributions at Oktagon Games.',
    },
    personal: {
      eyebrow: 'Beyond QA',
      heading: 'A player first. A tester by curiosity.',
      text: 'Games have been part of my life since childhood. That curiosity is still part of how I explore, learn and test.',
      lunaAlt: "Luna, Heloisa's brown dog, looking up at the camera",
    },
    projects: {
      heading: 'Projects you can explore',
      note: 'Personal projects, built with AI-assisted development under my QA direction. They are not products of, or endorsed by, any former employer.',
      source: 'Source code',
      opensNew: '(opens in a new tab)',
      thumbAlt: (name) => `Screenshot of ${name}`,
      items: {
        'pixel-swarm': { blurb: 'A playable puzzle game with QA built in, from game design and test strategy to reproducible bug evidence.', label: 'Game + QA', tags: ['Game design', 'Test strategy'], primary: 'Play demo' },
        'qa-workspace': { blurb: 'A QA workspace for findings, test runs and release recommendations backed by evidence.', label: 'Mock integrations', tags: ['Workflow design', 'Release decisions'], primary: 'View demo' },
        'performance-lab': { blurb: 'Explore performance sessions, synchronized telemetry and screenshots, comparisons and reports.', label: 'Simulated telemetry', tags: ['Performance analysis', 'Reporting'], primary: 'View demo' },
        'game-qa-skills': { blurb: 'Evidence-driven game QA workflows with reproducible findings, screenshots, video and example reports.', label: 'AI-assisted QA workflows', tags: ['Bug evidence', 'Test reports'], primary: 'View reports' },
      },
    },
    featured: {
      status: 'Published · runs every night',
      headline: 'From test strategy to reproducible web testing.',
      text: 'A web and API testing project on four public systems: test plan, exploratory testing and traceable test cases; Playwright automation in four browsers; API tests in Postman and Playwright, checked against the Swagger contract; Gherkin scenarios; and a CI pipeline that publishes the report.',
      facts: [
        ['379', 'automated checks per run'],
        ['11', 'defects documented with evidence'],
        ['4', 'systems under test'],
      ],
      tags: ['Playwright · TypeScript', 'Postman · API', 'BDD · CI'],
      primary: 'Project page',
      report: 'Test report',
      thumbAlt: 'Bug reports from Web Testing Lab, each with a screenshot of the defect',
    },
    contact: {
      heading: "Let's talk about quality.",
      text: 'The best way to reach me is LinkedIn. My public work is on GitHub.',
    },
    footer: 'Static site, no tracking.',
    notFound: { title: 'Page not found', text: "This page doesn't exist. The portfolio is one page away.", back: 'Go to the portfolio' },
  },

  'pt-BR': {
    lang: 'pt-BR',
    label: 'Português (BR)',
    title: 'Heloisa Oller Torres · QA Test Lead / Senior QA',
    description:
      'Portfólio de Heloisa Oller Torres, QA Test Lead e Senior QA com mais de 6 anos em QA de jogos: experiência, jogos em que trabalhou e projetos públicos de QA.',
    skip: 'Pular para o conteúdo',
    nav: { label: 'Seções', about: 'Sobre', experience: 'Experiência', projects: 'Projetos', contact: 'Contato' },
    langSwitch: 'Idioma',
    hero: {
      eyebrow: 'QA Test Lead / Senior QA',
      headline: 'Ajudo equipes a entregar experiências de qualidade.',
      intro:
        'Sou Heloisa, QA Test Lead e Senior QA com mais de 6 anos em QA de jogos, aplicando liderança, testes práticos e automação em jogos e software.',
      explore: 'Conheça meu trabalho',
      resume: 'Baixar currículo',
      resumeFile: 'resume/curriculo-heloisa-oller-torres-pt-BR.pdf',
      resumeHint: 'PDF, português',
      portraitAlt: 'Heloisa Oller Torres',
      expertiseLabel: 'Especialidades',
      expertise: ['Liderança de QA', 'Testes exploratórios', 'Automação', 'Performance', 'ISTQB CTFL'],
    },
    experience: {
      heading: 'Experiência',
      jobs: [
        { company: 'Fortis Games', role: 'Test Lead', dates: 'mar. 2022 – nov. 2026', start: '2022-03', end: '2026-11', summary: 'Liderei equipes internas e externas de QA, defini estratégias de teste e apoiei entregas com evidências claras.' },
        { company: 'Oktagon Games', role: 'Assistant QA (Lead)', dates: 'jan. 2020 – mar. 2022', start: '2020-01', end: '2022-03', summary: 'Testei jogos do desenvolvimento ao lançamento, contribuindo com casos de teste, testes exploratórios e relatos de bugs claros.' },
        { company: 'Veltec Soluções Tecnológicas', role: 'Estagiária de TI', dates: 'dez. 2018 – dez. 2019', start: '2018-12', end: '2019-12' },
      ],
      education: 'Análise e Desenvolvimento de Sistemas, Instituto Federal do Paraná (2017–2019) · ISTQB Certified Tester Foundation Level',
      languages: 'Português (nativo) · Inglês (fluente) · Espanhol (básico)',
    },
    games: {
      heading: 'Jogos em que trabalhei',
      caption: 'Contribuições em QA na Oktagon Games.',
    },
    personal: {
      eyebrow: 'Além do QA',
      heading: 'Jogadora desde criança. Curiosa por natureza.',
      text: 'Os jogos fazem parte da minha vida desde a infância. Essa curiosidade continua presente na forma como exploro, aprendo e testo.',
      lunaAlt: 'Luna, a cachorra marrom da Heloisa, olhando para a câmera',
    },
    projects: {
      heading: 'Projetos para explorar',
      note: 'Projetos pessoais, desenvolvidos com apoio de IA sob minha direção de QA. Não são produtos de nenhum ex-empregador nem endossados por eles. Os projetos e seus repositórios estão em inglês.',
      source: 'Código-fonte',
      opensNew: '(abre em nova aba)',
      thumbAlt: (name) => `Captura de tela de ${name}`,
      items: {
        'pixel-swarm': { blurb: 'Um puzzle jogável com QA desde o início, do design e da estratégia de testes às evidências para reproduzir bugs.', label: 'Jogo + QA', tags: ['Game design', 'Estratégia de testes'], primary: 'Jogar demo' },
        'qa-workspace': { blurb: 'Um workspace de QA para relatos, execuções de testes e recomendações de release baseadas em evidências.', label: 'Integrações simuladas', tags: ['Design de fluxos', 'Decisões de release'], primary: 'Ver demo' },
        'performance-lab': { blurb: 'Explore sessões de performance, telemetria e capturas sincronizadas, comparações e relatórios.', label: 'Telemetria simulada', tags: ['Análise de performance', 'Relatórios'], primary: 'Ver demo' },
        'game-qa-skills': { blurb: 'Fluxos de QA de jogos com relatos reproduzíveis, capturas, vídeos e relatórios de exemplo.', label: 'Fluxos de QA com apoio de IA', tags: ['Evidências de bugs', 'Relatórios de teste'], primary: 'Ver relatórios' },
      },
    },
    featured: {
      status: 'Publicado · executado toda noite',
      headline: 'Da estratégia de testes à validação reproduzível na web.',
      text: 'Um projeto de testes web e de API em quatro sistemas públicos: plano de testes, testes exploratórios e casos rastreáveis; automação com Playwright em quatro navegadores; testes de API no Postman e no Playwright, validados contra o contrato Swagger; cenários em Gherkin; e um pipeline de CI que publica o relatório.',
      facts: [
        ['379', 'verificações automáticas por execução'],
        ['11', 'defeitos documentados com evidências'],
        ['4', 'sistemas testados'],
      ],
      tags: ['Playwright · TypeScript', 'Postman · API', 'BDD · CI'],
      primary: 'Página do projeto',
      report: 'Relatório de testes',
      thumbAlt: 'Relatos de bugs do Web Testing Lab, cada um com uma captura de tela do defeito',
    },
    contact: {
      heading: 'Vamos conversar sobre qualidade.',
      text: 'A melhor forma de falar comigo é pelo LinkedIn. Meus trabalhos públicos estão no GitHub.',
    },
    footer: 'Site estático, sem rastreamento.',
    notFound: { title: 'Página não encontrada', text: 'Esta página não existe. O portfólio está a um clique.', back: 'Ir para o portfólio' },
  },
};

/** Language-independent project data. Order follows the brief. */
export const PROJECTS = [
  { id: 'pixel-swarm', name: 'Pixel Swarm', demo: 'https://heloisatorres1.github.io/pixel-swarm/', source: 'https://github.com/heloisatorres1/pixel-swarm', icon: 'star' },
  { id: 'qa-workspace', name: 'QA Workspace', demo: 'https://heloisatorres1.github.io/qa-workspace/', source: 'https://github.com/heloisatorres1/qa-workspace', icon: 'layers' },
  { id: 'performance-lab', name: 'Performance Lab', demo: 'https://heloisatorres1.github.io/performance-lab/', source: 'https://github.com/heloisatorres1/performance-lab', icon: 'chart' },
  { id: 'game-qa-skills', name: 'Game QA Skills', demo: 'https://github.com/heloisatorres1/game-qa-skills/tree/main/examples', source: 'https://github.com/heloisatorres1/game-qa-skills', icon: 'code' },
];

export const FEATURED = {
  name: 'Web Testing Lab',
  page: 'https://heloisatorres1.github.io/web-testing-lab/',
  report: 'https://heloisatorres1.github.io/web-testing-lab/report/',
  source: 'https://github.com/heloisatorres1/web-testing-lab',
};

export const GAMES = ['Magic: Puzzle Quest', 'Rapala Fishing', 'PIGGY: Hunt', 'Mini Golf: Battle Royale'];
