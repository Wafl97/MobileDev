export type RootStackParamList = {
    Home: undefined;
    About: undefined;
    Settings: undefined;
    Movies: {
        query: string,
        rtn: boolean,
    };
    Actors: undefined;
    Movie: {
        id: string,
        title: string,
    }
};