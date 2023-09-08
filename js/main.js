var size=parseInt(prompt("enter the length"));
var arr=[];
for(let i=0;i<size;i++){
    arr[i]=prompt("Enter the value"+(i+1));
}

document.write("input"+"["+arr+"]"+"<br>")
var pos=[];
function negative(){
    for (let i=0;i<=arr.length;i++){
        // console.log(arr[i]);
        if(0<arr[i]){
            pos.push(arr[i])
        }
    
       
    }
    document.write("The number is positive numbers"+"["+pos+"]");
    return pos;
}
negative();








































