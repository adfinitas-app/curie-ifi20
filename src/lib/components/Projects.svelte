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
            <div class="flex flex-row items-center justify-center w-full xl:mt-5 px-5 xl:px-10 gap-5">
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
        content: "•"; /* Caractère de puce */
        color: #4D54D6; /* Couleur de la puce */
        font-size: 2rem; /* Taille de la puce */
        display: inline-block; /* Nécessaire pour ajouter une marge à droite */
        width: 1rem; /* Largeur de l'espace pour la puce */
         /* Espace entre la puce et le texte */
        margin-right: 1rem;
    }


    .underline {
        text-decoration-line: underline;
        text-decoration-color: #FF6600;
        text-decoration-thickness: 3px; /* Ajustez cette valeur pour changer l'épaisseur de la ligne de soulignement */
        text-underline-offset: 5px; /* Ajustez cette valeur pour changer la position de la ligne de soulignement */
    }
</style>
