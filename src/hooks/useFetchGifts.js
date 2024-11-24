import { useEffect, useState } from 'react';
import { getGifts } from '../Helpers/getGifts';

export const useFechtGifts = (category) => {
    const [gifts, setGifts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

        const onGetGifts = async (category) => 
            {
                const gifts = await getGifts(category);
                setGifts(gifts);
                setIsLoading(false);
                console.log(gifts);
            }
        

        useEffect(() => {
            onGetGifts(category);
        }, []);

    return {
        gifts,
        isLoading
    }
    
}