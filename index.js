
var nv = document.getElementById('nav');
var toogle = document.getElementById('toogle');
var nav2 = document.getElementById('nav2');


nav.innerHTML = `
    <div class="px-20 px-10-lg normal px-0-md grid-container py-3 justify-between">
        <div class="">
            <a href="index.html"><p class="text-lg pl-2-md py-1-md normal">Variable code</p></a>
        </div>
        <div class="grid-container w-100-md items-center justify-center">
            <a class="w-100-md py-2-md" href="download.html"><p class="px-2">Download</p></a>
            <a class="w-100-md py-2-md" href="started.html"><p class="px-2">Docs</p></a>
            <a class="w-100-md py-2-md"><p class="px-2">Contribute</p></a>
            <a class="w-100-md py-2-md"><p class="px-2">Library</p></a>
            <a class="w-100-md py-2-md"><p class="px-2">News</p></a>
        </div>
        <div class="w-100-md py-1-md"><p class="pl-2-md"><i class="fas fa-moon"></i></p></div>
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
