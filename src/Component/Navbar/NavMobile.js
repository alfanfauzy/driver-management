import React from 'react'

import { IoIosHome, IoMdCalendar, IoMdPersonAdd } from "react-icons/io";

export const Nav = ({ open }) => {

    return (
        <>
            <ul className={open ? 'mobile-menu open' : 'mobile-menu'}>
                <li><IoIosHome /> Beranda</li>
                <li className="active"><IoMdPersonAdd /> Driver Management</li>
                <li><IoMdCalendar />Pickup</li>
            </ul>
        </>
    )
}
