import React, { useState } from 'react'
import { Nav } from './NavMobile'

export const Burger = () => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <div className={open ? "burger-menu open" : "burger-menu"} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </div>
            <Nav open={open} />
        </>
    )
}
