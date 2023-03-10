<script setup>
import { Comp1 } from '../dist/lib/lib.js'; // Component 2 included
// import Comp1 from '../dist/lib/Comp1.js' // Component 2 not included
</script>

<template>
  <div>
    Component 2 should not be part of final bundle when using named imports
    <br>
    <Comp1 />
  </div>
</template>
