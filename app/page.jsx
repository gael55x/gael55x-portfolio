import Image from 'next/image';
import Section from '@/components/Section';
import SelectedWork from '@/components/SelectedWork';
import OpenSourceShowcase from '@/components/OpenSourceShowcase';
import Writing from '@/components/Writing';
import ProofBand from '@/components/ProofBand';
import Socials from '@/components/Socials';
import { emailHref, experience, credentials, resumeHref } from '@/data/resume';

export default function Home() {
  return (
    <>
      <main id="main">
        <section id="home" className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow hero-kicker">Gaille Amolong · Software engineer · Cebu, PH</p>
            <h1 id="hero-title">
              I ship production AI and security systems and <em>publish the proof</em>.
            </h1>
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
            <div className="hero-actions">
              <a className="button" href={resumeHref} target="_blank" rel="noopener noreferrer">
                Download résumé
              </a>
              <a className="text-link" href={emailHref}>
                Email me
              </a>
              <a className="text-link" href="#work">
                Selected work
              </a>
            </div>
            <div className="hero-context">
              <Socials />
              <span>Remote · UTC+8</span>
            </div>
          </div>
          <figure className="hero-portrait">
            <div className="portrait-frame">
              <span className="portrait-fin" aria-hidden="true" />
              <Image
                src="/assets/portrait.jpg"
                alt="Gaille Amolong outdoors in Cebu"
                fill
                priority
                sizes="(max-width: 960px) 240px, 360px"
              />
            </div>
          </figure>
        </section>

        <ProofBand />
        <SelectedWork />
        <OpenSourceShowcase />

        <Section id="experience" index="03" label="Experience" title="Experience">
          <div className="experience-list">
            {experience.map((job) => (
              <article key={job.company}>
                <p className="eyebrow">{job.dates}</p>
                <div>
                  <h3>{job.company}</h3>
                  <p className="job-location">{job.location}</p>
                </div>
                <div>
                  <h4>{job.role}</h4>
                  {job.note && <p>{job.note}</p>}
                </div>
              </article>
            ))}
          </div>
          <a className="text-link" href={resumeHref} target="_blank" rel="noopener noreferrer">
            Full experience & education <span className="link-note">PDF</span>{' '}
          </a>
        </Section>

        <Writing />

        <Section id="about" index="05" label="About" title="About" className="about-section">
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
            <p className="eyebrow">
              <span>06</span> / Contact
            </p>
            <div className="contact-heading">
              <h2 id="contact-title">Email is fastest.</h2>
              <p>I typically reply within one business day.</p>
            </div>
            <div className="contact-bottom">
              <a className="contact-email" href={emailHref}>
                gaille.amolong1@gmail.com
              </a>
              <a className="text-link" href={resumeHref} target="_blank" rel="noopener noreferrer">
                Get my résumé
              </a>
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
          <Socials />
          <a href="#home" className="back-top">
            Back to top
          </a>
        </div>
      </footer>
    </>
  );
}
