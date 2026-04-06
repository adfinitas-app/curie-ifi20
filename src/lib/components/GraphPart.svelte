<script>
    import { passUtmParamsToLink } from "$lib/utils/links";

    let poppOpened = false;
</script>

<div
    class="w-full relative flex flex-col items-center justify-center gap-5 backdrop-blur-3xl bg-transparent"
>
    <div class="mt-[20rem] md:mt-52 2xl:mt-60 bg-white">
        <p
            class="-z-10 text-center uppercase font-bold font-Raleway text-[20px] mb-2 md:mb-0 px-5 md:px-0 lg:text-2xl 2xl:text-3xl text-[#505050]"
        >
            <span class="text-[#FF6600]">Contre le cancer</span>, réduisez vos
            impôts<br class="hidden md:block" />
            En finançant des projets porteurs d’espoir
        </p>
        <div
            class="flex flex-col md:flex-row items-center  md:items-stretch justify-center md:gap-10 xl:gap-20 mt-10 md:mt-3 xl:mt-12"
        >
            <div
                class="flex flex-col text-center items-center text-[#505050] relative justify-center w-[95%] md:w-auto flex-1 xl:w-[25rem] lg:w-[25rem] 2xl:w-[40rem] rounded-2xl gap-5 md:gap-2 xl:gap-3 px-5 py-8 md:py-16"
                style="box-shadow: 0px 6px 40px rgba(0, 0, 0, 0.1);"
            >
                <p
                    class=" font-Raleway font-bold text-[20px] md:text-2xl 2xl:text-3xl"
                >
                    Impôt<br />
                    sur la Fortune Immobilière
                </p>
                <p class="font-bold text-[18px] 2xl:text-2xl font-Lato">
                    <span class="text-[#FF6600]"
                        >75 % du montant de votre don est <br />déductible de
                        votre lFI</span
                    >, <br />dans la limite de 50 000 €.
                </p>
                <p class="2xl:text-2xl">Par exemple :</p>
                <img
                    src="/graph1.png"
                    class="w-[311px] md:w-[20rem] xl:w-[17rem] 2xl:w-[25rem] max-md:mb-9"
                    alt="graph"
                />
                <a
                    target="_blank"
                    href={passUtmParamsToLink("https://aider.curie.fr/if26/?utm_campaign=26ifi&utm_medium=organic&utm_source=landing")}
                    class="bg-[#FF6600] uppercase w-[268px] md:w-[320xp] hover:scale-110 text-[16px] md:text-sm 2xl:text-base text-white md:p-2 xl:py-2 xl:px-7 2xl:py-2 2xl:px-16 font-Raleway font-bold transition-all absolute top-full -translate-y-1/2"
                >
                    JE FAIS UN DON<br />
                    Déductible de<br />
                    <span class="font-black">l’IFI</span>
                </a>
            </div>
            <div
                class="mt-20 md:mt-0 flex flex-1 flex-col text-center items-center text-[#505050] relative justify-center w-[95%] md:w-auto xl:w-[25rem] lg:w-[25rem] 2xl:w-[40rem] rounded-2xl gap-5 md:gap-2 xl:gap-3 px-5 py-8 md:py-16"
                style="box-shadow: 0px 6px 40px rgba(0, 0, 0, 0.1);"
            >
                <p
                    class=" font-Raleway font-bold text-[20px] md:text-2xl 2xl:text-3xl"
                >
                    Impôt<br />
                    sur le Revenu
                </p>
                <p class="font-bold text-[18px] 2xl:text-2xl font-Lato">
                    <span class="text-[#4D54D6]"
                        >66 % du montant de votre don est<br /> déductible de votre
                        lR</span
                    >,<br /> dans la limite de 20 % de<br /> votre revenu net imposable.
                </p>
                <p class="2xl:text-2xl">Par exemple :</p>
                <img
                    src="/graph2.png"
                    class="w-[311px] md:w-[20rem] xl:w-[17rem] 2xl:w-[25rem] max-md:mb-9"
                    alt="graph"
                />
                <a
                    target="_blank"
                    href={passUtmParamsToLink("https://aider.curie.fr/don149/?utm_campaign=26ifi&utm_medium=organic&utm_source=landing")}
                    class="bg-[#4D54D6] text-center uppercase w-[268px] md:w-[320xp] hover:scale-110 text-[16px] md:text-sm 2xl:text-base text-white md:p-2 xl:py-2 xl:px-7 2xl:py-2  font-Raleway font-bold transition-all absolute top-full -translate-y-1/2"
                >
                    JE FAIS UN DON<br />
                    Déductible de<br />
                    <span class="font-black">L’impôt sur le revenu</span>
                </a>
            </div>
        </div>
    </div>
