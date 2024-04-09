<script>
    import HeroSection from "$lib/components/HeroSection.svelte";
    import GraphPart from "$lib/components/GraphPart.svelte";
    import DoubleCtaPart from "$lib/components/DoubleCtaPart.svelte";
    import Projects from "$lib/components/Projects.svelte";
    import ProjectsMobile from "$lib/components/ProjectsMobile.svelte";
    import { onMount } from "svelte";
    import {projectIndexStore} from "$lib/utils/utils.js";

    onMount(() => {
        function updateProjectFromHash() {
            const hash = window.location.hash.replace('#projet', '');
            if (hash) {
                projectIndexStore.set(parseInt(hash) - 1);
            }
        }

        window.addEventListener('hashchange', updateProjectFromHash);
        updateProjectFromHash();
        return () => window.removeEventListener('hashchange', updateProjectFromHash);
    });
</script>

<HeroSection/>
<GraphPart/>
<div class="hidden md:block">
    <Projects/>
</div>
<div class="md:hidden flex items-center justify-center">
    <ProjectsMobile/>
</div>
<DoubleCtaPart/>
