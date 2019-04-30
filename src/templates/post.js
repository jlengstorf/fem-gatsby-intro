import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-mdx';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      code {
        body
      }
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <p
      css={css`
        font-size: 0.75rem;
      `}
    >
      Posted by {post.frontmatter.author}
    </p>
    <MDXRenderer>{post.code.body}</MDXRenderer>
    <ReadLink to="/">&larr; back to all posts</ReadLink>
  </Layout>
);

export default PostTemplate;
