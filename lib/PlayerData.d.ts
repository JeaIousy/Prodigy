export interface PlayerData {
    inventory: {
        [key: string]: Inventory[];
    };
    data: Data;
    isMember: number;
    tutorial: PlayerDataTutorial;
    pets: PlayerDataPet[];
    encounters: Encounters;
    quests: Quests;
    appearance: Appearance;
    equipment: Equipment;
    house: PlayerDataHouse;
    achievements: Achievements;
    state: State;
}
export interface Achievements {
    kills: number;
    progress: {
        [key: string]: number;
    };
    qC: number;
    gS: number;
    gE: number;
}
export interface Appearance {
    name: Name;
    hair: Hair;
    face: number;
    gender: string;
    eyeColor: number;
    skinColor: number;
}
export interface Hair {
    color: number;
    style: number;
}
export interface Name {
    last: number;
    first: number;
    middle: number;
}
export interface Data {
    settings: Settings;
    battleCounter: number;
    level: number;
    storedMemberStars: number;
    hp: number;
    memberStarsExpirationDate: number;
    team: number;
    stars: number;
    allowsHouseVisitors: boolean;
    membershipVideoTimeStamp: number;
    gold: number;
    numSpins1: number;
    spinDate1: number;
    versionID: number;
    spellbook: number[];
    school: string;
    zone: string;
    daily: Daily;
    startDate: number;
    energy: number;
}
export interface Daily {
    festivalName: string;
    lastStarted: number;
    location: string;
    isComplete: boolean;
    monsterID: number;
}
export interface Settings {
    bgmVolume: number;
    voiceVolume: number;
    sfxVolume: number;
}
export interface Encounters {
    pets: EncountersPet[];
    ads: number[];
}
export interface EncountersPet {
    firstSeenDate: number;
    ID: number;
    timesBattled: number;
    timesRescued: number;
}
export interface Equipment {
    boots: number;
    weapon: number;
    hat: number;
    outfit: number;
    follow: number;
    spellRelic: number;
}
export interface PlayerDataHouse {
    currentHouseTag: string;
    active: Active[];
    bg: Bg;
    items: {
        [key: string]: Item;
    };
}
export interface Active {
    anchorY: number;
    r: number;
    stack: any[];
    dx: number;
    dy: number;
    x: number;
    y: number;
    z: number;
    ID: number;
}
export interface Bg {
    active: number;
    own: number[];
}
export interface Item {
    A: any[];
    N: string;
}
export interface Inventory {
    N: string;
    ID: number;
}
export interface PlayerDataPet {
    levelCaught: number;
    ID: number;
    stars: number;
    catchDate: number;
    level: number;
    foreignSpells: number[];
    team?: number;
}
export interface Quests {
}
export interface State {
    world: World;
    zone: Zone;
    dungeons: Dungeons;
    elementalGuardian: ElementalGuardian;
    tutorial: StateTutorial;
    breadcrumbs: {
        [key: string]: number;
    };
    towers: Towers;
}
export interface Dungeons {
    crystal_caverns: CrystalCaverns;
}
export interface CrystalCaverns {
    persistentData: PersistentData;
    phaseData: Quests;
    runData: Quests;
}
export interface PersistentData {
    bossesStatus: number;
}
export interface ElementalGuardian {
    global: Global;
}
export interface Global {
    favoriteLoadoutIndex: number;
    teamCurrentHP: number[];
    torchesLit: number;
}
export interface Towers {
    earthtower: Earthtower;
}
export interface Earthtower {
    achievementPagesCount: number;
    wardenSaved: boolean;
    floors: number;
    boss: boolean;
    achievementMonstersCount: number;
}
export interface StateTutorial {
    "0": number;
}
export interface World {
    bounties: number[];
    dailyQuests: DailyQuests;
}
export interface DailyQuests {
    "0": DailyQuests0;
}
export interface DailyQuests0 {
    dateId: number;
    questId: number;
    questState: number;
}
export interface Zone {
    shipwreck_shore: ShipwreckShore;
    forest: Forest;
    lamplight: Lamplight;
    shiverchill: Shiverchill;
    skywatch: Skywatch;
    dyno: Dyno;
    house: ZoneHouse;
    academy: Academy;
    bonfire_spire: BonfireSpire;
}
export interface Academy {
    "0": The8_Class;
    quest: Quest;
}
export interface The8_Class {
    date: string;
    flags: number[];
    rewards: number;
}
export interface Quest {
    ID: number;
}
export interface BonfireSpire {
    "9": number;
    quest: Quest;
}
export interface Dyno {
    "0": The8_Class;
}
export interface Forest {
    "8": The8_Class;
    quest: Quest;
}
export interface ZoneHouse {
    "0": The8_Class;
    "6": number;
    quest: Quest;
}
export interface Lamplight {
    "2": string;
    "3": The8_Class;
    quest: Quest;
}
export interface ShipwreckShore {
    "16": number;
    quest: Quest;
}
export interface Shiverchill {
    "11": The8_Class;
    quest: Quest;
}
export interface Skywatch {
    "7": The8_Class;
    quest: Quest;
}
export interface PlayerDataTutorial {
    zones: Quests;
    menus: Menus;
}
export interface Menus {
    "14": number[];
}
