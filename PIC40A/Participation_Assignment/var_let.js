for(let i=0;i<=10;++i){
    setTimeout(function(){
        document.getElementById("print").innerHTML+=i;
    },i*10);

}