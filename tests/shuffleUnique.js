import o from 'ospec'
import { shuffleUnique } from '../src'


const
  a1 = [ 0, 1 ],
  a2 = [ 1, 0 ]


o( 'shuffleUnique', function () {
  o( shuffleUnique( a1 )).deepEquals( a2 )
})
