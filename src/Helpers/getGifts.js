export const getGifts =  async (keyword) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=79msALWxu8MB9Mg1lOGUaIdQbNfHC6hI&q=${keyword}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifts = data.map(gift => ({
        id: gift.id,
        title: gift.title,
        url: gift.images.original.url
    }))

    return gifts;
}