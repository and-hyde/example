/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetDeprecated
// ====================================================

export interface GetDeprecated_site_siteMetadata {
  __typename: "SiteSiteMetadata";
  title: string | null;
}

export interface GetDeprecated_site {
  __typename: "Site";
  siteMetadata: GetDeprecated_site_siteMetadata | null;
}

export interface GetDeprecated_allMarkdownRemark_edges_node_fields {
  __typename: "MarkdownRemarkFields";
  slug: string | null;
}

export interface GetDeprecated_allMarkdownRemark_edges_node_frontmatter {
  __typename: "MarkdownRemarkFrontmatter";
  date: any | null;
  title: string | null;
  description: string | null;
}

export interface GetDeprecated_allMarkdownRemark_edges_node {
  __typename: "MarkdownRemark";
  excerpt: string | null;
  fields: GetDeprecated_allMarkdownRemark_edges_node_fields | null;
  frontmatter: GetDeprecated_allMarkdownRemark_edges_node_frontmatter | null;
}

export interface GetDeprecated_allMarkdownRemark_edges {
  __typename: "MarkdownRemarkEdge";
  node: GetDeprecated_allMarkdownRemark_edges_node;
}

export interface GetDeprecated_allMarkdownRemark {
  __typename: "MarkdownRemarkConnection";
  edges: GetDeprecated_allMarkdownRemark_edges[];
}

export interface GetDeprecated {
  site: GetDeprecated_site | null;
  allMarkdownRemark: GetDeprecated_allMarkdownRemark;
}
