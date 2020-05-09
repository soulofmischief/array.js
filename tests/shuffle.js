import o from 'ospec'
import { shuffle } from '../src'

const
  a1 = [ 0, 1 ],
  a2 = [ 1, 0 ]


o( 'shuffle', function () {
  o( shuffle( a1 )).deepEquals( a2 )
})
