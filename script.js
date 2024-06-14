let u = 0;
function finale () {
  if (u == 10 ) {
    setTimeout(function(){
      document.getElementById("textbox").innerHTML = 'you revealed all the words!';
    setTimeout(function() {
       var tr = document.getElementById("LieselTree");
       tr.style.display = 'none';
       var flower = document.getElementById("flower");
       flower.style.display = 'block';
       flower.style.visibility = 'hidden';
       flower.style.visibility = 'visible';     
      document.getElementById("textbox").innerHTML = 'what a beautiful tree!..?';
      setTimeout(function(){   document.getElementById("textbox").innerHTML = '...';
        setTimeout(function(){ 
        document.getElementById("textbox").innerHTML = 'What does it take to change?';
        },5000);
  }, 2000); 
    }, 7000);
}, 6000);
}
}
var quotes = [
'"Upon her arrival, you could still see the bite marks of snow on her hands and the frosty blood on her fingers"(31). She was so cold and scared. I would be too.',
'"Staring into it, Liesel revisited these dark rooms of her past and her mattress answering questions made up of one word" (111). Losing your family so fast must be so devestating.',
'"Around corners, she could hear the shuffles of her own hands, disturbing the shelves"(136). Oh, how she loved books.',
'"And she walked over and hugged him for the first time. "Thanks, Max"" (222). That must have taken a lot of courage.',
'"Yes, the brutality of words. She summoned them from someplace she only now recognized and hurled them at Ilsa Hermann" (262). I can feel her heat come off the page.',
' "He was the second snowman to be melting away before her eyes, only this one was different. It was a paradox" (316).',
'"With tears in her eyes, she saw the man slide farther forward, pushing Papa back to cry into his ankles" (394). Watching the people you love getting hurt with nothing you can do.',
'"There was no denying the fact that Rosa Hubermann was sitting on the edge of the bed with [the] accordian tied to her chest"(429). Hans deserved to see this.',
'"She must have said it a hundred times as she hugged him in the kitchen and [would not] let go" (493). Nice to see how much Liesel grew into her new home.',
'"The fingers of her soul touched the story that was written so long ago in her Himmel Street basement" (550). Rest in Paradise.', 
]
function gravedigger() { 
  var g = document.getElementById("Leaf1");
  g.style.visibility = 'hidden';
document.getElementById("textbox").innerHTML = '';
  document.getElementById("textbox").innerHTML = quotes[0];                       u = u + 1;
}

function shoulder() {
  var s = document.getElementById("Leaf2");
  s.style.visibility = 'hidden';
document.getElementById("textbox").innerHTML = '';
  document.getElementById("textbox").innerHTML = quotes[1];
  u = u + 1;
}

function kampf() {
  var k = document.getElementById("Leaf3");
  k.style.visibility = 'hidden';
document.getElementById("textbox").innerHTML = '';
  document.getElementById("textbox").innerHTML = quotes[2];
  u = u + 1;
}
  function standover() {
    var m = document.getElementById("Leaf4");
    m.style.visibility = 'hidden';
  document.getElementById("textbox").innerHTML = '';
    document.getElementById("textbox").innerHTML = quotes[3]
    u = u + 1;
}

function whistler() {
  var w = document.getElementById("Leaf5");
  w.style.visibility = 'hidden';
document.getElementById("textbox").innerHTML = '';
  document.getElementById("textbox").innerHTML = quotes[4];
  u = u + 1;
}

function dream() {
  var d = document.getElementById("Leaf6");
  d.style.visibility = 'hidden';
document.getElementById("textbox").innerHTML = '';
  document.getElementById("textbox").innerHTML = quotes[5];
  u = u + 1;
}

function dictionary() {
  var x = document.getElementById("Leaf7");
  x.style.visibility = 'hidden';
document.getElementById("textbox").innerHTML = '';
  document.getElementById("textbox").innerHTML = quotes[6];
  u = u + 1;
}
function wordshaker() {
  var ws = document.getElementById("Leaf8");
  ws.style.visibility = 'hidden';
document.getElementById("textbox").innerHTML = '';
  document.getElementById("textbox").innerHTML = quotes[7];
  u = u + 1;
}

function human() {
  var h = document.getElementById("Leaf9");
  h.style.visibility = 'hidden';
document.getElementById("textbox").innerHTML = '';
  document.getElementById("textbox").innerHTML = quotes[8];
  u = u + 1;
}
function bookthief() {
  var b = document.getElementById("Leaf10");
  b.style.visibility = 'hidden';
document.getElementById("textbox").innerHTML = '';
  document.getElementById("textbox").innerHTML = quotes[9];
  u = u + 1;
}


