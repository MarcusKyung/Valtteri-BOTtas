function getBottasOpinion(query) {
  const likedQueries = ["PIZZA", "CYCLING", "RACING", "COFFEE", "THE OFFSPRING", "PUNK ROCK", "ALFA ROMEO", "THE C43", "MIKA HAKKIEN", "THE WOLF OF WALL STREET"];
  const dislikedQueries = ["LOSING", "RED BULL", "DNFs"];
  if (likedQueries.includes(query)) {
    return "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMG53ZHN0MTUwa2trOWZwZzhzMncybzNwbjNlOGo2c2d4Y3NqamdsbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6iWedW7q9zHBEYg0RZ/giphy.gif";
  } else if (dislikedQueries.includes(query)) {
    return "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExamdmMjJlMnNyMnViOGhqbXF4bTU1ZDhhNzJqY3N3cGw5N2lvcDZubCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aba0wyhsW8NtxLa6BZ/giphy.gif";
  } else {
    return "https://media2.giphy.com/media/LnENHEthbf8ArUIbv6/giphy.gif?cid=ecf05e47x4jd1ll8btgaupjbkdqfxfra6t62sadpd0gbi9ut&ep=v1_gifs_search&rid=giphy.gif&ct=g";
  }
}

module.exports = {
  getBottasOpinion,
};
