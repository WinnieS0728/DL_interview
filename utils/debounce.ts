export function myDebounce<T extends any[]>(callback: (...arg: T) => void, ms: number) {
    let timer: ReturnType<typeof setTimeout> | undefined = undefined;

    return function (this: unknown, ...args: T) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback.apply(this, args);
        }, ms);
    }
}