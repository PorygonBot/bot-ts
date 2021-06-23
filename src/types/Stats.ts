import Rules from "./Rules";

interface Stats {
    players: {
        [key: string]: {
            ps: string,
            kills: { [key: string]: { [key: string]: number } },
            deaths: { [key: string]: number }
        }
    },
    info: {
        replay: string,
        history: string,
        turns: number,
        winner: string,
        loser: string,
        rules: Rules,
        result: string
    },
    error: string,
}

export default Stats;