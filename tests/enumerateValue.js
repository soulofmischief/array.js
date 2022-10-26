import o from 'ospec'
import { enumerateValue } from '../src/index.js'


o( 'enumerateValue', () => {
  o( enumerateValue( 3, 'test' )).deepEquals([ 'test', 'test', 'test' ])
})
