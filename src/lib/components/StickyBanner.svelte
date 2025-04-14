<script>
    import {fade} from "svelte/transition";
    import {onMount} from "svelte";
    import {projectIndexStore} from "$lib/utils/utils.js";
    import {passUtmParamsToLink} from "$lib/utils/links"

    let isPopupVisible = false;
    let activeTab = 1;
    let isInputFocused = 0;
    let isPopupVisibleMobile = false;

    let montantIfi = undefined;
    let montant2 = undefined;
    let montantIr = undefined;

    const handlePageHash = () => {
        if (window.location.hash === '#calculatrice') {
            isPopupVisible = true;
            isPopupVisibleMobile = true;
        }
    }

    onMount(() => {
        handlePageHash();
        window.addEventListener('hashchange', handlePageHash);
        return () => window.removeEventListener('hashchange', handlePageHash);
    });

    let isOpen = false;
</script>

<div in:fade class="hidden fixed top-0 bg-[#4D54D6] bg-opacity-70 backdrop-blur-sm md:flex flex-row items-center justify-center w-full py-6 lg:h-[5rem] xl:h-[7rem] 2xl:h-[9rem] z-20">
    <a target="_blank" href={passUtmParamsToLink("https://curie.fr/")}>
        <img src="/logo_curie.png" class="md:w-[10rem] xl:w-[16rem]  mx-8" alt="curie"/>
    </a>
    <button on:click={()=> {
                isPopupVisibleMobile = false;
                projectIndexStore.set(0);
                window.location.hash = "#ProjectsDesktop";
                setTimeout(() => {
                    window.location.hash = "#projet1";
                }, 300);}}
            class="flex flex-col items-center justify-center">
        <a class="text-white hover:underline underline-offset-4 font-Raleway font-bold lg:text-xl mx-4">
            Les projets soutenus
        </a>
    </button>
    <button on:click={() => isPopupVisible = !isPopupVisible} class="mx-4 flex flex-col items-center justify-center">
        <span class="text-white font-Raleway hover:underline underline-offset-4 font-bold lg:text-xl">
            Calculer ma réduction d'impôt
        </span>
    </button>
    <a target="_blank" href={passUtmParamsToLink("https://aider.curie.fr/ifi")} class="mx-8 bg-[#FF6600] text-center uppercase text-xs xl:text-base 2xl:text-xl text-white w-[15rem] mr-2 2xl:w-[20rem] py-2 font-Raleway font-bold hover:border-2 hover:border-white transition-all relative">
        JE FAIS UN DON<br/>
        Déductible de<br/>
        <span class="font-black">l’IFI</span>
    </a>
    <a target="_blank" href={passUtmParamsToLink("https://aider.curie.fr/don149")} class=" mx-8 bg-[#4D54D6] text-center uppercase text-xs xl:text-base 2xl:text-xl text-white w-[15rem] mr-2 2xl:w-[20rem] py-2 font-Raleway font-bold hover:border-2 hover:border-white transition-all">
        JE FAIS UN DON<br/>
        déductible de<br/>
        <span class="font-black">L’impôt sur le revenu</span>
    </a>
</div>