</div>
<button
    on:click={() => (poppOpened = true)}
    class="hidden md:block md:my-[6rem] lg:my-[8rem] font-Lato font-bold text-xl 2xl:text-3xl text-center text-[#505050] underline cursor-pointer mx-auto"
>
    <p>Je souhaite faire un don déductible de l’Impôt sur les Sociétés</p>
</button>

<div class="md:hidden mt-20 w-full flex items-center justify-center">
    <button
        on:click={() => (poppOpened = true)}
        class="font-bold font-Lato text-[16px] py-4 px-3 w-[80%] cursor-pointer bg-white border-2 border-[#505050] text-[#505050]"
    >
        Je souhaite faire un don déductible de l’Impôt sur les Sociétés
    </button>
</div>

{#if poppOpened}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        role="presentation"
        class="fixed top-0 left-0 w-full h-screen z-[70] backdrop-blur-xl bg-opacity-50 flex items-center justify-center"
        on:click={() => (poppOpened = false)}
    >
        <button
            class="hidden md:block absolute right-[14rem] top-10 xl:right-[20rem] 2xl:top-32 hover:scale-125 transition-all"
            on:click={() => (poppOpened = false)}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25.979"
                height="25.979"
                viewBox="0 0 25.979 25.979"
            >
                <g
                    id="Group_620"
                    data-name="Group 620"
                    transform="translate(-1219.086 -100.935)"
                >
                    <line
                        id="Line_1"
                        data-name="Line 1"
                        x2="23.151"
                        y2="23.151"
                        transform="translate(1220.5 102.349)"
                        fill="black"
                        stroke="#fff"
                        stroke-width="4"
                    />
                    <line
                        id="Line_2"
                        data-name="Line 2"
                        x1="23.151"
                        y2="23.151"
                        transform="translate(1220.5 102.349)"
                        fill="black"
                        stroke="#fff"
                        stroke-width="4"
                    />
                </g>
            </svg>
        </button>
        <button
            on:click={() => (poppOpened = false)}
            class="md:hidden absolute bg-white z-50 rounded-full right-3 top-[1.25rem] w-7 h-7"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                    d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"
                />
            </svg>
        </button>

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
            role="presentation"
            class="bg-white flex flex-col items-center justify-center text-center rounded-2xl p-6 2xl:p-10 gap-3 xl:gap-5 relative"
            on:click|stopPropagation
        >
            <p class="font-Raleway font-bold text-2xl 2xl:text-4xl">
                Impôt<br />
                sur les Sociétés
            </p>
            <p class="font-bold text-xl xl:text-2xl font-Lato">
                <span class="text-[#34B3C5]"
                    >60 % du montant de votre don est<br /> déductible de votre lS</span
                >, dans la limite de 0,5 %<br /> de votre chiffre d’affaires hors
                taxes.
            </p>
            <p class="text-xl 2xl:text-2xl">Par exemple :</p>
            <img
                src="/graph3.png"
                class="w-[20rem] 2xl:w-[30rem] mb-7"
                alt="graph"
            />
            <a
                target="_blank"
                href={passUtmParamsToLink("https://aider.curie.fr/is195/?utm_campaign=26ifi&utm_medium=organic&utm_source=landing")}
                class="text-center bg-[#34B3C5] uppercase w-[268px] 2xl:w-[400px] text-[16px] md:text-xs 2xl:text-xl text-white lg:px-2 xl:px-7 py-3 2xl:px-16 font-Raleway hover:scale-110 font-bold transition-all absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
                JE FAIS UN DON<br />
                Déductible de<br />
                <span class="font-black">L’impôt sur les Sociétés</span>
            </a>
        </div>
    </div>
{/if}
