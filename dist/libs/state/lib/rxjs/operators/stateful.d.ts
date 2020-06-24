import { MonoTypeOperatorFunction, OperatorFunction } from 'rxjs';
/**
 * @description
 *
 * As the name `stateful` implies this operator is useful when you process an Observable which maintains state.
 *
 * Maintaining state as an `Observable` source comes with a handful of repetitive as well as use case specific tasks.
 *
 * It acts like the Observables `pipe` method.
 * It accepts RxJS operators and composes them like `Observable#pipe` and the standalone `pipe` method.
 *
 * Furthermore, it takes care of the above mentioned repetitive tasks as listed below.
 *
 * You will always (aka repetitive) want to ensure that:
 * - only distinct state changes are emitted
 * - only defined values are emitted (filter out undefined, which ensures lazy state)
 * - share and replay custom operations for multiple subscribers (saves performance)
 *
 * You will sometimes (aka situational) need:
 * - a subset of the state (derivations)
 * - compose the state with other Observables or change the Observables behaviour
 *
 *
 * @example
 * import { Observable } from 'rxjs';
 * import { map } from 'rxjs/operators';
 * import { stateful } from 'rx-angular/state';
 *
 * const state$: Observable<{ name: string; items: string[] }>;
 * const derivation$ = state$.pipe(
 *   stateful(
 *     map(state => state.list.length),
 *     filter(length => length > 3)
 *   )
 * );
 *
 * @param {OperatorFunction<T, A>} op - one or multiple passed operator comma separated
 * @return OperatorFunction<T, A>
 *
 * @docsPage stateful
 * @docsCategory operators
 */
export declare function stateful<T>(): MonoTypeOperatorFunction<T>;
/**
 * @internal
 */
export declare function stateful<T, A>(op: OperatorFunction<T, A>): OperatorFunction<T, A>;
/**
 * @internal
 */
export declare function stateful<T, A, B>(op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>): OperatorFunction<T, B>;
/**
 * @internal
 */
export declare function stateful<T, A, B, C>(op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>, op3: OperatorFunction<B, C>): OperatorFunction<T, C>;
/**
 * @internal
 */
export declare function stateful<T, A, B, C, D>(op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>, op3: OperatorFunction<B, C>, op4: OperatorFunction<C, D>): OperatorFunction<T, D>;
/**
 * @internal
 */
export declare function stateful<T, A, B, C, D, E>(op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>, op3: OperatorFunction<B, C>, op4: OperatorFunction<C, D>, op5: OperatorFunction<D, E>): OperatorFunction<T, E>;
