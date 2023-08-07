import React from "react"
import "../styles/styles.css"

const HomePage = () => {
    return (
        <div className="container">
            <h1 className="title">LinkSquasher</h1>
            <p className="description">
                A simple URL shortener built with Gatsby. 
                Converts long URLs into easily sharable shortlinks, perfect for social media, emails and SMS.
            </p>
            <a href="https://github.com/aaxyat/linksquasher" className="github-link">View on GitHub</a>
        </div>
    )
}

export default HomePage
