<script>
    import StickyBanner from "$lib/components/StickyBanner.svelte";
    import { fly, fade } from "svelte/transition";

    let StickyBannerVisible = false;
    let bottomDivVisible = false;
    setTimeout(() => {
        bottomDivVisible = true;
    }, 500);
    setTimeout(() => {
        StickyBannerVisible = true;
    }, 2000);
</script>

<div class="bg-[url('/Header-bg.png')] bg-fixed bg-cover bg-no-repeat h-screen w-screen relative flex items-center justify-center z-10 ">
    {#if StickyBannerVisible}
        <StickyBanner/>
    {/if}
    {#if bottomDivVisible}
        <div in:fly={{x:0, duration:500}}  class="purple-polygone lg:h-[45rem] xl:h-[60rem] absolute -bottom-60 bg-[#4D54D6]/60 backdrop-blur-md z-10"/>
        <p in:fly={{y: -200, duration:300, delay:1000}} style="line-height: 3rem" class="lg:text-2xl xl:text-[44px] font-Raleway font-black text-white absolute text-center lg:bottom-20  xl:bottom-40 uppercase z-10">
            Votre don ouvre de <span class="underline-red ">nouvelles perspectives</span><br/>
            de guérison aux patients.
            <br>
        </p>
        {#if StickyBannerVisible}
            <div in:fade class="absolute bg-transparent lg:bottom-5 xl:bottom-10 flex flex-col items-center justify-center gap-3 xl:gap-6 z-10">
                <p class="text-white lg:text-xl xl:text-[36px] font-Raleway font-semibold">Contre le cancer, investissez votre impôt dans l’innovation.</p>
                <a href="#Intro">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="94.94" height="21.854" viewBox="0 0 94.94 21.854">
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
                <p class="font-Lato text-white text-xl xl:text-2xl 2xl:text-[30px] absolute lg:top-[5rem] xl:top-[8rem] text-center lg:w-[40rem] xl:w-[60rem] 2xl:w-[80rem]">
                    <b>Équipements innovants, prise en charge personnalisée, amélioration des traitements…<br/></b>
                    En soutenant l’Institut Curie avec un don déductible de votre impôt, vous financez des projets qui ouvrent de <b>nouvelles perspectives de guérison</b> pour chaque patient.
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
