// describe("demo", function () {
//   it("Este test debe pasar siempre", function () {
//     expect(4 + 2).toBe(6);
//   });
//   it("Este test debe pasar siempre", function () {
//     expect(6 + 4).toBe(10);
//   });
// });

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

// describe("Repository", function() {
//   var repository;

//   

//   it("debería inicializarse con una lista de actividades vacía", function() {
//     expect(repository.activities.length).toEqual(0);
//   });

//   it("debería inicializarse con id igual a 0", function() {
//     expect(repository.id).toEqual(0);
//   });
// });


// describe("La clase Repository debe ser una clase",(){
//   it("Debe ser una clase", function(){

//   })
//   it("Debe tener el método addActivity", (){
    
//   })
// })
