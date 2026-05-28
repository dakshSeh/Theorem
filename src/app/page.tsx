'use client';
import Link from 'next/link';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, ChevronDown, ChevronRight, Upload, Cpu, BarChart2, BookOpen, Zap, Shield, ArrowRight } from 'lucide-react';

const FEATURES = [
  { icon: Upload, title: 'Smart PDF Upload', desc: 'Drag & drop PDFs. We extract text, identify subject and chapter, and find key concepts automatically.' },
  { icon: Cpu, title: 'AI Question Engine', desc: 'Generates authentic CBSE-style MCQs, short answers, HOTS, case-based, and assertion-reason questions.' },
  { icon: Zap, title: 'Three Quiz Modes', desc: 'Practice with instant feedback, simulate exams with a timer, or let adaptive mode adjust to your level.' },
  { icon: BarChart2, title: 'Deep Analytics', desc: 'Track accuracy, weak concepts, and time per question. Get AI-powered insights on what to revise.' },
  { icon: BookOpen, title: 'Study Notes & Flashcards', desc: 'Generate comprehensive notes and spaced-repetition flashcards from any material — instantly.' },
  { icon: Shield, title: 'Curriculum Aligned', desc: 'Every question is generated with CBSE syllabus relevance enforced — no off-syllabus hallucinations.' },
];

const HOW_IT_WORKS = [
  { step: '01', title: 'Upload Your Material', desc: 'Drop a PDF, notes excerpt, or chapter summary into the forge.' },
  { step: '02', title: 'AI Reads & Understands', desc: 'The platform extracts text, identifies subject, chapter, and key concepts.' },
  { step: '03', title: 'Questions Generated', desc: 'CBSE-style questions emerge — organised by difficulty and type, ready to practice.' },
];

