import React from 'react'
import {Link} from 'react-router-dom'

export default ({ children, to, onClick }) => (
    <Link onClick={onClick} to={to}>{children}</Link>
)