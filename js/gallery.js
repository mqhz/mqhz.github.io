//Activates the image gallery.
//The main task is to attach an event listener to each image in the gallery
//and respond appropriately on click.
function activateGallery() {

let thumbmails = document.querySelectorAll("#gallery-thumbs > div > img")

let mainImage = document.querySelector("#gallery-photo img");

thumbmails.forEach(function(thumbnail)
{
  thumbnail.addEventListener("click", function()
{
  //Set clicked image as display image.
  let newImgSrc = thumbnail.dataset.largeVersion;
  mainImage.setAttribute("src", newImgSrc);

  //Change which image is current.
  let currentClass = "current";
  document.querySelector(".current").classList.remove(currentClass);
  thumbnail.parentNode.classList.add(currentClass);
  let galleryInfo = document.querySelector("#gallery-info");
  let title        = document.querySelector(".title");
  let description  = document.querySelector('.description');
  title.innerHTML = thumbnail.dataset.title;
  description.innerHTML = thumbnail.dataset.description;
});
});
}
