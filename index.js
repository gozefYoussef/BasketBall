const rscore = document.getElementById("rscore")
const lscore = document.getElementById("lscore")
let ls = 0
let rs = 0
 
function lplusOne(){
    ls += 1
    lscore.textContent = ls
}
function lplusTwo(){
    ls += 2
    lscore.textContent = ls
}
function lplusThree(){
    ls += 3
    lscore.textContent = ls
}
function rplusOne(){
    rs += 1
    rscore.textContent = rs
}
function rplusTwo(){
    rs += 2
    rscore.textContent = rs
}
function rplusThree(){
    rs += 3
    rscore.textContent = rs
}