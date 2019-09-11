/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SEOMetadata
// ====================================================

export interface SEOMetadata_site_siteMetadata {
  __typename: "SiteSiteMetadata";
  title: string | null;
  description: string | null;
  author: string | null;
}

export interface SEOMetadata_site {
  __typename: "Site";
  siteMetadata: SEOMetadata_site_siteMetadata | null;
}

export interface SEOMetadata {
  site: SEOMetadata_site | null;
}
