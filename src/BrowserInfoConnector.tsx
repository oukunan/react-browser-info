import React from 'react'
import useBrowserInfo, { BrowserInfo } from './useBrowserInfo'

type Props = {
  children: (browserInfo: BrowserInfo) => React.ReactNode
}

export default function BrowserInfoConnector(props: Props) {
  return <React.Fragment>{props.children(useBrowserInfo())}</React.Fragment>
}
