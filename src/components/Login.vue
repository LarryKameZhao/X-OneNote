<template>
    <div id="login">
        <h1>{{msg}}</h1>
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="main"></div>
                    <div class="form">
                        <h3 @click="showRegister">创建账户</h3>
                        <transition name="slide">
                            <div v-bind:class="{show: isShowRegister}" class="register">
                                <input type="text" v-model="register.username" placeholder="用户名">
                                <input type="password" v-model="register.password"  placeholder="密码">
                                <p v-bind:class="{error: register.isError}"> {{register.notice}}</p>
                                <div class="button" @click="onRegister">创建账号</div>
                            </div>
                        </transition>
                        <h3 @click="showLogin">登录</h3>
                        <transition name="slide">
                            <div v-bind:class="{show: isShowLogin}" class="login">
                                <input type="text" v-model="login.username" placeholder="输入用户名">
                                <input type="password" v-model="login.password"   placeholder="密码">
                                <p v-bind:class="{error: login.isError}"> {{login.notice}}</p>
                                <div class="button" @click="onLogin"> 登录</div>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    import {  mapActions, mapGetters } from 'vuex'
    export default {
    name: "Login",
    data () {
      return {
        msg: '这是登陆页面',
        isShowLogin: true,
        isShowRegister: false,
        login: {
          username:'',
          password:'',
          notice:'请输入用户名和密码',
          isError: false
        },
        register:{
          username:'',
          password:'',
          notice:'创建账号和密码',
          isError: false
        }
      }
    },
    methods: {
      ...mapActions({
        loginUser: 'login',
        registerUser: 'register'
      }),
      showRegister () {
        this.isShowRegister = true
        this.isShowLogin = false
      },
      showLogin () {
        this.isShowRegister = false
        this.isShowLogin = true
      },
      onRegister () {
        console.log('on register')
        let result = this.validUserName(this.register.username)
        if ( !result.isValid  ) {
          this.register.isError = true
          this.register.notice = result.notice
          return
        }
        let result2 = this.validPassword(this.register.password)
        if ( !result2.isValid ) {
            this.register.isError = true
            this.register.notice = result2.notice
            return
        }
        this.register.isError = false
        this.register.notice = ''
        this.registerUser({username: this.register.username, password: this.register.password})
          .then(res=>{
            this.register.isError = false
            this.register.notice = ''
            this.$router.push({path:'/notebooks'})
            console.log(res.data)
          }).catch(err=>{
            this.register.isError = true
            this.register.notice = err.data
        })
      },
      onLogin () {
        console.log(' on login')
        let result = this.validUserName(this.login.username)
        if ( !result.isValid  ) {
          this.login.isError = true
          this.login.notice = result.notice
          return
        }
        let result2 = this.validPassword(this.login.password)
        if ( !result2.isValid ) {
          this.login.isError = true
          this.login.notice = result2.notice
          return
        }
        this.loginUser({username: this.login.username, password:this.login.password})
          .then(res=>{
            this.login.isError = false
            this.login.notice = ''
            this.$router.push({path:'/notebooks'})
            console.log(res.data)
          }).catch(err=>{
            this.login.isError = true
            this.login.notice = err.data
        })
      },
      validUserName (username) {
        return {
          isValid: /^[a-zA-Z_0-9\u4e00-\u9fa5]{3,15}$/.test(username),
          notice: '用户名必须是3-15个字符，仅限于字母数字中文下划线'
        }
      },
      validPassword (password){
        return {
          isValid: /^.{6,16}$/.test(password),
          notice: '密码是6-16位字符'
        }
      }
    }
  }
</script>

<style lang="less" scoped>
.modal-mask {
    position: fixed;
    z-index: 100;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .7);
    display: table;
}
    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }
    .modal-container {
        width: 800px;
        height: 500px;
        margin: 0 auto;
        background: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        font-family: Arial, sans-serif;
        display: flex;
        .main {
            flex: 1;
            background-size: contain;
            background: #36bc64 url(//x-note.oss-cn-beijing.aliyuncs.com/onenote/one_note.png) center center no-repeat;
        }
        .form {
            width: 270px;
            border-left: 1px solid #ccc;
            h3 {
                padding: 10px 20px;
                font-weight: normal;
                font-size: 16px;
                border-top: 1px solid #eee;
                cursor: pointer;
                &:nth-of-type(2){
                    border-bottom: 1px solid #eee;
                }
            }
            .button {
                background-color: #2bb964;
                height: 36px;
                line-height: 36px;
                text-align: center;
                font-weight: bold;
                color: #fff;
                border-radius: 4px;
                margin-top: 18px;
                cursor: pointer;
            }
            .login,.register {
                padding: 0px 20px;
                border-top: 1px solid #eee;
                height: 0;
                overflow: hidden;
                transition: height .4s;
                &.show {
                    height: 193px;
                }
                input {
                    display: block;
                    width: 100%;
                    height: 35px;
                    line-height: 35px;
                    padding: 0 6px;
                    border-radius: 4px;
                    border: 1px solid #ccc;
                    outline:none;
                    font-size: 14px;
                    margin-top: 10px;
                }
                input:focus {
                    border: 3px solid #9dcaf8;
                }
                p {
                    font-size: 12px;
                    margin-top: 10px;
                    color: #444;
                }
                .error {
                    color: red;
                }
            }
            .login {
                border-top: 0;
            }
        }
    }
</style>
