<script>
    import Footer from "$lib/components/Footer.svelte";
</script>

<div class="w-screen relative flex items-center justify-center">
    <div class="gray-polygone lg:h-[45rem] xl:h-[60rem] bg-[#707070] bg-opacity-10 absolute top-0"/>
    <div class="absolute top-20 xl:top-28 flex flex-col items-center justify-center gap-5">
        <p class="font-Raleway font-black text-2xl xl:text-4xl text-[#505050]">
            J’INVESTIS DANS L’INNOVATION !
        </p>
        <p class="text-xl 2xl:text-3xl font-Raleway font-semibold text-center text-[#505050]">
            Mon don ouvrira de nouvelles perspectives de guérison pour les patients<br/>
            en finançant des projets comme celui-ci.
        </p>
        <div class="flex flex-row items-center justify-center gap-10">
            <button class="bg-[#FF6600] text-white text-center px-10 xl:px-20 py-3 font-Raleway font-bold">
                JE FAIS UN DON<br/>
                Déductible de<br/>
                <strong>l’IFI</strong>
            </button>
            <button class="bg-[#4D54D6] text-white text-center px-10 xl:px-20 py-3 font-Raleway font-bold">
                JE FAIS UN DON<br/>
                Déductible de<br/>
                <strong>L’impôt sur le revenu</strong>
            </button>
        </div>
    </div>
    <div class="py-6 flex flex-col justify-center sm:py-12 absolute top-[22rem] xl:top-[30rem]">
        <p class="font-Raleway font-black text-[#FF6600] text-2xl xl:text-4xl uppercase">
            CALENDRIER de déclaration FISCAL <span class="font-Lato">2024</span>
        </p>
        <div class="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0 mt-20">
            <div class="relative text-gray-700 antialiased text-sm font-semibold">
                <div class="hidden sm:block w-1 bg-[#FF6600] absolute h-[35rem] -mt-10 rounded-2xl left-1/2 transform -translate-x-1/2"></div>
                <div class="mt-6 sm:mt-0 sm:mb-12">
                    <div class="flex flex-col sm:flex-row items-center">
                        <div class="flex justify-start w-screen mx-auto items-center">
                            <div class="w-[25rem] absolute -left-36">
                                <div class="p-4 bg-white rounded-2xl" style="box-shadow: 0px 6px 40px rgba(0, 0, 0, 0.16);">
                                    <p class="text-2xl xl:text-4xl font-bold font-Raleway text-[#505050] text-center">
                                        22 Mai
                                    </p>
                                    <p class="text-3xl font-Raleway text-center font-light">
                                        Date limite en papier
                                    </p>
                                </div>
                            </div>
                            <div class="absolute h-1 rounded-3xl bg-[#FF6600] w-10 left-60"></div>
                        </div>
                        <div class="rotate-45 bg-[#FF6600] border-white border-[2px] w-4 h-4 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        </div>
                    </div>
                </div>

                <div class="mt-6 sm:mt-40 sm:mb-12">
                    <div class="flex flex-col sm:flex-row items-center">
                        <div class="flex justify-end w-screen mx-auto items-center">
                            <div class="w-[25rem] absolute -right-36 text-center">
                                <div class="p-4 bg-white rounded-2xl" style="box-shadow: 0px 6px 40px rgba(0, 0, 0, 0.16);">
                                    <p class="text-2xl xl:text-4xl font-bold font-Raleway text-[#505050] ">
                                        23 Mai
                                    </p>
                                    <p class="text-xl xl:text-3xl font-Raleway text-[#505050] font-light">
                                        Date limite en ligne<br/>
                                        Zone 1
                                    </p>
                                    <p class="text-[#FF6600] text-2xl font-Raleway">
                                        (départements 1 à 19,<br/>
                                        Monaco et non-résidents)
                                    </p>
                                </div>
                            </div>
                            <div class="absolute h-1 rounded-3xl bg-[#FF6600] w-10 right-60"></div>
                        </div>
                        <div class="rotate-45 bg-[#FF6600] border-white border-[2px] w-4 h-4 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        </div>
                    </div>
                </div>

                <div class="mt-6 sm:mt-40 sm:mb-12">
                    <div class="flex flex-col sm:flex-row items-center">
                        <div class="flex justify-start w-screen mx-auto items-center">
                            <div class="w-[25rem] absolute -left-36 text-center">
                                <div class="p-4 bg-white rounded-2xl" style="box-shadow: 0px 6px 40px rgba(0, 0, 0, 0.16);">
                                    <p class="text-2xl xl:text-4xl font-bold font-Raleway text-[#505050] ">
                                        30 Mai
                                    </p>
                                    <p class="text-xl xl:text-3xl font-Raleway text-[#505050] font-light">
                                        Date limite en ligne<br/>
                                        Zone 2
                                    </p>
                                    <p class="text-[#FF6600] text-2xl font-Raleway">
                                        (départements 20 à 59,<br/>
                                        y compris la Corse)
                                    </p>
                                </div>
                            </div>
                            <div class="absolute h-1 rounded-3xl bg-[#FF6600] w-10 left-60"></div>
                        </div>
                        <div class="rotate-45 bg-[#FF6600] border-white border-[2px] w-4 h-4 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        </div>
                    </div>
                </div>

                <div class="mt-6 sm:mt-40 sm:mb-12">
                    <div class="flex flex-col sm:flex-row items-center">
                        <div class="flex justify-end w-screen mx-auto items-center">
                            <div class="w-[25rem] absolute -right-36 text-center">
                                <div class="p-4 bg-white rounded-2xl" style="box-shadow: 0px 6px 40px rgba(0, 0, 0, 0.16);">
                                    <p class="text-2xl xl:text-4xl font-bold font-Raleway text-[#505050] ">
                                        6 juin
                                    </p>
                                    <p class="text-xl xl:text-3xl font-Raleway text-[#505050] font-light">
                                        Date limite en ligne<br/>
                                        Zone 3
                                    </p>
                                    <p class="text-[#FF6600] text-2xl font-Raleway">
                                        (départements 55 à 976)
                                    </p>
                                </div>
                            </div>
                            <div class="absolute h-1 rounded-3xl bg-[#FF6600] w-10 right-60"></div>
                        </div>
                        <div class="rotate-45 bg-[#FF6600] border-white border-[2px] w-4 h-4 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="absolute top-[70rem] xl:top-[80rem] flex flex-col items-center justify-center">
        <div class=" rounded-2xl flex flex-row gap-4 xl:gap-8 2xl:gap-14 items-center justify-center p-6 2xl:px-8 2xl:py-8" style="box-shadow: 0px 6px 40px rgba(0, 0, 0, 0.16);">
            <img src="/signature-desktop.png" alt="pic of the chieffe" class="mr-10 w-60 2xl:w-[310px]"/>
            <div class="flex flex-col gap-3">
                <p class="uppercase font-Raleway font-black text-3xl 2xl:text-4xl text-[#505050]">
                    Contact
                </p>
                <p class="font-Lato  text-2xl text-[#505050]">
                    <b>Héloïse Desazars de Montgailhard</b> se tient à votre<br/>
                    disposition pour vous donner toutes les informations<br/>
                    nécessaires. N’hésitez pas à la contacter.
                </p>
                <div class="flex flex-row items-center gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25.978" height="25.97" viewBox="0 0 25.978 25.97">
                        <g id="noun-phone-6627703" transform="translate(0 0)">
                            <g id="Group_629" data-name="Group 629" transform="translate(0 0)">
                                <g id="Group_628" data-name="Group 628" transform="translate(0 0)">
                                    <path id="Path_580" data-name="Path 580" d="M339.369,148.345a5.271,5.271,0,0,0-1.279,5.381l0,.009A31.3,31.3,0,0,0,355.9,171.53l.008,0a5.265,5.265,0,0,0,5.371-1.275c.7-.689,1.453-1.443,2.009-2a1.756,1.756,0,0,0,0-2.485l-4.2-4.2a1.756,1.756,0,0,0-2.485,0l-2.042,2.041a.585.585,0,0,1-.7.1,26.9,26.9,0,0,1-4.389-3.553,26.609,26.609,0,0,1-3.543-4.379.583.583,0,0,1,.09-.706l0,0c.571-.576,1.414-1.419,2.037-2.043a1.756,1.756,0,0,0,0-2.485l-4.2-4.2a1.756,1.756,0,0,0-2.485,0Zm.828.828,2-2a.585.585,0,0,1,.828,0l4.2,4.2a.585.585,0,0,1,0,.828c-.625.624-1.469,1.469-2.041,2.046a1.753,1.753,0,0,0-.264,2.137l.009.015a27.763,27.763,0,0,0,3.71,4.588,28.115,28.115,0,0,0,4.585,3.712l.016.01a1.757,1.757,0,0,0,2.144-.267l2.041-2.041a.585.585,0,0,1,.828,0l4.2,4.2a.586.586,0,0,1,0,.828h0c-.554.554-1.306,1.306-2,1.994l0,0a4.093,4.093,0,0,1-4.174.993A30.134,30.134,0,0,1,339.2,153.354,4.1,4.1,0,0,1,340.2,149.173Z" transform="translate(-337.824 -145.828)" fill="#4d54d6" fill-rule="evenodd"/>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <a href="tel:01 56 24 55 66" class="font-Lato text-xl">01 56 24 55 66</a>
                </div>

                <div class="flex flex-row items-center gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26.368" height="29.872" viewBox="0 0 26.368 29.872">
                        <g id="noun-email-6669148" transform="translate(0 0)">
                            <path id="Path_581" data-name="Path 581" d="M31.217,14.63h1.671l-1.671-1.615Zm-6.569.64a.706.706,0,1,0,1.411,0,4.135,4.135,0,1,0-2.587,3.846L23.5,19.1a4.166,4.166,0,0,0,1.346-.9.637.637,0,0,1,.9.9,5.431,5.431,0,0,1-1.761,1.179l-.032.012a5.42,5.42,0,1,1,3.382-5.022,1.983,1.983,0,0,1-3.191,1.575,2.733,2.733,0,1,1-4.166-3.506l.039-.035a2.735,2.735,0,0,1,4.629,1.969Zm-1.7-1.031a1.464,1.464,0,0,0-2.035-.025l-.025.026a1.456,1.456,0,1,0,2.484,1.054V15.27a1.459,1.459,0,0,0-.424-1.031Zm8.273-2.995,3.665,3.541.006.006a.64.64,0,0,1,.185.656V30.566a2.547,2.547,0,0,1-.75,1.806l-.039.036a2.546,2.546,0,0,1-1.767.714H11.311a2.547,2.547,0,0,1-1.806-.75l-.03-.032a.576.576,0,0,1-.046-.05l-.006-.007a2.544,2.544,0,0,1-.666-1.716V15.448a.641.641,0,0,1,.185-.656l.006-.006,3.665-3.541V8.411a2.544,2.544,0,0,1,.715-1.767l.035-.039a2.548,2.548,0,0,1,1.806-.75h3.021L20.18,3.934a2.547,2.547,0,0,1,3.509.034l1.953,1.888h3.022a2.56,2.56,0,0,1,2.555,2.555v2.834ZM12.61,13.016l-1.671,1.615H12.61Zm0,2.892h-1.8l1.8,2Zm1.278,3.418,3.526,3.909h9l3.527-3.909V8.409A1.282,1.282,0,0,0,28.66,7.132h-13.5a1.269,1.269,0,0,0-.9.376l-.026.025a1.271,1.271,0,0,0-.348.877Zm17.328-1.417,1.8-2h-1.8Zm-3.664,5.967,6.224,6.9a1.3,1.3,0,0,0,.017-.21V16.957l-6.24,6.919Zm-17.52-6.918V30.565a1.3,1.3,0,0,0,.017.21l6.224-6.9-6.24-6.918Zm9.987-11.1h3.787l-1-.97a1.288,1.288,0,0,0-1.753-.027Zm12.932,25.91L26.41,24.514h-9l-6.54,7.251a1.258,1.258,0,0,0,.435.076H32.515a1.263,1.263,0,0,0,.435-.076Z" transform="translate(-8.731 -3.25)" fill="#4d54d6"/>
                        </g>
                    </svg>
                    <a href="mailto:soutenir.curie@curie.fr" class="font-Lato text-xl">soutenir.curie@curie.fr</a>
                </div>

            </div>
        </div>
        <p class=" mt-10 2xl:mt-20 font-Raleway font-black text-2xl 2xl:text-4xl text-[#505050] text-center">
            INFOS PRATIQUES
        </p>
        <div class="flex flex-row items-center justify-center gap-20  mt-10 2xl:mt-20">
            <div class="flex flex-col items-center justify-center gap-2">
                <svg id="Group_450" data-name="Group 450" xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 2xl:w-40 2xl:h-40" viewBox="0 0 138 138">
                    <circle id="Ellipse_22" data-name="Ellipse 22" cx="69" cy="69" r="69" fill="#9b999b"/>
                    <g id="Group_417" data-name="Group 417" transform="translate(13.275 14.284)">
                        <circle id="Ellipse_10" data-name="Ellipse 10" cx="56.648" cy="56.648" r="56.648" transform="translate(0 0)" fill="#505050"/>
                        <g id="Group_416" data-name="Group 416" transform="translate(32.432 26.811)">
                            <path id="Path_312" data-name="Path 312" d="M958.478,228H915.655a2.8,2.8,0,0,0-2.8,2.8v54.068a2.8,2.8,0,0,0,2.8,2.8h29.484l16.144-16.144V230.8A2.8,2.8,0,0,0,958.478,228Z" transform="translate(-912.85 -228)" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                            <path id="Path_313" data-name="Path 313" d="M935.034,274.052l16.144-16.144H937.838a2.8,2.8,0,0,0-2.8,2.8Z" transform="translate(-902.746 -214.378)" fill="#f60" stroke="#f60" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                        </g>
                    </g>
                    <g id="Group_446" data-name="Group 446" transform="translate(53.621 47.383)">
                        <text id="_" data-name="€" transform="translate(14 34)" fill="#f60" font-size="36" font-family="Raleway-Bold, Raleway" font-weight="700"><tspan x="-14.367" y="0">€</tspan></text>
                    </g>
                </svg>
                <p class="text-xl 2xl:text-3xl font-Raleway font-bold text-[#505050] text-center">
                    Je consulte<br/>
                    le guide fiscal
                </p>
            </div>
            <a href="https://ifi.curie.fr/images/Curie_rib.pdf?_cchid=a200357f54bc77577d784c4e4414e50e " class="gap-2 flex flex-col items-center justify-center">
                <svg id="Group_449" data-name="Group 449" xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 2xl:w-40 2xl:h-40" viewBox="0 0 134.832 134.832">
                    <circle id="Ellipse_23" data-name="Ellipse 23" cx="67.416" cy="67.416" r="67.416" fill="#9b999b"/>
                    <g id="Group_447" data-name="Group 447" transform="translate(12.075 12.075)">
                        <circle id="Ellipse_10" data-name="Ellipse 10" cx="55.342" cy="55.342" r="55.342" fill="#505050"/>
                        <g id="Group_416" data-name="Group 416" transform="translate(32.525 28.081)">
                            <path id="Path_312" data-name="Path 312" d="M957.425,228H915.59a2.739,2.739,0,0,0-2.74,2.739V283.56a2.739,2.739,0,0,0,2.74,2.739h28.8l15.772-15.772V230.739A2.739,2.739,0,0,0,957.425,228Z" transform="translate(-912.85 -228)" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                            <path id="Path_313" data-name="Path 313" d="M935.034,273.68l15.772-15.772H937.773a2.739,2.739,0,0,0-2.739,2.74Z" transform="translate(-903.49 -215.382)" fill="#f60" stroke="#f60" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                        </g>
                    </g>
                    <path id="Path_441" data-name="Path 441" d="M13.8,7.452c6.049-11.336,16.931-.889,13.433,6.373S13.8,29.924,13.8,29.924,4.51,22.418.371,13.825,7.075-3.681,13.8,7.452Z" transform="translate(54.596 52.585)" fill="#f60"/>
                </svg>
                <p class="text-xl 2xl:text-3xl font-Raleway font-bold text-[#505050] text-center">
                    Je télécharge le<br/>
                    bulletin de soutien IFI
                </p>
            </a>
            <div class="flex flex-col items-center justify-center gap-2">
                <svg id="Group_635" data-name="Group 635" xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 2xl:w-40 2xl:h-40" viewBox="0 0 138 138">
                    <g id="Group_581" data-name="Group 581">
                        <circle id="Ellipse_23" data-name="Ellipse 23" cx="69" cy="69" r="69" fill="#9b999b"/>
                        <g id="Group_447" data-name="Group 447" transform="translate(12.358 12.359)">
                            <ellipse id="Ellipse_10" data-name="Ellipse 10" cx="56.642" cy="56.642" rx="56.642" ry="56.642" fill="#505050"/>
                            <g id="Group_416" data-name="Group 416" transform="translate(33.289 28.74)">
                                <path id="Path_312" data-name="Path 312" d="M958.473,228H915.654a2.8,2.8,0,0,0-2.8,2.8v54.062a2.8,2.8,0,0,0,2.8,2.8h29.481l16.142-16.142V230.8A2.8,2.8,0,0,0,958.473,228Z" transform="translate(-912.85 -228)" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                <path id="Path_313" data-name="Path 313" d="M935.034,274.05l16.143-16.142H937.837a2.8,2.8,0,0,0-2.8,2.8Z" transform="translate(-902.749 -214.383)" fill="#f60" stroke="#f60" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                            </g>
                        </g>
                        <g id="Rectangle_528" data-name="Rectangle 528" transform="translate(49.136 48.634)" fill="#fff" stroke="#f60" stroke-width="1">
                            <rect width="41.818" height="8.364" rx="1" stroke="none"/>
                            <rect x="0.5" y="0.5" width="40.818" height="7.364" rx="0.5" fill="none"/>
                        </g>
                        <g id="Rectangle_531" data-name="Rectangle 531" transform="translate(49.136 72.679)" fill="#fff" stroke="#f60" stroke-width="1">
                            <rect width="41.818" height="8.364" rx="1" stroke="none"/>
                            <rect x="0.5" y="0.5" width="40.818" height="7.364" rx="0.5" fill="none"/>
                        </g>
                        <g id="Rectangle_532" data-name="Rectangle 532" transform="translate(49.136 85.225)" fill="#fff" stroke="#f60" stroke-width="1">
                            <rect width="18.818" height="8.364" rx="1" stroke="none"/>
                            <rect x="0.5" y="0.5" width="17.818" height="7.364" rx="0.5" fill="none"/>
                        </g>
                        <g id="Rectangle_529" data-name="Rectangle 529" transform="translate(49.136 61.179)" fill="#fff" stroke="#f60" stroke-width="1">
                            <rect width="18.818" height="8.364" rx="1" stroke="none"/>
                            <rect x="0.5" y="0.5" width="17.818" height="7.364" rx="0.5" fill="none"/>
                        </g>
                        <g id="Rectangle_530" data-name="Rectangle 530" transform="translate(72.136 61.179)" fill="#fff" stroke="#f60" stroke-width="1">
                            <rect width="18.818" height="8.364" rx="1" stroke="none"/>
                            <rect x="0.5" y="0.5" width="17.818" height="7.364" rx="0.5" fill="none"/>
                        </g>
                    </g>
                </svg>
                <p class="text-xl 2xl:text-3xl font-Raleway font-bold text-[#505050] text-center">
                    Je télécharge le RIB<br/>
                    pour faire un virement
                </p>
            </div>
            <div class="flex flex-col items-center justify-center gap-2">
                <svg id="Group_636" data-name="Group 636" xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 2xl:w-40 2xl:h-40" viewBox="0 0 138 138">
                    <circle id="Ellipse_24" data-name="Ellipse 24" cx="69" cy="69" r="69" fill="#9b999b"/>
                    <g id="Group_451" data-name="Group 451" transform="translate(11.719 11.784)">
                        <ellipse id="Ellipse_10" data-name="Ellipse 10" cx="57.218" cy="57.218" rx="57.218" ry="57.218" fill="#505050"/>
                        <g id="Group_416" data-name="Group 416" transform="translate(33.628 29.033)">
                            <path id="Path_312" data-name="Path 312" d="M958.937,228H915.683a2.832,2.832,0,0,0-2.833,2.831v54.612a2.832,2.832,0,0,0,2.833,2.831h29.78l16.307-16.307V230.831A2.832,2.832,0,0,0,958.937,228Z" transform="translate(-912.85 -228)" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                            <path id="Path_313" data-name="Path 313" d="M935.034,274.215l16.307-16.307H937.866a2.832,2.832,0,0,0-2.832,2.833Z" transform="translate(-902.421 -213.94)" fill="#f60" stroke="#f60" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                        </g>
                    </g>
                    <rect id="Rectangle_482" data-name="Rectangle 482" width="7.855" height="29.455" transform="translate(53.648 50.098)" fill="#f60"/>
                    <rect id="Rectangle_483" data-name="Rectangle 483" width="7.855" height="17.673" transform="translate(66.043 62.239)" fill="#ffb584"/>
                    <rect id="Rectangle_484" data-name="Rectangle 484" width="7.855" height="25.528" transform="translate(78.438 54.154)" fill="#f60"/>
                </svg>
                <p class="text-xl 2xl:text-3xl font-Raleway font-bold text-[#505050] text-center">
                    Je consulte<br/>
                    le rapport annuel
                </p>
            </div>
        </div>
        <div class="mt-20 bg-[url('/footer-img-desktop.png')] bg-cover bg-no-repeat w-screen h-[30rem] flex flex-row items-center justify-center">
            <div class="flex flex-col font-Raleway text-white items-center justify-center text-center w-1/3">
                <p class="text-white text-7xl font-black">
                    88<br/>
                </p>
                <p class="text-xl 2xl:text-3xl font-extrabold">
                    équipes de recherche<br/> mobilisées contre le cancer
                </p>
            </div>
            <div class="flex flex-col font-Raleway text-white items-center justify-center text-center w-1/3">
                <p class="text-white text-7xl font-black">
                    1<sup>er</sup><br/>
                </p>
                <p class="text-xl 2xl:text-3xl font-extrabold">
                    centre en France de lutte<br/>
                    contre le cancer en nombre<br/>
                    de patients traités
                </p>
            </div>
            <div class="flex flex-col font-Raleway text-white items-center justify-center text-center w-1/3">
                <p class="text-white text-7xl font-black">
                    55 000<br/>
                </p>
                <p class="text-xl 2xl:text-3xl font-extrabold">
                    patients traités
                    <br/> par an
                </p>
            </div>
        </div>
    <Footer/>
    </div>
</div>


<style>
    .gray-polygone {
        width: 100%;
        clip-path: polygon(0 13%, 100% 0, 100% 41%, 0 56%);
    }
</style>
