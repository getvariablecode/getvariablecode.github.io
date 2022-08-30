var sd = document.getElementById('sidebar');
var nv = document.getElementById('nav');
var foot = document.getElementById('footer');
var toogle = document.getElementById('toogle');
var nav2 = document.getElementById('nav2');
var overview = document.getElementById('overview');
var overviewToogle = document.getElementById('overview-toogle');


toogle.addEventListener('click', ()=>{
    if (nav.classList.contains('grid-container-md')){
        nav.classList.remove('grid-container-md');
        nav2.classList.add('grid-container-md');
    } else {
        nav.classList.add("grid-container-md");
        nav2.classList.remove("grid-container-md");
    }
});


overviewToogle.addEventListener('click', ()=>{
    if (overview.classList.contains('d-none-md')){
        overview.classList.remove("d-none-md");
        overviewToogle.classList.add('text-red-500');
        overviewToogle.classList.add('bold');
        overviewToogle.classList.remove('b-gray-500');
    } else {
        overview.classList.add("d-none-md");
        overviewToogle.classList.remove('text-red-500');
        overviewToogle.classList.remove('bold');
        overviewToogle.classList.add('b-gray-500');

    }

    console.log('clicked');
});


function navBar(){
    nv.innerHTML = `
        <div class="px-20 px-10-lg normal px-0-md grid-container py-3 justify-between">
            <div class="">
                <a href="index.html"><p class="text-lg pl-2-md py-1-md normal">Variable code</p></a>
            </div>
            <div class="grid-container w-100-md items-center justify-center">
                <a class="w-100-md py-2-md" href="download.html"><p class="px-2">Download</p></a>
                <a class="w-100-md py-2-md"><p class="px-2">Contribute</p></a>
                <a class="w-100-md py-2-md"><p class="px-2">Library</p></a>
                <a class="w-100-md py-2-md"><p class="px-2">News</p></a>
            </div>
            <div class="w-100-md py-1-md"><p class="pl-2-md"><i class="fas fa-moon"></i></p></div>
        </div>
    `;
}


function render(){
    sd.innerHTML = `
        <div class="pl-7 pt-2 sd">
            <a href="started.html"><p>Get started.</p></a>
            <a href="basics.html"><p class="">Basics</p></a>
            <div class="pl-2 inner">
                <a href="basics.html#comments"><p class="">1. Comments</p></a>
                <a href="basics.html#datatypes"><p class="">2. Datatypes</p></a>
                <a href="basics.html#variables"><p class="">3. Variables</p></a>
                <a href="basics.html#functions"><p class="">4. Functions</p></a>
                <a href="basics.html#classes"><p class="">5. Classes</p></a>
                <a href="basics.html#while"><p class="">6. Whileloop</p></a>
                <a href="basics.html#for"><p class="">7. Forloop</p></a>
            </div>
            <a href="modules.html"><p class="">Modules</p></a>
            <div class="pl-2 inner">
                <a href="Path.html"><p class="">1. Path</p></a>
                <a href="File.html"><p class="">2. File</p></a>
                <a href="Time.html"><p class="">3. Time</p></a>
                <a href="Environ.html"><p class="">4. Environ</p></a>
                <a href="Utils.html"><p class="">5. Utils</p></a>
                <a href="Socket.html"><p class="">6. Socket</p></a>
                <a href="Net.html"><p class="">7. Net</p></a>
                <a href="Thread.html"><p class="">8. Thread</p></a>
                <a href="Random.html"><p class="">9. Random</p></a>
                <a href="Math.html"><p class="">10. Math</p></a>
            </div>
        </div>
    `;
}

function Overview(){
    overview.innerHTML = `
        <div class="pl-2 py-4 bg-white sd sd2">
            <a href="started.html"><p class="page">Get started.</p></a>
            <a href="basics.html"><p class="page">Basics</p></a>
            <div class="pl-2 inner2">
                <a href="basics.html#comments"><p class="">Comments</p></a>
                <a href="basics.html#datatypes"><p class="">Datatypes</p></a>
                <a href="basics.html#variables"><p class="">Variables</p></a>
                <a href="basics.html#functions"><p class="">Functions</p></a>
                <a href="basics.html#classes"><p class="">Classes</p></a>
                <a href="basics.html#while"><p class="">Whileloop</p></a>
                <a href="basics.html#for"><p class="">Forloop</p></a>
            </div>
            <a href="modules.html"><p class="page">Modules</p></a>
            <div class="pl-2 inner2">
                <a href="Path.html"><p class="">Path</p></a>
                <a href="File.html"><p class="">File</p></a>
                <a href="Time.html"><p class="">Time</p></a>
                <a href="Environ.html"><p class="">Environ</p></a>
                <a href="Utils.html"><p class="">Utils</p></a>
                <a href="Socket.html"><p class="">Socket</p></a>
                <a href="Net.html"><p class="">Net</p></a>
                <a href="Thread.html"><p class="">Thread</p></a>
                <a href="Random.html"><p class="">Random</p></a>
                <a href="Math.html"><p class="">Math</p></a>
            </div>
        </div>
    `
}

function footer(){
    foot.innerHTML = `
            <div class="py-3 grid-container justify-around">
                <a><p class=""></p></a>
                <p class="">Variable Code</p>
            </div>
    `;
}

navBar();
render();

footer();
Overview()