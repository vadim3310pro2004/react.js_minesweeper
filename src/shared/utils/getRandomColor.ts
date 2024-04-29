

const getRandomColor = (alpha?: number): string => (
    alpha ?
        `rgba(${Math.round(Math.random() * 255)}, 
        ${Math.round(Math.random() * 255)}, 
        ${Math.round(Math.random() * 255)},
        ${alpha})`
        :
        `rgb(${Math.round(Math.random() * 255)}, 
        ${Math.round(Math.random() * 255)}, 
        ${Math.round(Math.random() * 255)})`
);


export default getRandomColor;