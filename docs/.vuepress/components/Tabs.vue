<template>
	<div class="tab-container">
		<slot />
	</div>
</template>

<script>
	export default {
		props: {
			id: { default: "tab" }
		}
	};
</script>
