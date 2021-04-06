import o from 'ospec'
import { enumerateValue } from '../src'


o( 'enumerateValue', () => {
  o( enumerateValue( 3, 'test' )).deepEquals([ 'test', 'test', 'test' ])
})
