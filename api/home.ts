export default async function home () {
    const { data, pending } = await useFetch('todos',{
        baseURL:'https://jsonplaceholder.typicode.com'
    });
    return {
        data,
        pending
    };
}
