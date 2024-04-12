<script>
    import HeroSection from "$lib/components/HeroSection.svelte";
    import GraphPart from "$lib/components/GraphPart.svelte";
    import DoubleCtaPart from "$lib/components/DoubleCtaPart.svelte";
    import Projects from "$lib/components/Projects.svelte";
    import ProjectsMobile from "$lib/components/ProjectsMobile.svelte";
    import { onMount } from "svelte";
    import {projectIndexStore} from "$lib/utils/utils.js";
    import {browser} from "$app/environment";

    let projectsMobileElement;
    let projectDesktopElement;

    onMount(() => {
        function updateProjectFromHash() {
            if (window.location.hash !== "#Calculator" && window.location.hash !== "#Intro") {
                const hash = window.location.hash.replace('#projet', '');
                if (hash) {
                    projectIndexStore.set(parseInt(hash) - 1);
                    if (browser && window.innerWidth < 768) {
                        navigateToProjectsMobile();
                    }
                    else if (browser) {
                        navigateToProjectsDesktop();
                    }
                }
            }
        }

        function navigateToProjectsMobile() {
            if (projectsMobileElement) {
                projectsMobileElement.scrollIntoView({ behavior: 'smooth' });
            }
        }

        function navigateToProjectsDesktop() {
            if (projectDesktopElement) {
                projectDesktopElement.scrollIntoView({ behavior: 'smooth' });
            }
        }

        window.addEventListener('hashchange', updateProjectFromHash);
        updateProjectFromHash();
        return () => window.removeEventListener('hashchange', updateProjectFromHash);
    });
</script>

<!--<HeroSection/>-->
<!--<GraphPart/>-->
<!--<div class="hidden md:block relative">-->
<!--    <div bind:this={projectDesktopElement} id="ProjectsDesktop" class="absolute -top-40  w-screen"/>-->
<!--    <Projects/>-->
<!--</div>-->
<!--<div class="md:hidden flex items-center justify-center" bind:this={projectsMobileElement}>-->
<!--    <ProjectsMobile/>-->
<!--</div>-->
<DoubleCtaPart/>

