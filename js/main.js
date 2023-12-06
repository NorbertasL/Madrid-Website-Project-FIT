function showMore(paragraph, link){
    paragraph.classList.toggle("hide");
    if(link.innerHTML === "Show More"){
        link.innerHTML = "Show Less"
    }else{
        link.innerHTML = "Show More"
    }
    
}