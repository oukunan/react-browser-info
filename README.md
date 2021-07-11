# react-browser-info

Browser information for react framework

## Install

```
   npm install react-browser-info
```

or

```
   yarn add react-browser-info
```

## Usage

**React hook**

```tsx
import { useBrowserInfo } from 'react-browser-info'

function App() {
  const { isMobile, isTablet, isAndroid, isIOS } = useBrowserInfo()

  if (isAndroid) {
    return <div>You are Android user</div>
  }

  if (isIOS) {
    return <div>You are IOS user</div>
  }

  if (isMobile) {
    return <div>You are mobile</div>
  }

  return <div>Normal content</div>
}
```

**React render props**

```tsx
import { BrowserInfoConnector } from 'react-browser-info'

function App() {
  return (
    <BrowserInfoConnector>
      {({ isMobile, isAndroid }) => (
        <div>
          {isMobile && 'You are mobile'}
          {isAndroid && 'You are android'}
        </div>
      )}
    </BrowserInfoConnector>
  )
}
```

## API Reference

| Properties | Return type |
| :--------- | :---------- |
| isMobile   | boolean     |
| isTablet   | boolean     |
| isDesktop  | boolean     |
| isAndroid  | boolean     |
| isIOS      | boolean     |
| isChrome   | boolean     |
| isSafari   | boolean     |
| isFirefox  | boolean     |
| isOpera    | boolean     |
| isIE       | boolean     |

## License

MIT
