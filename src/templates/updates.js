import React from "react"
import Layout from "../components/layout"
import Seo from "../components/SEO"

import updatesData from "../constants/updates-data"

export default ({ pageContext: { page } }) => (
  <Layout>
    <Seo title={page.name} description={page.title} />
    <div className="page-standard">
      <h1>updates</h1>
      <section className="page-section">
      {updatesData.map((item, i) => (
        <div className="update" key={i}>
          <span className="update-date">{item.date}</span>
          
          Motivation: <span className="update-rating">{item.motivation}</span>
          
          <ul className="update-notes">
          {item.notes.map((line, i) => (
            <li className="update-notes-item" key={i}>{line}</li>
          ))}
          </ul>
          
        </div>
      )
      )}
      </section>
    </div>
  </Layout>
)
