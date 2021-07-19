import * as React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Drawer from "@material-ui/core/Drawer"
import Hidden from "@material-ui/core/Hidden"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import { Link } from "gatsby-theme-material-ui"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import MailIcon from "@material-ui/icons/Mail"
import Toolbar from "@material-ui/core/Toolbar"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { useStaticQuery, graphql } from "gatsby"
import { SiteInfo } from "../types/types"

import { AppProps } from "../types/types"
import TitleBar from "./TitleBar"

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  drawerContainer: {
    overflow: "auto",
  },
}))

interface ResponsiveDrawerTypes extends AppProps {
  onToggle: () => void
  open: boolean
}

const ResponsiveDrawer = ({
  children,
  onToggle,
  open,
}: ResponsiveDrawerTypes): JSX.Element => {
  const classes = useStyles()
  const theme = useTheme()
  const data = useStaticQuery<Record<string, SiteInfo>>(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          pages {
            icon
            name
            location
          }
        }
      }
    }
  `)

  const drawer = (
    <>
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          {data.site.siteMetadata.pages.map(({ name, icon, location }) => (
            <Link to={`/${location}`} key={name}>
              <ListItem>
                <ListItemIcon>
                  {(() => {
                    switch (icon) {
                      case "mail":
                        return <MailIcon />
                      case "inbox":
                        return <InboxIcon />
                    }
                  })()}
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Toolbar />
      </div>
    </>
  )

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TitleBar onMenuToggle={onToggle} />
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden mdUp implementation="css">
        <Drawer
          className={classes.drawer}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={open}
          onClose={onToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <main className={classes.content}>
        <Toolbar />
        {children}
      </main>
    </div>
  )
}

export default ResponsiveDrawer
