  let result = "";
    number = String(number);

    arr1 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    arr2 = [,,"twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];

      if (number.length === 1 ) result = result + arr1[number];
      if (number.length === 2 && number <= 19) result = result + arr1[number];

      if (number.length === 2 && number >= 20) {
        result = result + arr2[number[0]];
        if (number[1] != 0) result = result + " " + arr1[number[1]];
      }

      if (number.length === 3) {
        result = result + arr1[number[0]] + " hundred";

        if (+number[1] === 0) {
          result = result + " " + arr1[number[2]];
        }

        if (number[1] != 0) {
          if (+number[1] === 1) result = result + " " + arr1[number[1] + number [2]];

          if (number[1] >= 2) {
            result = result + " " + arr2[number[1]];
            if (number[2] != 0) result = result + " " + arr1[number[2]];
          }

        }
      }
      
  return result;
}
