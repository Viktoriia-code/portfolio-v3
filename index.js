// START animation of logo
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.rs-school');

for (let elm of elements) {
  observer.observe(elm);
}
//END animation of logo

//START code example
function getRandomColor()
{
  var randomColor = "#";
  var hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A","B","C","D","E","F"];
  for(var i = 0; i < 6; i++)
  {
    randomColor += hexNumbers[Math.floor(Math.random()*16)];
  }
  document.getElementById("code").style.backgroundColor = randomColor;
  document.getElementById("color-code").innerHTML = randomColor;
}
//END code example