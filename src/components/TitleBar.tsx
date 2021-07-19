import * as React from "react"
import AppBar from "@material-ui/core/AppBar"
import Hidden from "@material-ui/core/Hidden"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Toolbar from "@material-ui/core/Toolbar"
import { makeStyles } from "@material-ui/core/styles"
import { useStaticQuery, graphql } from "gatsby"
import { SiteInfo } from "../types/types"
import { Link } from "gatsby-theme-material-ui"

const linkSpacing = "2.5em"

const useStyles = makeStyles(theme => ({
  appBar: {
    width: "100%",
    zIndex: theme.zIndex.drawer + 1,
  },
  leftLinks: {
    marginRight: linkSpacing,
  },
  links: {
    fontFamily: "Garamond",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  rightLinks: {
    marginLeft: linkSpacing,
  },
  title: {
    fontSize: "2.5em",
  },
  titleBar: {
    alignItems: "center",
    display: "flex",
    margin: "auto",
  },
}))

const TitleBar = ({
  onMenuToggle,
}: {
  onMenuToggle: () => void
}): JSX.Element => {
  const classes = useStyles()
  const data = useStaticQuery<Record<string, SiteInfo>>(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
          pages {
            name
            location
          }
          title
        }
      }
    }
  `)

  const navLinks = () => {
    const pages = data.site.siteMetadata.pages
    const linkElements: JSX.Element[] = []
    for (let i = 0; i < pages.length / 2; i++) {
      linkElements.push(
        <Hidden smDown implementation="css">
          <Link
            to={`/${pages[i].location}`}
            key={pages[i].location}
            className={`${classes.leftLinks} ${classes.links}`}
          >
            {pages[i].name}
          </Link>
        </Hidden>
      )
    }

    linkElements.push(
      <Link to={"/"} className={`${classes.title} ${classes.links}`}>
        {data.site.siteMetadata.title}
      </Link>
    )

    for (let j = pages.length / 2; j < pages.length; j++) {
      linkElements.push(
        <Hidden smDown implementation="css">
          <Link
            to={`/${pages[j].location}`}
            key={pages[j].location}
            className={`${classes.rightLinks} ${classes.links}`}
          >
            {pages[j].name}
          </Link>
        </Hidden>
      )
    }

    return linkElements
  }

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onMenuToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <div className={classes.titleBar}>
          {navLinks().map(el => (
            <>{el}</>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default TitleBar
