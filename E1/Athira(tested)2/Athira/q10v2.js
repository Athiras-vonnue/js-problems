//count vowels in a  string

function isVowel(input) {
  //we can change the input to any of the case using toLower/toUpperCase, it reduces the checking conditions by half

  if ((input >= "a" && input <= "z") || (input >= "A" && input <= "Z")) {
    const vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
    let result = false;

    for (let i = 0; i < vowels.length; i++) {
      //used array.length,which is an inbuilt function
      if (input === vowels[i]) {
        result = true;
        break;
      }
    }

    return result;
  } else {
    return false;
  }
}

//Function to count the number of vowels present in the string

function countVowels(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (isVowel(string[i])) {
      count++;
    }
  }
  return count;
}

//test function to fnd vowel or consonants
function testIsVowel() {
  const tcs = [
    {
      input: "e",
      exp: true,
    },
    {
      input: "b",
      exp: false,
    },
    {
      input: 0,
      exp: -1,
    },
    {
      input: "F",
      exp: false,
    },
    {
      input: "",
      exp: -1,
    },
    {
      input: {},
      exp: -1,
    },
    {
      input: [3],
      exp: -1,
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = isVowel(tcs[i].input);
    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}
testIsVowel();

//test function to count vowels

function testCountVowels() {
  const tcs = [
    {
      input: "javascript34",
      exp: 5,
    },
    {
      input: "bee",
      exp: 2,
    },
    {
      input: "APPLE",
      exp: 2,
    },
    {
      input: 45,
      exp: 0,
    },
  ];
  for (let i = 0; i < tcs.length; i++) {
    const got = countVowels(tcs[i].input);
    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}
testCountVowels();
