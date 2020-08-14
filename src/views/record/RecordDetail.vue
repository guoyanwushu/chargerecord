<template>
  <div>
    <van-form @submit="submit">
      <van-field label="名称" v-model="name"></van-field>
      <van-field label="类型" v-model="type"></van-field>
      <van-field label="金额" v-model="amount"></van-field>
      <van-field label="日期" v-model="date"></van-field>
      <van-field label="地点" v-model="place"></van-field>
      <van-field
        label="备注"
        type="textarea"
        maxlength="200"
        v-model="remark"></van-field>
      <van-field label="附件"></van-field>
    </van-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showPicker: false,
        showTimePicker: false,
        name: '',
        type: '',
        amount: '',
        remark: '',
        time: new Date(),
        place: '',
        typeOptions: ['餐饮', '交通', '零食', '生鲜']
      }
    },
    methods: {
      chooseType() {
      },
      submit() {
      }
    }
  }
</script>
<style lang="less">
</style>
