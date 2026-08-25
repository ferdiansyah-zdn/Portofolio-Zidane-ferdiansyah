const projects = [
  { number: '01', type: 'web', tag: 'JavaScript / PBO', title: 'Tugas Akhir PBO', description: 'Eksplorasi pemrograman berorientasi objek dengan JavaScript.', tech: 'JavaScript, PBO, Git. Class dan modul menjaga domain logic tetap terpisah dari UI.', problem: 'Menerapkan konsep PBO ke dalam proyek JavaScript yang terstruktur.', solution: 'Memetakan objek, merancang class, lalu menguji interaksi antar komponen.', result: 'Fondasi modular yang mudah dikembangkan. Metrik kuantitatif belum tersedia.', repo: 'https://github.com/ferdiansyah-zdn/Tugas-akhir-166_Zidane-ferdiansyah.git', visual: 'oop', visualLabel: 'OBJECT\nORIENTED' },
  { number: '02', type: 'web', tag: 'Laravel / Web Profile', title: 'Dimsum Date', description: 'Website profil untuk brand kuliner dengan pengalaman yang hangat.', tech: 'Laravel, PHP, Blade, CSS. Server-rendered pages memisahkan content, template, dan styling.', problem: 'Menyampaikan identitas brand kuliner secara informatif dan menarik.', solution: 'Menyusun struktur informasi, mengembangkan halaman, lalu menyempurnakan responsivitas.', result: 'Website profil yang jelas dan siap dijelajahi pelanggan. Metrik konversi belum tersedia.', repo: 'https://github.com/ferdiansyah-zdn/Web-Profile-Dimsum-Date.git', visual: 'dimsum', visualLabel: 'DIMSUM\nDATE' },
  { number: '03', type: 'data', tag: 'React / Dashboard', title: 'Visualisasi Data', description: 'Dashboard interaktif yang membuat data lebih mudah dibaca.', tech: 'React, JavaScript, Charting. Component-based UI memisahkan data preparation, state, dan visualisasi.', problem: 'Mengubah data mentah menjadi informasi yang mudah dipahami.', solution: 'Membersihkan data, menentukan metrik penting, lalu merancang dashboard interaktif.', result: 'Pengguna dapat menemukan pola lebih cepat. Metrik penggunaan belum tersedia.', repo: 'https://github.com/ferdiansyah-zdn/proyekdasboard', visual: 'chart', visualLabel: 'DATA\nVIEW' },
  { number: '04', type: 'design', tag: 'Figma / UI Design', title: 'Laundry UI', description: 'Perancangan UI website laundry dari alur hingga visual akhir.', tech: 'Figma, User Flow, UI Design. Prototype memvalidasi alur sebelum visual final.', problem: 'Membuat proses layanan laundry terasa sederhana bagi pengguna.', solution: 'Membuat user flow, wireframe, komponen visual, dan prototype interaktif.', result: 'Konsep antarmuka yang rapi dan mudah digunakan. Hasil usability test belum tersedia.', demo: 'https://www.figma.com/design/ivwheFKhGqKWSTbnhYWjwe/IMK?node-id=0-1&t=h2SeQcmw7IayV9Bp-1', visual: 'laundry', visualLabel: 'CLEAN\nINTERFACE' },
  { number: '05', type: 'system', tag: 'Web System / Expo', title: 'Visitor Log MJE', description: 'Sistem pencatatan pengunjung Muhammadiyah Jogja Expo.', tech: 'Web System, Database, PHP. Form input terhubung ke database dan laporan terstruktur.', problem: 'Mencatat data pengunjung event dengan lebih cepat dan teratur.', solution: 'Menganalisis alur registrasi, membangun form, dan menata data laporan.', result: 'Pencatatan pengunjung lebih rapi dan mudah dipantau. Metrik waktu input belum tersedia.', repo: 'https://github.com/ferdiansyah-zdn/Sistem-Muhammadiyah-Jogja-Expo-MJE-.git', visual: 'mje', visualLabel: 'MJE\nVISITOR' },
  { number: '06', type: 'system', tag: 'Web Profile / PHP', title: 'PT. Buharum', description: 'Sistem web profil untuk menyampaikan identitas perusahaan.', tech: 'PHP, Web Profile, CMS. Struktur halaman terpusat memudahkan pengelolaan informasi.', problem: 'Menyajikan informasi perusahaan dalam satu kanal digital yang terpercaya.', solution: 'Mengelompokkan informasi perusahaan, membangun halaman, dan menyesuaikan tampilan.', result: 'Web profile membantu perusahaan tampil lebih profesional. Metrik leads belum tersedia.', repo: 'https://github.com/ferdiansyah-zdn/Sistem-Web-Profil-PT-Buharum.git', visual: 'buharum', visualLabel: 'BUHARUM\nPROFILE' },
  { number: '07', type: 'system', tag: 'E-Office / System', title: 'E-Office PWM DIY', description: 'Sistem kerja digital untuk mendukung operasional organisasi.', tech: 'PHP, Database, E-Office. Modul berbasis peran menghubungkan input, approval, dan data organisasi.', problem: 'Merapikan alur kerja dan dokumen organisasi yang sebelumnya tersebar.', solution: 'Memetakan kebutuhan admin, merancang modul, dan menghubungkan alur data.', result: 'Operasional lebih terorganisir. Metrik efisiensi belum tersedia.', repo: 'https://github.com/ferdiansyah-zdn/Sistem-E-Office-Pimpinan-Wilayah-Muhammadiyah-Yogyakarta-PWM-DIY.git', visual: 'office', visualLabel: 'E-OFFICE\nPWM DIY' },
  { number: '08', type: 'data', tag: 'Spotify / Data Viz', title: 'Spotify Data Visualization', description: 'Membaca pola musik dan cerita di balik data Spotify.', tech: 'Data Visualization, Spotify Data. Dataset diolah menjadi indikator dan visual yang mudah dipindai.', problem: 'Menemukan cerita dan pola dari kebiasaan mendengarkan musik.', solution: 'Mengolah dataset, memilih indikator, lalu menerjemahkannya menjadi visual.', result: 'Kebiasaan musik lebih mudah dibaca. Metrik engagement belum tersedia.', repo: 'https://github.com/ferdiansyah-zdn/spotify-data-visualization.git', visual: 'spotify', visualLabel: 'PLAY\nTHE DATA' }
];

