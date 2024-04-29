
const sortedObject = (obj: Record<string, any>) => {
    let sortedObj: Record<string, any> = {};
    
    for (let i of Object.keys(obj).sort()) {
        sortedObj[i] = obj[i]
    }
    
    return sortedObj;
}


export default sortedObject;