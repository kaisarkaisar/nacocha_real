<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        강의 리스트
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

      <div>&nbsp;&nbsp;</div>

      <v-checkbox
        v-model="copy_yn"
        value="Y"
        label="복제사용"
        type="checkbox"
      />

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
          text: '종목',
          align: 'start',
          sortable: true,
          value: 'sports_nm',
        },
        { text: '코치이름', value: 'coatch_nm' },
        { text: '레슨타입', value: 'lecture_type' },
        { text: '레슨명', value: 'lecture_nm' },
        { text: '회원권구분', value: 'membership_group' },
        { text: '강의시작일자', value: 'lecture_start_dt' },
        { text: '강의종료일자', value: 'lecture_end_dt' },
        { text: '강의료', value: 'lecture_fee' },
        { text: '레슨여부', value: 'use_yn' },
        { text: '문서키', value: 'doc_key', display:'none'},
      ],
      desserts: [],
      copy_yn:'',
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
      //axios.get('http://www.nacocha.com/nacocha/lectures/all/', {
      axios.get('http://www.nacocha.com/nacocha/lectures/all/', {
            })
            .then(function(response) {
              console.log("response", response);
              self.desserts = response.data;
            })
            .catch(function(error) {
            console.log(error);
            });
    },
    showRowInfo : function(event, { item }){
      this.$router.push({ name: '강의등록', params: { doc_key: item.doc_key, copy_yn: this.copy_yn }, })
    },
    newUsers : function(){
      this.$router.push({ name: '강의등록', params: { doc_key: '' }, })
    }    
  }

}

</script>
<style lang="">

</style>
