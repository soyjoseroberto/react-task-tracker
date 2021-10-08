
// Not needed anymore, just going to comment it out for now
// import React from 'react'
import PropTypes from 'prop-types' // Type impt to use extension to generate this line
import Button from './Button'

const Header = ({title}) => {
    return (
        <header className="header">
            <h1>Task Tracker</h1>
            {/* <h2>{ title }</h2> */}
            <Button color="black" text="Add" />
        </header>
     )
}

Header.defaultProps = {
    title: 'Jose\'s Task tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
