<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        코치 리스트
      </v-card-title>
      <v-card-text class="pa-0">
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="-1"
          class="elevation-1"
          @dblclick:row="showRowInfo"
        />
      </v-card-text>
    </v-card>
    <v-card-actions>
      <v-btn
        color="primary"
        @click="newUsers"
      >
        신규
      </v-btn>
    </v-card-actions>
  </v-container>
</template>
<script>
//axios 라이브러리 import
import axios from 'axios'

export default {
  data() {
    return {
      headers: [
        {
          text: '코치아이디',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: '코치명', value: 'nm' },
        { text: '좌우명', value: 'coatch_motto' },
        { text: '결제여부', value: 'payment_yn' },
        { text: '요청상태', value: 'status' },
        { text: '요청일자', value: 'request_dt' },
        { text: '승인일자', value: 'approval_dt' },
        { text: '사용여부', value: 'use_yn' },
        { text: '문서키', value: 'doc_key', display:'none'},
      ],
      desserts: [ ]
    }
  },
  mounted() {
    var self = this;
    self.fetchUsers();
    
  },
  updated() {
  },
  methods: {
    fetchUsers : function() {
      var self = this;
      //axios.get('http://www.nacocha.com/nacocha/coatchs/all/', {
      axios.get('http://www.nacocha.com/nacocha/coatchs/all/', {
            })
            .then(function(response) {
            //console.log(response);
            self.desserts = response.data;

            })
            .catch(function(error) {
            console.log(error);
            });
    },
    showRowInfo : function(event, { item }){
      //document.location = "/usermanage/validation-form";
      //Router.location = "/usermanage/validation-form";
      this.$router.push({ name: '코치등록', params: { doc_key: item.doc_key }, })

      //router.push('/usermanage/validation-form') // 이동 위치를 입력
      //router.push({ name: 'SiteList' }) // 해당하는 라우터 이름으로 이동
      //router.push({ path: '/siteList' }) // 해당하는 pathname을 입력하여 이동
    },
    newUsers : function(){
      this.$router.push({ name: '코치등록', params: { doc_key: '' }, })
    }    
  }

}

</script>
<style lang="">

</style>
