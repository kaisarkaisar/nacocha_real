<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        대여 등록
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
              name="center_id"
              :rules="{
                required: false,
                max: 30
              }"
            >
              <v-text-field
                v-model="center_id"
                :counter="30"
                label="센터ID"
                name="center_id"
                :error-messages="errors"
              />
          </validation-provider>   

          <validation-provider
              v-slot="{ errors }"
              name="center_nm"
              :rules="{
                required: false,
                max: 30
              }"
            >
              <v-text-field
                v-model="center_nm"
                :counter="30"
                label="센터명"
                name="center_nm"
                :error-messages="errors"
              />
            </validation-provider>  

            <validation-provider
              v-slot="{ errors }"
              name="center_detail_nm"
              :rules="{
                required: false,
                max: 30
              }"
            >
              <v-text-field
                v-model="center_detail_nm"
                :counter="30"
                label="센터상세명"
                name="center_detail_nm"
                :error-messages="errors"
              />
            </validation-provider>  

          <validation-provider
              v-slot="{ errors }"
              name="rental_id"
              :rules="{
                required: true,
                max: 30,
              }"
            >
              <v-text-field
                v-model="rental_id"
                :counter="30"
                label="대여회원id"
                name="rental_id"
                :error-messages="errors"
              />
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="rental_nm"
              :rules="{
                required: true,
                max: 30
              }"
            >
              <v-text-field
                v-model="rental_nm"
                :counter="30"
                label="대여회원명"
                name="rental_nm"
                :error-messages="errors"
              />
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="rental_start_dt"
              :rules="{
                required: false,
              }"
            >
              <v-text-field
                v-model="rental_start_dt"
                :counter="20"
                label="대여시작일자"
                name="rental_start_dt"
                :error-messages="errors"
              />
            </validation-provider>  

            <validation-provider
              v-slot="{ errors }"
              name="rental_end_dt"
              :rules="{
                required: false,
              }"
            >
              <v-text-field
                v-model="rental_end_dt"
                :counter="20"
                label="대여종료일자"
                name="rental_end_dt"
                :error-messages="errors"
              />
            </validation-provider>              

            <validation-provider
              v-slot="{ errors }"
              name="rental_start_time"
              :rules="{
                required: false,
              }"
            >
              <v-text-field
                v-model="rental_start_time"
                :counter="20"
                label="대여시작시간"
                name="rental_start_time"
                :error-messages="errors"
              />
            </validation-provider>  

            <validation-provider
              v-slot="{ errors }"
              name="rental_end_time"
              :rules="{
                required: false,
              }"
            >
              <v-text-field
                v-model="rental_end_time"
                :counter="20"
                label="대여종료시간"
                name="rental_end_time"
                :error-messages="errors"
              />
            </validation-provider>  

            <validation-provider
              v-slot="{ errors }"
              name="rental_amount"
              :rules="{
                required: false,
              }"
            >
              <v-text-field
                v-model="rental_amount"
                :counter="20"
                label="대여금액"
                name="rental_amount"
                :error-messages="errors"
              />
            </validation-provider> 


            <validation-provider
              v-slot="{ errors }"
              name="payment_yn"
              :rules="{
                required: false
              }"
            >
              <v-checkbox
                v-model="payment_yn"
                value="Y"
                label="납부여부"
                type="payment_yn"
                required
                :error-messages="errors"
              />            
            </validation-provider>   

            <validation-provider
              v-slot="{ errors }"
              name="payment_dt"
              :rules="{
                required: false,
              }"
            >
              <v-text-field
                v-model="payment_dt"
                :counter="20"
                label="납부일자"
                name="payment_dt"
                :error-messages="errors"
              />
            </validation-provider>   
            
            <validation-provider
              v-slot="{ errors }"
              name="rental_settle_amount"
              :rules="{
                required: false,
              }"
            >
              <v-text-field
                v-model="rental_settle_amount"
                :counter="20"
                label="결제금액"
                name="rental_settle_amount"
                :error-messages="errors"
              />
            </validation-provider>      

            <validation-provider
              v-slot="{ errors }"
              name="approval_yn"
              :rules="{
                required: false
              }"
            >
              <v-checkbox
                v-model="approval_yn"
                value="Y"
                label="승인여부"
                type="approval_yn"
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
                type="use_yn"
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
            <v-btn 
              class="mr-4"    
              @click="clear"
            >
              clear
            </v-btn>
            <v-btn 
              class="mr-4" 
              @click="goback"
            >
              goback
            </v-btn>
            <v-btn 
              class="mr-4" 
              :disabled="invalid"
              @click="godelete"
            >
              delete
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
import Vue3 from 'vue'

