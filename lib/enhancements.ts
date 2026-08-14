import { animate, inView, stagger, scroll } from 'motion';

let isEnhancementsInitialized = false;

export function initEnhancements() {
  if (typeof window === 'undefined') return;
  if (isEnhancementsInitialized) return;
  isEnhancementsInitialized = true;

  setupScrollProgressBar();
  setupHeroCharReveal();
  setupHeroBadgeFloat();
  setupTagStaggerReveal();
  setupThemeToggleSpin();
  setupCvDownloadFeedback();
  setupRippleEffect();
  setupImageSkeletonLoading();
  setupSectionHeadingUnderline();
  setupKonamiEasterEgg();

  // Round 2 — identitas visual elektronika, layout, tipografi
  setupPcbPatternLayers();
  setupSectionIndexBadges();
  setupStatHighlight();
  setupFeaturedProjectCard();
  setupQuickContactFab();
}

// -----------------------------------------------------------------------
// 1. Scroll progress bar tipis di paling atas viewport (Framer Motion scroll)
// -----------------------------------------------------------------------
function setupScrollProgressBar() {
  const bar = document.createElement('div');
  bar.className = 'scroll-progress-bar';
  bar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(bar);

  scroll((progress: number) => {
    bar.style.transform = `scaleX(${progress})`;
  });
}

// -----------------------------------------------------------------------
// 2. Reveal per-karakter untuk nama di hero section ("Zulhelmi Syahtiar.")
//    Menggunakan Framer Motion animate & stagger
// -----------------------------------------------------------------------
function setupHeroCharReveal() {
  const heroHeading = document.querySelector<HTMLElement>('#home h1');
  if (!heroHeading || heroHeading.dataset.charRevealDone) return;
  heroHeading.dataset.charRevealDone = 'true';

  function wrapTextNode(node: Text) {
    const frag = document.createDocumentFragment();
    const characters = node.textContent ?? '';

    for (const ch of characters) {
      if (ch === ' ') {
        frag.appendChild(document.createTextNode(' '));
        continue;
      }
      const span = document.createElement('span');
      span.className = 'hero-char';
      span.textContent = ch;
      frag.appendChild(span);
    }

    node.replaceWith(frag);
  }

  function walk(node: Node) {
    const children = Array.from(node.childNodes);
    for (const child of children) {
      if (child.nodeType === Node.TEXT_NODE) {
        wrapTextNode(child as Text);
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        walk(child);
      }
    }
  }

  walk(heroHeading);

  const heroChars = heroHeading.querySelectorAll<HTMLElement>('.hero-char');
  if (heroChars.length) {
    animate(
      heroChars,
      { opacity: [0, 1], y: [26, 0], rotate: [6, 0] } as any,
      { delay: stagger(0.024, { startDelay: 0.1 }), duration: 0.65, ease: [0.16, 1, 0.3, 1] } as any
    );
  }
}

// -----------------------------------------------------------------------
// 3. Badge industrial (icon "memory") di hero-frame: float Framer Motion
// -----------------------------------------------------------------------
function setupHeroBadgeFloat() {
  const badge = document.querySelector<HTMLElement>('#hero-frame .animate-pulse, #hero-frame .badge-float-anim');
  if (!badge) return;
  badge.classList.remove('animate-pulse');
  animate(
    badge,
    { y: [0, -8, 0], rotate: [0, 4, 0] } as any,
    { duration: 3.2, repeat: Infinity, ease: 'easeInOut' } as any
  );
}

// -----------------------------------------------------------------------
// 4. Tag teknologi di kartu proyek/galeri: stagger reveal dengan Framer Motion
// -----------------------------------------------------------------------
function setupTagStaggerReveal() {
  const cards = document.querySelectorAll<HTMLElement>('.project-card, .gallery-card');
  if (!cards.length) return;

  cards.forEach((card) => {
    const tags = card.querySelectorAll<HTMLElement>('.p-8 > .flex.flex-wrap.gap-2 > span, .flex.flex-wrap.gap-2 > span');
    if (!tags.length) return;
    inView(card, () => {
      card.classList.add('tags-revealed');
      animate(
        tags,
        { opacity: [0, 1], y: [10, 0] } as any,
        { delay: stagger(0.05), duration: 0.4, ease: [0.16, 1, 0.3, 1] } as any
      );
    });
  });
}

// -----------------------------------------------------------------------
// 5. Modal: ditangani oleh animateModalOpen & animateModalClose di initPortfolio.ts
// -----------------------------------------------------------------------

