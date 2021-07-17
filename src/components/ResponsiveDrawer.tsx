import * as React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Divider from "@material-ui/core/Divider"
import Drawer from "@material-ui/core/Drawer"
import Hidden from "@material-ui/core/Hidden"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import MailIcon from "@material-ui/icons/Mail"
import Toolbar from "@material-ui/core/Toolbar"
import { makeStyles, useTheme } from "@material-ui/core/styles"

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
  onToggle: () => null
  open: boolean
}

const ResponsiveDrawer = ({
  children,
  onToggle,
  open,
}: ResponsiveDrawerTypes): JSX.Element => {
  const classes = useStyles()
  const theme = useTheme()

  const drawer = (
    <>
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          {["Intro", "Projects", "Research", "Experience"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
        <Toolbar />
        <Divider />
        <List>
          {["CV", "Contact Me"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    </>
  )

  const container =
    window !== undefined ? () => window.document.body : undefined

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TitleBar onMenuToggle={onToggle} />
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden mdUp implementation="css">
        <Drawer
          className={classes.drawer}
          container={container}
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
