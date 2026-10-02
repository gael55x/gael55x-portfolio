export default function WorkSignal({ sector }) {
  return (
    <div className="work-signal" data-signal={sector} aria-hidden="true">
      <svg viewBox="0 0 260 180" fill="none">
        {sector === 0 && (
          <>
            <ellipse cx="130" cy="90" rx="108" ry="42" transform="rotate(-18 130 90)" />
            <ellipse cx="130" cy="90" rx="82" ry="29" transform="rotate(22 130 90)" />
            <path d="M130 40 L172 57 V94 C170 119 151 135 130 144 C109 135 90 119 88 94 V57 Z" />
            <path d="M114 88 L125 100 L148 75" />
            <circle cx="38" cy="117" r="4" />
            <circle cx="222" cy="61" r="4" />
          </>
        )}
        {sector === 1 && (
          <>
            <path d="M30 108 L70 54 L130 93 L181 37 L232 107 L183 145 L130 93 L80 142 L30 108 M70 54 L181 37 M80 142 L183 145" />
            {[
              [30, 108],
              [70, 54],
              [130, 93],
              [181, 37],
              [232, 107],
              [183, 145],
              [80, 142],
            ].map(([cx, cy]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={cx === 130 ? 12 : 5} />
            ))}
            <path d="M123 93 H137 M130 86 V100" />
          </>
        )}
        {sector === 2 && (
          <>
            <path d="M52 118 L117 142 L211 92 L146 68 Z M52 102 L117 126 L211 76 L146 52 Z M52 86 L117 110 L211 60 L146 36 Z" />
            <path d="M52 86 V118 M117 110 V142 M211 60 V92 M146 36 V68" />
            <path d="M94 84 L139 60 L169 70 L123 94 Z" />
            {[
              [52, 86],
              [117, 110],
              [211, 60],
              [146, 36],
            ].map(([cx, cy]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" />
            ))}
          </>
        )}
        {sector === 3 && (
          <>
            <path d="M130 26 L190 61 V131 L130 166 L70 131 V61 Z M70 61 L130 96 L190 61 M130 96 V166" />
            <path d="M100 78 V114 L130 131 L160 114 V78 M100 78 L130 61 L160 78" />
            <ellipse cx="130" cy="96" rx="108" ry="30" transform="rotate(-24 130 96)" />
            <circle cx="228" cy="56" r="4" />
          </>
        )}
      </svg>
    </div>
  );
}
