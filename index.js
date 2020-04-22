const generateColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  color += "50";
  return color;
};

const addToList = () => {
  let userInput = document.querySelector("#userText").value;
  console.log(userInput.length);
  if (userInput.length > 0) {
    console.log(userInput);
    let newLi = document.createElement("li");
    newLi.style.color = `${generateColor()}`;
    let text = document.createTextNode(userInput);
    newLi.appendChild(text);
    document.querySelector(".result").appendChild(newLi);
    document.querySelector("#userText").value = "";
  }
};
