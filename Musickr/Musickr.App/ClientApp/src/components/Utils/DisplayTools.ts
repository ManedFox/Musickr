// Shortens a number to its 3 first significant figures + magnitude suffix (K=1 000, M=1 000 000)
// Soundcloud's number notation doesn't exactly work that way but it's unnecessary obscure so heh
export function stringify(n: number): string {
  let s:string = n.toPrecision(3).split('e')[0];
  return (n<100 ? s.split('.')[0] : s) + ((n >= 1000000) ? "M" : (n >= 1000) ? "K" : "");
}