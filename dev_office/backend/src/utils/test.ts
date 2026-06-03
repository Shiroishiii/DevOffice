export const tests: Record<
    string,
    { input: any[]; expected: any }[]
> = {
    isEven: [
        { input: [2], expected: true },
        { input: [3], expected: false },
        { input: [10], expected: true },
    ],

    sum: [
        { input: [2, 3], expected: 5 },
        { input: [10, 5], expected: 15 },
    ],

    max: [
        { input: [10, 5], expected: 10 },
        { input: [7, 20], expected: 20 },
    ],
}