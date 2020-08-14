window.addEventListener("load", () => {
  const shareButton = document.querySelector("#share-button");
  const shareBar = document.querySelector(".share-bar");
  const triangle = document.querySelector(".triangle");

  shareButton.addEventListener("click", () => {
    shareBar.classList.toggle("hidden");
    triangle.classList.toggle("hidden");
    shareButton.classList.toggle("active");
  });

  console.log("kept u waiting, uh?");
});
