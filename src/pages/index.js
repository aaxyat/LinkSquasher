import React from "react"
import { Link } from "gatsby"
import { FaGithub } from 'react-icons/fa'
import "../styles/styles.css"

export default function Home() {
  return (
    <div className="container">
      <h1 className="title">LinkSquasher</h1>
      <p className="description">
        A simple URL shortener built with Gatsby. Converts long URLs into easily sharable shortlinks, perfect for social media, emails, and SMS.
      </p>
      <p className="links-page-link">
        <Link to="/links">View All Links</Link>
      </p>
      <a className="github-link" href="https://github.com/aaxyat/linksquasher">
        <FaGithub className="github-icon" />
        View on GitHub
      </a>
    </div>
  )
}
