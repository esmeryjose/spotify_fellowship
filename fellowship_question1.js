const sortByStrings = (s,t) =>{
    // here we split the string
    const sArr = s.split("");
  
    // here we send the string alogn with the sorting order
    const sortedArr = mergeSort(sArr,t);
  
    // we join the sorted string and return it
    return sortedArr.join("");
  }
  
  const mergeSort = (arr,t) =>{
    
    //once we hit the base case return the array
    if(arr.length === 1) return arr;
  
    //we get the middle of the array and then we round down 
    //to take into account decimals
    const mid = Math.floor(arr.length/2);
  
    //we get the first half of the elements and recurse it along
    // with string t
    const left = mergeSort(arr.slice(0,mid),t);
  
    //we get the second half of the elements and recurse it along
    // along with string t
    const right = mergeSort(arr.slice(mid),t);
  
    // we merge both arrays with the order of string t
    return merge( left, right, t);
  }
  
  const merge = (left,right,t) =>{
    
    // where we will store the elements as we sort them
    let result = [];
  
    // we will iterate until either array is empty
    while(!!left[0] && !!right[0]){
      
      // here we are using t to sort the elements
      if(t.indexOf(left[0]) > t.indexOf(right[0])){
        result.push(right[0]);
        right.shift();
      }else{
        result.push(left[0]);
        left.shift();
      }
    }
  
    // after we are done iterating we combine all the arrays
    return result.concat(left).concat(right);
  }