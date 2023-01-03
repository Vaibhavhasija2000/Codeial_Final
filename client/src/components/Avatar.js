import React from 'react'
import { useSelector } from 'react-redux'

const Avatar = ({src, size}) => {
    const { theme } = useSelector(state => state)

    return (
        // <img src={src} alt="avatar" className={size}
        // style={{filter: `${theme ? 'invert(1)' : 'invert(0)'}`}} />
        <i class="fas fa-user-circle" style={{fontSize:'30px'}}></i>
        //<i className="fas fa-user-alt" style={{fontSize:'30px'}}></i>
    )
}

export default Avatar
