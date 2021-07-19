import * as React from "react"
import { Link } from "gatsby"

import Page from "../layouts/Page"

const SecondPage = (): JSX.Element => (
  <Page>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Page>
)

export default SecondPage
