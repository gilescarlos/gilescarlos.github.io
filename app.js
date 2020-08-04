

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
        "https://github.com/gilescarlos/gilescarlos.github.io/tree/master/images/Gymshark.png",
      text:
        "Created a script that automates the checkout process on the Gymshark website using the Selenium package for Python which is an open-source web-based automation tool.",
    },
    {
      id: 2,
      name: "Solar Powered Portable Charger",
      language: "Python",
      img:
        "https://github.com/gilescarlos/gilescarlos.github.io/tree/master/images/RaspberryPi.png",
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
const brands = [
  {
    id: 1,
    name: "John Elliott",
    category: "Basics",
    year: 2012,
    img: "./images/JohnElliott.jpg",
    desc: `John Elliott was formed in the spring of 2012 as a concept with my best friend and business partner, Aaron Lavee. We delivered our first season in the spring of 2013. It has been a lifelong passion project. The brand is the result of me solving the problems I had with my own wardrobe. I started with basic categories and focused on creating functional yet modern fits with unique fabrics. We pay attention to details that matter. Our french terry is custom knit in the United States to our specifications. Our zippers are sourced from RIRI in Switzerland. We travel to Japan to source and develop fabrics. We are at our production facility in Los Angeles every day overseeing the process.`
  },
  {
    id: 2,
    name: "Essentials, FOG",
    category: "Basics",
    year: 2013,
    img: "./images/Essentials.jpg",
    desc: `Lorenzo presents a line of classic jersey tees, polos, pull-over hoodies, sweatpants, and half-zip polar fleeces in relaxed, minimal silhouettes and monochromatic palette for spring 2020. ​essentials introduces a new category of knitwear sweaters, as well as new style variations like the mock neck pull-over in subdued, earthy tones ranging from ​buttercream to oatmeal heather, gray flannel, and dark slate​.`
  },
  {
    id: 3,
    name: "Supreme",
    category: "Statement",
    year: 1994,
    img: "./images/Supreme.jpg",
    desc: `In April 1994, Supreme opened its doors on Lafayette Street in downtown Manhattan and became the home of New York City skate culture. At its core was a group of neighborhood kids, New York skaters, and local artists who became the store’s staff, crew, and customers. Over 25 years, Supreme has expanded from its New York City origins into a global community; working with generations of artists, photographers, designers, musicians, filmmakers, and writers who defied conventions and contributed to its unique identity and attitude.`
  },
  {
    id: 4,
    name: "KITH",
    category: "Statement",
    year: 2011,
    img: "./images/Kith.jpg",
    desc: `KITH was founded by Ronnie Fieg, a prominent figure in the footwear industry, who has over twenty years of hands-on experience. Born and raised in Queens, Fieg has been involved with footwear since becoming a stock boy at New York-based franchise David Z. at age 12. With steadfast perseverance, he methodically rose through the ranks from floor salesman to assistant manager to eventually becoming head buyer. Conceptualizing KITH as an extension of himself, Fieg seeks to shift the current landscape of fashion, while operating under a personal philosophy of giving the consumer more than what they pay for.`
  },
  {
    id: 5,
    name: "BAPE",
    category: "Statement",
    year: 1993,
    img: "./images/Bape.jpg",
    desc: `Situated in the heart of Tokyo, one of the leading fashion hubs of the world, Nowhere Co., Ltd. strives to introduce Japanese fashion culture to the world. Since the brand's establishment in 1993, it has remained as a symbol of street fashion for 27 years. Thus far, it has produced iconic design items, original patterns and character such as "APE HEAD", "BAPE® CAMO", "BAPE STA™", "SHARK HOODIE" and "BABY MILO®" etc. It has now expanded into Mens', Ladies and Kids line and is carried throughout stores in Japan and also sold in US, UK, China and various Asian countries. It is well known globally and highly supported by a wide range of fashionistas.`,
  },
  {
    id: 6,
    name: "BBC",
    category: "Statement",
    year: 2003,
    img: "./images/BBC.jpg",
    desc: `In 2003, Pharrell Williams partnered with fashion designer and A Bathing Ape creator, NIGO, in Japan, where they teamed up with Japanese graphic designer, Sk8thing, to create the now globally recognized fashion brand, Billionaire Boys Club which blends streetwear and luxury. Its motto is: "Wealth is of the heart and mind, not the pocket."`,
  },
  {
    id: 7,
    name: "CDG Play",
    category: "Basics",
    year: 2003,
    img: "./images/CDG.jpg",
    desc: `COMME des GARÇONS, meaning “like boys” in French, is a Japanese fashion label founded by Rei Kawakubo. Renowned for its avant garde aesthetic and unconventional silhouettes, Kawakubo transformed the brand into a successful fashion label. CDG is headquartered in Tokyo's Aoyama district, with a strong worldwide presence.`,
  },
  {
    id: 8,
    name: "All Saints",
    category: "Basics",
    year: 1994,
    img: "./images/AllSaints.png",
    desc: `Established in 1994, AllSaints is a premium British fashion house, best known for its iconic biker jackets, creating clothing and accessories for men and women. AllSaints operates within a culture of innovation and design with an independent spirit, from its East London atelier to the in-house design and construction of AllSaints'​ digital and physical stores.`,
  },
  {
    id: 9,
    name: "Palace",
    category: "Statement",
    year: 2009,
    img: "./images/Palace.png",
    desc: `Palace Skateboards (or Palace) is a London-based skateboard shop and clothing brand established in 2009. The brand was primarily heavily worn by founder Levent Tanju and his skate team, Palace Wayward Boys Choir. Palace focuses on skate wear with heavy 1990s and pop culture influences alongside VHS style clothing advertisements and skateboard videos of their skate team. `,
  },
  {
    id: 10, 
    name: "Pangaia",
    category: "Basics",
    year: "N/A",
    img: "./images/Pangaia.jpg",
    desc: `PANGAIA is a direct-to-consumer materials science company bringing breakthrough textile innovations and patents into the world through everyday lifestyle products. Every technology we work with aims to solve an environmental problem of the fashion/apparel & nature industry. We hope to drive these solutions further by making technologies and materials available to companies across different industries. By introducing these innovations, we design materials, products and experiences for everyday and everyone. `,
  },
];

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container')
  
// load items
window.addEventListener('DOMContentLoaded', function () {
  displayBrandItems(brands);
  displayBrandButtons();
});
  
function displayBrandItems(brands) {
  let displayBrand = brands.map(function (brand) {
    return `<article class="brand">
      <img src=${brand.img} class="photo" alt=${brand.name} />
      <div class="brand-info">
        <header>
          <h4>${brand.name}</h4>
          <h4 class="year">Est. ${brand.year} </h4>
        </header>
        <p class="brand-text">
          ${brand.desc}
        </p>
      </div>
    </article>`
  });
  displayBrand = displayBrand.join("");
  sectionCenter.innerHTML = displayBrand;
}  
  
function displayBrandButtons() {
  const categories = brands.reduce(
    function(values,brand){
      if(!values.includes(brand.category)) {
        values.push(brand.category);
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
      const brandCategory = brands.filter(function (brand) {
        if (brand.category === category) {
          return brand;
        }
      });
      if(category === 'all') {
        displayBrandItems(brands);
      } else {
        displayBrandItems(brandCategory);
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