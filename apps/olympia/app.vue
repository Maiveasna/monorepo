<script lang="ts" setup>
const noLogs = () => {
  console.warn('NOTHING');
};
</script>
<template>
  <div>
    <!--<MonorepoContainer>-->
      <NuxtPage />
      <MonorepoButton label="Monorepo Button" primary />
    <!--</MonorepoContainer>-->
  </div>
</template>

