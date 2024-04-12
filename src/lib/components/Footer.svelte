<script>
    let isPopupOpened = false;
</script>


<div class="w-screen hidden md:flex py-6 flex-col items-center justify-center relative">
    <div class="flex py-20 flex-row items-center justify-center gap-10 xl:gap-20">
        <a href="https://curie.fr/" target="_blank" class="absolute left-5 xl:left-20">
            <img src="/LOGO-Curie-footer.png" class="w-[80px]">
        </a>
        <p class="2xl:text-2xl font-Raleway text-[#5C5C5C] uppercase">
            Gestions des cookies
        </p>
        <a href="https://curie.fr/page/mentions-legales" target="_blank" class="2xl:text-2xl font-Raleway text-[#5C5C5C] uppercase">
            Mentions légales
        </a>
        <a on:click={()=> isPopupOpened = !isPopupOpened}>
            <button class="2xl:text-2xl font-Raleway text-[#5C5C5C] uppercase">
                Crédits
            </button>
        </a>
        <a href="https://curie.fr/webform/nous-contacter" target="_blank" >
            <button class="2xl:text-2xl font-Raleway text-[#5C5C5C] uppercase">
            Contact
            </button>
        </a>
        <div class="flex flex-row gap-5 absolute right-10">
            <a href="https://www.linkedin.com/company/institutcurie/" target="_blank">
                <img src="/linkedin.png" width="23px">
            </a>
            <a href="https://twitter.com/institut_curie" target="_blank">
                <img src="/x.png" width="23px">
            </a>
            <a target="_blank" href="https://fr-fr.facebook.com/InstitutCurie">
                <img src="/faceb.png" width="12px">
            </a>
            <a target="_blank" href="https://www.instagram.com/institut_curie/">
                <img src="/instagram.png" width="23px">
            </a>
        </div>
    </div>
    <p class="text-center text-[#5C5C5C] 2xl:mt-10 px-40 2xl:px-60">
        © Institut Curie - 2024<br/>
        Fondation reconnue d’utilité publique depuis 1921, l’Institut Curie est habilité à recevoir des dons et legs. Siège social : 26 rue d’Ulm 75248 Paris •<br/>&nbsp;Numéro SIRET : 784 257 164 00011 • Contact du service relation donateurs : 01.56.24.55.66 ou soutenir.curie@curie.fr
    </p>
</div>

<div class="flex flex-col items-center justify-center mt-10 gap-5 md:hidden">
    <a href="https://curie.fr/" target="_blank" class="">
        <img src="/LOGO-Curie-footer.png" class="w-[80px]">
    </a>
    <div class="flex flex-row gap-5 ">
        <a href="https://www.linkedin.com/company/institutcurie/" target="_blank">
            <img src="/linkedin.png" width="23px">
        </a>
        <a href="https://twitter.com/institut_curie" target="_blank">
            <img src="/x.png" width="23px">
        </a>
        <a target="_blank" href="https://fr-fr.facebook.com/InstitutCurie">
            <img src="/faceb.png" width="12px">
        </a>
        <a target="_blank" href="https://www.instagram.com/institut_curie/">
            <img src="/instagram.png" width="23px">
        </a>
    </div>

    <p class="2xl:text-2xl font-Raleway text-[#5C5C5C] uppercase">
        Gestions des cookies
    </p>
    <a href="https://curie.fr/page/mentions-legales" target="_blank" class="2xl:text-2xl font-Raleway text-[#5C5C5C] uppercase">
        Mentions légales
    </a>
    <a on:click={()=> isPopupOpened = !isPopupOpened} class="2xl:text-2xl font-Raleway text-[#5C5C5C] uppercase">
        Crédits
    </a>
    <a href="https://curie.fr/webform/nous-contacter" target="_blank">
        <button class="2xl:text-2xl font-Raleway text-[#5C5C5C] uppercase">
            Contact
        </button>
    </a>
    <p class="text-center text-[#5C5C5C] px-10 ">
        © Institut Curie - 2024<br/>
        Fondation reconnue d’utilité publique depuis 1921, l’Institut Curie est habilité à recevoir des dons et legs.
        Siège social : 26 rue d’Ulm 75248 Paris •<br/>&nbsp;Numéro SIRET : 784 257 164 00011 •
        Contact du service relation donateurs : 01.56.24.55.66 ou soutenir.curie@curie.fr
    </p>
</div>

{#if isPopupOpened}
    <div class="fixed top-0 left-0 right-0 px-10  m-auto bottom-0 w-screen h-60 md:w-[80vh] 2xl:w-[60vh] md:h-[40vh] 2xl:h-[30vh] z-[70] backdrop-blur-[900px] bg-opacity-50 flex flex-row items-center gap-2 md:gap-10 justify-center">
        <button class="absolute z-[80] top-2 right-5 xl:right-5 2xl:right-10 md:top-5  hover:scale-125 transition-all" on:click={()=> isPopupOpened = false}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25.979" height="25.979" viewBox="0 0 25.979 25.979">
                <g id="Group_620" data-name="Group 620" transform="translate(-1219.086 -100.935)">
                    <line id="Line_1" data-name="Line 1" x2="23.151" y2="23.151" transform="translate(1220.5 102.349)" fill="black" stroke="black" stroke-width="4"/>
                    <line id="Line_2" data-name="Line 2" x1="23.151" y2="23.151" transform="translate(1220.5 102.349)" fill="black" stroke="black" stroke-width="4"/>
                </g>
            </svg>
        </button>
        <div class="relative flex flex-col items-center justify-center w-1/2">
            <p class="absolute -top-20 font-Raleway text-[12px] md:text-[14px] text-center">
                <span class="text-base  2xl:text-xl font-bold">Réalisation :<br/></span>
                <span class="font-bold text-orange-500">Adfinitas</span>
            </p>
        </div>
        <div class="relative flex flex-col items-center justify-center w-1/2">
            <p class="font-Raleway text-[12px] md:text-[14px] text-center absolute -top-20 px-2">
                <span class="text-base  2xl:text-xl font-bold ">Crédits photos :<br/></span>
                © Institut Curie / Thibaut Voisin<br/>
                © Institut Curie / Juery Franck<br/>
                © Institut Curie / Beloncle Franck<br/>
                © Institut Curie / Matias Manon
            </p>
        </div>
    </div>
{/if}

