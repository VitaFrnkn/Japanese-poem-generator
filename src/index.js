function generatePoem(event){
    event.preventDefault();

    
    new Typewriter('#poem', {
      strings: 'ひらひらと かぜにまいちる はるのゆめ 🌸',
      autoStart: true,
      delay: 5,
      cursor: "",
    });
}

let poemForm = document.querySelector("#form");
poemForm.addEventListener("submit", generatePoem);