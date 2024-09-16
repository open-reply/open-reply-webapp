// Packages:
import React from 'react'

// Components:
import Head from 'next/head'

// Functions:
const CustomHead = ({
  title,
  description
}: {
  title?: string
  description?: string
}) => {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#0F172A' />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
      <meta name='description' content={ description ?? 'A layer above the internet.' } />
      <meta name='image' content='https://openreply.app/square-cover.png' />
      <meta property='og:url' content='https://openreply.app' />
      <meta property='og:type' content='article' />
      <meta property='og:title' content={ title ?? 'OpenReply' } />
      <meta property='og:description' content={ description ?? 'A layer above the internet.' } />
      <meta property='og:image' content='https://openreply.app/square-cover.png' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content='openreply.app' />
      <meta name='twitter:title' content={ title ?? 'OpenReply' } />
      <meta name='twitter:description' content={ description ?? 'A layer above the internet.' } />
      <meta name='twitter:image' content='https://openreply.app/twitter-media-card.png' />
      <meta name='twitter:image:alt' content={ title ?? 'OpenReply' } />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
      <title>{ title ?? 'OpenReply' }</title>
    </Head>
  )
}

// Exports:
export default CustomHead
