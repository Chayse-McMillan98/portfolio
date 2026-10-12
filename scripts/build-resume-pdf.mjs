// Renders src/data/resume.js to src/assets/files/Resume.pdf using headless Chrome.
// Usage: npm run resume:pdf   (set CHROME_PATH if Chrome isn't in the default location)
//        npm run resume:pdf -- --html   also writes resume-preview.html for tweaking styles

import { spawn } from 'node:child_process';
import { mkdtempSync, writeFileSync, rmSync, statSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { profile, experience, skills, education, certifications, awards } from '../src/data/resume.js';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = join(root, 'src/assets/files/Resume.pdf');
const chrome = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const fontFile = (pkg, file) => pathToFileURL(join(root, 'node_modules/@fontsource', pkg, 'files', file)).href;

const esc = (value) => String(value)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Strip protocol/www for display, e.g. https://www.linkedin.com/in/x -> linkedin.com/in/x
const domain = (href) => href.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

const currentRole = experience[0].roles[0];

// Contact details shown as plain-text references (label above value), one per column.
const references = [
    { label: 'Email', value: profile.email },
    ...profile.links.map((link) => ({ label: link.name, value: link.label })),
];

const experienceHtml = experience.map((job) => `
    <article class="window">
        <header class="window-bar">
            <span class="dots"><i></i><i></i><i></i></span>
            <h3>${esc(job.company)}</h3>
            <span class="mono">${esc(domain(job.companyLink))} · ${esc(job.location)}</span>
            <span class="mono right">${esc(job.start)} — ${esc(job.end)}</span>
        </header>
        <div class="window-body">
            ${job.roles.map((role) => `
            <div class="role">
                <div class="row">
                    <h4>${esc(role.title)}${role.end === 'Present' ? ' <span class="tag live">Current</span>' : ''}</h4>
                    ${job.roles.length > 1 ? `<span class="mono muted">${esc(role.start)} — ${esc(role.end)}</span>` : ''}
                </div>
                <ul>${role.highlights.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>
            </div>`).join('')}
            <div class="chips">${job.stack.map((tech) => `<span class="chip">${esc(tech)}</span>`).join('')}</div>
        </div>
    </article>`).join('');

// Each item is unbreakable and carries its trailing separator, so lines only wrap between items.
const skillsHtml = skills.map((group) => `
    <div class="skill">
        <p class="eyebrow">${esc(group.group)}</p>
        <p>${group.items.map((item, i) => `<span class="item">${esc(item)}${i < group.items.length - 1 ? '<span class="dot-sep"></span>' : ''}</span>`).join(' ')}</p>
    </div>`).join('');

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${esc(profile.name)} — Resume</title>
<style>
    @font-face { font-family: 'Geist'; font-weight: 400; src: url('${fontFile('geist-sans', 'geist-sans-latin-400-normal.woff2')}') format('woff2'); }
    @font-face { font-family: 'Geist'; font-weight: 500; src: url('${fontFile('geist-sans', 'geist-sans-latin-500-normal.woff2')}') format('woff2'); }
    @font-face { font-family: 'Geist'; font-weight: 600; src: url('${fontFile('geist-sans', 'geist-sans-latin-600-normal.woff2')}') format('woff2'); }
    @font-face { font-family: 'Geist'; font-weight: 700; src: url('${fontFile('geist-sans', 'geist-sans-latin-700-normal.woff2')}') format('woff2'); }
    @font-face { font-family: 'Geist Mono'; font-weight: 400; src: url('${fontFile('geist-mono', 'geist-mono-latin-400-normal.woff2')}') format('woff2'); }
    @font-face { font-family: 'Geist Mono'; font-weight: 500; src: url('${fontFile('geist-mono', 'geist-mono-latin-500-normal.woff2')}') format('woff2'); }

    @page { size: Letter; margin: 0; }
    :root {
        --ink: #0a0a0a; --body: #3f3f46; --muted: #71717a; --faint: #a1a1aa;
        --line: #e4e4e7; --soft: #fafafa; --grid: #f1f1f3;
        --green: #3f7a5a; --green-bg: #ecf5ef; --amber: #c99a2e;
        --panel: #111113; --panel-line: #26262b;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    body { font-family: 'Geist', sans-serif; font-size: 8.2pt; line-height: 1.42; color: var(--body); background: #fff; }
    a { color: inherit; text-decoration: none; }
    .page { position: relative; width: 8.5in; height: 11in; padding: 0.34in 0.55in 0.3in; overflow: hidden; }
    .mono { font-family: 'Geist Mono', monospace; font-size: 7pt; letter-spacing: 0.02em; }
    .muted { color: var(--muted); }
    .row { display: flex; justify-content: space-between; align-items: baseline; gap: 12pt; }

    /* Hero — faint grid that fades out, like the reference site */
    .grid-bg {
        position: absolute; inset: 0 0 auto 0; height: 2.6in; z-index: 0;
        background-image: linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px);
        background-size: 22pt 22pt; background-position: center -1pt;
        -webkit-mask-image: radial-gradient(ellipse 70% 85% at 50% 15%, #000 30%, transparent 75%);
    }
    .hero { position: relative; z-index: 1; text-align: center; }
    .badge {
        display: inline-flex; align-items: center; gap: 5pt; padding: 2.5pt 8pt; border: 1px solid var(--line);
        border-radius: 999px; background: #fff; font-size: 7.5pt; color: var(--body);
    }
    .badge .status { width: 5pt; height: 5pt; border-radius: 50%; background: var(--amber); box-shadow: 0 0 0 2pt #f7ecd1; }
    h1 { margin-top: 7pt; font-size: 32pt; font-weight: 600; letter-spacing: -0.035em; line-height: 1; color: var(--ink); }
    .summary { max-width: 6.5in; margin: 6pt auto 0; font-size: 9pt; line-height: 1.55; color: var(--muted); }
    .refs { display: grid; grid-template-columns: repeat(${references.length}, auto); width: 100%; margin-top: 12pt; padding-top: 8pt; border-top: 1px solid var(--line); text-align: left; }
    .ref { padding: 1pt 10pt; }
    .ref:first-child { padding-left: 0; }
    .ref:last-child { padding-right: 0; }
    .ref + .ref { border-left: 1px solid var(--line); }
    .ref .eyebrow { font-size: 6.3pt; letter-spacing: 0.14em; color: var(--faint); }
    .ref-value { margin-top: 1.5pt; font-size: 8pt; font-weight: 500; color: var(--ink); white-space: nowrap; }

    .chip {
        display: inline-flex; align-items: center; gap: 4pt; padding: 1.5pt 6.5pt; border: 1px solid var(--line);
        border-radius: 999px; background: #fff; font-size: 7.2pt; color: var(--body); white-space: nowrap;
    }
    .tag { display: inline-block; padding: 0.5pt 4.5pt; border-radius: 999px; font-size: 6.4pt; font-weight: 500; vertical-align: 1pt; }
    .tag.live { background: var(--green-bg); color: var(--green); }
    .tag.plain { background: #f4f4f5; color: var(--muted); }


    /* Sections */
    section { position: relative; z-index: 1; margin-top: 9pt; }
    .eyebrow { font-family: 'Geist Mono', monospace; font-size: 6.8pt; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted); }
    section > .eyebrow { margin-bottom: 5pt; }

    /* Experience cards with window chrome */
    .window { border: 1px solid var(--line); border-radius: 9pt; overflow: hidden; break-inside: avoid; background: #fff; }
    .window + .window { margin-top: 7pt; }
    .window-bar { display: flex; align-items: baseline; gap: 8pt; padding: 4.5pt 11pt; border-bottom: 1px solid var(--line); background: var(--soft); color: var(--faint); }
    .window-bar .right { margin-left: auto; color: var(--muted); }
    .dots { display: inline-flex; gap: 3pt; align-self: center; }
    .dots i { width: 5pt; height: 5pt; border-radius: 50%; background: #e4e4e7; }
    .window-body { padding: 2pt 11pt 8pt; }
    h3 { font-size: 10.5pt; font-weight: 600; letter-spacing: -0.01em; color: var(--ink); }
    .role { margin-top: 5pt; }
    .role + .role { padding-top: 5pt; border-top: 1px dashed var(--line); }
    h4 { font-size: 9pt; font-weight: 600; color: var(--ink); }
    ul { list-style: none; margin-top: 2pt; }
    li { position: relative; padding-left: 10pt; }
    li + li { margin-top: 1pt; }
    li::before { content: ''; position: absolute; left: 1.5pt; top: 0.62em; width: 3pt; height: 3pt; border-radius: 50%; background: var(--faint); }
    .window .chips { display: flex; flex-wrap: wrap; gap: 3pt; margin-top: 5pt; }

    /* Dark skills panel */
    .panel {
        position: relative; border-radius: 12pt; padding: 10pt 14pt 11pt; color: #d4d4d8; background-color: var(--panel); overflow: hidden;
        background-image: linear-gradient(var(--panel-line) 1px, transparent 1px), linear-gradient(90deg, var(--panel-line) 1px, transparent 1px);
        background-size: 22pt 22pt;
    }
    .panel::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at 50% 0%, rgba(17,17,19,0.55), var(--panel) 75%); }
    .panel > * { position: relative; }
    .panel-bar { display: flex; align-items: center; gap: 8pt; margin-bottom: 3pt; color: #8b8b94; }
    .panel-bar .dots i { background: #3a3a40; }
    .skills { display: grid; gap: 0; }
    .skill { display: grid; grid-template-columns: 1.3in 1fr; align-items: baseline; gap: 10pt; padding: 2.5pt 0; }
    .skill + .skill { border-top: 1px solid #222227; }
    .skill .eyebrow { color: #8b8b94; font-size: 6.3pt; letter-spacing: 0.1em; line-height: 1.35; }
    .skill .item { white-space: nowrap; }
    .skill p:last-child { font-size: 7.8pt; line-height: 1.5; color: #e4e4e7; }
    .dot-sep { display: inline-block; width: 2.5pt; height: 2.5pt; margin: 0 4.5pt; border-radius: 50%; background: #52525b; vertical-align: 1.5pt; }

    /* Bottom cards */
    .cards { display: grid; grid-template-columns: 1.25fr 1.1fr 1fr; gap: 8pt; }
    .card { border: 1px solid var(--line); border-radius: 9pt; padding: 7pt 10pt; }
    .card .eyebrow { margin-bottom: 4pt; }
    .card h5 { font-size: 8.6pt; font-weight: 600; color: var(--ink); }
    .card p { font-size: 7.8pt; }
</style>
</head>
<body>
<main class="page">
    <div class="grid-bg"></div>

    <header class="hero">
        <span class="badge"><span class="status"></span>${esc(currentRole.title)} · ${esc(experience[0].company)} · ${esc(profile.location)}</span>
        <h1>${esc(profile.name)}</h1>
        <p class="summary">${esc(profile.summary)}</p>
        <div class="refs">
            ${references.map((ref) => `
            <div class="ref">
                <p class="eyebrow">${esc(ref.label)}</p>
                <p class="ref-value">${esc(ref.value)}</p>
            </div>`).join('')}
        </div>
    </header>

    <section>
        <p class="eyebrow">Experience</p>
        ${experienceHtml}
    </section>

    <section>
        <div class="panel">
            <div class="panel-bar">
                <span class="dots"><i></i><i></i><i></i></span>
                <span class="eyebrow" style="color:#8b8b94">Skills &amp; Stack</span>
            </div>
            <div class="skills">${skillsHtml}</div>
        </div>
    </section>

    <section class="cards">
        ${education.map((edu) => `
        <div class="card">
            <p class="eyebrow">Education</p>
            <h5>${esc(edu.school)}</h5>
            <p>${esc(edu.degree)}</p>
            <p class="mono muted">${esc(edu.start)} — ${esc(edu.end)} · ${esc(edu.location)}</p>
        </div>`).join('')}
        <div class="card">
            <p class="eyebrow">Certifications</p>
            ${certifications.map((cert) => `<h5>${esc(cert.name)}</h5><p class="mono muted">Issued ${esc(cert.year)}</p>`).join('')}
        </div>
        <div class="card">
            <p class="eyebrow">Awards</p>
            ${awards.map((award) => `<h5>${esc(award.name)}</h5><p class="mono muted">${esc(award.year)}</p>`).join('')}
        </div>
    </section>
</main>
</body>
</html>`;

// Headless Chrome can stay alive after printing, so wait for the PDF to land
// and stop growing, then shut Chrome down ourselves.
const printPdf = (url, profileDir) => new Promise((resolvePrint, rejectPrint) => {
    const startedAt = Date.now();
    const proc = spawn(chrome, [
        '--headless',
        '--disable-gpu',
        '--no-first-run',
        '--no-default-browser-check',
        '--no-pdf-header-footer',
        '--allow-file-access-from-files',
        `--user-data-dir=${profileDir}`,
        `--print-to-pdf=${output}`,
        url,
    ], { stdio: 'ignore' });
    proc.on('error', rejectPrint);

    let lastSize = -1;
    const timer = setInterval(() => {
        const ready = existsSync(output) && statSync(output).mtimeMs >= startedAt - 1000;
        const size = ready ? statSync(output).size : -1;
        if (ready && size > 0 && size === lastSize) {
            clearInterval(timer);
            proc.once('exit', () => resolvePrint());
            proc.kill();
        } else if (Date.now() - startedAt > 30000) {
            clearInterval(timer);
            proc.kill();
            rejectPrint(new Error('Timed out waiting for Chrome to print the PDF'));
        }
        lastSize = size;
    }, 500);
});

const work = mkdtempSync(join(tmpdir(), 'resume-pdf-'));
try {
    const htmlPath = join(work, 'resume.html');
    writeFileSync(htmlPath, html);
    if (process.argv.includes('--html')) writeFileSync(join(root, 'resume-preview.html'), html);
    await printPdf(pathToFileURL(htmlPath).href, join(work, 'profile'));
    console.log(`Wrote ${output}`);
} finally {
    rmSync(work, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
}
