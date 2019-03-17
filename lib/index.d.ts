export declare function ObjectPick<T extends object | ((...args: any[]) => void)>(obj: T, keys: keyof T | Array<keyof T>): object | ((...args: any[]) => void);
