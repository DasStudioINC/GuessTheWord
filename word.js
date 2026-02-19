const wordtext = document.getElementById("Word");
const badWords = document.getElementById("CannotWords");
const description = document.getElementById("description");
let moreWords = [
  "goofball : a person who behaves in a silly or ridiculous way : (silly, foolish, clown, idiot, joker, dork)",
  "sloth : a slow, lazy creature that barely moves : (lazy, slow, sleepy, animal, funny)",
  "fizzle : to fail in a weak or disappointing way : (fail, flop, weak, funny, oops)",
  "wiggle : to move with small twists and turns : (dance, twist, shake, fun, silly)",
  "snicker : a quiet, mischievous laugh : (laugh, giggle, mischievous, funny, joke)",
  "pogo : a small jump or bounce : (jump, bounce, silly, energetic, toy)",
  "pickle : a sour, funny little vegetable treat : (food, sour, funny, snack, weird)",
  "blip : a tiny, sudden, or strange event : (tiny, small, odd, funny, unexpected)",
  "doodle : a silly or careless drawing : (draw, scribble, fun, art, childish)",
  "nugget : a small, precious, or funny piece of something : (small, funny, cute, gold, food)",
  "splat : the sound of something messy hitting a surface : (mess, sound, messy, funny, oops)",
  "flop : to fail or fall down awkwardly : (fail, fall, silly, oops, funny)",
  "boing : a springy, bouncy sound or movement : (bounce, spring, sound, silly, fun)",
  "muffin : a cute, small baked treat : (food, cute, snack, dessert, soft)",
  "gloop : a thick, messy substance : (messy, sticky, slime, funny, goo)",
  "snuggle : to cuddle warmly and comfortably : (hug, cozy, warm, cute, comfy)",
  "twitch : a small, sudden movement : (movement, jump, sudden, funny, quirky)",
  "zippy : full of energy or speed : (fast, energetic, lively, fun, bright)",
  "blubber : noisy crying or wobbly fat : (cry, noise, funny, silly, blob)",
  "crumpet : a soft, bready treat : (food, snack, breakfast, cute, yummy)",
  "gizmo : a small, clever gadget : (device, tool, clever, fun, gadget)",
  "whimsy : playful or fanciful fun : (playful, silly, fun, creative, imaginative)",
  "bloop : a funny, small sound or mistake : (sound, mistake, funny, small, silly)",
  "sprocket : a small gear in a machine : (gear, machine, tiny, metal, mechanical)",
  "plop : to fall or drop with a soft sound : (fall, drop, soft, funny, splash)",
  "snooze : a short, lazy nap : (sleep, lazy, nap, cozy, rest)",
  "guffaw : a loud, hearty laugh : (laugh, funny, loud, joke, silly)",
  "muddle : a confusing or messy situation : (mess, confuse, disorder, funny, chaos)",
  "puddle : a small pool of water : (water, rain, small, wet, fun)",
  "boodle : a collection of random things : (stuff, collection, funny, random, pile)",
  "zonk : to be completely exhausted : (tired, sleepy, fall, collapse, lazy)",
  "jiggle : to shake lightly : (shake, move, fun, silly, wobble)",
  "nuzzle : to rub or snuggle gently : (cuddle, cozy, warm, affectionate, cute)",
  "whopper : something big or exaggerated : (big, huge, lie, funny, giant)",
  "slurp : to drink noisily : (drink, messy, funny, sound, food)",
  "flick : a quick, light movement : (tap, move, small, gesture, funny)",
  "twiddle : to play idly with your fingers : (fingers, idle, silly, fidget, play)",
  "snazzy : stylish, flashy, or fancy : (fashion, stylish, cool, fun, flashy)",
  "gargle : to rinse your mouth with liquid : (mouth, rinse, sound, funny, wet)",
  "squelch : a wet, squishy sound : (sound, wet, messy, funny, squishy)",
  "plunk : a soft, clumsy drop : (fall, drop, sound, funny, clumsy)",
  "bamboozle : to trick or confuse someone : (trick, confuse, joke, silly, mislead)",
  "hodgepodge : a messy mix of things : (mess, mix, random, funny, clutter)",
  "flibbert : a silly, flighty person : (silly, foolish, scatterbrained, funny, child)",
  "twang : a sharp, vibrating sound : (sound, string, musical, funny, sharp)",
  "gobble : to eat quickly and noisily : (eat, food, fast, messy, silly)",
  "dingle : a small, hidden valley : (nature, small, hidden, funny, cute)",
  "whizzle : to move quickly with a sound : (fast, sound, zoom, silly, fun)",
  "snarf : to eat or drink quickly : (eat, drink, messy, funny, silly)",
  "clomp : a heavy, clumsy step : (walk, step, clumsy, funny, loud)",
  "bumble : to move awkwardly : (clumsy, awkward, silly, stumble, funny)",
  "plucky : brave and spirited : (brave, bold, courageous, cute, fun)",
];

