import o from 'ospec'
import { enumerate, enumerateOne, enumerateValue } from '../src'


const a1 = [ 1, 2, 3 ]

  o.spec( 'enumerateOne', function () {
  o( 'empty', function () {
    o( enumerateOne()).deepEquals([])
  })

  o( 'parameter', function () {
    o( enumerateOne( 3 )).deepEquals( a1 )
  })
})
