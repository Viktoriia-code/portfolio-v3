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

//button to scroll back to top
const btnScrollToTop = document.getElementById("btnToTop");
const btnMenu = document.getElementById("btnMenu");

btnScrollToTop.addEventListener("click", function() { 
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); 
}); 

window.addEventListener("scroll", () => { 
  if (window.pageYOffset > 100) { 
    btnScrollToTop.classList.add("active");
    btnMenu.classList.add("active");
  } else { 
    btnScrollToTop.classList.remove("active"); 
    btnMenu.classList.remove("active");
  } 
});