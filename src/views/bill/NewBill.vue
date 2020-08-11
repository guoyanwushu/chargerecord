<template>
  <div>
    <van-form @submit="submit">
      <van-field
        label="账单名"
        v-model="billName"
        placeholder="账单名"
        :rules="[{required: true, message: '请填写账单名'}]">
      </van-field>
      <van-field
        label="备注"
        name="remark"
        type="textarea"
        maxlength="200"
        show-word-limit
        v-model="remark">
      </van-field>
      <van-field
        label="是否共享"
        name="isShared">
        <template #input>
          <van-switch
            v-model="isShared"/>
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      billName: '',
      remark: '',
      isShared: false
    }
  },
  methods: {
    submit () {
      // TODO 提交
    }
  }
}
</script>
<style lang="less">
</style>
