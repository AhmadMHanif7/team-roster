module.exports =  generateManager = (a,b,c,d) => {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Manager</h5>
            <p class="card-text">Name: ${a}</p>
            <p class="card-text">ID: ${b}</p>
            <p class="card-text">Email: ${c}</p>
            <p class="card-text">Phone #: ${d}</p>
        </div>
    `
}