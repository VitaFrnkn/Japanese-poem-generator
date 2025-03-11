function displayPoem(response){
       
    new Typewriter('#poem', {
      strings:response.data.answer,
      autoStart: true,
      delay: 5,
      cursor: "",
    });
}

function generatePoem(event){
    event.preventDefault();

    let inputInstructions = document.querySelector("#input-instructions");
    let apiKey = "oe1f0572f4bt753a71ffbc4045676795";
    let prompt = `Generate a poem in Japanese about ${inputInstructions}. There is no title. Separate each line using <br />. Please follow the instructions for every entry and be as accurate as possible. Write the translation in english. Separate each line using <br />. Always generate in the same format`;
    let context = "You are specialised in short romantic Japanese poetry"
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`
let poemElement=document.querySelector("#poem");

poemElement.classList.remove("hidden");
poemElement.innerHTML = `<div class="generating"> Generating a Japanese poem </div>`;

    axios.get(apiUrl).then(displayPoem);
}

let poemForm = document.querySelector("#form");
poemForm.addEventListener("submit", generatePoem);