const visualMarkup = {
  oop: '<span class="shape shape-one"></span><span class="shape shape-two"></span><span class="visual-code">{ }</span>',
  dimsum: '<span class="visual-orbit"></span><span class="visual-label">D</span>',
  chart: '<span class="bar bar-a"></span><span class="bar bar-b"></span><span class="bar bar-c"></span><span class="bar bar-d"></span>',
  laundry: '<span class="laundry-ring"></span><span class="laundry-spark">✦</span>',
  mje: '<span class="visual-cross">+</span><span class="visual-log">LOG<br>01</span>',
  buharum: '<span class="visual-arch"></span><span class="visual-label">B</span>',
  office: '<span class="visual-window"><i></i><i></i><i></i></span>',
  spotify: '<span class="wave wave-a"></span><span class="wave wave-b"></span><span class="wave wave-c"></span>'
};

const grid = document.querySelector('#project-grid');
function renderProjects(filter = 'all') {
  grid.innerHTML = projects.filter(project => filter === 'all' || project.type === filter).map(project => `
    <article class="project-card project-${project.visual} reveal">
      <a class="project-visual" href="#project-detail" data-project="${project.number}" aria-label="Lihat detail ${project.title}">
        <span class="visual-number">${project.number}</span>${visualMarkup[project.visual]}<strong>${project.visualLabel.replace('\n', '<br>')}</strong><i class="card-arrow" data-lucide="arrow-up-right"></i>
      </a>
      <div class="project-meta"><div><p class="project-tag">${project.tag}</p><h3>${project.title}</h3><p class="project-description">${project.description}</p><div class="project-links">${project.demo ? `<a class="project-link" href="${project.demo}" target="_blank" rel="noreferrer">Live demo <i data-lucide="arrow-up-right"></i></a>` : ''}${project.repo ? `<a class="project-link" href="${project.repo}" target="_blank" rel="noreferrer">GitHub repository <i data-lucide="github"></i></a>` : ''}</div></div><a class="small-link" href="#project-detail" data-project="${project.number}" aria-label="Lihat detail ${project.title}"><i data-lucide="arrow-up-right"></i></a></div>
    </article>`).join('');
  lucide.createIcons();
  grid.querySelectorAll('[data-project]').forEach(trigger => trigger.addEventListener('click', event => { event.preventDefault(); openProject(trigger.dataset.project); }));
  observeReveals();
}

renderProjects();
document.querySelectorAll('.filter-button').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.filter-button.active').classList.remove('active');
  button.classList.add('active');
  renderProjects(button.dataset.filter);
}));

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('is-open', !open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuToggle.setAttribute('aria-expanded', 'false');
  nav.classList.remove('is-open');
}));

document.querySelector('#year').textContent = new Date().getFullYear();

const modal = document.querySelector('#project-modal');
const themeToggle = document.querySelector('#theme-toggle');

function openProject(number) {
  const project = projects.find(item => item.number === number);
  if (!project) return;
  document.querySelector('#modal-tag').textContent = `${project.number} / ${project.tag}`;
  document.querySelector('#modal-title').textContent = project.title;
  document.querySelector('#modal-description').textContent = project.description;
  document.querySelector('#modal-problem').textContent = project.problem;
  document.querySelector('#modal-tech').textContent = project.tech;
  document.querySelector('#modal-solution').textContent = project.solution;
  document.querySelector('#modal-result').textContent = project.result;
  document.querySelector('#modal-links').innerHTML = project.demo ? `<a class="button button-dark" href="${project.demo}" target="_blank" rel="noreferrer">Live demo <i data-lucide="arrow-up-right"></i></a>` : '';
  if (project.repo) document.querySelector('#modal-links').insertAdjacentHTML('beforeend', `<a class="button button-outline" href="${project.repo}" target="_blank" rel="noreferrer">GitHub repository <i data-lucide="github"></i></a>`);
  modal.hidden = false;
  document.body.classList.add('modal-open');
  lucide.createIcons();
  modal.querySelector('.modal-close').focus();
}

function closeProject() {
  modal.hidden = true;
  document.body.classList.remove('modal-open');
}

modal.querySelectorAll('[data-close-modal]').forEach(element => element.addEventListener('click', closeProject));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !modal.hidden) closeProject();
});

function setTheme(theme) {
  document.body.classList.toggle('dark-mode', theme === 'dark');
  themeToggle.innerHTML = `<i data-lucide="${theme === 'dark' ? 'sun' : 'moon'}"></i>`;
  themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Aktifkan light mode' : 'Aktifkan dark mode');
  lucide.createIcons();
}

setTheme(localStorage.getItem('portfolio-theme') || 'light');
themeToggle.addEventListener('click', () => {
  const theme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
  localStorage.setItem('portfolio-theme', theme);
  setTheme(theme);
});

function observeReveals() {
  const revealItems = document.querySelectorAll('.reveal:not([data-reveal-ready])');
  if (!('IntersectionObserver' in window)) {
    revealItems.forEach(item => item.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }), { threshold: 0.12 });
  revealItems.forEach(item => { item.dataset.revealReady = 'true'; observer.observe(item); });
}

observeReveals();
