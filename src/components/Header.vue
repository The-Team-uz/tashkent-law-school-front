<script setup>
import { ref } from "vue";
import i18n from "@/i18n.js";

const isVisible = ref(false);
window?.addEventListener("click", (e) => {
  const target = e.target;
  if (!target.closest("#carrot-language-bar")) {
    isVisible.value = false;
  }
});

const changeLang = (lang) => {
  i18n.global.locale = lang;
  document.cookie = `lang=${lang}`;
  isVisible.value = false;
};
</script>

<template>
  <div class="main container">
    <a href="/">
      <img src="../../public/logo.jpg" alt="Logo" class="main-logo" />
    </a>

    <div class="main-center">
      <a href="#">{{ $t("whywe") }}</a>
      <a href="#">{{ $t("costs") }}</a>
      <a href="#">{{ $t("scholarships") }}</a>
    </div>

    <div class="main-right">
      <a href="https://t.me/tashkentlawschool_bot" target="_blank">
        <i class="fa-brands fa-telegram" />
      </a>
      <div class="main-right-buttons">
        <el-button type="success" plain color="#36b872">{{
          $t("submissionOfApplication")
        }}</el-button>
        <el-button type="success" plain color="#36b872">{{
          $t("forParents")
        }}</el-button>
      </div>

      <!-- Language -->
      <div id="carrot-language-bar" class="navbar-nav">
        <div class="nav-item dropdown" style="position: relative">
          <a class="navbar-item" @click="isVisible = !isVisible">
            <div class="link">
              <span class="lang">{{ $t(`${$i18n.locale}`) }}</span>
              <i class="fa-solid fa-angle-down"></i>
              <Icon class="icon" icon="uiw:down" width="12" />
            </div>
          </a>
          <div
            v-if="isVisible"
            class="languages__action"
            style="position: absolute"
          >
            <div class="languages__action-item" @click="changeLang('uz')">
              <Icon class="icon" icon="cif:uz" width="18" height="18" />
              <span>O'zbek</span>
            </div>
            <div class="languages__action-item" @click="changeLang('ru')">
              <Icon class="icon" icon="cif:ru" width="18" height="18" />
              <span>Русский</span>
            </div>
            <div class="languages__action-item" @click="changeLang('en')">
              <Icon class="icon" icon="cif:us" width="18" height="18" />
              <span>English</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;

  &-logo {
    width: 65px;
    object-fit: contain;
  }

  &-center {
    display: flex;
    gap: 30px;
    margin-right: -350px;

    a {
      text-decoration: none;
      color: #000;
      font-size: 16px;
      font-weight: 400;
      cursor: pointer;

      &:hover {
        color: rgb(115, 115, 115);
        transition: all ease-in-out 0.25s;
      }
    }
  }

  &-right {
    display: flex;
    align-items: center;
    gap: 15px;

    &-buttons {
      display: flex;
      gap: 5px;
    }

    .fa-telegram {
      color: #36b872;
      cursor: pointer;
      font-size: 28px;
    }
  }
}

.navbar-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .fa-angle-down {
    font-size: 14px;
    margin-left: 2px;
  }
}

.languages {
  position: relative;
  &__action {
    z-index: 101;
    position: absolute;
    background-color: #ffffff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.35);
    cursor: pointer;
    transition: all 0.3s;
    right: 0%;
    top: 25px;
    border-radius: 4px;
    overflow: hidden;

    &-item {
      display: flex;
      gap: 5px;
      color: var(--text-color);
      padding: 5px 10px;
      font-size: 13px;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        background-color: #f5f5f5;
        color: var(--primary-color);
      }

      & + .languages__action-item {
        border-top: 1px solid #e5e5e5;
      }
    }
  }
}
</style>
