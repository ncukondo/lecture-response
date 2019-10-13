<template>
  <v-app>
    <v-container>
      <messages />
      <create-message-form />
    </v-container>
  </v-app>
</template>

<script>
import Messages from "./components/Messages";
import CreateMessageForm from "./components/MessageForm";

export default {
  name: "App",
  components: {
    CreateMessageForm,
    Messages
  }
};
</script>