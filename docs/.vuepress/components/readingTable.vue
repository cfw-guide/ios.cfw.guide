<template>
  <p>Different firmware versions will require different steps to jailbreak your {{ deviceOS }} device. This page will help you find where to start.</p>
  <p>Select the appropriate page for your version from the chart below. Note that the "from" and "to" fields are inclusive. This means that, for example, the "from {{ minVer }} to {{ maxVer }}" row includes version {{ minVer }}, version {{ maxVer }}, and all versions in-between.</p>
  <p>Your device version can be found in the Settings application in <code>General</code> -> <code>About</code>.</p>
</template>

<script setup lang="ts">
  const props = defineProps({
    minVer: {
      type: String,
      default: '-1',
    },
    maxVer: {
      type: String,
      default: '-1',
    },
    deviceOS: {
      type: String,
      default: 'iOS'
    },
  })
</script>