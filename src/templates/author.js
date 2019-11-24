import React from "react"
import Layout from "../components/layout"
import Seo from "../components/SEO"
import faqData from "../constants/faq-data"

export default ({ pageContext: { page } }) => (
  <Layout>
    <Seo title={page.name} description={page.title} />
    <div className="page-standard">
      <h1>author</h1>
      <section className="page-section">
        <ul className="faq-list">
          {faqData.map(item => (
            <li className="faq-list-item">
              <span className="faq-list-item-q">{item.question}</span>
              <span className="faq-list-item-a" dangerouslySetInnerHTML={{ __html: item.answer }} />
            </li>  
          )
          )}
        </ul>
      </section>
    </div>
  </Layout>
)
