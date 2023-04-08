function f(x){
    return Math.exp(-2*x)*x+x*Math.cos(x)-4*Math.sin(2*x);
  }

function FalsePosition(f,a,b,tol=1e-5){
    if(f(a)*f(b)>=0){
        console.log("error");
      }
    w=a;  
    i=0;
    while(Math.abs(f(w))>tol){
      i++;
        w=(b*f(a)-a*f(b))/(f(a)-f(b));
        if(f(w)*f(a)<0){
            b=w;
        }
        else{a=w;}
        console.log(`the value of the ${i}. iteration is ${w}`);
    }  
    
}  

FalsePosition(f,1,2);