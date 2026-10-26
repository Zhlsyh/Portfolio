import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { PROJECTS_DATA } from '@/data/projects';
import { CAPABILITIES, CERTIFICATIONS, CONTACT, EXPERIENCE, SITE } from '@/data/content';
import { EDUCATION, HOBBIES, ORGANIZATIONS, SPOTIFY } from '@/data/journey';
import type { Project } from './ProjectModal';
import SafeImg from './SafeImg';

const CV_URL = '/cv/CV_Zulhelmi_Syahtiar_Umum.pdf';

const AlternateCtx = createContext(true);

function Section({ id, side = 'left', children }: { id: string; side?: 'left' | 'right'; children: ReactNode }) {
  const alternate = useContext(AlternateCtx);
  if (!alternate) side = 'left';
  return (
    <section
      id={id}
      className="pointer-events-none relative z-10 px-4 py-8 md:flex md:min-h-[100svh] md:items-center md:px-14 md:py-24"
    >
      <div className={`pointer-events-auto w-full md:w-[min(36rem,46vw)] ${side === 'right' ? 'md:ml-auto' : ''}`}>
        {children}
      </div>
    </section>
  );
}

function Heading({ eyebrow, color, title, children }: { eyebrow: string; color: string; title: string; children?: ReactNode }) {
  return (
    <header className="mb-5 space-y-3">
      <span className="eyebrow" style={{ background: color }}>
        {eyebrow}
      </span>
      <h2 className="text-4xl md:text-5xl">{title}</h2>
      {children && <p className="text-ink-soft">{children}</p>}
    </header>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="glass-card card-lift flex h-full w-full flex-col overflow-hidden text-left"
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-cream">
        <SafeImg src={project.image} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-3">
        <p className="line-clamp-3 font-display text-[0.95rem] font-bold leading-tight">{project.title}</p>
        <div className="mt-auto flex flex-wrap gap-1">
          {project.tags.slice(0, 2).map((t) => (
            <span key={t} className="chip !px-2 !py-0 !text-[0.7rem]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}

function Grid({ items, onOpen, limit }: { items: Project[]; onOpen: (p: Project) => void; limit?: number }) {
  const [all, setAll] = useState(false);
  const shown = limit && !all ? items.slice(0, limit) : items;
  return (
    <div className="space-y-4">
      <ul className="grid grid-cols-2 gap-3 md:gap-4">
        {shown.map((p) => (
          <li key={p.id} className="min-w-0">
            <ProjectCard project={p} onOpen={onOpen} />
          </li>
        ))}
      </ul>
      {limit && items.length > limit && (
        <button type="button" className="btn" onClick={() => setAll((v) => !v)} aria-expanded={all}>
          {all ? 'Tampilkan lebih sedikit' : `Lihat semua (${items.length})`}
        </button>
      )}
    </div>
  );
}

function CopyEmail({ email }: { email: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      className="btn"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setDone(true);
          setTimeout(() => setDone(false), 1800);
        } catch {
          window.prompt('Salin email:', email);
        }
      }}
    >
      {done ? 'Tersalin ✓' : 'Salin email'}
    </button>
  );
}

const PREFERRED_ENG = ['eng-1', 'eng-numa', 'eng-2', 'eng-3', 'eng-4', 'eng-6'];

interface Props {
  onOpen: (p: Project) => void;
  onGo: (id: string) => void;
  /** true: panel berganti sisi mengikuti kamera 3D. false: semua panel di kiri (mode ilustrasi statis). */
  alternate: boolean;
}

export default function Sections({ onOpen, onGo, alternate }: Props) {
  const { eng, photo, design } = useMemo(() => {
    const all = Object.values(PROJECTS_DATA).filter((p) => !p.id.startsWith('org-'));
    const rank = (id: string) => {
      const r = PREFERRED_ENG.indexOf(id);
      return r === -1 ? 99 : r;
    };
    return {
      eng: all.filter((p) => p.category === 'engineering').sort((a, b) => rank(a.id) - rank(b.id)),
      photo: all.filter((p) => p.category === 'photography'),
      design: all.filter((p) => p.category === 'design'),
    };
  }, []);

  const pln = EXPERIENCE[0];
  const freelance = EXPERIENCE[1];
  const openById = (id: string) => {
    const p = PROJECTS_DATA[id];
    if (p) onOpen(p);
  };

  return (
    <AlternateCtx.Provider value={alternate}>
      <main className="pointer-events-none relative z-10 pb-24 md:pb-0">
        {/* HOME */}
        <Section id="home">
          <div className="glass space-y-5 p-5 md:p-8">
            <span className="eyebrow bg-sun">Fresh graduate · D3 Elektronika Industri PNJ</span>
            <h1 className="text-[2.6rem] sm:text-6xl md:text-[4.2rem]">
              Zulhelmi
              <br />
              <span>Syahtiar</span>
            </h1>
            <p className="text-lg font-medium">
              Embedded &amp; IoT engineer yang juga memotret dan mendesain. Merancang sistem kontrol cerdas dan IoT dengan kendali presisi, didukung dokumentasi visual yang terarah.
            </p>
            <p className="text-[0.95rem] text-ink-soft">
              Magang proteksi tenaga listrik di PT PLN, proyek ESP32 dan sistem kendali PID/Fuzzy, serta freelance
              fotografi dan desain grafis sejak 2023.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <button type="button" className="btn btn-primary" onClick={() => onGo('workbench')}>
                Keliling studio <span aria-hidden>↓</span>
              </button>
              <a className="btn" href={CV_URL} target="_blank" rel="noopener noreferrer">
                Unduh CV
              </a>
            </div>
            <p className="hidden items-center gap-2 pt-1 text-sm text-ink-soft md:flex">
              <span className="hint-bounce inline-block" aria-hidden>
                ↓
              </span>
              Scroll atau klik objek 3D untuk berpindah pojok
            </p>
          </div>
        </Section>

        {/* WORKBENCH */}
        <Section id="workbench">
          <div className="glass space-y-6 p-5 md:p-7">
            <Heading eyebrow="Pojok 01 · Engineering" color="#7fd1ae" title="Workbench">
              Tempat ESP32, motor, dan sensor dirakit sampai benar-benar jalan.
            </Heading>

            <article className="space-y-3 rounded-2xl border bg-tint-mint p-4" style={{ borderColor: 'var(--glass-border)' }}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="chip">{pln.tag}</span>
                <span className="text-sm font-semibold">{pln.period}</span>
              </div>
              <h3 className="text-xl">{pln.title}</h3>
              <p className="text-sm font-semibold">{pln.org}</p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-ink-soft">
                {pln.points.slice(0, 3).map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {pln.skills.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </article>

            <Grid items={eng} onOpen={onOpen} limit={6} />
          </div>
        </Section>

        {/* PHOTO */}
        <Section id="photo" side="right">
          <div className="glass space-y-6 p-5 md:p-7">
            <Heading eyebrow="Pojok 02 · Fotografi" color="#ffd24a" title="Photo Corner">
              Foto kelulusan, dokumentasi acara, dan hasil photo hunting. Dari pengarahan gaya sampai editing.
            </Heading>
            <ul className="space-y-1.5 text-sm text-ink-soft">
              {freelance.points.slice(0, 2).map((p) => (
                <li key={p} className="flex gap-2">
                  <span aria-hidden>●</span>
                  {p}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5">
              {freelance.skills.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
            <Grid items={photo} onOpen={onOpen} />
          </div>
        </Section>

        {/* DESIGN */}
        <Section id="design">
          <div className="glass space-y-6 p-5 md:p-7">
            <Heading eyebrow="Pojok 03 · Desain" color="#6ec1e4" title="Design Desk">
              Poster, feeds, merchandise, dan identitas visual untuk organisasi, acara, dan brand sendiri.
            </Heading>
            <Grid items={design} onOpen={onOpen} />
          </div>
        </Section>

        {/* PERJALANAN: pendidikan + organisasi */}
        <Section id="journey" side="right">
          <div className="glass space-y-7 p-5 md:p-7">
            <Heading eyebrow="Rekam Jejak" color="#ff9eb5" title="Pendidikan & organisasi">
              Dari bangku SMA MIPA sampai D3 Elektronika Industri, plus kepanitiaan yang mengasah sisi kreatif.
            </Heading>

            <div className="space-y-3">
              <h3 className="text-xl">Pendidikan</h3>
              <ul className="space-y-3">
                {EDUCATION.map((e) => (
                  <li key={e.school} className="glass-card space-y-2 p-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <p className="font-display text-lg font-bold leading-tight">{e.school}</p>
                      <span className="text-sm font-semibold">{e.period}</span>
                    </div>
                    <p className="text-sm text-ink-soft">
                      {e.program} · {e.place}
                    </p>
                    {e.badge && <span className="chip bg-sun !text-on-accent" style={{ background: '#ffd24a', borderColor: '#2b2230' }}>{e.badge}</span>}
                    {e.points.length > 0 && (
                      <ul className="list-disc space-y-1 pl-5 text-sm text-ink-soft">
                        {e.points.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    )}
                    {e.projectId && (
                      <button type="button" className="btn !px-4 !py-2 !text-sm" onClick={() => openById(e.projectId)}>
                        Lihat proyek tugas akhir
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl">Organisasi &amp; kepanitiaan</h3>
              <ul className="space-y-2.5">
                {ORGANIZATIONS.map((o, i) => (
                  <li key={o.id}>
                    <details className="org glass-card overflow-hidden" open={i === 0}>
                      <summary className="flex items-center gap-3 p-3">
                        <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl bg-white/80 p-1">
                          <SafeImg src={o.logo} alt="" className="h-full w-full object-contain" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-display text-[0.95rem] font-bold leading-tight">{o.name}</span>
                          <span className="block text-sm text-ink-soft">
                            {o.role} · {o.period}
                          </span>
                        </span>
                        <span className="org-caret shrink-0 transition-transform" aria-hidden>
                          ▾
                        </span>
                      </summary>
                      <div className="space-y-2 border-t border-[var(--glass-border)] p-3 text-sm">
                        <p className="text-ink-soft">{o.about}</p>
                        <ul className="list-disc space-y-0.5 pl-5">
                          {o.points.map((p) => (
                            <li key={p}>{p}</li>
                          ))}
                        </ul>
                        <button type="button" className="chip hover:bg-sun hover:!text-on-accent" onClick={() => openById(o.id)}>
                          Lihat dokumentasi ↗
                        </button>
                      </div>
                    </details>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* BONUS: hobi + musik */}
        <Section id="bonus">
          <div className="glass space-y-7 p-5 md:p-7">
            <Heading eyebrow="Aktivitas Personal" color="#c8a8ff" title="Hobi & musik">
              Dua hobi yang akhirnya jadi pekerjaan sampingan, dan playlist yang menemani prosesnya.
            </Heading>

            <ul className="space-y-4">
              {HOBBIES.map((h) => (
                <li key={h.key} className="glass-card space-y-3 p-4">
                  <div className="flex items-center gap-2.5">
                    <span className="h-3.5 w-3.5 rounded-full border-2 border-[#2b2230]" style={{ background: h.color }} aria-hidden />
                    <h3 className="text-2xl">{h.title}</h3>
                  </div>
                  <p className="text-sm text-ink-soft">{h.text}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {h.tags.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                  {h.images.length > 0 && (
                    <div className="grid grid-cols-2 gap-2">
                      {h.images.map((src, idx) => (
                        <div
                          key={src}
                          className={`overflow-hidden rounded-xl bg-cream ${idx === 0 ? 'col-span-2 aspect-[3/2]' : 'aspect-[3/4]'}`}
                        >
                          <SafeImg src={src} alt={`Hasil foto ${idx + 1}`} className="h-full w-full object-cover" />
                        </div>
                      ))}
                    </div>
                  )}
                  {h.key === 'design' && (
                    <div className="flex gap-2" aria-hidden>
                      {['#ff7a45', '#ffd24a', '#7fd1ae', '#6ec1e4', '#ff9eb5', '#c8a8ff'].map((c) => (
                        <span key={c} className="h-8 flex-1 rounded-lg border border-[var(--glass-border)]" style={{ background: c }} />
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <div className="space-y-3">
              <h3 className="text-xl">Lagu favorit</h3>
              {SPOTIFY.embedPath ? (
                <iframe
                  title="Pemutar Spotify"
                  src={`https://open.spotify.com/embed/${SPOTIFY.embedPath}?utm_source=generator`}
                  width="100%"
                  height="152"
                  loading="lazy"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  className="rounded-2xl border-0"
                />
              ) : null}
              <a
                href={SPOTIFY.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card card-lift flex items-center gap-4 p-4"
              >
                <span
                  className="grid h-14 w-14 shrink-0 place-items-center rounded-full border-2 border-[#2b2230]"
                  style={{ background: 'conic-gradient(#1db954, #17a34a, #1db954)' }}
                  aria-hidden
                >
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="#2b2230">
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm4.6 14.4a.62.62 0 0 1-.86.2c-2.35-1.44-5.3-1.76-8.8-.97a.62.62 0 1 1-.28-1.22c3.8-.87 7.1-.5 9.74 1.1.3.18.39.57.2.89zm1.22-2.72a.78.78 0 0 1-1.07.26c-2.69-1.65-6.79-2.13-9.97-1.16a.78.78 0 0 1-.45-1.5c3.63-1.1 8.14-.57 11.23 1.33.37.22.48.7.26 1.07zm.1-2.83C14.7 8.9 9.4 8.73 6.33 9.66a.93.93 0 1 1-.54-1.78c3.52-1.07 9.37-.86 13.07 1.34a.93.93 0 0 1-.94 1.6z" />
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-lg font-bold leading-tight">{SPOTIFY.displayName} di Spotify</span>
                  <span className="block text-sm text-ink-soft">Buka profil untuk lihat apa yang sedang saya dengarkan ↗</span>
                </span>
              </a>
            </div>
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" side="left">
          <div className="glass space-y-6 p-5 md:p-7">
            <Heading eyebrow="Kapabilitas" color="#7fd1ae" title="Keahlian & sertifikasi">
              Ringkasan tools dan bukti belajar yang saya terapkan dalam perkuliahan, magang industri, dan proyek mandiri.
            </Heading>
            <div className="space-y-4">
              {CAPABILITIES.map((c) => (
                <div key={c.title} className="space-y-1.5">
                  <h3 className="text-base">{c.title}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {c.items.map((i) => (
                      <span key={i.name} className="chip">
                        {i.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              <h3 className="text-xl">Sertifikasi</h3>
              <ul className="grid grid-cols-[minmax(0,1fr)] gap-3">
                {CERTIFICATIONS.map((c) => (
                  <li key={c.title} className="glass-card bg-tint-pink p-3">
                    <div className="flex items-baseline justify-between gap-2">
                      <p className="font-display font-bold leading-tight">{c.title}</p>
                      <span className="shrink-0 text-xs font-semibold">{c.period}</span>
                    </div>
                    <p className="text-sm text-ink-soft">{c.issuer}</p>
                    <p className="mt-1 break-all font-mono text-[0.7rem] text-ink-soft">{c.regNo}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" side="right">
          <div className="glass space-y-5 p-5 md:p-7">
            <Heading eyebrow="Pojok 04 · Kontak" color="#ff9eb5" title="Say hi!">
              {CONTACT.description}
            </Heading>
            <div className="flex flex-wrap gap-3">
              <a className="btn btn-primary" href={`mailto:${CONTACT.email}`}>
                Kirim email
              </a>
              <CopyEmail email={CONTACT.email} />
              <a
                className="btn"
                href={`https://wa.me/62${SITE.phone.replace(/\D/g, '').replace(/^0/, '')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              <a className="btn" href={CV_URL} target="_blank" rel="noopener noreferrer">
                Unduh CV
              </a>
            </div>
            <ul className="flex flex-wrap gap-2">
              {CONTACT.socials.map((s) => (
                <li key={s.label}>
                  <a className="chip hover:bg-sun hover:!text-on-accent" href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label} · {s.handle}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-sm text-ink-soft">
              {CONTACT.email} · {CONTACT.location}
            </p>
          </div>
          <p className="mt-6 text-center text-xs text-ink-soft md:text-right">
            <span className="glass !rounded-full inline-block px-3 py-1">
              © 2026 Zulhelmi Syahtiar · dibuat dengan Next.js &amp; Three.js
            </span>
          </p>
        </Section>
      </main>
    </AlternateCtx.Provider>
  );
}
