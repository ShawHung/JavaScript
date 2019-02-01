function SupType() {
  this.property = true;
}
SupType.prototype.getSupValue = function () {
  return this.property;
}

function SubType() {
  this.subProperty = false;
}

SubType.prototype = new SupType();

SubType.prototype.getSubValue = function () {
  return this.subProperty;
}

var value = new SupType();
console.log(value.getSupValue());
console.log(value.property);
console.log(value instanceof SubType);
console.log(value instanceof SupType);
console.log(value instanceof Object);