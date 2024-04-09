<script>
    import {onMount} from "svelte";
    let currentIndex = 0;
    let touchStart = 0;
    let touchEnd = 0;

    const images = ["/infos_svg/info1.svg", "/infos_svg/info2.svg", "/infos_svg/info3.svg", "/infos_svg/info4.svg"];
    const textes = ["Je consulte le guide fiscal", "Je télécharge le bulletin de soutien IFI", "Je télécharge le RIB pour faire un virement", "Je consulte le rapport annuel"];
    function next() {
        currentIndex = (currentIndex + 2) % images.length;
    }

    function previous() {
        currentIndex = (currentIndex - 2 + images.length) % images.length;
    }

    function next2() {
        if (currentIndex > 0) {
            currentIndex--;
        }
    }



    function previous2() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
        }
    }

    function handleTouchStart(event) {
        touchStart = event.touches[0].clientX;
    }

    function handleTouchMove(event) {
        touchEnd = event.touches[0].clientX;
    }
    function handleTouchEnd() {
        if (touchStart - touchEnd > 75) {
            next2();
        } else if (touchStart - touchEnd < -75) {
            previous2();
        }
    }
</script>


<p class="mt-10 mb-5 md:mb-0 2xl:mt-20 font-Raleway font-black text-2xl 2xl:text-4xl text-[#505050] text-center">
    INFOS PRATIQUES
</p>

