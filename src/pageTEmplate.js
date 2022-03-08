//create the team
const generateTeam = (team) => {
    // create the html for the manager
    const generateManager = (manager) => {
        return`
        <div class="card employee-card">
        <div class="card-header bg-primary text-light">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">Id: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number:${manager.getOfficeNumber()} </li>
            </ul>
        </div>
    </div>
     `
    };

     // create the html for the engineer
     const generateEngineer = (engineer) => {
        return `
        <div class="card employee-card">
        <div class="card-header bg-success text-light">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">Id:${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">Gihub: <a href="${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div> 
    `
    };

    //create the html for interns
    const generateIntern = (intern) => {
        return `
        <div class="card employee-card">
        <div class="card-header bg-secondary text-light">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
     `
    };

    // We create an empty array to generate and push each role
    const html = [];

    html.push(
      team
        .filter((employee) => employee.getRole() === "Manager")
        .map((manager) => generateManager(manager))
    );
    html.push(
      team
        .filter((employee) => employee.getRole() === "Engineer")
        .map((engineer) => generateEngineer(engineer))
        .join("")
    );
    html.push(
      team
        .filter((employee) => employee.getRole() === "Intern")
        .map((intern) => generateIntern(intern))
        .join("")
    );
  
    return html.join("");
  };
