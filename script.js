const container = document.querySelector(".container");
createPage(16)

const button = document.createElement('button');
button.textContent = "New Grid"
container.before(button);
button.addEventListener('click', ()=>{
    let n;
    do{
        n = prompt("Number of squares per side of the gird");
        n = Number(n);
    }
    while(Number.isNaN(n) || n <= 0);
    if(n>100)
        n = 100;
    container.textContent = ''
    createPage(n);
});

function createPage(n){

    for(let i=0;i<n;i++)
        {
            const rowDiv = document.createElement('div');
            rowDiv.setAttribute('class', 'row');
            container.appendChild(rowDiv);
            for(let j=0;j<n;j++)
            {
                const squareDiv = document.createElement('div');
                squareDiv.setAttribute('class', 'square');
                rowDiv.appendChild(squareDiv);
            }
        }
        
        const squares = document.querySelectorAll('.square');
        squares.forEach((square)=> {
            square.addEventListener('mouseenter', ()=>{
                square.style.backgroundColor = "black";
            });
        });        
}
