<script>
    import Footer from "$lib/components/Footer.svelte";
    import Timeline from "$lib/components/Timeline.svelte";
    import ContactCard from "$lib/components/ContactCard.svelte";
    import Infos from "$lib/components/Infos.svelte";
    import TestTimeline from "$lib/components/TestTimeline.svelte";
</script>

<div class="w-screen relative flex items-center justify-center ">
    <div class="gray-polygone  h-[50rem] 2xl:h-[60rem] bg-[#707070] bg-opacity-10 absolute top-0"/>
    <div class="absolute top-20 xl:top-28 flex flex-col items-center justify-center gap-3 2xl:gap-5">
        <p class="font-Raleway font-black lg:text-2xl 2xl:text-4xl text-[#505050]">
            J’INVESTIS DANS L’INNOVATION !
        </p>
        <p class="text-base lg:text-xl 2xl:text-3xl font-Raleway font-semibold text-center text-[#505050]">
            Mon don ouvrira de nouvelles perspectives de guérison pour les patients<br/>
            en finançant des projets comme celui-ci.
        </p>
        <div class="flex flex-col md:flex-row items-center justify-center gap-5 2xl:gap-20">
            <a href="https://aider.curie.fr/ifi" class="uppercase bg-[#FF6600] text-white text-center w-[17rem] hover:scale-110 transition-all  py-3 font-Raleway font-bold ">
                JE FAIS UN DON<br/>
                Déductible de<br/>
                <strong>l’IFI</strong>
            </a>
            <a href="https://aider.curie.fr/don149" class="uppercase bg-[#4D54D6] text-white text-center w-[17rem] hover:scale-110 transition-all  py-3 font-Raleway font-bold ">
                JE FAIS UN DON<br/>
                Déductible de<br/>
                <strong>L’impôt sur le revenu</strong>
            </a>
        </div>
    </div>
<!--    <Timeline/>-->
    <TestTimeline/>
    <div class="absolute top-[75rem] 2xl:top-[80rem] flex flex-col items-center justify-center">
        <ContactCard/>
        <Infos/>
        <Footer/>
    </div>
</div>


<style>
    .gray-polygone {
        width: 100%;
        clip-path: polygon(0 7%, 100% 0, 100% 54%, 0 63%);
    }

    /*!* Exemple de requête média pour écrans de plus de 768px de large *!*/
    @media (min-width: 768px) {
        .gray-polygone {
            clip-path: polygon(0 13%, 100% 0, 100% 41%, 0 56%);
        }
    }

    /* Exemple de requête média pour écrans de moins de 768px de large */
    @media (max-width: 768px) {
        .gray-polygone {
            clip-path: polygon(0 7%, 100% 0, 100% 54%, 0 63%);
        }
    }
</style>

