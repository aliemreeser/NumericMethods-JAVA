function f(x){
  return Math.exp(-2*x)*x+x*Math.cos(x)-4*Math.sin(2*x);
}

function bisection(f,a,b,tol=1e-5){
  if(f(a)*f(b)>=0){
    console.log("error");
  }
  c=a;
  i=0;
  while (Math.abs(f(c))>tol) {
    c=(a+b)/2;
    if(f(c)*f(a)<0){
      b=c;
    }
    else{a=c;}
    i++;
    console.log(`the value of the iteration ${i} is ${c}`);
  }
  
}

bisection(f,1,2);