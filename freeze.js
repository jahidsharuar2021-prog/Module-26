const king={name:'mufasa',age:55,kingdom:'pride lands'};
// Object.freeze(king);     // freeze dele kuno change possible noi
// Object.seal(king);   // seal korle only modify korthe parba no delete or change
delete king.age;
king.queen='sarabi';
king.name='simba';
console.log(king);