Vue3.component('mycomponent', {
  template: 
  '<span>'+
    '<div class="v-input theme--light v-text-field v-text-field--is-booted">'+
      '<div class="v-input__control">'+
        '<div class="v-input__slot">'+
          '<div class="v-v-text-field__slot">'+
            '<label for="center_map" class="v-label v-label--active theme--light error--text" style="left: 0px; right: auto; position: absolute;"></label>'+
            '<input type="text" name="center_map" id="center_map">'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>'+
  '</span>'
})

export default {
  data: () => ({
    doc_key:'',
    center_id:'',
    center_nm:'',
    center_detail_nm:'',
    rental_id:'',
    rental_nm:'',
    rental_start_dt:'',
    rental_end_dt:'',
    rental_start_time:'',
    rental_end_time:'',
    rental_amount:'',
    rental_request_dt:'',
    rental_request_id:'',
    rental_approval_dt:'',
    rental_approval_id:'',
    rental_cancel_dt:'',
    rental_cancel_id:'',
    rental_cancel_approval_dt:'',
    rental_cancel_approval_id:'',
    status:'',
    use_yn:'',
    approval_yn:'',
    payment_yn:'',
    payment_dt:'',
    rental_settle_amount:'',

  }),
  created() {
    console.log('created')
  },
  mounted() { 
    console.log('mounted')
    var self = this;
    this.doc_key = this.$route.params.doc_key;

    if(this.$route.params.doc_key != ""){
      self.fetchOneItem();
    }
    
  },

  methods: {
    submit () {
      this.$refs.observer.validate().then(result => {
        if (result) {          
          if(this.$route.params.doc_key != ""){
            this.goupdate();
          }else{
            this.goinsert();
          }
        } else {
          alert('실패')
        }
      })
    },
    clear () {
       
      this.$refs.observer.reset()
    },
    goback () {
      this.$router.go(-1);
    },
    fetchOneItem : function() {
      var self = this;
      axios.get('http://www.nacocha.com/nacocha/rentals/one/' + this.doc_key)
            .then(function(response) {
            console.log(response.data);

            self.doc_key = response.data[0].doc_key;
            self.center_id = response.data[0].center_id;
            self.center_nm = response.data[0].center_nm;
            self.center_detail_nm = response.data[0].center_detail_nm;
            self.rental_id = response.data[0].rental_id;
            self.rental_nm = response.data[0].rental_nm;
            self.rental_start_dt = response.data[0].rental_start_dt;
            self.rental_end_dt = response.data[0].rental_end_dt;
            self.rental_start_time = response.data[0].rental_start_time;
            self.rental_end_time = response.data[0].rental_end_time;
            self.rental_amount = response.data[0].rental_amount;
            self.rental_request_dt = response.data[0].rental_request_dt;
            self.rental_request_id = response.data[0].rental_request_id;
            self.rental_approval_dt = response.data[0].rental_approval_dt;
            self.rental_approval_id = response.data[0].rental_approval_id;
            self.rental_cancel_dt = response.data[0].rental_cancel_dt;
            self.rental_cancel_id = response.data[0].rental_cancel_id;
            self.rental_cancel_approval_dt = response.data[0].rental_cancel_approval_dt;
            self.rental_cancel_approval_id = response.data[0].rental_cancel_approval_id;
            self.status = response.data[0].status;
            self.use_yn = response.data[0].use_yn;
            self.approval_yn = response.data[0].approval_yn;
            self.payment_yn = response.data[0].payment_yn;
            self.payment_dt = response.data[0].payment_dt;
            self.rental_settle_amount = response.data[0].rental_settle_amount;            

            console.log("fetchUserOne");
            })
            .catch(function(error) {
            console.log(error);
            });
    },
    goinsert : function() {
        var form = document.getElementById('sendForm');
        var formData = new FormData(form);

        
        formData.append('license_img', this.license_img);

        formData.append('status', '요청');        
        formData.append('use_yn', 'N');    
        formData.append('approval_yn', 'N');
        formData.append('payment_yn', this.payment_yn);

        var headers = { 'Content-Type': 'multipart/form-data' };

        // FormData의 key 확인
        for (let key of formData.keys()) {
          console.log("key", key);
        }

        // FormData의 value 확인
        for (let value of formData.values()) {
          console.log("value", value);
        }    


        axios.post('http://www.nacocha.com/nacocha/rentals/insert', 
                formData, headers
                ).then(response => {
                    console.warn(response)
                    this.result = response.data
                    alert('등록되었습니다.');
                    //this.itemList();

                }).catch((ex) => {
                    console.warn("ERROR!!!!! : ",ex)
                })
    },    
    goupdate : function() {
        var self = this;
        var form = document.getElementById('sendForm');
        var formData = new FormData(form);

        if(self.approval_yn == "Y"){
          formData.append('status', '승인');        
          formData.append('use_yn', 'Y');    
          formData.append('approval_yn', 'Y');   
        }else{
          formData.append('status', '요청');        
          formData.append('use_yn', 'N');    
          formData.append('approval_yn', 'N');   
        }   

        formData.append('payment_yn', this.payment_yn);

        var headers = { 'Content-Type': 'multipart/form-data' };

        // FormData의 key 확인
        for (let key of formData.keys()) {
          console.log("key", key);
        }

        // FormData의 value 확인
        for (let value of formData.values()) {
          console.log("value", value);
        }        

        axios.put('http://www.nacocha.com/nacocha/rentals/update/' +this.doc_key, 
              formData, headers
              ).then(response => {
                  console.log(response)
                  this.result = response.data;
                  alert('수정되었습니다.');
                  this.itemList();
              }).catch((ex) => {
                  console.warn("ERROR!!!!! : ",ex)
              })
    },    
    godelete : function() {
        let message = "삭제 하시겠습니까?";
        if(!confirm(message)){
            return;
        }

        var self = this;
        var form = document.getElementById('sendForm');
        var formData = new FormData(form);

        console.log(formData);
        axios.delete('http://www.nacocha.com/nacocha/rentals/delete/' +this.doc_key, 
              formData
              //formData
              ).then(response => {
                  console.log(response)
                  this.result = response.data;
                  alert('삭제되었습니다.');
                  this.itemList();
              }).catch((ex) => {
                  console.warn("ERROR!!!!! : ",ex)
              })
    },   
    license_img_File : function(file_list) {
      const formData = new FormData()
      for (const file of file_list) {
        formData.append('license_img', file)
      }    
    },
    center_img_File : function(file_list) {
      const formData = new FormData()
      for (const file of file_list) {
        formData.append('center_img', file)
      }    
    },
    contract_img_File : function(file_list) {
      const formData = new FormData()
      for (const file of file_list) {
        formData.append('contract_img', file)
      }    
    },
    itemList : function(){
      this.$router.push({ name: '대여관리', params: { }, })
    } ,
    mycomponent_add () {
			this.mycomponents.push('mycomponent')
		},
    mycomponent_delete () {
			this.mycomponents.pop('mycomponent')
		}

  },

    

}
</script>
<style lang="">

</style>
