<template>
    <view v-for="group in list" :key="group.group_title">
        <view class="font-bold text-main py-2 px-4">{{ group.group_title }}</view>
        <view class="grid grid-cols-2 p-4 gap-4">
            <navigator
                class="flex justify-center items-center h-10 text-sm rounded-md text-white bg-primary/60"
                :url="item.url"
                open-type="navigate"
                hover-class="navigator-hover"
                v-for="item in group.children"
                :key="item.url"
            >
                {{ item.title }}
            </navigator>
        </view>
    </view>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const list = ref([
    {
        group_title: "unocss 原子化",
        children: [
            {
                title: "颜色",
                url: "./children/colors"
            },
            {
                title: "按钮",
                url: "./children/buttons"
            },
            {
                title: "标签",
                url: "./children/label"
            }
        ]
    },
    {
        group_title: "第三方组件",
        children: [
            {
                title: "z-paging 分页",
                url: "./children/z-paging"
            },
            {
                title: "dayjs 时间工具",
                url: "./children/dayjs"
            }
        ]
    }
]);
</script>
