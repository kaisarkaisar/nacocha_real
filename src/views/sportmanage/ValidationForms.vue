<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        Form Validation
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
                required: true,
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
                required: true,
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
                required: true,
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
              name="user_file"    
              :rules="{
                required: false,
                max: 100
              }"
            >
              <v-file-input
                id="user_file"
                ref="user_file"
                v-model="user_file"
                label="user_file"
                name="user_file"
                :error-messages="errors"
                @change="getImgPath"
              />
            </validation-provider>          
            
            <!-- <v-item>
              <a :href="user_file">{{ user_file }}</a>
            </v-item> -->
            
            <!-- <v-card v-if="user_file.length > 0" class="mx-auto">
              <v-list>
                <v-subheader>List of Files</v-subheader>
                <v-list-item-group color="primary">
                  <v-list-item v-for="(file, index) in user_file" :key="index">
                    <a :href="user_file">{{ user_file }}</a>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>             -->
               

            <validation-provider
              v-slot="{ errors }"
              name="select"
              rules="required"
            >
              <v-select
                v-model="select"
                :items="items"
                label="Select"
                :error-messages="errors"
              />
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="checkbox"
              :rules="{
                required: true
              }"
            >
              <v-checkbox
                v-model="checkbox"
                value="1"
                label="Option"
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
    sport_items: '',
    user_file:[],
    select: null,
    items: [
      { text: '아이템1', value: 1 },
      { text: '아이템2', value: 2 },
      { text: '아이템3', value: 3 },
    ],
    checkbox: null,
  }),
  created() {
    console.log('created')
  },
  mounted() { 
    var self = this;
    this.user_id = this.$route.params.user_id;
    self.fetchUserOne();
  },

  methods: {
    submit () {
      this.$refs.observer.validate().then(result => {
        if (result) {          
          if(this.$route.params.user_id != ""){
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
    fetchUserOne : function() {
      var self = this;
      axios.get('http://localhost:9099/user/firebase_onlyuser/' + this.user_id)
            .then(function(response) {
            console.log(response.data);
            console.log("user_nm", response.data[0].user_nm);
            console.log("user_file", response.data[0].user_file);
            self.user_nm = response.data[0].user_nm;
            self.user_hp = response.data[0].user_hp;
            self.user_tel = response.data[0].user_tel;
            self.user_pwd = response.data[0].user_pwd;
            self.user_zip_no = response.data[0].user_zip_no;
            self.user_addr_1 = response.data[0].user_addr_1;
            self.user_addr_2 = response.data[0].user_addr_2;
            self.sport_items = response.data[0].sport_items;
            self.user_file = response.data[0].user_file;
            //self.user_join_dt = response.data.user_nm;
            //self.media_recp_agree = response.data.user_nm;
            //self.personal_info_agree = response.data.user_nm;

            console.log("fetchUserOne");
            })
            .catch(function(error) {
            console.log(error);
            });
    },
    insertUser : function() {
        var form = document.getElementById('sendForm');
        var formData = new FormData(form);
        console.log("formData", formData);
        axios.post('http://localhost:9099/user/firebase_insert', 
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
        var self = this;
        var form = document.getElementById('sendForm');
        var formData = new FormData(form);
        /*
        console.log("this.$refs.user_file.name be", this.user_file.name);
        
        formData.append('user_filename', this.user_file.name);

        console.log("this.$refs.user_file.name af", this.user_file.name);

        var headers = { 'Content-Type': 'multipart/form-data' };
        */
        var headers = { 'Content-Type': 'multipart/form-data' };

        // FormData의 key 확인
        for (let key of formData.keys()) {
          console.log("key", key);
        }

        // FormData의 value 확인
        for (let value of formData.values()) {
          console.log("value", value);
        }        

        console.log(formData);
        axios.put('http://localhost:9099/user/firebase_update/' +this.user_id, 
              formData, headers
              //formData
              ).then(response => {
                  console.log(response)
                  this.result = response.data;
                  alert('수정되었습니다.');
                  this.userList();
              }).catch((ex) => {
                  console.warn("ERROR!!!!! : ",ex)
              })
    },    
    getImgPath : function(e) {
      var self = this;
      console.log("aaaaaaaa", e);
      console.log("user_file", self.user_file.name);
      //self.user_file = self.$refs.user_file.files[0];
      //self.user_file = e;
      //this.data.push({ imgpath: img });
    },
    userList : function(){
      this.$router.push({ name: '사용자관리', params: { }, })
    } 
  },

    

}
</script>
<style lang="">

</style>
