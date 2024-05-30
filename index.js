let x = Math.floor(Math.random() * 6) + 1;
let y = Math.floor(Math.random() * 6) + 1;

let path1 = "./images/dice" + x.toString() + ".png";
let path2 = "./images/dice" + y.toString() + ".png";

document.querySelector(".dice .img1").setAttribute("src",path1);
document.querySelector(".dice .img2").setAttribute("src",path2);

if (x>y)
{
    document.querySelector("h1").textContent = "Player 1 Wins!";
}
else if (x<y)
{
    document.querySelector("h1").textContent = "Player 2 Wins!";
}
else
{
    document.querySelector("h1").textContent = "It's a Draw. Retry!";
}