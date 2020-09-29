
let count = 0;
function change(){
    count++;
    let input = document.getElementById('input_value').value;
    let main = document.getElementById('mainbody');
    document.getElementById('input_value').value="";
    let p = document.createElement('p');
    p.appendChild(document.createTextNode(input));
    if(count%2===0){
        p.style.color = "red";
    }else{
        p.style.color = "blue";
    }
    setTimeout(function() { main.appendChild(p);}, 3000 );

}

