

export const timeFormaterMMSS = (time: number) => {
    // time (seconds) to 00:00 format

    if (time >= 5999) return "99:99";

    let res = "";
    const minutes = String(Math.floor(time / 60));
    const seconds = String(Math.round(time - Number(minutes) * 60));

    minutes.length === 2 ?
        res = `${minutes}` : res = `0${minutes}`;

    res += ":";

    seconds.length === 2 ?
        res += seconds : res += ("0" + seconds);
    
    return res;
}

