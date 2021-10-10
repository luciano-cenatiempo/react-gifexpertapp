import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['One Punch','Samurai X','Dragon Ball']

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = (serie)=>{
    //     // setCategories([...categories, 'NAruto'])
    //     setCategories(cats=>[...cats,'HunterXHunter'])
    // }

    return (
        <>
            <div className="main-container">


                <h2 className="app-title">GifExpertApp</h2>
                <hr />
                <AddCategory setCategories={setCategories} />
                <ol>
                    {
                        categories.map((category) =>
                            <GifGrid
                                category={category}
                                key={category}
                            />
                        )
                    }
                </ol>
            </div>
        </>
    )
}

export default GifExpertApp
