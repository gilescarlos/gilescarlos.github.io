

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
  const language = document.getElementById('job');
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

// Contact Buttons
const btns = document.querySelectorAll(".contact-btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const contact = e.currentTarget.parentElement.parentElement;
        contact.classList.toggle("show-text");
    });
});