// -----------------------------------------------------------------------
// 6. Nav hover underline: murni CSS (lihat globals.css).
// -----------------------------------------------------------------------

// -----------------------------------------------------------------------
// 7. Theme toggle: efek spin Framer Motion saat diklik
// -----------------------------------------------------------------------
function setupThemeToggleSpin() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  themeToggle.addEventListener('click', () => {
    animate(
      themeToggle,
      { rotate: [0, 360], scale: [0.85, 1.1, 1] } as any,
      { duration: 0.5, ease: [0.16, 1, 0.3, 1] } as any
    );
  });
}

// -----------------------------------------------------------------------
// 8. Tombol "Unduh CV" (PDF): tampilkan spinner singkat sebagai feedback
//    visual selagi window print disiapkan oleh initPortfolio.ts.
//    Listener ini terpisah & tidak mengganggu handler asli (downloadPDFCV).
// -----------------------------------------------------------------------
function setupCvDownloadFeedback() {
  const btn = document.getElementById('download-pdf-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    if (btn.dataset.loading === 'true') return;
    btn.dataset.loading = 'true';

    const originalHTML = btn.innerHTML;
    btn.innerHTML = `<span class="btn-loading-spinner"></span><span>Menyiapkan PDF...</span>`;

    window.setTimeout(() => {
      btn.innerHTML = originalHTML;
      btn.dataset.loading = 'false';
    }, 800);
  });
}

// -----------------------------------------------------------------------
// 9. Toast: sudah ditangani murni lewat CSS (lihat globals.css bagian 9).
// -----------------------------------------------------------------------

// -----------------------------------------------------------------------
// 10. Ripple effect untuk semua tombol dengan class .btn-press
// -----------------------------------------------------------------------
function setupRippleEffect() {
  document.addEventListener('click', (e) => {
    const target = (e.target as HTMLElement).closest<HTMLElement>('.btn-press');
    if (!target) return;

    const computedPosition = window.getComputedStyle(target).position;
    if (computedPosition === 'static') {
      target.style.position = 'relative';
    }
    const prevOverflow = target.style.overflow;
    target.style.overflow = 'hidden';

    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const ripple = document.createElement('span');
    ripple.className = 'ripple-span';
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

    target.appendChild(ripple);
    window.setTimeout(() => {
      ripple.remove();
      // Kembalikan overflow seperti semula supaya tidak mengganggu efek
      // lain (mis. hard-shadow) di luar momen ripple berlangsung.
      target.style.overflow = prevOverflow;
    }, 650);
  });
}

// -----------------------------------------------------------------------
// 11. Skeleton shimmer untuk gambar (termasuk yang dirender belakangan
//     lewat innerHTML oleh initPortfolio.ts, mis. galeri modal).
// -----------------------------------------------------------------------
function setupImageSkeletonLoading() {
  function treat(img: HTMLImageElement) {
    if (img.dataset.skeletonDone) return;
    // Lewati gambar kecil (thumbnail strip) & gambar di dalam lightbox modal
    if (img.closest('#image-modal')) return;
    img.dataset.skeletonDone = 'true';

    const wrapper = img.parentElement;
    if (!wrapper) return;

    img.classList.add('img-fade-target');

    function markLoaded() {
      img.classList.add('img-loaded');
      wrapper?.classList.remove('img-skeleton-wrap');
    }

    if (img.complete && img.naturalWidth > 0) {
      markLoaded();
      return;
    }

    wrapper.classList.add('img-skeleton-wrap');
    img.addEventListener('load', markLoaded, { once: true });
    img.addEventListener('error', markLoaded, { once: true });
  }

  document.querySelectorAll<HTMLImageElement>('img').forEach(treat);

  // Amati gambar baru yang dirender dinamis (galeri modal, upload foto, dst.)
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      mutation.addedNodes.forEach((node) => {
        if (!(node instanceof HTMLElement)) return;
        if (node.tagName === 'IMG') {
          treat(node as HTMLImageElement);
        } else {
          node.querySelectorAll<HTMLImageElement>('img').forEach(treat);
        }
      });
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

// -----------------------------------------------------------------------
// 12. Underline "menggambar" di bawah judul tiap section saat masuk viewport
// -----------------------------------------------------------------------
function setupSectionHeadingUnderline() {
  const headingList = Array.from(
    document.querySelectorAll<HTMLElement>(
      '#experience h1, #projects h1, #design-photo h1, #skills h1, #certifications h1, #contact h1'
    )
  );
  if (!headingList.length) return;

  headingList.forEach((h1) => {
    const underline = document.createElement('span');
    underline.className = 'heading-underline';
    underline.setAttribute('aria-hidden', 'true');
    h1.insertAdjacentElement('afterend', underline);

    inView(h1, () => {
      underline.classList.add('underline-in-view');
      animate(
        underline,
        { scaleX: [0, 1] } as any,
        { duration: 0.65, ease: [0.16, 1, 0.3, 1] } as any
      );
    });
  });
}

// -----------------------------------------------------------------------
// 13. Easter egg: Konami Code -> confetti pixel-art jatuh + toast lucu
// -----------------------------------------------------------------------
function setupKonamiEasterEgg() {
  const sequence = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
  ];
  let cursor = 0;

  window.addEventListener('keydown', (e) => {
    if (!e || typeof e.key !== 'string') return;
    const key = e.key.toLowerCase();
    const expected = sequence[cursor]?.toLowerCase();

    if (expected && key === expected) {
      cursor++;
      if (cursor === sequence.length) {
        cursor = 0;
        triggerConfetti();
      }
    } else {
      const firstExpected = sequence[0].toLowerCase();
      cursor = key === firstExpected ? 1 : 0;
    }
  });
}

