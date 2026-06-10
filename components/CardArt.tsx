import type { ReactNode } from "react";
import type { ArtMotif } from "@/data/cards";
import styles from "./CardArt.module.css";

type Motif = (ink: string, accent: string) => ReactNode[];

const rings: Motif = (ink, accent) => {
  const circles: ReactNode[] = [];
  for (let r = 24; r <= 210; r += 26) {
    circles.push(
      <circle key={r} cx="272" cy="150" r={r} fill="none" stroke={ink} strokeWidth="2" opacity="0.45" />
    );
  }
  circles.push(<circle key="acc" cx="272" cy="150" r="34" fill={accent} />);
  return circles;
};

const arcs: Motif = (ink, accent) => {
  const paths: ReactNode[] = [];
  for (let i = 1; i <= 7; i++) {
    const r = i * 52;
    const big = i % 3 === 0;
    paths.push(
      <path
        key={i}
        d={`M 0 ${400 - r} A ${r} ${r} 0 0 1 ${r} 400`}
        fill="none"
        stroke={big ? accent : ink}
        strokeWidth={big ? 7 : 2.5}
        opacity={big ? 0.95 : 0.4}
      />
    );
  }
  return paths;
};

const waves: Motif = (ink, accent) => {
  const paths: ReactNode[] = [];
  for (let i = 0; i < 8; i++) {
    const y = 50 + i * 42;
    const big = i % 3 === 0;
    paths.push(
      <path
        key={i}
        d={`M -20 ${y} Q 80 ${y - 38} 190 ${y} T 420 ${y}`}
        fill="none"
        stroke={big ? accent : ink}
        strokeWidth={big ? 6 : 2.5}
        opacity={big ? 0.95 : 0.4}
      />
    );
  }
  return paths;
};

const columns: Motif = (ink, accent) => {
  const heights = [120, 210, 150, 270, 95, 185, 235, 140];
  return heights.map((h, i) => {
    const x = 32 + i * 46;
    const on = i % 3 === 1;
    return (
      <rect
        key={i}
        x={x}
        y={370 - h}
        width="28"
        height={h}
        rx="7"
        fill={on ? accent : ink}
        opacity={on ? 0.95 : 0.4}
      />
    );
  });
};

const orbit: Motif = (ink, accent) => {
  const shapes: ReactNode[] = [
    <circle key="ring-1" cx="200" cy="200" r="86" fill="none" stroke={ink} strokeWidth="2" opacity="0.5" />,
    <circle key="ring-2" cx="200" cy="200" r="150" fill="none" stroke={ink} strokeWidth="2" opacity="0.3" />,
  ];
  const points: [number, number][] = [
    [200, 50],
    [350, 200],
    [200, 350],
    [50, 200],
    [306, 94],
    [94, 306],
  ];
  points.forEach(([x, y], i) => {
    shapes.push(<circle key={`pt-${i}`} cx={x} cy={y} r={i === 0 ? 0 : 13} fill={ink} opacity="0.6" />);
  });
  shapes.push(<circle key="acc" cx="200" cy="200" r="32" fill={accent} />);
  return shapes;
};

const checker: Motif = (ink, accent) => {
  const shapes: ReactNode[] = [];
  const n = 8;
  const sz = 56;
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if ((r + c) % 2 === 0) {
        const hot = r === c || r === c + 1;
        shapes.push(
          <rect
            key={`${r}-${c}`}
            x={c * sz - 24}
            y={r * sz - 24}
            width={sz}
            height={sz}
            fill={hot ? accent : ink}
            opacity={hot ? 0.9 : 0.16}
          />
        );
      }
    }
  }
  return shapes;
};

const dots: Motif = (ink, accent) => {
  const shapes: ReactNode[] = [];
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const x = 30 + c * 48;
      const y = 30 + r * 48;
      const radius = 2 + ((r + c) / 14) * 8;
      const hot = c - r === 0 || c - r === 1;
      shapes.push(
        <circle key={`${r}-${c}`} cx={x} cy={y} r={radius} fill={hot ? accent : ink} opacity={hot ? 0.95 : 0.38} />
      );
    }
  }
  return shapes;
};

const nodes: Motif = (ink, accent) => {
  const points: [number, number][] = [
    [78, 92],
    [200, 56],
    [322, 120],
    [120, 222],
    [272, 240],
    [180, 342],
    [340, 300],
  ];
  const edges: [number, number][] = [
    [0, 1],
    [1, 2],
    [0, 3],
    [1, 4],
    [3, 4],
    [3, 5],
    [4, 5],
    [4, 6],
    [2, 6],
  ];
  const shapes: ReactNode[] = edges.map(([a, b], i) => (
    <line
      key={`edge-${i}`}
      x1={points[a][0]}
      y1={points[a][1]}
      x2={points[b][0]}
      y2={points[b][1]}
      stroke={ink}
      strokeWidth="2"
      opacity="0.38"
    />
  ));
  points.forEach(([x, y], i) => {
    const onAccent = i % 3 === 0;
    shapes.push(
      <circle key={`node-${i}`} cx={x} cy={y} r={onAccent ? 16 : 9} fill={onAccent ? accent : ink} opacity={onAccent ? 1 : 0.7} />
    );
  });
  return shapes;
};

const bauhaus: Motif = (ink, accent) => [
  <rect key="square" x="40" y="56" width="150" height="150" fill={ink} opacity="0.82" />,
  <circle key="circle" cx="282" cy="132" r="82" fill={accent} />,
  <path key="triangle" d="M70 360 L 205 196 L 340 360 Z" fill={ink} opacity="0.5" />,
  <rect key="bar" x="40" y="318" width="320" height="13" fill={accent} />,
];

const motifs: Record<ArtMotif, Motif> = {
  rings,
  arcs,
  waves,
  columns,
  orbit,
  checker,
  dots,
  nodes,
  bauhaus,
};

interface CardArtProps {
  motif: ArtMotif;
  ink: string;
  accent: string;
}

export default function CardArt({ motif, ink, accent }: CardArtProps) {
  const render = motifs[motif] ?? rings;
  return (
    <div className={styles.art}>
      <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        {render(ink, accent)}
      </svg>
    </div>
  );
}
