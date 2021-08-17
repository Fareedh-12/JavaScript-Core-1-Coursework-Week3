function numObj(s){
  let result = s.map(n => Object.assign({}, n));
  return result;
}
console.log(numObj([118,117,120]))