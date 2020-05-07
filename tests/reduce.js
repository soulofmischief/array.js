import o from 'ospec'
import { byName, toObject } from '../src/reduce'


const
  obj1 = { name: 'test1', a: 1, b: 2 },
  obj2 = { name: 'test2', c: 4, d: 4 }


o( 'toObject', () => {
  o( Object.entries( obj1 ).reduce( ...toObject())).deepEquals( obj1 )
  o( Object.entries( obj2 ).reduce( ...toObject())).deepEquals( obj2 )
})

o( 'byName', () => {
  o([ obj1 ].reduce( ...byName())).deepEquals({[ obj1.name ]: obj1 })
  o([ obj2 ].reduce( ...byName())).deepEquals({[ obj2.name ]: obj2 })
})
