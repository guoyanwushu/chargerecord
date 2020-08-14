<template>
  <div>
    <van-swipe-cell
      :right-width="120"
      :left-width="65"
      v-for="(item, index) in records"
      :key="item.name"
      :before-close="beforeClose"
      :disabled="!(item.canPay || item.canDelete)"
      @click="toRecordDetail(item)">
      <van-cell :title="item.name">
        <div class="record-item">
          <span class="record-item-value">{{item.date.substring(0, 9)}}</span>
          <span class="record-item-value">{{item.price}}￥</span>
        </div>
      </van-cell>
      <div slot="right">
        <van-button type="primary" v-if="item.canPay">结清</van-button>
        <van-button type="danger" @click="deleteItem(item, index)" v-if="item.canDelete">删除</van-button>
      </div>
    </van-swipe-cell>
  </div>
</template>
<script>
import { Dialog } from 'vant'
export default {
  data () {
    return {
      records: [{
        name: '猪肉',
        price: '36.7',
        canDelete: true,
        canPay: true,
        date: '2020-08-13 14:32:32'
      }, {
        name: '奥利奥',
        price: '15',
        canDelete: false,
        canPay: false,
        date: '2020-02-01 18:69:47'
      }],
      loading: false,
      finished: false
    }
  },
  methods: {
    getRecordList () {

    },
    beforeClose ({ position, instance }) {
      switch (position) {
        case 'cell':
          instance.close()
          break
      }
    },
    deleteItem (item, index) {
      Dialog.confirm({
        message: '确认删除么？删除后记录不可恢复'
      }).then(() => {
        this.records.splice(index, 1)
      })
    },
    toRecordDetail (item) {
      console.log(item)
    },
    onLoad: function () {
      // 异步更新数据

    }
  }
}
</script>
<style lang="scss">
  .van-cell__title {
    text-align: left;
    display: inline-block;
    width: 120px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .record-item {
    display: flex;
  }
  .record-item-value {
    flex: 1;
  }
</style>
