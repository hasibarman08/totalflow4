<template>
  <div>
      <h2> Tab Working On Process</h2><br>
      <div class="my-tab">
          <el-tabs type="border-card" class="tab-box">
              <el-tab-pane label="User">
                  <el-input-number v-model="num"
                                   @change="handleChange"
                                   :min="1"
                                   :max="10">

                  </el-input-number>
              </el-tab-pane>
              <el-tab-pane label="Config">Config</el-tab-pane>
              <el-tab-pane label="Role">Role</el-tab-pane>
              <el-tab-pane label="Task">Task</el-tab-pane>
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
    .my-tab{
        margin: 40px;
        padding: 8px;
        box-shadow: rgba(0,0,0,0.2) 0 5px 10px;
        border-radius:4px!important;
        .tab-box{
            background: #DFE8F0!important;
            padding: 8px;
            border-radius: 0!important;
            border:none!important;
            .el-tabs__content{
                background: #fff!important;
            }
            .el-tabs__header{
                background: #DFE8F0!important;
                .el-tabs__nav{
                    display: flex;
                    align-items: flex-end;
                    .el-tabs__item{
                        background: #eef7ff !important;
                        border-top-left-radius: 15px;
                        border-top-right-radius: 15px;
                        margin-right: 5px!important;
                        &.is-active{
                            background: #fff !important;
                            height: 50px!important;
                            line-height: 50px!important;
                        }
                    }
                }
            }

        }
    }

</style>
