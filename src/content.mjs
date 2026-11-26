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
    nav: { label: 'Sections', about: 'About', experience: 'Experience', how: 'How I work', projects: 'Projects', news: 'Updates', contact: 'Contact' },
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
      demo: 'Watch automation demo',
      portraitAlt: 'Heloisa Oller Torres',
      expertiseLabel: 'Expertise',
      expertise: ['QA leadership', 'Exploratory testing', 'Automation', 'Performance', 'ISTQB CTFL'],
    },
    experience: {
      heading: 'Experience',
      jobs: [
        { company: 'Fortis Games', role: 'Test Lead', dates: 'Mar 2022 – Nov 2026', start: '2022-03', end: '2026-11', summary: 'Led internal and external QA teams, defined test strategy and supported releases with clear evidence.', highlights: [
          'Led internal and external QA teams (6+ testers) and vendors, managing two game projects at once.',
          'Defined test strategy and plans: functional, regression, smoke, exploratory, performance and telemetry testing on Unity, Godot and web games (PC and mobile).',
          'Built a CI smoke test and Playwright, Unity and Godot automations, plus GitHub Actions and Zapier workflows for TestRail test plans, Slack-to-ClickUp bug reports and QA alerts.',
          'Delivered weekly and delivery reports, and mentored testers on their career growth.',
        ] },
        { company: 'Oktagon Games', role: 'Assistant QA (Lead)', dates: 'Jan 2020 – Mar 2022', start: '2020-01', end: '2022-03', summary: 'Tested games from development to launch, contributing test cases, exploratory testing and actionable bug reports.', highlights: [
          'Supported QA on the live title Magic: Puzzle Quest and on Rapala Fishing, PIGGY: Hunt and Mini Golf: Battle Royale, from development to launch.',
          'Ran exploratory, regression and smoke testing on PC (Windows, macOS) and mobile, contributing test cases and bug reports in Agile teams.',
        ] },
        { company: 'Veltec Soluções Tecnológicas', role: 'IT Intern', dates: 'Dec 2018 – Dec 2019', start: '2018-12', end: '2019-12' },
      ],
      education: 'Systems Analysis and Development, Instituto Federal do Paraná (2017–2019) · ISTQB Certified Tester Foundation Level',
      languages: 'Portuguese (native) · English (fluent)',
    },
    games: {
      heading: 'Games I worked on',
      caption: 'QA contributions at Oktagon Games.',
      unreleased: {
        heading: "Unreleased games I've worked on",
        caption: 'Soft-launch gameplay (US and Philippines), recorded and published on YouTube by players.',
        video: 'Video',
        titles: { puzzle: 'Puzzle game', merge: 'Merge game', cozy: 'Multiplayer cozy game' },
      },
    },
    skills: {
      heading: 'Skills & tools',
      groups: [
        ['QA & leadership', ['Test strategy & planning', 'Test case design', 'Risk management', 'Release tracking', 'Vendor management', 'Mentoring', 'Agile (Scrum, Kanban)']],
        ['Testing', ['Functional', 'Regression', 'Smoke', 'Exploratory', 'Performance', 'Telemetry', 'API']],
        ['Automation & AI', ['Playwright', 'TypeScript', 'Postman', 'Unity', 'Godot', 'GitHub Actions', 'Git', 'Zapier', 'AI-assisted testing', 'MCP']],
        ['Test management', ['Jira', 'TestRail', 'QASE', 'Testmo', 'ClickUp', 'Slack', 'GitHub']],
        ['Platforms', ['Windows', 'macOS', 'iOS', 'Android', 'Web']],
      ],
    },
    personal: {
      eyebrow: 'Beyond QA',
      heading: 'A player first. A tester by curiosity.',
      text: 'Games have been part of my life since childhood. That curiosity is still part of how I explore, learn and test.',
      lunaAlt: "Luna, Heloisa's brown dog, looking up at the camera",
    },
    how: {
      eyebrow: 'How I work',
      heading: 'AI speeds up my work. Quality stays my responsibility.',
      intro: 'AI is now part of everyday work at most companies, and I have adopted it too, but consciously. It is a powerful tool when used the right way, and I never trust it 100%.',
      steps: [
        ['Analyze and plan', 'I read the specs and documents and, with Claude, analyze the code. Then I build a risk-based test plan: happy paths, negative paths and edge cases, using techniques such as boundary values, equivalence partitioning and state transitions.'],
        ['Review everything', 'I check everything AI produces before I use it. When it reports a bug, I ask for evidence (steps, screenshots, logs) and reproduce it myself.'],
        ['Automate and prove', 'With the plan reviewed, I build the automation and QA tools with Claude. A test only counts when it passes reliably and fails when the bug is present, and it runs automatically in CI.'],
        ['Report with evidence', 'Every bug report has clear steps, expected and actual results, and evidence. Every release gets a clear recommendation, based on what was tested and the risks that remain.'],
      ],
      curious: "I'm curious by nature: I love exploring new tools and new ways to use AI. That curiosity is what led me to build the projects below.",
      closing: "AI doesn't replace QA work. It speeds up the process and gives me better tools to raise quality.",
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
        'qa-skills': { blurb: 'QA workflows for web and games: test-case design with automation and CI/CD plans, root cause analysis with proven fixes, plus game testing with reproducible findings, screenshots, video and example reports.', label: 'AI-assisted QA workflows', tags: ['Test design', 'Bug evidence', 'Test reports'], primary: 'View reports' },
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
    demo: {
      eyebrow: 'Automation demo',
      heading: 'Watch my Playwright test play a game by itself.',
      text: 'One end-to-end test in Playwright and TypeScript, built with Claude. It opens my game Pixel Swarm as a returning player, starts a Medium level and plays it to the end through real clicks, then checks the result: the "Level Complete" pop-up, the coin reward and the saved progress (stars and the next level unlocked). The test report shows every step, the test code, the video and a screenshot.',
      tags: ['Playwright · TypeScript', 'Page object', 'Test data', 'Video evidence'],
      report: 'Open the test report',
      code: 'Test code',
      play: 'Play the game',
      videoLabel: 'Video of the Playwright test playing a Medium level of Pixel Swarm, from the start of the level to the Level Complete pop-up.',
    },
    news: { heading: 'Latest updates', eyebrow: "What's new in my projects", more: 'See it' },
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
    nav: { label: 'Seções', about: 'Sobre', experience: 'Experiência', how: 'Como trabalho', projects: 'Projetos', news: 'Novidades', contact: 'Contato' },
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
      demo: 'Ver demo de automação',
      portraitAlt: 'Heloisa Oller Torres',
      expertiseLabel: 'Especialidades',
      expertise: ['Liderança de QA', 'Testes exploratórios', 'Automação', 'Performance', 'ISTQB CTFL'],
    },
    experience: {
      heading: 'Experiência',
      jobs: [
        { company: 'Fortis Games', role: 'Test Lead', dates: 'mar. 2022 – nov. 2026', start: '2022-03', end: '2026-11', summary: 'Liderei equipes internas e externas de QA, defini estratégias de teste e apoiei entregas com evidências claras.', highlights: [
          'Liderei times de QA internos e externos (6+ testers) e fornecedores, gerenciando dois projetos de jogos ao mesmo tempo.',
          'Defini estratégias e planos de teste: testes funcionais, de regressão, smoke, exploratórios, de performance e de telemetria em jogos Unity, Godot e web (PC e mobile).',
          'Criei um smoke test em CI e automações com Playwright, Unity e Godot, além de fluxos com GitHub Actions e Zapier para planos de teste no TestRail, reportes de bugs do Slack para o ClickUp e alertas de QA.',
          'Entreguei relatórios semanais e de entrega, e fiz mentoria de testers no crescimento de carreira.',
        ] },
        { company: 'Oktagon Games', role: 'Assistant QA (Lead)', dates: 'jan. 2020 – mar. 2022', start: '2020-01', end: '2022-03', summary: 'Testei jogos do desenvolvimento ao lançamento, contribuindo com casos de teste, testes exploratórios e reportes de bugs claros.', highlights: [
          'Apoiei o QA no título live Magic: Puzzle Quest e em Rapala Fishing, PIGGY: Hunt e Mini Golf: Battle Royale, do desenvolvimento ao lançamento.',
          'Executei testes exploratórios, de regressão e smoke em PC (Windows, macOS) e mobile, contribuindo com casos de teste e reportes de bugs em times ágeis.',
        ] },
        { company: 'Veltec Soluções Tecnológicas', role: 'Estagiária de TI', dates: 'dez. 2018 – dez. 2019', start: '2018-12', end: '2019-12' },
      ],
      education: 'Análise e Desenvolvimento de Sistemas, Instituto Federal do Paraná (2017–2019) · ISTQB Certified Tester Foundation Level',
      languages: 'Português (nativo) · Inglês (fluente)',
    },
    games: {
      heading: 'Jogos em que trabalhei',
      caption: 'Contribuições em QA na Oktagon Games.',
      unreleased: {
        heading: 'Jogos não lançados em que trabalhei',
        caption: 'Gameplay do soft launch (EUA e Filipinas), gravado e publicado no YouTube por jogadores.',
        video: 'Vídeo',
        titles: { puzzle: 'Jogo de puzzle', merge: 'Jogo de merge', cozy: 'Jogo cozy multiplayer' },
      },
    },
    skills: {
      heading: 'Competências e ferramentas',
      groups: [
        ['QA e liderança', ['Estratégia e planejamento de testes', 'Desenho de casos de teste', 'Gestão de riscos', 'Acompanhamento de releases', 'Gestão de fornecedores', 'Mentoria', 'Ágil (Scrum, Kanban)']],
        ['Testes', ['Funcionais', 'Regressão', 'Smoke', 'Exploratórios', 'Performance', 'Telemetria', 'API']],
        ['Automação e IA', ['Playwright', 'TypeScript', 'Postman', 'Unity', 'Godot', 'GitHub Actions', 'Git', 'Zapier', 'Testes com apoio de IA', 'MCP']],
        ['Gestão de testes', ['Jira', 'TestRail', 'QASE', 'Testmo', 'ClickUp', 'Slack', 'GitHub']],
        ['Plataformas', ['Windows', 'macOS', 'iOS', 'Android', 'Web']],
      ],
    },
    personal: {
      eyebrow: 'Além do QA',
      heading: 'Jogadora desde criança. Curiosa por natureza.',
      text: 'Os jogos fazem parte da minha vida desde a infância. Essa curiosidade continua presente na forma como exploro, aprendo e testo.',
      lunaAlt: 'Luna, a cachorra marrom da Heloisa, olhando para a câmera',
    },
    how: {
      eyebrow: 'Como eu trabalho',
      heading: 'A IA acelera meu trabalho. A qualidade continua sendo minha responsabilidade.',
      intro: 'A IA já faz parte do dia a dia da maioria das empresas, e eu também a adotei, mas de forma consciente. Ela é uma ferramenta poderosa quando bem usada, e nunca confio nela 100%.',
      steps: [
        ['Analiso e planejo', 'Leio as especificações e os documentos e, com o Claude, analiso o código. Depois monto um plano de testes baseado em risco: caminhos felizes, caminhos negativos e casos de borda, com técnicas como valores-limite, partição de equivalência e transição de estados.'],
        ['Reviso tudo', 'Confiro tudo o que a IA produz antes de usar. Quando ela aponta um bug, peço evidências (passos, capturas, logs) e reproduzo eu mesma.'],
        ['Automatizo e comprovo', 'Com o plano revisado, construo a automação e ferramentas de QA com o Claude. Um teste só vale quando passa de forma estável e falha quando o bug existe, e ele roda automaticamente no CI.'],
        ['Reporto com evidências', 'Cada reporte de bug tem passos claros, resultado esperado e obtido, e evidências. Cada release recebe uma recomendação clara, baseada no que foi testado e nos riscos que restam.'],
      ],
      curious: 'Sou curiosa por natureza: adoro explorar novas ferramentas e novas formas de usar IA. Foi essa curiosidade que me levou a criar os projetos abaixo.',
      closing: 'A IA não substitui o trabalho de QA. Ela acelera o processo e me dá ferramentas melhores para elevar a qualidade.',
    },
    projects: {
      heading: 'Projetos para explorar',
      note: 'Projetos pessoais, desenvolvidos com apoio de IA sob minha direção de QA. Não são produtos de nenhum ex-empregador nem endossados por eles. Os projetos e seus repositórios estão em inglês.',
      source: 'Código-fonte',
      opensNew: '(abre em nova aba)',
      thumbAlt: (name) => `Captura de tela de ${name}`,
      items: {
        'pixel-swarm': { blurb: 'Um puzzle jogável com QA desde o início, do design e da estratégia de testes às evidências para reproduzir bugs.', label: 'Jogo + QA', tags: ['Game design', 'Estratégia de testes'], primary: 'Jogar demo' },
        'qa-workspace': { blurb: 'Um workspace de QA para reportes, execuções de testes e recomendações de release baseadas em evidências.', label: 'Integrações simuladas', tags: ['Design de fluxos', 'Decisões de release'], primary: 'Ver demo' },
        'performance-lab': { blurb: 'Explore sessões de performance, telemetria e capturas sincronizadas, comparações e relatórios.', label: 'Telemetria simulada', tags: ['Análise de performance', 'Relatórios'], primary: 'Ver demo' },
        'qa-skills': { blurb: 'Fluxos de QA para web e jogos: desenho de casos de teste com planos de automação e CI/CD, análise de causa raiz com correções comprovadas, e testes de jogos com reportes reproduzíveis, capturas, vídeos e relatórios de exemplo.', label: 'Fluxos de QA com apoio de IA', tags: ['Desenho de testes', 'Evidências de bugs', 'Relatórios de teste'], primary: 'Ver relatórios' },
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
      thumbAlt: 'Reportes de bugs do Web Testing Lab, cada um com uma captura de tela do defeito',
    },
    demo: {
      eyebrow: 'Demo de automação',
      heading: 'Veja meu teste em Playwright jogar um jogo sozinho.',
      text: 'Um teste end-to-end em Playwright e TypeScript, criado com o Claude. Ele abre meu jogo Pixel Swarm como um jogador que já jogou antes, inicia uma fase Média e joga até o fim com cliques reais, depois confere o resultado: o pop-up de "Level Complete", a recompensa em moedas e o progresso salvo (estrelas e a próxima fase liberada). O relatório do teste mostra cada passo, o código do teste, o vídeo e uma captura de tela.',
      tags: ['Playwright · TypeScript', 'Page object', 'Dados de teste', 'Evidência em vídeo'],
      report: 'Abrir o relatório do teste',
      code: 'Código do teste',
      play: 'Jogar o jogo',
      videoLabel: 'Vídeo do teste em Playwright jogando uma fase Média do Pixel Swarm, do início da fase até o pop-up de Level Complete.',
    },
    news: { heading: 'Novidades', eyebrow: 'O que há de novo nos meus projetos', more: 'Ver' },
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
  { id: 'qa-skills', name: 'QA Skills', demo: 'https://github.com/heloisatorres1/qa-skills/tree/main/examples', source: 'https://github.com/heloisatorres1/qa-skills', icon: 'code' },
];

