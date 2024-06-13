<script lang="ts" setup>


const noLogs = () => {
  console.warn('NOTHING');
};
</script>

<template>
  <div>
    <MonorepoContainer>
    <h1>Storybook</h1>
    <MonorepoButton disabled @submit="noLogs">Share Components</MonorepoButton>
    </MonorepoContainer>
  </div>
</template>

