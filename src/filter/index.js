// @flow strict


export function exists( x: * ) { return !!x }

export function unique( x, i, self ) { return self.indexOf( x ) === i }
