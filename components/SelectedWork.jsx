import Section from '@/components/Section';
import BadgeStudy from '@/components/BadgeStudy';
import { selectedWork } from '@/data/selectedWork';
import { resumeHref } from '@/data/resume';

export default function SelectedWork() {
  return (
    <div id="experience">
      <Section id="work" title="Impact at scale">
        <div className="case-studies">
          {selectedWork.map((employer) => (
            <div className="employer-group" key={employer.company}>
              <header className="employer-heading">
                <div className="employer-meta">
                  <p className="eyebrow">{employer.dates}</p>
                  <p>{employer.location}</p>
                </div>
                <div>
                  <h3>{employer.company}</h3>
                  <p>{employer.role}</p>
                  {employer.note && <p className="employer-note">{employer.note}</p>}
                </div>
              </header>
              {employer.projects.map((item) => (
                <article
                  key={item.id}
                  id={item.id}
                  className="case-study"
                  aria-labelledby={`${item.id}-title`}
                >
                  {(item.dates || item.link) && (
                    <div className="case-company">
                      {item.dates && <p className="eyebrow">{item.dates}</p>}
                      {item.link && (
                        <a className="text-link" href={item.link.href}>
                          {item.link.label}
                        </a>
                      )}
                    </div>
                  )}
                  <div className="case-content">
                    <h4 id={`${item.id}-title`}>{item.title}</h4>
                    <p className="case-result">{item.result}</p>
                    <details className="case-notes">
                      <summary>Problem, approach & business impact</summary>
                      <dl>
                        <div>
                          <dt>Problem</dt>
                          <dd>{item.problem}</dd>
                        </div>
                        <div>
                          <dt>Approach</dt>
                          <dd>{item.action}</dd>
                        </div>
                        <div>
                          <dt>Business impact</dt>
                          <dd>{item.business}</dd>
                        </div>
                      </dl>
                    </details>
                    <p className="stack">{item.stack.join(' / ')}</p>
                  </div>
                  {item.id === 'badge-guru' && (
                    <figure className="pipeline">
                      <BadgeStudy />
                    </figure>
                  )}
                </article>
              ))}
            </div>
          ))}
        </div>
        <blockquote className="testimonial">
          <p>
            “Gaille quickly stood out as a brilliant full-stack developer. He is incredibly smart,
            hardworking, and dedicated, often going the extra mile to deliver high-quality work. He
            communicates openly, collaborates effectively, and uplifts those around him.”
          </p>
          <cite>
            Sheldon Arthur Sagrado <span>· Full-stack Developer, Bitwork Solutions</span>
          </cite>
        </blockquote>
        <div className="work-footnote">
          <p className="source-note">
            Professional work and outcomes are self-reported, as documented in my résumé.
          </p>
          <a className="text-link" href={resumeHref} target="_blank" rel="noopener noreferrer">
            Full experience & education <span className="link-note">PDF</span>
          </a>
        </div>
      </Section>
    </div>
  );
}
