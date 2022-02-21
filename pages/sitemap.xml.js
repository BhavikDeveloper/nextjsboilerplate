import React from "react"
import config from "../config"

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    const createSitemap = (models, blogs) => {
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
        <loc>${config.LIVE_URL_WWW}</loc>
        </url>
      </urlset>`
      return sitemap
    }

    const requestOptions = {
      method: "POST",
      body: JSON.stringify({ length: 25 }),
    }
    const baseUrl = config.BASE_URL

    res.setHeader("Content-Type", "text/xml")
    res.write()
    res.end()
  }
}

export default Sitemap
