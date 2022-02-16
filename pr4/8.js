//Event deligation

//Event deligation is basically not adding event listener to every item, instead
//adding to to only parent item and then using it for the child items

//html

<div id="products">
  <li id="glasses">Glasses</li>
  <li id="coat">Coat</li>
  <li id="watch">Watch</li>
</div>;

document.querySelector("#products").addEventListener("click", (event) => {
  console.log(event);

  if (event.target.tagName === "LI") {
    window.location.href += "#" + event.target.id;
  }
});
