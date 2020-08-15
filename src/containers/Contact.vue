<template>
  <div class="contact">
    <pageTitle title="Contact" fa_icon="envelope" caption="感想・お問合せ・ご依頼などはこちらから" />
    <p id="caution">
      お名前はペンネームで構いません。また、ご連絡先は入力必須ではありませんが返信が必要な場合は必ず入力をお願い致します。（メールアドレスやTwitterのアカウントなど連絡可能であれば形式は問いません。）
      <br />ご連絡先をご入力頂いても返信できかねる場合がありますので、予めご了承いただきますようお願い申し上げます。
    </p>
    <!-- <span id="underline-o">ご連絡お待ちしております！</span> -->
    <form
      action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSew2ReidByTovAq5Aww9zNw8AFjOpMKg7wNKQ8GDK5FkRVjbQ/formResponse"
      target="_self"
      method="POST"
      id="mG61Hd"
    >
      <div class="form-group">
        <label for="form-name">お名前</label>
        <input type="name" class="form-control" id="form-name" name="entry.443865513" required />
      </div>
      <div class="form-group">
        <label for="form-email">ご連絡先</label>
        <input class="form-control" id="form-email" name="entry.1543898776" />
      </div>

      <div class="form-group">
        <label for="form-body">お問い合わせ内容</label>
        <textarea type="body" class="form-control" id="form-body" name="entry.2088173863" required />
      </div>

      <input type="submit" class="btn btn-outline-dark" value="送信" />
    </form>
  </div>
</template>

<script>
import PageTitle from "../components//PageTitle.vue";

export default {
  components: {
    PageTitle,
  },
};
</script>
<!-- 

<input type="text" class="quantumWizTextinputPaperinputInput exportInput" jsname="YPqjbf" autocomplete="off" tabindex="0" aria-labelledby="i1" aria-describedby="i2 i3" dir="auto" data-initial-dir="auto" data-initial-value="">

<input type="text" class="quantumWizTextinputPaperinputInput exportInput" jsname="YPqjbf" autocomplete="off" tabindex="0" aria-labelledby="i5" aria-describedby="i6 i7" dir="auto" data-initial-dir="auto" data-initial-value="">

<textarea class="quantumWizTextinputPapertextareaInput exportTextarea" jsname="YPqjbf" data-rows="1" tabindex="0" aria-label="回答を入力" jscontroller="gZjhIf" jsaction="input:Lg5SV;ti6hGc:XMgOHc;rcuQ6b:WYd;" dir="auto" data-initial-dir="auto" data-initial-value="" aria-labelledby="i9" aria-describedby="i10 i11" style="height: 24px;"></textarea>


<form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSew2ReidByTovAq5Aww9zNw8AFjOpMKg7wNKQ8GDK5FkRVjbQ/formResponse" target="_self" method="POST" id="mG61Hd" jsmodel="TOfxwf Q91hve" data-response="%.@.[]]" data-first-entry="0" data-last-entry="3" data-is-first-page="true">

[null,["はま浜辺",[[1852201639,"お名前",null,0,[[443865513,null,0]
]
]
,[1140304714,"ご連絡先",null,0,[[1543898776,null,0]
]
]
,[1520860713,"お問い合わせ内容",null,1,[[2088173863,null,0]

-->

<style scoped>
form {
  /* height: auto; */
  background: rgba(247, 240, 239, 0.6);
  border-radius: 10px;
  margin: 30px 25% 0px 25%;
  padding: 30px;
}

@media screen and (max-width: 800px) {
  form {
    margin: 0px 10% 0px 10%;
  }
}

@media screen and (min-width: 700px) {
  .form-text {
    margin: 10px 50px 0 50px;
  }
}

#form-body {
  height: 150px;
}

#caution {
  font-size: 0.8em;
  color: rgb(92, 92, 92);
  padding-bottom: 20px;
}
</style>
