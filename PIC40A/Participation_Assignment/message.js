function Message(_body,_color,element){
    this.file_name=_body;
    this.color=_color;
    this.id=element;
 }
 function getLines(updator){   
    let xhttp = new XMLHttpRequest(); 
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
            set_value(updator.id,this.responseText);

        }
    };
    xhttp.open("GET", updator.file_name,true);
    xhttp.send();
 }

function set_value(id, value){
     document.getElementById(id).innerHTML = value;
 }
 Message.prototype.set=function(_time){
     let self=this;
    function change(){
       document.getElementById(self.id).style.color = self.color;
       getLines(self);
    }
    setTimeout(change, _time);
 }

$( function(){
    let greeting = new Message("file.txt","red","first_heading");
    const ten_sec = 1000*10;
    greeting.set(ten_sec);
    
}
);

