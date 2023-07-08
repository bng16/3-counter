let count=0;

const addd= () =>{
    count++;
    if(count>999){
        document.getElementById("counter-text").textContent = "999";
        count=999;
    }else if(count<10){
        document.getElementById("counter-text").textContent = "00"+count;
    }else if(count<100){
        document.getElementById("counter-text").textContent = "0"+count;
    }else{
        document.getElementById("counter-text").textContent = count;
    }

}

const subb= () =>{
    count--;
    if(count<0){
        document.getElementById("counter-text").textContent = "000";
        count=000;
    }else if(count<10){
        document.getElementById("counter-text").textContent = "00"+count;
    }else if(count<100){
        document.getElementById("counter-text").textContent = "0"+count;
    }else{
        document.getElementById("counter-text").textContent = count;
    }

}
