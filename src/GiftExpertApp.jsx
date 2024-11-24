import React, { useState } from 'react'
import {GiftGrid, SearchCategory} from './Components'


export const GiftExpertApp = () => 
    {
        const [categories, setCategories] = useState([]);
        
       const onAddCategory = (newCategory) => {
            if (categories.includes(newCategory)) return;
            setCategories([...categories, newCategory]);
            
        }
        return (
            <>
                <SearchCategory setNewCategorie={ onAddCategory } />             
                    {
                        categories.map(category => (
                            <GiftGrid 
                            key={category} 
                            category={category} />
                        ))
                    }
            </>
        )
    }