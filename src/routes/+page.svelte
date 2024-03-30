<script>
    import HeroSection from "$lib/components/HeroSection.svelte";
    import GraphPart from "$lib/components/GraphPart.svelte";
    import DoubleCtaPart from "$lib/components/DoubleCtaPart.svelte";
    import Projects from "$lib/components/Projects.svelte";
    import ProjectsMobile from "$lib/components/ProjectsMobile.svelte";
</script>

<HeroSection/>
<GraphPart/>
<!--done in mobile-->
<div class="hidden md:block">
    <Projects/>
</div>
<div class="md:hidden flex items-center justify-center">
    <ProjectsMobile/>
</div>


<!--done in mobile-->
<DoubleCtaPart/>
