/**
 * Theme switcher script must have is:inline prop is needed to avoid
 * flickering of theme colors on page refresh. is:inline prop will exclude script
 * from the main JS bundle and will load and run it in advance of the page paint.
 */

const currentTheme = (() => {
    // Check if user already set a theme
    const localStorageTheme = localStorage.getItem("theme")
    if (localStorageTheme) {
        // User preference over system preference
        return localStorageTheme
    }
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        return "light"
    }
    // Default to dark
    return "dark"
})()

if (currentTheme === "light") {
    document.documentElement.classList.add("light")
} else {
    document.documentElement.classList.remove("light")
}

window.localStorage.setItem("theme", currentTheme)
