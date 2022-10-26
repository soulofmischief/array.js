
/**
 * Interleave two arrays. The length of the returned array matches the length
 * of the first array.
 *
 * @param {Array} a The first array.
 * @param {Array} b The second array.
 *
 * @return {Array} The interleaved array.
 */
export function zip( a, b ) {
  if ( a.length !== b.length )
    throw new Error( 'Array lengths do not match.' );

  return a.flatMap(( k, i ) => [ k, b[ i ]])
}
