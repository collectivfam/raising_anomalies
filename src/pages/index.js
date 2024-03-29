import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/SEO"
import bookImg from "../content/images/home/raising_anomalies_book.png";
import backgroundImg from "../content/images/circles-bg.png";

export default ({ data }) => {

  return (
    <Layout>
    <Seo />
      <section className="hero">
        <div className="content">
          <h1 className="main-body-title">raising<span className="main-body-title-accent">anomalies</span></h1>
          <h2 className="main-body-subtitle">
          A collection of stories on overcoming failure, internal growth, and creating a unique family culture.
          </h2>
            <a href="/author" className="hero-cta">About the author</a>
            <a href="/updates" className="hero-cta">Latest updates</a>
        </div>
        <div className="hero-img-container">
          <img src={bookImg} className="hero-img"/>
        </div>
        <div className="hero-bg">
          <img src={backgroundImg}/>
        </div>
      </section>
      
      {/* {data.allMarkdownRemark.edges.map(({ node }) => (
        <article className={styles.item}>
          <div className={styles.title}>
            <h2>
              <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
            </h2>
          </div>
          <div className={styles.content}>
            <p>{node.excerpt}</p>
            <div className={styles.meta}>
              <Link to={node.frontmatter.path}>
                <button className="btn">Read Article</button>
              </Link>
              <h4>{node.frontmatter.date}</h4>
            </div>
          </div>
        </article>
      ))} */}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YY")
            path
          }
          excerpt
        }
      }
    }
  }
`
