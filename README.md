# react-browser-info

## Install 🛠️

```
   npm install react-browser-info
```

or

```
   yarn add react-browser-info
```

## Usage

```tsx
import { useBrowerInfo } from 'react-browser-info'

function App() {
  const { isMobile, isTablet, isAndroid, isIOS } = useBrowerInfo()

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
