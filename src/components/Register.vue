<script setup>
import { ref } from "vue";

const name = ref("");
const phone = ref("");
const options = { placeholder: "90 123 45 67", maxlength: 17 };
</script>

<template>
  <div class="container">
    <div class="main">
      <div class="main-images">
        <img src="/5.svg" alt="5-img" />
        <img src="/6.svg" alt="6-img" />
      </div>

      <div class="main-texts">
        <h1>
          Qabulga <br />
          roʻyxatdan oʻting
        </h1>
        <p>
          Ma'lumotlaringizni yozib qoldiring, siz bilan tezda aloqaga chiqib,
          maktabimiz haqida yanada batafsil aytib beramiz
        </p>
      </div>

      <div class="main-inputs">
        <el-input
          v-model="name"
          placeholder="Ismingiz"
          size="large"
          class="main-inputs-name"
        />

        <vue-tel-input
          v-model="phone"
          mode="international"
          class="main-inputs-phone"
          maxlength="8"
          defaultCountry="uz"
          validCharactersOnly="true"
          :inputOptions="options"
        ></vue-tel-input>

        <el-button color="#ffb715" class="main-inputs-btn">
          {{ $t("submissionOfApplication") }}
        </el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: space-between;
  background-color: #36b872;
  margin-top: 50px;
  border-radius: 20px;

  &-images {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &-texts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    margin: 100px 0 100px -10px;

    h1 {
      font-size: 65px;
    }
    p {
      width: 70%;
      margin-top: 20px;
      font-size: 24px;
    }
  }

  &-inputs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 20px 0;
    margin-right: 130px;

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
</style>

<style>
.vti__input {
  font-size: 16px;
  color: #9c9da0;
}

.vti__dropdown-list {
  color: #000;
  font-size: 16px;
}
</style>
