function validAnagram(str1, str2){
    // add whatever parameters you deem necessary - good luck!
    if(str1.length !== str2.length) return false;
    
    let obj1 = {};
    let obj2 = {};
    
    for(let char of str1){
        if(obj1[char]){
            obj1[char] += 1;
        }else{
            obj1[char] = 1;
        }
    }
    
    for(let char of str2){
        if(obj2[char]){
            obj2[char] += 1;
        }else{
            obj2[char] = 1;
        }
    }
    
    console.log(obj1);
    console.log(obj2);

    for(let key in obj1){
        if(!obj2[key]) return false;
        if(obj2[key] > obj1[key]) return false;
    }
    return true;
  }
  
  const t = validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') ;
  console.log(t);