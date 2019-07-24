describe('greet' , function(){
    it('should greet in any name and any language' , function(){
 
    var instances = MyFactoryFunction();

        assert.equal(instances.greet('Inga' , "Isiswati"),'Invalid language.');
        assert.equal(instances.greet('Inga' , "Isiswati"),'Invalid language.');
        assert.equal(instances.greet('Inga' , "Tshivenda"),'Invalid language.');
        assert.equal(instances.greet('Inga' , "Xitsonga"),'Invalid language.');
        assert.equal(instances.greet('Inga' , "Afrikaans"),'Invalid language.');
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

});
