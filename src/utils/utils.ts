export const getFullYear = (data : string) => {

    const date = new Date(data);

    return date.getFullYear();
}