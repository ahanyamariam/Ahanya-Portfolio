import React, { useState, useEffect, useRef } from 'react';
import { Mail, ExternalLink, Clock, MapPin, ArrowUpRight, X, LayoutTemplate, FileCode2, MonitorSmartphone, Smartphone, TerminalSquare, Flame, Database, DatabaseZap, Leaf } from 'lucide-react';

/* ── Brand SVG Icons ─────────────────────────────────────────── */
const Github = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const Linkedin = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const XTwitter = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

/* ── Scroll-reveal hook ──────────────────────────────────────── */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

/* ── Main Component ──────────────────────────────────────────── */
export default function Portfolio() {
  const [time, setTime] = useState(new Date());
  const [selectedProject, setSelectedProject] = useState(null);

  /* Reveal refs */
  const [heroRef, heroVis] = useReveal(0.1);
  const [workRef, workVis] = useReveal(0.08);
  const [expRef, expVis] = useReveal(0.1);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setSelectedProject(null);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const projects = [
    {
      title: 'Canteen Rush AI',
      image: '/assets/pictures/canteen-rush.png',
      description: 'AI-powered campus food ordering system.',
      details: 'Canteen Rush AI is an AI-powered campus food ordering system that eliminates queues with predictive timing and real-time vendor coordination.',
      repoUrl: 'https://github.com/ahanyamariam/CANTEEN-RUSH-AI.git',
      tags: ['React', 'Node.js', 'MongoDB','Google Gemini API', 'Socket.io'],
      stepsImage: '/assets/pictures/steps.png',
      media: [
        {
          src: '/assets/videos/canteen-demo.mp4',
          desc: 'A complete walkthrough of the student experience, featuring an AI chatbot interface to effortlessly place and track food orders.'
        },
        {
          src: '/assets/videos/chatbot.mp4',
          desc: 'An intelligent AI assistant that allows students to rapidly place customized orders using natural language without navigating complex menus.',
          isLoop: true
        },
        {
          src: '/assets/videos/vendor.mp4',
          desc: 'The dedicated vendor dashboard synchronizes incoming orders in real-time, helping kitchen staff organize and prioritize food preparation during peak campus hours.'
        }
      ],
      hideLiveSite: true
    },
    {
      title: 'Nurdle',
      image: '/assets/pictures/nurdle.png',
      description: 'A daily number-guessing game inspired by Wordle',
      details: 'A daily number-guessing game inspired by Wordle. Instead of words, you guess a 3-digit number with all unique digits. After each guess, colored feedback dots tell you how many digits are correct, misplaced, or absent -- but not which ones.',
      repoUrl: 'https://github.com/Anirudh-Gonnuri/Nurdle.git',
      tags: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      liveSiteUrl: 'https://nurdle.vercel.app/'
    },
    {
      title: 'Inboxie',
      image: '/assets/pictures/inboxie.png',
      pageImageStyle: { maxWidth: '400px', margin: '0 auto 56px auto' },
      description: 'An Action-Intelligent Email Client for Reducing Missed Follow-ups and Deadlines.',
      details: 'Inboxie is a multi-provider email client that augments traditional email interfaces with an action-intelligence layer designed to reduce missed follow-ups, overlooked requests, and unmanaged deadlines. Rather than prioritizing chronological ordering, the system surfaces emails based on inferred intent, urgency, and required user action. The application emphasizes explainability, user control, and privacy-aware processing, enabling users to understand why an email is flagged and how prioritization decisions are made.',
      repoUrl: 'https://github.com/ahanyamariam/Inboxie-Enhanced.git',
      tags: ['Flutter/Dart', 'Firebase', 'Sqlite'],
      media: [
        {
          src: '/assets/videos/inboxie.mp4',
          isLoop: true,
          style: { maxWidth: '320px', margin: '0 auto' },
          desc: 'Inboxie identifies emails that require user action using a blend of rule-based and AI-assisted intent detection. By organizing messages into human-readable intents—such as "needs reply" or "waiting on others"—it helps prevent missed replies, follow-ups, and time-sensitive tasks. The application presents its prioritization decisions in an explainable and transparent manner, offering customizable labels and buckets that adapt to individual user workflows, all while maintaining strong privacy guarantees through configurable data storage modes.'
        },
        {
          images: [
            '/assets/pictures/inboxie-home.jpeg',
            '/assets/pictures/profile.png',
            '/assets/pictures/ai.png'
          ],
          desc: 'A modern interface showing the unified homepage, configurable user profiles, and AI intent detection overlays that prioritize emails effectively.'
        }
      ],
      hideLiveSite: true
    },
    {
      title: 'Hygieia',
      image: '/assets/pictures/hygieia.png',
      description: 'An all in one healthcare web platform.',
      details: 'Hygieia is an advanced healthcare platform designed to seamlessly connect patients and medical professionals through a responsive, modern interface enriched with 3D design elements. The entire ecosystem is safeguarded by strict JWT-based authentication, ensuring uncompromising security and privacy across desktop, tablet, and mobile devices.',
      repoUrl: 'https://github.com/ahanyamariam/Hygieia-enhanced.git',
      tags: ['React', 'Node.js', 'MongoDB'],
      media: [
        {
          src: '/assets/videos/intro.mp4',
          desc: 'For healthcare providers, the platform offers a robust dashboard to efficiently manage appointments, patient records, generate digital prescriptions, and track financial earnings.'
        },
        {
          src: '/assets/videos/sign_up.mp4',
          desc: 'Patients benefit from an intuitive appointment scheduling system with seamless calendar integration, backed by real-time chat support for continuous communication.'
        },
        {
          src: '/assets/videos/doctor-pharmacy.mp4',
          desc: 'A comprehensive suite of tools empowers individuals to securely maintain their medical history while providing access to an integrated online pharmacy for convenient home delivery of medications.'
        },
        {
          src: '/assets/videos/labtest.mp4',
          desc: 'The platform streamlines diagnostic care by allowing patients to easily book lab tests and receive secure digital reports directly through their personalized health portal.'
        }
      ],
      hideLiveSite: true
    },
    {
      title: 'Echo',
      image: '/assets/pictures/echo.png',
      description: 'A modern, real-time voice and text chat application.',
      details: 'Echo is a real-time web-based messaging application built using Go and React. It features secure user authentication, persistent chat rooms, and seamless voice communication powered by WebSockets, delivering a smooth and responsive experience for both text and voice interactions.',
      repoUrl: 'https://github.com/ahanyamariam/Echo.git',
      tags: ['Go','React', 'WebSockets', 'Node.js'],
      media: [
        {
          src: '/assets/videos/echo-intro.mp4',
          desc: 'A seamless onboarding experience introducing users to the real-time voice and text chat features built with Go and React.',
          isLoop: true
        },
        {
          src: '/assets/videos/echo.mp4',
          desc: 'Exploring the persistent chat rooms and low-latency communication powered securely by WebSockets.',
          isLoop: true
        },
        {
          src: '/assets/videos/disappearing-msg.mp4',
          desc: 'An automated disappearing message feature that enhances privacy by automatically removing messages after a set timeframe.',
          isLoop: true
        }
      ],
      hideLiveSite: true
    },
    {
      title: 'Sticky',
      image: '/assets/pictures/sticky.png',
      pageImage: '/assets/videos/sticky.mp4',
      description: 'A retro pixel-art sticky notes desktop app.',
      details: 'A retro pixel-art sticky notes desktop app built with Electron, featuring draggable notes, pastel color themes, todo lists, sound effects, and local persistence',
      repoUrl: 'https://github.com/ahanyamariam/Sticky.git',
      tags: ['React', 'Next.js', 'Tailwind CSS'],
      hideLiveSite: true
    }
  ];

  const experiences = [
    {
      year: '2023 — 2025',
      role: 'Digital Mission Trainer',
      company: 'Christ University',
      description: 'Conducted classes on computer science topics to non-computer science students, fostering digital literacy and empowering them with essential tech skills for the modern world.'
    },
    {
      year: '2024 — 2025',
      role: '3D Modeling Intern- Seed Money Research Project- Augmented Reality in Medical Education',
      company: 'Christ University',
      description: 'Developed interactive visual components and front-end style assets for an AR-based medical education platform, enhancing user engagement and learning outcomes through immersive 3D experiences.'
    },
  ];

  /* ── Conditional Project Page Render ────────────────────────── */
  if (selectedProject) {
    return (
      <div className="portfolio-root">
        <style dangerouslySetInnerHTML={{ __html: `
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=IBM+Plex+Mono:wght@300;400;500&family=Inter:wght@300;400;500;600&display=swap');
          *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
          body { overflow-x: hidden; background: #fafaf8; font-family: 'Inter', sans-serif; }
          .project-page {
            min-height: 100vh;
            background: #fafaf8;
            padding: 80px 40px 120px;
            max-width: 900px;
            margin: 0 auto;
            animation: pageFadeIn 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          }
          @keyframes pageFadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .project-page-back {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: transparent;
            border: none;
            font-family: 'IBM Plex Mono', monospace;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #666;
            cursor: pointer;
            margin-bottom: 48px;
            transition: color 0.2s;
          }
          .project-page-back:hover { color: #111; }
          .project-page-title {
            font-family: 'Playfair Display', serif;
            font-size: 64px;
            font-weight: 700;
            color: #111;
            line-height: 1.1;
            margin-bottom: 16px;
          }
          .project-page-desc {
            font-family: 'IBM Plex Mono', monospace;
            font-size: 16px;
            color: #666;
            margin-bottom: 48px;
          }
          .project-page-image {
            display: block;
            width: 100%;
            height: auto;
            border-radius: 16px;
            margin-bottom: 56px;
            box-shadow: 0 24px 64px rgba(0,0,0,0.1);
            background: #1a1a1a;
          }
          .project-page-content {
            font-size: 18px;
            line-height: 1.7;
            color: #333;
            margin-bottom: 48px;
            max-width: 720px;
          }
          .project-page-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-bottom: 48px;
          }
          .project-page-tag {
            font-family: 'Inter', sans-serif;
            font-size: 14px;
            padding: 8px 16px;
            background: #e8e8e8;
            color: #111;
            border-radius: 100px;
          }
          .project-page-btn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: #111;
            color: #fff;
            padding: 16px 32px;
            border-radius: 100px;
            text-decoration: none;
            font-weight: 500;
            font-size: 16px;
            transition: background 0.2s, transform 0.2s;
          }
          .project-page-btn:hover {
            background: #333;
            transform: translateY(-2px);
          }
          .project-media-item {
            margin-bottom: 64px;
            display: flex;
            flex-direction: column;
            gap: 24px;
          }
          .project-media-video {
            width: 100%;
            border-radius: 16px;
            background: transparent;
            overflow: hidden;
          }
          .project-media-desc {
            font-size: 16px;
            line-height: 1.6;
            color: #444;
            max-width: 720px;
          }
          @media (max-width: 900px) {
            .project-page { padding: 40px 24px 80px; }
            .project-page-title { font-size: 40px; }
            .project-page-image { margin-bottom: 40px; }
          }
        `}} />
        
        <div className="project-page">
          <button 
            className="project-page-back" 
            onClick={() => {
              if (window.history.state && window.history.state.project) {
                window.history.back();
              } else {
                setSelectedProject(null);
                window.history.replaceState(null, '', window.location.pathname);
              }
              window.scrollTo(0, 0);
            }}
          >
            <X size={16} /> Back to Home
          </button>

          <h1 className="project-page-title">{selectedProject.title}</h1>
          <p className="project-page-desc">{selectedProject.description}</p>

          {(selectedProject.pageImage || selectedProject.image) && (
            (selectedProject.pageImage || selectedProject.image).match(/\.(mp4|mov)$/i) ? (
              <video 
                src={selectedProject.pageImage || selectedProject.image}
                className="project-page-image"
                style={selectedProject.pageImageStyle}
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img 
                src={selectedProject.pageImage || selectedProject.image} 
                alt={selectedProject.title} 
                className="project-page-image" 
                style={selectedProject.pageImageStyle}
              />
            )
          )}

          <div className="project-page-tags">
            {selectedProject.tags?.map((tag, idx) => (
              <span key={idx} className="project-page-tag">{tag}</span>
            ))}
          </div>

          <div className="project-page-content">
            {selectedProject.details}
          </div>

          {selectedProject.repoUrl && (
            <div style={{ marginBottom: '48px' }}>
              <a 
                href={selectedProject.repoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-page-back"
                style={{ marginBottom: 0, textTransform: 'none', letterSpacing: 'normal', fontSize: '15px' }}
              >
                <Github size={18} /> View Source Code via Github
              </a>
            </div>
          )}

          {selectedProject.stepsImage && (
            <img 
              src={selectedProject.stepsImage} 
              alt="Steps" 
              className="project-page-image" 
              style={{ marginBottom: '48px', boxShadow: 'none' }}
            />
          )}

          {selectedProject.media && (
            <div className="project-media-list">
              {selectedProject.media.map((item, i) => (
                <div key={i} className="project-media-item">
                  {item.images ? (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                      {item.images.map((imgSrc, j) => (
                        <img 
                          key={j}
                          src={imgSrc} 
                          alt="Project detail" 
                          style={{ width: '100%', borderRadius: '12px', objectFit: 'cover' }}
                        />
                      ))}
                    </div>
                  ) : item.src ? (
                    <div className="project-media-video" style={item.style}>
                      <video 
                        src={item.src} 
                        autoPlay={i === 0 || item.isLoop} 
                        loop={i === 0 || item.isLoop} 
                        muted={i === 0 || item.isLoop} 
                        playsInline
                        controls={!item.isLoop && i !== 0}
                        style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', borderRadius: '16px' }}
                      />
                    </div>
                  ) : null}
                  <p className="project-media-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          )}

          {!selectedProject.hideLiveSite && (
            <a 
              href={selectedProject.liveSiteUrl || "#"} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-page-btn"
            >
              View Live Site <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=IBM+Plex+Mono:wght@300;400;500&family=Inter:wght@300;400;500;600&display=swap');

        /* ── Reset ─────────────────────────────────── */
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; background: #fafaf8; }

        /* ── Root ──────────────────────────────────── */
        .portfolio-root {
          min-height: 100vh;
          background: #fafaf8;
          color: #1a1a1a;
          font-family: 'Inter', -apple-system, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        /* ── Typography ────────────────────────────── */
        .mono  { font-family: 'IBM Plex Mono', monospace; }
        .serif { font-family: 'Playfair Display', serif; }
        .sans  { font-family: 'Inter', -apple-system, sans-serif; }

        /* ── Section Label ─────────────────────────── */
        .section-label {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 16px;
        }
        .section-label--dark {
          color: #999;
        }

        /* ── Header ────────────────────────────────── */
        .header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          backdrop-filter: blur(16px) saturate(1.8);
          -webkit-backdrop-filter: blur(16px) saturate(1.8);
          background: rgba(250,250,248,0.72);
          border-bottom: 1px solid rgba(0,0,0,0.06);
          transition: background 0.3s;
        }
        .header-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 18px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* ── Hero ──────────────────────────────────── */
        .hero {
          padding: 180px 40px 140px;
          max-width: 900px;
          margin: 0 auto;
          position: relative;
        }
        .hero-profile {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-bottom: 56px;
        }
        .hero-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #fff;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
          flex-shrink: 0;
        }
        .hero-name {
          font-family: 'Playfair Display', serif;
          font-size: 52px;
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: -0.02em;
        }
        .hero-title {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 13px;
          letter-spacing: 0.08em;
          color: #777;
          margin-top: 4px;
        }
        .hero-bio {
          font-family: 'Playfair Display', serif;
          font-size: 32px;
          line-height: 1.55;
          color: #2a2a2a;
          max-width: 780px;
          font-weight: 400;
        }
        .hero-bio .location-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #1a1a1a;
          color: #fff;
          padding: 4px 16px 4px 12px;
          border-radius: 100px;
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 500;
          vertical-align: middle;
          position: relative;
          top: -2px;
          transition: background 0.25s;
        }
        .hero-bio .location-pill:hover { background: #333; }
        .hero-links {
          margin-top: 48px;
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }
        .hero-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 14px;
          color: #666;
          text-decoration: none;
          transition: color 0.2s;
        }
        .hero-link:hover {
          color: #111;
        }

        /* ── Work / Projects ───────────────────────── */
        .work-section {
          background: #111;
          padding: 120px 40px 140px;
          position: relative;
          overflow: hidden;
        }
        .work-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px);
          background-size: 24px 24px;
          pointer-events: none;
        }
        .work-inner {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .work-heading {
          font-family: 'Playfair Display', serif;
          font-size: 26px;
          color: rgba(255,255,255,0.7);
          margin-bottom: 72px;
          font-weight: 400;
          max-width: 600px;
          line-height: 1.5;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .project-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          background: #1a1a1a;
          border: 1px solid rgba(255,255,255,0.08);
          cursor: pointer;
          transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1),
                      box-shadow 0.5s cubic-bezier(0.23, 1, 0.32, 1),
                      border-color 0.3s;
        }
        .project-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 32px 64px rgba(0,0,0,0.4);
          border-color: rgba(255,255,255,0.15);
        }
        .project-card-img-wrap {
          aspect-ratio: 16/9;
          overflow: hidden;
        }
        .project-card-img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          background: #1a1a1a;
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        .project-card:hover .project-card-img {
          transform: scale(1.08);
        }
        .project-card-body {
          padding: 24px 28px 28px;
        }
        .project-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 6px;
        }
        .project-card-desc {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px;
          color: rgba(255,255,255,0.45);
          letter-spacing: 0.03em;
        }
        .project-card-arrow {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateY(8px);
          transition: all 0.35s cubic-bezier(0.23, 1, 0.32, 1);
          color: #fff;
        }
        .project-card:hover .project-card-arrow {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Experience & Tools ────────────────────── */
        .experience-section {
          padding: 140px 40px;
          max-width: 1000px;
          margin: 0 auto;
        }
        .bottom-grid {
          display: flex;
          flex-direction: column;
          gap: 120px;
        }
        .tools-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
        }
        .tools-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 20px 24px;
          border-radius: 16px;
          border: 1px solid rgba(0,0,0,0.06);
          background: #fff;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 15px;
          color: #111;
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .tools-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.05);
        }
        .tools-icon-wrap {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: #f8f8f8;
        }
        .experience-heading {
          font-family: 'Playfair Display', serif;
          font-size: 26px;
          color: #2a2a2a;
          margin-bottom: 64px;
          font-weight: 400;
          max-width: 640px;
          line-height: 1.55;
        }
        .experience-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .experience-item {
          display: flex;
          gap: 48px;
          padding: 32px 0 32px 24px;
          border-left: 2px solid transparent;
          transition: all 0.35s ease;
          position: relative;
        }
        .experience-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 24px;
          right: 0;
          height: 1px;
          background: rgba(0,0,0,0.06);
        }
        .experience-item:last-child::after { display: none; }
        .experience-item:hover {
          border-left-color: #1a1a1a;
          background: rgba(0,0,0,0.015);
          padding-left: 32px;
        }
        .experience-year {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.06em;
          color: #999;
          width: 120px;
          flex-shrink: 0;
          padding-top: 4px;
        }
        .experience-details { flex: 1; }
        .experience-role {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 8px;
          line-height: 1.3;
        }
        .experience-role span { color: #bbb; font-weight: 400; }
        .experience-desc {
          font-size: 14px;
          color: #777;
          line-height: 1.7;
        }

        /* ── Footer ────────────────────────────────── */
        .footer {
          padding: 48px 40px;
          border-top: 1px solid rgba(0,0,0,0.06);
        }
        .footer-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .footer-left {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px;
          color: #999;
        }
        .footer-right {
          display: flex;
          align-items: center;
          gap: 32px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px;
          color: #999;
        }
        .footer-right span {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* ── Copy Notification ─────────────────────── */
        .copy-toast {
          position: fixed;
          bottom: 32px;
          right: 32px;
          background: #1a1a1a;
          color: #fff;
          padding: 14px 28px;
          border-radius: 14px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 13px;
          box-shadow: 0 16px 48px rgba(0,0,0,0.2);
          animation: toastIn 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          z-index: 200;
        }
        @keyframes toastIn {
          from { transform: translateY(24px) scale(0.95); opacity: 0; }
          to   { transform: translateY(0) scale(1); opacity: 1; }
        }

        /* ── Project Page ──────────────────────────── */
        .project-page {
          min-height: 100vh;
          background: #fafaf8;
          padding: 120px 40px 80px;
          max-width: 900px;
          margin: 0 auto;
          animation: pageFadeIn 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }
        @keyframes pageFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .project-page-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: none;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #666;
          cursor: pointer;
          margin-bottom: 48px;
          transition: color 0.2s;
        }
        .project-page-back:hover {
          color: #111;
        }
        .project-page-title {
          font-family: 'Playfair Display', serif;
          font-size: 56px;
          color: #111;
          line-height: 1.1;
          margin-bottom: 16px;
        }
        .project-page-desc {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 16px;
          color: #666;
          margin-bottom: 40px;
        }
        .project-page-image {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 16px;
          margin-bottom: 56px;
          box-shadow: 0 24px 64px rgba(0,0,0,0.1);
          background: #1a1a1a;
        }
        .project-page-content {
          font-size: 18px;
          line-height: 1.7;
          color: #333;
          margin-bottom: 48px;
          max-width: 720px;
        }
        .project-page-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 48px;
        }
        .project-page-tag {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          padding: 8px 16px;
          background: #e8e8e8;
          color: #111;
          border-radius: 100px;
        }
        .project-page-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #111;
          color: #fff;
          padding: 16px 32px;
          border-radius: 100px;
          text-decoration: none;
          font-weight: 500;
          font-size: 16px;
          transition: background 0.2s, transform 0.2s;
        }
        .project-page-btn:hover {
          background: #333;
          transform: translateY(-2px);
        }

        /* ── Reveal Animations ─────────────────────── */
        .reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.8s cubic-bezier(0.23, 1, 0.32, 1),
                      transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }

        /* ── Responsive ────────────────────────────── */
        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: 1fr; gap: 24px; }
          .bottom-grid { grid-template-columns: 1fr; gap: 64px; }
          .hero { padding: 140px 24px 100px; }
          .hero-name { font-size: 38px; }
          .hero-bio { font-size: 24px; }
          .work-section { padding: 80px 24px 100px; }
          .experience-section { padding: 100px 24px; }
          .experience-item { flex-direction: column; gap: 8px; }
          .header-inner { padding: 16px 24px; }
          .footer-inner { flex-direction: column; gap: 16px; text-align: center; }
        }
        @media (min-width: 901px) and (max-width: 1100px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      {/* ── Header ─────────────────────────────── */}
      <header className="header">
        <div className="header-inner">
          <div className="mono" style={{ fontSize: 12, letterSpacing: '0.08em', color: '#999' }}>
            EST. 2003
          </div>
          <div className="mono" style={{ fontSize: 12, letterSpacing: '0.08em', color: '#999', display: 'flex', alignItems: 'center', gap: 8 }}>
            <Clock size={13} style={{ opacity: 0.6 }} />
            {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </div>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────── */}
      <section className="hero" ref={heroRef}>
        <div className={`reveal ${heroVis ? 'visible' : ''}`}>
          <div className="hero-profile">
            <img 
              src="/assets/pictures/ahanya.jpeg"
              alt="Profile"
              className="hero-avatar"
            />
            <div>
              <h1 className="hero-name">Ahanya Mariam</h1>
            </div>
          </div>
        </div>
        
        <div className={`reveal reveal-delay-1 ${heroVis ? 'visible' : ''}`}>
          <p className="hero-bio">
            {'Hey there! I\'m Ahanya, an MCA student with a passion for software development based in '}
            <span className="location-pill">
              <MapPin size={14} />
              Bangalore, India
            </span>{' '}
              with a love for crafting beautiful and functional mobile and web experiences.
          </p>
        </div>

        <div className={`reveal reveal-delay-2 ${heroVis ? 'visible' : ''}`}>
          <div className="hero-links">
            <a href="mailto:ahanyam3@gmail.com" className="hero-link">
              <Mail size={16} />
              <span>ahanyam3@gmail.com</span>
            </a>
            <a href="https://github.com/ahanyamariam" target="_blank" rel="noopener noreferrer" className="hero-link">
              <Github size={16} />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/ahanya-mariam/" target="_blank" rel="noopener noreferrer" className="hero-link">
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Work ───────────────────────────────── */}
      <section className="work-section" ref={workRef}>
        <div className="work-inner">
          <div className={`reveal ${workVis ? 'visible' : ''}`}>
            <p className="section-label">WORK</p>
            <p className="work-heading">
              Below are some select projects.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`project-card reveal reveal-delay-${index + 1} ${workVis ? 'visible' : ''}`}
                onClick={() => {
                  window.history.pushState({ project: project.title }, '', `#${project.title.replace(/\s+/g, '-').toLowerCase()}`);
                  setSelectedProject(project);
                  window.scrollTo(0, 0);
                }}
              >
                <div className="project-card-arrow">
                  <ArrowUpRight size={16} />
                </div>
                <div className="project-card-img-wrap">
                  {project.image && project.image.match(/\.(mp4|mov)$/i) ? (
                    <video 
                      src={project.image}
                      className="project-card-img"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="project-card-img"
                    />
                  )}
                </div>
                <div className="project-card-body">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-desc">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience & Tools ────────────────────── */}
      <section className="experience-section" ref={expRef}>
        <div className="bottom-grid">
          
          <div>
            <div className={`reveal ${expVis ? 'visible' : ''}`}>
              <p className="section-label section-label--dark">EXPERIENCE</p>
            </div>

            <div className="experience-list">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`experience-item reveal reveal-delay-${index + 1} ${expVis ? 'visible' : ''}`}
                >
                  <div className="experience-year">{exp.year}</div>
                  <div className="experience-details">
                    <h3 className="experience-role">
                      {exp.role} <span>at</span> {exp.company}
                    </h3>
                    <p className="experience-desc">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className={`reveal reveal-delay-2 ${expVis ? 'visible' : ''}`}>
              <p className="section-label section-label--dark">TOOLS</p>
            </div>
            <ul className={`tools-list reveal reveal-delay-3 ${expVis ? 'visible' : ''}`}>
              <li className="tools-item">
                <div className="tools-icon-wrap"><LayoutTemplate size={20} color="#61dafb" /></div>
                React
              </li>
              <li className="tools-item">
                <div className="tools-icon-wrap"><FileCode2 size={20} color="#e34f26" /></div>
                HTML, CSS, JS
              </li>
              <li className="tools-item">
                <div className="tools-icon-wrap"><MonitorSmartphone size={20} color="#9feaf9" /></div>
                Electron
              </li>
              <li className="tools-item">
                <div className="tools-icon-wrap"><Smartphone size={20} color="#02569b" /></div>
                Flutter, Dart
              </li>
              <li className="tools-item">
                <div className="tools-icon-wrap"><TerminalSquare size={20} color="#00add8" /></div>
                Go
              </li>
              <li className="tools-item">
                <div className="tools-icon-wrap"><Flame size={20} color="#ffca28" /></div>
                Firebase
              </li>
              <li className="tools-item">
                <div className="tools-icon-wrap"><Database size={20} color="#336791" /></div>
                PostgreSQL
              </li>
              <li className="tools-item">
                <div className="tools-icon-wrap"><DatabaseZap size={20} color="#3ecf8e" /></div>
                Supabase
              </li>
              <li className="tools-item">
                <div className="tools-icon-wrap"><Leaf size={20} color="#47a248" /></div>
                MongoDB
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* ── Footer ─────────────────────────────── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-left">© Ahanya Mariam</div>
          <div className="footer-right">
            <span>Built with React</span>
            <span><MapPin size={12} /> Bangalore, India</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
