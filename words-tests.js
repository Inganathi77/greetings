describe('word widget' , function(){
    it('should put in words in the textbox' , function(){
 
    var instances = MyFactoryFunction();

        assert.equal(instances.words('put' , "words"),'Invalid language.');
       
    });
    it('should count the words in the textbox' , function(){

        var instances = MyFactoryFunction();

        assert.equal(instances.words('count' , "words"),'Hello, Inga');
    });
    it('should return the number of words in a sentence' , function(){

        var instances = MyFactoryFunction();
        
        assert.equal(instances.words('Inga' , "Isixhosa"),'Molo, Inga');
    });
    it('should take in strings not numbers' , function(){
        
        var instances = MyFactoryFunction();

        assert.equal(instances.words('strings' , "not numbers"),'Sawubona, Inga');
    });

});