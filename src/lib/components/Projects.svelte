<script lang="ts">
    import { projectIndexStore } from "$lib/utils/utils";

    let projectIndex = 0;

    const selectProject = (index: number) => {
        const element = document.getElementById("ProjectsDesktop");

        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        $projectIndexStore = index;
    };

</script>

<div class="relative flex items-center justify-center w-full mt-10 z-0">
    <div
        style="box-shadow: 0px 6px 40px rgba(0, 0, 0, 0.16);"
        class="w-[90%] 2xl:w-[80%] flex flex-col items-center justify-center bg-[#F1F2FC] rounded-3xl py-4 2xl:py-10"
    >
        <p
            class="mb-2 text-center lg:text-2xl uppercase font-bold font-Raleway text-[#505050]"
        >
            <span class="text-[#FF6600]">Contre le cancer,</span><br />
            investissez votre impôt dans l’innovation
        </p>
        <div
            class="px-5 xl:px-10 flex flex-row mt-5 gap-3 lg:gap-6 2xl:mt-6 w-full items-end justify-between"
        >
            <button
                class="tab"
                data-selected={$projectIndexStore === 0}
                on:click={() => (window.location.hash = "#projet1")}
                >Se doter des équipements les plus performants
            </button>
            <button
                class="tab"
                data-selected={$projectIndexStore === 1}
                on:click={() => (window.location.hash = "#projet2")}
                >Mieux comprendre les tumeurs rhabdoïdes
            </button>
            <button
                class="tab"
                data-selected={$projectIndexStore === 2}
                on:click={() => (window.location.hash = "#projet3")}
                >Développer la médecine personnalisée et adaptative
            </button>
        </div>
        {#if $projectIndexStore === 0}
            <div class="px-5 xl:px-10 w-full">
                <div
                    id="projet1"
                    class="bg-[url('/bg-project-1.jpg')] bg-cover bg-no-repeat relative w-full aspect-[1500/450]"
                />
                <div
                    class="w-full h-24 bg-[#4D54D6] grid place-items-center font-medium rounded-b-2xl text-lg md:text-xl !leading-tight text-white"
                    style="text-wrap: balance"
                >
                    <div class="max-w-[870px] text-center font-Raleway">
                        <span class="font-extrabold"
                            >Acquérir un séquenceur nouvelle génération</span
                        > <br />
                        pour décrypter l’ADN
                    </div>
                </div>
            </div>
            <div
                class="flex flex-row items-start justify-center w-full xl:mt-5 px-5 xl:px-10 py-10 relative h-fit"
            >
                <div class="w-1/2 flex flex-col h-full 2xl:mt-4">
                    <p
                        class="text-xl font-Lato font-bold text-[#4D54D6] underline uppercase"
                    >
                        L’Enjeu
                    </p>
                    <p
                        class="text-[#505050] font-Lato text-sm 2xl:text-xl mt-2 xl:mt-5"
                    >
                        La recherche scientifique évolue sans cesse. Pour rester
                        à la pointe et prendre le cancer de vitesse, l’Institut
                        Curie s’appuie sur <span class="font-bold"
                            >les technologies les plus innovantes.</span
                        >
                    </p>
                    <p
                        class="text-xl font-Lato mt-2 xl:mt-5 font-bold text-[#4D54D6] uppercase underline"
                    >
                        Le projet
                    </p>
                    <p
                        class="text-[#505050] font-Lato text-sm 2xl:text-xl mt-2 xl:mt-5"
                    >
                        En 2026, les équipes souhaitent acquérir un séquenceur
                        de haute performance : l’AVITI24, capable de décrypter
                        l’ADN avec une précision inédite, plus rapidement, tout
                        en réduisant considérablement les coûts d’analyse. Il
                        s’intégrera à la plateforme NGS (Next Generation
                        Sequencing) de l’Institut Curie, qui offre un support
                        technique et scientifique d’excellence pour l’analyse et
                        le décryptage du génome.
                    </p>
                    <p
                        class="text-xl font-Lato mt-2 xl:mt-5 font-bold text-[#4D54D6] uppercase underline"
                    >
                        Les perspectives pour les patients
                    </p>
                    <p
                        class="text-[#505050] font-Lato text-sm 2xl:text-xl mt-2 xl:mt-5 italic"
                    >
                        «&nbsp;Grâce à sa technologie unique, le séquenceur
                        AVITI24 détecte des variations génétiques rares que
                        d’autres appareils peuvent manquer. <span
                            class="font-bold"
                            >Cette capacité est cruciale pour étudier des
                            maladies complexes comme le cancer.</span
                        >
                        Cela pourrait permettre aux chercheurs de mieux
                        <span class="font-bold"
                            >comprendre la maladie et d’ouvrir la voie à des
                            traitements personnalisés plus efficaces.</span
                        >&nbsp;» <br />
                        <br />
                        Sylvain Baulande, chercheur et responsable de la plateforme
                        NGS de l’Institut Curie
                    </p>
                </div>
                <div
                    class="w-1/2 flex flex-col h-full relative ml-5 lg:ml-[6%] 2xl:mt-4"
                >
                    <p
                        class="text-xl font-Lato font-bold text-[#4D54D6] underline uppercase"
                    >
                        L’innovation
                    </p>
                    <p
                        class="text-[#505050] font-Lato text-sm 2xl:text-xl mt-2 xl:mt-5"
                    >
                        Ce nouveau séquenceur permettra d’étudier des cellules
                        individuelles sous plusieurs angles, en combinant
                        l’analyse de leur forme, de leurs protéines et de leur
                        ADN. Cette approche révolutionnaire ouvre de nouvelles
                        perspectives pour comprendre comment les cellules
                        fonctionnent et interagissent.
                        <br /> <br />
                        Grâce à AVITI24, il sera également possible d’analyser directement
                        des coupes de tissus, afin de cartographier en détail l’activité
                        des gènes dans un organe ou une tumeur.
                    </p>
                    <p
                        class="text-xl font-Lato font-bold text-[#4D54D6] underline uppercase mt-5 xl:mt-6 2xl:mt-10"
                    >
                        Le porteur du projet
                    </p>
                    <div
                        class="flex flex-row bg-[#4D54D6] items-center justify-center mt-5 xl:mt-6 2xl:mt-10"
                    >
                        <img
                            src="/project-1-author.jpg"
                            alt="Dr Stéphanie Descroix"
                            class=" md:w-[10rem] xl:w-[300px] h-full object-cover"
                        />
                        <p
                            class="text-white text-xl 2xl:text-2xl !leading-tight font-Lato p-2 my-3 md:p-4"
                        >
                            <span class="font-bold font-Raleway">
                                Sylvain Baulande,<br />
                            </span>
                            chercheur et responsable de la plateforme NGS de l’Institut
                            Curie
                        </p>
                    </div>
                    <div
                        class="text-center bg-white font-Raleway font-bold py-3 xl:py-5 mt-5 xl:mt-6 2xl:mt-10"
                    >
                        <p class="text-2xl px-5 text-[#4D54D6]">
                            COÛT du séquenceur AVITI24<br />
                            <span class="underline">400 000 €</span>
                        </p>
                    </div>
                </div>
            </div>
        {:else if $projectIndexStore === 1}
            <div class="px-5 xl:px-10 w-full">
                <div
                    id="projet2"
                    class="bg-[url('/bg-project-2.jpg')] bg-cover bg-no-repeat relative w-full aspect-[1500/450]"
                />
                <div
                    class="w-full h-24 bg-[#4D54D6] grid place-items-center font-medium rounded-b-2xl text-lg md:text-xl !leading-tight text-white"
                    style="text-wrap: balance"
                >
                    <div class="max-w-[870px] text-center font-Raleway">
                        <span class="font-extrabold"
                            >Améliorer les diagnostics des tumeurs</span
                        >
                        <br /> rhabdoïdes chez l’enfant
                    </div>
                </div>
            </div>
            <div
                class="flex flex-row items-start justify-center h-fit w-full xl:mt-5 px-5 xl:px-10 py-10 relative"
            >
                <div class="w-1/2 flex flex-col relative h-full">
                    <p
                        class="text-xl font-Lato font-bold text-[#4D54D6] underline uppercase"
                    >
                        L’Enjeu
                    </p>
                    <p
                        class="text-[#505050] font-Lato text-sm 2xl:text-xl mt-10"
                    >
                        <span class="font-bold"
                            >Les tumeurs rhabdoïdes sont des cancers très
                            agressifs qui touchent surtout les jeunes enfants.</span
                        >
                        Elles peuvent apparaître dans le cerveau, dans le rein ou
                        dans d’autres tissus mous. <br />
                        Aujourd’hui, on sait qu’elles sont liées à la perte d’un
                        gène appelé SMARCB1 qui joue un rôle clé dans l’organisation
                        de l’ADN.
                        <span class="font-bold"
                            >Mais elles restent difficiles à diagnostiquer et
                            traiter en raison de leur rareté et de leur
                            complexité biologique.</span
                        >
                    </p>
                    <p
                        class="text-xl font-Lato underline font-bold text-[#4D54D6] uppercase mt-10"
                    >
                        Le projet
                    </p>
                    <p
                        class="text-[#505050] font-Lato text-sm 2xl:text-xl mt-10"
                    >
                        Joanna Cyrta, médecin à l’Institut Curie, cherche à
                        améliorer les diagnostics de ces cancers en constituant
                        la plus grande base de données jamais créée. Pour cela,
                        elle analysera de façon approfondie l’ADN tumoral,
                        l’activité des gènes, les mécanismes épigénétiques et
                        les interactions avec le système immunitaire.
                    </p>
                    <p
                        class="text-xl font-Lato underline font-bold text-[#4D54D6] uppercase mt-10"
                    >
                        Les perspectives pour les patients
                    </p>
                    <p
                        class="text-[#505050] font-bold font-Lato text-sm 2xl:text-xl mt-10"
                    >
                        Chacune de ces connaissances contribuera à identifier
                        des nouvelles stratégies thérapeutiques porteuses
                        d’espoir pour des enfants en attente de traitement.
                    </p>
                </div>
                <div
                    class="w-1/2 flex flex-col relative h-full ml-5 lg:ml-[6%]"
                >
                    <p
                        class="text-xl font-Lato font-bold text-[#4D54D6] underline uppercase"
                    >
                        Le dispositif
                    </p>
                    <p
                        class="text-[#505050] font-Lato text-sm 2xl:text-xl mt-10"
                    >
                        Ce programme s’inscrit dans le cadre des <span
                            class="font-bold"
                            >Temps Médicaux Protégés de l’Institut Curie,
                            entièrement financés par la générosité des
                            donateurs.</span
                        >
                        Ce dispositif spécifique permet aux médecins de dégager du
                        temps dédié à la recherche, en complément de leur activité
                        clinique. En favorisant un lien étroit entre soins et recherche,
                        <span class="font-bold"
                            >il accélère le transfert des découvertes
                            scientifiques vers des applications concrètes pour
                            les patients !</span
                        >
                    </p>
                    <p
                        class="text-xl font-Lato font-bold text-[#4D54D6] underline uppercase mt-5 xl:mt-6 2xl:mt-10"
                    >
                        La porteuse du projet
                    </p>
                    <div
                        class="flex flex-row bg-[#4D54D6] items-center justify-center mt-5 xl:mt-6 2xl:mt-10"
                    >
                        <img
                            src="/project-2-author.jpg"
                            alt="Dr Pierre Bost"
                            class=" md:w-[10rem] s xl:w-[300px] h-full object-cover"
                        />
                        <p
                            class="mr-auto text-white text-xl 2xl:text-2xl !leading-tight font-Lato p-2 my-3 md:p-4"
                        >
                            <span class="font-bold font-Raleway">
                                Joanna Cyrta,<br />
                            </span>
                            médecin à l’Institut Curie
                        </p>
                    </div>
                    <div
                        class="text-center bg-white font-Raleway font-bold py-3 xl:py-5 mt-5 xl:mt-6 2xl:mt-10"
                    >
                        <p class="text-2xl px-5 text-[#4D54D6]">
                            Besoin de financement ><br />
                            <span class="underline">100 000 € par an</span>
                        </p>
                    </div>
                </div>
            </div>
        {:else if $projectIndexStore === 2}
            <div class="px-5 xl:px-10 w-full">
                <div
                    id="projet3"
                    class="bg-[url('/bg-project-3.jpg')] bg-cover bg-no-repeat relative w-full aspect-[1500/450]"
                />
                <div
                    class="w-full h-24 bg-[#4D54D6] grid place-items-center font-medium rounded-b-2xl text-lg md:text-xl !leading-tight text-white"
                    style="text-wrap: balance"
                >
                    <div class="max-w-[870px] text-center font-Raleway">
                        <span class="font-bold">
                            Mettre au point une nouvelle génération de
                            médicaments
                        </span>pour<br /> des immunothérapies plus efficaces et plus
                        durables.
                    </div>
                </div>
            </div>
            <div
                class="flex flex-row items-start justify-center w-full relative h-fit px-5 xl:px-10 py-10"
            >
                <div class="w-1/2 flex flex-col h-full">
                    <p
                        class="text-xl font-Lato font-bold text-[#4D54D6] underline uppercase"
                    >
                        L’Enjeu
                    </p>
                    <p
                        class="text-[#505050] font-Lato text-sm 2xl:text-xl mt-10"
                    >
                        Face à des cancers qui évoluent, se transforment et
                        développent des résistances, <span class="font-bold"
                            >les traitements doivent eux aussi s’ajuster en
                            permanence.</span
                        >
                    </p>
                    <p
                        class="text-xl font-Lato underline font-bold text-[#4D54D6] uppercase mt-10"
                    >
                        Le projet
                    </p>
                    <p
                        class="text-[#505050] font-Lato text-sm 2xl:text-xl mt-10"
                    >
                        Une nouvelle approche consiste à <span class="font-bold"
                            >suivre de près les transformations de la tumeur et
                            à ajuster les traitements en fonction de son
                            comportement réel</span
                        >, plutôt que de s’appuyer uniquement sur un diagnostic
                        initial.
                    </p>
                    <p
                        class="text-xl font-Lato underline font-bold text-[#4D54D6] uppercase mt-10"
                    >
                        Les perspectives pour les patients
                    </p>
                    <p
                        class="text-[#505050] font-bold font-Lato text-sm 2xl:text-xl mt-10"
                    >
                        Un essai clinique évaluera prochainement ces approches
                        innovantes chez des patients atteints de lymphome
                        primitif du système nerveux central, ce qui constituera
                        une étape essentielle vers des immunothérapies plus
                        efficaces et plus durables.
                    </p>
                </div>
                <div
                    class="w-1/2 flex flex-col relative h-full 2xl:h-[60rem] ml-5 lg:ml-[6%]"
                >
                    <p
                        class="text-xl font-Lato font-bold text-[#4D54D6] underline uppercase"
                    >
                        L’exemple des CAR-T cells
                    </p>
                    <p
                        class="text-[#505050] font-Lato text-sm 2xl:text-xl mt-10"
                    >
                        CellAction est une structure intégrée de l’Institut
                        Curie, inédite en France, qui permet de développer des
                        médicaments innovants, à l’instar des CAR-T cells. <br
                        />
                        Celles-ci sont des cellules immunitaires du patient modifiées
                        en laboratoire pour reconnaître et détruire les cellules
                        tumorales.
                        <br /> <br />
                        Celles-ci ont permis d’obtenir
                        <span class="font-bold"
                            >des résultats sans précédent, notamment dans
                            certains cancers du sang.</span
                        >
                        Malheureusement, chez certains patients, la maladie réapparaît
                        et chez d’autres, les cellules modifiées perdent progressivement
                        leur efficacité.
                        <br /> <br />
                        À l’Institut Curie,
                        <span class="font-bold"
                            >les chercheurs travaillent donc à une nouvelle
                            génération de CAR-T cells, capables de renforcer
                            leur persistance, de prévenir leur épuisement et
                            d’ajuster leurs cibles pour contrer les stratégies
                            d’échappement des cellules tumorales.</span
                        >
                    </p>
                    <div
                        class="text-center bg-white font-Raleway font-bold py-3 xl:py-5 mt-5 xl:mt-6 2xl:mt-10"
                    >
                        <p class="text-2xl px-5 text-[#4D54D6]">
                            BESOIN DE FINANCEMENT POUR L’ANALYSE «&nbsp;Single Cell&nbsp;», un laboratoire de CellAction<br />
                            <span class="underline">292 000 €</span>
                        </p>
                    </div>
                </div>
            </div>
        {/if}

        <div class="flex items-center mx-auto gap-4">
            <button
                on:click={() => selectProject(0)}
                class="w-5 h-5 {$projectIndexStore === 0
                    ? 'bg-[#FF6600]'
                    : 'bg-white'} border-[3px] border-[#FF6600] rounded-full transition-all"
            />
            <button
                on:click={() => selectProject(1)}
                class="w-5 h-5 {$projectIndexStore === 1
                    ? 'bg-[#FF6600]'
                    : 'bg-white'} border-[3px] border-[#FF6600] rounded-full transition-all"
            />
            <button
                on:click={() => selectProject(2)}
                class="w-5 h-5 {$projectIndexStore === 2
                    ? 'bg-[#FF6600]'
                    : 'bg-white'} border-[3px] border-[#FF6600] rounded-full transition-all"
            />
        </div>
    </div>
</div>

<style lang="postcss">
    .tab {
        @apply font-Raleway flex-1 rounded-t-2xl text-lg px-4 h-[96px] flex-grow py-2.5 font-bold lg:text-xl !leading-[1.15] data-[selected=true]:bg-[#4D54D6] data-[selected=true]:text-white text-[#4D54D6] transition-colors bg-white hover:bg-[#4D54D6]/20;
    }

    .underline {
        text-decoration-line: underline;
        text-decoration-color: #ff6600;
        text-decoration-thickness: 3px;
        text-underline-offset: 5px;
    }
</style>
