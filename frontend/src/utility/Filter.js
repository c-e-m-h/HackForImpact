export default function filter(type, cats, value = true) {
  const filterCats = [];
  for (let i = 0; i < cats.length; i++) {
    if (type in cats[i].attributes && cats[i].attributes[type] == value) {
      filterCats.push(cats[i]);
    }
  }

  return filterCats;
}
