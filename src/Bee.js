var Bee = function() {
  //call method gives ability to specify what "this" gets bound to
  Grub.call(this);
  this.age = 5;
  this.color = "yellow";
  this.job = "keep on growing"
};

//set the prototype so we have a delegation to the factory class' properties 
  Bee.prototype = Object.create(Grub.prototype);

//set the constructor
  Bee.prototype.constructor = Bee;
