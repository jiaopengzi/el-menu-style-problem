<!--
 * FilePath    : test-menu\src\child.vue
 * Description : 子组件
-->

<template>
    <!-- 子组件注释 -->
    <el-menu-item :index="menuItem.index">
        <template #title>
            <span>{{ menuItem.text }}</span>
        </template>
    </el-menu-item>
</template>

<script lang="ts" setup>
import type { MenuItem, MenuItemMap } from "./types"

defineOptions({ name: "ChildMenuItem" })

// 定义组件属性（props）
const { menuItem } = defineProps<{
    menuItemMap: MenuItemMap<string>
    menuItem: MenuItem
}>()
</script>
