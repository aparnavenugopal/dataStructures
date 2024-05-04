//median of 2 sorted arrays

const Median = (arr1, arr2) => {
   let median;
   arr3=arr1.concat(arr2);
   console.log(arr3);
   arr3.sort((a,b) => a-b);
   console.log(arr3);
   if(arr3.length%2 === 0){
     median = (arr3[arr3.length/2]+ arr3[(arr3.length/2)+1])/2;
     return median;
   }else if(arr3.length%2 !== 0){
    median = arr3[arr3.length/2];
    return median;
   }

}

const t = Median([1,2,3],[9,4,0]);
console.log(t);