function triggerConfetti() {
  const colors = ['#58E200', '#256CFF', '#ffffff', '#facc15'];
  const count = 40;

  for (let i = 0; i < count; i++) {
    const piece = document.createElement('div');
    piece.className = 'pixel-confetti';
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = colors[i % colors.length];
    piece.style.animationDuration = `${1.8 + Math.random() * 1.4}s`;
    piece.style.animationDelay = `${Math.random() * 0.4}s`;
    document.body.appendChild(piece);
    window.setTimeout(() => piece.remove(), 4000);
  }

  // Pakai toast bawaan kalau ada (dipasang oleh initPortfolio.ts di window)
  const toast = document.getElementById('custom-toast');
  const toastTitle = document.getElementById('toast-title');
  const toastMessage = document.getElementById('toast-message');
  if (toast && toastTitle && toastMessage) {
    toastTitle.textContent = 'Easter Egg Ditemukan!';
    toastMessage.textContent =
      'Konami Code berhasil dimasukkan. Terima kasih sudah mengeksplorasi portfolio ini sampai sedetail ini! 🎮';
    toast.classList.remove('opacity-0', 'pointer-events-none', '-translate-y-4');
    toast.classList.add('opacity-100', 'translate-y-0');
    window.setTimeout(() => {
      toast.classList.remove('opacity-100', 'translate-y-0');
      toast.classList.add('opacity-0', 'pointer-events-none', '-translate-y-4');
    }, 3500);
  }
}

// -----------------------------------------------------------------------
// 14. Pola sirkuit PCB tipis sebagai layer dekoratif di beberapa section
//     (Experience, Skills, Certifications) — identitas visual yang
//     terkait langsung ke jurusan Elektronika Industri.
// -----------------------------------------------------------------------
function setupPcbPatternLayers() {
  const sectionIds = ['experience', 'skills', 'certifications'];

  sectionIds.forEach((id) => {
    const section = document.getElementById(id);
    if (!section || section.querySelector(':scope > .pcb-pattern-layer')) return;

    const layer = document.createElement('div');
    layer.className = 'pcb-pattern-layer';
    layer.setAttribute('aria-hidden', 'true');
    section.insertBefore(layer, section.firstChild);
  });
}

// -----------------------------------------------------------------------
// 15. Nomor urut section ("01", "02", dst) di atas tiap judul section
// -----------------------------------------------------------------------
function setupSectionIndexBadges() {
  const sectionOrder = [
    { id: 'experience', label: '01 — Pengalaman' },
    { id: 'projects', label: '02 — Proyek' },
    { id: 'design-photo', label: '03 — Kreatif' },
    { id: 'skills', label: '04 — Keahlian' },
    { id: 'certifications', label: '05 — Sertifikasi' },
    { id: 'contact', label: '06 — Kontak' },
  ];

  sectionOrder.forEach(({ id, label }) => {
    const heading = document.querySelector<HTMLElement>(`#${id} h1`);
    if (!heading || heading.dataset.indexBadgeDone) return;
    heading.dataset.indexBadgeDone = 'true';

    const badge = document.createElement('span');
    badge.className = 'section-index-badge';
    badge.textContent = label;
    heading.insertAdjacentElement('beforebegin', badge);
  });
}

