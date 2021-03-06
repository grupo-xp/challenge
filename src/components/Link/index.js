import React from 'react'
import { Link as RouterLink } from "react-router-dom";

export default function Link ({ to, children }) {
    return (
        <RouterLink to={to}>{children}</RouterLink>
    )
}