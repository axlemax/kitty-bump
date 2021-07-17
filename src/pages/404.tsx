import * as React from "react"

import Page from "../layouts/Page"
// import Seo from "../components/seo"

const NotFoundPage = (): JSX.Element => (
  <Page>
    {/* <Seo title="404: Not found" /> */}
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Page>
)

export default NotFoundPage
