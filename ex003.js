// 할당된 변수의 순서 Order of Assigned Variables
// 변수명과 변수값이 일치하지 않을 경우
// undefined : 값이 할당되지 않은 상태

const [a, b, c] = [11, 12, 13];

console.log('a', a); // 11
console.log('b', b); // 12
console.log('c', c); // 13
console.log('a,b,c', a, b, c); // 11 12 13

const [d, e] = [21, 22, 23];

console.log('d', d); // 21
console.log('e', e); // 22
console.log('d,e', d, e); // 21 22

const [f, g, h] = [31, 32];

console.log('f', f); // 31
console.log('g', g); // 32
console.log('h', h); // undefined
console.log('f,g,h', f, g, h); // 31 32 undefined

const [i, j, k = 'ⓐ'] = [41, 42];

console.log('i', i); // 41
console.log('j', j); // 42
console.log('k', k); // ⓐ
console.log('i,g,k', i, g, k); // 41 42 ⓐ

const [m, ...n] = [51, 52, 53, 54, 55];

console.log('m', m); // 51
console.log('n', n); // [ 52, 53, 54, 55 ]
