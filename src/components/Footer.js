import React from 'react'

import { rhythm } from '../utils/typography'

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <div style={{ float: 'right' }}>
          <a
            href="/rss.xml"
            target="_blank"
            rel="noopener noreferrer"
          >rss</a>
        </div>
        <a
          href="https://twitter.com/balacmtce"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a> &bull;{' '}
        {/* Commenting github and stackoverflow. Will uncomment when I am really proud to show it to someone
        <a
          href="https://github.com/binarymee"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a> &bull;{' '}
        <a
          href="https://stackoverflow.com/users/1957674/binarymee"
          target="_blank"
          rel="noopener noreferrer">
          stack overflow
        </a> &bull;{' '} */}
        <a
          href="https://linkedin.com/in/balaji-mahesh-babu-13b18b47"
          target="_blank"
          rel="noopener noreferrer">
          linkedin
        </a> &bull;{' '}
        <a
          href="https://fb.com/BalajiCMaheshBabu"
          target="_blank"
          rel="noopener noreferrer">
          facebook
        </a>
      </footer>
    )
  }
}

export default Footer