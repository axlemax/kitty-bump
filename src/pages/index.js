import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "gatsby-theme-material-ui";

// import Seo from "../components/seo"
import Page from "../layouts/Page";

const IndexPage = () => {
  return (
    <Page>
      {/* <Seo title="Home" /> */}
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
        <Button variant="contained" color="secondary" disabled={true}>Byea</Button>
      </p>
    </Page>);
}

export default IndexPage
