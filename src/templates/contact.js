import React from "react"
import Layout from "../components/layout"
import Seo from "../components/SEO"
import { FaTwitter, FaEnvelope, FaMediumM, FaHashtag } from "react-icons/fa"

export default ({ pageContext: { page } }) => (
  <Layout>
    <Seo title={page.name} description={page.title} />
    <div className="page-standard">
      <h1>contact</h1>
      <section className="page-section">
        <p className="page-intro">In the rare occassion that readers or supporters need to contact the author, use the following methods of communication. If you'd like to help spread the word, please use the hashtag <strong>#raisinganomalies</strong>.</p>
        <hr className="divider"/>
        
        <div className="social">
          <span className="social-platform"><FaTwitter className="social-platform-icon"/> <a href="https://twitter.com/collectivfam" target="_blank" rel="noopener noreferrer">@collectivfam</a></span>
          <span className="social-platform"><FaMediumM className="social-platform-icon"/> <a href="https://medium.com/@makertolentino" target="_blank" rel="noopener noreferrer">@makertolentino</a></span>
          <span className="social-platform"><FaEnvelope className="social-platform-icon"/> <a href="mailto:thecollectivelegacy@gmail.com" target="_blank" rel="noopener noreferrer">@thecollectivelegacy</a></span>
          <span className="social-platform"><FaHashtag className="social-platform-icon"/> <a href="https://twitter.com/hashtag/raisinganomalies" target="_blank" rel="noopener noreferrer">#raisinganomalies</a></span>
        </div>
      </section>
    </div>
  </Layout>
)
