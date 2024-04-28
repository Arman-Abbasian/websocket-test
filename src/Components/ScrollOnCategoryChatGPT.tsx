import React, { useState } from 'react';

interface FoodCategory {
    id: string;
    name: string;
    foods: string[];
}

const foodCategories: FoodCategory[] = [
    {
        id: 'category1',
        name: 'Category 1',
        foods: ['Food A', 'Food B', 'Food C','Food C','Food C','Food C','Food C','Food C','Food C','Food C','Food C']
    },
    {
        id: 'category2',
        name: 'Category 2',
        foods: ['Food D', 'Food E', 'Food F','Food F','Food F','Food F','Food F','Food F','Food F']
    },
    {
        id: 'category3',
        name: 'Category 3',
        foods: ['Food G', 'Food H', 'Food I','Food I','Food I','Food I','Food I','Food I']
    },
    {
        id: 'category4',
        name: 'Category 4',
        foods: ['Food J', 'Food K', 'Food L','Food L','Food L','Food L',]
    }
];
type LiteralCategoryType='category1'|'category2'|'category3'|'category4';

const FoodCategories: React.FC = () => {
    const [selectedCategory,setSelectedCategory]=useState<LiteralCategoryType>('category1');
    const handleClick = (categoryId: LiteralCategoryType) => {
        setSelectedCategory(categoryId)
        const section = document.getElementById(categoryId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div style={{width:"100%"}}>
            <div style={{position: "sticky",top: "0px",width: "100%",backgroundColor: "grey",padding:"1rem",zIndex: "10",boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            color:"black"}}>
            {/* Render food categories */}
            <div style={{display: "flex",flexWrap:"nowrap",whiteSpace:"nowrap",gap:"1rem",width: "100%",overflowX: "auto"}}>
            {foodCategories.map(category => (
                <div key={category.id} style={{backgroundColor:selectedCategory===category.id?"red":""}}  className="category" onClick={() => handleClick(category.id as LiteralCategoryType)}>
                    {category.name}
                </div>
            ))}
            </div>
            </div>

            {/* Render food list */}
            <div className="food-list">
                {foodCategories.map(category => (
                    <div key={category.id} style={{paddingTop:"60px"}}>
                        <h2 id={category.id}>{category.name} Foods</h2>
                        <ul style={{display:"flex",flexDirection:"column",gap:"35px"}}>
                            {category.foods.map(food => (
                                <li key={food}>{food}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FoodCategories;
