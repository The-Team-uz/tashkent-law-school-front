<template>
  <div class="container">
    <div class="main">
      <div class="main-top">
        <div class="main-top-texts">
          <h1>
            Biz bilan <br />
            bog’laning
          </h1>
          <div class="main-top-texts-socials">
            <a
              target="_blank"
              href="https://www.instagram.com/tashkentlaw?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            >
              <i class="fa-brands fa-instagram"></i>
              Instagram
            </a>

            <a href="https://t.me/tashkentlaw" target="_blank">
              <i class="fa-brands fa-telegram"></i>
              Telegram
            </a>

            <a href="https://t.me/tashkentlawadmin" target="_blank">
              <i class="fa-brands fa-telegram"></i>
              Admin
            </a>

            <a
              href="https://t.me/tashkentlawschool_bot"
              target="_blank"
              style="margin-left: 29px"
            >
              <i class="fa-brands fa-telegram"></i>
              Telegram Bot
            </a>
          </div>
          <h2>
            Chilonzor 10-kvartal, 16-uy <br />
            Mo’ljal: Shuhrat chorrahasi
          </h2>
        </div>
        <div class="main-top-inputs">
          <el-input
            v-model="name"
            placeholder="Ismingiz"
            size="large"
            class="main-top-inputs-name"
          />

          <vue-tel-input
            v-model="phone"
            mode="international"
            class="main-top-inputs-phone"
            maxlength="8"
            defaultCountry="uz"
            validCharactersOnly="true"
            :inputOptions="options"
          ></vue-tel-input>

          <el-button color="#ffb715" class="main-top-inputs-btn">
            {{ $t("submissionOfApplication") }}
          </el-button>
        </div>
      </div>

      <h3 class="manzil">Manzil</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10595.741702676316!2d69.20160345670348!3d41.2747286248121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b005889926b%3A0x656cafcd8af85c9f!2sTashkent%20law%20school!5e0!3m2!1suz!2s!4v1720802595705!5m2!1suz!2s"
        width="100%"
        height="350"
        style="border-radius: 20px"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div class="main-bottom">
        <img src="/logo.jpg" alt="Logo" />
        <h1>+998 93 239 28 60</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const phone = ref("");
const options = { placeholder: "90 123 45 67", maxlength: 17 };
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  background-color: #36b872;
  margin-top: 50px;
  padding: 80px 130px 20px;
  border-radius: 20px;
  color: #fff;

  &-top {
    display: flex;
    justify-content: space-between;

    &-texts {
      h1 {
        font-size: 50px;
      }

      h2 {
        font-weight: 500;
        margin-top: 25px;
      }

      &-socials {
        display: flex;
        flex-wrap: wrap;
        width: 60%;
        margin-top: 25px;
        gap: 10px;

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          margin-right: 50px;
          font-size: 18px;
          cursor: pointer;
          text-decoration: none;
          color: #fff;

          i {
            font-size: 24px;
          }
        }
      }
    }

    &-inputs {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;

      &-name {
        font-size: 20px;
        width: 500px;
        height: 60px;
        color: #fff;
      }

      &-phone {
        background-color: #fff;
        font-size: 20px;
        width: 500px;
        height: 60px;
        color: #fff;
      }

      &-btn {
        font-size: 20px;
        width: 500px;
        height: 60px;
        color: #fff;

        &:hover {
          color: #fff;
        }
      }
    }
  }

  &-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;

    img {
      width: 100px;
      border-radius: 3px;
      background-color: transparent;
    }

    h1 {
      font-size: 50px;
    }
  }
}
.manzil {
  font-size: 14px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 5px;
}
</style>
