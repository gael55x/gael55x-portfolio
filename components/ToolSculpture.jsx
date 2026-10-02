export default function ToolSculpture({ kind }) {
  return (
    <div className={`tool-sculpture sculpture-${kind}`} aria-hidden="true">
      {kind === 'snapline' ? (
        <div className="sculpture-stack">
          <span />
          <span />
          <span />
          <span />
        </div>
      ) : (
        <div className="sculpture-lens">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      )}
    </div>
  );
}
