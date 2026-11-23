/**
 * Theme plumbing shared by the client toggle and the pre-paint bootstrap
 * script, so the storage key and attribute name are never duplicated.
 */
export const THEME_STORAGE_KEY = "nuskhe-theme";
export const THEME_ATTRIBUTE = "data-theme";
export const CLASSIC_THEME = "classic";
export const GTA_THEME = "gta6";

/** Runs before first paint so the chosen skin never flashes the other one. */
export const THEME_BOOTSTRAP = `try{if(localStorage.getItem("${THEME_STORAGE_KEY}")==="${GTA_THEME}"){document.documentElement.setAttribute("${THEME_ATTRIBUTE}","${GTA_THEME}")}}catch(e){}`;
