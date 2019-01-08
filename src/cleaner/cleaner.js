export const houseCleaner = (data) => {
  return data.map(item => ({
    name: item.name, 
    founded: item.founded, 
    seats: item.seats, 
    titles: item.titles, 
    coatOfArms: item.coatOfArms, 
    ancestralWeapons: item.ancestralWeapons, 
    words: item.words
  }))
}