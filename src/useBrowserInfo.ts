import { useEffect, useState, useMemo, useCallback } from 'react'

import { deviceWidthBreakpoint } from './breakpoint'
import { getCurrentUserAgent } from './getCurrentUserAgent'

const { mobile, desktop } = deviceWidthBreakpoint

export type BrowserInfo = ReturnType<typeof useBrowserInfo>

export default function useBrowserInfo() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const setWidth = useCallback(() => {
    setScreenWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', setWidth, false)

    return () => window.removeEventListener('resize', setWidth, false)
  }, [setWidth])

  const isMobile = useMemo(() => screenWidth <= mobile.max, [screenWidth])

  const isTablet = useMemo(
    () => screenWidth > mobile.max && screenWidth < desktop.min,
    [screenWidth]
  )

  const isDesktop = useMemo(() => screenWidth >= desktop.min, [screenWidth])

  const isAndroid = useMemo(() => getCurrentUserAgent() === 'Android', [])

  const isIOS = useMemo(() => getCurrentUserAgent() === 'IOS', [])

  const isChrome = useMemo(() => getCurrentUserAgent() === 'Chrome', [])

  const isSafari = useMemo(() => getCurrentUserAgent() === 'Safari', [])

  const isFirefox = useMemo(() => getCurrentUserAgent() === 'Firefox', [])

  const isOpera = useMemo(() => getCurrentUserAgent() === 'Opera', [])

  const isIE = useMemo(() => getCurrentUserAgent() === 'IE', [])

  return useMemo(
    () => ({
      isMobile,
      isTablet,
      isDesktop,
      isAndroid,
      isIOS,
      isChrome,
      isSafari,
      isFirefox,
      isOpera,
      isIE,
    }),
    [
      isMobile,
      isTablet,
      isDesktop,
      isAndroid,
      isIOS,
      isChrome,
      isSafari,
      isFirefox,
      isOpera,
      isIE,
    ]
  )
}
