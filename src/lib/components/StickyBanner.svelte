<script>
    let isHoveringText = false;
    let isHoveringText2 = false;
    import {fade} from "svelte/transition";

    let isPopupVisible = false; // Contrôle l'affichage de la popup
    let activeTab = 1; // Contrôle l'onglet actif
    let isInputFocused = 0;
</script>

<div in:fade class="fixed top-0 bg-[#4D54D6]/60 backdrop-blur-sm flex flex-row items-center justify-center w-screen lg:gap-5 xl:gap-4 2xl:gap-10 py-6 lg:h-[6rem] xl:h-[10rem] z-20">
    <img src="/logo_curie.png" class="lg:w-[10rem] xl:w-[16rem] lg:ml-2 2xl:mr-20" alt="curie"/>
    <button on:mouseenter={()=> isHoveringText = true} on:mouseleave={()=> isHoveringText = false} class="flex flex-col items-center justify-center">
        <span class="text-white font-Raleway font-bold text-xl">
            Les projets soutenus
        </span>
        <span class={`h-0.5 bg-white rounded-3xl transition-width ${isHoveringText ? 'w-[10rem]' : 'w-[3rem]'}`}/>
    </button>
    <button on:click={() => isPopupVisible = !isPopupVisible} on:mouseenter={()=> isHoveringText2 = true} on:mouseleave={()=> isHoveringText2 = false} class="flex flex-col items-center justify-center">
        <span class="text-white font-Raleway font-bold text-xl">
            Calculer sa réduction d'impôt
        </span>
        <span class={`h-0.5 bg-white rounded-3xl transition-width ${isHoveringText2 ? 'w-[10rem]' : 'w-[3rem]'}`}/>
    </button>

    <button class="bg-[#FF6600] text-xs xl:text-xl text-white lg:px-4 lg:py-2 2xl:py-3 2xl:px-16 font-Raleway font-bold hover:border-2 hover:border-white transition-all relative">
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
                            <line id="Line_1" data-name="Line 1" x2="23.151" y2="23.151" transform="translate(1220.5 102.349)" fill="black" stroke="#fff" stroke-width="4"/>
                            <line id="Line_2" data-name="Line 2" x1="23.151" y2="23.151" transform="translate(1220.5 102.349)" fill="black" stroke="#fff" stroke-width="4"/>
                        </g>
                    </svg>
                </button>
                {#if activeTab === 1}
                    <div class=" rounded-t-3xl bg-[#FF6600] w-full lg:h-[1rem] 2xl:h-[2rem]"/>
                    <div class="flex flex-col items-center justify-center 2xl:p-4">
                        <p class="text-center text-xl 2xl:text-4xl font-Raleway font-black text-[#FF6600]">
                            JE CALCULE<br>
                            MA DÉDUCTION FISCALE IFI
                        </p>
                        <div class="flex flex-row items-center justify-between w-[70%] mt-3 xl:mt-6 2xl:mt-10">
                            <p class={`text-xl 2xl:text-2xl font-Raleway font-bold ${isInputFocused === 1 ? 'text-[#FF6600]' : ''}`}>
                                Montant de votre IFI
                            </p>
                            <div class="input-container font-Raleway text-[#FF6600] text-xl 2xl:text-2xl font-bold">
                                <input type="number" class="bg-white rounded-3xl border-2 text-center py-2 border-gray-500" on:focus={() => isInputFocused = 1} on:blur={() => isInputFocused = 0}/>
                            </div>
                        </div>
                        <div class="flex flex-row items-center justify-between w-[70%] mt-3 xl:mt-6 2xl:mt-10">
                            <p class={`text-xl 2xl:text-2xl font-Raleway font-bold ${isInputFocused === 2 ? 'text-[#FF6600]' : ''}`}>
                                Montant de votre don<br/>
                                pour réduire votre IFI au maximum
                            </p>
                            <div class="input-container font-Raleway text-[#FF6600] text-xl 2xl:text-2xl font-bold">
                                <input type="number" class="bg-white rounded-3xl border-2 text-center py-2 border-gray-500" on:focus={() => isInputFocused = 2} on:blur={() => isInputFocused = 0}/>
                            </div>
                        </div>
                        <div class="flex flex-row items-center justify-between w-[70%] mt-3 xl:mt-6 2xl:mt-10">
                            <p class={`text-xl 2xl:text-2xl font-Raleway font-bold ${isInputFocused === 3 ? 'text-[#FF6600]' : ''}`}>
                                Montant du don<br/>
                                que vous souhaitez effectuer
                            </p>
                            <div class="input-container font-Raleway text-[#FF6600] text-xl 2xl:text-2xl font-bold">
                                <input type="number" class="bg-white rounded-3xl border-2 text-center py-2 border-gray-500" on:focus={() => isInputFocused = 3} on:blur={() => isInputFocused = 0}/>
                            </div>
                        </div>
                        <div class="flex flex-row items-center justify-between w-[70%] mt-3 xl:mt-6 2xl:mt-10">
                            <p class={`text-xl 2xl:text-2xl font-Raleway font-bold ${isInputFocused === 4 ? 'text-[#FF6600]' : ''}`}>
                                Montant du don<br/>
                                que vous souhaitez effectuer
                            </p>
                            <div class="input-container font-Raleway text-[#FF6600] text-xl 2xl:text-2xl font-bold">
                                <input type="number" class="bg-white rounded-3xl border-2 text-center py-2 border-gray-500" on:focus={() => isInputFocused = 4} on:blur={() => isInputFocused = 0}/>
                            </div>
                        </div>
                        <button class="bg-[#FF6600] text-xl text-white py-3 px-16 font-Raleway font-bold hover:px-20 transition-all absolute -bottom-10">
                            JE FAIS UN DON<br/>
                            Déductible de<br/>
                            <span class="font-black">l’IFI</span>
                        </button>
                    </div>
                {:else if activeTab === 2}
                    <div class=" rounded-t-3xl bg-[#4D54D6] w-full h-[2rem]"/>
                    <div class="flex flex-col items-center justify-center p-4">
                        <p class="text-center text-4xl font-Raleway font-black text-[#4D54D6]">
                            JE CALCULE<br>
                            MA DÉDUCTION FISCALE IR
                        </p>
                        <div class="flex flex-row items-center justify-between w-[70%] mt-3 xl:mt-6 2xl:mt-10">
                            <p class={`text-xl 2xl:text-2xl font-Raleway font-bold ${isInputFocused === 1 ? 'text-[#4D54D6]' : ''}`}>
                                Montant de votre IR
                            </p>
                            <div class="input-container font-Raleway text-[#4D54D6] text-xl 2xl:text-2xl font-bold">
                                <input type="number" class="bg-white rounded-3xl border-2 text-center py-2 border-gray-500" on:focus={() => isInputFocused = 1} on:blur={() => isInputFocused = 0}/>
                            </div>
                        </div>
                        <div class="flex flex-row items-center justify-between w-[70%] mt-3 xl:mt-6 2xl:mt-10">
                            <p class={`text-xl 2xl:text-2xl font-Raleway font-bold ${isInputFocused === 2 ? 'text-[#4D54D6]' : ''}`}>
                                Montant de votre don<br/>
                                pour réduire votre IR au maximum
                            </p>
                            <div class="input-container font-Raleway text-[#4D54D6] text-xl 2xl:text-2xl font-bold">
                                <input type="number" class="bg-white rounded-3xl border-2 text-center py-2 border-gray-500" on:focus={() => isInputFocused = 2} on:blur={() => isInputFocused = 0}/>
                            </div>
                        </div>
                        <div class="flex flex-row items-center justify-between w-[70%] mt-3 xl:mt-6 2xl:mt-10">
                            <p class={`text-xl 2xl:text-2xl font-Raleway font-bold ${isInputFocused === 3 ? 'text-[#4D54D6]' : ''}`}>
                                Montant du don<br/>
                                que vous souhaitez effectuer
                            </p>
                            <div class="input-container font-Raleway text-[#4D54D6] text-xl 2xl:text-2xl font-bold">
                                <input type="number" class="bg-white rounded-3xl border-2 text-center py-2 border-gray-500" on:focus={() => isInputFocused = 3} on:blur={() => isInputFocused = 0}/>
                            </div>
                        </div>
                        <div class="flex flex-row items-center justify-between w-[70%] mt-3 xl:mt-6 2xl:mt-10">
                            <p class={`text-xl 2xl:text-2xl font-Raleway font-bold ${isInputFocused === 4 ? 'text-[#4D54D6]' : ''}`}>
                                Montant du don<br/>
                                que vous souhaitez effectuer
                            </p>
                            <div class="input-container font-Raleway text-[#4D54D6] text-xl 2xl:text-2xl font-bold">
                                <input type="number" class="bg-white rounded-3xl border-2 text-center py-2 border-gray-500" on:focus={() => isInputFocused = 4} on:blur={() => isInputFocused = 0}/>
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
    <button class="bg-[#4D54D6] text-xs xl:text-xl text-white lg:px-4 lg:py-2 2xl:py-3 2xl:px-16 font-Raleway font-bold hover:border-2 hover:border-white transition-all">
        JE FAIS UN DON<br/>
        déductible de<br/>
        <span class="font-black">L’impôt sur le revenu</span>
    </button>
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

    input[type=number]:focus {
        border-color: #FF6600;
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
