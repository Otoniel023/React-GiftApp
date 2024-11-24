import { useFechtGifts } from "../hooks/useFetchGifts";
import { GiftItem } from "./GiftItem";


export const GiftGrid = ({category}) => 
    {
        const { gifts, isLoading } = useFechtGifts(category);

        return (
            <>
                    <h3>{ category }</h3>
                    <div className="card-grid">
                        {
                            isLoading && <p>Loading...</p>
                        }
                    {
                        gifts.map(image => (
                            <GiftItem 
                            key={image.id}
                            {...image} />
                        ))
                    }
                    </div>
            </>
            
        )
    };