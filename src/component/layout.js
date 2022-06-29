import { ThemeProvider } from "./themeContext"
import Header from "./header";
import PropTypes from 'prop-types'

export const Layout = ({ children }) => {
    return (
        <>
            <ThemeProvider>
                <Header siteTitle='Title Page' />
                <div className="container max-w-screen-lg mx-auto px-10">
                    <main className="mt-4">{children}</main>
                    <footer className="text-secondary">
                        Footer
                    </footer>
                </div>
            </ThemeProvider>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout