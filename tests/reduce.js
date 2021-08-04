import o from 'ospec'
import {
  byID,
  byName,
  byProp,
  toObject,
  toObjectMultiple
} from '../src/reduce'


const
  obj1 = { name: 'test1', id: 't1', a: 1, b: 2 },
  obj2 = { name: 'test2', id: 't2', c: 4, d: 4 },
  // Functions should handle empty object/array by returning an empty object.
  obj3 = {},
  multipleEntries = [
    [ 'test1', 'v1' ],
    [ 'test2', 'v1' ],
    [ 'test2', 'v2' ],
    [ 'test3', 'v1' ],
    [ 'test3', 'v2' ],
    [ 'test3', 'v3' ],
  ],
  multipleEntriesObject = {
    test1: 'v1',
    test2: [ 'v1', 'v2' ],
    test3: [ 'v1', 'v2', 'v3' ]
  },
  prop = 'id'

o( 'byName', () => {
  o([ obj1 ].reduce( ...byName())).deepEquals({[ obj1.name ]: obj1 })
  o([ obj2 ].reduce( ...byName())).deepEquals({[ obj2.name ]: obj2 })
  o( Object.entries( obj3 ).reduce( ...toObject())).deepEquals( obj3 )
})
o( 'byID', () => {
  o([ obj1 ].reduce( ...byID())).deepEquals({[ obj1.id ]: obj1 })
  o([ obj2 ].reduce( ...byID())).deepEquals({[ obj2.id ]: obj2 })
  o( Object.entries( obj3 ).reduce( ...toObject())).deepEquals( obj3 )
})

o( 'byProp', () => {
  o([ obj1 ].reduce( ...byProp( prop ))).deepEquals({[ obj1[ prop ]]: obj1 })
  o([ obj2 ].reduce( ...byProp( prop ))).deepEquals({[ obj2[ prop ]]: obj2 })
  o( Object.entries( obj3 ).reduce( ...toObject())).deepEquals( obj3 )
})

o( 'toObject', () => {
  o( Object.entries( obj1 ).reduce( ...toObject())).deepEquals( obj1 )
  o( Object.entries( obj2 ).reduce( ...toObject())).deepEquals( obj2 )
  o( Object.entries( obj3 ).reduce( ...toObject())).deepEquals( obj3 )

  o( multipleEntries.reduce( ...toObject()))
    .notDeepEquals( multipleEntriesObject )
})

o( 'toObjectMultiple', () => {
  o( Object.entries( obj1 ).reduce( ...toObjectMultiple())).deepEquals( obj1 )
  o( Object.entries( obj2 ).reduce( ...toObjectMultiple())).deepEquals( obj2 )
  o( Object.entries( obj3 ).reduce( ...toObjectMultiple())).deepEquals( obj3 )

  o( multipleEntries.reduce( ...toObjectMultiple()))
    .deepEquals( multipleEntriesObject )
})
