//signIn Button
const signIn = document.querySelector(".btn-2");
const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
signIn.addEventListener("click", () => {
  if(document.querySelector(".container").style.display = "none") {
    document.querySelector(".container").style.display = "block";
  } else if (document.querySelector(".container").style.display = "block") {
    document.querySelector(".container").style.display = "none";
  }
});

// carousel
const buttonsWrapper = document.querySelector(".map");
const slide = document.querySelector(".inner");

buttonsWrapper.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach((item) =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slide.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      slide.style.transform = "translateX(-33.33333333333333%)";
      e.target.classList.add("active");
    }
  }
});

let mainPosts = document.querySelectorAll(".main-post");
let posts = document.querySelectorAll(".post");

let index = 0;
let postIndex = 0;
let currentPost = posts[postIndex];
let currentMainPost = mainPosts[postIndex];

let progressInterval = setInterval(progress, 100); // 180

function progress() {
  if (index === 100) {
    index = -5;
    // reset progress bar
    currentPost.querySelector(".progress-bar__fill").style.width = 0;
    document.querySelector(
      ".progress-bar--primary .progress-bar__fill"
    ).style.width = 0;
    currentPost.classList.remove("post--active");

    postIndex++;

    currentMainPost.classList.add("main-post--not-active");
    currentMainPost.classList.remove("main-post--active");

    // reset postIndex to loop over the slides again
    if (postIndex === posts.length) {
      postIndex = 0;
    }

    currentPost = posts[postIndex];
    currentMainPost = mainPosts[postIndex];
  } else {
    index++;
    currentPost.querySelector(".progress-bar__fill").style.width = `${i}%`;
    document.querySelector(
      ".progress-bar--primary .progress-bar__fill"
    ).style.width = `${i}%`;
    currentPost.classList.add("post--active");

    currentMainPost.classList.add("main-post--active");
    currentMainPost.classList.remove("main-post--not-active");
  }
}

//cardThree
const text1_options = [
  "Yellowstone National Park, WY",
  "Punta Cana Dominican Republic",
  "Tulum, Mexico",
  "Hawaii",
];
const text2_options = [
  "69 min. read",
  "7 min. read",
  "8 min. read",
  "87,658.1277 min. read",
];
const color_options = ["#2DD4BF", "#06B6D4", "#7FE0EB", "#6CE5B1"];
const image_options = [
  "https://media-cdn.tripadvisor.com/media/photo-s/1c/cf/f9/eb/caption.jpg",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/d4/44/bb/catalonia-royal-bavaro.jpg?w=900&h=-1&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/05/bc/7a/exterior.jpg?w=900&h=-1&s=1",
  "https://th.bing.com/th/id/R.6b3fdb59d244e0730e664e4bccb24dc2?rik=gVvee%2baU%2b3jBBg&pid=ImgRaw&r=0",
];
var i = 0;
const currentOptionText1 = document.getElementById("current-option-text1");
const currentOptionText2 = document.getElementById("current-option-text2");
const currentOptionImage = document.getElementById("image");
const carousel = document.getElementById("carousel-wrapper");
const mainMenu = document.getElementById("menu");
const optionPrevious = document.getElementById("previous-option");
const optionNext = document.getElementById("next-option");

currentOptionText1.innerText = text1_options[i];
currentOptionText2.innerText = text2_options[i];
currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
mainMenu.style.background = color_options[i];

optionNext.onclick = function () {
  i = i + 1;
  i = i % text1_options.length;
  currentOptionText1.dataset.nextText = text1_options[i];

  currentOptionText2.dataset.nextText = text2_options[i];

  mainMenu.style.background = color_options[i];
  carousel.classList.add("anim-next");

  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);

  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    currentOptionText2.innerText = text2_options[i];
    carousel.classList.remove("anim-next");
  }, 650);
};

optionPrevious.onclick = function () {
  if (i === 0) {
    i = text1_options.length;
  }
  i = i - 1;
  currentOptionText1.dataset.previousText = text1_options[i];

  currentOptionText2.dataset.previousText = text2_options[i];

  mainMenu.style.background = color_options[i];
  carousel.classList.add("anim-previous");

  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);

  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    currentOptionText2.innerText = text2_options[i];
    carousel.classList.remove("anim-previous");
  }, 650);
};

// category
const categoryInput = document.querySelector('#categories');
const itemSelect = document.querySelector('#category');

const categories = [
    {
        id: 1,
        name: 'MMK'
    },
    {
        id: 2,
        name: 'US Dollars'
    },
    {
        id: 3,
        name: 'Euros'
    },
    {
        id: 4,
        name: 'Canadian Dollars'
    },
    {
        id: 5,
        name: 'Swiss Francs'
    },
    {
        id: 6,
        name: 'Australian Dollars'
    },
    {
        id: 7,
        name: 'Japanese Yen'
    },
    {
        id: 8,
        name: 'Chinese Yuan'
    },
    {
        id: 9,
        name: 'Indian Rupees'
    },
    {
        id: 10,
        name: 'Brazilian Real'
    }
];

const items = [
  {
    id: 11,
    name: "United States",
  },
  {
    id: 12,
    name: "Canada(English)",
  },
  {
    id: 13,
    name: "Canada(Francais)",
  },
  {
    id: 14,
    name: "Brasil",
  },
  {
    id: 15,
    name: "Mexico",
  },
  {
    id: 16,
    name: "Argentina",
  },
  {
    id: 17,
    name: "Chile",
  },
  {
    id: 18,
    name: "Colombia",
  },
  {
    id: 19,
    name: "Peru",
  },
  {
    id: 12,
    name: "United Kingdom",
  },
];

function showAllCategories() {
    categories.forEach(category => {
        addCategoryToList(category)
    })
    items.forEach(item => {
        addItemToList(item)
    })
};

function addCategoryToList(category) {
    const optionEl = document.createElement('option')
    optionEl.setAttribute('value', category.id)
    optionEl.textContent = category.name
    categoryInput.appendChild(optionEl);
}

function addItemToList(item) {
    const itemEl = document.createElement('option')
    itemEl.setAttribute('value', item.id)
    itemEl.textContent = item.name
    itemSelect.appendChild(itemEl);
}

window.addEventListener('DOMContentLoaded', () => {
    showAllCategories();
})