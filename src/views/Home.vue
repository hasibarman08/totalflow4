<template>
  <div>
      <h2 class=""> Tab Working On Process</h2><br>
      <div class="my-tab">

                  <el-tabs type="border-card" class="tab-box">
                      <el-tab-pane label="info">
                          <el-input-number v-model="num"
                                           @change="handleChange"
                                           :min="1"
                                           :max="10">

                          </el-input-number>

                      </el-tab-pane>
                      <el-tab-pane label="files">files</el-tab-pane>
                      <el-tab-pane label="project comments">project coments</el-tab-pane>
                      <el-tab-pane label="project meetings">project meetings</el-tab-pane>
                      <el-tab-pane label="project history">project history</el-tab-pane>
                  </el-tabs>

      </div>



  </div>
</template>

<script>

export default {
  name: 'home',
    data(){
      return{
          num:0
      }
    }
}
</script>

<style lang="scss">

    body{
        background: url("../assets/bg.png");
        font-family: 'Opinion Pro', sans-serif;
    }

</style>
