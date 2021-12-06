

/** Pull a an item from an array and return it. */
export function pull( arr, item ) {
  const index = Array.prototype.indexOf.call( arr, item )
  if ( index > -1 )
    return Array.prototype.splice.call( arr, index, 1 )[0]
  else return null
}
