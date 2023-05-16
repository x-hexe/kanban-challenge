import {atom} from "jotai/index";

export const columnsAtom = atom<ColumnProps[]>([
    { id: 1, title: 'To Do', cards: [] },
    { id: 2, title: 'Doing', cards: [] },
    { id: 3, title: 'Done', cards: [] },
]);
