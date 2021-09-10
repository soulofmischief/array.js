import { sort } from './sort'


export { sort }

export const sortNumberAscending = ( arr, prop ) =>
  sort(( a, b ) => prop ? a[prop] - b[prop] : a - b, arr )

export const sortNumberDescending  = ( arr, prop ) =>
  sort(( a, b ) => prop ? b[prop] - a[prop] : b - a, arr )


/** TODO: Why isn't this exporting correctly? */
export function byProp( prop, cb1, cb2 ) {
  if ( cb1 && cb2 ) return ( a, b ) => {
    if( cb1( a[ prop ], b[ prop ] )) return -1
    if( cb2( a[ prop ], b[ prop ] )) return 1
    return 0;
  }

  else return ( a, b ) => {
    if( a[ prop ] < b[ prop ] ) return -1
    if( a[ prop ] > b[ prop ] ) return 1
    return 0;
  }
}
