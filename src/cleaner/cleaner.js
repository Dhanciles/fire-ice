export const houseCleaner = (data) => {
  return data.map(item => ({
    name: item.name, 
    founded: item.founded, 
    seats: item.seats.join(), 
    titles: item.titles.join(), 
    coatOfArms: item.coatOfArms, 
    ancestralWeapons: item.ancestralWeapons.join(), 
    words: item.words
  }))
}



