import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Home extends Component {
    render() {
        document.title = "Easy React Restaurant"
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>Home</h1>
                <Link to={'/menu'} style={{ textDecoration: 'none' }}>
                    <h1>Show the Menu </h1> </Link>
            </div>
        )
    }
}

export default Home