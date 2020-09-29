let msg="This is a Javascript calculator";
alert(msg);
function compute(){
    document.getElementsByTagName('div')[0].innerHTML="Results:"
    let result;
    let first=document.getElementById('FirstValue').value;
    let second=document.getElementById('SecondValue').value;
    let arr=document.getElementsByName('operators');
    for(let i=0;i<arr.length;i++){
        if(arr[i].checked){
            if(arr[i].value==='plus'){
                result=first*1+second*1;

            }else if(arr[i].value==='minus'){
                result=first*1-second*1;
            }else if(arr[i].value==='times'){
                result=first*1*second*1;
            }else{
                result=first*1/second*1;
            }
        }
    }
    document.getElementsByTagName('div')[0].innerHTML += result;
}
