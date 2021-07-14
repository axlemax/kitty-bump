/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "@material-ui/core"
import { createTheme, ThemeProvider } from "@material-ui/core/styles"

import "./page.css"
import { AppProps } from "../components/types"
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
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <ResponsiveDrawer>
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
