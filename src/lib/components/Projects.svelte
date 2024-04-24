<script>
    let projectIndex = 0;
    import { projectIndexStore} from "$lib/utils/utils.js";
</script>

<div class="relative flex items-center justify-center w-full mt-10 z-0">
    <div style="box-shadow: 0px 6px 40px rgba(0, 0, 0, 0.16);" class="w-[90%] 2xl:w-[80%] flex flex-col items-center justify-center bg-[#F1F2FC] rounded-3xl py-4 2xl:py-10">
        <p class="text-center lg:text-2xl 2xl:text-2xl uppercase font-bold font-Raleway text-[#505050]">
            Contre le cancer,<br/>
            investissez votre impôt dans l’innovation
        </p>
        <div class=" bg-[#FF6600] w-[5rem] h-1 rounded-2xl mt-2"/>
        <div class="flex flex-row mt-5 2xl:mt-6 w-full items-center justify-center">
            <button on:click={() => (window.location.hash = '#projet1')} class:selectedButton={$projectIndexStore === 0} class=" uppercase w-[30%] py-2 font-Raleway text-xl font-bold text-center text-[#505050] border-r-2 border-[#505050]">
                Accélérer la recherche grâce<br/> à deux<span class="underline decoration-[#FF6600] "> &nbsp;équipements</span>
            </button>
            <button on:click={() => (window.location.hash = '#projet2')} class:selectedButton={$projectIndexStore === 1} class=" uppercase w-[30%] py-2 font-Raleway text-xl font-bold text-center text-[#505050] border-r-2 border-[#505050]">
                Attirer les<br/><span class="underline decoration-[#FF6600] "> meilleurs talents</span>
            </button>
            <button on:click={() => (window.location.hash = '#projet3')} class:selectedButton={$projectIndexStore === 2} class=" uppercase w-[30%] py-2 font-Raleway text-xl font-bold text-center text-[#505050]">
                Développer des<br/> <span class="underline decoration-[#FF6600] ">immunothérapies</span> inédites
            </button>
        </div>
        {#if $projectIndexStore === 0}
            <div id="projet1" class="bg-[url('/project-1-bg.png')] bg-cover bg-no-repeat relative w-full h-[20rem] 2xl:h-[39rem]">
                <div class="bg-[#4D54D6]/70 backdrop-blur-md purple-project absolute w-full  bottom-0 h-[20rem] 2xl:h-[25rem]"/>
                <p class="font-Raleway text-xl 2xl:text-3xl font-black absolute bottom-5 2xl:bottom-10 text-center text-white left-0 right-0 mx-auto">
                    <span class="underline decoration-[#FF6600] ">2 équipements de pointe</span> pour révolutionner les traitements de<br/> demain contre les cancers grâce à des vaccins thérapeutiques
                </p>
            </div>
            <div class="flex flex-row items-center justify-center w-full xl:mt-5 px-5 xl:px-10 py-2 2xl:py-10  relative md:h-[33rem] xl:h-[35rem] 2xl:h-[50rem]">
                <div class="w-1/2 flex flex-col h-full 2xl:mt-4">
                    <p class="text-xl font-Lato font-bold text-[#4D54D6] underline uppercase">
                        L’Enjeu
                    </p>
                    <p class="text-[#505050] font-Lato text-sm 2xl:text-xl mt-2 xl:mt-5">
                        Chaque tumeur possède un antigène qui lui est propre. Le vaccin à ARN messager consiste à injecter dans le corps du patient un ARNm, fabriqué en laboratoire, qui contient le code nécessaire à la fabrication de cet antigène. Il force ainsi le système immunitaire du patient à reconnaître ces antigènes et à produire les anticorps correspondants.
                        <b><br/><br/>L’efficacité du vaccin à ARNm réside donc dans la capacité des chercheurs à identifier la séquence génétique permettant de coder des antigènes spécifiques de cellules tumorales à partir d’échantillons de tumeurs.</b>
                    </p>
                    <p class="text-xl font-Lato mt-2 xl:mt-5 font-bold text-[#4D54D6] uppercase">
                        Les nouvelles perspectives<br/>
                        <c class="underline">pour</c> les patients
                    </p>
                    <ul class="xl:mt-5">
                        <li class="text-[#505050] text-sm 2xl:text-xl font-Lato font-bold">
                            Un délai de fabrication de vaccin raccourci de plusieurs mois.
                        </li>
                        <li class="text-[#505050] text-sm 2xl:text-xl font-Lato font-bold xl:mt-3">
                            Une avancée dans la médecine de précision pour chaque patient.
                        </li>
                        <li class="text-[#505050] text-sm 2xl:text-xl font-Lato font-bold xl:mt-3">
                            Un espoir de solution thérapeutique pour les cancers où la chimiothérapie
                            ou la radiothérapie restent encore inefficaces.
                        </li>
                    </ul>
                </div>
                <div class="w-1/2 flex flex-col h-full relative ml-5 2xl:mt-4">
                    <p class="text-xl font-Lato font-bold text-[#4D54D6] underline uppercase">
                        L’innovation
                    </p>
                    <p class="text-[#505050] font-Lato text-sm 2xl:text-xl  mt-2 xl:mt-5">
                        Les vaccins à ARN messager sont particulièrement prometteurs et leur développement ouvre de nouvelles perspectives de guérison pour les patients.
                        <b>L’Institut Curie souhaite donc acquérir 2 équipements de pointe indispensables à l’élaboration de ce type de vaccins : un purificateur de peptides et un spectromètre de masse.</b>
                    </p>
                    <p class="text-xl  font-Lato font-bold text-[#4D54D6] underline uppercase mt-5 xl:mt-6 2xl:mt-10">
                        Le porteur du projet
                    </p>
                    <div class="flex flex-row bg-[#4D54D6] items-center justify-center mt-5 xl:mt-6 2xl:mt-10">
                        <img src="/pic-project-1.png" alt="Dr Antonin Morillon" class=" md:w-[10rem] xl:w-[300px] h-full">
                        <p class="text-white text-sm 2xl:text-xl font-Raleway p-2 my-3 2xl:p-4">
                            <span class="text-xl 2xl:text-2xl font-bold">
                                Dr Antonin Morillon<br/>
                            </span>
                            Chef de l’équipe de recherche ARN non codant, épigénétique et fluidité des génomes à l’Institut Curie
                        </p>
                    </div>
                    <div class="text-center bg-white font-Raleway font-bold py-3 xl:py-5 mt-5 xl:mt-6 2xl:mt-10">
                        <p class="text-xl px-5 text-[#4D54D6]">
                            Coût de ces 2 équipements<br/>
                            <span class="underline text-2xl">1,4 millions €</span>
                        </p>
                    </div>
                </div>
                <button on:click={()=> $projectIndexStore = 1} class="absolute right-20 bottom-0 hover:scale-110 transition-all">
                    <img src="/suivant-btn.png" class="w-[130px]"/>
                </button>
            </div>
        {:else if $projectIndexStore === 1}
            <div id="projet2" class="bg-[url('/project-2-bg.png')] bg-cover bg-no-repeat relative w-full h-[22rem] 2xl:h-[39rem]">
                <div class="bg-[#4D54D6]/70 backdrop-blur-md purple-project absolute w-full  bottom-0 h-[20rem] 2xl:h-[25rem]"/>
                <p class="font-Raleway text-xl 2xl:text-3xl font-black absolute bottom-5 2xl:bottom-10 text-center text-white left-0 right-0 mx-auto">
                    <span class="underline decoration-[#FF6600] ">Une équipe renforcée</span> pour mieux comprendre le<br/> développement des tumeurs qui touchent les enfants
                </p>
            </div>
            <div class="flex flex-row items-center justify-center  h-[50rem] 2xl:h-[60rem]  w-full xl:mt-5 px-5 xl:px-10 py-5 xl:py-5 relative">
                <div class="w-1/2 flex flex-col relative h-full">
                    <p class="text-xl font-Lato font-bold text-[#4D54D6] underline uppercase ">
                        L’Enjeu
                    </p>
                    <p class="text-[#505050] font-Lato text-sm 2xl:text-xl mt-10">
                        Contrairement aux cancers de l’adulte qui résultent principalement du vieillissement et de l'exposition à des mutagènes, les cancers pédiatriques émergent de la dérégulation des programmes génétiques qui gouvernent le développement normal des cellules.
                        Les cancers pédiatriques nécessitent donc des recherches spécifiques et adaptées.
                    </p>
                    <p class="text-xl font-Lato font-bold text-[#4D54D6] uppercase mt-10">
                        Les nouvelles perspectives<br/>
                        <c class="underline">pour</c> les patients
                    </p>
                    <ul class="mt-10">
                        <li class="text-[#505050] text-sm 2xl:text-xl font-Lato font-bold">
                            Se basant sur les précédents travaux du Dr Saulnier qui ont permis
                            d’identifier un type cellulaire présent uniquement lors du
                            développement fœtal du cerveau et à l’origine du médulloblastome,
                            son équipe cherchera à étendre ces résultats prometteurs à plusieurs
                            types de cancers pédiatriques.
                        </li>
                        <li class="text-[#505050] text-sm 2xl:text-xl font-Lato font-bold mt-3">
                            <span class="uppercase">à</span> terme, prévenir la maladie chez les enfants, avant même qu’elle ne se développe.
                        </li>
                    </ul>
                </div>
                <div class="w-1/2 flex flex-col relative h-full ml-5">
                    <p class="text-xl font-Lato font-bold text-[#4D54D6] underline uppercase">
                        L’innovation
                    </p>
                    <p class="text-[#505050] font-Lato text-sm 2xl:text-xl mt-10">
                        L’unité Cancer, hétérogénéité, instabilité et plasticité de l’Institut Curie, dirigée par le Docteur Olivier Delattre, a été renforcée avec l’arrivée d’un jeune chercheur, le Docteur Olivier Saulnier, à la tête d’une nouvelle équipe “Génomique et développement des cancers de l’enfant”.
                        <br/><br/>
                        Avec son équipe, le Docteur Olivier Saulnier étudie des programmes de transcription au cours du développement embryonnaire et leurs implications dans la genèse des cellules cancéreuses. En utilisant des techniques de génomique à l’échelle de la cellule unique, leur objectif est d’identifier les origines des cancers pédiatriques à la fois dans l’espace et dans le temps.
                    </p>
                    <p class="text-xl  font-Lato font-bold text-[#4D54D6] underline uppercase mt-10">
                        Le porteur du projet
                    </p>
                    <div class="flex flex-row bg-[#4D54D6] items-center justify-center mt-10">
                        <img src="/pic-project-2-desktop.png" alt="Dr Antonin Morillon" class="w-[250px] h-full">
                        <p class="text-white text-sm 2xl:text-xl font-Raleway  2xl:p-4 ml-3">
                            <span class="text-xl 2xl:text-2xl font-bold">
                                Dr Olivier Saulnier<br/>
                            </span>
                            Chef de l’équipe Génomique et développement des cancers de l’enfant à l’Institut Curie
                        </p>
                    </div>
                    <div class="text-center bg-white font-Raleway font-bold py-3 xl:py-5 mt-10">
                        <p class="text-xl px-5 text-[#4D54D6]">
                            Besoin de financement pour les recherches de l’équipe “Génomique et développement des cancers de l’enfant”<br/>
                            <span class="underline text-2xl">669 000 € par an</span>
                        </p>
                    </div>
                </div>
                <button on:click={()=> $projectIndexStore = 2} class="absolute right-20 lg:-bottom-2 xl:bottom-2 2xl:bottom-0  hover:scale-110 transition-all">
                    <img src="/suivant-btn.png" class="w-[130px]"/>
                </button>
                <button on:click={()=> $projectIndexStore = 0} class="absolute left-20 lg:-bottom-2 xl:bottom-2 2xl:bottom-0  hover:scale-110 transition-all">
                    <img src="/precedent-btn.png" class="w-[154px]"/>
                </button>
            </div>
            {:else if $projectIndexStore === 2}
            <div id="projet3" style="background-image: url('/bg-project-4-test.jpg');" class="bg-cover bg-no-repeat relative w-full h-[22rem] 2xl:h-[39rem]">
                <div class="bg-[#4D54D6]/70 backdrop-blur-md purple-project absolute w-full  bottom-0 h-[20rem] 2xl:h-[25rem]"/>
                <p class="font-Raleway text-xl 2xl:text-3xl font-black absolute bottom-5 2xl:bottom-10 text-center text-white left-0 right-0 mx-auto">
                    Évaluation de la combinaison de<br/> <span class="underline decoration-[#FF6600] ">2 thérapies cellulaires</span> innovantes avec le projet EpCART
                </p>
            </div>
            <div class="flex flex-row items-center justify-center w-full relative h-[60rem] 2xl:h-[65rem]  px-5 xl:px-10 py-5 xl:py-10">
                <div class="w-1/2 flex flex-col h-full">
                    <p class="text-xl font-Lato font-bold text-[#4D54D6] underline uppercase">
                        L’Enjeu
                    </p>
                    <p class="text-[#505050] font-Lato text-sm 2xl:text-xl mt-10">
                        20 ans après l’émergence de l’immunothérapie et après 10 ans de recherche fondamentale, les équipes de l’Institut Curie franchissent une nouvelle étape contre les tumeurs difficiles à traiter. <b> De nouvelles thérapies cellulaires révolutionnaires ont été conçues, elles reposent sur la combinaison suivante :</b>
                    </p>
                    <ul class="mt-10">
                        <li class="text-[#505050] text-sm 2xl:text-xl font-Lato font-bold">
                            des thérapies CAR-T qui constituent une nouvelle forme
                            d’immunothérapie reposant sur la modification génétique
                            des lymphocytes T d’un patient. Une fois modifiés, ces lymphocytes
                            T devenus « cellules CAR-T » sont réinjectés au patient afin
                            que ceux-ci soient en mesure de reconnaître et détruire
                            les cellules cancéreuses.
                        </li>
                        <li class="text-[#505050] text-sm 2xl:text-xl font-Lato font-bold">
                            de l’immuno-épigénétique qui permet de «&nbsp;reprogrammer&nbsp;» ces cellules
                            CAR-T pour augmenter leur efficacité face à la tumeur.
                        </li>
                    </ul>
                    <p class="text-xl font-Lato font-bold text-[#4D54D6] uppercase mt-10">
                        Les nouvelles perspectives<br/>
                        <c class="underline">pour</c> les patients
                    </p>
                    <ul class="mt-10">
                        <li class="text-[#505050] text-sm 2xl:text-xl font-Lato font-bold">
                            Développer des essais cliniques innovants.
                        </li>
                        <li class="text-[#505050] text-sm 2xl:text-xl font-Lato font-bold">
                            Offrir un véritable espoir aux patients qui luttent contre des tumeurs
                            particulièrement difficiles à traiter, pour lesquelles les
                            immunothérapies actuelles ne fonctionnent pas, comme les cancers du
                            sein triple négatif, ou les cancers du poumon.
                        </li>
                    </ul>
                </div>
                <div class="w-1/2 flex flex-col relative h-full 2xl:h-[60rem] ml-5">
                    <p class="text-xl font-Lato font-bold text-[#4D54D6] underline uppercase">
                        L’innovation
                    </p>
                    <p class="text-[#505050] font-Lato text-sm 2xl:text-xl mt-10">
                        Le projet EpCART, coordonné par l’Institut Curie, vise à valider en clinique cette approche unique et prometteuse dans plusieurs tumeurs solides. À travers un essai clinique de 2 ans, <b>le projet va chercher à évaluer la tolérance et l’efficacité immunologique de ces thérapies sur les patients.</b>
                    </p>
                    <p class="text-xl  font-Lato font-bold text-[#4D54D6] underline uppercase mt-10">
                        Le porteur du projet
                    </p>
                    <div class="flex flex-row bg-[#4D54D6] mt-10">
                        <img src="/pic-project-3-desktop.png" class="w-[150px] h-[250px] xl:w-[200px] xl:h-[300px] 2xl:w-[303px] 2xl:h-[405px]">
                        <div class="flex flex-col p-2 gap-2">
                            <p class="text-white text-xs xl:text-sm 2xl:text-xl font-bold font-Raleway">
                                Dr Sebastian Amigorena
                            </p>
                            <p class="font-Lato text-xs xl:text-sm 2xl:text-xl text-white">
                                Chef de l’équipe Réponses Immunitaires et Cancer à l’Institut Curie et coordinateur du projet EpCART.
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="300.489" height="20.341" viewBox="0 0 423.489 20.341">
                                <path id="Path_634" data-name="Path 634" d="M9314.057,6613.376h65.183v17.207l20.658-17.207h337.648" transform="translate(-9314.057 -6612.376)" fill="none" stroke="#fff" stroke-width="2"/>
                            </svg>
                            <p class="font-Lato text-white italic text-sm xl:text-sm 2xl:text-xl">
                                « Dans 20 ans, j’aspire à ce que ces thérapies de rupture aient prouvées leur efficacité contre différents types de cancers et en particulier des tumeurs solides, un défi de taille à relever car beaucoup plus difficiles d’accès pour ces cellules CAR-T »
                            </p>
                        </div>
                    </div>
                    <div class="text-center bg-white font-Raleway font-bold py-3 xl:py-5 mt-10">
                        <p class="text-xl px-5 text-[#4D54D6]">
                            Besoin annuel de l’équipe de Sebastian Amigorena<br/>
                            <span class="underline text-2xl">1,3 millions €</span>
                        </p>
                    </div>
                </div>
                <button on:click={()=> $projectIndexStore = 1} class="absolute left-20 bottom-2 hover:scale-110 transition-all">
                    <img src="/precedent-btn.png" class="w-[154px]"/>
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