// -----------------------------------------------------------------------
// 16. Tonjolkan angka statistik (IPK) di dalam kalimat supaya lebih mudah
//     "ditangkap mata" tanpa perlu baca seluruh paragraf.
// -----------------------------------------------------------------------
function setupStatHighlight() {
  const candidates = document.querySelectorAll<HTMLElement>('p');
  const pattern = /(3\.55\s*\/\s*4\.00)/g;

  candidates.forEach((el) => {
    if (el.dataset.statHighlightDone) return;
    if (!el.textContent || !pattern.test(el.textContent)) return;
    pattern.lastIndex = 0;

    if (el.innerHTML.includes('stat-highlight')) return;
    el.dataset.statHighlightDone = 'true';
    el.innerHTML = el.innerHTML.replace(pattern, '<span class="stat-highlight">$1</span>');
  });
}

// -----------------------------------------------------------------------
// 17. Jadikan kartu proyek Tugas Akhir (Trainer Motor DC) lebih besar/
//     menonjol dibanding kartu proyek lain di grid yang sama.
// -----------------------------------------------------------------------
function setupFeaturedProjectCard() {
  const featuredCard = document.querySelector<HTMLElement>(
    '.project-card[data-search*="tugas akhir pnj"]'
  );
  if (!featuredCard || featuredCard.dataset.featuredDone) return;
  featuredCard.dataset.featuredDone = 'true';
  featuredCard.classList.add('md:col-span-2');
}

// -----------------------------------------------------------------------
// 18. Floating quick-contact bubble (Email, LinkedIn, GitHub) di pojok
//     layar, supaya recruiter bisa menghubungi tanpa scroll ke section
//     kontak.
// -----------------------------------------------------------------------
function setupQuickContactFab() {
  if (document.querySelector('.quick-contact-fab')) return;

  const fab = document.createElement('div');
  fab.className = 'quick-contact-fab';
  fab.innerHTML = `
    <div class="quick-contact-fab-items" role="menu" aria-label="Kontak cepat">
      <a class="quick-contact-fab-item" href="mailto:helmi2591@gmail.com" role="menuitem">
        <span class="material-symbols-outlined">mail</span>
        <span>Email</span>
      </a>
      <a class="quick-contact-fab-item" href="https://www.linkedin.com/in/zulhelmisyahtiar/" target="_blank" rel="noopener noreferrer" role="menuitem">
        <span class="material-symbols-outlined">work</span>
        <span>LinkedIn</span>
      </a>
      <a class="quick-contact-fab-item" href="https://github.com/Zhlsyh/" target="_blank" rel="noopener noreferrer" role="menuitem">
        <span class="material-symbols-outlined">code</span>
        <span>GitHub</span>
      </a>
    </div>
    <button type="button" class="quick-contact-fab-toggle" aria-label="Buka menu kontak cepat" aria-expanded="false">
      <span class="material-symbols-outlined">add</span>
    </button>
  `;

  document.body.appendChild(fab);

  const toggleBtn = fab.querySelector<HTMLButtonElement>('.quick-contact-fab-toggle');
  const toggleIcon = fab.querySelector<HTMLElement>('.quick-contact-fab-toggle .material-symbols-outlined');
  const items = fab.querySelectorAll<HTMLElement>('.quick-contact-fab-item');

  toggleBtn?.addEventListener('click', () => {
    const isOpen = fab.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', String(isOpen));

    if (toggleIcon) {
      animate(toggleIcon, { rotate: isOpen ? 45 : 0 } as any, { duration: 0.3, ease: [0.16, 1, 0.3, 1] } as any);
    }

    if (isOpen) {
      animate(
        items,
        { opacity: [0, 1], y: [16, 0], scale: [0.85, 1] } as any,
        { delay: stagger(0.06), duration: 0.35, ease: [0.16, 1, 0.3, 1] } as any
      );
    }
  });

  // Tutup otomatis kalau klik di luar bubble
  document.addEventListener('click', (e) => {
    if (!fab.contains(e.target as Node) && fab.classList.contains('open')) {
      fab.classList.remove('open');
      toggleBtn?.setAttribute('aria-expanded', 'false');
      if (toggleIcon) animate(toggleIcon, { rotate: 0 } as any, { duration: 0.3 });
    }
  });
}
