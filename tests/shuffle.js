import o from 'ospec'
import { shuffleUnique } from '../src'


const
  a1 = [ 0, 1 ],
  a2 = [ 1, 0 ]


// Using shuffle directly can cause a false negative if the array
// doesn't change order.
// I'll look into this one day. Maybe.
o( 'shuffle', function () {
  o( shuffleUnique( a1 )).deepEquals( a2 )
})
