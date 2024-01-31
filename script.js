const loadData =()=>{
 

    fetch("https://openapi.programming-hero.com/api/videos/category/1000")
    .then(res=>res.json())
    .then(data=>{console.log(data.data);
        displayAlldata(data.data);})
};


 const displayAlldata=(data)=>{
    const all_data = document.getElementById("Total-data");
    all_data.i=data.length
 }
 