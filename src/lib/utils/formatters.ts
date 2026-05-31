export const title = (str: string) => {
    return str.match(/^(.+?),\s*\d{4}/)?.[1] as string;
};

export const rating = (str: string) => {
    return str.match(/★+½?/)?.[0];
};
export const year = (str: string) => {
    return str.match(/,\s*(\d{4})/)?.[1];
};
export const hasSpoilers = (str: string) => {
    return /\(contains spoilers\)/.test(str);
};
export const capitalize = (str: string) => {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
};