/**
 * @description
 *
 * A fallback for the new `globalThis` reference.
 *
 *  It should be used to replace `window` due to different environments in:
 *  - SSR (Server Side Rendering)
 *  - Tests
 *  - Browser
 *
 *  @return {globalThis} - A reference to globalThis. `window` in the Browser.
 */
export function getGlobalThis() {
    return (globalThis || self || window);
}
//# sourceMappingURL=get-global-this.js.map