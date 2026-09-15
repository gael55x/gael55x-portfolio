import Section from '@/components/Section';
import BadgeStudy from '@/components/BadgeStudy';
import { selectedWork } from '@/data/selectedWork';

export default function SelectedWork() {
  return (
    <Section id="work" index="01" label="Selected work" title="Impact at scale">
      <div className="case-studies">
        {selectedWork.map((item) => (
          <article
            key={item.id}
            id={item.id}
            className="case-study"
            aria-labelledby={`${item.id}-title`}
          >
            <div className="case-company">
              <p className="eyebrow">{item.dates}</p>
              <h3>{item.company}</h3>
              <p>{item.role}</p>
              {item.link && (
                <a className="text-link" href={item.link.href}>
                  {item.link.label}
                </a>
              )}
            </div>
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
                <div className="pipeline-body">
                  <BadgeStudy />
                  <figcaption>
                    <p className="eyebrow">Badge Guru / A study in three layers</p>
                    <h5>
                      Physical scan.
                      <br />
                      Detected geometry.
                      <br />
                      Production asset.
                    </h5>
                    <p className="pipeline-caption">
                      Conceptual illustration of the workflow, not a production scan.
                    </p>
                  </figcaption>
                </div>
              </figure>
            )}
          </article>
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
      <p className="source-note">
        Professional work and outcomes are self-reported, as documented in my résumé.
      </p>
    </Section>
  );
}
