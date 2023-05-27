gsap.from(".myself, .projectsHeader, .headerCon ", {delay: .1, duration: 2, x: -400, ease: "power2.inOut", opacity: 0})
gsap.from(".aboutIcon", {delay: 1, duration: 1.5, rotation: 720,  opacity: 0})
gsap.from(".aboutPhoto", {delay: 1, duration: 2, x: -300, ease: "power2.inOut", opacity: 0})
gsap.from(".aboutSkills", {delay: 1, duration: 2, x: 300, ease: "power2.inOut", opacity: 0})
gsap.to(".aboutMeText", {text: "My name is Elaman. I am 29 years old and my country is Kyrgyz Republic. Now I am living in the city Osnabrück, Germany. A year ago I decided to change my profession to the IT software development. For the start as a Frontend developer. I learned HTML5/CCS3, Bootstrap and as a program language JavaScript, GSAP. Current time I am learning React.",
    delay: 3, duration: 9, ease: "power1.in",})
gsap.to(".aboutMeTextDe", {text: "Mein Name ist Elaman Asankadyrov. Ich komme ursprünglich aus Kirgisistan und bin ich 29 Jahre alt. Im 2021 bin ich nach Deutschland umgezogen. Zurzeit wohne ich in der Stadt Osnabrück, Deutschland. Vor einem Jahr habe ich mich entschieden, dass ich ein Softwareentwickler werde. Für den Anfang habe ich in einem Online-Kurs „CanSheCode Bootcamp“ für Frontend Entwickler HTML5/CSS3, Bootstrap und als Programmiersprache JavaScript gelernt. Heutzutage lerne ich eine JavaScript Bibliothek React.",
    delay: 3, duration: 9, ease: "power1.in",})

const back = document.querySelector(".back");
const next = document.querySelector(".next");

const photos = ["one.png", "two.png", "three.png", "four.png", "five.png", "six.png", "seven.png", "eight.png", "nine.png", "ten.png", "eleven.png", "twelve.png"];
const links = ["https://orchid-truth-wildflower.glitch.me/", "https://pleasant-silly-composer.glitch.me/", "https://spark-antique-shoemaker.glitch.me/", "https://cyber-fearless-ketch.glitch.me/", "https://better-twisty-house.glitch.me/", "https://neon-radical-money.glitch.me/", "https://pushy-exuberant-navy.glitch.me/", "https://lake-opposite-neptune.glitch.me/", "https://western-natural-drum.glitch.me/", "https://concrete-wobbly-change.glitch.me/", "https://abrasive-onyx-gear.glitch.me/", "https://flossy-green-bactrosaurus.glitch.me/"];


let i = 0;

next.addEventListener("click", () => {
    i++;
    if (i > photos.length - 1) {
        i = 0;
    };
    document.querySelector(".picture").src = photos[i];
    document.querySelector(".viewButtonLink").href = links[i];
});

back.addEventListener("click", () => {
    i--;
    if (i < 0) {
        i = photos.length -1;
    };
    document.querySelector(".picture").src = photos[i];
    document.querySelector(".viewButtonLink").href = links[i];
});


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelector(".navLinks").forEach(n => n.addEventListener("click",() =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));





