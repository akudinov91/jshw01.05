const images = [
  {
    url: "https://deadline.com/wp-content/uploads/2023/04/MCDHAPO_EC151.jpg?w=800",
  },

  {
    url: "https://media.gq-magazine.co.uk/photos/642bf67b41fcc5becbed8de8/16:9/w_2560%2Cc_limit/Harry_potter_0003_MSDHAPO_EC037.jpeg",
  },

  {
    url: "https://imageio.forbes.com/specials-images/imageserve/65c29d8a0f4b8e2dd1c66fc9/Harry-Potter-And-The-Deathly-Hallows---Part-2---World-Film-Premiere/0x0.jpg?format=jpg&crop=3000,1998,x0,y0,safe&width=960",
  },
];

let currentIndex = 0;
const galleryImage = document.querySelector("#gallery__img");
const prevButton = document.querySelector("#prev_btn");
const nextButton = document.querySelector("#next_btn");

function showImage(index) {
  galleryImage.src = images[index].url;
  currentIndex = index;
  checkButtons();
}

function checkButtons() {
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === images.length - 1;
}

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    showImage(currentIndex - 1);
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    showImage(currentIndex + 1);
  }
});

showImage(0);
