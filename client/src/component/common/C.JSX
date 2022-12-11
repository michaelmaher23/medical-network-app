import React from 'react'

function C({options}) {
  return (
 <>{options.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          {item.key}
        </MenuItem>
      ))}</>
  )
}

export default C