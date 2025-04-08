<script>
    import {fade, fly} from "svelte/transition";
    import {projectIndexStore} from "$lib/utils/utils.js";

    let projectTitle = [
        "Se doter des équipements les plus performants",
        "Mobiliser les meilleurs talents contre le cancer",
        "Radiothérapie : développer une technique unique au monde"
    ];
    let projectSelector = false;
    let showMore = false;
    let videoOpen = false;

    function setProjectIndex(index, str) {
        const element = document.getElementById('ProjectsDesktop')

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }

        if (str === "<span class='font-bold'>Acquérir un microscope de pointe</span> pour développer le projet révolutionnaire des tumeurs sur puces")
            $projectIndexStore = 0;
        else if (str === "<span class='font-bold'>Accueillir les meilleurs</span> experts pour accélérer l’innovation et le progrès")
            $projectIndexStore = 1;
        else if (str === "<span class='font-bold'>Entrer dans une nouvelle ère de la radiothérapie</span> en déployant une technologie inédite")
            $projectIndexStore = 2;
        window.location.hash = `#projet${index + 1}`;
    }
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

<div style="box-shadow: 0px 6px 40px rgba(0, 0, 0, 0.16);"
     class="bg-[#F1F2FC] w-[95%] flex flex-col items-center justify-center rounded-2xl py-5 mt-[3rem] relative">
    <div id="ProjectsMobile" class="absolute -top-40"/>
    <p class="text-[#505050] font-Raleway font-bold text-[20px] uppercase text-center">
        Contre le cancer,<br/>
        investissez votre impôt<br/>
        dans l’innovation
    </p>
    <div class="bg-[#FF6600] w-[10rem] h-1 rounded-3xl"/>
    <div class="px-3 w-full">
        <div class="bg-[#4D54D6] w-full mt-5 flex flex-col items-center justify-center relative rounded-t-2xl">
            <div on:click={()=> projectSelector = !projectSelector}
                 class="flex flex-row items-center justify-center w-full  h-[88px] gap-x-4 py-4">
                <p class="font-Raleway text-white text-[18px] leading-tight font-bold w-[70%]">
                    {@html projectTitle[$projectIndexStore]}
                </p>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
                        <g id="Group_759" data-name="Group 759" transform="translate(-326 -2692)">
                            <circle id="Ellipse_40" data-name="Ellipse 40" cx="17" cy="17" r="17"
                                    transform="translate(326 2692)" fill="#fff"/>
                            <path id="Path_638" data-name="Path 638" d="M14162.583,5344l8.7,8.7,8.7-8.7"
                                  transform="translate(-13828.284 -2637)" fill="none" stroke="#4d54d6"
                                  stroke-linecap="round" stroke-width="3"/>
                        </g>
                    </svg>
                </button>
            </div>
            {#if projectSelector}
                <div class="absolute w-full -bottom-[11rem]">
                    <button in:fly
                            on:click={()=> {setProjectIndex(1, projectTitle[($projectIndexStore + 1) % projectTitle.length]); projectSelector = false}}
                            class="bg-white text-[#505050] text-left  uppercase h-[88px] w-full border-2 border-[#505050] p-5">
                        <p class="font-Raleway font-bold text-[18px] leading-tight m-0">
                            {@html projectTitle[($projectIndexStore + 1) % projectTitle.length]}
                        </p>
                    </button>
                    <button in:fly
                            on:click={()=> {setProjectIndex(2, projectTitle[($projectIndexStore + 2) % projectTitle.length]); projectSelector = false}}
                            class="bg-white text-[#505050] text-left  uppercase h-[88px] w-full border-x-2 border-b-2 border-[#505050] p-5">
                        <p class="font-Raleway font-bold text-[18px] leading-tight m-0">
                            {@html projectTitle[($projectIndexStore + 2) % projectTitle.length]}
                        </p>
                    </button>
                </div>
            {/if}
        </div>
    </div>
    {#if $projectIndexStore === 0}
        <div id="projet1" class="flex flex-col gap-y-5">
            <div class="px-3">
                <img src="/bg-project-1-mobile.jpg" class="w-full aspect-[340/240] object-cover"/>
                <div class="bg-[#4D54D6] rounded-b-2xl min-h-[80px] py-2.5 w-full px-10 text-white flex justify-center items-center leading-tight text-center">
                    <span><span class="font-bold">Acquérir un microscope de pointe</span> pour développer le projet
                    révolutionnaire des tumeurs sur puces</span>
                </div>
            </div>

            <div class="flex flex-col">
                <p class="underline uppercase text-[#4D54D6] text-[18px] font-bold px-3">
                    l'enjeu
                </p>
            </div>
            <p class="font-Lato text-[16px] px-3 text-[#505050]">
                Pour prendre le cancer de vitesse, investir dans des équipements de pointe est une nécessité. Par
                exemple, le Dr Stéphanie Descroix, a actuellement besoin d’acquérir un nouveau microscope dans le cadre
                du projet de recherche des « tumeurs sur puce ».
            </p>
            <div class="flex flex-col">
                <p class="underline uppercase text-[#4D54D6] text-[18px] font-bold px-3">
                    l'innovation
                </p>
            </div>
            <p class="font-Lato text-[16px] px-3 text-[#505050]">
                Les tumeurs sur puce sont des dispositifs miniaturisés permettant de reconstituer fidèlement, in vitro,
                la tumeur d’un patient. L’intérêt de cette innovation technologique est de pouvoir tester les
                traitements sur la tumeur sur puce afin d’identifier celui que sera le plus efficace pour le cancer du
                patient étudié.<br/><br/>
                Mais ce projet nécessite des technologies d’imagerie avancées et l’acquisition d’un équipement de pointe
                : un microscope confocal à balayage laser multi dimensionnel. <span class="font-bold">Celui-ci permettra de révéler des détails
                invisibles jusqu’alors et, moins agressif, il permet de maintenir les cellules en vie plus longtemps
                afin de permettre aux chercheurs de réaliser de plus longues observations.</span>
            </p>
            <div class="flex flex-col">
                <p class="underline uppercase text-[#4D54D6] text-[18px] font-bold px-3">
                    Les perspectives pour les patients
                </p>
            </div>
            <p class="font-Lato text-[16px] px-3 text-[#505050] italic">
                « L’acquisition de cet équipement permettra d’exploiter pleinement le potentiel révolutionnaire des
                tumeurs sur puce. <span class="font-bold">Il apportera une économie de temps et de ressources permettant de progresser plus vite
                dans le projet de recherche et de délivrer plus rapidement des traitements ultra- personnalisés pour
                chaque patient.</span> »<br/><br/>
                Dr Stéphanie Descroix
            </p>
            <div class="flex flex-col relative gap-y-5">
                {#if showMore === false}
                    <div class="flex items-center justify-center mb-10">
                        <button on:click={()=> showMore = true}
                                class="text-[#4D54D6] font-Lato font-bold bg-[#F1F2FC] border-[#4D54D6] border-2 w-[169px] py-2">
                            En savoir plus
                        </button>
                    </div>
                {/if}
                {#if showMore}
                    <div class="flex flex-col mt-10">
                        <p class="underline uppercase text-[#4D54D6] text-[18px] font-bold px-3">
                            la porteuse du projet
                        </p>
                    </div>
                    <div class="flex flex-col bg-[#4D54D6] text-white font-Lato mb-6 mx-3">
                        <img src="/project-1-author-mobile.png" class="w-full aspect-[340/110] object-cover"/>
                        <p class="font-bold text-[18px] p-3 pb-0">
                            Dr Stéphanie Descroix,
                        </p>
                        <p class="text-[16px] px-3 pb-6">
                            cheffe de l’équipe Macromolécules et Microsystèmes en Biologie et en Médecine à l’Institut
                            Curie
                        </p>
                    </div>
                    <div class="flex items-center justify-center px-3">
                        <div class="bg-white text-[#4D54D6] flex flex-col w-full py-4 items-center justify-center font-Raleway font-bold text-[20px] mb-10">
                            COÛT DU MICROSCOPE DE POINTE
                            <div class="flex flex-col">
                                <p class="uppercase underline text-center text-[18px] font-bold px-3">
                                    600 000 €
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-center pb-8">
                        <button on:click={()=> showMore = false}
                                class="text-[#4D54D6] font-Lato font-bold bg-[#F1F2FC] border-[#4D54D6] border-2 w-[169px] py-2">
                            Réduire
                        </button>
                    </div>
                {/if}
            </div>
        </div>
    {:else if $projectIndexStore === 1}
        <div id="projet2" class="flex flex-col gap-y-5">
            <div class="px-3">
                <img src="/bg-project-2-mobile.jpg" class="w-full aspect-[340/240] object-cover"/>
                <div class="bg-[#4D54D6] rounded-b-2xl min-h-[80px] py-2.5 w-full px-10 text-white flex justify-center items-center leading-tight text-center">
                    <span><span class="font-bold">Accueillir les meilleurs experts</span> pour accélérer l’innovation et le progrès</span>
                </div>
            </div>

            <div class="flex flex-col">
                <p class="underline uppercase text-[#4D54D6] text-[18px] font-bold px-3">
                    l'enjeu
                </p>
            </div>
            <p class="font-Lato text-[16px] px-3 text-[#505050]">
                Pour frapper plus vite et plus fort contre le cancer, l’Institut Curie se dote des compétences les plus
                pointues et mobilise les jeunes talents.<br/><br/>
                C’est dans ce contexte que le Dr Pierre Bost a rejoint récemment l’Institut Curie. Sa mission ? Fournir
                de nouveaux outils informatiques et statistiques pour analyser de données obtenues par imagerie
                multiplexée, une technique d’imagerie qui permet de visualiser simultanément plusieurs composants
                biologiques dans un échantillon.
            </p>
            <div class="flex flex-col">
                <p class="underline uppercase text-[#4D54D6] text-[18px] font-bold px-3">
                    Le dispositif
                </p>
            </div>
            <p class="font-Lato text-[16px] px-3 text-[#505050]">
                L’Institut Curie offre aux Junior Principal Investigator (JPI) un accompagnement financier pour le recrutement de leur équipe et une aide personnalisée (mise à disposition de locaux, accès aux plateformes technologiques, soutiens administratifs…) afin qu’ils puissent débuter leur activité de recherche dans les meilleures conditions. Cette politique d’accompagnement est entièrement financée par vos dons.
            </p>
            <div class="flex flex-col">
                <p class="underline uppercase text-[#4D54D6] text-[18px] font-bold px-3">
                    Les perspectives pour les patients
                </p>
            </div>
            <p class="font-Lato text-[16px] px-3 text-[#505050]">
                Le projet porté par le Dr Bost permettra <span class="font-bold">d’améliorer considérablement l’interprétation de milliers de données</span> pour les traduire en informations biologiquement pertinentes et avancer dans la compréhension des cancers.
            </p>
            <div class="flex flex-col relative gap-y-5">
                {#if showMore === false}
                    <div class="flex items-center justify-center mb-10">
                        <button on:click={()=> showMore = true}
                                class="text-[#4D54D6] font-Lato font-bold bg-[#F1F2FC] border-[#4D54D6] border-2 w-[169px] py-2">
                            En savoir plus
                        </button>
                    </div>
                {/if}
                {#if showMore}
                    <div class="flex flex-col mt-10">
                        <p class="underline uppercase text-[#4D54D6] text-[18px] font-bold px-3">
                            le porteur du projet
                        </p>
                    </div>
                    <div class="flex flex-col bg-[#4D54D6] text-white font-Lato mb-6 mx-3">
                        <img src="/project-2-author-mobile.png" class="w-full aspect-[340/110] object-cover"/>
                        <p class="font-bold text-[18px] p-3 pb-0">
                            Dr Pierre Bost,
                        </p>
                        <p class="text-[16px] px-3 pb-6">
                            chef de l’équipe Dynamique et hétérogénéité du transcriptome en contexte infectieux à l’Institut Curie
                        </p>
                    </div>
                    <div class="flex items-center justify-center px-3">
                        <div class="bg-white text-[#4D54D6] flex flex-col text-center w-full py-4 items-center justify-center font-Raleway font-bold text-[20px] mb-10">
                            <span>COÛT ANNUEL D’UNE ÉQUIPE JUNIOR PRINCIPAL INVESTIGATOR <span class="font-light">(JPI)</span></span>
                            <div class="flex flex-col">
                                <p class="uppercase underline text-center text-[18px] font-bold px-3">
                                    239 000 €
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-center pb-8">
                        <button on:click={()=> showMore = false}
                                class="text-[#4D54D6] font-Lato font-bold bg-[#F1F2FC] border-[#4D54D6] border-2 w-[169px] py-2">
                            Réduire
                        </button>
                    </div>
                {/if}
            </div>
        </div>
    {:else if $projectIndexStore === 2}
        <div id="projet3" class="flex flex-col gap-y-5">
            <div class="px-3">
                <img src="/bg-project-3-mobile.jpg" class="w-full aspect-[340/240] object-cover"/>
                <div class="bg-[#4D54D6] rounded-b-2xl min-h-[80px] py-2.5 w-full px-10 text-white flex justify-center items-center leading-tight text-center">
                    <span><span class="font-bold">Acquérir un microscope de pointe</span> pour développer le projet
                    révolutionnaire des tumeurs sur puces</span>
                </div>
            </div>

            <div class="flex flex-col">
                <p class="underline uppercase text-[#4D54D6] text-[18px] font-bold px-3">
                    Le contexte
                </p>
            </div>
            <p class="font-Lato text-[16px] px-3 text-[#505050]">
                En 2011, après 10 ans de recherche fondamentale, l’Institut Curie annonçait une découverte révolutionnaire : la radiothérapie FLASH, qui permet de délivrer des rayons très intenses en moins d’une seconde, pour détruire les cellules tumorales tout en épargnant les tissus sains.<br /><br />
                En 2025, l’Institut Curie se fonde sur cette découverte pour installer, d’ici 3 ans, au cœur de l’hôpital, une plateforme, unique au monde, munie d’un irradiateur de faisceaux d’électrons de très hautes énergies : c’est le projet FRATHEA. Les équipes de recherche de l’Institut Curie mènent en parallèle des études visant à évaluer cette technique au stade des essais cliniques. <span class="font-bold">L’ambition : démarrer les premiers essais auprès de patients touchés par des cancers de mauvais pronostic.</span>
            </p>
            <div class="flex flex-col">
                <p class="underline uppercase text-[#4D54D6] text-[18px] font-bold px-3">
                    l'innovation
                </p>
            </div>
            <div class="px-3">
                <button on:click={() => videoOpen = true}
                        class="relative w-full aspect-video mt-4 group bg-[url(video-preview.png)] bg-center bg-cover">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79.254 79.254"
                         class="transition-all w-14 group-hover:w-[66px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <path id="Tracé_635" data-name="Tracé 635"
                              d="M63.627,24a39.627,39.627,0,1,0,39.627,39.627A39.627,39.627,0,0,0,63.627,24ZM79.078,66.134,59.264,79.851a3.048,3.048,0,0,1-4.782-2.507V49.91A3.048,3.048,0,0,1,59.264,47.4L79.078,61.12a3.048,3.048,0,0,1,0,5.014Z"
                              transform="translate(-24 -24)" fill="#fff"/>
                    </svg>
                </button>
            </div>
            <div class="flex flex-col">
                <p class="underline uppercase text-[#4D54D6] text-[18px] font-bold px-3">
                    les nouvelles perspectives<br/> pour les patients
                </p>
            </div>
            <p class="font-Lato text-[16px] px-3 text-[#505050]">
                À terme, la radiothérapie FLASH-VHEE promet des avancées révolutionnaires pour la santé des patients :
            </p>
            <ul class="ml-2">
                <li class="text-left font-Lato text-[#505050] text-[16px] leading-tight">
                    <span class="font-bold">Traitement de toutes les tumeurs même les plus profondes,</span>.
                </li>
                <li class="text-left font-Lato text-[#505050] text-[16px] leading-tight">
                    <span class="font-bold">Préservation des tissus sains,</span>
                </li>
                <li class="text-left font-Lato text-[#505050] text-[16px] leading-tight">
                    <span class="font-bold">Raccourcissement de la durée des séances et du traitement.</span>
                </li>
            </ul>
            <div class="flex flex-col relative gap-y-5">
                {#if showMore === false}
                    <div class="flex items-center justify-center mb-10">
                        <button on:click={()=> showMore = true}
                                class="text-[#4D54D6] font-Lato font-bold bg-[#F1F2FC] border-[#4D54D6] border-2 w-[169px] py-2">
                            En savoir plus
                        </button>
                    </div>
                {/if}
                {#if showMore}
                    <div class="flex flex-col mt-10">
                        <p class="underline uppercase text-[#4D54D6] text-[18px] font-bold px-3">
                            la porteuse du projet
                        </p>
                    </div>
                    <div class="flex flex-col bg-[#4D54D6] text-white font-Lato mb-6 mx-3">
                        <img src="/project-3-author-mobile.png" class="w-full aspect-[340/110] object-cover"/>
                        <p class="font-bold text-[18px] p-3 pb-0">
                            Pr Gilles Créhange,
                        </p>
                        <p class="text-[16px] px-3 pb-6">
                            chef du département de Radiothérapie oncologique et coordonnateur du projet FRATHEA à l’Institut Curie
                        </p>
                    </div>
                    <div class="flex items-center justify-center px-3">
                        <div class="bg-white text-[#4D54D6] flex flex-col w-full py-4 items-center justify-center font-Raleway font-bold text-[20px] mb-10">
                            COÛT ANNUEL D’UNE ÉQUIPE DE RECHERCHE
                            <div class="flex flex-col">
                                <p class="uppercase underline text-center text-[18px] font-bold px-3">
                                    292 000 €
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-center pb-8">
                        <button on:click={()=> showMore = false}
                                class="text-[#4D54D6] font-Lato font-bold bg-[#F1F2FC] border-[#4D54D6] border-2 w-[169px] py-2">
                            Réduire
                        </button>
                    </div>
                {/if}
            </div>
        </div>
    {/if}

    <div class="flex items-center mx-auto gap-4">
        <button on:click={() => setProjectIndex(0, '')}
                class="w-5 h-5 {$projectIndexStore === 0 ? 'bg-[#FF6600]' : 'bg-white'} border-[3px] border-[#FF6600] rounded-full transition-all"></button>
        <button on:click={() => setProjectIndex(1, '')}
                class="w-5 h-5 {$projectIndexStore === 1 ? 'bg-[#FF6600]' : 'bg-white'} border-[3px] border-[#FF6600] rounded-full transition-all"></button>
        <button on:click={() => setProjectIndex(2, '')}
                class="w-5 h-5 {$projectIndexStore === 2 ? 'bg-[#FF6600]' : 'bg-white'} border-[3px] border-[#FF6600] rounded-full transition-all"></button>
    </div>
</div>

<style>
    .underline {
        text-decoration-line: underline;
        text-decoration-color: #FF6600;
        text-decoration-thickness: 3px;
        text-underline-offset: 5px;
    }

    ul li {
        display: flex;
        align-items: baseline;
    }

    ul li::before {
        font-weight: normal !important;
        content: "•";
        color: #4D54D6;
        font-size: 2rem;
        display: inline-block;
        width: 1rem;
        margin-right: 1rem;
        position: relative;
    }
</style>
