import React, { useRef } from 'react';

const HorizontalNavbar: React.FC = () => {
    const navbarRef = useRef<HTMLDivElement>(null);

    const handleItemClick = (index: number) => {
        if (navbarRef.current) {
            const itemWidth = navbarRef.current.children[0]?.clientWidth || 0;
            console.log({itemWidth})
            const scrollLeft = itemWidth * index;
            console.log({scrollLeft})
            navbarRef.current.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="navbar-container" 
        style={{display:"flex",flexWrap:"nowrap",whiteSpace:"nowrap",width:"100$",overflowX:"auto",gap:"1rem",padding:"1rem",backgroundColor:"lightblue"}} 
        ref={navbarRef}>
            {/* Render navbar items */}
            <div style={{padding:"10px",background:"purple",borderRadius:"5px"}} className="navbar-item" onClick={() => handleItemClick(0)}>Item 1</div>
            <div style={{padding:"10px",background:"purple",borderRadius:"5px"}} className="navbar-item" onClick={() => handleItemClick(1)}>Item 2</div>
            <div style={{padding:"10px",background:"purple",borderRadius:"5px"}} className="navbar-item" onClick={() => handleItemClick(2)}>Item 3</div>
            <div style={{padding:"10px",background:"purple",borderRadius:"5px"}} className="navbar-item" onClick={() => handleItemClick(3)}>Item 4</div>
            <div style={{padding:"10px",background:"purple",borderRadius:"5px"}} className="navbar-item" onClick={() => handleItemClick(4)}>Item 5</div>
            <div style={{padding:"10px",background:"purple",borderRadius:"5px"}} className="navbar-item" onClick={() => handleItemClick(5)}>Item 6</div>
            <div style={{padding:"10px",background:"purple",borderRadius:"5px"}} className="navbar-item" onClick={() => handleItemClick(6)}>Item 7</div>
            <div style={{padding:"10px",background:"purple",borderRadius:"5px"}} className="navbar-item" onClick={() => handleItemClick(7)}>Item 8</div>
            <div style={{padding:"10px",background:"purple",borderRadius:"5px"}} className="navbar-item" onClick={() => handleItemClick(8)}>Item 9</div>
            <div style={{padding:"10px",background:"purple",borderRadius:"5px"}} className="navbar-item" onClick={() => handleItemClick(9)}>Item 10</div>
            {/* Add more items as needed */}
        </div>
    );
};

export default HorizontalNavbar;
