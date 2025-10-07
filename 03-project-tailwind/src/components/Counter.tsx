import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter';
import { StyledButton } from './StyledButton';

export const Counter = () => {
    const { count, increaseBy } = useCounter()
    // las llaves se llaman Reestruturacion de objetos

    return (
        <div>

            <h3>
                Counter
                <small>
                    {" " + count}
                </small></h3>

            <div className='flex gap-4'>
                <StyledButton label={"+1"} color="bg-red-500" handleClick={()=>increaseBy(+1)}></StyledButton>
                <StyledButton label={"-1"} color="bg-green-500" handleClick={()=>increaseBy(-1)}></StyledButton>
            </div>
        </div>
    )
}