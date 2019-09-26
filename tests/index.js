import o from 'ospec'
import { a0, a1 } from './_var'
import { enumerate, enumerateMap, enumerateOne } from '../src'

import './filter'


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
