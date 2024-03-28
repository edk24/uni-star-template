<template>
    <z-paging ref="pagingRef" v-model="dataList" @query="queryList">
        <!-- 浮动顶部 -->
        <template v-slot:top>
            <view class="grid grid-cols-2 text-center border-none py-2 border-b border-solid border-#eee">
                <view class="bg-white" @click="pagingRef.reload()">刷新</view>
                <view @click="pagingRef.complete(false)">无数据</view>
            </view>
        </template>

        <view v-for="(item, i) in dataList" :key="i"> 姓名: {{ item.name }} </view>
    </z-paging>
</template>

<script setup lang="ts">
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";

type DataItem = {
    name: string;
};
const dataList = ref<Array<DataItem>>([]);
const pagingRef = ref();

// @query所绑定的方法不要自己调用！！需要刷新列表数据时，只需要调用this.$refs.pagingRef.reload()即可
// const queryList = (pageNo: number, pageSize: number) => {
const queryList = () => {
    // 假装在请求
    setTimeout(() => {
        // pagingRef.value.complete(false) // 没有更多数据了
        pagingRef.value.complete([
            { name: "张三" },
            { name: "李四" },
            { name: "王五" },
            { name: "赵六" },
            { name: "孙七" },
            { name: "周八" },
            { name: "吴九" },
            { name: "郑十" }
        ]);
    }, 300);
};

onLoad(() => {
    pagingRef.value.reload();
});
</script>
_pageNo_pageSize_$event_$event
