function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  let input = string;
  if (string.toLowerCase() === input) {
    // then its a whisper
    return `I can\'t hear you!`;
  }
  if (string.toUpperCase() === input) {
    // then its a shout

    return "YES INDEED!";
  } else if (input === "I love you, Grandma.") {
    return "I love you, too.";
  }
}
