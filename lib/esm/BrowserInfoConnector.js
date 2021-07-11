import React from 'react';
import useBrowserInfo from './useBrowserInfo';
export default function BrowserInfoConnector(props) {
    return React.createElement(React.Fragment, null, props.children(useBrowserInfo()));
}
