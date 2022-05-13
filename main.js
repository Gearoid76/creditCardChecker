// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
const validateCred = (array) => {
   let checkDigits = []; // Starts from the back last third last etc.
   let everyOtherDigit = []; // takes the second last forth last and X 2
   let subDigits = []; // this takes 9 from the nos > 9 and give back remainder
   //let sumArr = [];
   let finalSum = 0;
   let newSubDigits = [];// checkDigits and subDigits all numbers 
 
   for(let i = array.length - 1; i >= 0; i -= 2) {
      checkDigits.push(array[i]);
    }
    for (let j = array.length - 2; j >= 0; j -= 2) {
      everyOtherDigit.push(array[j] * 2); 
   } 
      for (let k of everyOtherDigit) {
         if (k > 9) {
            subDigits.push(k-9);  // the same as code 
         } else subDigits.push(k)
         newSubDigits = checkDigits.concat(subDigits)
      }
      newSubDigits = newSubDigits.filter(function(x) {
        return x <= 9;
        
     })
     for (var l = 0; l < newSubDigits.length; l ++) {
            finalSum += newSubDigits[l]
     }
     if (finalSum % 10 === 0) {
        return 'Valid Card';
     }
     else {
        return ('Invalid Card');
     }

     console.log(finalSum + " this is the final sum");
 
     
   console.log(array + " this is the array to start with");
   console.log(checkDigits + " check digit starting from the back");
   console.log(subDigits + " there are the subdigits");
   console.log(newSubDigits);
   console.log(finalSum + " final sum");

}
//console.log(validateCred(valid1));
//console.log(validateCred(invalid1));

let invalidCards = [];
let validCards =[];
let validCardNames = [];
const findInvaidCards = (nestedArray) => {
   for (var i = 0; i < nestedArray.length; i ++) {
      if (validateCred(nestedArray[i]) === 'Invalid Card') {
         invalidCards.push(nestedArray[i]);
      } else {
      validCards.push(nestedArray[i]);
   }
   }
   console.log(validCards);
};
findInvaidCards(batch);

for(let i = 0; i < validCards.length; i++){
switch (validCards[i][0]) {
   case 3:
      if (validCards.indexOf('Amex') === -1) {
         validCardNames.push('Amex');
      }
      break;
   case 4: 
      if (validCards.indexOf('Visa') === -1) {
         validCardNames.push('Visa');
      }
      break;
   case 5:
      if (validCards.indexOf('MasterCard') === -1) {
         validCardNames.push('MasterCard')
      }
      break;
   case 6:
      if (validCards.indexOf('Discover') === -1) {
         validCardNames.push('Discover')
      }
      break;
   default:
      console.log('Company not in Database')
   }
};
console.log(validCardNames);

