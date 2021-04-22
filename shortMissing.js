var arr = [3, 6, 9, 2, 11];
var [min,max] = [Math.min(...arr), Math.max(...arr)];
// var out = Array.from(Array(max-min),(_v,i)=>i+min).filter(i=>!arr.includes(i));
var fullarr = Array.from(Array(max-min),(_v,i)=>i);
var excludearr = fullarr.filter(i=>!arr.includes(i));
// var out = Array.from(Array(max-min), function(_v,i) { return i+min }).filter(function(i) { return !arr.includes(i)});
// console.log(out)