const siteContent = {
    nav: {
        'nav-item-1': 'Services',
        'nav-item-2': 'Product',
        'nav-item-3': 'Vision',
        'nav-item-4': 'Features',
        'nav-item-5': 'About',
        'nav-item-6': 'Contact',
        'img-src': 'img/logo.png',
    },
    cta: {
        h1: 'DOM Is Awesome',
        button: 'Get Started',
        'img-src': 'img/header-img.png',
    },
    'main-content': {
        'features-h4': 'Features',
        'features-content': 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'about-h4': 'About',
        'about-content': 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'middle-img-src': 'img/mid-page.jpg',
        'services-h4': 'Services',
        'services-content': 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'product-h4': 'Product',
        'product-content': 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'vision-h4': 'Vision',
        'vision-content': 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    },
    contact: {
        'contact-h4': 'Contact',
        address: '123 Way 456 Street Somewhere, USA',
        phone: '1 (888) 888-8888',
        email: 'sales@greatidea.io',
    },
    footer: {
        copyright: 'Copyright Great Idea! 2020',
    },
};

// write your code here

// const menu = document.querySelector('nav');
// menu.setAttribute('id', 'nav-item-1');
// console.log('menu', menu);
//siteContent.mainContent['features-h4'];

const con = document.getElementsByClassName('container');
console.log(con);
const navigation = document.querySelector('nav > a:nth-child(1)');
navigation.classList.add('nav-item-1');
navigation.textContent = "Services";

const navigation2 = document.querySelector('nav > a:nth-child(2)');
navigation2.classList.add('nav-item-2');
navigation2.textContent = "Product";


const navigation3 = document.querySelector('nav > a:nth-child(3)');
navigation3.classList.add('nav-item-3');
navigation3.textContent = "Vision";


const navigation4 = document.querySelector('nav > a:nth-child(4)');
navigation4.classList.add('nav-item-4');
navigation4.textContent = "Features";

const navigation5 = document.querySelector('nav > a:nth-child(5)');
navigation5.classList.add('nav-item-5');
navigation5.textContent = "About";

const navigation6 = document.querySelector('nav > a:nth-child(6)');
navigation6.classList.add('nav-item-6');
navigation6.textContent = "Contact";


var image = document.getElementById("logo-img");
image.setAttribute("src", "img/logo.png")


const mainpage = document.querySelector('section.cta > div >h1');
mainpage.textContent = "DOM Is Awesome";

const btn = document.querySelector('section.cta > div > button');
btn.textContent = "Get Started";

const shuffle_img = document.getElementById('cta-img');
shuffle_img.setAttribute('src', 'img/header-img.png');

const content = document.querySelector('div:nth-child(1) > h4');
content.textContent = 'Features';

const par = document.querySelector('div:nth-child(1) > p');
par.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';


const title = document.querySelector('div:nth-child(2) > h4');
title.textContent = 'About';


const par2 = document.querySelector(' div:nth-child(2) > p');
par2.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';


const middle = document.getElementById('middle-img');
middle.setAttribute('src', 'img/mid-page.jpg');

const Services_title = document.querySelector('div.bottom-content > div:nth-child(1) > h4');
Services_title.textContent = 'Services';

const Services_content = document.querySelector(' div.bottom-content > div:nth-child(1) > p');
Services_content.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const product_title = document.querySelector('div.bottom-content > div:nth-child(2) > h4');
product_title.textContent = 'Product';

const product_content = document.querySelector('div.bottom-content > div:nth-child(2) > p');
product_content.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const vision_title = document.querySelector('div.bottom-content > div:nth-child(3) > h4');
vision_title.textContent = 'Vision';

const vision_content = document.querySelector('div.bottom-content > div:nth-child(3) > p');
vision_content.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const contact_title = document.querySelector('section.contact > h4');
contact_title.textContent = 'Contact';

const contact_address = document.querySelector('section.contact > p:nth-child(2)');
contact_address.textContent = '123 Way 456 Street Somewhere, USA';

const contact_phone = document.querySelector('section.contact > p:nth-child(3)');
contact_phone.textContent = '1 (888) 888-8888';

const contact_email = document.querySelector('section.contact > p:nth-child(4)');
contact_email.textContent = '1 (888) 888-8888';

const footer_copy = document.querySelector(' footer > p');
footer_copy.textContent = 'Copyright Great Idea! 2020';