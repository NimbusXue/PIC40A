let user = get_cookie('name');
let main_content = document.getElementById("main_content");
let color = get_cookie("color");
let speed = get_cookie("speed");
let rectangle = document.createElement("section");
let container = document.createElement("section");
rectangle.id='rect';
container.id='big_container';
container.style.backgroundColor="grey";
if(speed === "") {//if speed is not initialized, set it to be 0;
    speed = 0;
}else{// else convert speed to an integer type
    speed=speed*1;
}
if(color===""){
    color='red';
}

/* If it is a user’s first time visiting the page or the cookies (to be discussed) have
expired, they are prompted for their name. */
if(user===""){
    user = prompt("What is your name?","");
    make_cookie("name", user, 10);
    checkImportant();
    
}else{
    checkImportant();
}

//using an AJAX call to seek their name in ”important.txt” 
function checkImportant(){
    let xhttp = new XMLHttpRequest();// object to do ajax with
    // when the operation is complete (readyState 4) and it is successful ( status 200)
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        let people_arr = this.responseText.split('\n');
        let found = false;
        for(let person of people_arr){
          if(user===person.trim()){
            found=true;
            break;
          }
    
        }
        if(found){ // if name is found, prepare the animation 
            animate();
        }else{//if name is not found, No greeting for you!
            let p1=document.createElement("p");
            p1.innerHTML="No greeting for you!";
            main_content.appendChild(p1);
        }
      }
    };
    xhttp.open("GET", "important.txt", true);
    xhttp.send();
}

/* make a cookie with given name, value, and expiration */
function make_cookie(name, value, expire){
    let now = new Date();
    now.setSeconds(now.getSeconds() + expire);
    let cookie_expires = "expires=" + now.toUTCString() + ";";
    let cookie_path = "path=" + window.location.pathname;
    let cookie_name = name + "=" + value + ";"
    document.cookie = cookie_name + cookie_expires + cookie_path;
   
}
//get cookie info
function get_cookie(name){
    let cookie = document.cookie.split(';');//split with ';'
    for(let part of cookie){
       let pieces = part.split('=');//split with '='
       while(pieces[0][0] === ' '){ // while whitespace at start
        pieces[0] = pieces[0].substr(1); // remove it!
       }
      if(pieces[0] === name){
        return pieces[1];// if found, return its corresponding value
      }
    }
    return "";//if not found, return empty string
}

//creat the display and buttons along with the animation
function animate() {
    let speed_fieldset=document.createElement("fieldset");
    //create speed button field set
    speed_fieldset.id='SpeedForm';
    for(let i = 0; i <= 50; i++){
       let label = document.createElement("label");
       let button = document.createElement("input"); 
       button.type = "radio";
       button.id='speed'+i;
       button.name='speed_button';
       label.htmlFor=button.id;
       label.innerHTML='Speed '+i;
       button.onclick=function(){//save the cookie during update
       make_cookie("speed", i, 10);
       speed = i;
       make_cookie("name", user, 10);
       make_cookie("color", color, 10);
       }
       speed_fieldset.appendChild(label);
       speed_fieldset.appendChild(button);
       if(i % 10 === 0){//break for 0,10,20,30,40,50
        breakline=document.createElement("br");
        speed_fieldset.appendChild(breakline);
      }
    }
    main_content.appendChild(speed_fieldset);
    document.getElementById('speed'+speed).checked = true;
    
    //create color button field set
    let color_fieldset=document.createElement("fieldset");
    color_fieldset.id='ColorForm';
    let label_red = document.createElement("label");
    let button_red = document.createElement("input");
    button_red.type = "radio";
    button_red.id='red';
    button_red.name='color_button';
    label_red.htmlFor=button_red.id;
    label_red.innerHTML='red';
    button_red.onclick=function(){//save the cookie during update
        make_cookie("color", 'red', 10);
        color='red';  
        rectangle.style.backgroundColor=color;
        make_cookie("name", user, 10);
        make_cookie("speed", speed, 10);
    }
    color_fieldset.appendChild(label_red);
    color_fieldset.appendChild(button_red);

    let label_yellow = document.createElement("label");
    let button_yellow = document.createElement("input");
    button_yellow.type = "radio";
    button_yellow.id='yellow';
    button_yellow.name='color_button';
    label_yellow.htmlFor=button_yellow.id;
    label_yellow.innerHTML='yellow';
    button_yellow.onclick=function(){//save the cookie during update
        make_cookie("color", 'yellow', 10);
        color='yellow';  
        rectangle.style.backgroundColor=color;
        make_cookie("name", user, 10);
        make_cookie("speed", speed, 10);
    }
    color_fieldset.appendChild(label_yellow);
    color_fieldset.appendChild(button_yellow);

    let label_blue = document.createElement("label");
    let button_blue = document.createElement("input");
    button_blue.type = "radio";
    button_blue.id='blue';
    button_blue.name='color_button';
    label_blue.htmlFor=button_blue.id;
    label_blue.innerHTML='blue';
    button_blue.onclick=function(){//save the cookie during update
        make_cookie("color", 'blue', 10);
        color='blue'; 
        rectangle.style.backgroundColor=color;
        make_cookie("name", user, 10);
        make_cookie("speed", speed, 10);
    }
    color_fieldset.appendChild(label_blue);
    color_fieldset.appendChild(button_blue);
    main_content.appendChild(color_fieldset);
    document.getElementById(color).checked = true;
    
    //create the animation
    rectangle.style.backgroundColor = color;
    rectangle.innerHTML = "Welcome "+user;
    container.appendChild(rectangle);
    main_content.appendChild(container);
    let position=0;
    let move_to_right=true;
    setInterval(move,50);
    //use control overflow to move the inner box
    function move(){
        if(position<=0 && !move_to_right){//reaches left,turn back
            move_to_right=true;
        }else if(position>=850 && move_to_right){// reaches right,turn back
            move_to_right=false;
        }else{//within the middle
            if(move_to_right){//move to right
                position+=speed;
                rectangle.style.left=position+'px';
            }else{//move to left
                position-=speed;
                rectangle.style.left=position+'px';
            }
        }
    }  

}