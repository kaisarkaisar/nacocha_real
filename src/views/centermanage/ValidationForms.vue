<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        센터 등록
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
              name="nm"
              :rules="{
                required: true,
                max: 20
              }"
            >
              <v-text-field
                v-model="nm"
                :counter="1"
                label="센터명"
                name="nm"
                :error-messages="errors"
              />
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="phone"
              :rules="{
                required: false,
                numeric: false,
              }"
            >
              <v-text-field
                v-model="phone"
                :counter="11"
                label="센터연락처"
                name="phone"
                :error-messages="errors"
              />
            </validation-provider>
            
            <validation-provider
              v-slot="{ errors }"
              name="zip_no"
              :rules="{
                required: false,
                numeric: true,
              }"
            >
              <v-text-field
                v-model="zip_no"
                :counter="5"
                label="우편번호"
                name="zip_no"
                :error-messages="errors"
              />
            </validation-provider>              

            <validation-provider
              v-slot="{ errors }"
              name="address1"
              :rules="{
                max: 50
              }"
            >
              <v-text-field
                v-model="address1"
                :counter="1"
                label="주소1"
                name="address1"
                :error-messages="errors"
              />
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="address2"
              :rules="{
                max: 50
              }"
            >
              <v-text-field
                v-model="address2"
                :counter="1"
                label="주소2"
                name="address2"
                :error-messages="errors"
              />
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="ownership"
              :rules="{
                max: 20
              }"
            >
              <v-text-field
                v-model="ownership"
                :counter="1"
                label="소유자ID"
                name="ownership"
                :error-messages="errors"
              />
            </validation-provider>


            <validation-provider
              v-slot="{ errors }"
              name="ownership_nm"
              :rules="{
                max: 20
              }"
            >
              <v-text-field
                v-model="ownership_nm"
                :counter="1"
                label="소유자이름"
                name="ownership_nm"
                :error-messages="errors"
              />
            </validation-provider>            

            <validation-provider
              v-slot="{ errors }"
              name="busi_license_number"
              :rules="{
                max: 20
              }"
            >
              <v-text-field
                v-model="busi_license_number"
                :counter="1"
                label="사업자등록번호"
                name="busi_license_number"
                :error-messages="errors"
              />
            </validation-provider>   

            <validation-provider
              v-slot="{ errors }"
              name="content"
              :rules="{
              }"
            >
              <v-text-field
                v-model="content"
                :counter="1"
                label="센터소개"
                name="content"
                :error-messages="errors"
              />
            </validation-provider> 

            <validation-provider
              v-slot="{ errors }"
              name="license_img"    
              :rules="{
                required: false,
                max: 100
              }"
            >
              <v-file-input
                id="license_img"
                ref="license_img"
                v-model="license_img"
                label="사업자등록증"
                name="license_img"
                multiple
                :error-messages="errors"
                @change="license_img_File"
              />
            </validation-provider>     

            <validation-provider
              v-slot="{ errors }"
              name="center_img"    
              :rules="{
                required: false,
                max: 100
              }"
            >
              <v-file-input
                id="center_img"
                ref="center_img"
                v-model="center_img"
                label="센터사진"
                name="center_img"
                multiple
                :error-messages="errors"
                @change="center_img_File"
              />
            </validation-provider>      
            
            <validation-provider
              v-slot="{ errors }"
              name="contract_img"    
              :rules="{
                required: false,
                max: 100
              }"
            >
              <v-file-input
                id="contract_img"
                ref="contract_img"
                v-model="contract_img"
                label="임대차계약서"
                name="contract_img"
                multiple
                :error-messages="errors"
                @change="contract_img_File"
              />
            </validation-provider>   
            
            <v-btn 
              class="mr-4" 
              :disabled="invalid"
              @click="mycomponent_add"
            >
              센터안내도추가
            </v-btn>      
            <v-btn 
              class="mr-4" 
              :disabled="invalid"
              @click="mycomponent_delete"
            >
              센터안내도삭제
            </v-btn>      

            <div v-for="(k,i) in mycomponents" :key="i" :data-index="i">
              <mycomponent></mycomponent> 
            </div>

            <div><br></div>

            <v-btn 
              class="mr-4" 
              :disabled="invalid"
              @click="mycomponent2_add"
            >
              센터대여추가
            </v-btn>      
            <v-btn 
              class="mr-4" 
              :disabled="invalid"
              @click="mycomponent2_delete"
            >
              센터대여삭제
            </v-btn>      
            
            <div v-for="(m,n) in mycomponents2" :key="n" :data-index="n">
              <mycomponent2></mycomponent2> 
            </div>            
            
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
          '<div class="v-text-field__slot">'+
            '<label for="center_map" class="v-label theme--light" style="left: 0px; right: auto; position: absolute;"></label>'+
            '<input name="center_map" id="center_map" type="text">'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>'+
  '</span>'
});

