import * as React from "react"
import { Link } from "gatsby"
import { AppBar } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const Header = ({ siteTitle }: { siteTitle: string }) => {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    toolbar: {
      minHeight: 128,
      alignItems: "flex-start",
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2),
    },
  }))

  const classes = useStyles()

  return (
    <header className={classes.root}>
      <AppBar position="absolute" className={classes.toolbar}>
        {/* <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      > */}
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </AppBar>
      {/* </div> */}
    </header>
  )
}

export default Header
