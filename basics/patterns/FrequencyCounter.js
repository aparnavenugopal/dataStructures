const checkSquare = (arr1, arr2) => {
    if(arr1.length !== arr2.length)  return ;
    let obj1={};
    let obj2={};

    for(let val of arr1){
        if(obj1[val]){
            obj1[val] += 1;
        }else{
            obj1[val] =1;
        }
    }

    for(let val of arr2){
        if(obj2[val]){
            obj2[val] += 1;
        }else{
            obj2[val] =1;
        }
    }

    console.log(obj1);
    console.log(obj2);

    for(let key in obj1){
        if(!obj2[key*key]) return false;
        if(obj2[key*key] !== obj1[key]) return false;
    }

    return true;

}

const t = checkSquare([1,4,5,2,3,4],[1,4,25,16,9,16]);
console.log(t);