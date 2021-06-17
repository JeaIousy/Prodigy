import fetch from "node-fetch";

export const getGameData = async({ log }: { log?: boolean } = {}) => {
    if (log) console.log("Fetching game status...");
    var playData = (await (await fetch("https://play.prodigygame.com/play")))
    if (!playData.ok) throw new Error(`The main page request was unable to be fetched with a code of ${playData.status}.`);
    playData = playData.text().match(/(?<=gameStatusDataStr = ').+(?=')/);
    if (!playData?.length) throw new Error("Could not get game status")
    const gameStatus = JSON.parse(playData[0]);
    if (log) console.log("Fetching game version...");
    const gameDataVersion = gameStatus["prodigyGameFlags"]["gameDataVersion"];
    const gameData = await (await fetch(`https://cdn.prodigygame.com/game/data/production/${gameDataVersion}/data.json`))
    if (!gameData.ok) throw new Error(`The game data page request was unable to be fetched with a code of ${gameData.status}.`);
    return await gameData.json() as {}
}