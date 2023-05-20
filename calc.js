function displayData(n){
    result.value+=n
}
function evalop(){//eval () is used to evaluate the data
    result.value=eval(result.value)
}
function allclear(){
    result.value=""
}

function backspace(){
   result.value=result.value.slice(0,-1)
}
//slice(starting index,ending index)
//s=hello
//hel  s.slice(0,3)
//hell s.slice(0,-1)
