import React from 'react'
import { SketchPicker  } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store';

const ColorPicker = () => {
 // console.log('thi si s a jewel test')
  const snap = useSnapshot(state);
  // console.log(snap.color)

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker  
        color={snap.color}
        disableAlpha
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker