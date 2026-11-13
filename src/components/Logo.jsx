const NAVY = '#0C1F4A'
const BLUE = '#2E6BFF'

/** 15 rounded squares: 5 navy `<`, 5 blue `/`, 5 navy `>`. */
export const LEFT = [
  [2, 0],
  [1, 1],
  [0, 2],
  [1, 3],
  [2, 4],
]
export const SLASH = [
  [8, 0],
  [7, 1],
  [6, 2],
  [5, 3],
  [4, 4],
]
export const RIGHT = [
  [10, 0],
  [11, 1],
  [12, 2],
  [11, 3],
  [10, 4],
]

export const UNIT = 20
export const GAP = 3
export const STEP = UNIT + GAP
export const RX = UNIT * 0.2
export const MARK_W = 12 * STEP + UNIT // 296
export const MARK_H = 4 * STEP + UNIT // 112
export const MARK_ASPECT = MARK_W / MARK_H

function squares(points, fill) {
  return points.map(([x, y], i) => (
    <rect
      key={`${fill}-${i}`}
      x={x * STEP}
      y={y * STEP}
      width={UNIT}
      height={UNIT}
      rx={RX}
      fill={fill}
    />
  ))
}

export function LogoMark({ className = 'h-7 w-auto', variant = 'color', style }) {
  const bracket = variant === 'onDark' ? '#FFFFFF' : NAVY
  const slash = BLUE

  return (
    <svg
      viewBox={`0 0 ${MARK_W} ${MARK_H}`}
      className={className}
      style={style}
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      {squares(LEFT, bracket)}
      {squares(SLASH, slash)}
      {squares(RIGHT, bracket)}
    </svg>
  )
}

/**
 * Official lockup: mark height ≈ cap-height+, gap ≈ 0.5 × mark width,
 * Plus Jakarta Sans ExtraBold, tracking -0.02em.
 */
export function Logo({
  className = '',
  variant = 'color',
  markHeight = 26,
}) {
  const text = variant === 'onDark' ? 'text-white' : 'text-navy'
  const markWidth = markHeight * MARK_ASPECT
  const gap = markWidth * 0.5
  // Plus Jakarta Sans 800 cap-height ≈ 0.745em; mark ≈ 1.05 × cap
  const fontSize = markHeight / (1.05 * 0.745)

  return (
    <a
      href="#top"
      className={`inline-flex items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 ${className}`}
      style={{ gap }}
      aria-label="Codemade, back to top"
    >
      <LogoMark
        variant={variant}
        className="shrink-0"
        style={{ height: markHeight, width: markWidth }}
      />
      <span
        className={`font-display leading-none ${text}`}
        style={{
          fontSize,
          fontWeight: 800,
          letterSpacing: '-0.02em',
        }}
      >
        Codemade
      </span>
    </a>
  )
}
