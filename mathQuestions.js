//====================================Some mathmatik questions and answers=======================================
var str = "webbrain academy aaa"
function test(){
     console.log((str.match(/a/g)).length);
}
test()
//=======================================================================================
var str = "webbrain /?<> academy?/>< " 
function test1(){
console.log(str.match(/\w/g).join(''))
}
test1()
//======================================================================================

function capitalizeA(str){
console.log(str.replace(/a/g, str => str.toUpperCase() ) )
}
capitalizeA('webbrain academy')

// =====================================================================================
var letter = 'a' 
if (letter === letter.toLowerCase()){
 console.log('true')
}  else{
 console.log(false);
}        
     