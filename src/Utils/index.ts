

/**
 * Common Utility Menthods listed here to be used throughout the codebase 
 */

export const getImageURI = (steamUrl: string) => {
    if (steamUrl) {
      const appId = steamUrl.split("/").pop();
      if (appId) {
        return `https://steamcdn-a.akamaihd.net/steam/apps/${appId}/library_600x900_2x.jpg`
      }
    }
    return "https://steamcdn-a.akamaihd.net/steam/apps/661920/library_600x900_2x.jpg"
  }