<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        수강 등록
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
                label="수강ID"
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
                label="수강생성명"
                name="user_nm"
                :error-messages="errors"
              />
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="class_ym"
              :rules="{
                required: true,
                max: 20
              }"
            >
              <v-text-field
                v-model="class_ym"
                :counter="20"
                label="수강년월"
                name="class_ym"
                :error-messages="errors"
              />
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="sports"
              :rules="{
                required: false,
                max: 20
              }"
            >
              <v-text-field
                v-model="sports"
                :counter="1"
                label="종목"
                name="sports"
                :error-messages="errors"
              />
          </validation-provider>   

          <validation-provider
              v-slot="{ errors }"
              name="sports_nm"
              :rules="{
                required: false,
                max: 20
              }"
            >
              <v-text-field
                v-model="sports_nm"
                :counter="1"
                label="종목명"
                name="sports_nm"
                :error-messages="errors"
              />
            </validation-provider>      

            <validation-provider
              v-slot="{ errors }"
              name="coatch_id"
              :rules="{
                required: true,
                max: 30
              }"
            >
              <v-text-field
                v-model="coatch_id"
                :counter="20"
                label="코치아이디"
                name="coatch_id"
                :error-messages="errors"
              />
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="coatch_nm"
              :rules="{
                required: true,
                max: 20
              }"
            >
              <v-text-field
                v-model="coatch_nm"
                :counter="20"
                label="코치이름"
                name="coatch_nm"
                :error-messages="errors"
              />
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="center_id"
              :rules="{
                required: false,
                max: 20
              }"
            >
              <v-text-field
                v-model="center_id"
                :counter="1"
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
                max: 20
              }"
            >
              <v-text-field
                v-model="center_nm"
                :counter="1"
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
                max: 20
              }"
            >
              <v-text-field
                v-model="center_detail_nm"
                :counter="1"
                label="센터상세명"
                name="center_detail_nm"
                :error-messages="errors"
              />
            </validation-provider>  

            <validation-provider
              v-slot="{ errors }"
              name="lecture_doc_key"
              :rules="{
                required: false,
                max: 30
              }"
            >
              <v-text-field
                v-model="lecture_doc_key"
                :counter="1"
                label="강의KEY"
                name="lecture_doc_key"
                :error-messages="errors"
              />
            </validation-provider>  

            <validation-provider
              v-slot="{ errors }"
              name="lecture_nm"
              :rules="{
                required: false,
              }"
            >
              <v-text-field
                v-model="lecture_nm"
                :counter="50"
                label="강의명"
                name="lecture_nm"
                :error-messages="errors"
              />
            </validation-provider> 

            <validation-provider
              v-slot="{ errors }"
              name="lecture_start_dt"
              :rules="{
                required: false,
              }"
            >
              <v-text-field
                v-model="lecture_start_dt"
                :counter="50"
                label="강의시작일자"
                name="lecture_start_dt"
                :error-messages="errors"
              />
            </validation-provider>  

            <validation-provider
              v-slot="{ errors }"
              name="lecture_day_week"
              :rules="{
                required: false,
              }"
            >
              <v-text-field
                v-model="lecture_day_week"
                :counter="50"
                label="강의요일"
                name="lecture_day_week"
                :error-messages="errors"
              />
            </validation-provider>  

            <validation-provider
              v-slot="{ errors }"
              name="guarantee_count"
              :rules="{
                required: false,
              }"
            >
              <v-text-field
                v-model="guarantee_count"
                :counter="50"
                label="보장횟수"
                name="guarantee_count"
                :error-messages="errors"
              />
            </validation-provider> 

            <validation-provider
              v-slot="{ errors }"
              name="lecture_fee"
              :rules="{
                required: false,
              }"
            >
              <v-text-field
                v-model="lecture_fee"
                :counter="50"
                label="강의료"
                name="lecture_fee"
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
                :counter="50"
                label="납부일자"
                name="payment_dt"
                :error-messages="errors"
              />
            </validation-provider>             

            <validation-provider
              v-slot="{ errors }"
              name="class_start_dt"
              :rules="{
                required: false,
              }"
            >
              <v-text-field
                v-model="class_start_dt"
                :counter="50"
                label="수강시작일자"
                name="class_start_dt"
                :error-messages="errors"
              />
            </validation-provider>   
            
            <validation-provider
              v-slot="{ errors }"
              name="class_end_dt"
              :rules="{
                required: false,
              }"
            >
              <v-text-field
                v-model="class_end_dt"
                :counter="50"
                label="수강종료일자"
                name="class_end_dt"
                :error-messages="errors"
              />
            </validation-provider>      

            <validation-provider
              v-slot="{ errors }"
              name="class_day_week"
              :rules="{
                required: false,
              }"
            >
              <v-text-field
                v-model="class_day_week"
                :counter="50"
                label="수강요일"
                name="class_day_week"
                :error-messages="errors"
              />
            </validation-provider>  

            <validation-provider
              v-slot="{ errors }"
              name="class_time"
              :rules="{
                required: false,
              }"
            >
              <v-text-field
                v-model="class_time"
                :counter="50"
                label="수강시간"
                name="class_time"
                :error-messages="errors"
              />
            </validation-provider>  
            
            <validation-provider
              v-slot="{ errors }"
              name="class_settle_amount"
              :rules="{
                required: false,
              }"
            >
              <v-text-field
                v-model="class_settle_amount"
                :counter="50"
                label="결제금액"
                name="class_settle_amount"
                :error-messages="errors"
              />
            </validation-provider>  

            <validation-provider
              v-slot="{ errors }"
              name="use_count"
              :rules="{
                required: false,
              }"
            >
              <v-text-field
                v-model="use_count"
                :counter="50"
                label="사용횟수"
                name="use_count"
                :error-messages="errors"
              />
            </validation-provider> 

            <validation-provider
              v-slot="{ errors }"
              name="use_date"
              :rules="{
                required: false,
              }"
            >
              <v-text-field
                v-model="use_date"
                :counter="50"
                label="사용일자"
                name="use_date"
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
    user_id:'',
    user_nm:'',
    class_ym:'',
    sports:'',
    sports_nm:'',
    coatch_id:'',
    coatch_nm:'',
    center_id:'',
    center_nm:'',
    center_detail_nm:'',
    lecture_doc_key:'',
    lecture_nm:'',
    lecture_start_dt:'',
    guarantee_count:'',
    lecture_day_week:'',
    lecture_fee:'',
    payment_yn:'',
    payment_dt:'',
    use_count:'',
    use_date:'',
    class_start_dt:'',
    class_end_dt:'',
    class_request_dt:'',
    class_request_id:'',
    class_approval_dt:'',
    class_approval_id:'',
    class_cancel_dt:'',
    class_cancel_id:'',
    class_cancel_approval_dt:'',
    class_cancel_approval_id:'',
    status:'',    
    use_yn: '',
    approval_yn: '',
    class_day_week: '',
    class_time: '',
    class_settle_amount: '',
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
      axios.get('http://www.nacocha.com/nacocha/classes/one/' + this.doc_key)
            .then(function(response) {
            console.log(response.data);

            self.doc_key = response.data[0].doc_key;
            self.user_id = response.data[0].user_id;
            self.user_nm = response.data[0].user_nm;
            self.class_ym = response.data[0].class_ym;
            self.sports = response.data[0].sports;
            self.sports_nm = response.data[0].sports_nm;
            self.coatch_id = response.data[0].coatch_id;
            self.coatch_nm = response.data[0].coatch_nm;
            self.center_id = response.data[0].center_id;
            self.center_nm = response.data[0].center_nm;
            self.center_detail_nm = response.data[0].center_detail_nm;
            self.lecture_doc_key = response.data[0].lecture_doc_key;
            self.lecture_nm = response.data[0].lecture_nm;
            self.lecture_start_dt = response.data[0].lecture_start_dt;
            self.guarantee_count = response.data[0].guarantee_count;
            self.lecture_day_week = response.data[0].lecture_day_week;
            self.lecture_fee = response.data[0].lecture_fee;
            self.payment_yn = response.data[0].payment_yn;
            self.payment_dt = response.data[0].payment_dt;
            self.use_count = response.data[0].use_count;
            self.use_date = response.data[0].use_date;
            self.class_start_dt = response.data[0].class_start_dt;
            self.class_end_dt = response.data[0].class_end_dt;
            self.class_day_week = response.data[0].class_day_week;
            self.class_time = response.data[0].class_time;
            self.class_settle_amount = response.data[0].class_settle_amount;
            self.class_request_dt = response.data[0].class_request_dt;
            self.class_request_id = response.data[0].class_request_id;
            self.class_approval_dt = response.data[0].class_approval_dt;
            self.class_approval_id = response.data[0].class_approval_id;
            self.class_cancel_dt = response.data[0].class_cancel_dt;
            self.class_cancel_id = response.data[0].class_cancel_id;
            self.class_cancel_approval_dt = response.data[0].class_cancel_approval_dt;
            self.class_cancel_approval_id = response.data[0].class_cancel_approval_id;
            self.status = response.data[0].status;

            self.use_yn = response.data[0].use_yn;
            self.approval_yn = response.data[0].approval_yn;
            

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


        axios.post('http://www.nacocha.com/nacocha/classes/insert', 
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
          formData.append('use_yn', this.use_yn);    
          formData.append('approval_yn', this.approval_yn);   
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

        axios.put('http://www.nacocha.com/nacocha/classes/update/' +this.doc_key, 
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
        axios.delete('http://www.nacocha.com/nacocha/classes/delete/' +this.doc_key, 
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
      this.$router.push({ name: '수강관리', params: { }, })
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
