<script>
    import {fly} from "svelte/transition";
    import {projectIndexStore} from "$lib/utils/utils.js";
    let projectTitle = [
        "Accélérer la recherche grâce à <span class=\"underline decoration-2 decoration-[#FF6600]\">deux équipements</span>",
        "Attirer les <span class=\"underline decoration-2 decoration-[#FF6600]\">meilleurs talents</span>",
        "Développer des<br/> <span class=\"underline decoration-2 decoration-[#FF6600]\">immunothérapies inédites</span>"
    ];
    let projectSelector = false;
    let showMore = false;
    function setProjectIndex(index) {
        projectIndexStore.set(index);
        window.location.hash = `#projet${index + 1}`;
    }
    let element;
    let intersecting;
    function undifinedHandler() {
        if (window.location.hash === "#ProjectsMobile") {
            console.log("hash", window.location.hash);
            projectIndexStore.set(1);
            console.log("projectIndexStore", projectIndexStore);
        }
    }

</script>

<div style="box-shadow: 0px 6px 40px rgba(0, 0, 0, 0.16);" class="bg-[#F1F2FC] w-[95%] flex flex-col items-center justify-center rounded-2xl py-5 mt-[3rem] relative">
        <div id="ProjectsMobile" class="absolute -top-40"/>
        <p  class="text-[#505050] font-Raleway font-bold text-[20px] uppercase text-center">
            Contre le cancer,<br/>
            investissez votre impôt<br/>
            dans l’innovation
        </p>
        <div class="bg-[#FF6600] w-[10rem] h-1 rounded-3xl"/>
        <div class="bg-[#4D54D6] w-full mt-5 flex flex-col items-center justify-center relative">
            <div on:click={()=> projectSelector = !projectSelector} class="flex flex-row items-center justify-center w-full  h-[88px] gap-x-4 py-4">
                <p class="font-Raleway text-white text-[18px] font-bold uppercase w-[70%]">
                    {@html projectTitle[$projectIndexStore]}
                </p>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
                        <g id="Group_759" data-name="Group 759" transform="translate(-326 -2692)">
                            <circle id="Ellipse_40" data-name="Ellipse 40" cx="17" cy="17" r="17" transform="translate(326 2692)" fill="#fff"/>
                            <path id="Path_638" data-name="Path 638" d="M14162.583,5344l8.7,8.7,8.7-8.7" transform="translate(-13828.284 -2637)" fill="none" stroke="#4d54d6" stroke-linecap="round" stroke-width="3"/>
                        </g>
                    </svg>
                </button>
            </div>
            {#if projectSelector}
                <div class="absolute w-full -bottom-[11rem]">
                    <button in:fly on:click={()=> setProjectIndex(1)} class="bg-white text-[#505050] text-left  uppercase h-[88px] w-full border-2 border-[#505050] p-5">
                        <p class="font-Raleway font-bold text-[18px] m-0">
                            {@html projectTitle[($projectIndexStore + 1) % projectTitle.length]}
                        </p>
                    </button>
                    <button in:fly on:click={()=> setProjectIndex(2)} class="bg-white text-[#505050] text-left  uppercase h-[88px] w-full border-x-2 border-b-2 border-[#505050] p-5">
                        <p class="font-Raleway font-bold text-[18px] m-0">
                            {@html projectTitle[($projectIndexStore + 2) % projectTitle.length]}
                        </p>
                    </button>
                </div>
            {/if}
        </div>
        {#if $projectIndexStore === 0}
            <div class="flex flex-col gap-y-5">
                <img src="/header-project-1-mobile.png" class="w-full"/>
                <div class="flex flex-col">
                    <p class="uppercase text-[#4D54D6] text-[18px] font-bold px-3">
                        l'enjeu
                    </p>
                    <div class="bg-[#FF6600] rounded-3xl w-10 h-1 ml-3"/>
                </div>
                <p class="font-Lato text-[16px] px-3 text-[#505050]">
                    Chaque tumeur possède un antigène qui lui est propre. Le vaccin à ARNm consiste à injecter dans le corps du patient un ARNm, fabriqué en laboratoire, qui contient le code nécessaire à la fabrication de cet antigène. Il force ainsi le système immunitaire du patient à reconnaître ces antigènes et à produire les anticorps correspondants.<br/>
                    <b>L’efficacité du vaccin à ARNm réside donc dans la capacité des chercheurs à identifier la séquence génétique permettant de coder des antigènes spécifiques de cellules tumorales à partir d’échantillons de tumeurs.</b>
                    <br/><br/>
                    Aujourd’hui il existe uniquement 3 équipements en Europe pour les fabriquer, ce qui occasionne beaucoup d’attente pour les patients qui sont en cours de traitement.
                </p>
                <div class="flex flex-col">
                    <p class="uppercase text-[#4D54D6] text-[18px] font-bold px-3">
                        l'innovation
                    </p>
                    <div class="bg-[#FF6600] rounded-3xl w-10 h-1 ml-3"/>
                </div>
                <p class="font-Lato text-[16px] px-3 text-[#505050]">
                    Les vaccins à ARN messager sont particulièrement prometteurs et leur développement ouvre de nouvelles perspectives de guérison pour les patients.  <b>L’Institut Curie souhaite donc acquérir 2 équipements de pointe indispensables à l’élaboration de ce type de vaccins : un purificateur de peptides et un spectromètre de masse.</b>
                </p>
                <div class="flex flex-col">
                    <p class="uppercase text-[#4D54D6] text-[18px] font-bold px-3">
                        les nouvelles perspectives<br/> pour les patients
                    </p>
                    <div class="bg-[#FF6600] rounded-3xl w-10 h-1 ml-3"/>
                </div>
                <ul class="ml-2">
                    <li class="text-left font-Lato text-[#505050] text-[16px]">
                        <span class="font-bold">Un délai de fabrication de vaccin raccourci de plusieurs mois.</span>
                    </li>
                    <li class="text-left font-Lato text-[#505050] text-[16px] mt-5">
                        <span class="font-bold">Une avancée dans la médecine de précision pour chaque patient.</span>
                    </li>
                    <li class="text-left font-Lato text-[#505050] text-[16px] mt-5">
                    <span class="font-bold">Un espoir de solution thérapeutique pour les cancers où la
                    chimiothérapie ou la radiothérapie restent encore inefficaces.</span>
                    </li>
                </ul>
                <div class="flex flex-col relative gap-y-5">
                    {#if showMore === false}
                        <div class="flex items-center justify-center mb-10">
                            <button on:click={()=> showMore = true} class="text-[#4D54D6] font-Lato font-bold bg-[#F1F2FC] border-[#4D54D6] border-2 w-[169px] py-2">
                                En savoir plus
                            </button>
                        </div>
                    {/if}
                    <svg on:click={()=> $projectIndexStore = 1}  class="absolute bottom-0 right-2" xmlns="http://www.w3.org/2000/svg" width="102.911" height="31.282" viewBox="0 0 102.911 31.282">
                        <g id="Group_732" data-name="Group 732" transform="translate(-260.924 -4848.617)">
                            <text id="SUIVANT" transform="translate(260.924 4867.726)" fill="#505050" font-size="18" font-family="Raleway-Bold, Raleway" font-weight="700"><tspan x="0" y="0">SUIVANT</tspan></text>
                            <path id="Path_631" data-name="Path 631" d="M1431,1408l8.411,10.5L1431,1429" transform="translate(-1077.076 3442.726)" fill="none" stroke="#505050" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                            <line id="Line_10" data-name="Line 10" x2="29" transform="translate(285.424 4878.399)" fill="none" stroke="#505050" stroke-linecap="round" stroke-width="3"/>
                        </g>
                    </svg>
                    {#if showMore}
                        <div class="flex flex-col mt-10">
                            <p class="uppercase text-[#4D54D6] text-[18px] font-bold px-3">
                                le porteur du projet
                            </p>
                            <div class="bg-[#FF6600] rounded-3xl w-10 h-1 ml-3"/>
                        </div>
                        <div class="flex flex-col bg-[#4D54D6] text-white font-Lato mb-10 ">
                            <img src="/pic-project-1.png" class="w-full h-52"/>
                            <p class="font-bold text-[18px] p-3 pb-0">
                                Dr Antonin Morillon
                            </p>
                            <p class="text-[16px] px-3 pb-6">
                                Chef de l’équipe de recherche ARN non codant, épigénétique et fluidité des génomes à l’Institut Curie
                            </p>
                        </div>
                        <div class="flex items-center justify-center ">
                            <div class="bg-white text-[#4D54D6] flex flex-col w-[80%] py-4 items-center justify-center font-Raleway font-bold text-[20px] mb-10">
                                Coût de ces 2 équipements
                                <div class="flex flex-col">
                                    <p class="uppercase text-center text-[18px] font-bold px-3">
                                        1,4 millions €
                                    </p>
                                    <div class="bg-[#FF6600] rounded-3xl w-[9rem] h-1 ml-3"/>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-center pb-8">
                            <button on:click={()=> showMore = false} class="text-[#4D54D6] font-Lato font-bold bg-[#F1F2FC] border-[#4D54D6] border-2 w-[169px] py-2">
                                Réduire
                            </button>
                        </div>
                    {/if}
                </div>
            </div>
        {:else if $projectIndexStore === 1}
            <div class="flex flex-col gap-y-5">
                <img src="/header-project-2-mobile.png" class="w-full"/>
                <div class="flex flex-col">
                    <p class="uppercase text-[#4D54D6] text-[18px] font-bold px-3">
                        l'enjeu
                    </p>
                    <div class="bg-[#FF6600] rounded-3xl w-10 h-1 ml-3"/>
                </div>
                <p class="font-Lato text-[16px] px-3 text-[#505050]">
                    Contrairement aux cancers de l’adulte qui résultent principalement du vieillissement et de l'exposition à des mutagènes, les cancers pédiatriques émergent de la dérégulation des programmes génétiques qui gouvernent le développement normal des cellules.
                    Les cancers pédiatriques nécessitent donc des recherches spécifiques et adaptées.
                </p>
                <div class="flex flex-col">
                    <p class="uppercase text-[#4D54D6] text-[18px] font-bold px-3">
                        l'innovation
                    </p>
                    <div class="bg-[#FF6600] rounded-3xl w-10 h-1 ml-3"/>
                </div>
                <p class="font-Lato text-[16px] px-3 text-[#505050]">
                    L’unité Cancer, hétérogénéité, instabilité et plasticité de l’Institut Curie, dirigée par le Docteur Olivier Delattre, a été renforcée avec l’arrivée d’un jeune chercheur, le Docteur Olivier Saulnier, à la tête d’une nouvelle équipe “Génomique et développement des cancers de l’enfant”.
                    <br/><br/>
                    Avec son équipe, le Docteur Olivier Saulnier étudie des programmes de transcription au cours du développement embryonnaire et leurs implications dans la genèse des cellules cancéreuses. En utilisant des techniques de génomique à l’échelle de la cellule unique, leur objectif est d’identifier les origines des cancers pédiatriques à la fois dans l’espace et dans le temps.
                </p>
                <div class="flex flex-col">
                    <p class="uppercase text-[#4D54D6] text-[18px] font-bold px-3">
                        les nouvelles perspectives<br/> pour les patients
                    </p>
                    <div class="bg-[#FF6600] rounded-3xl w-10 h-1 ml-3"/>
                </div>
                <ul class="ml-2">
                    <li class="text-left font-Lato text-[#505050] text-[16px]">
                        <span class="font-bold">se basant sur les précédents travaux du Dr Saulnier qui ont permis d’identifier un type cellulaire présent uniquement lors du développement fœtal du cerveau et à l’origine du médulloblastome, son équipe cherchera à étendre la ces résultats prometteurs à plusieurs types de cancers pédiatriques</span>
                    </li>
                    <li class="text-left font-Lato text-[#505050] text-[16px] mt-5">
                        <span class="font-bold">à terme, prévenir la maladie chez les enfants, avant même qu’elle ne se développe</span>
                    </li>
                </ul>
                <div class="flex flex-col relative gap-y-5">
                    {#if showMore === false}
                        <div class="flex items-center justify-center mb-10">
                            <button on:click={()=> showMore = true} class="text-[#4D54D6] font-Lato font-bold bg-[#F1F2FC] border-[#4D54D6] border-2 w-[169px] py-2">
                                En savoir plus
                            </button>
                        </div>
                    {/if}
                    <svg on:click={()=> $projectIndexStore = 2} class="absolute bottom-0 right-2" xmlns="http://www.w3.org/2000/svg" width="102.911" height="31.282" viewBox="0 0 102.911 31.282">
                        <g id="Group_732" data-name="Group 732" transform="translate(-260.924 -4848.617)">
                            <text id="SUIVANT" transform="translate(260.924 4867.726)" fill="#505050" font-size="18" font-family="Raleway-Bold, Raleway" font-weight="700"><tspan x="0" y="0">SUIVANT</tspan></text>
                            <path id="Path_631" data-name="Path 631" d="M1431,1408l8.411,10.5L1431,1429" transform="translate(-1077.076 3442.726)" fill="none" stroke="#505050" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                            <line id="Line_10" data-name="Line 10" x2="29" transform="translate(285.424 4878.399)" fill="none" stroke="#505050" stroke-linecap="round" stroke-width="3"/>
                        </g>
                    </svg>
                    {#if showMore}
                        <div class="flex flex-col mt-10">
                            <p class="uppercase text-[#4D54D6] text-[18px] font-bold px-3">
                                le porteur du projet
                            </p>
                            <div class="bg-[#FF6600] rounded-3xl w-10 h-1 ml-3"/>
                        </div>
                        <div class="flex flex-col bg-[#4D54D6] text-white font-Lato mb-10 ">
                            <img src="/pic-project-2-desktop.png" class="w-full h-52"/>
                            <p class="font-bold text-[18px] p-3 pb-0">
                                Dr Olivier Saulnier
                            </p>
                            <p class="text-[16px] px-3 pb-6">
                                Chef de l’équipe Génomique et développement des cancers de l’enfant à l’Institut Curie
                            </p>
                        </div>
                        <div class="flex items-center justify-center ">
                            <div class="bg-white text-[#4D54D6] text-center flex flex-col w-[80%] py-4 items-center justify-center font-Raleway font-bold text-[20px] mb-10">
                                Besoin de financement pour les recherches de l’équipe “Génomique et développement des cancers de l’enfant”<br/>
                                <div class="flex flex-col">
                                    <p class="uppercase text-center text-[18px] font-bold px-3">
                                        669 000 € par an
                                    </p>
                                    <div class="bg-[#FF6600] rounded-3xl w-[9rem] h-1 ml-3"/>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-center pb-8">
                            <button on:click={()=> showMore = false} class="text-[#4D54D6] font-Lato font-bold bg-[#F1F2FC] border-[#4D54D6] border-2 w-[169px] py-2">
                                Réduire
                            </button>
                        </div>
                    {/if}
                </div>
            </div>
        {:else if $projectIndexStore === 2}
            <div class="flex flex-col gap-y-5">
                <img src="/header-project-3.png" class="w-full"/>
                <div class="flex flex-col">
                    <p class="uppercase text-[#4D54D6] text-[18px] font-bold px-3">
                        l'enjeu
                    </p>
                    <div class="bg-[#FF6600] rounded-3xl w-10 h-1 ml-3"/>
                </div>
                <p class="font-Lato text-[16px] px-3 text-[#505050]">
                    20 ans après l’émergence de l’immunothérapie et après 10 ans de recherches fondamentales, les équipes de l’Institut Curie franchissent une nouvelle étape contre les tumeurs difficiles à traiter. Elles ont conçu de nouvelles thérapies cellulaires révolutionnaires qui reposent sur la combinaison :
                </p>
                <div class="flex flex-col">
                    <p class="uppercase text-[#4D54D6] text-[18px] font-bold px-3">
                        l'innovation
                    </p>
                    <div class="bg-[#FF6600] rounded-3xl w-10 h-1 ml-3"/>
                </div>
                <p class="font-Lato text-[16px] px-3 text-[#505050]">
                    Les vaccins à ARN messager sont particulièrement prometteurs et leur développement ouvre de nouvelles perspectives de guérison pour les patients.
                    <b>L’Institut Curie souhaite donc acquérir 2 équipements de pointe indispensables à l’élaboration de ce type de vaccins : un purificateur de peptides et un spectromètre de masse.</b>
                </p>
                <div class="flex flex-col">
                    <p class="uppercase text-[#4D54D6] text-[18px] font-bold px-3">
                        les nouvelles perspectives<br/> pour les patients
                    </p>
                    <div class="bg-[#FF6600] rounded-3xl w-10 h-1 ml-3"/>
                </div>
                <ul class="ml-2">
                    <li class="text-left font-Lato text-[#505050] text-[16px]">
                        <span class="font-bold">Développer des essais cliniques innovants</span>
                    </li>
                    <li class="text-left font-Lato text-[#505050] text-[16px] mt-5">
                        <span class="font-bold">Offrir un véritable espoir aux patients qui luttent contre des tumeurs particulièrement difficiles à traiter, pour lesquelles les immunothérapies actuelles ne fonctionnent pas, comme les cancers du sein triple négatif, ou les cancers du poumon.</span>
                    </li>
                </ul>
                <div class="flex flex-col relative gap-y-5">
                    {#if showMore === false}
                        <div class="flex items-center justify-center mb-10">
                            <button on:click={()=> showMore = true} class="text-[#4D54D6] font-Lato font-bold bg-[#F1F2FC] border-[#4D54D6] border-2 w-[169px] py-2">
                                En savoir plus
                            </button>
                        </div>
                    {/if}
                    <svg on:click={()=> $projectIndexStore = 0} class="absolute bottom-0 right-2" xmlns="http://www.w3.org/2000/svg" width="102.911" height="31.282" viewBox="0 0 102.911 31.282">
                        <g id="Group_732" data-name="Group 732" transform="translate(-260.924 -4848.617)">
                            <text id="SUIVANT" transform="translate(260.924 4867.726)" fill="#505050" font-size="18" font-family="Raleway-Bold, Raleway" font-weight="700"><tspan x="0" y="0">SUIVANT</tspan></text>
                            <path id="Path_631" data-name="Path 631" d="M1431,1408l8.411,10.5L1431,1429" transform="translate(-1077.076 3442.726)" fill="none" stroke="#505050" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                            <line id="Line_10" data-name="Line 10" x2="29" transform="translate(285.424 4878.399)" fill="none" stroke="#505050" stroke-linecap="round" stroke-width="3"/>
                        </g>
                    </svg>
                    {#if showMore}
                        <div class="flex flex-col mt-10">
                            <p class="uppercase text-[#4D54D6] text-[18px] font-bold px-3">
                                le porteur du projet
                            </p>
                            <div class="bg-[#FF6600] rounded-3xl w-10 h-1 ml-3"/>
                        </div>
                        <div class="flex flex-col bg-[#4D54D6] text-white font-Lato mb-10 ">
                            <img src="/pic-project-3-desktop.png" class="w-full h-[400px]"/>
                            <p class="font-bold text-[18px] p-3 pb-0">
                                Dr Sebastian Amugorena
                            </p>
                            <p class="text-[16px] px-3 pb-6">
                                Chef de l’équipe Réponses Immunitaires et Cancer à l’Institut Curie et coordinateur du projet EpCART.
                            </p>
                        </div>
                        <div class="flex items-center justify-center ">
                            <div class="bg-white text-[#4D54D6] text-center flex flex-col w-[80%] py-4 items-center justify-center font-Raleway font-bold text-[20px] mb-10">
                                Besoin annuel de l’équipe de Sebastian Amigorena
                                <div class="flex flex-col">
                                    <p class="uppercase text-center text-[18px] font-bold px-3">
                                        1,3 millions €
                                    </p>
                                    <div class="bg-[#FF6600] rounded-3xl w-[9rem] h-1 ml-3"/>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-center pb-8">
                            <button on:click={()=> showMore = false} class="text-[#4D54D6] font-Lato font-bold bg-[#F1F2FC] border-[#4D54D6] border-2 w-[169px] py-2">
                                Réduire
                            </button>
                        </div>
                    {/if}
                </div>
            </div>
        {/if}
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
