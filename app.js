

// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels
// Customize to be the home page of a portfolio website

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
    // linksContainer.classList.toggle('show-links'); not dynamic
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if(containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`
    } else {
        linksContainer.style.height = 0; 
    }
})
// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link")

window.addEventListener('scroll', function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }
    if(scrollHeight > 500) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
})
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        // prevent default
        e.preventDefault();
        // navigate to specific section
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        // calculate the heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop;
        if (window.innerWidth < 800) {
            position = position - containerHeight;
            if(!fixedNav) {
                position = position - containerHeight; 
            }
            if(navHeight > 82) {
                position = position + containerHeight;
            }
        } else {
            position = position - navHeight;
            if(!fixedNav) {
                position = position - navHeight; 
            }
        }
        
        window.scrollTo({
            left: 0,
            top: position,
        })
        linksContainer.style.height = 0; 
    });
});
// 
const tabBtns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function (e) {
    const id = e.target.dataset.id;
    if(id) {
        // remove active form other buttons
        tabBtns.forEach(function (btn) {
            btn.classList.remove('active');
            e.target.classList.add('active');
        });
        // hide other articles
        articles.forEach(function (article) {
            article.classList.remove('active');
        })
        const element = document.getElementById(id);
        element.classList.add('active');
    }
});
// ********** projects ************
const projects = [
    {
      id: 1,
      name: "Gymshark Bot",
      language: "Python",
      img:
        "./images/Gymshark.png",
      text:
        "Created a script that automates the checkout process on the Gymshark website using the Selenium package for Python which is an open-source web-based automation tool.",
    },
    {
      id: 2,
      name: "Solar Powered Portable Charger",
      language: "Python",
      img:
        "./images/RaspberryPi.png",
      text:
        "A fellow UCI student and I utilized a Servo Motor, Raspberry Pi 4, solar panels, and Python to create a portable charger.",
    },
  ];
  
// select items by the id in the html file
const img = document.getElementById('project-img');
const project = document.getElementById('project');
const language = document.getElementById('language');
const info = document.getElementById('info');
  
// store the button elements with the button variables
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
  
// set starting item
let currentItem = 0;
  
// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});
  
// show project based on item
function showPerson(projectIndex) {
  const item = projects[projectIndex];
  img.src = item.img;
  project.textContent = item.name;
  language.textContent = item.language;
  info.textContent = item.text;
}
  
// show next project
nextBtn.addEventListener("click", function() {
  currentItem++;
  if(currentItem >= projects.length) {
    currentItem = 0;
  }
  showPerson(currentItem);
})
  
// show previous project
prevBtn.addEventListener("click", function() {
  currentItem--;
  if(currentItem < 0) {
    currentItem = projects.length - 1;
  }
  showPerson(currentItem);
})
  
// show random project
randomBtn.addEventListener("click", function() {
  currentItem = Math.floor(Math.random()*projects.length);
  console.log(currentItem);
  showPerson(currentItem);
})

// ********** interests ************
const interests = [
  {
    id: 1,
    name: "Wakeboarding",
    category: "Sports",
    year: 2018,
    img: "./images/wakeboarding.jpg",
    desc: `The past couple of summers I was given the opportunity to try out wakeboarding consistently for the first time and it really helped me develop an appreciation for watersports.`
  },
  {
    id: 2,
    name: "Snowboarding",
    category: "Sports",
    year: 2019,
    img: "./images/snowboarding.jpg",
    desc: `Similar to my experience with wakeboarding, I recently developed an appreciation for snow sports and went multiple weeks in the last month of winter. `
  },
  {
    id: 3,
    name: "Basketball",
    category: "Sports",
    year: 2008,
    img: "./images/basketball.jpg",
    desc: `Basketball was the first sport I ever loved and to this day it continues to be a big part of my life. Even though my playing career is over, I began officiating intramural games to stay connected to the game and plan on officiating high school. `
  },
  {
    id: 4,
    name: "Bowling",
    category: "Sports",
    year: 2011,
    img: "./images/bowling.png",
    desc: `The summer before leaving for college my friends and I knew we had to spend as much time together as possible. We spend most of that time at our local bowling alley and we all gained a love for the game.`
  },
  {
    id: 5,
    name: "Clothing",
    category: "Fashion",
    year: 2014,
    img: "./images/Kith.jpg",
    desc: `The way I dressed was always important to me but it wasn't until I had my first job that I was really able to go out build a wardrobe that I liked and was unique to me. Whether it be from hypebeast brands such as Supreme or KITH or quality essential brands like John Elliott or FOG Essentials, each clothing piece I own has some sentimental value.`,
  },
  {
    id: 5,
    name: "Powerbuilding",
    category: "Sports",
    year: 2016,
    img: "./images/Weights.jpeg",
    desc: `I started lifting when I stopped playing basketball competitively and I needed a way to stay active. After noticing the results I've been addicted ever since and even built a home gym.`,
  },
  {
    id: 6,
    name: "Call of Duty",
    category: "Video Games",
    year: 2010,
    img: "./images/CallofDuty.jpeg",
    desc: `When I'm not outside being active or coding I spend my free time playing video games with my friends online, Call of Duty being the main one.`,
  },
];

const sectionCenter = document.querySelector('.interests-section-center');
const container = document.querySelector('.interest-btn-container')
  
// load items
window.addEventListener('DOMContentLoaded', function () {
  displayInterests(interests);
  displayInterestsButtons();
});
  
function displayInterests(interests) {
  let displayInterest = interests.map(function (interest) {
    return `<article class="interest">
      <img src=${interest.img} class="photo" alt=${interest.name} />
      <div class="interest-info">
        <interest-header>
          <h4>${interest.name}</h4>
          <h4 class="year">Est. ${interest.year} </h4>
        </interest-header>
        <p class="interest-text">
          ${interest.desc}
        </p>
      </div>
    </article>`
  });
  displayInterest = displayInterest.join("");
  sectionCenter.innerHTML = displayInterest;
}  
  
function displayInterestsButtons() {
  const categories = interests.reduce(
    function(values,interest){
      if(!values.includes(interest.category)) {
        values.push(interest.category);
      }
      return values; 
    },['all']
  );
  const categoryBtns = categories.map(
    function(category) {
      return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
    })
    .join("");
  container.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll('.filter-btn'); 
    // filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const category = e.currentTarget.dataset.id;
      const interestCategory = interests.filter(function (interest) {
        if (interest.category === category) {
          return interest;
        }
      });
      if(category === 'all') {
        displayInterests(interests);
      } else {
        displayInterests(interestCategory);
      }
    });
  });
}  

// ********** Contacts ************
const btns = document.querySelectorAll(".contact-btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const contact = e.currentTarget.parentElement.parentElement;
        contact.classList.toggle("show-text");
    });
});