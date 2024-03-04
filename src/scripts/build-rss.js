import fs from 'fs'
import { Feed } from 'feed'
import { me } from '../../me.config.js'

const feed = new Feed({
    title: me.fullName,
    description: me.description,
    id: me.domain,
    link: me.domain,
    language: 'en',
    image: `${me.domain}/favicon-32x32.png`,
    favicon: `${me.domain}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Tailwind Labs`,
    feedLinks: {
        rss: `${me.domain}/feed.xml`,
        json: `${me.domain}/feed.json`,
        atom: `${me.domain}/atom.xml`,
    },
    author: {
        name: me.fullName,
        link: 'https://x.com/@infoSophat',
    },
})


fs.writeFileSync('./dist/feed.xml', feed.rss2())
fs.writeFileSync('./dist/atom.xml', feed.atom1())
fs.writeFileSync('./dist/feed.json', feed.json1())