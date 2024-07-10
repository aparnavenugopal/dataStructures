function countUniqueValues(arr){
    // add whatever parameters you deem necessary - good luck!
     if (arr.length === 0) return 0;
    let i=0;
    for(let j=0;j<arr.length;j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i]=arr[j];
        }
    }
    return i+1;
  }
  
  const t = countUniqueValues([1,1,1,1,1,2]);
  console.log(t);