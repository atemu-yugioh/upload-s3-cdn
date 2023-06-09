const _ = require('lodash')
const obj = {
  name: {
    first: 'Will',
    last: 'Riker'
  },
  rank: 'Commander',
  ships: ['USS Enterprise', 'USS Pegasus'],
  age: 29
}
const newObj = _.omit(obj, ['name.first', 'age', 'ships.1'])

console.log(newObj)
