<script lang="ts">
    import { fade, fly } from "svelte/transition";
    import { projectIndexStore } from "$lib/utils/utils.js";

    let projectTitles = [
        "Se doter des équipements les plus performants",
        "Mieux diagnostiquer les tumeurs rhabdoïdes",
        "Développer la médecine personnalisée et adaptative",
    ];
    let projectSelector = false;
    let showMore = false;
    let videoOpen = false;

    function setProjectIndex(index: number) {
        const element = document.getElementById("ProjectsMobile");

        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }

        $projectIndexStore = index;
        window.location.hash = `#projet${index + 1}`;
    }
</script>

<div
    style="box-shadow: 0px 6px 40px rgba(0, 0, 0, 0.16);"
    class="bg-[#F1F2FC] w-[95%] flex flex-col items-center justify-center rounded-2xl py-5 mt-[3rem] relative"
>
    <div id="ProjectsMobile" class="absolute -top-40" />
    <p
        class="text-[#505050] font-Raleway font-bold text-[20px] uppercase text-center"
    >
        <span class="text-[#FF6600]">Contre le cancer,</span><br />
        investissez votre impôt<br />
        dans l’innovation
    </p>
    <div class="px-3 w-full">
        <div
            class="bg-[#4D54D6] w-full mt-5 flex flex-col items-center justify-center relative rounded-t-2xl"
        >
            <button
                on:click={() => (projectSelector = !projectSelector)}
                class="flex cursor-pointer flex-row items-center justify-center w-full min-h-[80px] gap-x-4 py-4 text-left"
            >
                <p
                    class="font-Raleway text-white text-[18px] leading-tight font-bold w-[70%]"
                >
                    {@html projectTitles[$projectIndexStore]}
                </p>
                <svg
                    class:rotate-180={projectSelector}
                    class="transition-all"
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                >
                    <g
                        id="Group_759"
                        data-name="Group 759"
                        transform="translate(-326 -2692)"
                    >
                        <circle
                            id="Ellipse_40"
                            data-name="Ellipse 40"
                            cx="17"
                            cy="17"
                            r="17"
                            transform="translate(326 2692)"
                            fill="#fff"
                        />
                        <path
                            id="Path_638"
                            data-name="Path 638"
                            d="M14162.583,5344l8.7,8.7,8.7-8.7"
                            transform="translate(-13828.284 -2637)"
                            fill="none"
                            stroke="#4d54d6"
                            stroke-linecap="round"
                            stroke-width="3"
                        />
                    </g>
                </svg>
            </button>
            {#if projectSelector}
                <div
                    transition:fly={{ duration: 300 }}
                    class="absolute w-full top-full border-2 border-[#505050] divide-y-2 divide-[#505050]"
                >
                    {#each projectTitles as projectTitle, idx (idx)}
                        {#if idx !== $projectIndexStore}
                            <button
                                on:click={() => {
                                    setProjectIndex(idx);
                                    projectSelector = false;
                                }}
                                class="bg-white font-Raleway text-[#505050] text-left uppercase min-h-[80px] w-full px-3.5 py-2.5"
                            >
                                <p
                                    class="font-Raleway font-bold text-[18px] leading-tight m-0"
                                >
                                    {projectTitle}
                                </p>
                            </button>
                        {/if}
                    {/each}
                </div>
            {/if}
        </div>
    </div>
    {#if $projectIndexStore === 0}
        <div id="projet1" class="flex flex-col space-y-5">
            <div class="px-3">
                <img
                    src="/bg-project-1-mobile.jpg"
                    class="w-full aspect-[340/240] object-cover"
                    alt="projet 1"
                />
                <div
                    class="bg-[#4D54D6] font-Raleway rounded-b-2xl min-h-[80px] py-2.5 w-full px-10 text-white flex justify-center items-center leading-tight text-center"
                >
                    <p>
                        <span class="font-bold"
                            >Acquérir un séquenceur nouvelle génération</span
                        > <br /> pour décrypter l’ADN
                    </p>
                </div>
            </div>

            <div class="flex flex-col">
                <p
                    class="underline uppercase text-[#4D54D6] text-[18px] font-bold px-3"
                >
                    l'enjeu
                </p>
            </div>
            <p class="font-Lato text-[16px] px-3 text-[#505050]">
                La recherche scientifique évolue sans cesse. Pour rester à la
                pointe et prendre le cancer de vitesse, l’Institut Curie
                s’appuie sur <span class="font-bold"
                    >les technologies les plus innovantes</span
                >.
            </p>
            <div class="flex flex-col">
                <p
                    class="underline uppercase text-[#4D54D6] text-[18px] font-bold px-3"
                >
                    Le projet
                </p>
            </div>
            <p class="font-Lato text-[16px] px-3 text-[#505050]">
                En 2026, les équipes souhaitent acquérir un séquenceur de haute
                performance : l’AVITI24, capable de décrypter l’ADN avec une
                précision inédite, plus rapidement, tout en réduisant
                considérablement les coûts d’analyse. Il s’intégrera à la
                plateforme NGS (Next Generation Sequencing) de l’Institut Curie,
                qui offre un support technique et scientifique d’excellence pour
                l’analyse et le décryptage du génome.
            </p>
            <div class="flex flex-col">
                <p
                    class="underline uppercase text-[#4D54D6] text-[18px] font-bold px-3"
                >
                    Les perspectives pour les patients
                </p>
            </div>
            <p class="font-Lato text-[16px] px-3 text-[#505050] italic">
                «&nbsp;Grâce à sa technologie unique, le séquenceur AVITI24
                détecte des variations génétiques rares que d’autres appareils
                peuvent manquer. <span class="font-bold"
                    >Cette capacité est cruciale pour étudier des maladies
                    complexes comme le cancer.</span
                >
                Cela pourrait permettre aux chercheurs de mieux
                <span class="font-bold"
                    >comprendre la maladie et d’ouvrir la voie à des traitements
                    personnalisés plus efficaces.</span
                >&nbsp;»
                <br /> <br />
                Sylvain Baulande, chercheur et responsable de la plateforme NGS de
                l’Institut Curie
            </p>
            <div class="flex flex-col">
                <p
                    class="underline uppercase text-[#4D54D6] text-[18px] font-bold px-3"
                >
                    L’INNOVATION
                </p>
            </div>
            <p class="font-Lato text-[16px] px-3 text-[#505050] italic">
                Ce nouveau séquenceur permettra d’étudier des cellules
                individuelles sous plusieurs angles, en combinant l’analyse de
                leur forme, de leurs protéines et de leur ADN. Cette approche
                révolutionnaire ouvre de nouvelles perspectives pour comprendre
                comment les cellules fonctionnent et interagissent.
                <br /> <br />
                Grâce à AVITI24, il sera également possible d’analyser directement
                des coupes de tissus, afin de cartographier en détail l’activité
                des gènes dans un organe ou une tumeur.
            </p>
            <div class="flex flex-col relative gap-y-5">
                {#if showMore === false}
                    <div class="flex items-center justify-center mb-10">
                        <button
                            on:click={() => (showMore = true)}
                            class="text-[#4D54D6] font-Lato font-bold bg-[#F1F2FC] border-[#4D54D6] border-2 w-[169px] py-2"
                        >
                            En savoir plus
                        </button>
                    </div>
                {/if}
                {#if showMore}
                    <div class="flex flex-col mt-10">
                        <p
                            class="underline uppercase text-[#4D54D6] text-[18px] font-bold px-3"
                        >
                            le porteur du projet
                        </p>
                    </div>
                    <div
                        class="flex flex-col bg-[#4D54D6] text-white font-Lato mb-6 mx-3"
                    >
                        <img
                            src="/project-1-author-mobile.jpg"
                            class="w-full aspect-[340/110] object-cover"
                            alt="Sylvain Baulande"
                        />
                        <p class="font-bold text-[18px] p-3 pb-0">
                            Sylvain Baulande,
                        </p>
                        <p class="text-[16px] px-3 pb-6">
                            chercheur et responsable de la plateforme NGS de
                            l’Institut Curie
                        </p>
                    </div>
                    <div class="flex items-center justify-center px-3">
                        <div
                            class="bg-white text-[#4D54D6] flex flex-col w-full py-4 items-center justify-center font-Raleway font-bold text-[20px] mb-10"
                        >
                            <span class="uppercase">COÛT du séquenceur AVITI24</span>
                            <div class="flex flex-col">
                                <p
                                    class="uppercase underline text-center text-[18px] font-bold px-3"
                                >
                                    400 000 €
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-center pb-8">
                        <button
                            on:click={() => (showMore = false)}
                            class="text-[#4D54D6] font-Lato font-bold bg-[#F1F2FC] border-[#4D54D6] border-2 w-[169px] py-2"
                        >
                            Réduire
                        </button>
                    </div>
                {/if}
            </div>
        </div>
    {:else if $projectIndexStore === 1}
        <div id="projet2" class="flex flex-col space-y-5">
            <div class="px-3">
                <img
                    src="/bg-project-2-mobile.jpg"
                    class="w-full aspect-[340/240] object-cover"
                    alt="projet 2"
                />
                <div
                    class="bg-[#4D54D6] font-Raleway rounded-b-2xl min-h-[80px] py-2.5 w-full px-10 text-white flex justify-center items-center leading-tight text-center"
                >
                    <p>
                        <span class="font-bold"
                            >Améliorer la compréhension des tumeurs</span
                        > rhabdoïdes chez l’enfant
                    </p>
                </div>
            </div>

            <div class="flex flex-col">
                <p
                    class="underline uppercase text-[#4D54D6] text-[18px] font-bold px-3"
                >
                    l'enjeu
                </p>
            </div>
            <p class="font-Lato text-[16px] px-3 text-[#505050]">
                <span class="font-bold"
                    >Les tumeurs rhabdoïdes sont des cancers très agressifs qui
                    touchent surtout les jeunes enfants.</span
                >
                Elles peuvent apparaître dans le cerveau, dans le rein ou dans d’autres
                tissus mous. <br />
                Aujourd’hui, on sait qu’elles sont liées à la perte d’un gène appelé
                SMARCB1 qui joue un rôle clé dans l’organisation de l’ADN.
                <span class="font-bold"
                    >Mais elles restent difficiles à diagnostiquer et traiter en
                    raison de leur rareté et de leur complexité biologique.</span
                >
            </p>
            <div class="flex flex-col">
                <p
                    class="underline uppercase text-[#4D54D6] text-[18px] font-bold px-3"
                >
                    Le projet
                </p>
            </div>
            <p class="font-Lato text-[16px] px-3 text-[#505050]">
                Joanna Cyrta, médecin à l’Institut Curie, cherche à améliorer
                les diagnostics de ces cancers en constituant la plus grande
                base de données jamais créée. Pour cela, elle analysera de façon
                approfondie l’ADN tumoral, l’activité des gènes, les mécanismes
                épigénétiques et les interactions avec le système immunitaire.
            </p>
            <div class="flex flex-col">
                <p
                    class="underline uppercase text-[#4D54D6] text-[18px] font-bold px-3"
                >
                    Les perspectives pour les patients
                </p>
            </div>
            <p class="font-Lato text-[16px] font-bold px-3 text-[#505050]">
                Chacune de ces connaissances contribuera à identifier des
                nouvelles stratégies thérapeutiques porteuses d’espoir pour des
                enfants en attente de traitement.
            </p>
            <div class="flex flex-col">
                <p
                    class="underline uppercase text-[#4D54D6] text-[18px] font-bold px-3"
                >
                    Le DISPOSITIF TMP
                </p>
            </div>
            <p class="font-Lato text-[16px] font-bold px-3 text-[#505050]">
                Ce programme s’inscrit dans le cadre des <span class="font-bold"
                    >Temps Médicaux Protégés (TMP) de l’Institut Curie, entièrement
                    financés par la générosité des donateurs.</span
                >
                Ce dispositif spécifique permet aux médecins de dégager du temps
                dédié à la recherche, en complément de leur activité clinique. En
                favorisant un lien étroit entre soins et recherche,
                <span class="font-bold"
                    >il accélère le transfert des découvertes scientifiques vers
                    des applications concrètes pour les patients&nbsp;!</span
                >
            </p>
            <div class="flex flex-col relative gap-y-5">
                {#if showMore === false}
                    <div class="flex items-center justify-center mb-10">
                        <button
                            on:click={() => (showMore = true)}
                            class="text-[#4D54D6] font-Lato font-bold bg-[#F1F2FC] border-[#4D54D6] border-2 w-[169px] py-2"
                        >
                            En savoir plus
                        </button>
                    </div>
                {/if}
                {#if showMore}
                    <div class="flex flex-col mt-10">
                        <p
                            class="underline uppercase text-[#4D54D6] text-[18px] font-bold px-3"
                        >
                            la porteuse du projet
                        </p>
                    </div>
                    <div
                        class="flex flex-col bg-[#4D54D6] text-white font-Lato mb-6 mx-3"
                    >
                        <img
                            src="/project-2-author-mobile.jpg"
                            class="w-full aspect-[340/110] object-cover"
                            alt="Joanna Cyrta"
                        />
                        <p class="font-bold text-[18px] p-3 pb-0">
                            Joanna Cyrta,
                        </p>
                        <p class="text-[16px] px-3 pb-6">
                            médecin à l’Institut Curie
                        </p>
                    </div>
                    <div class="flex items-center justify-center px-3">
                        <div
                            class="bg-white text-[#4D54D6] flex flex-col text-center w-full py-4 items-center justify-center font-Raleway font-bold text-[20px] mb-10"
                        >
                            <span class="uppercase">Besoin annuel pour ce TMP</span>
                            <div class="flex flex-col">
                                <p
                                    class="normal-case underline text-center text-[18px] font-bold px-3"
                                >
                                    100 000 € par an
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-center pb-8">
                        <button
                            on:click={() => (showMore = false)}
                            class="text-[#4D54D6] font-Lato font-bold bg-[#F1F2FC] border-[#4D54D6] border-2 w-[169px] py-2"
                        >
                            Réduire
                        </button>
                    </div>
                {/if}
            </div>
        </div>
    {:else if $projectIndexStore === 2}
        <div id="projet3" class="flex flex-col space-y-5">
            <div class="px-3">
                <img
                    src="/bg-project-3-mobile.jpg"
                    class="w-full aspect-[340/240] object-cover"
                    alt="projet 3"
                />
                <div
                    class="bg-[#4D54D6] font-Raleway rounded-b-2xl min-h-[80px] py-2.5 w-full px-10 text-white flex justify-center items-center leading-tight text-center"
                >
                    <p>
                        <span class="font-bold"
                            >Mettre au point une nouvelle génération de
                            médicaments pour des immunothérapies</span
                        > plus efficaces et plus durables.
                    </p>
                </div>
            </div>

            <div class="flex flex-col">
                <p
                    class="underline uppercase text-[#4D54D6] text-[18px] font-bold px-3"
                >
                    L'Enjeu
                </p>
            </div>
            <p class="font-Lato text-[16px] px-3 text-[#505050]">
                Face à des cancers qui évoluent, se transforment et développent
                des résistances, <span class="font-bold"
                    >les traitements doivent eux aussi s’ajuster en permanence.</span
                >
            </p>
            <div class="flex flex-col">
                <p
                    class="underline uppercase text-[#4D54D6] text-[18px] font-bold px-3"
                >
                    Le projet
                </p>
            </div>
            <p class="font-Lato text-[16px] px-3 text-[#505050]">
                Une nouvelle approche consiste à <span class="font-bold"
                    >suivre de près les transformations de la tumeur et à
                    ajuster les traitements en fonction de son comportement réel</span
                >, plutôt que de s’appuyer uniquement sur un diagnostic initial.
            </p>
            <div class="flex flex-col">
                <p
                    class="underline uppercase text-[#4D54D6] text-[18px] font-bold px-3"
                >
                    les perspectives pour les patients
                </p>
            </div>
            <p class="font-Lato text-[16px] px-3 text-[#505050]">
                Un essai clinique évaluera prochainement ces approches
                innovantes chez des patients atteints de lymphome primitif du
                système nerveux central, ce qui constituera une étape
                essentielle vers des immunothérapies plus efficaces et plus
                durables.
            </p>
            <div class="flex flex-col">
                <p
                    class="underline uppercase text-[#4D54D6] text-[18px] font-bold px-3"
                >
                    L’exemple des CAR-T cells
                </p>
            </div>
            <p class="font-Lato text-[16px] px-3 text-[#505050]">
                CellAction est une structure intégrée de l’Institut Curie,
                inédite en France, qui permet de développer des médicaments
                innovants, à l’instar des CAR-T cells. <br />
                Celles-ci sont des cellules immunitaires du patient modifiées en
                laboratoire pour reconnaître et détruire les cellules tumorales.
                <br /> <br />
                Les CAR-T cells ont permis d’obtenir 
                <span class="font-bold"
                    >des résultats sans précédent, notamment dans certains cancers
                    du sang.</span
                >
                Malheureusement, chez certains patients, la maladie réapparaît et
                chez d’autres, les cellules modifiées perdent progressivement leur
                efficacité.
                <br /> <br />
                À l’Institut Curie,
                <span class="font-bold"
                    >les chercheurs travaillent donc à une nouvelle génération
                    de CAR-T cells, capables de renforcer leur persistance, de
                    prévenir leur épuisement et d’ajuster leurs cibles pour
                    contrer les stratégies d’échappement des cellules tumorales.</span
                >
            </p>
            <div class="flex flex-col relative gap-y-5">
                {#if showMore === false}
                    <div class="flex items-center justify-center mb-10">
                        <button
                            on:click={() => (showMore = true)}
                            class="text-[#4D54D6] font-Lato font-bold bg-[#F1F2FC] border-[#4D54D6] border-2 w-[169px] py-2"
                        >
                            En savoir plus
                        </button>
                    </div>
                {/if}
                {#if showMore}
                    <div class="flex items-center justify-center px-3">
                        <div
                            class="bg-white text-center text-[#4D54D6] flex flex-col w-full py-4 items-center justify-center font-Raleway font-bold text-[20px] mb-10"
                        >
                            <span class="px-2">BESOIN POUR L’ANALYSE SINGLE-CELL <br>(un des équipements du laboratoire CellAction) </span>
                            <div class="flex flex-col">
                                <p
                                    class="normal-case underline text-center text-[18px] font-bold px-3"
                                >
                                    385 000 € par an
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-center pb-8">
                        <button
                            on:click={() => (showMore = false)}
                            class="text-[#4D54D6] font-Lato font-bold bg-[#F1F2FC] border-[#4D54D6] border-2 w-[169px] py-2"
                        >
                            Réduire
                        </button>
                    </div>
                {/if}
            </div>
        </div>
    {/if}

    <div class="flex items-center mx-auto gap-4">
        <button
            on:click={() => setProjectIndex(0, "")}
            class="w-5 h-5 {$projectIndexStore === 0
                ? 'bg-[#FF6600]'
                : 'bg-white'} border-[3px] border-[#FF6600] rounded-full transition-all"
        />
        <button
            on:click={() => setProjectIndex(1, "")}
            class="w-5 h-5 {$projectIndexStore === 1
                ? 'bg-[#FF6600]'
                : 'bg-white'} border-[3px] border-[#FF6600] rounded-full transition-all"
        />
        <button
            on:click={() => setProjectIndex(2, "")}
            class="w-5 h-5 {$projectIndexStore === 2
                ? 'bg-[#FF6600]'
                : 'bg-white'} border-[3px] border-[#FF6600] rounded-full transition-all"
        />
    </div>
</div>

<style>
    .underline {
        text-decoration-line: underline;
        text-decoration-color: #ff6600;
        text-decoration-thickness: 3px;
        text-underline-offset: 5px;
    }
</style>
