
<section class="md:flex flex-col items-center justify-center w-screen absolute top-[25rem] 2xl:top-[30rem] hidden py-12">
    <p class="font-Raleway font-black text-[#FF6600] lg:text-2xl 2xl:text-4xl uppercase">
        CALENDRIER de déclaration FISCAL <span class="font-Lato">2024</span>
    </p>
    <div class="timeline mt-20">
        <div class="timeline-empty">
        </div>
        <div class="timeline-middle">
            <div class="timeline-square left-0 right-0 mx-auto"></div>
        </div>
        <div class="timeline-component timeline-content mx-20 relative flex flex-col items-center justify-center px-8 py-4 text-center">
            <div class="absolute top-1/4 -left-20 rounded-2xl w-[7rem] h-[0.2rem] bg-[#fc6601] "></div>
            <h3 class="font-Raleway text-[#505050] text-2xl font-bold">22 Mai</h3>
            <p class="text-xl font-Raleway">Date limite en papier</p>
        </div>
        <div class="timeline-component timeline-content mx-20 relative flex flex-col items-center justify-center px-8 py-4 text-center">
            <div class="absolute top-1/4 -right-20 rounded-2xl w-[7rem] h-[0.2rem] bg-[#fc6601] "></div>
            <h3 class="font-Raleway text-[#505050] text-2xl font-bold">23 Mai</h3>
            <p class="text-xl font-Raleway">Date limite en ligne<br/> Zone 1</p>
            <p class="text-[#FF6600] text-base">
                (départements 1 à 19,<br/>
                Monaco et non-résidents)
            </p>
        </div>
        <div class="timeline-middle">
            <div class="timeline-square left-0 right-0 mx-auto"></div>
        </div>
        <div class="timeline-empty">
        </div>

        <div class="timeline-empty">
        </div>

        <div class="timeline-middle">
            <div class="timeline-square left-0 right-0 mx-auto"></div>
        </div>
        <div class="timeline-component timeline-content mx-20 relative flex flex-col items-center justify-center px-8 py-4 text-center">
            <div class="absolute top-1/4 -left-20 rounded-2xl w-[7rem] h-[0.2rem] bg-[#fc6601] "></div>
            <h3 class="font-Raleway text-[#505050] text-2xl font-bold">30 Mai</h3>
            <p class="text-xl font-Raleway">Date limite en ligne<br/> Zone 2</p>
            <p class="text-[#FF6600] text-base">
                (départements 20 à 54,<br/>
                y compris la Corse)
            </p>
        </div>
        <div class="timeline-component timeline-content mx-20 relative flex flex-col items-center justify-center px-8 py-4 text-center">
            <div class="absolute top-1/4 -right-20 rounded-2xl w-[7rem] h-[0.2rem] bg-[#fc6601] "></div>
            <h3 class="font-Raleway text-[#505050] text-2xl font-bold">6 Juin</h3>
            <p class="text-xl font-Raleway">Date limite en ligne<br/> Zone 3</p>
            <p class="text-[#FF6600] text-base">
                (départements 55 à 976)
            </p>
        </div>
        <div class="timeline-middle">
            <div class="timeline-square left-0 right-0 mx-auto"></div>
        </div>
    </div>
</section>

<style>
    .timeline {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .timeline-content {
        background: white;
        box-shadow: 0px 6px 40px rgba(0, 0, 0, 0.16);
        color: black;
        border-radius: 6px;
    }


    .timeline {
        display: grid;
        grid-template-columns: 1fr 10px 1fr;
    }
    .timeline-middle {
        position: relative;
        background-color: #fc6601;
        width: 3px;
        height: 100%;
    }
    .timeline-square {
        position: absolute;
        top: 25%;
        width: 15px;
        height: 15px;
        rotate: 45deg;
        border: solid 0.1rem white;
        background-color: #fc6601;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
    }


</style>
