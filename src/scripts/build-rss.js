import fs from 'fs'
import { Feed } from 'feed'
import { me } from '../../me.config.js'
import { ico, screenShots1 } from '../helpers/assets.js'

const feed = new Feed({
    title: me.fullName,
    description: me.description,
    id: me.domain,
    link: me.domain,
    language: 'en',
    image: screenShots1.replace("dist",'.'),
    favicon: ico.replace("dist",'.'),
    copyright: `All rights reserved ${new Date().getFullYear()}, Leat Sophat`,
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