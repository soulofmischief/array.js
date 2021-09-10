// @flow strict
import { clone } from 'lodash'


/**
 * Pure sort implementation
 *
 * Ex:
 *  sort( arr, cb )
 *  sort.call( arr, cb )
 *  sort( sort.call( sort.call( arr, cb ), cb ), cb )
 *  arr::sort::sort !!! Experimental syntax !!!
 *
 * @this {?Array} Array to sort
 */
export function sort( cb: ( ...args: * ) => *, arr?: *[]): *[] {
  if ( arguments.length > 1 ) {
    return clone( arr ).sort( cb )
  } else {
    return clone( this ).sort( cb )
  }
}
