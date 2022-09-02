
var nv = document.getElementById('nav');
var toogle = document.getElementById('toogle');
var nav2 = document.getElementById('nav2');


nav.innerHTML = `
    <div class="grid-container px-2 py-1 align-items-center justify-between">
        <div class="">
            <a href="index.html"><p class="title py-3">Variable code</p></a>
        </div>
        <div class="grid-container w-100-md items-center justify-center">
            <a class="w-100-md py-2-md" href="download.html"><p class="px-2">Download</p></a>
            <a class="w-100-md py-2-md" href="started.html"><p class="px-2">Docs</p></a>
            <a class="w-100-md py-2-md"><p class="px-2">Contribute</p></a>
            <a class="w-100-md py-2-md"><p class="px-2">Library</p></a>
            <a class="w-100-md py-2-md"><p class="px-2">News</p></a>
        </div>
        <div class="w-100-md py-1-md">
            <a href="download.html"><p class="py-2 px-4 blue text-white">install vc now</p></a>
        </div>
    </div>
`;


toogle.addEventListener('click', ()=>{
    if (nav.classList.contains('grid-container-md')){
        nav.classList.remove('grid-container-md');
        nav2.classList.add('grid-container-md');
    } else {
        nav.classList.add("grid-container-md");
        nav2.classList.remove("grid-container-md");
    }
});
