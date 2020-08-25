<script>
 import Logo from '../assets/svgs/logo.svg'

	// export let segment;
</script>

<div class="bg-brand-primary px-40">
	<header class="max-w-content mx-auto py-20 text-white flex justify-between items-center">
		<Logo height="24px" />
		<nav class="flex items-center justify-between w-full" style="max-width: 590px">
			<a href="/saved" class="text-white hover:text-white px-8">
				Saved Properties
				<span class="bg-yellow rounded-pill text-brand-primary px-5 ml-4 py-1 text-legal100">1</span>
			</a>
			<a href="/blog/moving-center" class="text-white hover:text-white px-8">Moving Center</a>
			<a href="/list" class="text-white hover:text-white px-8">List a Property</a>
			<a href="/blog" class="text-white hover:text-white px-8">Blog</a>
			<button class="text-white hover:text-white px-20 py-8 border border-white rounded-pill">Sign In</button>
		</nav>
	</header>
</div>
<!-- <nav>
	<ul>
		<li><a aria-current='{segment === undefined ? "page" : undefined}' href='.'>home</a></li>
		<li><a aria-current='{segment === "about" ? "page" : undefined}' href='about'>about</a></li>
		<li><a rel=prefetch aria-current='{segment === "blog" ? "page" : undefined}' href='blog'>blog</a></li>
	</ul>
</nav>
-->
