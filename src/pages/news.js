// src/pages/blog.js
// NOTE: Make this loosely match node_modules/gatsby-theme-carbon/src/templates/Default.js

import React from "react";
import { graphql } from "gatsby";
import Layout from "../gatsby-theme-carbon/components/Layout";
import PageDescription from "gatsby-theme-carbon/src/components/PageDescription";
import PageHeader from "gatsby-theme-carbon/src/components/PageHeader";
import Main from "gatsby-theme-carbon/src/components/Main";

const BlogPage = ({ data }) => {
  const posts = data.allFeedSubstackFeed.nodes;

  return (
    <Layout
      theme="dark"
      titleType="page"
      pageTitle="News"
      pageDescription="Check out our latest Substack posts."
      pageKeywords="newsletter, substack, posts"
    >
      <PageHeader title="News" label="label" theme="dark" />

      <Main padded>
        {posts.length === 0 && <p>No posts found.</p>}
        {posts.map((post) => {
          const date = new Date(post.pubDate).toLocaleDateString();
          return (
            <article key={post.id}>
              <h2>
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  {post.title}
                </a>
              </h2>
              <PageDescription>
                <strong>Published on:</strong> {date}
              </PageDescription>
              <div
                dangerouslySetInnerHTML={{ __html: post.content.encoded }}
                style={{ marginTop: "1em" }}
              />
            </article>
          );
        })}
      </Main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFeedSubstackFeed(sort: { fields: pubDate, order: DESC }) {
      nodes {
        id
        title
        link
        pubDate
        content {
          encoded
        }
      }
    }
  }
`;

export default BlogPage;
