import { useEffect, useState, useMemo, useCallback } from 'react'

import { deviceWidthBreakpoint } from './breakpoint'
import { getCurrentUserAgent } from './getCurrentUserAgent'

const { mobile, desktop } = deviceWidthBreakpoint

export default function useClient() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const setClientInfo = useCallback(() => {
    setScreenWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', setClientInfo, false)

    return () => window.removeEventListener('resize', setClientInfo, false)
  }, [setClientInfo])

  const isMobile = useMemo(() => screenWidth <= mobile.max, [screenWidth])

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
