<template>
  <form action="/f/123" method="POST">
    <button>submit</button>
  </form>
</template>

<script setup lang="ts">
import { readMultipartFormData, getMethod } from "h3";
const { data, error } = await useFetch("/api/products");
const event = useRequestEvent();

console.log(getMethod(event));

console.log(data.value);
</script>