Vue3.component('mycomponent2', {
  template: 
  '<span>'+
    '<div class="v-input v-input--is-label-active v-input--is-dirty theme--light v-text-field v-text-field--is-booted">'+

      '<div class="v-input__control">'+
        '<div class="v-input__slot">'+
          '<div class="v-text-field__slot">'+
          '<label for="rental_place" class="v-label v-label--active theme--light" style="left: 0px; right: auto; position: absolute;">대여장소</label>'+
          '<input name="rental_place" id="rental_place" type="text" style="background-color:#F5D042">'+
          '</div>'+
        '</div>'+
        '<div class="v-text-field__details">'+
          '<div class="v-messages theme--light">'+
            '<div class="v-messages__wrapper"></div>'+
          '</div>'+
          '<div class="v-counter theme--light"></div>'+
        '</div>'+
      '</div>'+

      '<div class="v-v-text-field__slot">'+
        '&nbsp;&nbsp'+
      '</div>'+          

      '<div class="v-input__control">'+
        '<div class="v-input__slot">'+
          '<div class="v-text-field__slot">'+
          '<label for="rental_capacity" class="v-label v-label--active theme--light" style="left: 0px; right: auto; position: absolute;">정원</label>'+
          '<input name="rental_capacity" id="rental_capacity" type="text" style="background-color:#CED46A">'+
          '</div>'+
        '</div>'+
        '<div class="v-text-field__details">'+
          '<div class="v-messages theme--light">'+
            '<div class="v-messages__wrapper"></div>'+
          '</div>'+
          '<div class="v-counter theme--light"></div>'+
        '</div>'+
      '</div>'+      

      '<div class="v-v-text-field__slot">'+
        '&nbsp;&nbsp'+
      '</div>'+          

      '<div class="v-input__control">'+
        '<div class="v-input__slot">'+
          '<div class="v-text-field__slot">'+
          '<label for="rental_fee" class="v-label v-label--active theme--light" style="left: 0px; right: auto; position: absolute;">대여비용</label>'+
          '<input name="rental_fee" id="rental_fee" type="text" style="background-color:#F5D042">'+
          '</div>'+
        '</div>'+
        '<div class="v-text-field__details">'+
          '<div class="v-messages theme--light">'+
            '<div class="v-messages__wrapper"></div>'+
          '</div>'+
          '<div class="v-counter theme--light"></div>'+
        '</div>'+
      '</div>'+    

      '<div class="v-v-text-field__slot">'+
        '&nbsp;&nbsp'+
      '</div>'+          

      '<div class="v-input__control">'+
        '<div class="v-input__slot">'+
          '<div class="v-text-field__slot">'+
          '<label for="rental_day_week" class="v-label v-label--active theme--light" style="left: 0px; right: auto; position: absolute;">대여가능요일</label>'+
          '<input name="rental_day_week" id="rental_day_week" type="text" style="background-color:#CED46A">'+
          '</div>'+
        '</div>'+
        '<div class="v-text-field__details">'+
          '<div class="v-messages theme--light">'+
            '<div class="v-messages__wrapper"></div>'+
          '</div>'+
          '<div class="v-counter theme--light"></div>'+
        '</div>'+
      '</div>'+ 

      '<div class="v-v-text-field__slot">'+
        '&nbsp;&nbsp'+
      '</div>'+          

      '<div class="v-input__control">'+
        '<div class="v-input__slot">'+
          '<div class="v-text-field__slot">'+
          '<label for="rental_start_time" class="v-label v-label--active theme--light" style="left: 0px; right: auto; position: absolute;">대여가능시작시간</label>'+
          '<input name="rental_start_time" id="rental_start_time" type="text" style="background-color:#F5D042">'+
          '</div>'+
        '</div>'+
        '<div class="v-text-field__details">'+
          '<div class="v-messages theme--light">'+
            '<div class="v-messages__wrapper"></div>'+
          '</div>'+
          '<div class="v-counter theme--light"></div>'+
        '</div>'+
      '</div>'+ 

      '<div class="v-v-text-field__slot">'+
        '&nbsp;&nbsp'+
      '</div>'+          

      '<div class="v-input__control">'+
        '<div class="v-input__slot">'+
          '<div class="v-text-field__slot">'+
          '<label for="rental_end_time" class="v-label v-label--active theme--light" style="left: 0px; right: auto; position: absolute;">대여가능종료시간</label>'+
          '<input name="rental_end_time" id="rental_end_time" type="text" style="background-color:#CED46A">'+
          '</div>'+
        '</div>'+
        '<div class="v-text-field__details">'+
          '<div class="v-messages theme--light">'+
            '<div class="v-messages__wrapper"></div>'+
          '</div>'+
          '<div class="v-counter theme--light"></div>'+
        '</div>'+
      '</div>'+ 

      '<div class="v-v-text-field__slot">'+
        '&nbsp;&nbsp'+
      '</div>'+          

      '<div class="v-input__control">'+
        '<div class="v-input__slot">'+
          '<div class="v-text-field__slot">'+
          '<label for="rental_time" class="v-label v-label--active theme--light" style="left: 0px; right: auto; position: absolute;">대여가능시간(1회당)</label>'+
          '<input name="rental_time" id="rental_time" type="text" style="background-color:#F5D042">'+
          '</div>'+
        '</div>'+
        '<div class="v-text-field__details">'+
          '<div class="v-messages theme--light">'+
            '<div class="v-messages__wrapper"></div>'+
          '</div>'+
          '<div class="v-counter theme--light"></div>'+
        '</div>'+
      '</div>'+      

      '<div class="v-v-text-field__slot">'+
        '&nbsp;&nbsp'+
      '</div>'+          

      '<div class="v-input__control">'+
        '<div class="v-input__slot">'+
          '<div class="v-text-field__slot">'+
          '<label for="rental_content" class="v-label v-label--active theme--light" style="left: 0px; right: auto; position: absolute;">대여안내내용</label>'+
          '<input name="rental_content" id="rental_content" type="text" style="background-color:#CED46A">'+
          '</div>'+
        '</div>'+
        '<div class="v-text-field__details">'+
          '<div class="v-messages theme--light">'+
            '<div class="v-messages__wrapper"></div>'+
          '</div>'+
          '<div class="v-counter theme--light"></div>'+
        '</div>'+
      '</div>'+  

      '<div class="v-v-text-field__slot">'+
        '&nbsp;&nbsp'+
      '</div>'+          

      '<div class="v-input__control">'+
        '<div class="v-input__slot">'+
          '<div class="v-text-field__slot">'+
          '<label for="sports" class="v-label v-label--active theme--light" style="left: 0px; right: auto; position: absolute;">종목명</label>'+
          '<input name="sports" id="sports" type="text" style="background-color:#F5D042">'+
          '</div>'+
        '</div>'+
        '<div class="v-text-field__details">'+
          '<div class="v-messages theme--light">'+
            '<div class="v-messages__wrapper"></div>'+
          '</div>'+
          '<div class="v-counter theme--light"></div>'+
        '</div>'+
      '</div>'+  

      '<div class="v-v-text-field__slot">'+
        '&nbsp;&nbsp'+
      '</div>'+  

      '<div class="v-input__control">'+
        '<div class="v-input__slot">'+
          '<div class="v-text-field__slot">'+
          '<label for="rental_available" class="v-label v-label--active theme--light" style="left: 0px; right: auto; position: absolute;">렌탈여부</label>'+
          '<input name="rental_available" id="rental_available" type="text" style="background-color:#F5D042">'+
          '</div>'+
        '</div>'+
        '<div class="v-text-field__details">'+
          '<div class="v-messages theme--light">'+
            '<div class="v-messages__wrapper"></div>'+
          '</div>'+
          '<div class="v-counter theme--light"></div>'+
        '</div>'+
      '</div>'+  



  '</span>'
});

