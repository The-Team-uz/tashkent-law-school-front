<script setup></script>

<template>
  <div class="container">
    <div class="main">
      <div class="main-leftimgs">
        <img src="/1.svg" alt="Simble 1" />
        <img src="/2.svg" alt="Simble 2" />
      </div>

      <div class="main-texts">
        <h1>{{ $t("weWillDiscoverYourChild") }}</h1>
        <p>
          {{ $t("fromTheFirstDay") }}
        </p>
        <div class="main-texts-buttons">
          <el-button color="#ffb715" class="btn-application">
            {{ $t("submissionOfApplication") }}
          </el-button>

          <el-button plain type="info" class="btn-info">
            {{ $t("detailed") }}
          </el-button>
        </div>
      </div>

      <div class="main-rightimgs">
        <img src="/3.svg" alt="Simble 3" />
        <img src="/4.svg" alt="Simble 4" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  height: 70vh;
  justify-content: space-between;
  align-content: space-between !important;
  background-color: #36b872;
  border-radius: 20px;
  margin-top: 20px;

  &-leftimgs,
  &-rightimgs {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &-texts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    gap: 20px;

    h1 {
      width: 80%;
      text-align: center;
      font-size: 65px;
    }

    p {
      width: 80%;
      text-align: center;
      font-size: 20px;
    }

    &-buttons {
      display: flex;
      gap: 20px;

      .btn-application {
        font-size: 20px;
        width: 280px;
        height: 60px;
        color: #fff;
      }

      .btn-info {
        font-size: 20px;
        width: 280px;
        height: 60px;
      }
    }
  }
}
</style>