const FAQS = [
  { q: 'What file types can I upload?', a: 'Currently PDF files are supported. The system extracts text from standard PDFs — scanned or image-only PDFs will have limited extraction.' },
  { q: 'How many questions can I generate at once?', a: 'You can generate between 5 and 50 questions per session. Use the slider in the generator to set your count.' },
  { q: 'Are the questions actually CBSE-aligned?', a: 'Yes. The AI is prompted specifically to follow CBSE board wording conventions, difficulty calibration, and question formats.' },
  { q: 'Can I export the questions as a PDF?', a: 'Absolutely. After generation, hit Export to download a formatted PDF worksheet with or without an answer key.' },
  { q: 'Is my uploaded content stored securely?', a: 'All uploads are stored in your private Supabase bucket, protected by row-level security. Only you can access your files.' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'var(--surface)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.3s',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <div style={{ width: 28, height: 28, background: 'var(--ember)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Flame size={16} color="#fff" />
          </div>
          <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text)', letterSpacing: '-0.02em' }}>Theorem</span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="hidden md:flex">
          <a href="#features" className="btn btn-ghost btn-sm">Features</a>
          <a href="#how-it-works" className="btn btn-ghost btn-sm">How it works</a>
          <Link href="/about" className="btn btn-ghost btn-sm">About</Link>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <ThemeToggle />
          <div style={{ width: '1px', height: '24px', background: 'var(--border)' }} className="hidden md:block" />
          <Link href="/login" className="btn btn-ghost btn-sm">Sign in</Link>
          <Link href="/signup" className="btn btn-primary btn-sm">
            Start Forging <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

function EditorialGraphic() {
  return (
    <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', width: '85%', height: '85%', borderRadius: '50%',
          background: 'var(--surface-2)', border: '1px solid var(--border)',
        }}
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute', width: '65%', height: '65%', borderRadius: '50%',
          border: '1px dashed var(--ember-border)',
        }}
      />
      <div style={{
        position: 'relative', zIndex: 2,
        width: 80, height: 80, borderRadius: '50%',
        background: 'var(--surface)',
        border: '1px solid var(--border-2)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: 'var(--shadow)',
      }}>
        <BookOpen size={32} color="var(--ember)" />
      </div>

      {([
        { top: '10%', left: '0%', label: 'Analysis', delay: 0 },
        { top: '25%', right: '0%', label: 'Practice', delay: 1 },
        { bottom: '20%', left: '5%', label: 'Review', delay: 2 },
        { bottom: '10%', right: '10%', label: 'Mastery', delay: 1.5 },
      ] as Array<{ top?: string; bottom?: string; left?: string; right?: string; label: string; delay: number }>)
        .map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [0, -6, 0] }}
            transition={{ delay: item.delay, duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              ...(item.top ? { top: item.top } : {}),
              ...(item.bottom ? { bottom: item.bottom } : {}),
              ...(item.left ? { left: item.left } : {}),
              ...(item.right ? { right: item.right } : {}),
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 6, padding: '0.35rem 0.75rem',
              fontSize: '0.75rem', fontFamily: 'var(--font-serif)', color: 'var(--text-muted)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            {item.label}
          </motion.div>
        ))}
    </div>
  );
}

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="accordion-item">
      <button className="accordion-trigger" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <ChevronDown size={18} style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s', color: 'var(--text-muted)', flexShrink: 0 }} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ paddingBottom: '1.25rem', lineHeight: 1.7 }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function LandingPage() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden',
        paddingTop: '80px',
      }} className="grid-bg">
        <div className="hero-glow" style={{ top: '-10%', left: '-5%' }} />
        <div className="hero-glow" style={{ bottom: '-20%', right: '-10%', opacity: 0.5 }} />

        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '3rem', flexWrap: 'wrap', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ maxWidth: 560, flex: '1 1 300px' }}
          >
            <div className="badge badge-ember" style={{ marginBottom: '1.5rem' }}>
              <Flame size={10} /> CBSE Assessment Platform
            </div>

            <h1 style={{ marginBottom: '1.25rem' }}>
              Turn Any Chapter Into{' '}
              <span style={{ color: 'var(--ember)' }}>
                Exam-Ready Practice
              </span>
            </h1>

            <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: 480, color: 'var(--text-muted)', lineHeight: 1.8 }}>
              Upload your notes and let AI forge personalised CBSE-style assessments in seconds.
              Transform raw text into sharp understanding.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link href="/signup" className="btn btn-primary btn-lg">
                Start Forging <ArrowRight size={16} />
              </Link>
            </div>

            <div style={{ display: 'flex', gap: '2.5rem', marginTop: '2.5rem' }}>
              {[
                { value: '9+', label: 'CBSE Subjects' },
                { value: '50', label: 'Questions/set' },
                { value: '8', label: 'Question Types' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--ember)', lineHeight: 1 }}>{stat.value}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 min-w-[280px] w-full flex justify-center mt-8 md:mt-0"
          >
            <EditorialGraphic />
          </motion.div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="badge badge-ember" style={{ marginBottom: '1rem' }}>Process</div>
            <h2>Three steps to mastery</h2>
            <p style={{ marginTop: '0.75rem', maxWidth: 480, margin: '0.75rem auto 0' }}>
              From raw material to refined practice — in seconds.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {HOW_IT_WORKS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="card card-ember"
                style={{ position: 'relative', overflow: 'hidden' }}
              >
                <div style={{
                  fontSize: '4rem', fontWeight: 900,
                  color: 'var(--border)',
                  position: 'absolute', top: '0.5rem', right: '1rem',
                  lineHeight: 1, pointerEvents: 'none',
                  fontFamily: 'var(--font-mono)',
                }}>
                  {step.step}
                </div>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'var(--ember-subtle)',
                  border: '1px solid var(--ember-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1rem',
                }}>
                  <ChevronRight size={18} color="var(--ember)" />
                </div>
                <h3 style={{ marginBottom: '0.5rem' }}>{step.title}</h3>
                <p style={{ fontSize: '0.9rem' }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="badge badge-ember" style={{ marginBottom: '1rem' }}>Features</div>
            <h2>Everything you need to practice smarter</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card card-ember"
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 8,
                  background: 'var(--ember-subtle)',
                  border: '1px solid var(--ember-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1rem',
                }}>
                  <f.icon size={20} color="var(--ember)" />
                </div>
                <h3 style={{ marginBottom: '0.5rem' }}>{f.title}</h3>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section">
        <div className="container" style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="badge badge-ember" style={{ marginBottom: '1rem' }}>FAQ</div>
            <h2>Common questions</h2>
          </div>
          <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '0 1.5rem', background: 'var(--surface)' }}>
            {FAQS.map((faq) => (
              <AccordionItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ padding: '5rem 0', background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Flame size={40} color="var(--ember)" style={{ marginBottom: '1rem' }} />
            <h2 style={{ marginBottom: '1rem' }}>
              Ready to forge your mastery?
            </h2>
            <p style={{ marginBottom: '2rem', maxWidth: 440, margin: '0 auto 2rem' }}>
              Join students and teachers who are already generating smarter practice with Theorem.
            </p>
            <Link href="/signup" className="btn btn-primary btn-lg">
              Start Forging — It&apos;s Free <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: '1px solid var(--border)',
        padding: '2rem 0',
        background: 'var(--bg)',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: 22, height: 22, background: 'var(--ember)', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Flame size={12} color="#fff" />
            </div>
            <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Theorem</span>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
            Where learning is forged through practice.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/about" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>About</Link>
            <Link href="/login" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Sign in</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
