export declare const init: () => void;
declare const Env: () => {
    PORT: string;
    URL: string;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_HOST: string;
    DB_PORT: string;
    DB_DATABASE: string;
};
export default Env;
