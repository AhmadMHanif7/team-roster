module.exports =  generateEngineer = (a,b,c,d) => {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Engineer</h5>
            <p class="card-text">Name: ${a}</p>
            <p class="card-text">ID: ${b}</p>
            <p class="card-text">Email: ${c}</p>
            <p class="card-text">GitHub: ${d}</p>
        </div>
    `
}