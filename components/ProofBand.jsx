import { proofPoints } from '@/data/proof';
export default function ProofBand() {
  return (
    <div className="container proof-band">
      <ul>
        {proofPoints.map((point) => (
          <li key={point.label}>
            <a href={point.href}>
              <strong>{point.value}</strong>
              <span>{point.label}</span>
              <small>{point.linkLabel}</small>
            </a>
          </li>
        ))}
      </ul>
      <p>Activity figures recorded July 2026. Employer scale from my résumé.</p>
    </div>
  );
}