/** Latest updates, newest first (4 shown). Each entry must match something published in that project; an href starting with # points inside this page. */
export const NEWS = [
  {
    date: '2026-11-25',
    project: 'Pixel Swarm',
    href: '#automation-demo',
    en: { title: 'Playwright end-to-end test', text: 'A TypeScript test, built with Claude, that plays a Medium level of Pixel Swarm through real clicks and checks the win. Watch the video and open the full test report at the top of this page.' },
    'pt-BR': { title: 'Teste end-to-end com Playwright', text: 'Um teste em TypeScript, criado com o Claude, que joga uma fase Média do Pixel Swarm com cliques reais e confere a vitória. Veja o vídeo e abra o relatório completo no topo desta página.' },
  },
  {
    date: '2026-11-24',
    project: 'QA Skills',
    href: 'https://github.com/heloisatorres1/qa-skills/blob/main/examples/root-cause-analysis/results.md',
    en: { title: 'New root cause analysis skill', text: "Share one bug and get the line of code behind it, a fix proven by switching it on and off, and a regression test. Tested on 5 bugs: 60/60 with the skill, 46/60 without. It also found a new bug in Pixel Swarm." },
    'pt-BR': { title: 'Nova skill de análise de causa raiz', text: 'Compartilhe um bug e receba a linha de código que o causa, uma correção comprovada ligando e desligando a mudança, e um teste de regressão. Testada em 5 bugs: 60/60 com a skill, 46/60 sem. Também encontrou um novo bug no Pixel Swarm.' },
  },
  {
    date: '2026-11-23',
    project: 'QA Workspace',
    href: 'https://heloisatorres1.github.io/qa-workspace/',
    en: { title: 'New QA Tasks board', text: "Track the QA team's own work, like automation, test coverage and reviews, on a drag-and-drop board or a list, with owners, due dates and overdue warnings." },
    'pt-BR': { title: 'Novo quadro de tarefas de QA', text: 'Acompanhe o trabalho do próprio time de QA, como automação, cobertura de testes e revisões, em um quadro de arrastar e soltar ou em lista, com responsáveis, prazos e alertas de atraso.' },
  },
  {
    date: '2026-11-19',
    project: 'QA Skills',
    href: 'https://github.com/heloisatorres1/qa-skills#example-test-design-on-saucedemo-and-pixel-swarm',
    en: { title: 'New test-design skill', text: 'Suggests test cases, an automation plan and CI/CD stages, and builds tests only after approval. Example run: 54 cases on SauceDemo, 13 approved tests.' },
    'pt-BR': { title: 'Nova skill de desenho de testes', text: 'Sugere casos de teste, um plano de automação e etapas de CI/CD, e só cria os testes após aprovação. Exemplo: 54 casos no SauceDemo, 13 testes aprovados.' },
  },
];

