// for 2 elements

const AddUp = (arr, k) => {
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if((arr[i] + arr[j]) === k ){
                console.log(`the values in the array are : ${arr[i]} ${arr[j]}`);
                return [i,j] 
            }
        }
    }
}

const t = AddUp([1,2,3,4],6);
console.log(t);

//for 3 elements 

const AddMore = (arr1, k) => {
    for(let i=0;i<arr1.length;i++){
      let sum=arr1[i];
      for(let j=0;j<arr1.length;j++){
          sum=sum+arr1[j];
          if(sum === k){
            return sum;
          }

      }
    }
}

const s = AddMore([1,2,3,4,5],10);
console.log(s);