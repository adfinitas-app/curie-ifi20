<script>
    import Footer from "$lib/components/Footer.svelte";
    import Timeline from "$lib/components/Timeline.svelte";
    import ContactCard from "$lib/components/ContactCard.svelte";
    import Infos from "$lib/components/Infos.svelte";
    import TestTimeline from "$lib/components/TestTimeline.svelte";
    import {passUtmParamsToLink} from "$lib/utils/links";
</script>

<div class="w-full relative flex items-center justify-center ">
    <div class="gray-polygone  h-[50rem] 2xl:h-[60rem] bg-[#707070] bg-opacity-10 absolute top-0"/>
    <div class="absolute top-20 xl:top-28 flex flex-col items-center justify-center">
        <p class="font-Raleway font-black lg:text-2xl 2xl:text-4xl text-[#505050]">
            J’INVESTIS DANS L’INNOVATION !
        </p>
        <p class="text-base lg:text-xl 2xl:text-3xl font-Raleway font-semibold text-center mt-3 2xl:mt-5 text-[#505050]">
            Mon don ouvrira de nouvelles perspectives de guérison pour les patients<br/>
            en finançant des projets comme ceux-ci.
        </p>
        <div class="flex flex-col md:flex-row items-center justify-center mt-3">    
            <a target="_blank" href={passUtmParamsToLink("https://aider.curie.fr/ifi")} class="uppercase bg-[#FF6600] text-white 2xl:mt-5 text-center w-[17rem] hover:scale-110 transition-all  py-3 font-Raleway font-bold ">
                JE FAIS UN DON<br/>
                Déductible de<br/>
                <strong>l’IFI</strong>
            </a>
            <a target="_blank" href={passUtmParamsToLink("https://aider.curie.fr/don149")} class="uppercase mt-3 2xl:mt-5 md:mt-0 md:ml-5 2xl:ml-20 bg-[#4D54D6] text-white text-center w-[17rem] hover:scale-110 transition-all  py-3 font-Raleway font-bold ">
                JE FAIS UN DON<br/>
                Déductible de<br/>
                <strong>L’impôt sur le revenu</strong>
            </a>
        </div>
    </div>
    <Timeline/>
    <TestTimeline/>
    <div class="absolute  top-[60rem] md:top-[50rem] 2xl:top-[55rem] flex flex-col items-center justify-center">
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

    @media (min-width: 768px) {
        .gray-polygone {
            clip-path: polygon(0 13%, 100% 0, 100% 41%, 0 56%);
        }
    }
    @media (max-width: 768px) {
        .gray-polygone {
            clip-path: polygon(0 7%, 100% 0, 100% 54%, 0 63%);
        }
    }

</style>

