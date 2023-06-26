function checkDriverBirthday(formattedDate) {
  if (formattedDate === "01-07") {
    return "Happy Birthday Lewis Hamilton!";
  } else if (formattedDate === "01-26") {
    return "Happy Birthday Sergio Perez!";
  } else if (formattedDate === "02-06") {
    return "Happy Birthday Nyck de Vries!";
  } else if (formattedDate === "02-07") {
    return "Happy Birthday Pierre Gasly!";
  } else if (formattedDate === "02-15") {
    return "Happy Birthday George Russell!";
  } else if (formattedDate === "03-23") {
    return "Happy Birthday Alex Albon!";
  } else if (formattedDate === "04-06") {
    return "Happy Birthday Oscar Piastri!";
  } else if (formattedDate === "05-11") {
    return "Happy Birthday Yuki Tsunoda!";
  } else if (formattedDate === "05-30") { 
    return "Happy Birthday Zhou Guanyu!";
  } else if (formattedDate === "07-29") {
    return "Happy Birthday Fernando Alonso!";
  } else if (formattedDate === "08-19") { 
    return "Happy Birthday Nico Hulkenberg!";
  } else if (formattedDate === "08-28") { 
    return "Happy Birthday Valtteri Bottas!";
  } else if (formattedDate === "09-01") {
    return "Happy Birthday Carlos Sainz!";
  } else if (formattedDate === "09-17") {
    return "Happy Birthday Esteban Ocon!";
  } else if (formattedDate === "09-30") {
    return "Happy Birthday Max Verstappen!";
  } else if (formattedDate === "10-05") { 
    return "Happy Birthday Kevin Magnussen!";
  } else if (formattedDate === "10-16") {  
    return "Happy Birthday Charles Leclerc!";
  } else if (formattedDate === "10-29") { 
    return "Happy Birthday Lance Stroll!";
  } else if (formattedDate === "11-13") { 
    return "Happy Birthday Lando Norris!";
  } else if (formattedDate === "12-31") {
    return "Happy Birthday Logan Sargeant!";
  } else {
    return;
  }
}

module.exports = checkDriverBirthday;
