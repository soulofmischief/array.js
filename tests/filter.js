import o from 'ospec'
import { a0, a1 } from './_var'
import { filter } from '../src'


const { exists } = filter


o( 'exists', function () {
  o( a0.filter( exists )).deepEquals( a0.slice( 1 ))
  o( a1.concat('').filter( exists )).deepEquals( a1 )
  o( [ true, false ].filter( exists )).deepEquals([true])
  o( [ undefined ].filter( exists )).deepEquals([])
})
