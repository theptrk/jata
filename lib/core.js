function foldValue(value, starting, fn) {
  return value === undefined ? starting : fn(value)
}

function counter(list) {
  if (typeof list === 'string') {
    list = list.split('')
  }
  return list.reduce((acc, val) => {
    acc[val] = foldValue(acc[val], 1, (x) => x + 1)
    return acc
  }, {})
}

module.exports.counter = counter
