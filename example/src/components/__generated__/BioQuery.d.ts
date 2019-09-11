/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BioQuery
// ====================================================

export interface BioQuery_avatar_childImageSharp_fixed {
  __typename: "ImageSharpFixed";
  base64: string | null;
  width: number | null;
  height: number | null;
  src: string | null;
  srcSet: string | null;
}

export interface BioQuery_avatar_childImageSharp {
  __typename: "ImageSharp";
  fixed: BioQuery_avatar_childImageSharp_fixed | null;
}

export interface BioQuery_avatar {
  __typename: "File";
  childImageSharp: BioQuery_avatar_childImageSharp | null;
}

export interface BioQuery_site_siteMetadata_social {
  __typename: "SiteSiteMetadataSocial";
  twitter: string | null;
}

export interface BioQuery_site_siteMetadata {
  __typename: "SiteSiteMetadata";
  author: string | null;
  social: BioQuery_site_siteMetadata_social | null;
}

export interface BioQuery_site {
  __typename: "Site";
  siteMetadata: BioQuery_site_siteMetadata | null;
}

export interface BioQuery {
  avatar: BioQuery_avatar | null;
  site: BioQuery_site | null;
}
