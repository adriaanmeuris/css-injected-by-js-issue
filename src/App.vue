<script setup>
// Source include
// import { Comp1 } from './components/components.js'; // Component 2 CSS included
// import Comp1 from './components/Comp1.vue'; // Component 2 CSS not included

// Dist include
import { Comp1 } from '../dist/lib/lib.js'; // Component 2 included
// import Comp1 from '../dist/lib/Comp1.js' // Component 2 not included
</script>

<template>
  <div>
    Component 2 styles should not be part of final bundle
    <br>
    <Comp1 />
  </div>
</template>
