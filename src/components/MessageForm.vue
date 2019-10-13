<template>
  <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="addComment">
    <v-container>
      <v-row no-gutter>
        <v-col>
          <v-text-field v-model="inputComment" :rules="commentRules" label="コメント" required></v-text-field>
        </v-col>
        <v-col cols="auto">
          <v-btn :disabled="!valid || inputComment===''" @click="addComment" default>送信</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { db } from "../plugins/firebase";

export default {
  name: "CreateMessageForm",
  data: () => ({
    // form入力データ
    inputComment: "",
    // バリデーション
    valid: true,
    commentRules: [v => !!v || "コメントは必須項目です"],
    // Formダイアログの表示可否
    displayForm: false
  }),
  methods: {
    // コメント追加
    addComment() {
      if (!this.$refs.form.validate()) return;
      const now = new Date();
      // コメントをFirestoreへ登録
      db.collection("comments").add({
        content: this.inputComment,
        avatar:
          "https://picsum.photos/50?image=" +
          (Math.floor(Math.random() * 400) + 1),
        createdAt: now
      });
      // ダイアログを閉じる
      this.hideCreateForm();
    },
    // Formの初期化
    clear() {
      this.$refs.form.reset();
    },
    // Formダイアログの表示
    showCreateForm() {
      this.displayForm = true;
    },
    //
    // Formダイアログの非表示
    hideCreateForm() {
      this.clear();
      this.displayForm = false;
    }
  }
};
</script>