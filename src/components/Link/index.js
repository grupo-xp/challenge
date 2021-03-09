import React from 'react'
import {Link} from 'react-router-dom'

export default ({ children, to }) => (
    <Link to={to}>{children}</Link>
)