let wordsUsed = [1000];
let wordsUsedIndex = 0;

let descriptionVisibilty = false;
let desc = "";
const skipsText = document.getElementById("skips");
let skips = 3;

const wordshot = document.getElementById("wordshot");

wordshot.style.visibility = "hidden";
function showwordshot() {
  wordshot.style.visibility = "visible";
}

let didSkip = false;
pickWord();

function pickWord() {
  if (didSkip) {
    wordsUsed[wordsUsedIndex] = text;
    didSkip = false;
  }
  let text = "";
  desc = "";
  let nonwords = "";

  let y = Math.floor(Math.random() * moreWords.length);
  let comps = moreWords[y].split(":");
  desc = comps[1];
  text = comps[0];
  nonwords = comps[2];

  let check = false;
  for (let l = 0; l < wordsUsed.length; l++) {
    if (wordsUsed[l] == text) {
      check = true;
      break;
    }
  }
  if (check) {
    pickWord();
  } else {
    wordsUsed[wordsUsedIndex] = text;
    wordsUsedIndex++;
  }

  description.innerText = desc;
  wordtext.innerHTML = text;
  badWords.innerText = nonwords;
  skips = 3;
  skipsText.style.visibility = "visible";
  skipsText.innerText = skips;
}

function skip() {
  let text = "";
  desc = "";
  let nonwords = "";

  let y = Math.floor(Math.random() * moreWords.length);
  let comps = moreWords[y].split(":");
  desc = comps[1];
  text = comps[0];
  nonwords = comps[2];

  let check = false;
  for (let l = 0; l < wordsUsed.length; l++) {
    if (wordsUsed[l] == text) {
      check = true;
      break;
    }
  }
  if (check) {
    skip();
  }

  description.innerText = desc;
  wordtext.innerHTML = text;
  badWords.innerText = nonwords;
  skips--;
  skipsText.innerText = skips;
  if (skips === 0) {
    skipsText.style.visibility = "hidden";
  }
}

const leftSide = document.getElementById("leftIMG");

function setIconLeft(id) {
  if (id === "pirate") {
    leftSide.src = "Pirate.png";
  } else if (id === "bigjosh") {
    leftSide.src = "Big Josh.png";
  } else if (id === "gamerboy") {
    leftSide.src = "GamerBoy.png";
  } else if (id === "knight") {
    leftSide.src = "Knight.png";
  } else if (id === "princess") {
    leftSide.src = "Princess.png";
  } else if (id === "witch") {
    leftSide.src = "Witch.png";
  } else if (id === "nerd") {
    leftSide.src = "Nerd.png";
  } else if (id === "lu") {
    leftSide.src = "Lu.png";
  } else if (id === "zoe") {
    leftSide.src = "Zoe.png";
  }
}

let scoreLeftText = document.getElementById("player1score");
let scoreleft = 0;
scoreLeftText.innerText = "Score: " + scoreleft;
function AddScoreLeft() {
  scoreleft++;
  scoreLeftText.innerText = "Score: " + scoreleft;
}

let nameTag = document.getElementById("Guy1");
const namePicker1 = document.getElementById("namePicker1");
function nameLeft() {
  const guy1Name = document.getElementById("guy1name");
  const inputValue = guy1Name.value;
  nameTag.innerText = inputValue;
  namePicker1.style.visibility = "hidden";
}

// player 2
const rightSide = document.getElementById("rightIMG");

function setIconRight(id) {
  if (id === "pirate") {
    rightSide.src = "Pirate.png";
  } else if (id === "bigjosh") {
    rightSide.src = "Big Josh.png";
  } else if (id === "gamerboy") {
    rightSide.src = "GamerBoy.png";
  } else if (id === "knight") {
    rightSide.src = "Knight.png";
  } else if (id === "princess") {
    rightSide.src = "Princess.png";
  } else if (id === "witch") {
    rightSide.src = "Witch.png";
  } else if (id === "nerd") {
    rightSide.src = "Nerd.png";
  } else if (id === "lu") {
    rightSide.src = "Lu.png";
  } else if (id === "zoe") {
    rightSide.src = "Zoe.png";
  }
}

let scoreRightText = document.getElementById("player2score");
let scoreright = 0;
scoreRightText.innerText = "Score: " + scoreright;
function AddScoreRight() {
  scoreright++;
  scoreRightText.innerText = "Score: " + scoreright;
}

let nameTag2 = document.getElementById("Guy2");
const namePicker2 = document.getElementById("namePicker2");
function nameRight() {
  const guy1Name = document.getElementById("guy2name");
  const inputValue = guy1Name.value;
  nameTag2.innerText = inputValue;
  namePicker2.style.visibility = "hidden";
}
