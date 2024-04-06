<script>
    import HeroSection from "$lib/components/HeroSection.svelte";
    import GraphPart from "$lib/components/GraphPart.svelte";
    import DoubleCtaPart from "$lib/components/DoubleCtaPart.svelte";
    import Projects from "$lib/components/Projects.svelte";
    import ProjectsMobile from "$lib/components/ProjectsMobile.svelte";
    import TestTimeline from "$lib/components/TestTimeline.svelte";
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
