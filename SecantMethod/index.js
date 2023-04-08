function f1(x){
    return Math.pow(x,3)-4*Math.pow(x,2)-3*x+18;
}
function f2(x){
    return Math.pow(x,2)-2*x-1;
}
function f3(x){
    return x-Math.cos(x);
}
function derF1(x){
    return 3*Math.pow(x,2)-8*x-3;
}
function derF2(x){
    return 2*x-2;
}
function derF3(x){
    return 1+Math.sin(x);
}


function Secant(f,x0,x1,tol){
    let x2;
    let i=0;
    let convRate;
    while(Math.abs(x1-x0)>tol){
        x2=(x0*f(x1)-x1*f(x0))/(f(x1)-f(x0));
         convRate=Math.abs((x2-x1)/(x1-x0));
        //console.log(`iteration ${i} and x=${x2},convergence rate: ${convRate}`);

        x0=x1;
        x1=x2;
        i++;
    }
    //console.log((`iteration ${i} and x=${x2},convergence rate: ${convRate}`));
    return "iteration: " +i+".   x="+x2+".   convergence rate: "+convRate;
}

function NewtonMethod(f,derF,x0,tol=1e-5){
    let i=0;
    let convRate1;
    while(Math.abs(f(x0))>tol){
        x=x0-(f(x0)/derF(x0));
        x0=x;
        convRate1=Math.abs((x-x0)/f(x)-f(x0));
        
        i++;
    }
    return "iteration: " +i+".   x="+x+".   convergence rate: "+convRate1;
}

function mullerMethod(f,p0,p1,p2,tol){
    let h=1;
    let i=0;
    let p;
    let convergenceRate;
    while(Math.abs(h)<tol){
        let h1 = p1 - p0;
        let h2 = p2 - p1;
        let delta1 = (f(p1) - f(p0)) / h1;
        let delta2 = (f(p2) - f(p1)) / h2;
        let d = (delta2 - delta1) / (h2 + h1);
        let b = delta2 + h2 * d;
        let D = Math.sqrt(b * b - 4 * f(p2) * d);
        let E = (Math.abs(b - D) < Math.abs(b + D)) ? (b + D) : (b - D);
        let h = -2 * f(p2) / E;
        let p = p2 + h;
        let convergenceRate = Math.abs(h / p);
    }
    p0 = p1;
    p1 = p2;
    p2 = p;
    i++;
    return ;
}
document.getElementById("txt1").innerHTML=Secant(f1,-3,0,1e-5);
document.getElementById("txt2").innerHTML=Secant(f2,0,1,1e-5);
document.getElementById("txt3").innerHTML=Secant(f3,2,3,1e-5);

document.getElementById("txt4").innerHTML=NewtonMethod(f1,derF1,1,1e-5);
document.getElementById("txt5").innerHTML=NewtonMethod(f2,derF2,0,1e-5);
document.getElementById("txt6").innerHTML=NewtonMethod(f3,derF3,1,1e-5); //son fonksiyon hatalı sonuç!

document.getElementById("txt7").innerHTML=mullerMethod(f1,derF1,-1.8,-1.5,-1.2,1e-5,50);
document.getElementById("txt8").innerHTML=mullerMethod(f2,derF2,-4,-3,-2,1e-5,50);
document.getElementById("txt9").innerHTML=mullerMethod(f3,derF3,-2,-1,0,1e-5,50); 