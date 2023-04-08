function f(x){
    return -1*Math.pow(x,4)+3*Math.pow(x,2)+2;
}
function derF(x){
    return -1*4*Math.pow(x,3)+6*x;
}

function NewtonMethod(f,derF,x0,tol=1e-5){
    
    while(Math.abs(f(x0))>tol){
        x=x0-(f(x0)/derF(x0));
        x0=x;
    }
    return f(x0);
}

document.getElementById("text1").innerHTML=NewtonMethod(f,derF,1.224744871391589);
document.getElementById("text2").innerHTML=NewtonMethod(f,derF,1.6);
document.getElementById("text3").innerHTML=NewtonMethod(f,derF,-1.3);

