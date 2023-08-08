import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import "../styles/styles.css"

export default function Links() {
  const data = useStaticQuery(graphql`
    query {
      allRedirectsJson {
        edges {
          node {
            shortUrl
            longUrl
          }
        }
      }
    }
  `)

  return (
    <div className="container">
      <h1 className="title">All Links</h1>
      <ul className="links-list">
        {data.allRedirectsJson.edges.map(({ node }, index) => (
          <li key={index}>
            {node.longUrl} ---> <Link to={`/${node.shortUrl}`}>{node.shortUrl}</Link>
          </li>
        ))}
      </ul>
      <p className="home-page-link">
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  )
}
