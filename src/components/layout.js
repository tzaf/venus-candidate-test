import * as React from "react"
import { Link } from "gatsby"

const Layout = ({title, children}) => (
  <div className="global-wrapper">
    <header className="global-header">
      <Link to="/">
        <h1 className="main-heading">
          <img
            alt="home"
            className="logo"
            src="https://www.taboola.com/wp-content/uploads/2020/05/svg6.svg"
          />
          <span>{title}</span>
        </h1>
      </Link>
    </header>
    <main className="main">{children}</main>
    <footer>
      <span>{`© ${new Date().getFullYear()}, Built with `}</span>
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
  </div>
);

export default Layout
