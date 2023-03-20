<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        회원 리스트
      </v-card-title>
      <v-card-text class="pa-0">
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          class="elevation-1"
          @dblclick:row="showRowInfo"
        />
      </v-card-text>
    </v-card>
    <v-card-actions>
      <v-btn
        color="orange"
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
          text: '사용자ID',
          align: 'start',
          sortable: false,
          value: 'user_id',
        },
        { text: '사용자명', value: 'user_nm' },
        { text: '전화번호', value: 'user_hp' },
        { text: '주소', value: 'user_addr_1'},
        { text: '가입일자', value: 'join_dt' },
      ],
      desserts: [ ]
    }
  },
  mounted() {
    var self = this;
    self.fetchUsers();
    
  },
  updated() {
    console.log("0000000000000000000000000");
    console.log(this.msg);
  },
  methods: {
    fetchUsers : function() {
      var self = this;
      axios.get('http://localhost:9099/user/firebase_allusers/', {
              params:{name : '강',id : 'kang'},
            })
            .then(function(response) {
            console.log(response);
            self.desserts = response.data;

            console.log("555555555555555555555555555");
            })
            .catch(function(error) {
            console.log(error);
            });
    },
    showRowInfo : function(event, { item }){
      //document.location = "/usermanage/validation-form";
      //Router.location = "/usermanage/validation-form";
      this.$router.push({ name: '사용자등록', params: { user_id: item.user_id }, })

      //router.push('/usermanage/validation-form') // 이동 위치를 입력
      //router.push({ name: 'SiteList' }) // 해당하는 라우터 이름으로 이동
      //router.push({ path: '/siteList' }) // 해당하는 pathname을 입력하여 이동
    },
    newUsers : function(){
      this.$router.push({ name: '사용자등록', params: { user_id: '' }, })
    }    
  }

}

</script>
<style lang="">

</style>
