const wordtext = document.getElementById("Word");
const badWords = document.getElementById("CannotWords");
const description = document.getElementById("description");
let moreWords = [
  "goofball : a person who behaves in a silly or ridiculous way : (silly, foolish, clown, idiot, joker, dork)",
  "banana peel : a slippery fruit skin often used for slapstick comedy : (banana, slip, fall, joke, cartoon, accident)",
  "toothbrush : a handheld tool used to clean teeth daily : (teeth, brush, toothpaste, bathroom, hygiene, mouth)",
  "sock drawer : a chaotic storage space full of mismatched socks : (socks, mess, drawer, laundry, chaos, fabric)",
  "keyboard gremlin : someone who types angrily and makes many mistakes : (typing, rage, errors, smashing, keys, noise)",
  "brain fog : a mental state where thinking feels slow or unclear : (confusion, tired, haze, sluggish, mind, fog)",
  "desk goblin : a creature that hoards random junk on their desk : (clutter, mess, papers, snacks, chaos, desk)",
  "night owl : a person who stays awake late into the night : (late, awake, dark, energy, insomnia, moon)",
  "couch potato : a person who spends excessive time sitting and watching screens : (lazy, sofa, tv, sitting, snacks, chill)",
  "time vampire : something that consumes time without being productive : (wasted, distraction, hours, drain, delay, procrastination)",
  "brainstorm : a rapid flow of ideas often chaotic but creative : (ideas, thinking, creativity, chaos, sparks, mind)",
  "paper cut : a tiny cut from paper that hurts more than expected : (pain, sting, finger, paper, annoying, sharp)",
  "burnt toast : bread that has been overcooked in a toaster : (black, crispy, smoke, breakfast, mistake, crunch)",
  "spam email : an unwanted digital message sent in bulk : (junk, inbox, scam, annoying, ads, delete)",
  "loading screen : the waiting phase before something opens or starts : (wait, delay, progress, bar, patience, screen)",
  "lag spike : a sudden delay in performance during a game or app : (freeze, delay, internet, glitch, stutter, ping)",
  "debug nightmare : a frustrating coding problem that refuses to disappear : (error, bug, code, frustration, loop, pain)",
  "coffee addict : a person who relies heavily on caffeine : (coffee, caffeine, tired, energy, mug, morning)",
  "alarm snoozer : someone who repeatedly delays waking up : (sleep, alarm, snooze, tired, late, bed)",
  "brain freeze : a sudden headache caused by cold food : (ice, cold, pain, head, dessert, shock)",
  "lunch thief : someone who steals food from a shared fridge : (steal, food, fridge, work, rude, hunger)",
  "internet rabbit hole : a chain of links that leads far from the original topic : (scrolling, lost, distraction, endless, clicks, time)",
  "keyboard warrior : a person who argues aggressively online : (argue, comments, internet, fight, rage, typing)",
  "office zombie : a worker running on low energy : (tired, work, slow, coffee, drained, routine)",
  "plastic fork : a flimsy disposable eating utensil : (utensil, cheap, bendy, food, picnic, break)",
  "mystery stain : an unknown mark that appears on clothing : (unknown, dirty, clothes, stain, confusion, mess)",
  "brain reboot : the moment clarity returns after confusion : (reset, clarity, thinking, refresh, focus, mind)",
  "elevator music : bland background music meant to fill silence : (boring, quiet, tune, background, waiting, awkward)",
  "wallet panic : the sudden fear of losing your wallet : (panic, search, stress, money, lost, relief)",
  "password graveyard : forgotten passwords stored nowhere useful : (forgotten, login, reset, security, chaos, accounts)",
  "plastic bag tornado : a bag blown wildly by the wind : (wind, trash, spin, street, chaos, float)",
  "midnight snack : food eaten late at night : (hungry, night, fridge, crumbs, secret, quiet)",
  "broken pen : a pen that fails when needed most : (ink, frustration, school, writing, useless, click)",
  "autocorrect fail : an unintended text replacement mistake : (texting, error, phone, typo, embarrassment, message)",

  // ---- NEW UNIQUE ADDITIONS ----
  "brain hamster : imaginary creature powering constant thoughts : (thinking, running, effort, mind, tired, wheel)",
  "chair jail : being stuck sitting for too long : (sitting, trapped, uncomfortable, chair, waiting, stiff)",
  "wifi ghost : an internet connection that randomly disappears : (internet, signal, vanish, lag, network, gone)",
  "email purgatory : an inbox flooded with unread messages : (email, inbox, overload, stress, unread, work)",
  "tab overload : having too many browser tabs open : (browser, tabs, memory, clutter, chaos, computer)",
  "microwave gamble : guessing how long food should be heated : (microwave, food, guess, heat, time, risk)",
  "calendar shock : sudden realization of an upcoming event : (calendar, surprise, panic, date, reminder, stress)",
  "cord spaghetti : a tangled mess of cables and wires : (cords, wires, mess, tangle, desk, chaos)",
  "meeting trance : zoning out during a long meeting : (meeting, bored, drift, mind, tired, zone)",
  "social battery : emotional energy available for interaction : (energy, people, drained, introvert, talk, effort)",
  "nap regret : waking up worse after sleeping briefly : (nap, tired, groggy, mistake, sleep, regret)",
  "notification storm : many alerts arriving at once : (alerts, phone, buzzing, distraction, noise, spam)",
  "cursor paralysis : inability to type while staring at the screen : (cursor, stuck, thinking, blank, screen, pause)",
  "coffee crash : sudden drop in energy after caffeine : (coffee, caffeine, slump, tired, energy, drop)",
  "deadline denial : ignoring a due date until panic hits : (deadline, ignore, stress, late, panic, work)",
  "desk avalanche : clutter falling off a messy desk : (desk, clutter, fall, mess, chaos, gravity)",
  "brain vacuum : complete absence of thoughts : (empty, blank, mind, nothing, silence, forget)",
  "sleep inertia : heaviness felt right after waking up : (sleep, groggy, slow, morning, tired, body)",
  "idea graveyard : abandoned thoughts never used : (ideas, unused, forgotten, mind, storage, waste)",
  "keyboard mashing : frantic typing without accuracy : (typing, speed, panic, keyboard, errors, smash)",
  "screen fatigue : exhaustion from staring at displays too long : (screen, eyes, tired, tech, strain, glare)",
  "thought derailment : losing track of what you were saying : (forget, distraction, mind, pause, confusion, talk)",
  "panic scrolling : rapidly scrolling without absorbing content : (scrolling, anxiety, phone, distraction, speed, stress)",
  "brain squeak : an awkward pause where thinking stalls : (pause, awkward, silence, mind, stuck, hesitation)",
  "hallway panic : sudden rush when realizing you are late : (panic, rush, running, late, urgency, speed)",
  "laundry limbo : clothes stuck between clean and dirty : (laundry, clothes, confusion, pile, waiting, mess)",
  "floor treasure : random item found on the ground : (floor, find, surprise, lost, object, chance)",
  "chair squeal : high pitched noise when shifting weight : (chair, noise, movement, embarrassing, squeak, sound)",
  "brain drizzle : weak unfocused thinking effort : (thinking, weak, foggy, tired, mind, slow)",
  "memory pothole : sudden gap in recall : (memory, forget, blank, stumble, brain, lapse)",
  "screen hypnosis : zoning out while staring at a display : (screen, stare, trance, focus, lost, eyes)",
  "sock void : mysterious place where socks disappear : (socks, lost, laundry, mystery, missing, chaos)",
  "thought hiccup : brief mental interruption : (thought, pause, interruption, mind, glitch, break)",
  "desk sediment : layers of old forgotten items : (desk, layers, junk, buildup, clutter, time)",
  "fridge stare : standing still while deciding what to eat : (fridge, hungry, stare, indecision, food, cold)",
  "calendar blindness : failing to notice scheduled events : (calendar, ignore, forget, schedule, surprise, date)",
  "brain overheat : mental exhaustion from too much thinking : (exhaustion, overload, tired, brain, stress, burnout)",
  "keyboard slap : loud aggressive key presses : (keyboard, noise, typing, frustration, slam, force)",
  "mind buffering : delay before forming a response : (thinking, delay, pause, loading, mind, wait)",
  "room echo silence : awkward quiet after someone speaks : (silence, awkward, pause, room, tension, stillness)",
  "internet limbo : being online but nothing loads : (internet, loading, stuck, wait, connection, delay)",
  "paper avalanche : documents falling unexpectedly : (paper, fall, mess, gravity, chaos, stack)",
  "idea spark : sudden burst of inspiration : (idea, creativity, flash, moment, insight, brain)",
  "brain knots : tangled confusing thoughts : (confusion, tangled, thinking, stuck, mind, twist)",
  "chair dent : temporary mark left from sitting : (chair, pressure, sitting, imprint, body, shape)",
  "mouse drift : losing cursor location on screen : (cursor, mouse, lost, screen, confusion, searching)",
  "time blur : inability to track passing time : (time, blur, lost, hours, confusion, flow)",
  "mental traffic : too many thoughts competing at once : (thoughts, overload, congestion, brain, chaos, noise)",
  "snack regret : eating something and immediately regretting it : (snack, regret, hunger, choice, food, guilt)",
  "brain echo chamber : repeating the same thought internally : (repeat, loop, thought, mind, cycle, stuck)",
  "desk rattle : shaking desk causing noise : (desk, shake, noise, vibration, movement, distraction)",
  "screen glare rage : irritation caused by screen brightness : (screen, glare, eyes, anger, strain, light)",
  "email dread : anxiety before opening messages : (email, anxiety, inbox, stress, fear, avoid)",
  "focus drift : gradual loss of concentration : (focus, drift, distraction, mind, attention, fade)",
  "brain foglet : small manageable mental fuzziness : (foggy, light, confusion, tired, brain, haze)",
  "chair swivel panic : spinning too far accidentally : (chair, spin, surprise, panic, movement, balance)",
  "time crunch : pressure from limited time : (time, pressure, deadline, rush, stress, clock)",
  "brain itch : nagging thought that won’t go away : (thought, nagging, itch, repeat, mind, distraction)",
  "tab jungle : chaotic collection of browser tabs : (tabs, browser, clutter, chaos, overload, screen)",
  "memory residue : lingering fragments of old thoughts : (memory, fragments, leftovers, mind, recall, echo)",
  "keyboard clatter : loud fast typing noise : (keyboard, noise, typing, speed, clack, sound)",
  "screen tunnel vision : ignoring surroundings while focused on screen : (screen, focus, ignore, tunnel, attention, eyes)",
  "decision fatigue : mental exhaustion from choices : (decisions, tired, overwhelm, brain, choice, drain)",
  "brain fog bank : reserve of confusion that builds over time : (confusion, buildup, haze, brain, tired, stack)",
  "workspace creep : slow accumulation of clutter : (workspace, clutter, slow, buildup, mess, desk)",
  "mental speed bump : unexpected pause in thinking : (pause, slow, thought, bump, brain, interruption)",
  "fridge noise paranoia : thinking appliance sounds are something else : (fridge, noise, paranoia, sound, worry, night)",
  "scroll fatigue : exhaustion from endless scrolling : (scrolling, tired, phone, screen, numb, repeat)",
  "idea overload : too many ideas at once : (ideas, overload, chaos, creativity, flood, brain)",
  "keyboard betrayal : keys failing at worst time : (keyboard, failure, frustration, typing, tech, error)",
  "thought static : low level mental distraction : (static, noise, mind, distraction, buzz, thinking)",
  "attention leak : focus slowly draining away : (focus, loss, distraction, leak, mind, drift)",
  "brain sand : gritty slow thinking : (slow, rough, thinking, tired, brain, friction)",
  "schedule shock : surprise realization of commitments : (schedule, surprise, panic, calendar, stress, event)",
];

