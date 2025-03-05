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
    let prompt = `Generate a poem in Japanese about ${inputInstructions}. There is no title. Separate each line using <br />. Please follow the instructions for every entry. Sign it only once at the end, as CyberV and place the signature in between <strong> </strong>`;
    let context = "You are specialised in short romantic Japanese poetry"
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

    axios.get(apiUrl).then(displayPoem);
}

let poemForm = document.querySelector("#form");
poemForm.addEventListener("submit", generatePoem);