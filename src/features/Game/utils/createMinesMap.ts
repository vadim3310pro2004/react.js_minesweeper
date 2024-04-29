
export interface Cell {
    key: number;
    isMine: boolean;
    minesAround: number[];
    cellsAround: number[];
    state: "marked" | "default" | "open";
}


const getInitialMinesMap = (cells: number): Cell[] => {
    // genereting empty cells im mines map
    const initialGrid = new Array(cells).fill(null).map((_, i) => ({
        key: i,
        isMine: false,
        state: "default" as Cell['state'],
        minesAround: [] as Cell['minesAround'],
        cellsAround: [] as Cell['cellsAround'],
    }));

    return initialGrid;
}


const placeMines = (minesMap: Cell[], mines: number) => {
    // adding mines mines
    for (; minesMap.filter(item => item.isMine).length < mines;) {
        const randomIndex = Math.floor(Math.random() * minesMap.length);

        if (!minesMap[randomIndex].isMine) {
            minesMap[randomIndex].isMine = true;
        }
    }

    return minesMap;
}


const countCellsAround = (minesmap: Cell[]) => {
    // setting coordinates of cells around in the key ["cellsAround"]
    const cells = minesmap.length;
    const size = cells ** 0.5;

    for (let i = 0; i < cells; i++) {
        // top-left angle
        if (i === 0) {
            minesmap[i].cellsAround.push(
                i + 1,
                i + size,
                i + size + 1
            );
        }
        // top-right angle
        else if (i === size - 1) {
            minesmap[i].cellsAround.push(
                i - 1,
                i + size,
                i + size - 1
            );
        }
        // bottom-left angle
        else if (i === size ** 2 - size) {
            minesmap[i].cellsAround.push(
                i + 1,
                i - size,
                i - size + 1
            );
        }
        // bottom-right angle
        else if (i === cells - 1) {
            minesmap[i].cellsAround.push(
                i - 1,
                i - size,
                i - size - 1
            );
        }
        // between top-left angle and top-right angle
        else if (i < size) {
            minesmap[i].cellsAround.push(
                i + 1,
                i - 1,
                i + size,
                i + size + 1,
                i + size - 1
            );
        }
        // between top-left angle and bottom-left angle
        else if (!((i / size) % 1)) {
            minesmap[i].cellsAround.push(
                i + 1,
                i - size,
                i + size,
                i - size + 1,
                i + size + 1
            );
        }
        // between top-right angle and bottom-right angle
        else if (!(((i + 1) / size) % 1)) {
            minesmap[i].cellsAround.push(
                i - 1,
                i + size,
                i - size,
                i - size - 1,
                i + size - 1
            );
        }
        // between bottom-left angle and bottom-right angle
        else if (i > cells - size) {
            minesmap[i].cellsAround.push(
                i + 1,
                i - 1,
                i - size,
                i - size + 1,
                i - size - 1
            );
        }
        // else
        else {
            minesmap[i].cellsAround.push(
                i + 1,
                i - 1,
                i - size,
                i - size + 1,
                i - size - 1,
                i + size,
                i + size + 1,
                i + size - 1
            );
        }
    }

    return minesmap;
}


const countMinesAround = (minesMap: Cell[]) => {
    // setting coordinates of mines around in the key ["cellsMines"]
    minesMap.forEach((cell) => {
        cell.minesAround.push(
            ...cell.cellsAround.filter((item) => minesMap[item].isMine)
        );
    })

    return minesMap;
}


const generateMines = (cells: number, mines: number) => {
    const size = Math.sqrt(cells);

    if (size % 1 !== 0) {
        throw new Error("Invalid value for cells. The square root must be an integer.");
    }

    const minesMap = countMinesAround(
        countCellsAround(
            placeMines(
                getInitialMinesMap(cells), mines
            )
        )
    );

    return minesMap;
}


const getMinesMap = (): Cell[] => generateMines(81, 9);


export default getMinesMap;