let wordsUsed = [1000];
let wordsUsedIndex = 0;

let descriptionVisibilty = false;
let desc = "";
pickWord();

function pickWord() {
  let text = "";
  desc = "";
  let nonwords = "";

  let y = Math.floor(Math.random() * moreWords.length) + 1;
  let comps = moreWords[y].split(":");
  desc = comps[1];
  text = comps[0];
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
}

const leftSide = document.getElementById("leftIMG");

function setIconLeft(id) {
  if (id === "pirate") {
    leftSide.src = "Images/Pirate.png";
  } else if (id === "bigjosh") {
    leftSide.src = "Images/Big Josh.png";
  } else if (id === "gamerboy") {
    leftSide.src = "Images/GamerBoy.png";
  } else if (id === "knight") {
    leftSide.src = "Images/Knight.png";
  } else if (id === "princess") {
    leftSide.src = "Images/Princess.png";
  } else if (id === "witch") {
    leftSide.src = "Images/Witch.png";
  } else if (id === "nerd") {
    leftSide.src = "Images/Nerd.png";
  } else if (id === "lu") {
    leftSide.src = "Images/Lu.png";
  } else if (id === "zoe") {
    leftSide.src = "Images/Zoe.png";
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
    rightSide.src = "Images/Pirate.png";
  } else if (id === "bigjosh") {
    rightSide.src = "Images/Big Josh.png";
  } else if (id === "gamerboy") {
    rightSide.src = "Images/GamerBoy.png";
  } else if (id === "knight") {
    rightSide.src = "Images/Knight.png";
  } else if (id === "princess") {
    rightSide.src = "Images/Princess.png";
  } else if (id === "witch") {
    rightSide.src = "Images/Witch.png";
  } else if (id === "nerd") {
    rightSide.src = "Images/Nerd.png";
  } else if (id === "lu") {
    rightSide.src = "Images/Lu.png";
  } else if (id === "zoe") {
    rightSide.src = "Images/Zoe.png";
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
