import { useState } from "react";
import { AddCategory, GifGrid } from "./components";



export const GifExpertApp = () => {
    
    const [categories,setCategories] = useState([ "dragon ball"]);
   
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        //categories.push(newCategory);
        //console.log(newCategory)
       setCategories([newCategory,...categories])
       // setCategories(cat => [...cat, "valorant"]);

    }
    
    return (
        <> 
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}

        <AddCategory 
        // setCategories={setCategories}
        onNewCategory ={ (event) => onAddCategory(event)}
        currentCategories={categories}
        
        />


        {/* Listado de gif */}
       
            {categories.map( category => {
                return (
                  <GifGrid 
                  key={category}
                  category={category}/>
                )
            })}
         

       
            {/* Gif Item */}
        </>
    )
}