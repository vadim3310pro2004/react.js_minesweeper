
import { MinesweeperState } from ".";

type OpenWithCeilsAround = (
    minesMap: MinesweeperState['minesMap'],
    cell: number
) => MinesweeperState['minesMap'];


const openWithCeilsAround: OpenWithCeilsAround = (minesMap, ceil) => {
    if (minesMap[ceil].minesAround.length === 0 && minesMap[ceil].state === "default") {
        minesMap[ceil].cellsAround.forEach((i: number) => {
            minesMap[ceil].state = "open";
            openWithCeilsAround(minesMap, i);
        })
    }
    else {
        minesMap[ceil].state = "open";
    }

    return minesMap;
};


export default openWithCeilsAround;