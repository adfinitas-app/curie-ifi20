<script>
    import {passUtmParamsToLink} from "$lib/utils/links";

    let poppOpened = false;
</script>

<div class="w-screen relative flex flex-col items-center justify-center gap-5 backdrop-blur-3xl bg-transparent">
    <div class="mt-[20rem] md:mt-52 2xl:mt-60 bg-white">
        <p class="-z-10 text-center uppercase font-bold font-Raleway text-[20px] px-5 md:px-0 lg:text-2xl 2xl:text-3xl text-[#505050]">
            Contre le cancer, réduisez vos impôts<br class="hidden md:block">
            En finançant des projets porteurs d’espoir
        </p>
        <div class=" bg-[#FF6600] w-[5rem] h-1 rounded-2xl absolute left-0 right-0 mx-auto mt-2 md:mt-0"/>
        <div class="flex flex-col md:flex-row items-center justify-center md:gap-10 xl:gap-20 mt-10 md:mt-3 xl:mt-12">
            <div class="py-5 flex flex-col text-center items-center text-[#505050] relative justify-center w-[95%] md:w-auto md:h-[35rem] xl:h-[29rem] 2xl:h-[37rem]  xl:w-[25rem] lg:w-[25rem] 2xl:w-[40rem] rounded-2xl gap-5 md:gap-2 xl:gap-3 2xl:p-5" style="box-shadow: 0px 6px 40px rgba(0, 0, 0, 0.1);">
                <p class=" font-Raleway font-bold text-[20px] md:text-2xl 2xl:text-3xl">
                    Impôt<br/>
                    sur la Fortune Immobilière
                </p>
                <p class="font-bold text-[18px] 2xl:text-2xl font-Lato">
                    <span class="text-[#FF6600]">75 % du montant de votre don est <br/>déductible de votre lFI</span>, <br/>dans la limite de 50 000 €.
                </p>
                <p class="2xl:text-2xl">
                    Par exemple :
                </p>
                <img src="/graph1.png" class="w-[311px] md:w-[20rem] xl:w-[17rem] 2xl:w-[25rem]"/>
                <a target="_blank" href={passUtmParamsToLink("https://aider.curie.fr/ifi")} class="bg-[#FF6600] uppercase md:w-auto  w-[268px] text-[16px] md:text-sm 2xl:text-base text-white md:p-2 xl:py-2 xl:px-7 2xl:py-2 2xl:px-16 font-Raleway font-bold md:hover:px-20 transition-all absolute -bottom-14 xl:-bottom-16  2xl:-bottom-20">
                    JE FAIS UN DON<br/>
                    Déductible de<br/>
                    <span class="font-black">l’IFI</span>
                </a>
            </div>
            <div class="py-5 mt-20 md:mt-0  flex flex-col text-center items-center text-[#505050] relative justify-center w-[95%] md:w-auto md:h-[35rem] xl:h-[29rem] 2xl:h-[37rem]  xl:w-[25rem] lg:w-[25rem] 2xl:w-[40rem]  rounded-2xl gap-5 md:gap-2 xl:gap-3  2xl:p-5" style="box-shadow: 0px 6px 40px rgba(0, 0, 0, 0.1);">
                <p class=" font-Raleway font-bold text-[20px] md:text-2xl 2xl:text-3xl">
                    Impôt<br/>
                    sur le Revenu
                </p>
                <p class="font-bold text-[18px] 2xl:text-2xl font-Lato">
                    <span class="text-[#4D54D6]">66 % du montant de votre don est<br/> déductible de votre lR</span>,<br/> dans la limite de 20 % de<br/> votre revenu net imposable.
                </p>
                <p class="2xl:text-2xl">
                    Par exemple :
                </p>
                <img src="/graph2.png" class="w-[311px] md:w-[20rem] xl:w-[17rem] 2xl:w-[25rem]"/>
                <a target="_blank" href={passUtmParamsToLink("https://aider.curie.fr/don149")} class="bg-[#4D54D6]  text-center uppercase w-[268px] md:w-auto text-[16px] md:text-sm 2xl:text-base text-white md:p-2 xl:py-2 xl:px-7 2xl:py-2 2xl:px-16 font-Raleway font-bold md:hover:px-20 transition-all absolute -bottom-14 xl:-bottom-16  2xl:-bottom-20">
                    JE FAIS UN DON<br/>
                    Déductible de<br/>
                    <span class="font-black">L’impôt sur le revenu</span>
                </a>
            </div>
        </div>
    </div>
