<template>
  <div>
    <van-form @submit="submit">
      <van-field
        label="名称"
        v-model="name"
        ></van-field>
      <van-field
        label="类型"
        placeholder="选择类型"
        @click="showPicker=true">
      </van-field>
      <van-popup v-model="showPicker" position="bottom">
        <van-picker
          show-toolbar
          :columns="typeOptions"
          @cancel="showPicker=false"
          @confirm="chooseType"></van-picker>
      </van-popup>
      <van-field
        label="金额"
        v-model="amount"
        type="number"
        ></van-field>
      <van-field
        label="时间"
        @click="showTimePicker=true"
        placeholder="请选择时间">
      </van-field>
      <van-popup v-model="showTimePicker" position="bottom">
        <van-datetime-picker
          v-model="time"
          type="datetime"
          title="选择时间"
          @cancel="showTimePicker=false"
        />
      </van-popup>
      <van-field label="地点" v-model="place"></van-field>
      <van-field
        label="备注"
        type="textarea"
        maxlength="200"
        show-word-limit
        v-model="remark"></van-field>
      <van-field
        label="附件"
      >
        <template #input>
          <van-uploader></van-uploader>
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
    chooseType () {
    },
    submit () {
    }
  }
}
</script>
<style lang="less">
</style>
