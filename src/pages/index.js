import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Button } from "gatsby-theme-material-ui";

import Layout from "../components/layout"
import Seo from "../components/seo"

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff9e80"
    },
    secondary: {
      main: "#aed581"
    }
  }
});

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Seo title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
        <Button variant="contained" color="secondary">Hiya</Button>
        <Button variant="contained" color="primary">Byea</Button>
      </p>
    </Layout>
  </ThemeProvider>
)

export default IndexPage
