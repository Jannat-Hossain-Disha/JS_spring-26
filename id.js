const allHeadings=document.getElementsByTagName("h1")
for(const h of allHeadings)
{
    console.log(h.innerText)
    console.log(h)
    h.innerText="Changed by Tag"
    console.log(h.innerText)
}

const number=document.getElementById("num")
number.innerText="changed by id name"

const places=document.getElementsByClassName("place")
for(const p of places)
{
    console.log(p)
    console.log(p.innerText)
}