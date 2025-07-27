import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Get all blog posts
function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), 'src/content/blog')
  
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  
  const filenames = fs.readdirSync(postsDirectory)
  const posts = filenames
    .filter(name => name.endsWith('.md'))
    .map(name => {
      const filePath = path.join(postsDirectory, name)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        slug: name.replace(/\.md$/, ''),
        title: data.title || '',
        date: data.date || '',
        description: data.description || '',
        author: data.author || { name: 'Jackie Johnson-Dallas' },
        content: content.substring(0, 500) + '...' // First 500 chars as preview
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 10) // Latest 10 posts
  
  return posts
}

export async function GET() {
  const posts = getAllPosts()
  const siteUrl = 'https://jdxsoftware.com'
  
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>JDX Software Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Insights on software development, automation, and digital innovation from JDX Software</description>
    <language>en-us</language>
    <managingEditor>info@jdxsoftware.com (Jackie Johnson-Dallas)</managingEditor>
    <webMaster>info@jdxsoftware.com (Jackie Johnson-Dallas)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${posts
      .map(
        post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>info@jdxsoftware.com (${post.author.name || 'Jackie Johnson-Dallas'})</author>
    </item>`
      )
      .join('')}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=1200, stale-while-revalidate=600'
    }
  })
}