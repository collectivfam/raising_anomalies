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
        <p className="page-intro">To find out a little bit about the author of <strong>raising anomalies</strong> and to hear what motivated him to releasing his book, feel free to check out this short Q&A session, conducted by the good people at The Collective Legacy.</p>
        
        <ul className="faq-list">
          {faqData.map((item, i) => (
            <li className="faq-list-item" key={i}
            >
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
