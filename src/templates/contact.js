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
        <p className="page-intro">In the rare occassion that  supporters need to contact the author, please use the following modes of communication. If you'd like to help spread the word, please use the hashtag <strong>#raisinganomalies</strong>.</p>
        <hr className="divider"/>
        
        <div className="social">
          <span className="social-platform"><FaTwitter className="social-platform-icon"/> <a href="https://twitter.com/collectivfam" target="_blank">@collectivfam</a></span>
          
          <span className="social-platform"><FaMediumM className="social-platform-icon"/> <a href="https://medium.com/@makertolentino" target="_blank">@makertolentino</a></span>
          
          <span className="social-platform"><FaEnvelope className="social-platform-icon"/> <a href="mailto:thecollectivelegacy@gmail.com" target="_blank">@thecollectivelegacy</a></span>

          <span className="social-platform"><FaHashtag className="social-platform-icon"/> <a href="https://twitter.com/hashtag/raisinganomalies" target="_blank">#raisinganomalies</a></span>
          
        </div>
      </section>
    </div>
  </Layout>
)
