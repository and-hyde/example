/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Index
// ====================================================

export interface Index_site_siteMetadata {
  __typename: "SiteSiteMetadata";
  title: string | null;
}

export interface Index_site {
  __typename: "Site";
  siteMetadata: Index_site_siteMetadata | null;
}

export interface Index_allMarkdownRemark_edges_node_fields {
  __typename: "MarkdownRemarkFields";
  slug: string | null;
}

export interface Index_allMarkdownRemark_edges_node_frontmatter {
  __typename: "MarkdownRemarkFrontmatter";
  date: any | null;
  title: string | null;
  description: string | null;
}

export interface Index_allMarkdownRemark_edges_node {
  __typename: "MarkdownRemark";
  excerpt: string | null;
  fields: Index_allMarkdownRemark_edges_node_fields | null;
  frontmatter: Index_allMarkdownRemark_edges_node_frontmatter | null;
}

export interface Index_allMarkdownRemark_edges {
  __typename: "MarkdownRemarkEdge";
  node: Index_allMarkdownRemark_edges_node;
}

export interface Index_allMarkdownRemark {
  __typename: "MarkdownRemarkConnection";
  edges: Index_allMarkdownRemark_edges[];
}

export interface Index {
  site: Index_site | null;
  allMarkdownRemark: Index_allMarkdownRemark;
}
