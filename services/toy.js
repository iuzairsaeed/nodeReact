let kids = 3;
let toys = 5;
let start = 3;
let kid = 0;
for(let i = 1; i<=toys; i++){
    if(start <= kids){
        kid = start%3+1;
    } else {
        kid = "Invalid Position"
    }
}
module.exports = {
    kid:kid
};