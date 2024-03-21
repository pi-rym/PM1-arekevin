
const { Activity, Repository}= require("../scripts/index");

describe("Repository debe estar definido", function(){
  beforeEach(function() {
        repository = new Repository();
      });
  it("repository debe ser una clase", function(){
    expect(Activity).toBeDefined();
    expect(typeof Repository.prototype.constructor).toBe("function");
  });
    
  it("el metodo getActivities existe", function(){
    expect(repository.getAllActivities).toBeDefined();
  });

});


