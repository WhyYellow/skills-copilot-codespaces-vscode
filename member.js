function skillsMember(){
    var skills = document.getElementById("skills");
    var member = document.getElementById("member");
    var memberList = document.getElementById("memberList");
    var skillsList = document.getElementById("skillsList");
    var memberButton = document.getElementById("memberButton");
    var skillsButton = document.getElementById("skillsButton");
    var memberListButton = document.getElementById("memberListButton");
    var skillsListButton = document.getElementById("skillsListButton");
    member.style.display = "block";
    skills.style.display = "none";
    memberList.style.display = "none";
    skillsList.style.display = "none";
    memberButton.style.backgroundColor = "#4CAF50";
    skillsButton.style.backgroundColor = "#2ECC71";
    memberListButton.style.backgroundColor = "#2ECC71";
    skillsListButton.style.backgroundColor = "#2ECC71";

    
}