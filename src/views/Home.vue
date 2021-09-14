<template>
  <div class="home">
    <p>{{ $t("home.hello") }}</p>

    <button @click="changeLanguage">change</button>
  </div>
</template>

<script>


export default {
  name: 'Home',
  methods: {
    changeLanguage()
    {
      if (this.$i18n.locale === "us")
      {
        this.$i18n.locale = "ir"
        localStorage.setItem("lang", "ir")
      }
      else
      {
        this.$i18n.locale = "us"
        localStorage.setItem("lang", "us")
      }
    }
  }
}
</script>
