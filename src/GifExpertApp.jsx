import { useState } from 'react'
import { GifGrid, AddCategorie } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Dragon ball']);

    const onAddCategorie = (newCategory) =>{
        if(categories.includes(newCategory)) return;
        setCategories( [newCategory, ...categories]) 
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategorie onNewCategory={ onAddCategorie }/>
            { categories.map( (category, i) => {
                return (
                    <GifGrid key={category} category={category}/>            
                )
            })}
        </>
    )
}
