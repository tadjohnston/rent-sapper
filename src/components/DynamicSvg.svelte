<script>
  import IntersectionObserver from '../components/IntersectionObserver.svelte'

  export let name
  export let className = ''

  const cmp = {
    logo: async () => import('../assets/svgs/logo.svg'),
    equalOpportunity: async () => import('../assets/svgs/equalOpportunity.svg')
  }

</script>

<IntersectionObserver once={true} let:intersecting={intersecting}>
  {#if intersecting}
    {#await cmp[name]() then module}
      <svelte:component this="{module.default}" class={className}/>
    {:catch err}
      <strong>Ops! Something went wrong: {err}</strong>
    {/await}
  {/if}
</IntersectionObserver>
