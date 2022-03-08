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

    // We create an empty variable array to generate and push each role
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

  //export the function to generate entire html
  module.exports = (team) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My profile Generator</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"/>
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet"/>
    </head>
    
    <body>
         
        <div class="container-fluid">
            <div class="row">
                <div class="col-12  jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        
        <div class="container my-lg-5">
            <div class="row">
                <div class=" col-12 team-area d-flex justify-content-center">
                ${generateTeam(team)}
          </div>      
      </div>
  </div>
  </body>
  </html>
      `;
  };
   
