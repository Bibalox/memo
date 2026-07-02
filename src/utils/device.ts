let wakeLock: WakeLockSentinel | null = null
let shouldKeepAwake = false

export const preventZoomOnDoubleTap = () => {
  let lastTouchEnd = 0

  document.addEventListener(
    'touchend',
    (event) => {
      const now = Date.now()

      if (now - lastTouchEnd <= 300) {
        event.preventDefault()
      }

      lastTouchEnd = now
    },
    { passive: false },
  )
}


export const getTheme = () => {
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', systemTheme)
}


export const requestWakeLock = async () => {
  if (!('wakeLock' in navigator)) return

  shouldKeepAwake = true

  if (wakeLock) return

  try {
    const sentinel = await navigator.wakeLock.request('screen')
    wakeLock = sentinel

    sentinel.addEventListener('release', () => {
      if (wakeLock === sentinel) {
        wakeLock = null
      }

      if (shouldKeepAwake && document.visibilityState === 'visible') {
        void requestWakeLock()
      }
    })
  } catch { }
}


export const releaseWakeLock = async () => {
  shouldKeepAwake = false

  const sentinel = wakeLock
  wakeLock = null

  await sentinel?.release()
}


export const handleVisibility = () => {
  if (document.visibilityState === 'visible') {
    void requestWakeLock()
  } else {
    void releaseWakeLock()
  }
}
