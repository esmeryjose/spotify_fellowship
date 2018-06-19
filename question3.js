const changePossibilities = (amount,coinList) => {

    // The whole idea here is to subtract the different numbers in our coinlist 
    // from the amount until we get to 0, if we get to 0 then that means we got a 
    // combination that works
    const makeCombos = (amount,current) => {
      
      // if we hit this base case, then we got a combination
      if(amount === 0) return 1;
      
      // if we hit this base case then we are out of the range of combination
      // therefore we return 0 so that we dont affect the total amount of combinations
      if(amount < 0) return 0;
  
      // this interger holds the number of combinations 
      let combination = 0;
      
      // we iterate over the list of coins and recursively call makeCombos
      for(let coin = current; coin<coinList.length; coin++){
  
        combination += makeCombos(amount - coinList[coin], coin)
  
      }
      return combination;
    }
  
    return makeCombos(amount,0)
  
  }
