const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
//Title//
const getTitle = document.querySelector("title")
//nav section//
const getLink1 = document.querySelector("a")

const getLink2 = getLink1.nextElementSibling
const getLink3 = getLink2.nextElementSibling
const getLink4 = getLink3.nextElementSibling
const getLink5 = getLink4.nextElementSibling
const getLink6 = getLink5.nextElementSibling
getTitle.innerText = "Great Idea"
getLink1.textContent = "Services"
getLink2.textContent = "Product"
getLink3.textContent = "Vision"
getLink4.textContent = "Features"
getLink5.textContent = "About"
getLink6.textContent = "Contact"
logo.src ="img/logo.png"

//cta//
const getCtaText = document.querySelector(".cta-text h1")
getCtaText.textContent = "DOM Is Awesome"

const getCtaButton = document.querySelector(".cta-text button")
getCtaButton.textContent = "Get Started"

const getImg = document.getElementById("cta-img")
getImg.src ="img/header-img.png"

//main section//
const mainTitles = document.querySelectorAll("h4")
mainTitles[0].textContent = "Feature"
mainTitles[1].textContent = "About"
mainTitles[2].textContent = "Services"
mainTitles[3].textContent = "Product"
mainTitles[4].textContent = "Vision"
mainTitles[5].textContent = "Contact"

const midImg = document.getElementById("middle-img")
midImg.src = "img/mid-page-accent.jpg"

const mainPara = document.querySelectorAll("p")
mainPara[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis"
mainPara[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
mainPara[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
mainPara[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
mainPara[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
mainPara[5].textContent = '123 Way 456 Street Somewhere, USA'
mainPara[6].textContent = '1 (888) 888-8888'
mainPara[7].textContent = 'sales@greatidea.io'
mainPara[8].textContent = 'Copyright Great Idea! 2018'

getLink1.style.color = "green"
getLink1.style.fontWeight = 'bold'
getLink2.style.color = 'green'
getLink2.style.fontWeight = 'bold'
getLink3.style.color = 'green'
getLink3.style.fontWeight = "bold"
getLink4.style.color = 'green'
getLink4.style.fontWeight = 'bold'
getLink5.style.color = 'green'
getLink5.style/fontWeight = 'bold'
getLink6.style.color = 'green'
getLink6.style.fontWeight = "bold"

const myBlog = document.createElement('a')
myBlog.textContent = 'Blog'
myBlog.href = "facebook.com"
const nav = document.querySelector("nav")
nav.appendChild(myBlog)

const myShop = document.createElement('a')
myShop.textContent = "Shop"
nav.prepend(myShop)// adds content to the beginning of the object elements//

myBlog.style.color = 'green'
myBlog.style.fontWeight = "bold"
myShop.style.color = 'green'
myShop.style.fontWeight = "bold"