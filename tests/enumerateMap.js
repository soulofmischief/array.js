import o from 'ospec'
import { enumerate, enumerateMap, enumerateValue } from '../src'


const
  a0 = [ 0, 1, 2 ],
  a1 = [ 1, 2, 3 ]

o.spec( 'enumerateMap', function () {
  o( 'empty', function () {
    o( enumerateMap()).deepEquals([])
  })

  o( 'default map', function () {
    o( enumerateMap( 3 )).deepEquals( a0 )
  })

  o( 'custom map', function () {
    o( enumerateMap( 3, i  => ++i )).deepEquals( a1 )
  })
})
