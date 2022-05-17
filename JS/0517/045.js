function Parent() {
    this.name = '희진';
}

Parent.prototype.rename = function (name) {
    this.name = name;
}

Parent.prototype.sayName = function () {
    console.log(this.name);
}

function Child() {
    Parent.call(this);
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.canWalk = function () {
    console.log('걷는다');
}