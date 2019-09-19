const fileSorter = require('./filesorter.js')
const assert = require('assert')

it('should return true', () => {
  assert.equal(true, true)
})

it('should sort values', () => {
  assert.equal(fileSorter.csvFileSearcher([
  '1234','Edison Toole',2,'Farosh',
  '2378','Peter Senn',5,'Naydra',
  '1243','Amanda Wells',3,'Dinraal',
  '2557','Alicia Canada',2,'Farosh',
  '2249','James Spader',6,'Naydra',
  '1243','Amanda Downey',4,'Dinraal',
  '1234','Edison Boole',17,'Farosh',
  '2378','Peter Senn',5,'Farosh'
]), [ [ '2557',
    'Alicia Canada',
    2,
    'Farosh',
    '1234',
    'Edison Boole',
    17,
    'Farosh',
    '2378',
    'Peter Senn',
    5,
    'Farosh' ],
  [ '2249',
    'James Spader',
    6,
    'Naydra',
    '2378',
    'Peter Senn',
    5,
    'Naydra' ],
  [ '1243', 'Amanda Downey', 4, 'Dinraal' ] ])
})

it('should sort by insurance company', () => {
  assert.equal(parenthesis.parenthesis(" "),false)
})
