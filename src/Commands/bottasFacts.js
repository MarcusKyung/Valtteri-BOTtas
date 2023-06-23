function getBottasFact() {
  let randomNumber = getRandomNumber();
  console.log(randomNumber)
  if (randomNumber === 1) {
    return "My car number is 77. When asked why I chose it I said \"Its pretty simple I liked seven, so I thought seven-seven would be good. And actually seven was already taken by Kimi [Räikkönen]. So then I just thought double seven would be good, so go for it.\"";
  } else if (randomNumber === 2) {
    return "I was born in Finland but currently reside in Monaco."
  } else if (randomNumber === 3) {
    return "I served in the Finnish military and earned the rank of Lance Corporal."
  } else if (randomNumber === 4) {
    return "Prior to racing with Alfa Romeo, I raced for Mercedes and Williams."
  } else if (randomNumber === 5) {
    return "I have 10 race wins, 67 podiums, and 20 pole positions."
  } else if (randomNumber === 6) {
    return "I am a punk rock fan and my favorite band is The Offspring."
  } else if (randomNumber === 7) {
    return "I have an amazing car collection including a 1992 Ferrari F40, a Mclaren 675LT, a Mercedes AMG GT, and a Mercedes Benz C63 AMG."
  } else if (randomNumber === 8) {
    return "I have several business ventures outside of racing including a gluten-free pizzeria on wheels, a gin company, and cycling sponsorships."
  } else if (randomNumber === 9) {
    return "I enjoy making homemade pizza in my woodfired pizza oven at home."
  } else if (randomNumber === 10) {
    return "My racing hero is Mika Hakkinen."
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

module.exports = {
  getBottasFact,
  getRandomNumber,
};
