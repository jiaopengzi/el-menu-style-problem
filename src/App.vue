<!--
 * FilePath    : test-menu\src\App.vue
 * Description : 父组件
-->
<template>
    <el-menu ellipsis class="el-menu-popper-demo" mode="horizontal" :popper-offset="16" style="max-width: 300px">
        <Child v-for="(item, key) in testMenuItemMap" :key="key" :menu-item-map="menuItemMap" :menu-item="item" />
    </el-menu>
</template>

<script lang="ts" setup>
import { computed, reactive } from "vue"

import Child from "./child.vue"
import { testMenuItemMap } from "./utils"

defineOptions({ name: "HeaderNav" })

</script>
