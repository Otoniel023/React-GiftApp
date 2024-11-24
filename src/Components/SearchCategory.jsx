import { useState } from "react";
import { ButtonUI } from "./ButtonUI";
//Componente
export const SearchCategory = ({setNewCategorie}) => {
    //UseState
    const [categoriesSearch, setCategoriesSearch] = useState("");

    //Handler on change
    const handlerSearchCategory = ({target}) => 
        {
            setCategoriesSearch(target.value);
        }
        
    const OnSaveCategory = (e) => 
        {
            e.preventDefault();
            if(categoriesSearch.trim().length < 2) return
            const categorieValue = categoriesSearch.trim();
            setNewCategorie( categorieValue );
            setCategoriesSearch("");
           
        }

    return (
        <div>
            <h1>GiftExpertApp</h1>
            <form onSubmit={OnSaveCategory}>
            <ButtonUI text={"Add category"} />
            <br />
            <input type="text"
                placeholder={"Search category, example: Dragon Ball"}
                value={categoriesSearch}
                onChange={handlerSearchCategory}
            />
            </form>
           
        </div>
    )
}

