import o from 'ospec'
import { byName, toObject } from '../src/reduce'


const obj = { name: 'test', x: 1, y: 2 }


o( 'toObject', function () {
  o( Object.entries( obj ).reduce( ...toObject )).deepEquals( obj )
})

o( 'byName', function () {
  o([ obj ].reduce( ...byName )).deepEquals({ test: obj })
})
