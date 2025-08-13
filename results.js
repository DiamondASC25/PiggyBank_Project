let allSubmissions = JSON.parse(localStorage.getItem("all_Submissions"));
const allDiv = document.getElementById("submissions_container");

for(let i = 0; i < allSubmissions.length; i++){
    const div = document.createElement("div");
    const item = allSubmissions[i];
    const date = new Date(item.date);
    
    const nameContainer = document.createElement("h2");
    nameContainer.id = "name_container_id";

    const scoreContainer = document.createElement("h2");
    scoreContainer.id = "score_container_id";

    const dateTxt = document.createElement("p");
    dateTxt.id = "dateTxt";

    nameContainer.innerHTML = "Name: " + item.name;
    scoreContainer.innerHTML = "Score: " + item.score;
    dateTxt.innerHTML = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear() + " | " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    
    
    
    div.id = "div_id" ;
    div.className = "div_class";
    div.style.width = "1000px";
    div.style.height = "100px";
    allDiv.appendChild(div); 
    div.appendChild(nameContainer);
    div.appendChild(scoreContainer);
    div.appendChild(dateTxt);
     
    
}

