<script>
    import {fade} from "svelte/transition";

    let projectIndex = 0;
    import {projectIndexStore} from "$lib/utils/utils";

    let videoOpen = false;
</script>

{#if videoOpen}
    <div transition:fade class="bg-black/60 fixed z-50 top-0 left-0 w-full h-screen flex justify-center items-center">
        <div class="relative w-full max-w-[90vw] sm:max-w-[70vw]">
            <div style="padding:56.25% 0 0 0;position:relative;" class="relative">
                <iframe src="https://player.vimeo.com/video/1072536544?autoplay=1&amp;loop=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                        frameborder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;" title="project-video"></iframe>

                <button
                        on:click={() => (videoOpen = false)}
                        class="absolute bottom-[calc(100%+3px)] z-30 cursor-pointer transition-all hover:scale-125 max-md:right-0 md:left-[calc(100%+3px)]">
                    <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            class="w-10 h-10 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
{/if}

<div class="relative flex items-center justify-center w-full mt-10 z-0">
    <div style="box-shadow: 0px 6px 40px rgba(0, 0, 0, 0.16);"
         class="w-[90%] 2xl:w-[80%] flex flex-col items-center justify-center bg-[#F1F2FC] rounded-3xl py-4 2xl:py-10">
        <p class="mb-2 text-center lg:text-2xl uppercase font-bold font-Raleway text-[#505050]">
            <span class="text-[#FF6600]">Contre le cancer,</span><br/>
            investissez votre impôt dans l’innovation
        </p>
        <div class="px-5 xl:px-10 flex flex-row mt-5 gap-5 2xl:mt-6 w-full items-end justify-between">
            <button class="tab" data-selected={$projectIndexStore === 0}
                    on:click={() => (window.location.hash = '#projet1')}>Se doter des équipements les plus performants
            </button>
            <button class="tab" data-selected={$projectIndexStore === 1}
                    on:click={() => (window.location.hash = '#projet2')}>Mobiliser les meilleurs talents contre le
                cancer
            </button>
            <button class="tab" data-selected={$projectIndexStore === 2}
                    on:click={() => (window.location.hash = '#projet3')}>Radiothérapie : développer une technique unique
                au monde
            </button>
        </div>
        {#if $projectIndexStore === 0}
            <div class="px-5 xl:px-10 w-full">
                <div id="projet1"
                     class="bg-[url('/bg-project-1.jpg')] bg-cover bg-no-repeat relative w-full h-[20rem] 2xl:h-[39rem]"></div>
                <div class="w-full h-24 bg-[#4D54D6] grid place-items-center font-medium rounded-b-2xl text-lg md:text-xl !leading-tight text-white"
                     style="text-wrap: balance">
                    <div class="max-w-[870px] text-center">
                        <span class="font-extrabold">Acquérir un microscope de pointe</span> pour développer le projet
                        révolutionnaire des tumeurs sur puces
                    </div>
                </div>
            </div>
            <div class="flex flex-row items-center justify-center w-full xl:mt-5 px-5 xl:px-10 py-2 2xl:py-10  relative h-[40rem] 2xl:h-[54rem]">
                <div class="w-1/2 flex flex-col h-full 2xl:mt-4">
                    <p class="text-xl font-Lato font-bold text-[#4D54D6] underline uppercase">
                        L’Enjeu
                    </p>
                    <p class="text-[#505050] font-Lato text-sm 2xl:text-xl mt-2 xl:mt-5">
                        Pour prendre le cancer de vitesse, investir dans des équipements de pointe est une nécessité.
                        Par exemple, le Dr Stéphanie Descroix, a actuellement besoin d’acquérir un nouveau microscope
                        dans le cadre du projet de recherche des « <span class="font-bold">tumeurs sur puce</span> ».
                    </p>
                    <p class="text-xl font-Lato mt-2 xl:mt-5 font-bold text-[#4D54D6] uppercase underline">
                        Les perspectives pour les patients
                    </p>
                    <p class="text-[#505050] font-Lato text-sm 2xl:text-xl mt-2 xl:mt-5">
                        <span class="italic">« L’acquisition de cet équipement permettra d’exploiter pleinement le potentiel révolutionnaire des tumeurs sur puce. <span
                                class="font-bold">Il apportera une économie de temps et de ressources permettant de progresser plus vite dans le projet de recherche et de délivrer plus rapidement des traitements ultra- personnalisés pour chaque patient.</span> »</span><br/><br/>

                        Dr Stéphanie Descroix
                    </p>
                </div>
                <div class="w-1/2 flex flex-col h-full relative ml-5 2xl:mt-4">
                    <p class="text-xl font-Lato font-bold text-[#4D54D6] underline uppercase">
                        L’innovation
                    </p>
                    <p class="text-[#505050] font-Lato text-sm 2xl:text-xl  mt-2 xl:mt-5">
                        Les tumeurs sur puce sont des dispositifs miniaturisés permettant de reconstituer fidèlement, in
                        vitro, la tumeur d’un patient. L’intérêt de cette innovation technologique est de pouvoir tester
                        les traitements sur la tumeur sur puce afin d’identifier celui que sera le plus efficace pour le
                        cancer du patient étudié.<br/><br/>

                        Mais ce projet nécessite des technologies d’imagerie avancées et l’acquisition d’un équipement
                        de pointe : un microscope confocal à balayage laser multi dimensionnel. <span class="font-bold">Celui-ci permettra de révéler des détails invisibles jusqu’alors et, moins agressif, il permet de maintenir les cellules en vie plus longtemps afin de permettre aux chercheurs de réaliser de plus longues observations.</span>
                    </p>
                    <p class="text-xl  font-Lato font-bold text-[#4D54D6] underline uppercase mt-5 xl:mt-6 2xl:mt-10">
                        La porteuse du projet
                    </p>
                    <div class="flex flex-row bg-[#4D54D6] items-center justify-center mt-5 xl:mt-6 2xl:mt-10">
                        <img src="/project-1-author.png" alt="Dr Stéphanie Descroix"
                             class=" md:w-[10rem] xl:w-[300px] h-full object-cover">
                        <p class="text-white text-xl 2xl:text-2xl !leading-tight font-Lato p-2 my-3 md:p-4">
                            <span class="font-bold font-Raleway">
                                Dr Stéphanie Descroix,<br/>
                            </span>
                            cheffe de l’équipe Macromolécules et Microsystèmes en Biologie et en Médecine à l’Institut
                            Curie
                        </p>
                    </div>
                    <div class="text-center bg-white font-Raleway font-bold py-3 xl:py-5 mt-5 xl:mt-6 2xl:mt-10">
                        <p class="text-2xl px-5 text-[#4D54D6]">
                            COÛT DU MICROSCOPE DE POINTE<br/>
                            <span class="underline">600 000 €</span>
                        </p>
                    </div>
                </div>
            </div>
        {:else if $projectIndexStore === 1}
            <div class="px-5 xl:px-10 w-full">
                <div id="projet2"
                     class="bg-[url('/bg-project-2.jpg')] bg-cover bg-no-repeat relative w-full h-[22rem] 2xl:h-[39rem]"></div>
                <div class="w-full h-24 bg-[#4D54D6] grid place-items-center font-medium rounded-b-2xl text-lg md:text-xl !leading-tight text-white"
                     style="text-wrap: balance">
                    <div class="max-w-[870px] text-center">
                        <span class="font-extrabold">Accueillir les meilleurs experts</span> pour<br/> accélérer
                        l’innovation et le progrès
                    </div>
                </div>
            </div>
            <div class="flex flex-row items-center justify-center  h-[50rem] 2xl:h-[60rem]  w-full xl:mt-5 px-5 xl:px-10 py-5 xl:py-5 relative">
                <div class="w-1/2 flex flex-col relative h-full">
                    <p class="text-xl font-Lato font-bold text-[#4D54D6] underline uppercase ">
                        L’Enjeu
                    </p>
                    <p class="text-[#505050] font-Lato text-sm 2xl:text-xl mt-10">
                        Pour frapper plus vite et plus fort contre le cancer, l’Institut Curie se dote des compétences
                        les plus pointues et mobilise les jeunes talents.<br/><br/>
                        C’est dans ce contexte que le Dr Pierre Bost a rejoint récemment l’Institut Curie. Sa mission ?
                        Fournir de nouveaux outils informatiques et statistiques pour analyser de données obtenues par
                        imagerie multiplexée, une technique d’imagerie qui permet de visualiser simultanément plusieurs
                        composants biologiques dans un échantillon.
                    </p>
                    <p class="text-xl font-Lato underline font-bold text-[#4D54D6] uppercase mt-10">
                        Les perspectives pour les patients
                    </p>
                    <p class="text-[#505050] font-Lato text-sm 2xl:text-xl mt-10">
                        Le projet porté par le Dr Bost permettra <span class="font-bold">d’améliorer considérablement l’interprétation de milliers de données</span>
                        pour les traduire en informations biologiquement pertinentes et avancer dans la compréhension
                        des cancers.
                    </p>
                </div>
                <div class="w-1/2 flex flex-col relative h-full ml-5">
                    <p class="text-xl font-Lato font-bold text-[#4D54D6] underline uppercase">
                        Le dispositif
                    </p>
                    <p class="text-[#505050] font-Lato text-sm 2xl:text-xl mt-10">
                        L’Institut Curie offre aux Junior Principal Investigator (JPI) un accompagnement financier pour
                        le recrutement de leur équipe et une aide personnalisée (mise à disposition de locaux, accès aux
                        plateformes technologiques, soutiens administratifs…) afin qu’ils puissent débuter leur activité
                        de recherche dans les meilleures conditions. Cette politique d’accompagnement est entièrement
                        financée par vos dons.
                    </p>
                    <p class="text-xl  font-Lato font-bold text-[#4D54D6] underline uppercase mt-5 xl:mt-6 2xl:mt-10">
                        Le porteur du projet
                    </p>
                    <div class="flex flex-row bg-[#4D54D6] items-center justify-center mt-5 xl:mt-6 2xl:mt-10">
                        <img src="/project-2-author.png" alt="Dr Pierre Bost"
                             class=" md:w-[10rem] xl:w-[300px] h-full object-cover">
                        <p class="text-white text-xl 2xl:text-2xl !leading-tight font-Lato p-2 my-3 md:p-4">
                            <span class="font-bold font-Raleway">
                                Dr Pierre Bost,<br/>
                            </span>
                            chef de l’équipe Dynamique et hétérogénéité du transcriptome en contexte infectieux à
                            l’Institut Curie
                        </p>
                    </div>
                    <div class="text-center bg-white font-Raleway font-bold py-3 xl:py-5 mt-5 xl:mt-6 2xl:mt-10">
                        <p class="text-2xl px-5 text-[#4D54D6]">
                            COÛT ANNUEL D’UNE ÉQUIPE JUNIOR PRINCIPAL INVESTIGATOR <span class="font-light">(JPI)</span><br/>
                            <span class="underline">239 000 €</span>
                        </p>
                    </div>
                </div>
            </div>
        {:else if $projectIndexStore === 2}
            <div class="px-5 xl:px-10 w-full">
                <div id="projet3"
                     class="bg-[url('/bg-project-3.jpg')] bg-cover bg-no-repeat relative w-full h-[22rem] 2xl:h-[39rem]"></div>
                <div class="w-full h-24 bg-[#4D54D6] grid place-items-center font-medium rounded-b-2xl text-lg md:text-xl !leading-tight text-white"
                     style="text-wrap: balance">
                    <div class="max-w-[870px] text-center">
                        <span class="font-extrabold">Entrer dans une nouvelle ère de la radiothérapie</span><br/> en
                        déployant une technologie inédite
                    </div>
                </div>
            </div>
            <div class="flex flex-row items-center justify-center w-full relative h-[60rem] 2xl:h-[65rem]  px-5 xl:px-10 py-5 xl:py-10">
                <div class="w-1/2 flex flex-col h-full">
                    <p class="text-xl font-Lato font-bold text-[#4D54D6] underline uppercase">
                        Le contexte
                    </p>
                    <p class="text-[#505050] font-Lato text-sm 2xl:text-xl mt-4">
                        En 2011, après 10 ans de recherche fondamentale, l’Institut Curie annonçait une découverte
                        révolutionnaire : la radiothérapie FLASH, qui permet de délivrer des rayons très intenses en
                        moins d’une seconde, pour détruire les cellules tumorales tout en épargnant les tissus
                        sains.<br/><br/>
                        En 2025, l’Institut Curie se fonde sur cette découverte pour installer, d’ici 3 ans, au cœur de
                        l’hôpital, une plateforme, unique au monde, munie d’un irradiateur de faisceaux d’électrons de
                        très hautes énergies : c’est le projet FRATHEA. Les équipes de recherche de l’Institut Curie
                        mènent en parallèle des études visant à évaluer cette technique au stade des essais cliniques.
                        <span class="font-bold">L’ambition : démarrer les premiers essais auprès de patients touchés par des cancers de mauvais pronostic.</span>
                    </p>
                    <p class="text-xl font-Lato font-bold underline text-[#4D54D6] uppercase mt-10">
                        Les perspectives pour les patients
                    </p>
                    <p class="text-[#505050] font-Lato text-sm 2xl:text-xl mt-4">
                        À terme, la radiothérapie FLASH-VHEE promet des avancées révolutionnaires pour la santé des
                        patients :
                    </p>
                    <ul>
                        <li class="text-[#505050] text-sm 2xl:text-xl font-Lato font-bold">
                            Traitement de toutes les tumeurs même les plus profondes,
                        </li>
                        <li class="text-[#505050] text-sm 2xl:text-xl font-Lato font-bold">
                            Préservation des tissus sains,
                        </li>
                        <li class="text-[#505050] text-sm 2xl:text-xl font-Lato font-bold">
                            Raccourcissement de la durée des séances et du traitement.
                        </li>
                    </ul>
                </div>
                <div class="w-1/2 flex flex-col relative h-full 2xl:h-[60rem] ml-5">
                    <p class="text-xl font-Lato font-bold text-[#4D54D6] underline uppercase">
                        L’innovation
                    </p>
                    <button on:click={() => videoOpen = true}
                            class="relative w-full aspect-video mt-4 group bg-[url(video-preview.png)] bg-center bg-cover">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79.254 79.254"
                             class="transition-all w-14 group-hover:w-[66px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <path id="Tracé_635" data-name="Tracé 635"
                                  d="M63.627,24a39.627,39.627,0,1,0,39.627,39.627A39.627,39.627,0,0,0,63.627,24ZM79.078,66.134,59.264,79.851a3.048,3.048,0,0,1-4.782-2.507V49.91A3.048,3.048,0,0,1,59.264,47.4L79.078,61.12a3.048,3.048,0,0,1,0,5.014Z"
                                  transform="translate(-24 -24)" fill="#fff"/>
                        </svg>
                    </button>
                    <p class="text-xl  font-Lato font-bold text-[#4D54D6] underline uppercase mt-5 xl:mt-6 2xl:mt-10">
                        Le porteur du projet
                    </p>
                    <div class="flex flex-row bg-[#4D54D6] items-center justify-center mt-5 xl:mt-6 2xl:mt-10">
                        <img src="/project-3-author.png" alt="Pr Gilles Créhange"
                             class=" md:w-[10rem] xl:w-[300px] h-full object-cover">
                        <p class="text-white text-xl 2xl:text-2xl !leading-tight font-Lato p-2 my-3 md:p-4">
                            <span class="font-bold font-Raleway">
                                Pr Gilles Créhange,<br/>
                            </span>
                            chef du département de Radiothérapie oncologique et coordonnateur du projet FRATHEA à
                            l’Institut Curie
                        </p>
                    </div>
                    <div class="text-center bg-white font-Raleway font-bold py-3 xl:py-5 mt-5 xl:mt-6 2xl:mt-10">
                        <p class="text-2xl px-5 text-[#4D54D6]">
                            COÛT ANNUEL D’UNE ÉQUIPE DE RECHERCHE<br/>
                            <span class="underline">292 000 €</span>
                        </p>
                    </div>
                </div>
            </div>
        {/if}

        <div class="flex items-center mx-auto gap-4">
            <button on:click={() => $projectIndexStore = 0}
                    class="w-5 h-5 {$projectIndexStore === 0 ? 'bg-[#FF6600]' : 'bg-white'} border-[3px] border-[#FF6600] rounded-full transition-all"></button>
            <button on:click={() => $projectIndexStore = 1}
                    class="w-5 h-5 {$projectIndexStore === 1 ? 'bg-[#FF6600]' : 'bg-white'} border-[3px] border-[#FF6600] rounded-full transition-all"></button>
            <button on:click={() => $projectIndexStore = 2}
                    class="w-5 h-5 {$projectIndexStore === 2 ? 'bg-[#FF6600]' : 'bg-white'} border-[3px] border-[#FF6600] rounded-full transition-all"></button>
        </div>
    </div>
</div>

<style lang="postcss">
    .tab {
        @apply rounded-t-2xl flex-1 text-lg px-10 h-24 font-bold md:text-xl !leading-tight data-[selected=true]:bg-[#4D54D6] data-[selected=true]:text-white text-[#4D54D6] transition-colors bg-white hover:bg-[#4D54D6]/20;
    }

    ul {
        list-style: none;
        padding-left: 0;
    }

    ul li {
        position: relative;
        padding-left: 2rem;
        padding-top: 1rem;
    }

    ul li::before {
        content: "•";
        color: #4D54D6;
        position: absolute;
        font-size: 2rem;
        left: 0;
        top: 1rem;
    }

    .underline {
        text-decoration-line: underline;
        text-decoration-color: #FF6600;
        text-decoration-thickness: 3px;
        text-underline-offset: 5px;
    }

    .purple-project {
        clip-path: polygon(0 74%, 100% 55%, 100% 100%, 0% 100%);
    }
</style>
