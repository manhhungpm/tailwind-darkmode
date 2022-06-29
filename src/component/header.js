import PropTypes from 'prop-types'
import React from 'react'
import { Toggle } from './toggle'

const Header = ({ siteTitle }) => (
    <header className="bg-secondary px-10">
        <div className="container max-w-screen-lg mx-auto py-6 flex justify-between">
            <h1 className="text-accent">
                {siteTitle}
            </h1>
            <Toggle />
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header