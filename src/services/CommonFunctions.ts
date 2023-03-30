export function isServerSide(): boolean {
  return typeof window === "undefined";
}

export function calculateGradientColors(index: number): string {
  const startColor = "hsl(16, 87.93%, 54.51%)";
  const endColor = "hsl(46, 94%, 61%)";
  const step = 11;
  
  const hDiff =
    parseInt(endColor.split(",")[0].substring(4)) -
    parseInt(startColor.split(",")[0].substring(4));
  const sDiff =
    parseInt(endColor.split(",")[1]) - parseInt(startColor.split(",")[1]);
  const lDiff =
    parseInt(endColor.split(",")[2]) - parseInt(startColor.split(",")[2]);

  const h =
    (parseInt(startColor.split(",")[0].substring(4)) + hDiff * (index / step)) %
    360;
  const s = Math.round(
    parseInt(startColor.split(",")[1]) + sDiff * (index / step)
  );
  const l = Math.round(
    parseInt(startColor.split(",")[2]) + lDiff * (index / step)
  );
  if (index > step) {
    return `hsl(0, 0%, 100%)`;
  }
  return `hsl(${h}, ${s}%, ${l}%)`;
}
