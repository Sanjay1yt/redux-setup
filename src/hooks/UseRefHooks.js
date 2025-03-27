import React, { useRef } from 'react'

export const UseRefHooks = () => {
    const inputRef = useRef(null)
    const focusInput = () => {
        inputRef.current.focus()
    }
    return (
        <div> <input type="text" ref={inputRef}></input>
            <button onClick={focusInput}>Focus input</button></div>
    )
}
