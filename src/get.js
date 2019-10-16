// @flow strict


/**
 * Get an element from an array.
 */
export function get<A>( arg1: *[] | A, arg2?: A ) {
  // Passed array.
  if ( arg2 ) return arg1[ arg1.indexOf( arg2 )]
  // Bound array.
  else return this[ this.indexOf( arg1 )]
}
