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
          text: '사용자ID',
          align: 'start',
          sortable: false,
          value: 'user_id',
        },
        { text: '사용자명', value: 'user_nm' },
        { text: '전화번호', value: 'user_hp' },
        { text: '주소', value: 'user_addr_1'},
        { text: '가입일자', value: 'join_dt' },
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
    console.log(this.msg);
  },
  methods: {
    fetchUsers : function() {
      var self = this;
      //axios.get('http://www.nacocha.com/nacocha/user/all/', {
      axios.get('http://www.nacocha.com/nacocha/user/all/', {
            })
            .then(function(response) {
              console.log(response);
              self.desserts = response.data;
            })
            .catch(function(error) {
              console.log(error);
            });
    },
    showRowInfo : function(event, { item }){
      this.$router.push({ name: '사용자등록', params: { doc_key: item.doc_key }, })
    },
    newUsers : function(){
      this.$router.push({ name: '사용자등록', params: { doc_key: '' }, })
    }    
  }

}

</script>
<style lang="">

</style>
