<script>
    let poppOpened = false;
</script>

<div id="Intro" class="w-screen relative flex items-center justify-center ">
    <div class="lg:top-[15rem] xl:top-[22rem] absolute flex flex-col items-center justify-center gap-5">
        <p class="-z-10 text-center uppercase font-bold font-Raleway lg:text-2xl xl:text-4xl text-[#505050]">
            Contre le cancer, réduisez vos impôts<br>
            En finançant des projets porteurs d’espoir
        </p>
        <div class="-z-10 bg-[#FF6600] w-[5rem] h-1 rounded-2xl"/>
        <div class="flex flex-row items-center justify-center gap-10 xl:gap-20  mt-10">
            <div class="flex flex-col text-center items-center text-[#505050] relative justify-center h-[35rem] xl:w-[50%] xl:h-[45rem]  rounded-2xl gap-5 p-5" style="box-shadow: 0px 6px 40px rgba(0, 0, 0, 0.1);">
                <p class=" font-Raleway font-bold text-2xl xl:text-4xl">
                    Impôt<br/>
                    sur la Fortune Immobilière
                </p>
                <p class="font-bold text-2xl font-Lato">
                    <span class="text-[#FF6600]">75 % du montant de votre don est <br/>déductible de votre lFI</span>, <br/>dans la limite de 50 000 €.
                </p>
                <p class="text-2xl">
                    Par exemple :
                </p>
                <img src="/graph1.png" class="w-[20rem] xl:w-[30rem]"/>
                <button class="bg-[#FF6600] text-sm xl:text-xl text-white lg:p-2 xl:py-3 xl:px-16 font-Raleway font-bold hover:px-20 transition-all absolute -bottom-14  xl:-bottom-20">
                    JE FAIS UN DON<br/>
                    Déductible de<br/>
                    <span class="font-black">l’IFI</span>
                </button>
            </div>
            <div class="flex flex-col text-center items-center text-[#505050] justify-center h-[35rem] xl:w-[50%] xl:h-[45rem]  rounded-2xl gap-5 p-5" style="box-shadow: 0px 6px 40px rgba(0, 0, 0, 0.1);">
                <p class=" font-Raleway font-bold text-2xl xl:text-4xl">
                    Impôt<br/>
                    sur le Revenu
                </p>
                <p class="font-bold text-2xl font-Lato">
                    <span class="text-[#4D54D6]">66 % du montant de votre don est <br/>déductible de votre lR</span>, <br/>dans la limite
                    de 20 % <br/>de votre revenu net imposable.
                </p>
                <p class="text-2xl">
                    Par exemple :
                </p>
                <img src="/graph2.png" class="w-[20rem] xl:w-[30rem]"/>
                <button class="bg-[#4D54D6] text-sm xl:text-xl text-white lg:p-2 xl:py-3 xl:px-16 font-Raleway font-bold transition-all hover:px-20 absolute -bottom-14  xl:-bottom-20">
                    JE FAIS UN DON<br/>
                    Déductible de<br/>
                    <span class="font-black">L’impôt sur le revenu</span>
                </button>
            </div>
        </div>
    </div>
</div>
<div on:click={()=> poppOpened = true} class="lg:mt-[65rem] xl:mt-[85rem] font-Lato font-bold text-3xl text-center text-[#505050] underline cursor-pointer">
    <p>Je souhaite faire un don déductible de l’Impôt sur les Sociétés</p>
</div>


{#if poppOpened}
    <div class="fixed top-0 left-0 w-screen h-screen z-[70] backdrop-blur-xl bg-opacity-50 flex items-center justify-center">
        <button  class="absolute right-[14rem] top-10 xl:right-[20rem] 2xl:top-32 hover:scale-125 transition-all" on:click={()=> poppOpened = false}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25.979" height="25.979" viewBox="0 0 25.979 25.979">
                <g id="Group_620" data-name="Group 620" transform="translate(-1219.086 -100.935)">
                    <line id="Line_1" data-name="Line 1" x2="23.151" y2="23.151" transform="translate(1220.5 102.349)" fill="black" stroke="#fff" stroke-width="4"/>
                    <line id="Line_2" data-name="Line 2" x1="23.151" y2="23.151" transform="translate(1220.5 102.349)" fill="black" stroke="#fff" stroke-width="4"/>
                </g>
            </svg>
        </button>
        <div class="bg-white flex flex-col items-center justify-center text-center rounded-2xl p-6 xl:p-10 gap-3 xl:gap-5 relative">
            <p class="font-Raleway font-bold text-2xl xl:text-4xl">
                Impôt<br/>
                sur les Sociétés
            </p>
            <p class="font-bold text-xl xl:text-2xl font-Lato">
                <span class="text-[#34B3C5]">60 % du montant de votre don est<br/> déductible de votre lS</span> dans la limite de 0,5 %<br/> de votre chiffre d’affaires hors taxes.
            </p>
            <p class="text-2xl">
                Par exemple :
            </p>
            <img src="/graph3.png" class="w-[20rem] xl:w-[30rem]"/>
            <button class="bg-[#34B3C5] text-sm 2xl:text-xl text-white lg:p-2 xl:px-5 xl:py-2 2xl:py-3 2xl:px-16 font-Raleway font-bold hover:px-20 transition-all absolute -bottom-14  2xl:-bottom-20">
                JE FAIS UN DON<br/>
                Déductible de<br/>
                <span class="font-black">L’impôt sur les Sociétés</span>
            </button>
        </div>
    </div>
{/if}
