export const fetchFromAPI = (fetchString: string) => {
    return new Promise<any>(async resolve => {
        const request = await fetch(fetchString);
        resolve(request.json())
    });
}