import React from "react";
export interface AppProps {
  children: React.ReactNode;
}

export interface PageInfo {
  icon: string;
  name: string;
  location: string
}

export type SiteInfo = {
  siteMetadata: {
    author: string;
    pages: [PageInfo];
    title: string;
  }
}