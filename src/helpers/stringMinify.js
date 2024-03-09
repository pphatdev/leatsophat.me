export const minify = (string) => String(string)
    .replaceAll(/(\s\s|\s\n|\s\t|\t\s)/g, "")
    .replaceAll(/(\>\s\<|\>\,\<|\>\s\,\<|\>\s\,\s\<)/g, '><')