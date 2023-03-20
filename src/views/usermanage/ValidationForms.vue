<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        사용자등록
      </v-card-title>
      <v-card-text>
        <validation-observer
          ref="observer"
          v-slot="{ invalid }"
        >
          <v-form
            id="sendForm"
            ref="form"
            enctype="multipart/form-data"
            @submit.prevent="submit"
          >
            <validation-provider
              v-slot="{ errors }"
              name="user_id"
              :rules="{
                required: true,
                max: 30,
                email: true
              }"
            >
              <v-text-field
                v-model="user_id"
                :counter="20"
                label="user_id"
                name="user_id"
                :error-messages="errors"
              />
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="user_nm"
              :rules="{
                required: true,
                max: 20
              }"
            >
              <v-text-field
                v-model="user_nm"
                :counter="20"
                label="user_nm"
                name="user_nm"
                :error-messages="errors"
              />
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="user_hp"
              :rules="{
                required: false,
                numeric: true,
                digits: 11,
              }"
            >
              <v-text-field
                v-model="user_hp"
                :counter="11"
                label="user_hp"
                name="user_hp"
                :error-messages="errors"
              />
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="user_tel"
              :rules="{
                required: false,
                numeric: true,
              }"
            >
              <v-text-field
                v-model="user_tel"
                :counter="11"
                label="user_tel"
                name="user_tel"
                :error-messages="errors"
              />
            </validation-provider>     
            
            <validation-provider
              v-slot="{ errors }"
              name="user_zip_no"
              :rules="{
                required: false,
                numeric: true,
                digits: 5,
              }"
            >
              <v-text-field
                v-model="user_zip_no"
                :counter="11"
                label="user_zip_no"
                name="user_zip_no"
                :error-messages="errors"
              />
            </validation-provider>              

            <validation-provider
              v-slot="{ errors }"
              name="user_addr_1"
              :rules="{
                max: 50
              }"
            >
              <v-text-field
                v-model="user_addr_1"
                :counter="20"
                label="user_addr_1"
                name="user_addr_1"
                :error-messages="errors"
              />
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="user_addr_2"
              :rules="{
                max: 50
              }"
            >
              <v-text-field
                v-model="user_addr_2"
                :counter="20"
                label="user_addr_2"
                name="user_addr_2"
                :error-messages="errors"
              />
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="user_pwd"
              :rules="{
                max: 50
              }"
            >
              <v-text-field
                v-model="user_pwd"
                :counter="20"
                label="user_pwd"
                name="user_pwd"
                :error-messages="errors"
              />
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="sport_items"
              :rules="{
                max: 50
              }"
            >
              <v-text-field
                v-model="sport_items"
                :counter="20"
                label="sport_items"
                name="sport_items"
                :error-messages="errors"
              />
            </validation-provider>  

            <validation-provider
              v-slot="{ errors }"
              name="personal_info_agree"
              :rules="{
                required: false
              }"
            >
              <v-checkbox
                v-model="personal_info_agree"
                value="Y"
                label="personal_info_agree"
                type="checkbox"
                required
                :error-messages="errors"
              />
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="member_terms_agree"
              :rules="{
                required: false
              }"
            >
              <v-checkbox
                v-model="member_terms_agree"
                value="Y"
                label="회원약관동의"
                type="checkbox"
                required
                :error-messages="errors"
              />
            </validation-provider>      
            
            <validation-provider
              v-slot="{ errors }"
              name="media_recp_agree"
              :rules="{
                required: false
              }"
            >
              <v-checkbox
                v-model="media_recp_agree"
                value="Y"
                label="문자/메일수신동의"
                type="checkbox"
                required
                :error-messages="errors"
              />
            </validation-provider>   
            
            <validation-provider
              v-slot="{ errors }"
              name="use_yn"
              :rules="{
                required: false
              }"
            >
              <v-checkbox
                v-model="use_yn"
                value="Y"
                label="사용여부"
                type="checkbox"
                required
                :error-messages="errors"
              />
            </validation-provider> 

            <v-btn
              class="mr-4"
              type="submit"
              color="primary"
              :disabled="invalid"
            >
              submit
            </v-btn>
            <v-btn @click="clear">
              clear
            </v-btn>

            <v-btn @click="goback">
              goback
            </v-btn>
          </v-form>
        </validation-observer>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
