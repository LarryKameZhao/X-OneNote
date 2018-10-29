<template>
    <div id="note" class="detail">
        <note-sidebar  @update:notes="val => notes = val"></note-sidebar>
        <div class="note-detail">
            <div class="note-empty" v-show="!curNote.id">请选择笔记</div>
            <div class="note-detail-ct" v-show="curNote.id">
                <div class="note-bar">
                    <span> 创建日期: {{curNote.createdAtFriendly}}</span>
                    <span> 更新日期: {{curNote.updatedAtFriendly}}</span>
                    <span> {{statusText}}</span>
                    <span class="iconfont icon-delete" @click="onDeleteNote"></span>
                    <span class="iconfont icon-fullscreen" @click="isShowPreview = !isShowPreview"></span>
                </div>
                <div class="note-title">
                    <input type="text" @input="onUpdateNote" @keydown="statusText='正在输入...'" v-model:value="curNote.title"  placeholder="输入标题">
                </div>
                <div class="editor">
                    <textarea v-show="!isShowPreview" @keydown="statusText='正在输入...'" @input="onUpdateNote"  v-model:value="curNote.content"  placeholder="输入内容, 支持 markdown 语法"></textarea>
                    <div class="preview markdown-body" v-html="previewContent" v-show="isShowPreview">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import NoteSidebar from '@/components/NoteSidebar'
  import _ from 'lodash'
  import MarkdownIt from 'markdown-it'
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'


  let md = new MarkdownIt()


  export default {
    components: {
      NoteSidebar
    },

    data () {
      return {
        statusText: '笔记未改动',
        isShowPreview: false
      }
    },

    created() {
      this.checkLogin({ path: '/login' })
    },

    computed: {
      ...mapGetters([
        'notes',
        'curNote'
      ]),

      previewContent() {
        return md.render(this.curNote.content||'')
      }
    },

    methods: {
      ...mapMutations([
        'setCurNote'
      ]),

      ...mapActions([
        'updateNote',
        'deleteNote',
        'checkLogin'
      ]),

      onUpdateNote: _.debounce(function() {
        this.updateNote({ noteId: this.curNote.id, title: this.curNote.title, content: this.curNote.content })
          .then(data => {
            this.statusText = '已保存'
          }).catch(data => {
          this.statusText = '保存出错'
        })

      }, 300),

      onDeleteNote() {
        this.deleteNote({ noteId: this.curNote.id })
          .then(data => {
            this.$router.replace({ path: '/note' })
          })
      }

    },

    beforeRouteUpdate (to, from, next) {
      this.setCurNote({ curNoteId: to.query.noteId})
      next()
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
                font-size: 14px;
                color: #999;
                margin-right: 4px;
            }
            .iconfont{
                float: right;
                margin-left: 4px;
                font-size: 16px;
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
