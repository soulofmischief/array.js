import o from 'ospec'
import { a0, a1 } from './_var'
import { reduce } from '../src'


const
  { toObject, byName } = reduce,
  obj = { name: 'obj', x: 1, y: 2 }


o( 'toObject', function () {
  o( Object.entries( obj ).reduce( ...toObject )).deepEquals( obj )
})

o( 'byName', function () {
  o([ obj ].reduce( ...byName )).deepEquals({ obj: obj })
})
