/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Container } from "@material-ui/core"
import { createTheme, ThemeProvider } from "@material-ui/core/styles"

import "./page.css"
import { AppProps } from "../types/types"
import ResponsiveDrawer from "../components/ResponsiveDrawer"

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff8a65",
    },
    secondary: {
      main: "#9ccc65",
    },
  },
})

const Page = ({ children }: AppProps): JSX.Element => {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <ThemeProvider theme={theme}>
      <ResponsiveDrawer onToggle={handleDrawerToggle} open={mobileOpen}>
        <Container>
          <main>
            {children}
            {children}
          </main>
          <footer
            style={{
              marginTop: `2rem`,
            }}
          >
            © {new Date().getFullYear()} Katherine Garcia-Rosales
          </footer>
        </Container>
      </ResponsiveDrawer>
    </ThemeProvider>
  )
}
export default Page
