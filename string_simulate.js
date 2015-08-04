function toString(array){
 var newOne = array.join();
console.log(newOne);
}
toString(["This", "is", "a", "string"]);



function toStringwithoutJoin(array){
  var reciever = '';
  for(i = 0; i < array.length; i++){
    reciever += array[i] + ",";
  }
  reciever = reciever.slice(0, -1);
  return reciever;
}
console.log(toStringwithoutJoin(["This", "is", "a", "string!"]));

