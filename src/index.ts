const pick = require("object.pick");

export function ObjectPick<T extends object | ((...args: any[]) => void)>(obj: T, keys: keyof T | Array<keyof T>): object | ((...args: any[]) => void) {
        return pick(obj, keys);
}