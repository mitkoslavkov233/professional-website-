import type { CSSProperties } from "react";

/** CSSProperties extended to allow setting CSS custom properties (e.g. `--bg`). */
export type CSSVars = CSSProperties & Record<`--${string}`, string>;
