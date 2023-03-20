<template>
  <v-container fluid>

    <v-card>
      <v-card-title>
        수강 리스트
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          label="검색"
        />        
      </v-card-title>

      <v-card-text class="pa-0">
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="-1"
          class="elevation-1"
          :search="search"
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
      search:'',
      headers: [
        {
          text: '회원이름',
          align: 'start',
          sortable: false,
          value: 'user_nm',
        },
        { text: '종목명', value: 'sports_nm' },
        { text: '강사명', value: 'coatch_nm' },
        { text: '센터명', value: 'center_nm' },
        { text: '강의명', value: 'lecture_nm' },
        { text: '요청상태', value: 'status' },
        { text: '요청일자', value: 'class_request_dt' },        
        { text: '승인일자', value: 'class_approval_dt' },
        { text: '시작일자', value: 'class_start_dt' },
        { text: '종료일자', value: 'class_end_dt' },
        { text: '납부여부', value: 'payment_yn' },
        { text: '문서키', value: 'doc_key', display:'none'},
      ],
      desserts: [ ],
      
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
      //axios.get('http://www.nacocha.com/nacocha/classes/all/', {
      axios.get('http://www.nacocha.com/nacocha/classes/all/', {
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
      this.$router.push({ name: '수강등록', params: { doc_key: item.doc_key }, })
    },
    newUsers : function(){
      this.$router.push({ name: '수강등록', params: { doc_key: '' }, })
    }    
  }

}

</script>
<style lang="">

</style>
