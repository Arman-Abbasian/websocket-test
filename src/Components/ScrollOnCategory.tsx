interface Catogory{
    id:number;
    category:string
};
interface Food{
    id:number;
    name:string;
    categoryId:number;
    image:string
}

const Categories:Catogory[]=[
    {id:1,category:"pizza"},
    {id:2,category:"burger"},
    {id:3,category:"soda"},
    {id:4,category:"salad"}
];
const foods:Food[]=[
    {id:1,name:"mashroom pizza",categoryId:1,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJiMGt-SI69kdqasJ_evpDrAnV_NmCvgkMw&s"},
    {id:2,name:"mashroom pizza",categoryId:1,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJiMGt-SI69kdqasJ_evpDrAnV_NmCvgkMw&s"},
    {id:3,name:"mashroom pizza",categoryId:1,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJiMGt-SI69kdqasJ_evpDrAnV_NmCvgkMw&s"},
    {id:4,name:"mashroom pizza",categoryId:2,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJiMGt-SI69kdqasJ_evpDrAnV_NmCvgkMw&s"},
    {id:5,name:"mashroom pizza",categoryId:2,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJiMGt-SI69kdqasJ_evpDrAnV_NmCvgkMw&s"},
    {id:6,name:"mashroom pizza",categoryId:2,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJiMGt-SI69kdqasJ_evpDrAnV_NmCvgkMw&s"},
    {id:7,name:"mashroom pizza",categoryId:2,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJiMGt-SI69kdqasJ_evpDrAnV_NmCvgkMw&s"},
    {id:8,name:"mashroom pizza",categoryId:3,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJiMGt-SI69kdqasJ_evpDrAnV_NmCvgkMw&s"},
    {id:9,name:"mashroom pizza",categoryId:3,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJiMGt-SI69kdqasJ_evpDrAnV_NmCvgkMw&s"},
    {id:10,name:"mashroom pizza",categoryId:3,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJiMGt-SI69kdqasJ_evpDrAnV_NmCvgkMw&s"},
    {id:11,name:"mashroom pizza",categoryId:4,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJiMGt-SI69kdqasJ_evpDrAnV_NmCvgkMw&s"},
    {id:12,name:"mashroom pizza",categoryId:4,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJiMGt-SI69kdqasJ_evpDrAnV_NmCvgkMw&s"},
    {id:13,name:"mashroom pizza",categoryId:4,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJiMGt-SI69kdqasJ_evpDrAnV_NmCvgkMw&s"}
];

function ScrollOnCategory() {
    const scrollHandler=()=>{
        
    }
  return (
    <div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"2rem"}}>
            {Categories.map((item)=>{
                return<p style={{padding:"5px 20px",backgroundColor:"lightblue"}} onClick={scrollHandler} key={item.id}>{item.category}</p>
            })}
        </div>
        <div>
            {foods.map(item=>{
                return <div key={item.id}>
                    <div>
                        <img src={item.image} alt={item.name}/>
                    </div>
                    <div>
                        <p>{item.name}</p>
                    </div>
                    </div>
            })}
        </div>
    </div>
  )
}

export default ScrollOnCategory