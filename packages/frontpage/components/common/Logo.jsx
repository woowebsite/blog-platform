import React from "react";
import { Link } from 'react-router-dom'

export const Logo = () => (
    <div className="logo">
        <Link href="/">
            <img src="/assets/images/logo/logo-black.png" alt="Digital Agency"/>
        </Link>
    </div>
)

