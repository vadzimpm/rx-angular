import { getGlobalThis } from './get-global-this';
/**
 * envZonePatched
 *
 * @description
 *
 * This function checks the window object `zone.js` was instantiated.
 * If so, the `window` object maintains a property named `Zone`.
 *
 * Here how Angular checks it: https://github.com/angular/angular/blob/master/packages/core/src/zone/ng_zone.ts#L123
 *
 * @return {boolean} - true if `zone.js` patched global APIs.
 *
 */
export function envZonePatched() {
    return getGlobalThis().Zone !== undefined;
}
/**
 * apiZonePatched
 *
 * @description
 *
 * This function checks if a specific Browser API is patched by `zone.js`.
 *
 * @param name {string} - The name of the API to check.
 * @return {boolean} - true if `zone.js` patched the API in question.
 *
 */
export function apiZonePatched(name) {
    // if symbol is present, zone patched the API
    return getGlobalThis()['__zone_symbol__' + name] !== undefined;
}
var zoneDetectionCache = new WeakMap();
/**
 * isNgZone
 *
 * @description
 *
 * This function takes an instance of a class which implements the NgZone interface and checks if
 * its `runOutsideAngular()` function calls `apply()` on the function passed as parameter. This
 * means the Angular application that instantiated this service assumes it runs in a ZoneLess
 * environment, and therefore it's change detection will not be triggered by zone related logic.
 *
 * However, keep in mind this does not mean `zone.js` is not present.
 * The environment could still run in ZoneFull mode even if Angular turned it off.
 * Consider the situation of a Angular element configured for ZoneLess
 * environments is used in an Angular application relining on the zone mechanism.
 *
 * @param instance {Class Instance} - The instance to check for constructor name of `NgZone`.
 * @return {boolean} - true if instance is of type `NgZone`.
 *
 */
export function isNgZone(instance) {
    var cachedValue = zoneDetectionCache.get(instance);
    if (cachedValue !== undefined) {
        return cachedValue;
    }
    var calledApply = false;
    function fn() { }
    fn.apply = function () { return (calledApply = true); };
    instance.runOutsideAngular(fn);
    zoneDetectionCache.set(instance, calledApply);
    return calledApply;
}
/**
 * isNoopNgZone
 *
 *@description
 *
 * This function takes any instance of a class and checks
 * if the constructor name is equal to `NoopNgZone`.
 *
 * For more detailed information read the description of [isNgZone](#isngzone).
 *
 * @param instance {Class Instance} - The instance to check for constructor name of `NoopNgZone`.
 * @return {boolean} - true if instance is of type `NoopNgZone`.
 *
 */
export function isNoopNgZone(instance) {
    return !isNgZone(instance);
}
//# sourceMappingURL=zone-checks.js.map