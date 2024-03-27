<script>
    let projectIndex = 0;
</script>

<div class="flex items-center justify-center w-screen mt-10">
    <div class="w-[90%]  2xl:w-[80%] flex flex-col items-center justify-center  bg-[#F1F2FC] rounded-3xl py-10">
        <p class="text-center lg:text-xl xl:text-3xl font-bold font-Raleway text-[#505050]">
            Contre le cancer,<br/>
            investissez votre impôt dans l’innovation
        </p>
        <div class=" bg-[#FF6600] w-[5rem] h-1 rounded-2xl mt-2"/>
        <div class="flex flex-row mt-10">
            <button on:click={()=> projectIndex = 0} class:selectedButton={projectIndex === 0} class=" py-2 xl:py-4 px-3 xl:px-5 font-Raleway text-xl xl:text-2xl font-bold text-center text-[#505050] border-r-2 border-[#505050]">
                Acquérir <span class="underline decoration-[#FF6600] ">les équipements</span><br/>
                pour développer les<br/>
                traitements de demain
            </button>
            <button on:click={()=> projectIndex = 1} class:selectedButton={projectIndex === 1} class=" py-2 xl:py-4 px-3 xl:px-5 font-Raleway text-xl xl:text-2xl font-bold text-center text-[#505050] border-r-2 border-[#505050]">
                Encourager le développement<br/>
                des projets de<br/>
                <span class="underline decoration-[#FF6600] ">chercheurs prometteurs</span>
            </button>
            <button on:click={()=> projectIndex = 2} class:selectedButton={projectIndex === 2} class=" py-2 xl:py-4 px-3 xl:px-5 font-Raleway text-xl xl:text-2xl font-bold text-center text-[#505050]">
                Miser sur la <span class="underline decoration-[#FF6600] ">thérapie<br/>
                cellulaire</span> ou comment<br/>
                la cellule devient médicament
            </button>
        </div>
        {#if projectIndex === 0}
            <div class="bg-[url('/project-1-bg-desktop.png')] bg-cover bg-no-repeat relative w-full h-[25rem] xl:h-[39rem]">
                <p class="font-Raleway text-xl xl:text-3xl font-black absolute bottom-5 xl:bottom-10 text-center text-white left-0 right-0 mx-auto">
                    <span class="underline decoration-[#FF6600] ">2 équipements de pointe</span> pour révolutionner les traitements de<br/> demain contre les cancers grâce à des vaccins personnalisés
                </p>
            </div>
            <div class="flex flex-row items-center justify-center w-full xl:mt-5 px-5 xl:px-10 py-5 xl:py-10 gap-5 relative">
                <div class="w-1/2 flex flex-col gap-5 mt-4">
                    <p class="text-xl xl:text-3xl font-Lato font-bold text-[#4D54D6] underline uppercase">
                        L’Enjeu
                    </p>
                    <p class="text-[#505050] font-Lato text-base xl:text-xl">
                        Chaque tumeur possède un antigène qui lui est propre. Le vaccin à ARNm consiste à injecter dans le corps du patient un ARNm, fabriqué en laboratoire, qui contient le code nécessaire à la fabrication de cet antigène. Il force ainsi le système immunitaire du patient à reconnaître ces antigènes et à produire les anticorps correspondants.
                        <b>L’efficacité du vaccin à ARNm réside donc dans la capacité des chercheurs à identifier la séquence génétique permettant de coder des antigènes spécifiques de cellules tumorales à partir d’échantillons de tumeurs.</b>
                        <br/><br/>
                        Aujourd’hui il existe uniquement 3 équipements en Europe pour les fabriquer, ce qui occasionne beaucoup d’attente pour les patients qui sont en cours de traitement.
                    </p>
                    <p class="text-xl xl:text-3xl font-Lato font-bold text-[#4D54D6] uppercase">
                        Les nouvelles perspectives<br/>
                        <c class="underline">pour</c> les patients
                    </p>
                    <ul>
                        <li class="text-[#505050] text-base xl:text-xl font-Lato font-bold">
                            Un délai de fabrication de vaccin raccourci de plusieurs mois.
                        </li>
                        <li class="text-[#505050] text-base xl:text-xl font-Lato font-bold mt-3">
                            Une avancée dans la médecine de précision pour chaque patient.
                        </li>
                        <li class="text-[#505050] text-base xl:text-xl font-Lato font-bold mt-3">
                            Un espoir de solution thérapeutique pour les cancers où la chimiothérapie ou la radiothérapie restent encore inefficaces.
                        </li>
                    </ul>
                </div>
                <div class="w-1/2 flex flex-col gap-[4.3rem] xl:gap-10 relative">
                    <p class="text-xl xl:text-3xl font-Lato font-bold text-[#4D54D6] underline uppercase">
                        L’innovation
                    </p>
                    <p class="text-[#505050] font-Lato text-base xl:text-xl">
                        Les vaccins à ARN messager sont particulièrement prometteurs et leur développement ouvre de nouvelles perspectives de guérison pour les patients.
                        <b>L’Institut Curie souhaite donc acquérir 2 équipements de pointe indispensables à l’élaboration de ce type de vaccins : un purificateur de peptides et un spectromètre de masse.</b>
                    </p>
                    <p class="text-3xl font-Lato font-bold text-[#4D54D6] underline uppercase 2xl:mt-0">
                        Le porteur du projet
                    </p>
                    <div class="flex flex-row bg-[#4D54D6] items-center justify-center gap-3">
                        <img src="/pic-project-1.png" alt="Dr Antonin Morillon" class="w-[40%] h-full">
                        <p class="text-white text-sm 2xl:text-xl font-Raleway  2xl:p-4">
                            <span class="text-xl 2xl:text-2xl font-bold">
                                Dr Antonin Morillon<br/>
                            </span>
                            Chef de l’équipe de recherche ARN non codant, épigénétique et fluidité des génomes à l’Institut Curie
                        </p>
                    </div>
                    <div class="text-center bg-white font-Raleway font-bold py-3 xl:py-5 2xl:mt-0">
                        <p class="text-2xl xl:text-3xl text-[#4D54D6]">
                            Coût de ces 2 équipements<br/>
                            <span class="underline">1,4 millions €</span>
                        </p>
                    </div>
                </div>
                <button on:click={()=> projectIndex = 1} class="absolute right-20 bottom-0 hover:scale-110 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="155.576" height="37.935" viewBox="0 0 155.576 37.935">
                        <g id="Component_16_2" data-name="Component 16 – 2" transform="translate(0 0.935)">
                            <text id="SUIVANT" transform="translate(0 24)" fill="#505050" font-size="25" font-family="Raleway-Bold, Raleway" font-weight="700"><tspan x="0" y="0">SUIVANT</tspan></text>
                            <path id="Path_631" data-name="Path 631" d="M1431,1408l11.076,13.826-5.538,6.913-5.538,6.913" transform="translate(-1288 -1406.826)" fill="none" stroke="#505050" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                            <line id="Line_10" data-name="Line 10" x2="29" transform="translate(39.5 35.5)" fill="none" stroke="#505050" stroke-linecap="round" stroke-width="3"/>
                        </g>
                    </svg>
                </button>
            </div>
        {:else if projectIndex === 1}
            <div class="bg-[url('/bg-project-2-dekstop.png')] bg-cover bg-no-repeat relative w-full h-[25rem] xl:h-[39rem]">
                <p class="font-Raleway text-xl xl:text-3xl font-black absolute bottom-5 xl:bottom-10 text-center text-white left-0 right-0 mx-auto">
                    <span class="underline decoration-[#FF6600] ">Une équipe renforcée</span> pour mieux comprendre le<br/> développement des tumeurs qui touchent les enfants
                </p>
            </div>
            <div class="flex flex-row items-center justify-center w-full xl:mt-5 px-5 xl:px-10 py-5 xl:py-10 gap-5 relative">
                <div class="w-1/2 flex flex-col relative h-[53rem] xl:gap-10">
                    <p class="text-xl xl:text-3xl font-Lato font-bold text-[#4D54D6] underline uppercase ">
                        L’Enjeu
                    </p>
                    <p class="text-[#505050] font-Lato text-base xl:text-xl">
                        Contrairement aux cancers de l’adulte qui résultent principalement du vieillissement et de l'exposition à des mutagènes, les cancers pédiatriques émergent de la dérégulation des programmes génétiques qui gouvernent le développement normal des cellules.
                        Les cancers pédiatriques nécessitent donc des recherches spécifiques et adaptées.
                    </p>
                    <p class="text-xl xl:text-3xl font-Lato font-bold text-[#4D54D6] uppercase mt-40">
                        Les nouvelles perspectives<br/>
                        <c class="underline">pour</c> les patients
                    </p>
                    <ul>
                        <li class="text-[#505050] text-base xl:text-xl font-Lato font-bold">
                            se basant sur les précédents travaux du Dr Saulnier qui ont permis d’identifier un type cellulaire présent uniquement lors du développement fœtal du cerveau et à l’origine du médulloblastome, son équipe cherchera à étendre la ces résultats prometteurs à plusieurs types de cancers pédiatriques
                        </li>
                        <li class="text-[#505050] text-base xl:text-xl font-Lato font-bold mt-3">
                            à terme, prévenir la maladie chez les enfants, avant même qu’elle ne se développe
                        </li>
                    </ul>
                </div>
                <div class="w-1/2 flex flex-col gap-[4.3rem] xl:gap-10 relative h-[53rem]">
                    <p class="text-xl xl:text-3xl font-Lato font-bold text-[#4D54D6] underline uppercase">
                        L’innovation
                    </p>
                    <p class="text-[#505050] font-Lato text-base xl:text-xl">
                        L’unité Cancer, hétérogénéité, instabilité et plasticité de l’Institut Curie, dirigée par le Docteur Olivier Delattre, a été renforcée avec l’arrivée d’un jeune chercheur, le Docteur Olivier Saulnier, à la tête d’une nouvelle équipe “Génomique et développement des cancers de l’enfant”.
                        <br/><br/>
                        Avec son équipe, le Docteur Olivier Saulnier étudie des programmes de transcription au cours du développement embryonnaire et leurs implications dans la genèse des cellules cancéreuses. En utilisant des techniques de génomique à l’échelle de la cellule unique, leur objectif est d’identifier les origines des cancers pédiatriques à la fois dans l’espace et dans le temps.
                    </p>
                    <p class="text-3xl font-Lato font-bold text-[#4D54D6] underline uppercase 2xl:mt-0">
                        Le porteur du projet
                    </p>
                    <div class="flex flex-row bg-[#4D54D6] items-center justify-center gap-3">
                        <img src="/pic-project-2-desktop.png" alt="Dr Antonin Morillon" class="w-[40%] h-full">
                        <p class="text-white text-sm 2xl:text-xl font-Raleway  2xl:p-4">
                            <span class="text-xl 2xl:text-2xl font-bold">
                                Dr Olivier Saulnier<br/>
                            </span>
                            Chef de l’équipe Génomique et développement des cancers de l’enfant à l’Institut Curie
                        </p>
                    </div>
                    <div class="text-center bg-white font-Raleway font-bold py-3 xl:py-5 2xl:mt-0">
                        <p class="text-xl px-5 text-[#4D54D6]">
                            Besoin de financement pour les recherches de l’équipe “Génomique et développement des cancers de l’enfant”<br/>
                            <span class="underline text-2xl">669 000 € par an</span>
                        </p>
                    </div>
                </div>
                <button on:click={()=> projectIndex = 2} class="absolute right-20 -bottom-10 2xl:bottom-0  hover:scale-110 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="155.576" height="37.935" viewBox="0 0 155.576 37.935">
                        <g id="Component_16_2" data-name="Component 16 – 2" transform="translate(0 0.935)">
                            <text id="SUIVANT" transform="translate(0 24)" fill="#505050" font-size="25" font-family="Raleway-Bold, Raleway" font-weight="700"><tspan x="0" y="0">SUIVANT</tspan></text>
                            <path id="Path_631" data-name="Path 631" d="M1431,1408l11.076,13.826-5.538,6.913-5.538,6.913" transform="translate(-1288 -1406.826)" fill="none" stroke="#505050" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                            <line id="Line_10" data-name="Line 10" x2="29" transform="translate(39.5 35.5)" fill="none" stroke="#505050" stroke-linecap="round" stroke-width="3"/>
                        </g>
                    </svg>
                </button>
            </div>
            {:else if projectIndex === 2}
            <div class="bg-[url('/bg-project-3-desktop.png')] bg-cover bg-no-repeat relative w-full h-[25rem] xl:h-[39rem]">
                <p class="font-Raleway  text-xl xl:text-3xl font-black absolute bottom-5 xl:bottom-10 text-center text-white left-0 right-0 mx-auto">
                    Évaluation de la combinaison de <span class="underline decoration-[#FF6600] ">2 thérapies cellulaires</span> <br>innovantes avec le projet EPCART
                </p>
            </div>
            <div class="flex flex-row items-center justify-center w-full xl:mt-5 px-5 xl:px-10 py-5 xl:py-10 gap-5 relative">
                <div class="w-1/2 flex flex-col  mt-4 h-[60rem] gap-10">
                    <p class="text-xl xl:text-3xl font-Lato font-bold text-[#4D54D6] underline uppercase">
                        L’Enjeu
                    </p>
                    <p class="text-[#505050] font-Lato text-base xl:text-xl">
                        20 ans après l’émergence de l’immunothérapie et après 10 ans de recherches fondamentales, les équipes de l’Institut Curie franchissent une nouvelle étape contre les tumeurs difficiles à traiter. Elles ont conçu de nouvelles thérapies cellulaires révolutionnaires qui reposent sur la combinaison :
                    </p>
                    <ul>
                        <li class="text-[#505050] text-base xl:text-xl font-Lato">
                            des thérapies CAR-T qui constituent une nouvelle forme d’immunothérapie reposant sur la modification génétique des lymphocytes T d’un patient. Une fois modifiés, ces lymphocytes T devenus « cellules CAR-T » sont réinjectés au patient afin que ceux-ci soient en mesure de reconnaître et détruire ses cellules cancéreuses.
                        </li>
                        <li class="text-[#505050] text-base xl:text-xl font-Lato">
                            de l’immuno-épigénétique qui permet de « reprogrammer » ces cellules CAR-T pour augmenter leur efficacité face à la tumeur.
                        </li>
                    </ul>
                    <p class="text-xl xl:text-3xl font-Lato font-bold text-[#4D54D6] uppercase">
                        Les nouvelles perspectives<br/>
                        <c class="underline">pour</c> les patients
                    </p>
                    <ul>
                        <li class="text-[#505050] text-base xl:text-xl font-Lato font-bold">
                            Développer des essais cliniques innovants
                        </li>
                        <li class="text-[#505050] text-base xl:text-xl font-Lato font-bold mt-3">
                            Offrir un véritable espoir aux patients qui luttent contre des tumeurs particulièrement difficiles à traiter, pour lesquelles les immunothérapies actuelles ne fonctionnent pas, comme les cancers du sein triple négatif, ou les cancers du poumon.
                        </li>
                    </ul>
                </div>
                <div class="w-1/2 flex flex-col gap-[4.3rem] xl:gap-10 relative h-[60rem]">
                    <p class="text-xl xl:text-3xl font-Lato font-bold text-[#4D54D6] underline uppercase">
                        L’innovation
                    </p>
                    <p class="text-[#505050] font-Lato text-base xl:text-xl">
                        Les vaccins à ARN messager sont particulièrement prometteurs et leur développement ouvre de nouvelles perspectives de guérison pour les patients.
                        <b>L’Institut Curie souhaite donc acquérir 2 équipements de pointe indispensables à l’élaboration de ce type de vaccins : un purificateur de peptides et un spectromètre de masse.</b>
                    </p>
                    <p class="text-3xl font-Lato font-bold text-[#4D54D6] underline uppercase 2xl:mt-0">
                        Le porteur du projet
                    </p>
                    <div class="flex flex-row bg-[#4D54D6]">
                        <img src="/pic-project-3-desktop.png" class="w-[200px] h-[300px] 2xl:w-[303px] 2xl:h-[405px]">
                        <div class="flex flex-col p-2 gap-2">
                            <p class="text-white text-base 2xl:text-xl font-bold font-Raleway">
                                Dr Sebastian Amugorena
                            </p>
                            <p class="font-Lato text-base 2xl:text-xl text-white">
                                Chef de l’équipe Réponses Immunitaires et Cancer à l’Institut Curie et coordinateur du projet EpCART.
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="300.489" height="20.341" viewBox="0 0 423.489 20.341">
                                <path id="Path_634" data-name="Path 634" d="M9314.057,6613.376h65.183v17.207l20.658-17.207h337.648" transform="translate(-9314.057 -6612.376)" fill="none" stroke="#fff" stroke-width="2"/>
                            </svg>
                            <p class="font-Lato text-white italic text-base 2xl:text-xl">
                                « Dans 20 ans, j’aspire à ce que ces thérapies de rupture aient prouvées leur efficacité contre différents types de cancers et en particulier des tumeurs solides, un défi de taille à relever car beaucoup plus difficiles d’accès pour ces cellules CAR-T »
                            </p>
                        </div>
                    </div>
                    <div class="text-center bg-white font-Raleway font-bold py-3 xl:py-5 2xl:mt-0">
                        <p class="text-2xl xl:text-3xl text-[#4D54D6]">
                            Besoin annuel de l’équipe de<br/> Sebastian Amigorena<br/>
                            <span class="underline">1,3 millions €</span>
                        </p>
                    </div>
                </div>
                <button on:click={()=> projectIndex = 1} class="absolute right-20 bottom-0 hover:scale-110 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="155.576" height="37.935" viewBox="0 0 155.576 37.935">
                        <g id="Component_16_2" data-name="Component 16 – 2" transform="translate(0 0.935)">
                            <text id="SUIVANT" transform="translate(0 24)" fill="#505050" font-size="25" font-family="Raleway-Bold, Raleway" font-weight="700"><tspan x="0" y="0">SUIVANT</tspan></text>
                            <path id="Path_631" data-name="Path 631" d="M1431,1408l11.076,13.826-5.538,6.913-5.538,6.913" transform="translate(-1288 -1406.826)" fill="none" stroke="#505050" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                            <line id="Line_10" data-name="Line 10" x2="29" transform="translate(39.5 35.5)" fill="none" stroke="#505050" stroke-linecap="round" stroke-width="3"/>
                        </g>
                    </svg>
                </button>
            </div>
        {/if}
    </div>
</div>

<style>
    .selectedButton {
        background-color: #4D54D6;
        color: white;
    }
    ul li::before {
        font-weight: normal;
        content: "•";
        color: #4D54D6;
        font-size: 2rem; /* Taille de la puce */
        display: inline-block; /* Nécessaire pour ajouter une marge à droite */
        width: 1rem; /* Largeur de l'espace pour la puce */
         /* Espace entre la puce et le texte */
        margin-right: 1rem;
    }


    .underline {
        text-decoration-line: underline;
        text-decoration-color: #FF6600;
        text-decoration-thickness: 3px;
        text-underline-offset: 5px;
    }

    .underline-black {
        text-decoration-line: underline;
        text-decoration-color: #505050;
        text-decoration-thickness: 3px;
        text-underline-offset: 2px;
    }
</style>
