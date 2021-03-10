<template>
    <div class="navbar-right">
      <div class="nav navbar-nav github-login">
        <a href="#" class="btn btn-default login-btn">
          <i class="fa fa-user">登录</i>
        </a>
        <router-link to="/auth/register" class="btn btn-default login-btn">
          <i class="fa fa-user-plus"></i>注册
        </router-link>
      </div>
    </div>
</template>


<script>
export default {
  name: 'TheEntry'
}
</script>

<style class="scpoed">

</style>