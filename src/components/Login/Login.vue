<template>
    <div class="wrapper" :class="{ active: isActive }">
        <!-- <span class="icon-close"><i class="el-icon-error"></i></span> -->
        <div class="form-box login">
            <h2>Login</h2>
            <form action="#" model="loginfrom">
                <div class="input-box">
                    <span class="icon"><i class="el-icon-message"></i></span>
                    <input type="email" required v-model="loginfrom.email">
                    <label>Email</label>
                </div>
                <div class="input-box">
                    <span class="icon"> <i class="el-icon-view"></i></span>
                    <input type="password" required v-model="loginfrom.password">
                    <label>PassWord</label>
                </div>
                <div class="remember-forgot">
                    <label><input type="checkbox" v-model="loginfrom.checkbox">Remember me</label>
                    <a href="#">Forgot PassWord?</a>
                </div>
                <button type="submit" class="btn" @click="submit()">
                    Login
                </button>
                <div class="login-register">
                    <p>Don't have an account?
                        <a class="register-link" @click="stelychange">Register</a>
                    </p>
                </div>
            </form>
        </div>
        <div class="form-box register">
            <h2>Register</h2>
            <form action="#" class="registerfrom">
                <div class="input-box">
                    <span class="icon"><i class="el-icon-user-solid"></i></span>
                    <input type="name" required>
                    <label>用户名</label>
                </div>
                <div class="input-box">
                    <span class="icon"><i class="el-icon-message"></i></span>
                    <input type="email" required>
                    <label>电子邮件</label>
                </div>
                <div class="input-box">
                    <span class="icon"> <i class="el-icon-view"></i></span>
                    <input type="password" required>
                    <label>密码</label>
                </div>
                <div class="remember-forgot">
                    <label><input type="checkbox">I agree to the terms & conditions</label>
                </div>
                <button type="submit" class="btn">
                    注册
                </button>
                <div class="login-register">
                    <p>是否已经拥有账号
                        <a class="register-link" @click="changestyle">Login</a>
                    </p>
                </div>
            </form>
        </div>
    </div>
</template>
<style lang="scss">
body {
    box-sizing: border-box;
    background: url('../../assets/background.jpg') no-repeat;
    background-size: cover;
}

.active {
    height: 520px !important;
    top: 22vh !important;
}

.wrapper.active .form-box.login {
    transition: none;
    transform: translateX(-400px);
}

.wrapper.active .form-box.register {
    transition: transform .18s ease;
    transform: translateX(0);
}

.registerfrom {
    width: 80%;
    margin: auto;
}

.wrapper {
    position: relative;
    margin: auto;
    top: 25vh;
    width: 400px;
    height: 440px;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, .5);
    border-radius: 10px;
    backdrop-filter: blur(20px);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: .4s ease;

    .icon-close {
        position: absolute;
        top: 0;
        right: 0;
        width: 45px;
        height: 45px;
        background: #162938;
        font-size: 2em;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom-left-radius: 10px;
        z-index: 1;
        cursor: pointer;
    }

    .form-box {
        width: 100%;
        padding: 40px;

        h2 {
            font-size: 2em;
            color: #162938;
            text-align: center;
        }

        .input-box {
            position: relative;
            width: 100%;
            height: 50px;
            border-bottom: 2px solid #162938;
            margin: 30px 0;

            .icon {
                position: absolute;
                right: 8px;
                font-size: 1.2em;
                color: #162938;
                line-height: 57px;
            }
        }

        .input-box label {
            position: absolute;
            top: 50%;
            left: 5px;
            transform: translateY(-50%);
            font-size: 1em;
            color: #162938;
            font-weight: 500;
            pointer-events: none;
            transition: .5s;
        }

        .input-box input:focus~label,
        .input-box input:valid~label {
            top: -4px;
        }

        .input-box input {
            width: 100%;
            height: 100%;
            background: transparent;
            border: none;
            outline: none;
            font-size: 1em;
            color: #162938;
            font-weight: 600;
            padding: 0 35px 0 5px;
        }

        .remember-forgot {
            font-size: 0.9em;
            color: #162938;
            font-weight: 500;
            margin: -15px 0 15px;
            display: flex;
            justify-content: space-between;

            label input {
                accent-color: #162938;
                margin-right: 3px;
            }

            a {
                color: #162938;
                text-decoration: none;
            }

            a:hover {
                text-decoration: underline;
                cursor: pointer;
            }
        }

        .btn {
            width: 100%;
            height: 45px;
            background: #162938;
            border: none;
            outline: none;
            border-radius: 6px;
            cursor: pointer;
            font-size: 1em;
            color: #fff;
            font-weight: 500;
        }

        .login-register {
            font-size: .9em;
            color: #162938;
            text-align: center;
            font-weight: 500;
            margin: 25px 0 15px;

            p a {
                color: #162938;
                text-decoration: none;
                font-weight: 600;
            }

            p a:hover {
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }

    .login {
        transition: transform .18s ease;
        transform: translateX(0);
    }

    .register {
        position: absolute;
        transition: none;
        transform: translateX(400px);
    }
}
</style>
<script>
export default {
    name: 'login',
    data() {
        return {
            isActive: false,
            loginfrom: {
                email: '',
                password: '',
                checkbox: ''
            }
        }
    },
    methods: {
        stelychange() {
            this.isActive = true;
        },
        changestyle() {
            this.isActive = false;
        },
        submit() {
           console.log(this.loginfrom);
        }
    }
}
</script>
