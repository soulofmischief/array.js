import o from 'ospec'
import { zip } from '../src/index.js'


o.spec( 'zip', () => {
  o( 'input arrays must be the same size', () => {
    o(() => zip(Array(1), Array(2)))
      .throws( 'Array lengths do not match.' )
  })

  o( 'values alternate, starting with a', () => {
    const
      a = [ 1, 2, 3 ],
      b = [ 4, 5, 6 ],
      c = zip( a, b )

    o( c ).deepEquals([ 1, 4, 2, 5, 3, 6 ])
  })
})
