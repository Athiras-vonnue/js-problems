//Function to determine whether the  given input is vowel/ consonant

function isVowel(input) {
  if ((input >= "a" && input <= "z") || (input >= "A" && input <= "Z")) {
    if (
      input === "a" ||
      input === "e" ||
      input === "i" ||
      input === "o" ||
      input === "u" ||
      input === "A" ||
      input === "E" ||
      input === "I" ||
      input === "O" ||
      input === "U"
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return -1;
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
      input: "a",
      exp: true,
    },
    {
      input: "b",
      exp: false,
    },
    {
      input: -12,
      exp: -1,
    },
    {
      input: "F",
      exp: false,
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
      input: "javascript2",
      exp: 3,
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
    console.log(got)
    if (got === tcs[i].exp) {
      console.log(`Testcase ${i + 1} is passed`);
    } else {
      console.log(`Testcase ${i + 1} is failed`);
    }
  }
}
testCountVowels();

//bug , function failed when a number comes inside the string