describe('greet' , function(){
    it('should return an error if no name or language was selected' , function(){
 
    var instances = MyFactoryFunction();

        assert.equal(instances.greet(),'please enter the name or select the language');
      
    });
    it('should greet in English' , function(){

        var instances = MyFactoryFunction();

        assert.equal(instances.greet('Inga' , "English"),'Hello, Inga');
    });
    it('should greet in Isixhosa' , function(){

        var instances = MyFactoryFunction();
        
        assert.equal(instances.greet('Inga' , "Isixhosa"),'Molo, Inga');
    });
    it('should greet in Isizulu' , function(){
        
        var instances = MyFactoryFunction();

        assert.equal(instances.greet('Inga' , "Isizulu"),'Sawubona, Inga');
    });
    
    it('should not take duplicate' , function(){

       var instances = MyFactoryFunction();
       instances.greet('Inga' , "Isizulu")
       instances.greet('Inga' , "Isizulu")
       instances.greet('Jason' , "Isizulu")
       instances.greet('Jason' , "Isizulu")
       instances.greet('Inga' , "Isizulu")
       assert.equal(instances.getCount('Inga' , "Isizulu"),2);
    });
    it('should check the counter if its counting ' , function(){

        var instances = MyFactoryFunction();
        instances.greet('Inga' , "Isizulu")
        instances.greet('Jesse' , "Isizulu")
        instances.greet('Jason' , "Isizulu")
        instances.greet('Kush' , "Isizulu")
        instances.greet('Jex' , "Isizulu")
        assert.equal(instances.getCount('Inga' , "Isizulu"),5);
     });
 

});