import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, ArrowDown, MapPin, Phone, WhatsappLogo, Star, Quotes,
  CaretLeft, CaretRight, CheckCircle, Lightning, Heart, Users, Trophy, Timer, Fire, Lightbulb,
} from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import siteData from '../data/siteData';

const iconMap = { Heart, Star, Lightning, Trophy, Users, Timer, Fire, CheckCircle, Lightbulb };

function AnimatedCounter({ target, suffix = '', duration = 2.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const numericTarget = parseInt(target.replace(/[^0-9]/g, ''), 10) || 0;
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = numericTarget / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) { setCount(numericTarget); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, numericTarget, duration]);
  return <span ref={ref}>{inView ? count.toLocaleString() : '0'}{suffix}</span>;
}

function NoiseTexture({ opacity = 0.035 }) {
  return (
    <div className="absolute inset-0 pointer-events-none z-10" style={{
      opacity,
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'repeat', backgroundSize: '128px 128px',
    }} />
  );
}


/* 1. HERO — Full-Bleed Image with Centered Overlay Text */
function HeroSection() {
  const { business, hero } = siteData;
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = hero.backgroundImages?.map(img => img.url) || ['https://images.unsplash.com/photo-1576678927484-cc907957088c?w=1200&q=80','https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80','https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80'];
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const t = setInterval(() => setCurrentSlide(p => (p + 1) % heroImages.length), 5500);
    return () => clearInterval(t);
  }, [heroImages.length]);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] overflow-hidden bg-black">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <AnimatePresence mode="sync">
          <motion.img key={currentSlide} src={heroImages[currentSlide]} alt="IRON NATION GYM"
            className="absolute inset-0 w-full h-[130%] object-cover object-center"
            initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }} loading="eager" />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/60 z-[1]" />
      </motion.div>
      <NoiseTexture opacity={0.04} />
      <motion.div className="relative z-20 flex flex-col items-center justify-center h-full text-center max-w-5xl mx-auto px-5 sm:px-8 pt-36"
        style={{ y: textY, opacity }}>
        <motion.p initial={{ opacity: 0, letterSpacing: '0em' }} animate={{ opacity: 1, letterSpacing: '0.4em' }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-[#EF4444] text-xs sm:text-sm font-semibold uppercase mb-8" style={{ fontFamily: 'var(--font-sans)' }}>
          {hero.badge || "Fitness Community"}
        </motion.p>
        <div className="overflow-hidden">
          {(hero.titleLines || ['STRONGER','TOGETHER.']).map((line, i) => (
            <motion.div key={line} initial={{ y: '110%' }} animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.5 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}>
              <h1 className={`font-heading leading-[0.88] tracking-tight ${i === 0 ? 'text-white' : 'text-[#EF4444]'}`}
                style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 800 }}>{line}</h1>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="flex flex-wrap justify-center gap-4 mt-12">
          <Link to="/contact" className="group inline-flex items-center gap-3 bg-[#EF4444] text-white px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold hover:shadow-xl hover:shadow-[#EF4444]/30 transition-all duration-500" style={{ fontFamily: 'var(--font-sans)' }}>
            {hero.ctaPrimary || 'Join The Community'} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/services" className="group inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold hover:border-[#EF4444] hover:text-[#EF4444] transition-all duration-500" style={{ fontFamily: 'var(--font-sans)' }}>
            {hero.ctaSecondary || 'Explore Programs'}
          </Link>
        </motion.div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown size={14} className="text-[#EF4444]/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* 2. STATS */
function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const { stats } = siteData;
  const ds = stats?.length ? stats : [{ number: '8', label: 'Reviews' }, { number: '4.9', label: 'Rating' }, { number: '600', label: 'Members' }, { number: '30', label: 'Classes/Week' }];
  return (
    <section ref={ref} className="bg-[#EF4444] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {ds.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }} className="text-center">
              <div className="font-heading text-white font-bold leading-none" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                <AnimatedCounter target={String(s.number).replace(/[^0-9]/g, '')} suffix={String(s.number).replace(/[0-9]/g, '')} />
              </div>
              <div className="text-white/60 text-xs uppercase tracking-[0.2em] mt-2" style={{ fontFamily: 'var(--font-sans)' }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 3. BENTO SERVICES */
function ServicesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { servicesPreview, services } = siteData;
  const fi = ['https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80','https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80','https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80','https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80','https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80','https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80'];
  return (
    <section ref={ref} className="bg-black py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="mb-14 sm:mb-20">
          <div className="w-12 h-[3px] bg-[#EF4444] mb-6" />
          <h2 className="font-heading text-white leading-[0.92] font-bold" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
            What We <span className="text-[#EF4444]">Offer</span>
          </h2>
        </motion.div>
        {/* Bento: row 1 = 2col + 1col, row 2 = 3 equal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {(servicesPreview || []).slice(0, 6).map((service, i) => {
            const IC = iconMap[service.icon] || iconMap[service.iconName] || Star;
            const span = (i === 0 || i === 4) ? 'sm:col-span-2 lg:col-span-2' : '';
            const h = (i === 0 || i === 4) ? 'h-[280px] sm:h-[340px]' : 'h-[280px]';
            return (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.05 * i }} className={span}>
                <Link to={`/services#${services?.items?.[i]?.slug || ''}`} className={`group relative block overflow-hidden ${h}`}>
                  <img src={service.image || fi[i] || fi[0]} alt={service.title} className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" loading="eager" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4 z-10 w-10 h-10 bg-[#EF4444] flex items-center justify-center"><IC size={18} weight="fill" className="text-white" /></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <h3 className="font-heading text-white text-lg font-bold mb-1">{service.title}</h3>
                    <p className="text-white/40 text-xs leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>{service.desc}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#EF4444] z-10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* 4. COMMUNITY GALLERY */
function CommunityGallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const images = ['https://images.unsplash.com/photo-1576678927484-cc907957088c?w=1200&q=80','https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80','https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80','https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1200&q=80','https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80','https://images.unsplash.com/photo-1576678927484-cc907957088c?w=1200&q=80'];
  return (
    <section ref={ref} className="bg-neutral-950 py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <div className="w-12 h-[3px] bg-[#EF4444] mb-6" />
          <h2 className="font-heading text-white leading-[0.92] font-bold" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
            Our <span className="text-[#EF4444]">Community</span>
          </h2>
        </motion.div>
      </div>
      <div className="flex gap-2 sm:gap-3 overflow-hidden">
        {images.map((img, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }} className="flex-1 min-w-0 aspect-square overflow-hidden group">
            <img src={img} alt="Community" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" loading="eager" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* 5. TESTIMONIALS */
function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const { homeTestimonials } = siteData;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const defaults = [{ text: 'More than a gym — it is a family. Best decision I ever made.', name: 'Tinashe G.', role: 'Member', rating: 5 }, { text: 'The community here keeps you accountable. You cannot quit.', name: 'Maita W.', role: 'Athlete', rating: 5 }];
  const ts = homeTestimonials?.length ? homeTestimonials : defaults;
  const next = useCallback(() => setActive(p => (p+1) % ts.length), [ts.length]);
  useEffect(() => { const t = setInterval(next, 7000); return () => clearInterval(t); }, [next]);
  const t = ts[active];
  return (
    <section ref={ref} className="relative bg-black py-24 sm:py-32 lg:py-40 overflow-hidden">
      <NoiseTexture opacity={0.02} />
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <Quotes size={48} weight="fill" className="text-[#EF4444]/15 mx-auto mb-8" />
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.6 }}>
            <blockquote className="text-white text-lg sm:text-xl lg:text-2xl leading-relaxed font-heading font-bold mb-10">&ldquo;{t.text}&rdquo;</blockquote>
            <div className="w-8 h-[2px] bg-[#EF4444] mx-auto mb-3" />
            <div className="text-white text-sm font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>{t.name}</div>
            <div className="text-white/40 text-xs mt-1" style={{ fontFamily: 'var(--font-sans)' }}>{t.role}</div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* 6. CTA — "Iron Sharpens Iron" */
function CTASection() {
  const { business, homeCta } = siteData;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  return (
    <section ref={ref} className="relative py-28 sm:py-36 lg:py-48 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80" alt="IRON NATION GYM" className="w-full h-[130%] object-cover object-center" loading="eager" />
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>
      <NoiseTexture opacity={0.03} />
      <div className="relative z-20 max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <div className="w-16 h-[3px] bg-[#EF4444] mx-auto mb-8" />
          <h2 className="font-heading text-white leading-[0.88] font-bold mb-8" style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}>
            IRON SHARPENS<br /><span className="text-[#EF4444]">IRON</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="group inline-flex items-center gap-3 bg-[#EF4444] text-white px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold hover:shadow-xl transition-all duration-500" style={{ fontFamily: 'var(--font-sans)' }}>
              {homeCta?.ctaPrimary || 'Join Us Today'} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href={`https://wa.me/${business.whatsappNumber || '263713815329'}`} target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border border-green-500/40 text-green-400 px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold hover:bg-green-500/10 transition-all" style={{ fontFamily: 'var(--font-sans)' }}>
              <WhatsappLogo size={20} weight="fill" /> WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <StatsSection />
      <ServicesGrid />
      <CommunityGallery />
      <TestimonialsSection />
      <CTASection />
    </PageTransition>
  );
}
