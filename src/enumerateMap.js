// @flow strict


/**
 * Enumerate an array of size n. Returns [0,1..n] by default,
 * but can be passed an optional mapping function.
 * @param {number} n Size of array.
 * @param {?function} map Mapping function.
 */
export function enumerateMap(
  n?: number = 0,
  map?: ( i?: number ) => ?* = i => i
) {
  const a = []

  for ( let i = 0; i < n; i++ ) {
    a.push( map( i ))
  }

  return a
}