</div>
<div on:click={()=> poppOpened = true} class="hidden md:block md:my-[6rem] lg:my-[8rem] font-Lato font-bold text-xl 2xl:text-3xl text-center text-[#505050] underline cursor-pointer">
    <p>Je souhaite faire un don déductible de l’Impôt sur les Sociétés</p>
</div>

<div class="md:hidden mt-20 w-screen flex items-center justify-center">
    <button on:click={()=> poppOpened = true} class="font-bold font-Lato text-[16px] py-4 px-3 w-[80%] cursor-pointer bg-white border-2 border-[#505050] text-[#505050]">
        Je souhaite faire un don déductible
        de l’Impôt sur les Sociétés
    </button>
</div>


{#if poppOpened}
    <div class="fixed top-0 left-0 w-screen h-screen z-[70] backdrop-blur-xl bg-opacity-50 flex items-center justify-center" on:click={()=> poppOpened = false}>
        <button class="hidden md:block absolute right-[14rem] top-10 xl:right-[20rem] 2xl:top-32 hover:scale-125 transition-all" on:click={()=> poppOpened = false}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25.979" height="25.979" viewBox="0 0 25.979 25.979">
                <g id="Group_620" data-name="Group 620" transform="translate(-1219.086 -100.935)">
                    <line id="Line_1" data-name="Line 1" x2="23.151" y2="23.151" transform="translate(1220.5 102.349)" fill="black" stroke="#fff" stroke-width="4"/>
                    <line id="Line_2" data-name="Line 2" x1="23.151" y2="23.151" transform="translate(1220.5 102.349)" fill="black" stroke="#fff" stroke-width="4"/>
                </g>
            </svg>
        </button>
        <svg on:click={()=> poppOpened = false} xmlns="http://www.w3.org/2000/svg" class="md:hidden absolute bg-white z-50 rounded-full right-3 top-[1.25rem] w-7 h-7" viewBox="0 0 24 24">
            <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z">
            </path>
        </svg>
        <div class="bg-white flex flex-col items-center justify-center text-center rounded-2xl p-6 2xl:p-10 gap-3 xl:gap-5 relative" on:click|stopPropagation>
            <p class="font-Raleway font-bold text-2xl 2xl:text-4xl">
                Impôt<br/>
                sur les Sociétés
            </p>
            <p class="font-bold text-xl xl:text-2xl font-Lato">
                <span class="text-[#34B3C5]">60 % du montant de votre don est<br/> déductible de votre lS</span> dans la limite de 0,5 %<br/> de votre chiffre d’affaires hors taxes.
            </p>
            <p class="text-xl 2xl:text-2xl">
                Par exemple :
            </p>
            <img src="/graph3.png" class="w-[20rem] 2xl:w-[30rem]"/>
            <a target="_blank" href={passUtmParamsToLink("https://aider.curie.fr/is195")} class="text-center bg-[#34B3C5] uppercase w-[268px] 2xl:w-[400px] text-[16px] md:text-xs 2xl:text-xl text-white lg:px-2 xl:py-2 xl:px-7 2xl:py-3 2xl:px-16 font-Raleway font-bold lg:hover:w-[300px] 2xl:hover:w-[450px] transition-all absolute -bottom-14 md:-bottom-10 xl:-bottom-12  2xl:-bottom-20">
                JE FAIS UN DON<br/>
                Déductible de<br/>
                <span class="font-black">L’impôt sur les Sociétés</span>
            </a>
        </div>
    </div>
{/if}