/*
Vue3.component('mycomponent', {
  template: 
  '<span>'+
    '<div class="v-input theme--light v-text-field v-text-field--is-booted">'+
      '<div class="v-input__control">'+
        '<div class="v-input__slot">'+
          '<div class="v-text-field__slot">'+
            '<label for="input-9999" class="v-label theme--light" style="left: 0px; right: auto; position: absolute;"></label>'+
            '<input name="center_map" id="input-9999" type="text">'+
          '</div>'+
        '</div>'+
        '<div class="v-text-field__details">'+
          '<div class="v-messages theme--light">'+
            '<div class="v-messages__wrapper">'+'</div>'+
          '</div>'+
          '<div class="v-counter theme--light"></div>'+
        '</div>'+
      '</div>'+
    '</div>'+
  '</span>'
});


Vue3.component('mycomponent', {
  template: 
  '<span>'+
    '<div class="v-input v-input--is-label-active v-input--is-dirty theme--light v-text-field v-text-field--is-booted">'+
      '<div class="v-input__control">'+
        '<div class="v-input__slot">'+
          '<div class="v-v-text-field__slot">'+
            '<label for="center_map" class="v-label v-label--active theme--light error--text" style="left: 0px; right: auto; position: absolute;">aa</label>'+
            '<input type="text" name="center_map" id="center_map">'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>'+
  '</span>'
});
*/

