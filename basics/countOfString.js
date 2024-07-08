const count = (str) => {
    str = str.toLowerCase();
  let obj = {}; 
  for(let i=0; i<str.length;i++){
    let char= str[i];
    if(/[a-zA-Z0-9]/.test(char)){
        if(obj[char]){
            obj[char] += 1;
        }else{
           obj[char]=1;
        }
    }
   
  }
  return obj;
}

const t = count('hello HOW are you');
console.log(t);