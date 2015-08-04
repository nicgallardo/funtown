function compare(array, compareArray){
var outcome = false
 for(var i = 0; i < array.length; i++){
  if (array[i] === compareArray) {
    outcome = true;
 } else {outcome}
}
return outcome;
}
console.log(compare(['1', '2', '3'],'2'));