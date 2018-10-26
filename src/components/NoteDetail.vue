<template>
        <div id="note" class="detail">
            <note-sidebar ></note-sidebar>
            <div class="note-detail">
                <div class="note-bar">
                    <span>创建日期：{{curNote.createdAtFriendly}}</span>
                    <span>更新日期：{{curNote.updatedAtFriendly}}</span>
                    <span>{{ curNote.statusText }}</span>
                    <span class="iconfont icon-delete"></span>
                    <span class="iconfont icon-fullscreen"></span>
                </div>
                <div class="note-title">
                    <input type="text" :value="curNote.title" placeholder="输入标题">
                </div>
                <div class="editor">
                    <textarea name="" v-show="true" id="" :value="curNote.content" cols="30" rows="10" placeholder="输入markdown"></textarea>
                    <div class="preview markdown-body" vhtml="" v-show="false"></div>
                </div>
            </div>
        </div>
</template>

<script>
    import Auth from '@/apis/auth'
    import NoteSidebar from '@/components/NoteSidebar'
  export default {
      components: {
        NoteSidebar
      },
    data () {
      return {
        msg: '笔记详情页',
        curNote: {
          title: '笔记标题',
          content: '我的内容',
          createdAtFriendly:'1天前',
          updatedAtFriendly:'刚刚',
          statusText: '未更新'
        }
      }
    },
    created () {
      Auth.getInfo()
        .then( res => {
          if(!res.isLogin) {
            this.$router.push({path:'login'})
          }
        })
    }
  }
</script>

<style lang="less" scoped>
#note {
    display: flex;
    align-items: stretch;
    background-color: #fff;
    flex: 1;

    .note-detail {
        margin-left: 2px;
        flex: 1;
        display: flex;
        flex-direction: column;

        .note-detail-ct {
            height: 100%;
        }

        .note-empty {
            font-size: 50px;
            color: #ccc;
            text-align: center;
            margin-top: 100px;
        }

        .note-bar {
            padding: 4px 20px;
            border-bottom: 1px solid #eee;
            &:after {
                content:'';
                display: block;
                clear: both;
            }
            span {
                font-size: 12px;
                color: #999;
                margin-right: 4px;
            }
            .iconfont{
                float: right;
                margin-left: 4px;
                font-size: 18px;
                cursor: pointer;
            }

        }

        .note-title{
            input,span {
                display: inline-block;
                width: 100%;
                border: none;
                outline: 2px solid #ccc;
                font-size: 18px;
                padding: 10px 20px;
            }
        }

        .editor {
            height: ~"calc(100% - 70px)";
            position: relative;
        }
        textarea, .preview {
            position: absolute;
            width: 100%;
            height: 100%;
            padding: 20px;
        }

        textarea {
            border: none;
            resize: none;
            outline: 2px solid #ccc;
            font-size: 14px;
            font-family: 'Monaco', courier, monospace;
        }

        code {
            color: #f66;
        }
    }
}
</style>
