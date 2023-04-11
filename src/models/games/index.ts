
export type Game = {
    id: number,
    title: string,
    highlightsSupported: boolean,
    fullyOptimized: boolean,
    steamUrl: string,
    publisher: string,
    genre: string,
    status: string
}

export type GameInitialState = {
    games: Game[];
    isLoading: boolean
};

