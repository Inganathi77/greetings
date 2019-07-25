function MyFactoryFunction(nameList){
var greetedNames = nameList || {};

function greet(name,language){
  if(!name) {
    return "please enter the name or select the language";
  }

  if(!language) return language;

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
  }
   
  }
  else {
    return "please enter the name or select the language";
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
