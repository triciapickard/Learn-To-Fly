/**
 * Full page load. Used after logout and account deletion so no signed-in data survives
 * in memory and no protected page can react to the user disappearing mid-navigation.
 */
export const hardNavigate = {
  to(url: string): void {
    window.location.assign(url);
  },
};
