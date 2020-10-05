// @flow strict


/**
 * Enumerate an array of size n filled with a given value.
 * @param {number} n Size of array.
 * @param {*} value Value to enumerate.
 * @return {array} Enumerated array.
 */
export function enumerateValue( n: number = 0, value: * ) {
  const a = []

  for ( let i = 0; i < n; i++ ) {
    a.push( value )
  }

  return a
}
