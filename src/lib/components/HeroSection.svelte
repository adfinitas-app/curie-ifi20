<script>
    import StickyBanner from "$lib/components/StickyBanner.svelte";
    import { fly, fade } from "svelte/transition";
    import {projectIndexStore} from "$lib/utils/utils.js";

    let StickyBannerVisible = false;
    let bottomDivVisible = false;
    setTimeout(() => {
        bottomDivVisible = true;
    }, 500);
    setTimeout(() => {
        StickyBannerVisible = true;
    }, 2000);
</script>

<div style="background-image: url('/bg-mobile.jpg')" class="bg-cover bg-no-repeat  w-full h-screen md:hidden relative">
    {#if StickyBannerVisible}
        <StickyBanner/>
    {/if}
    {#if bottomDivVisible}
    <div in:fly={{x:-2000, y:100, duration:1000}} style="clip-path: polygon(0 28%, 100% 6%, 100% 83%, 0 100%);" class="w-full bg-[#4D54D6]/60 backdrop-blur-md z-10 h-[40rem] absolute -bottom-72"/>
        <div in:fly={{y: -200, duration:300, delay:1000}} class="absolute text-center flex flex-col items-center justify-center bottom-5 uppercase z-10 w-full text-white">
            <p class="text-[1.2rem] font-Raleway font-black px-3 mb-2">
                Votre don ouvre
                de <span class="underline-red ">nouvelles perspectives</span>
                de guérison aux patients.
                <br>
            </p>
            <p class="font-semibold font-Raleway text-[15px] mb-2 px-2" style="text-transform: none">
                Contre le cancer, investissez votre impôt dans l’innovation.
            </p>
            <a href="#Intro"
               on:click={()=> {projectIndexStore.set(0)}}>
                <svg class="mt-3 2xl:mt-6" xmlns="http://www.w3.org/2000/svg" width="94.94" height="21.854" viewBox="0 0 94.94 21.854">
                    <g id="Group_577" data-name="Group 577" transform="translate(-955.802 -686.267)">
                        <g id="Group_115" data-name="Group 115" transform="translate(956.534 688.129)">
                            <g id="Group_116" data-name="Group 116" transform="translate(0 0)">
                                <g id="Group_498" data-name="Group 498">
                                    <path id="Path_277" data-name="Path 277" d="M46.91,18.122,23.728,9,0,0" transform="translate(46.91 18.122) rotate(180)" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="4"/>
                                    <path id="Path_278" data-name="Path 278" d="M46.91,0,23.728,9.12,0,18.122" transform="translate(46.565 0)" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="4"/>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </a>
        </div>
        <div id="IntroMobile" class="absolute bottom-20"/>
        <div class="absolute -bottom-48 z-10 ">
            <p class="font-Lato text-white px-4  text-center">
                <b>Équipements innovants, prise en charge personnalisée, amélioration des traitements…</b>
                En soutenant l’Institut Curie avec un don déductible de votre impôt, vous financez des projets qui ouvrent de nouvelles perspectives de guérison pour chaque patient.
            </p>
        </div>
    {/if}
</div>

<div class="bg-[url('/header-desktop-test.png')] hidden bg-fixed bg-cover bg-no-repeat w-full h-screen relative md:flex items-center justify-center z-10 ">
    {#if StickyBannerVisible}
        <StickyBanner/>
    {/if}
    {#if bottomDivVisible}
        <div in:fly={{x:-2000, y:100, duration:1000}}  class="purple-polygone h-[45rem] xl:h-[47rem] 2xl:h-[60rem] absolute -bottom-60 bg-[#4D54D6]/60 backdrop-blur-md z-10"/>
        <p in:fly={{y: -200, duration:300, delay:1000}} class="text-[20px] xl:text-[25px] 2xl:text-[30px] 2xl:leading-[3rem] font-Raleway font-black text-white absolute text-center  bottom-20  2xl:bottom-40 uppercase z-10">
            Votre don ouvre de <span class="underline-red ">nouvelles perspectives</span><br/>
            de guérison aux patients.
            <br>
        </p>
        <svg class="absolute right-20 w-[5rem] xl:w-[8rem] lg:top-[30%] xl:top-[100px] 2xl:top-[30%]" xmlns="http://www.w3.org/2000/svg" width="165.641" height="157.966" viewBox="0 0 165.641 157.966">
            <g id="tampon_ifi" data-name="tampon ifi" transform="translate(-1239.669 -569.432) rotate(8)">
                <path id="Tracé_419" data-name="Tracé 419" d="M-2.183,18.171v-34.5H7.293v34.5Zm17.639,0v-34.5H39.121v8.261H24.932v5.734H36.5V5.342H24.932V18.171Zm29.593,0v-34.5h9.476v34.5ZM-23.478,57.89H-2.6v-4.9H-15.069c4.9-4.141,11.789-9.719,11.789-16.86,0-5.366-3.338-9.3-9.972-9.3-5.535,0-10.057,3.254-10.268,10.31h5.747c.042-3.254,1.606-5.282,4.437-5.282,2.916,0,4.141,1.859,4.141,4.606,0,5.662-7.31,11.113-14.282,17.029ZM1.114,42.509c0,9,2.7,15.719,11.409,15.719S23.932,51.51,23.932,42.509c0-8.916-2.7-15.592-11.409-15.592S1.114,33.594,1.114,42.509Zm16.986,0c0,5.493-.592,10.226-5.578,10.226S6.945,48,6.945,42.509c0-5.282.592-10.1,5.578-10.1S18.1,37.228,18.1,42.509ZM28.073,57.89H48.946v-4.9H36.481c4.9-4.141,11.789-9.719,11.789-16.86,0-5.366-3.338-9.3-9.972-9.3-5.535,0-10.057,3.254-10.268,10.31h5.747c.042-3.254,1.606-5.282,4.437-5.282,2.916,0,4.141,1.859,4.141,4.606,0,5.662-7.31,11.113-14.282,17.029Z" transform="translate(1373.018 435.904)" fill="#f60"/>
                <path id="Tracé_420" data-name="Tracé 420" d="M6991.476,2373.175h41.583v129.751h-41.583" transform="translate(-5563.814 -1980)" fill="none" stroke="#f60" stroke-width="9"/>
                <path id="Tracé_421" data-name="Tracé 421" d="M7033.059,2373.175h-41.583v129.751h41.583" transform="translate(-5661 -1980)" fill="none" stroke="#f60" stroke-width="9"/>
                <text id="_5" data-name="5" transform="translate(1425.246 487.56)" fill="#f60" font-size="43" font-family="Raleway-Bold, Raleway" font-weight="700"><tspan x="0" y="0">5</tspan></text>
            </g>
        </svg>


        {#if StickyBannerVisible}
            <div in:fade class="absolute w-full bg-transparent bottom-5 xl:bottom-5 2xl:bottom-10 flex flex-col items-center justify-center z-10">
                <p class="text-white lg:text-xl 2xl:text-[30px] font-Raleway font-semibold">Contre le cancer, investissez votre impôt dans l’innovation.</p>
                <a href="#Intro"
                   on:click={()=> {projectIndexStore.set(0)}}>
                    <svg class="mt-3 2xl:mt-6" xmlns="http://www.w3.org/2000/svg" width="94.94" height="21.854" viewBox="0 0 94.94 21.854">
                        <g id="Group_577" data-name="Group 577" transform="translate(-955.802 -686.267)">
                            <g id="Group_115" data-name="Group 115" transform="translate(956.534 688.129)">
                                <g id="Group_116" data-name="Group 116" transform="translate(0 0)">
                                    <g id="Group_498" data-name="Group 498">
                                        <path id="Path_277" data-name="Path 277" d="M46.91,18.122,23.728,9,0,0" transform="translate(46.91 18.122) rotate(180)" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="4"/>
                                        <path id="Path_278" data-name="Path 278" d="M46.91,0,23.728,9.12,0,18.122" transform="translate(46.565 0)" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="4"/>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </a>
                <div id="Intro" class="absolute -top-10"/>
                <p class="font-Lato text-white text-xl 2xl:text-[2xl] absolute top-[5rem] xl:top-[8rem] text-center w-[40rem] xl:w-[60rem] 2xl:w-[80rem]">
                    <b>Équipements innovants, programmes de recherche de pointe, amélioration des traitements…<br class="hidden 2xl:block"/></b>
                    En soutenant l’Institut Curie avec un don déductible de votre impôt, vous financez des projets qui <br class="hidden 2xl:block"/> ouvrent de <b>nouvelles perspectives de guérison</b> pour chaque patient.
                </p>
            </div>
        {/if}
    {/if}
</div>

<style>

    .purple-polygone {
        width: 100%;
        clip-path: polygon(0 52%, 100% 33%, 100% 84%, 0 100%);
    }

    .underline-red {
        position: relative;
        display: inline-block;
        text-decoration: none;
    }

    .underline-red::after {
        content: '';
        position: absolute;
        width: 0;
        height: 0.3rem;
        bottom: 0;
        border-radius: 1rem;
        left: 0;
        background-color: #FC6601;
        animation: underline 2s 2s forwards;
    }

    @keyframes underline {
        to {
            width: 100%;
        }
    }
</style>
