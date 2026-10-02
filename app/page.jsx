import Image from 'next/image';
import Section, { SectionLabel } from '@/components/Section';
import SelectedWork from '@/components/SelectedWork';
import OpenSourceShowcase from '@/components/OpenSourceShowcase';
import Writing from '@/components/Writing';
import ProofBand from '@/components/ProofBand';
import Socials from '@/components/Socials';
import SpaceHero from '@/components/SpaceHero';
import { email, emailHref, credentials, resumeHref } from '@/data/resume';

export default function Home() {
  return (
    <>
      <main id="main">
        <SpaceHero>
          <div className="hero-backdrop" aria-hidden="true">
            <Image
              src="/assets/space/galaxy.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              quality={85}
            />
          </div>
          <div className="hero container">
            <div className="hero-copy">
              <p className="eyebrow hero-kicker">Gaille Amolong · Software engineer · Cebu, PH</p>
              <h1 id="hero-title">
                I ship production AI and security systems and <em>publish the proof</em>.
              </h1>
              <div className="hero-actions">
                <a className="button" href={resumeHref} target="_blank" rel="noopener noreferrer">
                  Download résumé
                </a>
                <div className="hero-secondary-actions">
                  <a className="text-link" href={emailHref}>
                    Email me
                  </a>
                  <a className="text-link" href="#work">
                    Selected work
                  </a>
                </div>
              </div>
              <div className="hero-context">
                <Socials />
                <span>Remote · UTC+8</span>
              </div>
            </div>
            <div className="hero-universe">
              <svg
                className="constellation-paths"
                viewBox="0 0 500 550"
                fill="none"
                aria-hidden="true"
              >
                <path d="M165 40 C105 115 150 180 250 220 S470 140 420 190" />
                <path d="M250 220 C335 310 235 430 95 385 M250 220 C200 370 420 350 360 500" />
                <circle cx="165" cy="40" r="4" />
                <circle cx="420" cy="190" r="4" />
                <circle cx="95" cy="385" r="4" />
                <circle cx="360" cy="500" r="4" />
              </svg>
              <figure className="hero-portrait">
                <div className="portrait-frame">
                  <Image
                    src="/assets/space/portrait-cutout.webp"
                    alt="Gaille Amolong outdoors in Cebu"
                    fill
                    priority
                    sizes="(max-width: 600px) 220px, (max-width: 960px) 280px, 340px"
                  />
                </div>
              </figure>
              <ul className="hero-proof">
                <li>
                  <a href="#willed">SIEM for 170k+ users at Willed</a>
                </li>
                <li>
                  <a href="#referrin">5,000+ provider health platform at Referrin</a>
                </li>
                <li>
                  <a href="#badge-guru">20× CV pipeline speedup at BitWork</a>
                </li>
                <li>
                  <a href="#open-source">agent devtools on npm</a>
                </li>
              </ul>
            </div>
          </div>
        </SpaceHero>

        <ProofBand />
        <SelectedWork />
        <OpenSourceShowcase />

        <Writing />

        <Section id="about" title="About" className="about-section">
          <div className="about-grid">
            <figure className="speaking-photo">
              <div>
                <Image
                  src="/assets/speaker/gailleLecturing-web.jpg"
                  alt="Gaille presenting LSTM architecture to an audience at AI/DATA MiniConf in Cebu"
                  fill
                  sizes="(max-width: 600px) calc(100vw - 40px), 480px"
                />
              </div>
              <figcaption>Sharing the work / AI/DATA MiniConf, Cebu · 2025</figcaption>
            </figure>
            <div className="about-copy">
              <p className="about-lead">
                Self-taught engineer from Cebu, shipping production software since I was 17.
              </p>
              <p>
                I was the youngest engineer hired at BitWork Solutions and later led the team. My
                work spans two continents: security platform engineering for Willed in Australia and
                healthcare platform work for Referrin Health in the US.
              </p>
              <p>
                I care about systems that hold up under scrutiny: SIEM pipelines, sandboxed code
                execution, agent tooling with published benchmarks. I write about what breaks along
                the way.
              </p>
              <ul className="credentials">
                {credentials.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      <strong>{item.label}</strong>
                      <span>{item.detail}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="container">
            <SectionLabel id="contact" />
            <div className="contact-heading">
              <h2 id="contact-title">Email is fastest.</h2>
              <a className="contact-email" href={emailHref}>
                {email}
              </a>
              <p>I typically reply within one business day.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container">
          <p>
            © {new Date().getFullYear()} Gaille Amolong <span aria-hidden="true">/</span> Designed
            and built in Cebu
          </p>
          <a className="text-link" href={resumeHref} target="_blank" rel="noopener noreferrer">
            Get my résumé
          </a>
          <Socials />
          <a href="#home" className="back-top">
            Back to top
          </a>
        </div>
      </footer>
    </>
  );
}