{#if isPopupVisible}
    <div class="hidden fixed top-0 left-0 w-full h-screen z-[70] backdrop-blur-xl bg-opacity-50 md:flex items-center justify-center">
        <div class="bg-transparent flex flex-col items-center justify-center" transition:fade>
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
            <div class="backdrop-blur-xl relative w-[60rem] 2xl:w-[80rem] bg-white rounded-r-3xl transition-colors rounded-l-3xl rounded-b-3xl  lg:h-[25rem] xl:h-[30rem] 2xl:h-[40rem]">
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
                            MA DÉDUCTION FISCALE - IFI
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
                                pour réduire votre IFI<br/>
                                au maximum, dans la limite<br/>
                                de 50 000 € de réduction fiscale
                            </p>
                            <div class="input-container rounded-3xl border-2 text-center 2xl:pt-2 border-gray-500 w-[25vh] h-[5vh] font-Raleway text-[#FF6600] text-xl 2xl:text-2xl font-bold">
                                {#if montantIfi !== undefined}
                                    {Math.round(montantIfi * 1.33) > 66666 ? "66 666" : Math.round(montantIfi * (4/3)).toLocaleString('fr-FR')}
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
                            <div class="input-container rounded-3xl border-2 text-center 2xl:pt-2 border-gray-500 w-[25vh] h-[5vh] font-Raleway text-[#FF6600] text-xl 2xl:text-2xl font-bold">
                                {#if montantIfi !== undefined &&  (montant2 !== undefined || montant2 > 0)}
                                    {#if Math.round(montantIfi - ((montant2 > 66666 ? 66666 : montant2)* 0.75)) > 0}
                                        {Math.round(montantIfi - ((montant2 > 66666 ? 66666 : montant2)* 0.75)).toLocaleString('fr-FR')}
                                    {:else}
                                        0
                                    {/if}
                                    {:else}
                                    {''}
                                {/if}
                            </div>
                        </div>
                        <a target="_blank" href={passUtmParamsToLink("https://aider.curie.fr/ifi")} class="text-center bg-[#FF6600] uppercase xl:text-base text-white py-2 xl:py-3 px-10 xl:px-16 font-Raleway font-bold hover:scale-110 transition-all absolute top-full  left-1/2 -translate-x-1/2 -translate-y-1/2">
                            JE FAIS UN DON<br/>
                            Déductible de<br class="hidden xl:block"/>
                            <span class="font-black">l’IFI</span>
                        </a>
                    </div>
                {:else if activeTab === 2}
                    <div class=" rounded-t-3xl bg-[#4D54D6] w-full lg:h-[1rem] 2xl:h-[2rem]"/>
                    <div class=" input-focus-violet flex flex-col items-center justify-center 2xl:p-4">
                        <p class="text-center text-xl 2xl:text-4xl font-Raleway font-black text-[#4D54D6]">
                            JE CALCULE<br>
                            MA DÉDUCTION FISCALE - IR
                        </p>
                        <div class="flex flex-row items-center justify-between w-[70%] mt-3 xl:mt-6 2xl:mt-10">
                            <p class={`text-xl 2xl:text-2xl font-Raleway font-bold w-auto ${isInputFocused === 1 ? 'text-[#4D54D6]' : ''}`}>
                                Montant du don <br/>
                                que vous souhaitez effectuer
                            </p>
                            <div class="input-container font-Raleway text-[#4D54D6] text-xl 2xl:text-2xl font-bold">
                                <input type="number" bind:value={montantIr} class="bg-white rounded-3xl border-2 text-center w-[25vh] h-[5vh] border-gray-500" on:focus={() => isInputFocused = 1} on:blur={() => isInputFocused = 0}/>
                            </div>
                        </div>
                        <div class="flex flex-row items-center justify-between w-[70%] mt-3 xl:mt-6 2xl:mt-10">
                            <p class={`text-xl 2xl:text-2xl font-Raleway w-auto font-bold ${isInputFocused === 2 ? 'text-[#4D54D6]' : ''}`}>
                                Montant déductible<br/> de votre Impôt sur le Revenu
                            </p>
                            <div class="input-container rounded-3xl border-2 text-center 2xl:pt-2 border-gray-500 w-[25vh] h-[5vh] font-Raleway text-[#4D54D6] text-xl 2xl:text-2xl font-bold">
                                {#if montantIr !== undefined}
                                    {Math.round(montantIr * 0.66)}
                                {/if}
                            </div>
                        </div>
                        <div class="flex flex-row items-center justify-between w-[70%] mt-3 xl:mt-6 2xl:mt-10">
                            <p class={`text-xl 2xl:text-2xl font-Raleway w-auto font-bold ${isInputFocused === 3 ? 'text-[#4D54D6]' : ''}`}>
                                Coût réel de votre <br/>don après déduction fiscale de 66 %
                            </p>
                            <div class="input-container rounded-3xl border-2 text-center 2xl:pt-2 border-gray-500 w-[25vh] h-[5vh] font-Raleway text-[#4D54D6] text-xl 2xl:text-2xl font-bold">
                                {#if montantIr !== undefined}
                                    {Math.round(montantIr * 0.34)}
                                {/if}
                            </div>
                        </div>
                        <a target="_blank" href={passUtmParamsToLink("https://aider.curie.fr/don149/")} class="text-center bg-[#4D54D6] uppercase xl:text-base text-white py-2 xl:py-3 px-10 xl:px-16 font-Raleway font-bold hover:scale-110 transition-all absolute top-full  left-1/2 -translate-x-1/2 -translate-y-1/2">
                            JE FAIS UN DON<br/>
                            Déductible de<br class="hidden xl:block"/>
                            <span class="font-black">l’IR</span>
                        </a>
                    </div>
                {/if}
            </div>
        </div>
    </div>
{/if}

<div in:fade class="md:hidden flex flex-col items-center justify-center fixed top-0 bg-[#4D54D6] bg-opacity-70 w-full z-50  {isOpen ? '' : 'h-[55px] py-2'}">
    <div class="flex flex-row items-center justify-center gap-4 p-4">
        <button on:click={()=> isOpen = !isOpen} class="flex flex-col justify-around w-10 h-10 bg-transparent border-none cursor-pointer p-0 z-50 focus:outline-none">
            <div style="border-radius: 10px" class={`h-1 w-8 bg-white transform transition duration-500 ease-in-out ${isOpen ? 'rotate-45 translate-y-3.5' : ''}`}></div>
            <div style="border-radius: 10px" class={`h-1 w-8 bg-white transition-all duration-500 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div style="border-radius: 10px" class={`h-1 w-8 bg-white transform transition duration-500 ease-in-out ${isOpen ? '-rotate-45 -translate-y-3.5' : ''}`}></div>
        </button>
        <a target="_blank" href={passUtmParamsToLink("https://curie.fr/")} class="max-[370px]:hidden">
            <img src="/logo-curie-mobile.png" class="w-[40px]" alt="curie"/>
        </a>
        <a target="_blank" href={passUtmParamsToLink("https://aider.curie.fr/ifi")} class="bg-[#FF6600] flex flex-col text-center items-center justify-center uppercase text-[8px] text-white w-[100px] min-[360px]:w-[135px] h-[51px] font-Raleway font-bold hover:border-2 hover:border-white transition-all relative">
            JE FAIS UN DON<br/>
            Déductible de
            <span class="font-black">l’IFI</span>
        </a>
        <a target="_blank" href={passUtmParamsToLink("https://aider.curie.fr/don149")}  class="bg-[#4D54D6] flex flex-col text-center items-center justify-center uppercase text-[8px] text-white w-[100px] min-[360px]:w-[135px] h-[51px] font-Raleway font-bold hover:border-2 hover:border-white transition-all">
            JE FAIS UN DON<br/>
            déductible de
            <span class="font-black">L’impôt sur le revenu</span>
        </a>
    </div>
    {#if isOpen}
        <div class="w-full flex flex-col items-center justify-center gap-y-3 p-2">
            <button on:click={()=> {
                isPopupVisibleMobile = false;
                isOpen = false;
                projectIndexStore.set(0);
                window.location.hash = "#ProjectsMobile";
                setTimeout(() => {
                    window.location.hash = "#projet1";
                }, 100);}}
                    class="flex flex-col items-center justify-center">
                <a href="#ProjectsMobile" class="text-white font-Raleway font-bold text-xl ml-2">
                    Les projets soutenus
                </a>
            </button>
            <button on:click={() => {isPopupVisibleMobile = !isPopupVisibleMobile;
                isOpen = false}} on:mouseenter={()=> isHoveringText = true} on:mouseleave={()=> isHoveringText = false} class="flex flex-col items-center justify-center">
                <span class="text-white font-Raleway font-bold text-xl ml-2">
                    Calculer ma réduction d'impôt
                </span>
            </button>
        </div>
    {/if}
</div>

{#if isPopupVisibleMobile}
    <div class="md:hidden fixed top-0 left-0 w-full h-screen z-[70] backdrop-blur-xl bg-opacity-50 flex flex-col items-center justify-center">
            <svg on:click={()=> {isPopupVisibleMobile = false; window.location.hash = ''; projectIndexStore.set(0);}} xmlns="http://www.w3.org/2000/svg" class="absolute bg-white z-50 rounded-full right-3 top-[1.25rem] w-7 h-7" viewBox="0 0 24 24">
                <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z">
                </path>
            </svg>
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
                        MA DÉDUCTION FISCALE - IFI
                    </p>
                    <div class="flex flex-row w-full pb-6">
                        <div class="flex flex-col   w-[50%] gap-y-3 p-3">
                            <p class={`text-[2vh] font-Raleway font-bold ${isInputFocused === 1 ? 'text-[#FF6600]' : ''}`}>
                                Montant de votre IFI
                            </p>
                            <p class={`text-[2vh] font-Raleway font-bold ${isInputFocused === 2 ? 'text-[#FF6600]' : ''}`}>
                                Montant de votre don
                                pour réduire votre IFI
                                au maximum, dans la limite
                                de 50 000 € de réduction fiscal
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
                            <div class="input-container font-Raleway text-[#FF6600] text-[2vh] absolute top-5 font-bold">
                                <input type="number" bind:value={montantIfi} class="pl-2 bg-white rounded-3xl orangeC border-2 text-left w-[22vh] h-[5vh] border-gray-500" on:focus={() => isInputFocused = 1} on:blur={() => isInputFocused = 0}>
                            </div>
                            <div class="input-container font-Raleway text-[#FF6600] text-[2vh] absolute top-5 font-bold mt-[5vh]">
                                <input type="number" readonly="True" placeholder="{montantIfi !== undefined ? Math.round(montantIfi * 1.33) > 66666 ? '66 666' : Math.round(montantIfi * (4/3)).toLocaleString('fr-FR') : ' '}" class="pl-2 orangeC bg-white rounded-3xl border-2 text-left w-[22vh] h-[5vh] border-gray-500" on:focus={() => isInputFocused = 1} on:blur={() => isInputFocused = 0}>
                            </div>
                            <div class="input-container font-Raleway text-[#FF6600] text-[2vh] mt-[9vh] font-bold">
                                <input type="number" bind:value={montant2}  class="pl-2 bg-white orangeC rounded-3xl border-2 text-left w-[22vh] h-[5vh] border-gray-500" on:focus={() => isInputFocused = 3} on:blur={() => isInputFocused = 0}/>
                            </div>
                            <div class="input-container font-Raleway text-[#FF6600] text-[2vh] absolute top-5 font-bold mt-[4vh] ">
                                <input type="number" readonly="True"
                                       placeholder="{(montant2 !== undefined && montantIfi !== undefined) ? (Math.round(montantIfi - ((montant2 > 66666 ? 66666 : montant2)* 0.75)) > 0 ? Math.round(montantIfi - ((montant2 > 66666 ? 66666 : montant2)* 0.75)) : 0) : ' '}"
                                       class="bg-white orangeC rounded-3xl pl-2 border-2 text-left w-[22vh] h-[5vh] border-gray-500" on:focus={() => isInputFocused = 1} on:blur={() => isInputFocused = 0}>
                            </div>
                        </div>
                    </div>
                    <a target="_blank" href={passUtmParamsToLink("https://aider.curie.fr/ifi")} class="bg-[#FF6600] w-[268px] absolute top-full -translate-y-[20%] py-2 text-center text-white font-Raleway font-bold text-sm !leading-tight transition-all hover:scale-110">
                        JE FAIS UN DON<br/>
                        Déductible de<br/>
                        <strong>l’IFI</strong>
                    </a>
                </div>
            {:else if activeTab === 2}
                <div class="rounded-t-3xl bg-[#4D54D6] w-full h-[1rem]"/>

                <div class="input-focus-violet flex flex-col items-center justify-center relative">
                    <p class="text-center text-[20px] font-Raleway font-black text-[#4D54D6]">
                        JE CALCULE<br>
                        MA DÉDUCTION FISCALE - IR
                    </p>
                    <div class="flex flex-row w-full pb-6">
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
                            <div class="input-container2 font-Raleway text-[#4D54D6] text-[2vh] absolute top-5 font-bold">
                                <input type="number" bind:value={montantIr} class="pl-2 bg-white rounded-3xl violetC border-2 text-left w-[22vh] h-[5vh] border-gray-500" on:focus={() => isInputFocused = 1} on:blur={() => isInputFocused = 0}>
                            </div>
                            <div class="input-container2 font-Raleway text-[#4D54D6] text-[2vh] absolute top-5 font-bold mt-[4vh]">
                                <input type="number" readonly="True" placeholder="{montantIr !== undefined ? Math.round(montantIr * 0.66).toLocaleString('fr-FR') : ' '}"  class="pl-2 rounded-3xl  border-2 text-left w-[22vh] h-[5vh] violetC border-gray-500" on:focus={() => isInputFocused = 1} on:blur={() => isInputFocused = 0}>
                            </div>
                            <div class="input-container2 font-Raleway text-[#4D54D6] text-[2vh] absolute top-5 font-bold mt-[4vh]">
                                <input type="number" readonly="True" placeholder="{montantIr !== undefined ? Math.round(montantIr * 0.32).toLocaleString('fr-FR') : ' '}"  class="pl-2 rounded-3xl  border-2 text-left w-[22vh] h-[5vh] violetC border-gray-500" on:focus={() => isInputFocused = 1} on:blur={() => isInputFocused = 0}>
                            </div>
                        </div>
                    </div>
                    <a target="_blank" href={passUtmParamsToLink("https://aider.curie.fr/don149/")} class="bg-[#4D54D6] w-[268px] absolute top-full -translate-y-[20%] py-2 text-center text-white font-Raleway font-bold text-sm !leading-tight transition-all hover:scale-110">
                        JE FAIS UN DON<br/>
                        Déductible de<br/>
                        <strong>l’IR</strong>
                    </a>
                </div>
            {/if}
        </div>
    </div>
{/if}

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

    .orangeC::placeholder {
        color: #FF6600;
        opacity: 1;
    }

    .violetC::placeholder {
        color: #4D54D6;
        opacity: 1;
    }

    .input-container2 input[type=number]:focus {
        border-color: #4D54D6;
        outline: none;
    }

    .input-container2:focus {
        border-color: #4D54D6;
        outline: none;
    }


    @media screen and (width: 1920px) and (height: 1080px) {
        .exception {
            bottom: 1rem;
        }
    }

    .input-container {
        position: relative;
    }
    .input-container::after {
        content: "€";
        position: absolute;
        right: 3vh;
        top: 50%;
        font-size: 20px;
        transform: translateY(-50%);
    }

    .input-container2 {
        position: relative;
    }
    .input-container2::after {
        content: "€";
        position: absolute;
        right: 3vh;
        top: 50%;
        font-size: 20px;
        color: #4D54D6;
        transform: translateY(-50%);
    }
    @media (max-width: 375px) {

        .input-container::after {
            right: 9vh;
        }
        .input-container2::after {
            right: 9vh;
        }
    }
    @media (min-width: 768px) {
        .input-container::after {
            right: 1rem;
        }

    }
</style>
