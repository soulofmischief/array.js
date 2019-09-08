import o from 'ospec'
import { enumerate, enumerateMap, enumerateOne } from '../src'


const a0 = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
const a1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


o.spec( 'enumerate', function () {
  o( 'empty', function () {
    o( enumerate()).deepEquals([])
  })

  o( 'parameter', function () {
    o( enumerate( 10 )).deepEquals( a0 )
  })
})

o.spec( 'enumerateOne', function () {
  o( 'empty', function () {
    o( enumerateOne()).deepEquals([])
  })

  o( 'parameter', function () {
    o( enumerateOne( 10 )).deepEquals( a1 )
  })
})


o.spec( 'enumerateMap', function () {
  o( 'empty', function () {
    o( enumerateMap()).deepEquals([])
  })

  o( 'default map', function () {
    o( enumerateMap( 10 )).deepEquals( a0 )
  })

  o( 'custom map', function () {
    o( enumerateMap( 10, i  => ++i )).deepEquals( a1 )
  })
})
