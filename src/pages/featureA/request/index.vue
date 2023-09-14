<template>
  <div>
    <p>测试的接口请求是在线easy-mock数据</p>
    <span>地址：https://github.com/easy-mock/easy-mock</span>

    <button @click="success">请求code为0接口</button>
  </div>
</template>

<script lang="ts" setup>
import { useDidShow } from '@tarojs/taro'
import { getTest } from '@/api/test'

useDidShow(() => {
  console.log('useDidShow')
  success()
})
const success = async () => {
  const result = await getTest()
  console.log(result)
}
</script>
