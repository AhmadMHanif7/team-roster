const promptManager = require('../index');

const generateManager = () => {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Manager</h5>
            <p class="card-text">Name: </p>
            <p class="card-text">ID:</p>
            <p class="card-text">Email:</p>
            <p class="card-text">Phone #:</p>
        </div>
    `
}


module.exports = templateData => {

    return `

    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Roster</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" 
        crossorigin="anonymous"/> 
        <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
        <header>
            <h1 class="page-title bg-danger text-white text-center">My Team</h1>
        </header>
    
        <div class="container">
            <div class="row">
                ${generateManager()}
                </div>
            </div>
        </div>
    
    
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" 
        crossorigin="anonymous">
        </script>
    </body>
    </html>
        
    `;
}