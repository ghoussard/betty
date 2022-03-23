type Override<T, R> = Omit<T, keyof R> & R

export type { Override }