//axios 라이브러리 import
import axios from 'axios'

export default {
  data: () => ({
    customValue: null,
    user_id:'',
    user_nm: '',
    user_hp: '',
    user_tel: '',
    user_pwd: '',
    user_zip_no: '',
    user_addr_1: '',
    user_addr_2: '',
    user_join_dt: '',
    media_recp_agree: '',
    personal_info_agree: '',
    member_terms_agree: '',
    sport_items: '',
    user_type: '',
    use_yn: '',
    items: [
      { text: '일반회원', value: '01' },
      { text: '코치', value: '02' },
      { text: '센터장', value: '03' },
    ],
    checkbox: '',
    doc_key:'',
  }),
  created() {
    console.log('created')
  },
  mounted() { 
    var self = this;
    this.doc_key = this.$route.params.doc_key;
    self.fetchUserOne();
  },

  methods: {
    submit () {
      this.$refs.observer.validate().then(result => {
        if (result) {          
          if(this.$route.params.doc_key != ""){
            this.updateUser();
          }else{
            this.insertUser();
          }
        } else {
          alert('실패')
        }
      })
    },
    clear () {
      this.user_id ='';
      this.user_nm ='';
      this.user_hp ='';
      this.user_tel ='';
      this.user_pwd ='';
      this.user_zip_no ='';
      this.user_addr_1 ='';
      this.user_addr_2 ='';
      
      this.$refs.observer.reset()
    },
    goback () {
      this.$router.go(-1);
    },
    fetchUserOne : function() {
      var self = this;
      axios.get('http://www.nacocha.com/nacocha/user/one/' + this.doc_key)
            .then(function(response) {
            console.log(response.data);
            self.user_id = response.data[0].user_id;
            self.user_nm = response.data[0].user_nm;
            self.user_hp = response.data[0].user_hp;
            self.user_tel = response.data[0].user_tel;
            self.user_pwd = response.data[0].user_pwd;
            self.user_zip_no = response.data[0].user_zip_no;
            self.user_addr_1 = response.data[0].user_addr_1;
            self.user_addr_2 = response.data[0].user_addr_2;
            self.sport_items = response.data[0].sport_items;
            //self.user_join_dt = response.data.user_nm;
            self.personal_info_agree = response.data[0].personal_info_agree;
            self.media_recp_agree = response.data[0].media_recp_agree;
            self.member_terms_agree = response.data[0].member_terms_agree;
            self.use_yn = response.data[0].use_yn;

            self.doc_key = response.data[0].doc_key;

            console.log("fetchUserOne");
            })
            .catch(function(error) {
            console.log(error);
            });
    },
    insertUser : function() {
        var form = document.getElementById('sendForm');
        var formData = new FormData(form);
             
        formData.append('use_yn', this.use_yn);    
        formData.append('personal_info_agree', this.personal_info_agree);
        formData.append('media_recp_agree', this.media_recp_agree);
        formData.append('member_terms_agree', this.member_terms_agree);

        axios.post('http://www.nacocha.com/nacocha/user/insert', 
                formData
                ).then(response => {
                    console.warn(response)
                    this.result = response.data
                    alert('등록되었습니다.');
                    this.userList();

                }).catch((ex) => {
                    console.warn("ERROR!!!!! : ",ex)
                })
    },
    updateUser : function() {
        var form = document.getElementById('sendForm');
        var formData = new FormData(form);

        // FormData의 key 확인
        for (let key of formData.keys()) {
          console.log("key", key);
        }

        // FormData의 value 확인
        for (let value of formData.values()) {
          console.log("value", value);
        }        

        console.log(formData);
        axios.put('http://www.nacocha.com/nacocha/user/update/' +this.doc_key, 
              formData
              ).then(response => {
                  console.log(response)
                  this.result = response.data;
                  alert('수정되었습니다.');
                  this.userList();
              }).catch((ex) => {
                  console.warn("ERROR!!!!! : ",ex)
              })
    },    
    userList : function(){
      this.$router.push({ name: '사용자관리', params: { }, })
    } 
  },

    

}
</script>
<style lang="">

</style>
