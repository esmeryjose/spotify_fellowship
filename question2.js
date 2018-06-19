const decodeString = (s) => {
    
    // These represent the final string, the number of times we are looping to repeat
    // letters, the encoded portion of the provided string, and a counter for when we
    // open the brackets respectively 
    let finalS = "", num = 0, encoded = "", openBracket = 0;

    // here we start itarating over the given string
    for (let i = 0; i < s.length; i++) {

        // we store the current position of the string
        let current =s.charAt(i);
        
        // if our openBracket counter is greater or equal to one we add current to the encoded string
        if (openBracket >= 1) encoded += current;
        
        // if our current is the opening bracket, we give a +1 to our openBracket counter
        if (current == "[") openBracket++;
        else if (current == "]") {
            openBracket--;
            
            // if our current is the closing bracket but our openBracket counter 
            // is not 0 we want to do nothing 
            if (openBracket == 0) {
                
                // if openBracket is 0 we want to iterate and recursively collect 
                // the final string
                for (let j = 0; j < num; j++) {
                    finalS += decodeString(encoded);
                }

                // Once we are done with recursion we make our num counter 0
                // and our encoded message an empty string
                num = 0;
                encoded = "";
            }
        } else {

            if (openBracket == 0) {
                
                // here we take care of acquiring the coeficient that will difine how many
                // times we loop over the letters
                if (current >= 0 || current <= 9) num = parseInt(`${num}${current}`);
                
                // here we collect the letters
                else finalS += current;
            }
        }
    }
    
    // we return the collected letters
    return finalS;
};
