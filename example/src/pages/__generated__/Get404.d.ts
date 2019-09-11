/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Get404
// ====================================================

export interface Get404_site_siteMetadata {
  __typename: "SiteSiteMetadata";
  title: string | null;
}

export interface Get404_site {
  __typename: "Site";
  siteMetadata: Get404_site_siteMetadata | null;
}

export interface Get404 {
  site: Get404_site | null;
}
