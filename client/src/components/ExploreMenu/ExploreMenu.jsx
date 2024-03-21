import React from 'react';
import "./ExploreMenu.css";
import { menu_list as Menu_list } from "../../assets/assets";

function ExploreMenu({category, setCategory}) {
    return (
        <div className='explore' id='explore'>
            <h1>Explore our menu</h1>
            <p className='text'> Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time. </p>
            <div className="explore-menu-list">
                {
                    Menu_list.map((item, index) => {
                        return (
                            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className="explore-menu-item" key={index}>
                                <img className={category===item.menu_name?"active":""}src={item.menu_image} alt={item.menu_name}/>
                                <h3>{item.menu_name}</h3>
                            </div>
                        )
                    })
                }
            </div>
            <hr/>
        </div>
    );
}

export default ExploreMenu;
