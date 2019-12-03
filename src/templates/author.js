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
        <p className="page-intro">In this short Q&A with the author of <strong>raising anomalies</strong>, Randy Tolentino, we find out a little bit about who he is and what inspired him to officially start his career as a writer.</p>
        <hr className="divider"/>
        
        <ul className="faq-list">
          {faqData.map((item, i) => (
            <li className="faq-list-item" key={i}
            >
              <span className="faq-list-item-q">Q: {item.question}</span>
              <span className="faq-list-item-a" dangerouslySetInnerHTML={{ __html: item.answer }} />
            </li>  
          )
          )}
        </ul>
      </section>
    </div>
  </Layout>
)