<div class="md:hidden flex flex-row justify-center items-start h-40 relative mt-3 w-screen">
    {#if currentIndex > 0}
        <button class="absolute left-3 top-0 bottom-0 my-auto" on:click={previous}>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" class="rotate-180">
                <g id="Group_754" data-name="Group 754" transform="translate(-2692 360) rotate(-90)">
                    <circle id="Ellipse_40" data-name="Ellipse 40" cx="17" cy="17" r="17" transform="translate(326 2692)" fill="#505050"/>
                    <path id="Path_638" data-name="Path 638" d="M14162.583,5344l8.7,8.7,8.7-8.7" transform="translate(-13828.284 -2637)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"/>
                </g>
            </svg>
        </button>
    {/if}
    {#if currentIndex > 1}
    <a href="https://ifi.curie.fr/images/Curie_rib.pdf?_cchid=a200357f54bc77577d784c4e4414e50e" target="_blank" class="w-1/2 flex flex-col items-center justify-center">
        <img class="w-28 h-28 object-cover" src={images[currentIndex]} alt="image 1">
        <p class="text-center font-Raleway font-bold text-[16px] px-5">
            {textes[currentIndex]}
        </p>
    </a>
    {:else}
        <div class="w-1/2 flex flex-col items-center justify-center">
            <img class="w-28 h-28 object-cover" src={images[currentIndex]} alt="image 1">
            <p class="text-center font-Raleway font-bold text-[16px] px-5">
                {textes[currentIndex]}
            </p>
        </div>
    {/if}

    <div class=" w-1/2 flex flex-col items-center justify-center">
        <img class="w-28 h-28 object-cover" src={images[currentIndex + 1]} alt="image 1">
        <p class="text-center font-Raleway font-bold text-[16px] px-5">
            {textes[currentIndex + 1]}
        </p>
    </div>

    {#if currentIndex < 2}
        <button class="absolute right-3 top-0 bottom-0 my-auto" on:click={next}>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
                <g id="Group_754" data-name="Group 754" transform="translate(-2692 360) rotate(-90)">
                    <circle id="Ellipse_40" data-name="Ellipse 40" cx="17" cy="17" r="17" transform="translate(326 2692)" fill="#505050"/>
                    <path id="Path_638" data-name="Path 638" d="M14162.583,5344l8.7,8.7,8.7-8.7" transform="translate(-13828.284 -2637)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"/>
                </g>
            </svg>
        </button>
    {/if}
</div>

<div class="hidden md:flex flex-row items-center justify-center gap-20  mt-10 2xl:mt-20">
    <div class="flex flex-col items-center justify-center gap-2">
        <svg id="Group_450" data-name="Group 450" xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 2xl:w-40 2xl:h-40" viewBox="0 0 138 138">
            <circle id="Ellipse_22" data-name="Ellipse 22" cx="69" cy="69" r="69" fill="#9b999b"/>
            <g id="Group_417" data-name="Group 417" transform="translate(13.275 14.284)">
                <circle id="Ellipse_10" data-name="Ellipse 10" cx="56.648" cy="56.648" r="56.648" transform="translate(0 0)" fill="#505050"/>
                <g id="Group_416" data-name="Group 416" transform="translate(32.432 26.811)">
                    <path id="Path_312" data-name="Path 312" d="M958.478,228H915.655a2.8,2.8,0,0,0-2.8,2.8v54.068a2.8,2.8,0,0,0,2.8,2.8h29.484l16.144-16.144V230.8A2.8,2.8,0,0,0,958.478,228Z" transform="translate(-912.85 -228)" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                    <path id="Path_313" data-name="Path 313" d="M935.034,274.052l16.144-16.144H937.838a2.8,2.8,0,0,0-2.8,2.8Z" transform="translate(-902.746 -214.378)" fill="#f60" stroke="#f60" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                </g>
            </g>
            <g id="Group_446" data-name="Group 446" transform="translate(53.621 47.383)">
                <text id="_" data-name="€" transform="translate(14 34)" fill="#f60" font-size="36" font-family="Raleway-Bold, Raleway" font-weight="700"><tspan x="-14.367" y="0">€</tspan></text>
            </g>
        </svg>
        <p class="text-base 2xl:text-2xl font-Raleway font-bold text-[#505050] text-center">
            Je consulte<br/>
            le guide fiscal
        </p>
    </div>
    <a class="gap-2 flex flex-col items-center justify-center">
        <svg id="Group_449" data-name="Group 449" xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 2xl:w-40 2xl:h-40" viewBox="0 0 134.832 134.832">
            <circle id="Ellipse_23" data-name="Ellipse 23" cx="67.416" cy="67.416" r="67.416" fill="#9b999b"/>
            <g id="Group_447" data-name="Group 447" transform="translate(12.075 12.075)">
                <circle id="Ellipse_10" data-name="Ellipse 10" cx="55.342" cy="55.342" r="55.342" fill="#505050"/>
                <g id="Group_416" data-name="Group 416" transform="translate(32.525 28.081)">
                    <path id="Path_312" data-name="Path 312" d="M957.425,228H915.59a2.739,2.739,0,0,0-2.74,2.739V283.56a2.739,2.739,0,0,0,2.74,2.739h28.8l15.772-15.772V230.739A2.739,2.739,0,0,0,957.425,228Z" transform="translate(-912.85 -228)" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                    <path id="Path_313" data-name="Path 313" d="M935.034,273.68l15.772-15.772H937.773a2.739,2.739,0,0,0-2.739,2.74Z" transform="translate(-903.49 -215.382)" fill="#f60" stroke="#f60" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                </g>
            </g>
            <path id="Path_441" data-name="Path 441" d="M13.8,7.452c6.049-11.336,16.931-.889,13.433,6.373S13.8,29.924,13.8,29.924,4.51,22.418.371,13.825,7.075-3.681,13.8,7.452Z" transform="translate(54.596 52.585)" fill="#f60"/>
        </svg>
        <p class="text-base 2xl:text-2xl font-Raleway font-bold text-[#505050] text-center">
            Je télécharge le<br/>
            bulletin de soutien IFI
        </p>
    </a>
    <a href="https://ifi.curie.fr/images/Curie_rib.pdf?_cchid=a200357f54bc77577d784c4e4414e50e" target="_blank" class="flex flex-col items-center justify-center gap-2">
        <svg id="Group_635" data-name="Group 635" xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 2xl:w-40 2xl:h-40" viewBox="0 0 138 138">
            <g id="Group_581" data-name="Group 581">
                <circle id="Ellipse_23" data-name="Ellipse 23" cx="69" cy="69" r="69" fill="#9b999b"/>
                <g id="Group_447" data-name="Group 447" transform="translate(12.358 12.359)">
                    <ellipse id="Ellipse_10" data-name="Ellipse 10" cx="56.642" cy="56.642" rx="56.642" ry="56.642" fill="#505050"/>
                    <g id="Group_416" data-name="Group 416" transform="translate(33.289 28.74)">
                        <path id="Path_312" data-name="Path 312" d="M958.473,228H915.654a2.8,2.8,0,0,0-2.8,2.8v54.062a2.8,2.8,0,0,0,2.8,2.8h29.481l16.142-16.142V230.8A2.8,2.8,0,0,0,958.473,228Z" transform="translate(-912.85 -228)" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                        <path id="Path_313" data-name="Path 313" d="M935.034,274.05l16.143-16.142H937.837a2.8,2.8,0,0,0-2.8,2.8Z" transform="translate(-902.749 -214.383)" fill="#f60" stroke="#f60" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                    </g>
                </g>
                <g id="Rectangle_528" data-name="Rectangle 528" transform="translate(49.136 48.634)" fill="#fff" stroke="#f60" stroke-width="1">
                    <rect width="41.818" height="8.364" rx="1" stroke="none"/>
                    <rect x="0.5" y="0.5" width="40.818" height="7.364" rx="0.5" fill="none"/>
                </g>
                <g id="Rectangle_531" data-name="Rectangle 531" transform="translate(49.136 72.679)" fill="#fff" stroke="#f60" stroke-width="1">
                    <rect width="41.818" height="8.364" rx="1" stroke="none"/>
                    <rect x="0.5" y="0.5" width="40.818" height="7.364" rx="0.5" fill="none"/>
                </g>
                <g id="Rectangle_532" data-name="Rectangle 532" transform="translate(49.136 85.225)" fill="#fff" stroke="#f60" stroke-width="1">
                    <rect width="18.818" height="8.364" rx="1" stroke="none"/>
                    <rect x="0.5" y="0.5" width="17.818" height="7.364" rx="0.5" fill="none"/>
                </g>
                <g id="Rectangle_529" data-name="Rectangle 529" transform="translate(49.136 61.179)" fill="#fff" stroke="#f60" stroke-width="1">
                    <rect width="18.818" height="8.364" rx="1" stroke="none"/>
                    <rect x="0.5" y="0.5" width="17.818" height="7.364" rx="0.5" fill="none"/>
                </g>
                <g id="Rectangle_530" data-name="Rectangle 530" transform="translate(72.136 61.179)" fill="#fff" stroke="#f60" stroke-width="1">
                    <rect width="18.818" height="8.364" rx="1" stroke="none"/>
                    <rect x="0.5" y="0.5" width="17.818" height="7.364" rx="0.5" fill="none"/>
                </g>
            </g>
        </svg>
        <p class="text-base 2xl:text-2xl font-Raleway font-bold text-[#505050] text-center">
            Je télécharge le RIB<br/>
            pour faire un virement
        </p>
    </a>
    <div class="flex flex-col items-center justify-center gap-2">
        <svg id="Group_636" data-name="Group 636" xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 2xl:w-40 2xl:h-40" viewBox="0 0 138 138">
            <circle id="Ellipse_24" data-name="Ellipse 24" cx="69" cy="69" r="69" fill="#9b999b"/>
            <g id="Group_451" data-name="Group 451" transform="translate(11.719 11.784)">
                <ellipse id="Ellipse_10" data-name="Ellipse 10" cx="57.218" cy="57.218" rx="57.218" ry="57.218" fill="#505050"/>
                <g id="Group_416" data-name="Group 416" transform="translate(33.628 29.033)">
                    <path id="Path_312" data-name="Path 312" d="M958.937,228H915.683a2.832,2.832,0,0,0-2.833,2.831v54.612a2.832,2.832,0,0,0,2.833,2.831h29.78l16.307-16.307V230.831A2.832,2.832,0,0,0,958.937,228Z" transform="translate(-912.85 -228)" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                    <path id="Path_313" data-name="Path 313" d="M935.034,274.215l16.307-16.307H937.866a2.832,2.832,0,0,0-2.832,2.833Z" transform="translate(-902.421 -213.94)" fill="#f60" stroke="#f60" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                </g>
            </g>
            <rect id="Rectangle_482" data-name="Rectangle 482" width="7.855" height="29.455" transform="translate(53.648 50.098)" fill="#f60"/>
            <rect id="Rectangle_483" data-name="Rectangle 483" width="7.855" height="17.673" transform="translate(66.043 62.239)" fill="#ffb584"/>
            <rect id="Rectangle_484" data-name="Rectangle 484" width="7.855" height="25.528" transform="translate(78.438 54.154)" fill="#f60"/>
        </svg>
        <p class="text-base 2xl:text-2xl font-Raleway font-bold text-[#505050] text-center">
            Je consulte<br/>
            le rapport annuel
        </p>
    </div>
</div>
<div class="md:mt-20 mt-10 bg-infos bg-cover bg-no-repeat w-screen md:h-[30rem] gap-10 md:gap-0 py-20 md:py-0 flex flex-col md:flex-row items-center justify-center">
    <div class="flex flex-col font-Raleway text-white items-center justify-center text-center w-full md:w-1/3">
        <p class="text-white text-5xl 2xl:text-7xl font-black">
            88<br/>
        </p>
        <p class="text-base 2xl:text-2xl font-extrabold">
            équipes de recherche<br/> mobilisées contre le cancer
        </p>
    </div>
    <div class="flex flex-col font-Raleway text-white items-center justify-center text-center w-full md:w-1/3">
        <p class="text-white text-5xl 2xl:text-7xl font-black">
            1<sup>er</sup><br/>
        </p>
        <p class="text-base 2xl:text-2xl font-extrabold">
            centre en France de lutte<br/>
            contre le cancer en nombre<br/>
            de patients traités
        </p>
    </div>
    <div class="flex flex-col font-Raleway text-white items-center justify-center text-center w-full md:w-1/3">
        <p class="text-white text-5xl 2xl:text-7xl font-black">
            55 000<br/>
        </p>
        <p class="text-base 2xl:text-2xl font-extrabold">
            patients traités
            <br/> par an
        </p>
    </div>
</div>

<style lang="scss">
    .bg-infos {
        background-image: url("/footer-img-desktop.png");
    }
    @media (max-width: 768px) {
        .bg-infos {
            background-image: url("/info-bg-mobile.png");
        }
    }

    .content-wrapper{
        width: 100%;
        max-width: 500px;
        min-height: 600px;
        background-color: gray;
        margin: 0 auto;
        padding: 15px;
    }

    .slider-title-wrapper{
        padding: 15px;
        .slider-title{
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
        }
    }

    .slider-container{
        overflow: hidden;
        .slider-wrapper{
            display: block;
            white-space: nowrap;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            -ms-overflow-style: -ms-autohiding-scrollbar;
            margin-bottom: -20px;
            padding-bottom: 30px;
            padding-left: 15px;
            .slider-item{
              padding: 10px;
                justify-content: center;
                align-items: center;
                width: 40%;
                 margin-right: 20px;
                display: inline-flex;
                border-radius: 5px;
                &:last-child{
                    margin-right: 15px;
                }
            }
        }
    }
</style>
