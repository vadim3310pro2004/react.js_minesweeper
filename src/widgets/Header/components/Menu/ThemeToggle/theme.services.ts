

export const setColorScheme = (theme: string) => {
    document.documentElement.setAttribute("theme", theme);
};

export const getColorScheme = () => {
    document.documentElement.getAttribute("theme");
};
