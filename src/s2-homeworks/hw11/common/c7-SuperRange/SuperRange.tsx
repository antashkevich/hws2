import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                maxWidth: '300px'
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
            value={props.value}
        />
    )
}

export default SuperRange
