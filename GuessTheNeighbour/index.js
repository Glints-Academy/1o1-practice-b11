// Level 1
const data = require('./initialData')

const main = (data, color) => {
  // Code here
  return data[data.findIndex(item => item.houseColor === color) + 1].name
}




// Don't change code below

const test = (func, result) => {
  return console.log(func === result)
}

test(main(data, 'Green'), 'Phill')
test(main(data, 'Blue'), 'Robert')
test(main(data, 'Purple'), 'Budi')
test(main(data, 'Grey'), 'Dedi')
test(main(data, 'Navy'), 'Andika')