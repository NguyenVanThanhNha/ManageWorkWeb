export const initialData = {
    boards: [
        {
            id: 'board-1',
            columnOrder: ['column-1', 'column-2', 'column-3'],
            columns: [
                {
                    id: 'column-1',
                    boardId: 'board-1',
                    title: 'To do column',
                    cardOrder: ['card-7', 'card-2', 'card-3', 'card-4' ,'card-5', 'card-6', 'card-1'],
                    cards: [
                        { id: 'column-1', boardId: 'board-1', columnId: 'column-1', title: 'Title of card 1', 
                            cover: "https://i0.wp.com/www.fliptan.com/wp-content/uploads/2022/03/shutterstock_2021164787.jpg?fit=2392%2C1342&ssl=1" },
                        { id: 'column-2', boardId: 'board-1', columnId: 'column-1', title: 'Title of card 2', cover: null },
                        { id: 'column-3', boardId: 'board-1', columnId: 'column-1', title: 'Title of card 3', cover: null },
                        { id: 'column-4', boardId: 'board-1', columnId: 'column-1', title: 'Title of card 4', cover: null },
                        { id: 'column-5', boardId: 'board-1', columnId: 'column-1', title: 'Title of card 5', cover: null },
                        { id: 'column-6', boardId: 'board-1', columnId: 'column-1', title: 'Title of card 6', cover: null },
                        { id: 'column-7', boardId: 'board-1', columnId: 'column-1', title: 'Title of card 7', cover: null },
                    ]
                },
                {
                    id: 'column-2',
                    boardId: 'board-1',
                    title: 'Inprocess column',
                    cardOrder: ['card-1', 'card-2', 'card-3', 'card-4' ,'card-5', 'card-6', 'card-7'],
                    cards: [
                        { id: 'column-1', boardId: 'board-1', columnId: 'column-1', title: 'Title of card 8', cover: null },
                        { id: 'column-2', boardId: 'board-1', columnId: 'column-1', title: 'Title of card 9', cover: null },
                        { id: 'column-3', boardId: 'board-1', columnId: 'column-1', title: 'Title of card 10', cover: null },
                    ]
                },
                {
                    id: 'column-3',
                    boardId: 'board-1',
                    title: 'Done column',
                    cardOrder: ['card-1', 'card-2', 'card-3', 'card-4' ,'card-5', 'card-6', 'card-7'],
                    cards: [
                        { id: 'column-11', boardId: 'board-1', columnId: 'column-1', title: 'Title of card 11', cover: null },
                        { id: 'column-12', boardId: 'board-1', columnId: 'column-1', title: 'Title of card 12', cover: null },
                        { id: 'column-13', boardId: 'board-1', columnId: 'column-1', title: 'Title of card 13', cover: null },
                    ]
                }

            ]
        }
    ]
}