export default {
  data: () => ({
    doc_key:'',
    id: '',
    nm: '',
    phone: '',
    zip_no: '',
    address1: '',
    address2: '',
    busi_license_number: '',
    ownership: '',
    ownership_nm: '',
    license_img:[],
    center_img:[],
    contract_img:[],
    status: '',
    use_yn: '',
    approval_yn: '',
    mycomponents: [],    
    mycomponents2: [],   
    center_map: [],
    rental_content: '',
    rental_capacity: '',
    rental_fee: '',
    rental_day_week: '',
    rental_start_time: '',
    rental_end_time: '',
    rental_time: '',
    rental_info: [],    
    content:'',
    rental_available:'',
    
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
      axios.get('http://www.nacocha.com/nacocha/centers/one/' + this.doc_key)
            .then(function(response) {
            console.log(response.data);

            self.doc_key = response.data[0].doc_key;
            self.id = response.data[0].id;
            self.nm = response.data[0].nm;
            self.phone = response.data[0].phone;
            self.zip_no = response.data[0].zip_no;
            self.address1 = response.data[0].address1;
            self.address2 = response.data[0].address2;
            self.busi_license_number = response.data[0].busi_license_number;
            self.ownership = response.data[0].ownership;
            self.ownership_nm = response.data[0].ownership_nm;
            self.use_yn = response.data[0].use_yn;
            

            if(response.data[0].status == "승인"){
              self.approval_yn = "Y";
            }else{
              self.approval_yn = "N";
            }


            self.license_img = response.data[0].license_img;
            self.center_img = response.data[0].center_img;
            self.contract_img = response.data[0].contract_img;
            self.center_map = response.data[0].center_map;
            self.rental_info = response.data[0].rental_info;
            self.content = response.data[0].content;

            console.log("self.center_map", self.center_map);

            if(self.center_map != null){
              for(var i=0 ; i<self.center_map.length;i++){
                console.log("self.center_map", i);
                console.log("self.center_map time ", self.center_map[i]);
                self.mycomponent_add();
              }    
            }
            
            console.log("self.rental_info", self.rental_info.length);
            if(self.rental_info != null){
              for(var i=0 ; i<self.rental_info.length;i++){
                console.log("self.rental_info time ", self.rental_info[i].rental_day_week);
                self.mycomponent2_add();
              } 
            }               

            console.log("fetchUserOne");
            })
            .catch(function(error) {
            console.log(error);
            })
            .finally(function(error) {

              var elements = document.getElementsByName("center_map");
              var i = 0;
              console.log("elements center_map : ", elements);
              for (let elem of elements) {
                elem.setAttribute("value", self.center_map[i]);
                i++;
              }


              elements = document.getElementsByName("rental_place");
              i = 0;
              for (let elem of elements) {
                elem.setAttribute("value", self.rental_info[i].rental_place);
                i++;
              }

              elements = document.getElementsByName("rental_capacity");
              i = 0;
              for (let elem of elements) {
                elem.setAttribute("value", self.rental_info[i].rental_capacity);
                i++;
              }              

              elements = document.getElementsByName("rental_fee");
              i = 0;
              for (let elem of elements) {
                elem.setAttribute("value", self.rental_info[i].rental_fee);
                i++;
              }    
              
              elements = document.getElementsByName("rental_day_week");
              i = 0;
              for (let elem of elements) {
                elem.setAttribute("value", self.rental_info[i].rental_day_week);
                i++;
              }    
              
              elements = document.getElementsByName("rental_start_time");
              i = 0;
              for (let elem of elements) {
                elem.setAttribute("value", self.rental_info[i].rental_start_time);
                i++;
              }    
              
              elements = document.getElementsByName("rental_end_time");
              i = 0;
              for (let elem of elements) {
                elem.setAttribute("value", self.rental_info[i].rental_end_time);
                i++;
              }   
                            
              elements = document.getElementsByName("rental_time");
              i = 0;
              for (let elem of elements) {
                elem.setAttribute("value", self.rental_info[i].rental_time);
                i++;
              }   

              elements = document.getElementsByName("rental_content");
              i = 0;
              for (let elem of elements) {
                elem.setAttribute("value", self.rental_info[i].rental_content);
                i++;
              }    

              elements = document.getElementsByName("sports");
              i = 0;
              for (let elem of elements) {
                elem.setAttribute("value", self.rental_info[i].sports);
                i++;
              }                 
              
              elements = document.getElementsByName("rental_available");
              i = 0;
              for (let elem of elements) {
                elem.setAttribute("value", self.rental_info[i].rental_available);
                i++;
              }                

            })              
            ;
    },
    goinsert : function() {
        var form = document.getElementById('sendForm');
        var formData = new FormData(form);

        
        formData.append('license_img', this.license_img);

        formData.append('status', '요청');        
        formData.append('use_yn', 'N');    
        formData.append('approval_yn', 'N');

        var headers = { 'Content-Type': 'multipart/form-data' };

        // FormData의 key 확인
        for (let key of formData.keys()) {
          console.log("key", key);
        }

        // FormData의 value 확인
        for (let value of formData.values()) {
          console.log("value", value);
        }    


        axios.post('http://www.nacocha.com/nacocha/centers/insert', 
                formData, headers
                ).then(response => {
                    console.warn(response)
                    this.result = response.data
                    alert('등록되었습니다.');
                    this.itemList();

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
        var headers = { 'Content-Type': 'multipart/form-data' };

        // FormData의 key 확인
        for (let key of formData.keys()) {
          console.log("key", key);
        }

        // FormData의 value 확인
        for (let value of formData.values()) {
          console.log("value", value);
        }        

        axios.put('http://www.nacocha.com/nacocha/centers/update/' +this.doc_key, 
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
        axios.delete('http://www.nacocha.com/nacocha/centers/delete/' +this.doc_key, 
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
      this.$router.push({ name: '센터관리', params: { }, })
    } ,
    mycomponent_add () {
			this.mycomponents.push('mycomponent')
		},
    mycomponent_delete () {
			this.mycomponents.pop('mycomponent')
		},
    mycomponent2_add () {
			this.mycomponents2.push('mycomponent2')
		},
    mycomponent2_delete () {
			this.mycomponents2.pop('mycomponent2')
		}

  },

    

}
</script>
<style lang="">

</style>
