<template>
  <div class="layout">
    <router-view />
  </div>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator';
@Component({
  name: 'Layout',
})
export default class extends Vue {
}
</script>
