import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "gatsby-theme-material-ui"
import { useStaticQuery, graphql } from "gatsby"

import Page from "../layouts/Page"
import { Helmet } from "react-helmet"
import { SiteInfo } from "../types/types"

const IndexPage = (): JSX.Element => {
  const data = useStaticQuery<Record<string, SiteInfo>>(graphql`
    query SiteInfoQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>
      <Page>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <StaticImage
          src="../images/gatsby-astronaut.png"
          width={300}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
        />
        <p>
          <Link to="/page-2/">Go to page 2</Link> <br />
          <Button variant="contained" color="secondary">
            Hiya
          </Button>
          <Button variant="contained" color="secondary" disabled={true}>
            Byea
          </Button>
        </p>
      </Page>
    </>
  )
}

export default IndexPage
