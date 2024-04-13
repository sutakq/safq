import { useState } from "react";
import Banner from "../components/Banner/Banner"
import Button from "../components/Button/Button"
import Filter from "../components/Filter/Filter"; 
import Search from "../components/Search/Search"; 
import Card from "../components/Card/Card"

import Slider from "../components/Slider/Slider"

import {products } from "../data"

export default function HomePage() {
    const [query, setQuery] = useState("") 
    const [sorting, setSorting] = useState('default') 
 
    const onSortingChange = (event) => { 
        setSorting(event.target.value) 
    } 
 
    const onChangeQuery = (event) => { 
        setQuery(event.target.value) 
    } 
 
    const filteredProducts = products.filter((item) => 
 
        item.title.toLowerCase().includes(query.toLocaleLowerCase()) 
 
    ) 

    const sortProducts = (sorting, products) => {
        switch (sorting) {
            case 'priceAscending':
                return [...products].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            case 'priceDescending':
                return [...products].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            case 'nameA':
                return [...products].sort((a, b) => a.title.localeCompare(b.title));
            case 'nameZ':
                return [...products].sort((a, b) => b.title.localeCompare(a.title));
            default:
                return products;
        }
    };

    const fullSorting = sortProducts(sorting, filteredProducts) 
    return (
        <>

        <main>

        <Banner />
        <div className="section__title" >  <h1>Каталог</h1> </div>
      
 
 <div className="filtered"> 
 <Search query={query} onChangeQuery={onChangeQuery} /> 
     <Filter sorting={sorting} onSortingChange={onSortingChange} /> 

     

 </div> 

 <div className="cards" id="catalog"> 

     { 
         fullSorting.length ? ( 
             fullSorting.map((product, index) => ( 
                 <Card key={index} {...product} /> 
             )) 
         ) : ( 
             <h2>По вашему запросу {query} ничего не найдено!😞</h2> 
         )} 

 </div> 

       
        <div className="section__title"> <h1>Популярные товары</h1> </div>

        <div className="favorites" id="popular">

            <Slider />

        </div>

       

        </main>

        
        </>
    )
}