const uniqueValues = (arr) => {
  const obj = {};
//   const t = [];
  for(let val of arr){
    if(obj[val]){
        obj[val] +=1;
    }else{
        obj[val] = 1;
    }
  }
  console.log(obj);
  const keys = Object.keys(obj);
//   t.push(keys);
//   console.log(t);
  return keys.length;
}

const r = uniqueValues([-2,-1,-1,0,1]);
console.log(r);

//[1,1,1,1,1,2]
//[1,2,3,4,4,4,7,7,12,12,13]
//[]