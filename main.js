const btn1 = document.getElementById("btn1");

function handleClick() {
  window.open("https://google.com");
}

// handleClick();
btn1.addEventListener("dblclick", handleClick);

const person = {
  name: "Ehsan",
  location: "Maidstone",
  age: 28,
  pet: ["doggo", "kimby", "shangool", "happe"],
};

person.pet.push("pixie");

// person.pet.forEach((petName) => console.log(petName));

const ul1 = document.getElementById("ul1");

person.pet.forEach((element) => (ul1.innerHTML += `<li>${element}</li>`));
