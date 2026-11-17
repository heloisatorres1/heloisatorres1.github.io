/**
 * Public versions of the résumés. The text follows the owner's supplied PDFs exactly, except:
 * - phone number and e-mail are removed (contact goes through LinkedIn),
 * - the game credit uses the official spelling "PIGGY: Hunt".
 */

const RESUMES = {
  en: {
    file: 'resume-heloisa-oller-torres-en.pdf',
    lang: 'en',
    title: 'QA Test Lead | Senior QA | Games & Software',
    location: 'Londrina, Paraná, Brazil',
    links: 'LinkedIn: linkedin.com/in/heloisa-torres-94250814a  |  Portfolio: github.com/heloisatorres1',
    sections: [
      ['PROFESSIONAL SUMMARY', [{ p: 'QA Test Lead with 6+ years in game QA (live-service and in-development; PC, mobile, web). Led internal and external teams, managed two projects at once, and owned test strategy, execution, and weekly and delivery reporting. Strong manual and exploratory testing, plus hands-on automation (Playwright, Unity, Godot, GitHub Actions) and AI-assisted tooling that supports, not replaces, QA. Open to Test Lead and Senior QA roles in games and software.' }]],
      ['CORE SKILLS', [
        { kv: ['Testing:', 'Functional, Non-Functional, Regression, Confirmation, Smoke, Sanity, Exploratory, Performance, Compatibility, Usability, Telemetry, End-to-End'] },
        { kv: ['QA & Leadership:', 'Test Strategy & Planning, Test Case Design, Defect Lifecycle, Release Tracking, Risk Management, Agile (Scrum/Kanban), Weekly & Delivery Reports, Vendor Management, Mentoring'] },
        { kv: ['Automation:', 'Playwright, Unity, Godot, GitHub Actions, Git, Zapier, AI-Assisted Testing, MCP'] },
        { kv: ['Tools & Platforms:', 'Jira, ClickUp, TestRail, QASE, Testmo, Slack, GitHub  |  Windows, macOS, iOS, Android, Web'] },
      ]],
      ['PROFESSIONAL EXPERIENCE', [
        { job: ['Test Lead, Fortis Games, Londrina, Brazil', 'Mar 2022 – Nov 2026'], bullets: [
          'Led internal and external QA teams (6+ testers) and vendors across live and in-development titles; managed two game projects at once.',
          'Defined test strategy and plans; ran functional, non-functional, regression, confirmation, smoke, exploratory, performance, and telemetry testing on Unity, Godot, and web games (PC and mobile).',
          'Delivered weekly and delivery reports; gave clear feedback on products and to team members; mentored testers on career growth.',
          'Built AI-assisted internal tools for reporting, bug, feedback, performance, and release tracking and for end-to-end testing. AI supports QA, it does not replace it.',
          'Built a CI smoke test and Playwright, Unity, and Godot automations; created GitHub Actions and Zapier workflows (TestRail test plans, Slack-to-ClickUp bug reports, QA alerts).',
          'Fixed minor bugs and tweaks with AI assistance and Git; experience with MCP (Model Context Protocol).',
        ] },
        { job: ['Assistant QA (Lead), Oktagon Games, Londrina, Brazil', 'Jan 2020 – Mar 2022'], bullets: [
          'Supported QA on live titles (Magic: Puzzle Quest) and on Rapala Fishing, PIGGY: Hunt, and Mini Golf: Battle Royale, from development to launch.',
          'Tested on PC (Windows, macOS) and mobile: exploratory, regression, and smoke; contributed to test cases and bug reporting in Agile teams.',
        ] },
        { job: ['IT Intern, Veltec Soluções Tecnológicas, Londrina, Brazil', 'Dec 2018 – Dec 2019'] },
      ]],
      ['PROJECTS', [{ p: 'Personal projects in AI-assisted game development, QA tools, and software and web testing. Portfolio: github.com/heloisatorres1' }]],
      ['EDUCATION & CERTIFICATIONS', [
        { job: ['Systems Analysis and Development (Tecnólogo), Instituto Federal do Paraná', '2017 – 2019'] },
        { p: 'ISTQB Certified Tester Foundation Level (CTFL)' },
      ]],
      ['LANGUAGES', [{ p: 'Portuguese (native), English (fluent)' }]],
    ],
  },
  'pt-BR': {
    file: 'curriculo-heloisa-oller-torres-pt-BR.pdf',
    lang: 'pt-BR',
    title: 'QA Test Lead | Senior QA | Jogos & Software',
    location: 'Londrina, Paraná, Brasil',
    links: 'LinkedIn: linkedin.com/in/heloisa-torres-94250814a  |  Portfólio: github.com/heloisatorres1',
    sections: [
      ['RESUMO PROFISSIONAL', [{ p: 'QA Test Lead com mais de 6 anos em QA de jogos (live-service e em desenvolvimento; PC, mobile, web). Liderou times internos e externos, gerenciou dois projetos ao mesmo tempo e foi responsável por estratégia de testes, execução e relatórios semanais e de entregas. Testes manuais e exploratórios sólidos, automação prática (Playwright, Unity, Godot, GitHub Actions) e ferramentas com apoio de IA que apoiam, e não substituem, o QA. Aberta a vagas de Test Lead e Senior QA em jogos e software.' }]],
      ['HABILIDADES', [
        { kv: ['Testes:', 'Funcional, Não Funcional, Regressão, Confirmação, Smoke, Sanity, Exploratório, Performance, Compatibilidade, Usabilidade, Telemetry, End-to-End'] },
        { kv: ['QA & Liderança:', 'Estratégia e Planejamento de Testes, Casos de Teste, Ciclo de Vida de Defeitos, Release Tracking, Gestão de Riscos, Ágil (Scrum/Kanban), Relatórios Semanais e de Entregas, Gestão de Fornecedores, Mentoria'] },
        { kv: ['Automação:', 'Playwright, Unity, Godot, GitHub Actions, Git, Zapier, Testes com Apoio de IA, MCP'] },
        { kv: ['Ferramentas & Plataformas:', 'Jira, ClickUp, TestRail, QASE, Testmo, Slack, GitHub  |  Windows, macOS, iOS, Android, Web'] },
      ]],
      ['EXPERIÊNCIA PROFISSIONAL', [
        { job: ['Test Lead, Fortis Games, Londrina, Brasil', 'Mar 2022 – Nov 2026'], bullets: [
          'Liderou times de QA internos e externos (6+ testers) e fornecedores em títulos live e em desenvolvimento; gerenciou dois projetos de jogos ao mesmo tempo.',
          'Definiu estratégia e planos de teste; executou testes funcionais, não funcionais, de regressão, confirmação, smoke, exploratórios, de performance e telemetry em jogos Unity, Godot e web (PC e mobile).',
          'Entregou relatórios semanais e de entregas; deu feedback claro sobre produtos e para o time; fez mentoria de testers sobre carreira.',
          'Criou ferramentas internas com apoio de IA para reporting, bug, feedback, performance e release tracking e para testes end-to-end. A IA apoia o QA, não o substitui.',
          'Criou um smoke test em CI e automações com Playwright, Unity e Godot; criou fluxos com GitHub Actions e Zapier (test plans no TestRail, bugs do Slack para o ClickUp, alertas de QA).',
          'Corrigiu bugs menores e ajustes com apoio de IA e Git; experiência com MCP (Model Context Protocol).',
        ] },
        { job: ['Assistant QA (Lead), Oktagon Games, Londrina, Brasil', 'Jan 2020 – Mar 2022'], bullets: [
          'Apoiou o QA em títulos live (Magic: Puzzle Quest) e em Rapala Fishing, PIGGY: Hunt e Mini Golf: Battle Royale, do desenvolvimento ao lançamento.',
          'Testou em PC (Windows, macOS) e mobile: exploratório, regressão e smoke; contribuiu com casos de teste e reporte de bugs em times ágeis.',
        ] },
        { job: ['Estagiária de TI, Veltec Soluções Tecnológicas, Londrina, Brasil', 'Dez 2018 – Dez 2019'] },
      ]],
      ['PROJETOS', [{ p: 'Projetos pessoais em desenvolvimento de jogos com IA, ferramentas de QA e testes de software e web. Portfólio: github.com/heloisatorres1' }]],
      ['FORMAÇÃO & CERTIFICAÇÕES', [
        { job: ['Análise e Desenvolvimento de Sistemas (Tecnólogo), Instituto Federal do Paraná', '2017 – 2019'] },
        { p: 'ISTQB Certified Tester Foundation Level (CTFL)' },
      ]],
      ['IDIOMAS', [{ p: 'Português (nativo), Inglês (fluente)' }]],
    ],
  },
};

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function renderResume(r) {
  const body = r.sections
    .map(([heading, items]) => {
      const inner = items
        .map((it) => {
          if (it.p) return `<p>${esc(it.p)}</p>`;
          if (it.kv) return `<p><b>${esc(it.kv[0])}</b> ${esc(it.kv[1])}</p>`;
          const head = `<div class="job"><b>${esc(it.job[0])}</b><span>${esc(it.job[1])}</span></div>`;
          const bullets = it.bullets ? `<ul>${it.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>` : '';
          return head + bullets;
        })
        .join('');
      return `<section><h2>${esc(heading)}</h2>${inner}</section>`;
    })
    .join('');
  return `<!doctype html><html lang="${r.lang}"><head><meta charset="utf-8"><title>Heloisa Oller Torres</title><style>
    @page { size: A4; margin: 14mm 15mm; }
    body { font: 10.4pt/1.38 Arial, Helvetica, sans-serif; color: #222; margin: 0; }
    h1 { font-size: 22pt; color: #1f3a5f; margin: 0; line-height: 1.1; }
    .title { font-weight: 700; font-size: 12.5pt; margin: 2px 0 2px; }
    .contact { color: #666; font-size: 9.6pt; line-height: 1.35; }
    h2 { font-size: 11pt; color: #1f3a5f; border-bottom: 1.2px solid #1f3a5f; padding-bottom: 2px; margin: 12px 0 5px; }
    p { margin: 0 0 4px; }
    .job { display: flex; justify-content: space-between; gap: 12px; margin-top: 4px; }
    .job span { color: #666; white-space: nowrap; }
    ul { margin: 2px 0 4px; padding-left: 18px; }
    li { margin: 0 0 2px; }
  </style></head><body>
  <h1>Heloisa Oller Torres</h1>
  <p class="title">${esc(r.title)}</p>
  <p class="contact">${esc(r.location)}<br>${esc(r.links)}</p>
  ${body}
  </body></html>`;
}

export { RESUMES, renderResume };
