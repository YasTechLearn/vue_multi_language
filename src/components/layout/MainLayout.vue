<template>
  <div class="mainLayout">
    <slot/>
  </div>
</template>

<script>
import axios from "axios"

export default
{
  name: "MainLayout",

  async mounted()
  {
    if(localStorage.getItem("lang") == null || typeof localStorage.getItem("lang") === "undefined")
    {
      const lang = await new Promise(resolve =>
      {
        axios
            .get("https://freegeoip.app/json/")
            .then(value => resolve(value.data["country_code"].toLowerCase()))
            .catch(reason => console.log(reason))
      })

      if (this.$i18n.availableLocales.includes(lang))
      {
        localStorage.setItem("lang", String(lang))
        this.$i18n.locale = String(lang)
      }
      else
      {
        localStorage.setItem("lang", this.$i18n.locale)
      }
    }
    else
    {
      this.$i18n.locale = localStorage.getItem("lang")
    }
  }
}
</script>

<style scoped>

</style>