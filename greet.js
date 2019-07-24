function MyFactoryFunction(nameList){
var greetedNames = nameList || {};

function greet(name,language){
    var y =   /^\d*\.?\d*$/.test(name)

  var nameCaps = name.toUpperCase().charAt(0) + name.slice(1);
  if(y === false){
    if(greetedNames[nameCaps] === undefined){
          greetedNames[nameCaps] = 0
    }

    if(language === "English"){
      return "Hello, " + nameCaps;  
  }else if(language === "Isixhosa"){
      return "Molo, " + nameCaps;
  }else if(language === "Isizulu"){
      return "Sawubona, " + nameCaps;
  }else{
      return "Invalid language."
  } 
  }
  else {
      "err"
  }
}

 function getName(){
     return greetedNames
 }

function getCount(){
    var c = Object.keys(greetedNames)
  return c.length;

}
console.log(greetedNames)
  return{
      getName,
    greet:greet,
    getCount,
}  
}
