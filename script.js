const hello = document.getElementById("hello");
const hellolang = document.getElementById("hellolang");
const greetings = [
    { greeting: "Hello,", lang: "English" },
    { greeting: "Ni Hao,", lang: "Chinese" },
    { greeting: "Namaste,", lang: "Hindi" },
    { greeting: "Hola,", lang: "Spanish" },
    { greeting: "Bonjour,", lang: "French" }
];

let i = 0;

async function rotate() {
    hello.classList.remove("show");
    hellolang.classList.remove("show");
    await new Promise(r => setTimeout(r, 600));

    const { greeting, lang } = greetings[i];
    hello.textContent = greeting;
    hellolang.textContent = lang;
    hello.classList.add("show");
    hellolang.classList.add("show");
    
    i = (i + 1) % greetings.length;
}
setInterval(rotate, 3000);
rotate();

