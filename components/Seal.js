// The pen-nib "seal" logo mark, reused in the nav and footer.
export default function Seal({ size = 46, stroke = '#C0894B' }) {
  return (
    <span
      className="seal"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        width={size * 0.48}
        height={size * 0.48}
        fill="none"
        stroke={stroke}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19l7-7 2 2-7 7-3 1 1-3z" />
        <path d="M18 13l-1.5-1.5" />
        <path d="M2 2l7.5 7.5" />
        <path d="M9.5 9.5L12 12" />
      </svg>
    </span>
  );
}
