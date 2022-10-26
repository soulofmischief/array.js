import o from 'ospec'
import { shuffleUnique } from '../src/index.js'


const
  a1 = [ 0, 1 ],
  a2 = [ 1, 0 ]


o( 'shuffleUnique', function () {
  o( shuffleUnique( a1 )).deepEquals( a2 )
})