/** Automation demo: a Playwright run recorded on Pixel Swarm, with its HTML report (served from public/demos). */
export const DEMO = {
  video: 'media/videos/pixel-swarm-playwright-run.webm',
  poster: 'media/pixel-swarm-playwright-poster.webp',
  size: [430, 900],
  report: 'demos/pixel-swarm-playwright/',
  code: 'https://github.com/heloisatorres1/pixel-swarm/tree/main/tests/e2e',
  game: 'https://heloisatorres1.github.io/pixel-swarm/',
};

export const FEATURED = {
  name: 'Web Testing Lab',
  page: 'https://heloisatorres1.github.io/web-testing-lab/',
  report: 'https://heloisatorres1.github.io/web-testing-lab/report/',
  source: 'https://github.com/heloisatorres1/web-testing-lab',
};

/** Games that never launched: public soft-launch videos recorded by players. */
export const UNRELEASED_GAMES = [
  { id: 'puzzle', videos: ['https://www.youtube.com/watch?v=ZZBXlmXTDW0', 'https://www.youtube.com/watch?v=-BRBnRRSQvc'] },
  { id: 'merge', videos: ['https://www.youtube.com/watch?v=BApe6Zl8mME'] },
  { id: 'cozy', videos: ['https://www.youtube.com/watch?v=f2-LVetj1Wk', 'https://www.youtube.com/watch?v=R78yAwdtm6c'] },
];

export const GAMES = [
  { name: 'Magic: Puzzle Quest', videos: ['https://www.youtube.com/watch?v=z_B99mEf5Zk'] },
  { name: 'Rapala Fishing', videos: ['https://www.youtube.com/watch?v=Uuffq-Fij14'] },
  { name: 'PIGGY: Hunt', videos: ['https://www.youtube.com/watch?v=a4qJW4LxRMQ'] },
  { name: 'Mini Golf: Battle Royale', videos: ['https://www.youtube.com/watch?v=Y_Ur2J1Ey18'] },
];
