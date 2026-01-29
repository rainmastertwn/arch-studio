export const useDarkMode = () => {
  const isDark = useState<boolean>('isDark', () => false)
  const itemName = 'archStudio-dark-mode'

  // 初始化（從 localStorage 讀取）
  const initDarkMode = () => {
    if (process.client) {
      const darkMode = localStorage.getItem(itemName)

      isDark.value = darkMode !== null ? darkMode === 'true' : false
      updateDOM()
    }
  }

  // 更新 DOM
  const updateDOM = () => {
    if (process.client) {
      if (isDark.value) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }

  // 切換模式
  const toggleDarkMode = () => {
    isDark.value = !isDark.value

    if (process.client) {
      localStorage.setItem(itemName, isDark.value.toString())
      updateDOM()
    }
  }

  // 設定模式
  const setDarkMode = (value: boolean) => {
    isDark.value = value

    if (process.client) {
      localStorage.setItem(itemName, value.toString())
      updateDOM()
    }
  }

  return {
    isDark: readonly(isDark),
    initDarkMode,
    toggleDarkMode,
    setDarkMode
  }
}
