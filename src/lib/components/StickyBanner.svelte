<script>
    let isHoveringText = false;
    let isHoveringText2 = false;
    import {fade} from "svelte/transition";

    let isPopupVisible = false; // Contrôle l'affichage de la popup
    let activeTab = 1; // Contrôle l'onglet actif
    let isInputFocused = 0;
    let isPopupVisibleMobile = false;

    let montantIfi = undefined;
    let montant2 = undefined;
    let montantIr = undefined;

    let isOpen = false;
</script>

<div in:fade class="hidden fixed top-0 bg-[#4D54D6] bg-opacity-70 backdrop-blur-sm md:flex flex-row items-center justify-center w-screen lg:gap-5 xl:gap-8 2xl:gap-10 py-6 lg:h-[5rem] xl:h-[7rem] 2xl:h-[9rem] z-20">
    <img src="/logo_curie.png" class="lg:w-[10rem] xl:w-[16rem] lg:ml-2 2xl:mr-20" alt="curie"/>
    <button on:mouseenter={()=> isHoveringText = true} on:mouseleave={()=> isHoveringText = false} class="flex flex-col items-center justify-center">
        <a href="#ProjectsDesktop" class="text-white font-Raleway font-bold text-xl">
            Les projets soutenus
        </a>
        <span class={`h-0.5 bg-white rounded-3xl transition-width ${isHoveringText ? 'w-[10rem]' : 'w-[3rem]'}`}/>
    </button>
    <button on:click={() => isPopupVisible = !isPopupVisible} on:mouseenter={()=> isHoveringText2 = true} on:mouseleave={()=> isHoveringText2 = false} class="flex flex-col items-center justify-center">
        <span class="text-white font-Raleway font-bold text-xl">
            Calculer sa réduction d'impôt
        </span>
        <span class={`h-0.5 bg-white rounded-3xl transition-width ${isHoveringText2 ? 'w-[10rem]' : 'w-[3rem]'}`}/>
    </button>

    <button class="bg-[#FF6600] text-xs xl:text-xl text-white lg:px-2 lg:py-2 2xl:py-3 2xl:px-16 font-Raleway font-bold hover:border-2 hover:border-white transition-all relative">
        JE FAIS UN DON<br/>
        Déductible de<br/>
        <span class="font-black">l’IFI</span>
    </button>
    {#if isPopupVisible}
        <div class="absolute top-full mt-2 left-1/2 transform -translate-x-1/2  bg-transparent flex flex-col items-center justify-center" transition:fade>
            <div class="flex flex-row items-center justify-center gap-10">
                <button class={`px-4 py-2 font-Raleway font-bold text-xl transition-colors ${activeTab === 1 ? 'bg-[#FF6600] text-white rounded-t-3xl' : 'text-[#FF6600] bg-white rounded-t-3xl'}`} on:click={() => activeTab = 1}>
                    JE CALCULE<br/>
                    MA DÉDUCTION IFI
                </button>
                <button class={`px-4 py-2 font-Raleway font-bold text-xl transition-colors ${activeTab === 2 ? 'bg-[#4D54D6] text-white rounded-t-3xl' : 'text-[#4D54D6] bg-white rounded-t-3xl'}`} on:click={() => activeTab = 2}>
                    JE CALCULE<br/>
                    MA DÉDUCTION IR
                </button>
            </div>
            <div class="backdrop-blur-xl w-[60rem] 2xl:w-[80rem] bg-white rounded-r-3xl transition-colors rounded-l-3xl rounded-b-3xl  lg:h-[25rem] xl:h-[30rem] 2xl:h-[40rem]">
                <button  class="absolute -right-20 top-0 hover:scale-125 transition-all" on:click={()=> isPopupVisible = false}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25.979" height="25.979" viewBox="0 0 25.979 25.979">
                        <g id="Group_620" data-name="Group 620" transform="translate(-1219.086 -100.935)">
                            <line id="Line_1" data-name="Line 1" x2="23.151" y2="23.151" transform="translate(1220.5 102.349)" fill="none" stroke="#000" stroke-width="4"/>
                            <line id="Line_2" data-name="Line 2" x1="23.151" y2="23.151" transform="translate(1220.5 102.349)" fill="none" stroke="#000" stroke-width="4"/>
                        </g>
                    </svg>
                </button>
                {#if activeTab === 1}
                    <div class=" rounded-t-3xl bg-[#FF6600] w-full lg:h-[1rem] 2xl:h-[2rem]"/>
                    <div class=" input-focus-orange flex flex-col items-center justify-center 2xl:p-4">
                        <p class="text-center text-xl 2xl:text-4xl font-Raleway font-black text-[#FF6600]">
                            JE CALCULE<br>
                            MA DÉDUCTION FISCALE IFI
                        </p>
                        <div class="flex flex-row items-center justify-between w-[70%] mt-3 xl:mt-6 2xl:mt-10">
                            <p class={`text-xl 2xl:text-2xl font-Raleway font-bold w-auto ${isInputFocused === 1 ? 'text-[#FF6600]' : ''}`}>
                                Montant de votre IFI
                            </p>
                            <div class="input-container font-Raleway text-[#FF6600] text-xl 2xl:text-2xl font-bold">
                                <input type="number" bind:value={montantIfi} class="bg-white rounded-3xl border-2 text-center w-[25vh] h-[5vh] border-gray-500" on:focus={() => isInputFocused = 1} on:blur={() => isInputFocused = 0}/>
                            </div>
                        </div>
                        <div class="flex flex-row items-center justify-between w-[70%] mt-3 xl:mt-6 2xl:mt-10">
                            <p class={`text-xl 2xl:text-2xl font-Raleway w-auto font-bold ${isInputFocused === 2 ? 'text-[#FF6600]' : ''}`}>
                                Montant de votre don<br/>
                                pour réduire votre IFI au maximum
                            </p>
                            <div class="input-container rounded-3xl border-2 text-center pt-2 border-gray-500 w-[25vh] h-[5vh] font-Raleway text-[#FF6600] text-xl 2xl:text-2xl font-bold">
                                {#if montantIfi !== undefined}
                                    {Math.round(montantIfi * 1.33)}
                                {/if}
                            </div>
                        </div>
                        <div class="flex flex-row items-center justify-between w-[70%] mt-3 xl:mt-6 2xl:mt-10">
                            <p class={`text-xl 2xl:text-2xl font-Raleway w-auto font-bold ${isInputFocused === 3 ? 'text-[#FF6600]' : ''}`}>
                                Montant du don<br/>
                                que vous souhaitez effectuer
                            </p>
                            <div class="input-container font-Raleway text-[#FF6600] text-xl 2xl:text-2xl font-bold">
                                <input type="number" bind:value={montant2} class="bg-white rounded-3xl border-2 text-center w-[25vh] h-[5vh] border-gray-500" on:focus={() => isInputFocused = 3} on:blur={() => isInputFocused = 0}/>
                            </div>
                        </div>
                        <div class="flex flex-row items-center justify-between w-[70%] mt-3 xl:mt-6 2xl:mt-10">
                            <p class={`text-xl 2xl:text-2xl font-Raleway font-bold ${isInputFocused === 4 ? 'text-[#FF6600]' : ''}`}>
                                Estimation de votre IFI<br/>
                                après déduction de 75 % de votre don
                            </p>
                            <div class="input-container rounded-3xl border-2 text-center pt-2 border-gray-500 w-[25vh] h-[5vh] font-Raleway text-[#FF6600] text-xl 2xl:text-2xl font-bold">
                                {#if montant2 !== undefined}
                                    {Math.round(montant2 * 0.25)}
                                {/if}
                            </div>
                        </div>
                        <button class="bg-[#FF6600] xl:text-xl text-white py-2 xl:py-3 px-10 xl:px-16 font-Raleway font-bold hover:px-20 transition-all absolute -bottom-5 xl:-bottom-10">
                            JE FAIS UN DON<br/>
                            Déductible de<br class="hidden xl:block"/>
                            <span class="font-black">l’IFI</span>
                        </button>
                    </div>
                {:else if activeTab === 2}
                    <div class=" rounded-t-3xl bg-[#4D54D6] w-full lg:h-[1rem] 2xl:h-[2rem]"/>
                    <div class="input-focus-violet flex flex-col items-center justify-center 2xl:p-4">
                        <p class="text-center text-xl 2xl:text-4xl font-Raleway font-black text-[#4D54D6]">
                            JE CALCULE<br>
                            MA DÉDUCTION FISCALE IR
                        </p>
                        <div class="flex flex-row items-center justify-between w-[70%] mt-3 xl:mt-6 2xl:mt-10">
                            <p class={`text-xl 2xl:text-2xl font-Raleway font-bold ${isInputFocused === 1 ? 'text-[#4D54D6]' : ''}`}>
                                Montant du don que vous souhaitez effectuer
                            </p>
                            <div class="input-container font-Raleway text-[#4D54D6] text-xl 2xl:text-2xl font-bold">
                                <input bind:value={montantIr} type="number" class="bg-white rounded-3xl border-2 text-center py-2 border-gray-500" on:focus={() => isInputFocused = 1} on:blur={() => isInputFocused = 0}/>
                            </div>
                        </div>
                        <div class="flex flex-row items-center justify-between w-[70%] mt-3 xl:mt-6 2xl:mt-10">
                            <p class={`text-xl 2xl:text-2xl font-Raleway font-bold  ${isInputFocused === 2 ? 'text-[#4D54D6]' : ''}`}>
                                Montant déductible de votre Impôt sur le Revenu
                            </p>
                            <div class="input-container rounded-3xl border-2 text-center pt-2 border-gray-500 w-[25vh] h-[5vh] font-Raleway text-[#4D54D6] text-xl 2xl:text-2xl font-bold">
                                {#if montantIr !== undefined}
                                    {Math.round(montantIr * 0.67)}
                                {/if}
                            </div>
                        </div>

                        <div class="flex flex-row items-center justify-between w-[70%] mt-3 xl:mt-6 2xl:mt-10">
                            <p class={`text-xl 2xl:text-2xl font-Raleway font-bold  ${isInputFocused === 2 ? 'text-[#4D54D6]' : ''}`}>
                                Coût réel de votre don après déduction fiscale de 66 %
                            </p>
                            <div class="input-container rounded-3xl border-2 text-center pt-2 border-gray-500 w-[25vh] h-[5vh] font-Raleway text-[#4D54D6] text-xl 2xl:text-2xl font-bold">
                                {#if montantIr !== undefined}
                                    {Math.round(montantIr * 0.34)}
                                {/if}
                            </div>
                        </div>

                        <button class="bg-[#4D54D6] text-xl text-white py-3 px-16 font-Raleway font-bold hover:px-20 transition-all absolute -bottom-10">
                            JE FAIS UN DON<br/>
                            Déductible de<br/>
                            <span class="font-black">l’IR</span>
                        </button>
                    </div>
                {/if}
            </div>
        </div>
    {/if}
    <button class="bg-[#4D54D6] uppercase text-xs xl:text-xl text-white lg:px-4 lg:py-2 2xl:py-3 2xl:px-16 font-Raleway font-bold hover:border-2 hover:border-white transition-all">
        JE FAIS UN DON<br/>
        déductible de<br/>
        <span class="font-black">L’impôt sur le revenu</span>
    </button>
</div>


<div in:fade class="md:hidden flex flex-col items-center justify-center fixed top-0 bg-[#4D54D6] bg-opacity-70 backdrop-blur-sm w-screen z-50">
    <div class="flex flex-row items-center justify-center gap-4 p-4">
        <button on:click={()=> isOpen = !isOpen} class="flex flex-col justify-around w-10 h-10 bg-transparent border-none cursor-pointer p-0 z-50 focus:outline-none">
            <div style="border-radius: 10px" class={`h-1 w-8 bg-white transform transition duration-500 ease-in-out ${isOpen ? 'rotate-45 translate-y-3.5' : ''}`}></div>
            <div style="border-radius: 10px" class={`h-1 w-8 bg-white transition-all duration-500 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div style="border-radius: 10px" class={`h-1 w-8 bg-white transform transition duration-500 ease-in-out ${isOpen ? '-rotate-45 -translate-y-3.5' : ''}`}></div>
        </button>
        <img src="/logo-curie-mobile.png" class="w-[40px]" alt="curie"/>
        <button class="bg-[#FF6600] text-[10px] text-white w-[135px] h-[51px] font-Raleway font-bold hover:border-2 hover:border-white transition-all relative">
            JE FAIS UN DON
            Déductible de
            <span class="font-black">l’IFI</span>
        </button>
        <button class="bg-[#4D54D6] uppercase text-[10px] text-white w-[135px] h-[51px] font-Raleway font-bold hover:border-2 hover:border-white transition-all">
            JE FAIS UN DON
            déductible de
            <span class="font-black">L’impôt sur le revenu</span>
        </button>
    </div>
    {#if isOpen}
        <div class="w-screen flex flex-col items-center justify-center gap-y-3 p-2">
            <button on:mouseenter={()=> isHoveringText = true} on:mouseleave={()=> isHoveringText = false} class="flex flex-col items-center justify-center">
                <a href="#ProjectsMobile" class="text-white font-Raleway font-bold text-xl ml-2">
                    Les projets soutenus
                </a>
            </button>
            <button on:click={() => isPopupVisibleMobile = !isPopupVisibleMobile} on:mouseenter={()=> isHoveringText = true} on:mouseleave={()=> isHoveringText = false} class="flex flex-col items-center justify-center">
                <span class="text-white font-Raleway font-bold text-xl ml-2">
                    Calculer sa réduction d'impôt
                </span>
            </button>
        </div>
        {#if isPopupVisibleMobile}
            <div class="absolute top-full mt-2 left-1/2 transform -translate-x-1/2  bg-transparent flex flex-col items-center justify-center w-screen" transition:fade>
                <div class="flex flex-row items-center justify-center">
                    <button class={`p-2 font-Raleway font-bold text-[10xp] transition-colors ${activeTab === 1 ? 'bg-[#FF6600] text-white rounded-t-3xl' : 'text-[#FF6600] bg-white rounded-t-3xl'}`} on:click={() => activeTab = 1}>
                        JE CALCULE<br/>
                        MA DÉDUCTION IFI
                    </button>
                    <button class={`p-2 font-Raleway font-bold text-[10xp] transition-colors ${activeTab === 2 ? 'bg-[#4D54D6] text-white rounded-t-3xl' : 'text-[#4D54D6] bg-white rounded-t-3xl'}`} on:click={() => activeTab = 2}>
                        JE CALCULE<br/>
                        MA DÉDUCTION IR
                    </button>
                </div>
                <div class="backdrop-blur-xl w-[98%] bg-white rounded-r-3xl transition-colors rounded-l-3xl rounded-b-3xl pb-5">
                    {#if activeTab === 1}
                        <div class="rounded-t-3xl bg-[#FF6600] w-full h-[1rem]"/>
                        <div class="input-focus-orange flex flex-col items-center justify-center relative">
                            <p class="text-center text-[20px] font-Raleway font-black text-[#FF6600]">
                                JE CALCULE<br>
                                MA DÉDUCTION FISCALE IFI
                            </p>
                            <div class="flex flex-row w-full">
                                <div class="flex flex-col   w-[50%] gap-y-3 p-3">
                                    <p class={`text-[2vh] font-Raleway font-bold ${isInputFocused === 1 ? 'text-[#FF6600]' : ''}`}>
                                        Montant de votre IFI
                                    </p>
                                    <p class={`text-[2vh] font-Raleway font-bold ${isInputFocused === 2 ? 'text-[#FF6600]' : ''}`}>
                                        Montant de votre don
                                        pour réduire votre IFI au maximum
                                    </p>
                                    <p class={`text-[2vh] font-Raleway font-bold ${isInputFocused === 3 ? 'text-[#FF6600]' : ''}`}>
                                        Montant du don
                                        que vous souhaitez effectuer
                                    </p>
                                    <p class={`text-[2vh] font-Raleway font-bold ${isInputFocused === 4 ? 'text-[#FF6600]' : ''}`}>
                                        Estimation de votre IFI
                                        après déduction de 75 % de votre don
                                    </p>
                                </div>
                                <div class="flex flex-col   w-[50%] relative">
                                    <div class="input-container font-Raleway text-[#FF6600] text-[2vh] absolute top-0 font-bold">
                                        <input type="number" bind:value={montantIfi} class="bg-white rounded-3xl border-2 text-center py-2 border-gray-500" on:focus={() => isInputFocused = 1} on:blur={() => isInputFocused = 0}>
                                    </div>
                                    <div class="input-container rounded-3xl border-2 text-center pt-2 mt-6 border-gray-500 w-[22vh] h-[5vh] font-Raleway text-[#FF6600] text-xl 2xl:text-2xl font-bold">
                                        {#if montantIfi !== undefined}
                                            {Math.round(montantIfi * 1.33)}
                                        {/if}
                                    </div>
                                    <div class="input-container font-Raleway text-[#FF6600] text-[2vh] absolute top-[20%] font-bold">
                                        <input type="number" bind:value={montant2}  class="bg-white rounded-3xl border-2 text-center py-2 border-gray-500" on:focus={() => isInputFocused = 3} on:blur={() => isInputFocused = 0}/>
                                    </div>
                                    <div class="input-container rounded-3xl border-2 text-center pt-2 mt-32 border-gray-500 w-[22vh] h-[5vh] font-Raleway text-[#FF6600] text-xl 2xl:text-2xl font-bold">
                                        {#if montant2 !== undefined}
                                            {Math.round(montant2 * 0.25)}
                                        {/if}
                                    </div>
                                </div>
                            </div>
                            <button class="bg-[#FF6600] w-[268px] absolute -bottom-[10vh]  text-white font-Raleway font-bold text-[2vh]">
                                JE FAIS UN DON<br/>
                                Déductible de<br/>
                                <strong>l’IFI</strong>
                            </button>
                        </div>
                    {:else if activeTab === 2}
                        <div class="rounded-t-3xl bg-[#4D54D6] w-full h-[1rem]"/>

                        <div class="input-focus-violet flex flex-col items-center justify-center relative">
                            <p class="text-center text-[20px] font-Raleway font-black text-[#4D54D6]">
                                JE CALCULE<br>
                                MA DÉDUCTION FISCALE IR
                            </p>
                            <div class="flex flex-row w-full">
                                <div class="flex flex-col w-[50%] gap-y-3 p-3">
                                    <p class={`text-[2vh] font-Raleway font-bold ${isInputFocused === 1 ? 'text-[#4D54D6]' : ''}`}>
                                        Montant du don que vous souhaitez effectuer
                                    </p>
                                    <p class={`text-[2vh] font-Raleway font-bold ${isInputFocused === 2 ? 'text-[#4D54D6]' : ''}`}>
                                        Montant déductible de votre Impôt sur le Revenu
                                    </p>
                                    <p class={`text-[2vh] font-Raleway font-bold ${isInputFocused === 3 ? 'text-[#4D54D6]' : ''}`}>
                                        Coût réel de votre don après déduction fiscale de 66 %
                                    </p>
                                </div>
                                <div class="flex flex-col w-[50%] relative">
                                    <div class="input-container font-Raleway text-[#4D54D6] text-[2vh] absolute top-5 font-bold">
                                        <input type="number" bind:value={montantIr} class="bg-white rounded-3xl border-2 text-center py-2 border-gray-500" on:focus={() => isInputFocused = 1} on:blur={() => isInputFocused = 0}>
                                    </div>
                                    <div class="input-container rounded-3xl border-2 text-center mt-16 border-gray-500 w-[22vh] h-[5vh] font-Raleway text-[#4D54D6] text-xl 2xl:text-2xl font-bold">
                                        {#if montantIr !== undefined}
                                            {Math.round(montantIr * 0.67)}
                                        {/if}
                                    </div>
                                    <div class="input-container rounded-3xl border-2 text-center mt-16 border-gray-500 w-[22vh] h-[5vh] font-Raleway text-[#4D54D6] text-xl 2xl:text-2xl font-bold">
                                        {#if montantIr !== undefined}
                                            {Math.round(montantIr * 0.32)}
                                        {/if}
                                    </div>
                                </div>
                            </div>
                            <button class="bg-[#4D54D6] w-[268px] absolute -bottom-[10vh] text-white font-Raleway font-bold text-[2vh]">
                                JE FAIS UN DON<br/>
                                Déductible de<br/>
                                <strong>l’IR</strong>
                            </button>
                        </div>
                    {/if}
                </div>
            </div>
        {/if}
    {/if}
</div>


<style>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }

    .input-focus-orange input[type=number]:focus {
        border-color: #FF6600;
        outline: none;
    }

    .input-focus-violet input[type=number]:focus {
        border-color: #4D54D6;
        outline: none;
    }

    .input-focus-violet:focus {
        border-color: #4D54D6;
        outline: none;
    }


    .input-container {
        position: relative;
    }
    .input-container::after {
        content: "€";
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
    }

    .transition-width {
        transition: width 0.5s ease;
    }

</style>
