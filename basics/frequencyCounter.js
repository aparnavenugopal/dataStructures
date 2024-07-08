const same = (arr1, arr2) => {
  arr1.sort((a,b) => a-b);
  arr2.sort((a,b) => a-b);
  let t1=[];
  for(let i=0;i<arr1.length;i++){
    let p = arr1[i]*arr1[i];
    t1.push(p);
  }
  return JSON.stringify(t1) === JSON.stringify(arr2);
}

const r = same([1,2,1] , [4,4,1]);
console.log(r);

//[1,2,3],[4,1,9]
//[1,2,3],[1,9]