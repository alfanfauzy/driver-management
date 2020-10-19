import React from 'react'

import { IoIosHome, IoMdCalendar, IoMdPersonAdd } from "react-icons/io";

export const NavWebsite = () => {
    return (
        <>
            <ul className="website-menu">
                <li><IoIosHome /> Beranda</li>
                <li className="active"><IoMdPersonAdd /> Driver Management</li>
                <li><IoMdCalendar />Pickup</li>
            </ul>
        </>
    )
}
