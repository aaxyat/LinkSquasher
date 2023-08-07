import React from "react"
import "../styles/styles.css"

const NotFoundPage = () => {
    return (
        <div className="container">
            <h1 className="title">404 Not Found</h1>
            <p className="description">
                The page you're looking for does not exist. 
                It might have been moved or deleted.
            </p>
            <a href="/" className="home-link">Go Back Home</a>
        </div>
    )
}

export default NotFoundPage
