function foo() {
    console.log(this);
    console.log( this.a ); // 2 in Lexical Scope ，But 3 in Dynamic Scope
}

function bar() {
    var a = 3;
    foo();
}

var a = 2;

bar();

