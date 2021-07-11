import React from 'react';
import { BrowserInfo } from './useBrowserInfo';
declare type Props = {
    children: (browserInfo: BrowserInfo) => React.ReactNode;
};
export default function BrowserInfoConnector(props: Props): JSX.Element;
export {};
