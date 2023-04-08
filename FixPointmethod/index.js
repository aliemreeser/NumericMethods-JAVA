
function fixedPointMethod(g, p0, tol, maxIter) {
    let i = 1;
    while (i <= maxIter) {
      let p = g(p0);
      if (Math.abs(p - p0) < tol) {
        return p;
      }
      p0 = p;
      i++;
    }
    return NaN;
  }
  
  let f = x => x**2 - 4*Math.exp(-x) - 3;
  let g = x => Math.sqrt(4*Math.exp(-x) + 3);
  let root = fixedPointMethod(g, 1, 1e-6, 100);
  console.log(`Root = ${root}`);








