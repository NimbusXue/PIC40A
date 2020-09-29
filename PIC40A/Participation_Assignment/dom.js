function change(){
    let input = document.getElementById('MyInput').value;
    let list = document.getElementById('OrderedList');
    let entry = document.createElement('li');
    entry.appendChild(document.createTextNode(input));
    list.appendChild(entry);   
    document.getElementById('MyInput').value="";
    // let i=1;
    // while(i<document.getElementById("OrderedList").childElementCount){
    //     document.getElementsByTagName("li")[i].setAttribute("class", "special");
    //     i+=2;
    // }
    let classtype = "special";
    if(document.getElementById("OrderedList").childElementCount>1 && document.getElementById("OrderedList").lastElementChild.previousSibling.getAttribute("class")!==classtype){
        document.getElementById("OrderedList").lastElementChild.setAttribute("class", "special");
    }
    
}