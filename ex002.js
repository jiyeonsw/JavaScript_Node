// Variable 변수 : const, let, var

// const : immutable variable 변수 재선언 및 재할당 불가
// let : mutable variable 변수 재할당 가능
// var : old variable 더이상 사용하지 않음

const a = 11; // const 새로 선언함
let b = 12; // let 새로 선언함
var c = 13; // var 새로 선언함

console.log('a', a); // 결과 11
console.log('b', b); // 결과 12
console.log('c', c); // 결과 13

console.log('- - - - -');

// a = 21; // const 재선언 불가
b = 22; // let 다시 선언함
c = 23; // var 다시 선언함

console.log('a', a); // 결과 11
console.log('b', b); // 결과 22
console.log('c', c); // 결과 23

console.log('- - - - -');

if (true) {
  const a = 31; // if 내부에서만 선언된 const
  let b = 32; // if 내부에서만 선언된 let
  var c = 33; // 기존 var 변수를 덮어씌운 var
  console.log('a', a); // 결과 31
  console.log('b', b); // 결과 32
  console.log('c', c); // 결과 33
}

console.log('- - - - -');

console.log('a', a); // 결과 11
console.log('b', b); // 결과 22
console.log('c', c); // 결과 33
