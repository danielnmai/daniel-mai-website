<script lang="ts">
import emailjs from "@emailjs/browser";

export default {
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "gmail",
          "template_1dprzyb",
          this.$refs.form,
          "user_7CyaqH4cLVSObnWInfa8I"
        )
        .then(
          (result: any) => {
            console.log("SUCCESS!", result.text);
          },
          (error: any) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>

<template>
  <form ref="form" @submit.prevent="sendEmail">
    <label>Name</label>
    <input type="text" name="user_name" />
    <label>Email</label>
    <input type="email" name="user_email" />
    <label>Message</label>
    <textarea name="message"></textarea>
    <input type="submit" value="Send" />
  </form>
</template>
