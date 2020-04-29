import React from "react"
import { Link } from "gatsby"

import Test from '../components/test'
import App from '../App'

const IndexPage = () => (
  <div>
    <Test></Test>
    <Link to="./page-2"> page 2 mf</Link>
    <App></App>
  </div>

)

export default IndexPage
