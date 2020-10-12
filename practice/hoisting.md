## Hoisting Exercises

1. If the code is `valid` what will be the output and if `invalid` what will be the error. Write the error message.

```js
console.log(animal);
var animal = "monkey";
// undefined no error
```

```js
console.log(animal);
let animal = "monkey";
// Invalid Error = ReferenceError: Cannot access 'animal' before initialization
```

```js
console.log(animal);
const animal = "monkey";
// Invalid Error = ReferenceError: Cannot access 'animal' before initialization
```

```js
function sayHello(msg) {
  alert(msg);
}
sayHello("Hey Everyone");
// valid
```

```js
sayHello("Hey Everyone");
function sayHello(msg) {
  alert(msg);
}
//valid
```

```js
sayHello("Hey Everyone");
var sayHello = msg => {
  alert(msg);
};
// Invalid Error TypeError: sayHello is not a function
```

```js
sayHello("Hey Everyone");
let sayHello = msg => {
  alert(msg);
};
//Invalid Error = ReferenceError: Cannot access 'sayHello' before initialization
```
