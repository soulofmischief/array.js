// @flow strict


export function splitRecursive( array: *[], qualifier: string ) {
  return [ ...array ].map( x => Array.isArray( x )
    ? splitRecursive( x, qualifier )
    : typeof x === 'string'
      ? x.split( qualifier )
      : x
  ).flat()
}

/*export function splitRecursive( array: *[], qualifier: string ) {
  const a = [ ...array ]

  a.forEach(( x, i ) => {
    if ( Array.isArray( x ))
      a[i] = splitRecursive( x, qualifier )
    else if ( typeof x === 'string' )
      a[i] = x.split( qualifier )
  })

  return a
}*/
