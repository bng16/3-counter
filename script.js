let count=0;

const addd= () =>{
    count++;
    if(count<10){
        document.getElementById("counter-text").textContent = "00"+count;
    }else if(count<100){
        document.getElementById("counter-text").textContent = "0"+count;
    }else{
        document.getElementById("counter-text").textContent = count;
    }

}

const subb= () =>{
    count--;
    if(count<10){
        document.getElementById("counter-text").textContent = "00"+count;
    }else if(count<100){
        document.getElementById("counter-text").textContent = "0"+count;
    }else{
        document.getElementById("counter-text").textContent = count;
    }

}