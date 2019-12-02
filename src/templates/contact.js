import React from "react"
import Layout from "../components/layout"
import Seo from "../components/SEO"
import { FaTwitter, FaEnvelope } from "react-icons/fa"

export default ({ pageContext: { page } }) => (
  <Layout>
    <Seo title={page.name} description={page.title} />
    <div className="page-standard">
      <h1>contact</h1>
      <section className="page-section">
        <div className="social">
          <span className="social-platform"><FaTwitter className="social-platform-icon"/> <a href="https://twitter.com/collectivfam" target="_blank">@collectivfam</a></span>
          
          <span className="social-platform"><FaEnvelope className="social-platform-icon"/> <a href="mailto:thecollectivelegacy@gmail.com" target="_blank">@thecollectivelegacy</a></span>
        </div>
      </section>
    </div>
  </Layout>
)
