export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=TjZ4HRT3GiHSTt07HFoh1ZWlxqsG5aaH&q=${ category }&limit=10`;
    const resp = await fetch(url);
    const text = await resp.text();
    const { data } = JSON.parse(text);
    
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs
}