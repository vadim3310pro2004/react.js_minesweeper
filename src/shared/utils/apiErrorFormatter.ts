

export type ApiError = {
    detail: string;
} | {
    non_field_errors: string;
} | Record<string, any> | any[]


const apiErrorFormatter = (error: ApiError): string => {
    if ("detail" in error) {
        return error.detail;
    }

    else if ("non_field_errors" in error) {
        return error.non_field_errors;
    }

    let resoult = '';
    
    if (Array.isArray(error)) {
        for (let i of error) {
            resoult += `${i}\n`;
        } 
        
        return resoult;
    }

    for (let i in error) {
        resoult += `${i} - ${error[i]}\n`;
    }

    return resoult;
};


export default apiErrorFormatter;