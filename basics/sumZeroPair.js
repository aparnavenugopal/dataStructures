//assumption we get sorted array
const sumZero = (arr) => {
  let p =[];
  for(let i=0;i<arr.length;i++){
    for(let j=1;j<arr.length;j++){
        if(arr[i] !== 0 && arr[j] !== 0){
            if(arr[i] + arr[j] == 0){
                p.push(arr[i]);
                p.push(arr[j]);
                return p;
            }
        }
    }
  }
}

const t = sumZero([-3,-2,-1,0,1,2]);
console.log(t);