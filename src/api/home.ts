export default async function home () {
    const runtimeConfig = useRuntimeConfig()
    const baseUrl = runtimeConfig.public.baseUrl;      
    const { data, pending } = await useFetch('home',{
        baseURL: baseUrl
    });
    
    return {
        data,
        pending
    };
}
