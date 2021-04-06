import o from 'ospec'
import { filter } from '../src'


const
  a0 = [ 0, 1, 2 ],
  a1 = [ 1, 2, 3 ],
  { exists } = filter


o( 'exists', function () {
  o( a0.filter( exists )).deepEquals( a0.slice( 1 ))
  o( a1.concat('').filter( exists )).deepEquals( a1 )
  o( [ true, false ].filter( exists )).deepEquals([true])
  o( [ undefined ].filter( exists )).deepEquals([])
})
