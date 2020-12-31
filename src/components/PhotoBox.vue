<template>
  <div class="photoBox">
    <div class="title">第一站：梦时代联通营业厅</div>
    <div class="content">
      <el-carousel :interval="3000" type="card" height="365px">
        <el-carousel-item v-for="item in imgList" :key="item">
          <h3 class="medium"><img :src="item"/></h3>
        </el-carousel-item>
      </el-carousel>
<!--      <img :src="qnwmh1"/>-->
    </div>
    <div class="wb">
      <div class="youth-content" style="font-weight: bold"> 江西联通的小伙伴们来到了第一站：梦时代联通营业厅。
      <p style="margin-top: 30px">他们深入一线，为营业人员提供技术支撑，并现场调研，感受一线人员的工作的难点与痛点。</p>
      </div>

      <div class="youth-img">
        <img :src="loading" style="height: 100px;width: 100px"/>
      </div>
    </div>
  </div>
</template>
<script>
import qnwmh1 from '../assets/青年文明号图1.jpg'
import loading from '../assets/loading.gif'
import yyt1 from '../assets/营业厅1.jpg'
import yyt2 from '../assets/营业厅2.jpg'
import yyt3 from '../assets/营业厅3.jpg'
export default {
  data () {
    return {
      qnwmh1: qnwmh1,
      loading: loading,
      imgList: [yyt1, yyt2, yyt3]
    }
  }
}
</script>
<style>
  .content{
    margin-top: 10px;
    text-align: center;
  }
  .content img{
    width: 485px;
    height: 365px;
  }
  .title{
    color: #303133;
    padding: 18px 20px;
    border-bottom: 1px solid #ebeef5;
  }
  .photoBox{
    height: 700px;
    width: 875px;
    background-color: #fff;
    position: absolute;
    z-index: 999;
    top: 145px;
    right: 70px;
    opacity: 0.9;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  }
  .wb{
    padding: 10px 40px;
    display: flex;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .youth-content{
    flex: 3;
  }
  .youth-img{
    flex: 1;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
