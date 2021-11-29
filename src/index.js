const siteContent = {
  // DO NOT CHANGE THIS OBJECT
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2021",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("project wired!");

// Navbar Anchors
const navbarAnchors = document.querySelectorAll("nav a");
navbarAnchors.forEach((anchor) => (anchor.className = "italic"));
const navbarAnchorsArr = Array.from(navbarAnchors);

const firstAnchor = navbarAnchorsArr[0];
const secondAnchor = navbarAnchorsArr[1];
const thirdAnchor = navbarAnchorsArr[2];
const fourthAnchor = navbarAnchorsArr[3];
const fifthAnchor = navbarAnchorsArr[4];
const sixthAnchor = navbarAnchorsArr[5];

firstAnchor.textContent = siteContent.nav["nav-item-1"];
secondAnchor.textContent = siteContent.nav["nav-item-2"];
thirdAnchor.textContent = siteContent.nav["nav-item-3"];
fourthAnchor.textContent = siteContent.nav["nav-item-4"];
fifthAnchor.textContent = siteContent.nav["nav-item-5"];
sixthAnchor.textContent = siteContent.nav["nav-item-6"];

// Header Img
const headerImg = document.querySelector("#logo-img");
headerImg.src = siteContent.images["logo-img"];

// Section cta
const h1Cta = document.querySelector(".cta-text h1");
const buttonCta = document.querySelector(".cta-text button");
const imgCta = document.querySelector("#cta-img");

h1Cta.textContent = siteContent.cta.h1;
buttonCta.textContent = siteContent.cta.button;
imgCta.src = siteContent.images["cta-img"];

// Section Top Content
const h4Features = document.querySelector(
  ".top-content .text-content:nth-of-type(1) h4"
);
const pFeatures = document.querySelector(
  ".top-content .text-content:nth-of-type(1) p"
);
const h4About = document.querySelector(
  ".top-content .text-content:nth-of-type(2) h4"
);
const pAbout = document.querySelector(
  ".top-content .text-content:nth-of-type(2) p"
);

h4Features.textContent = siteContent["main-content"]["features-h4"];
pFeatures.textContent = siteContent["main-content"]["features-content"];
h4About.textContent = siteContent["main-content"]["about-h4"];
pAbout.textContent = siteContent["main-content"]["about-content"];

// Image Middle
const imgMiddle = document.querySelector("#middle-img");
imgMiddle.src = siteContent.images["accent-img"];

// Section Bottom Content
const h4Services = document.querySelector(
  ".bottom-content .text-content:nth-of-type(1) h4"
);
const pServices = document.querySelector(
  ".bottom-content .text-content:nth-of-type(1) p"
);
const h4Product = document.querySelector(
  ".bottom-content .text-content:nth-of-type(2) h4"
);
const pProduct = document.querySelector(
  ".bottom-content .text-content:nth-of-type(2) p"
);
const h4Vision = document.querySelector(
  ".bottom-content .text-content:nth-of-type(3) h4"
);
const pVision = document.querySelector(
  ".bottom-content .text-content:nth-of-type(3) p"
);

h4Services.textContent = siteContent["main-content"]["services-h4"];
pServices.textContent = siteContent["main-content"]["services-content"];
h4Product.textContent = siteContent["main-content"]["product-h4"];
pProduct.textContent = siteContent["main-content"]["product-content"];
h4Vision.textContent = siteContent["main-content"]["vision-h4"];
pVision.textContent = siteContent["main-content"]["vision-content"];

// Section Contact
const h4Contact = document.querySelector(".contact h4");
const pContactAddress = document.querySelector(".contact p:nth-of-type(1)");
const pContactPhone = document.querySelector(".contact p:nth-of-type(2)");
const pContactEmail = document.querySelector(".contact p:nth-of-type(3)");

h4Contact.textContent = siteContent.contact["contact-h4"];
pContactAddress.textContent = siteContent.contact.address;
pContactPhone.textContent = siteContent.contact.phone;
pContactEmail.textContent = siteContent.contact.email;
