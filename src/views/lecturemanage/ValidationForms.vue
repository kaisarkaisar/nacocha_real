<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        강의 등록
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
              name="lecture_type"
              rules="required"
            >
              <v-select
                v-model="lecture_type"
                :items="items"
                label="레슨타입"
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
                required: true,
                max: 30
              }"
            >
              <v-text-field
                v-model="center_id"
                :counter="20"
                label="센터아이디"
                name="center_id"
                :error-messages="errors"
              />
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="center_nm"
              :rules="{
                required: true,
                max: 20
              }"
            >
              <v-text-field
                v-model="center_nm"
                :counter="20"
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
              }"
            >
              <v-text-field
                v-model="center_detail_nm"
                :counter="50"
                label="센터상세명"
                name="center_detail_nm"
                :error-messages="errors"
              />
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="membership_group"
              rules="required"
            >
              <v-select
                v-model="membership_group"
                :items="items2"
                label="회원권구분"
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
              name="lecture_end_dt"
              :rules="{
                required: false,
              }"
            >
              <v-text-field
                v-model="lecture_end_dt"
                :counter="50"
                label="강의종료일자"
                name="lecture_end_dt"
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
              name="lecture_feature"
              :rules="{
                required: false,
              }"
            >
              <v-text-field
                v-model="lecture_feature"
                :counter="50"
                label="강의특징"
                name="lecture_feature"
                :error-messages="errors"
              />
            </validation-provider>             

            <validation-provider
              v-slot="{ errors }"
              name="inquire_group"
              :rules="{
                required: false,
              }"
            >
              <v-text-field
                v-model="inquire_group"
                :counter="50"
                label="신청문의선택"
                name="inquire_group"
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
              name="lecture_time"
              :rules="{
                required: false,
              }"
            >
              <v-text-field
                v-model="lecture_time"
                :counter="50"
                label="강의시간(회당)"
                name="lecture_time"
                :error-messages="errors"
              />
            </validation-provider> 


            <validation-provider
              v-slot="{ errors }"
              name="lecture_img"    
              :rules="{
                required: false,
                max: 100,
              }"
            >
              <v-file-input
                id="lecture_img"
                ref="lecture_img"
                v-model="lecture_img"
                label="강의사진"
                name="lecture_img"
                multiple
                :error-messages="errors"
                @change="lecture_img_File"
              />
            </validation-provider>              

            
            <v-btn 
              class="mr-4" 
              @click="mycomponent_add"
            >
              강의시간추가
            </v-btn>      
            <v-btn 
              class="mr-4" 
              @click="mycomponent_delete"
            >
            강의시간삭제
            </v-btn>                            

            <div v-for="(k,i) in mycomponents" :key="i" :data-index="i">
              <mycomponent></mycomponent> 
            </div>
            
            <validation-provider
              v-slot="{ errors }"
              name="reservation_approval_yn"
              :rules="{
                required: false
              }"
            >
              <v-checkbox
                v-model="reservation_approval_yn"
                value="Y"
                label="예약자승인여부"
                type="reservation_approval_yn"
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
                :error-messages="errors"
              />
            </validation-provider>
            
            <!-- <v-item>
              <a :href="coatch_file">{{ coatch_file }}</a>
            </v-item> -->
            <!-- 
            <v-card v-if="lecture_schedule.length > 0" class="mx-auto">
              <v-list>
                <v-subheader>List of Files</v-subheader>
                <v-list-item-group color="primary">
                  <v-list-item v-for="(file, index) in lecture_schedule" :key="index">
                    <a :href="1">{{ lecture_schedule[index].count }}</a><a :href="1">{{ lecture_schedule[index].time }}</a>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
            -->

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
            '<label for="lecture_schedule_count" class="v-label v-label--active theme--light error--text" style="left: 0px; right: auto; position: absolute;"></label>'+
            '<input type="text" name="lecture_schedule_count" id="lecture_schedule_count" style="background-color:#F5D042">'+
          '</div>'+
          '<div class="v-v-text-field__slot">'+
            '&nbsp;&nbsp'+
          '</div>'+          
          '<div class="v-v-text-field__slot">'+
            '<label for="lecture_schedule_time" class="v-label v-label--active theme--light error--text" style="left: 0px; right: auto; position: absolute;"></label>'+
            '<input type="text" name="lecture_schedule_time" id="lecture_schedule_time" style="background-color:#CED46A">'+
          '</div>'+          
        '</div>'+
      '</div>'+
    '</div>'+
  '</span>'
});

Vue3.component('mycomponent2', {
  template: 
  '<span>'+
    '<div class="v-input theme--light v-text-field v-text-field--is-booted">'+
      '<div class="v-input__control">'+
        '<div class="v-input__slot">'+
          '<div class="v-v-text-field__slot">'+
            '<label for="lecture_schedule_count" class="v-label v-label--active theme--light error--text" style="left: 0px; right: auto; position: absolute;"></label>'+
            '<input type="text" name="lecture_schedule_count" id="lecture_schedule_count" style="background-color:#F5D042">'+
          '</div>'+
          '<div class="v-v-text-field__slot">'+
            '&nbsp;&nbsp'+
          '</div>'+          
          '<div class="v-v-text-field__slot">'+
            '<label for="lecture_schedule_time" class="v-label v-label--active theme--light error--text" style="left: 0px; right: auto; position: absolute;"></label>'+
            '<input type="text" name="lecture_schedule_time" id="lecture_schedule_time" style="background-color:#CED46A">'+
          '</div>'+          
        '</div>'+
      '</div>'+
    '</div>'+
  '</span>'
});


export default {
  data: () => ({
    doc_key:'',
    lecture_type:'',
    sports:'',
    sports_nm:'',
    coatch_id:'',
    coatch_nm:'',
    center_id:'',
    center_nm:'',
    center_detail_nm:'',
    membership_group:'',
    lecture_start_dt:'',
    lecture_end_dt:'',
    lecture_nm:'',
    lecture_feature:'',
    inquire_group:'',
    lecture_day_week:[],
    guarantee_count:'',
    lecture_fee:'',
    lecture_time:'',
    reservation_approval_yn:'',
    use_yn:'',
    lecture_img: [],
    items: [
      { text: '개인', value: '개인' },
      { text: '그룹', value: '그룹' },
    ],
    items2: [
      { text: '기간권', value: '기간권' },
      { text: '횟수권', value: '횟수권' },
    ],
    checkbox: null,
    mycomponents: [],
    coatch_carrer: [],
    status:'',
    approval_yn:'',
    lecture_schedule:[],
  }),
  created() {
    console.log('created')
  },
  mounted() { 
    var self = this;
    this.doc_key = this.$route.params.doc_key;
    console.log('this.$route.params.doc_key', this.$route.params.doc_key)
    console.log('this.$route.params.copy_yn', this.$route.params.copy_yn)
    
    if(this.$route.params.doc_key != ""){
      self.fetchOneItem();
    }
    //self.mycomponent_add();
  },

  methods: {
    submit () {
      this.$refs.observer.validate().then(result => {
        if (result) {          
          //console.log('this.$route.params.doc_key : ' + this.$route.params.doc_key)
          if(this.$route.params.doc_key != ""){
            if(this.$route.params.copy_yn == "Y"){
              this.goinsert();
            }else{
              this.goupdate();
            }            
          }else{
            this.goinsert();
          }
        } else {
          alert('실패')
        }
      })
    },
    clear () {
      this.id ='';
      this.nm ='';
      
      this.$refs.observer.reset()
    },
    goback () {
      this.$router.go(-1);
    },
    fetchOneItem : function() {
      var self = this;
      axios.get('http://www.nacocha.com/nacocha/lectures/one/' + this.doc_key)
            .then(function(response) {
            //console.log("coatchs/one" ,response.data);
            //console.log("nm", response.data[0].nm);

            self.lecture_schedule = response.data[0].lecture_schedule									; 

            self.doc_key = response.data[0].doc_key									;
            console.log("self.doc_key", self.doc_key);
            self.lecture_type = response.data[0].lecture_type                       ;
            self.sports = response.data[0].sports                                   ;
            self.sports_nm = response.data[0].sports_nm                             ;
            self.coatch_id = response.data[0].coatch_id                             ;
            self.coatch_nm = response.data[0].coatch_nm                             ;
            self.center_id = response.data[0].center_id                             ;
            self.center_nm = response.data[0].center_nm                             ;
            self.center_detail_nm = response.data[0].center_detail_nm               ;
            self.membership_group = response.data[0].membership_group               ;
            self.lecture_start_dt = response.data[0].lecture_start_dt               ;
            self.lecture_end_dt = response.data[0].lecture_end_dt                   ;
            self.lecture_nm = response.data[0].lecture_nm                           ;
            self.lecture_feature = response.data[0].lecture_feature                 ;
            self.inquire_group = response.data[0].inquire_group                     ;
            self.lecture_day_week = response.data[0].lecture_day_week               ;
            self.guarantee_count = response.data[0].guarantee_count                 ;
            self.lecture_fee = response.data[0].lecture_fee                         ;
            self.lecture_time = response.data[0].lecture_time                       ;
            self.reservation_approval_yn = response.data[0].reservation_approval_yn ;
            self.use_yn = response.data[0].use_yn                                   ;


            for(var i=0 ; i<self.lecture_schedule.length;i++){
              //self.mycomponent_add();
              console.log("self.lecture_schedule", i);
              console.log("self.lecture_schedule time ", self.lecture_schedule[i].time);
              self.mycomponent_add();
            }

            console.log("fetchUserOne");
            })
            .catch(function(error) {
            console.log(error);
            })
            .finally(function(error) {
              var elements = document.getElementsByName("lecture_schedule_time");
              var i = 0;
              console.log("elements : ", elements);
              for (let elem of elements) {
                elem.setAttribute("value", self.lecture_schedule[i].time);
                i++;
              }

              var elements = document.getElementsByName("lecture_schedule_count");
              var i = 0;
              console.log("elements : ", elements);
              for (let elem of elements) {
                elem.setAttribute("value", self.lecture_schedule[i].count);
                i++;
              }              
            })            
            ;
    },
    goinsert : function() {
        var form = document.getElementById('sendForm');
        var formData = new FormData(form);

        formData.append('lecture_type', this.lecture_type);
        formData.append('membership_group', this.membership_group);
     
        formData.append('use_yn', this.use_yn);    
        formData.append('reservation_approval_yn', this.reservation_approval_yn);

        var headers = { 'Content-Type': 'multipart/form-data' };

        // FormData의 key 확인
        for (let key of formData.keys()) {
          console.log("key", key);
        }

        // FormData의 value 확인
        for (let value of formData.values()) {
          console.log("value", value);
        }          

        axios.post('http://www.nacocha.com/nacocha/lectures/insert', 
                formData, headers
                ).then(response => {
                    console.warn("response : " + response)
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

        formData.append('use_yn', self.use_yn);  
        formData.append('reservation_approval_yn', self.reservation_approval_yn); 
        
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
        axios.put('http://www.nacocha.com/nacocha/lectures/update/' +this.doc_key, 
              formData, headers
              //formData
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
        axios.delete('http://www.nacocha.com/nacocha/lectures/delete/' +this.doc_key, 
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
    lecture_img_File : function(file_list) {
      const formData = new FormData()
      //console.log("e.target.coatch_img_files", file_list);
      for (const file of file_list) {
        formData.append('lecture_img', file)
      }      
    },
    itemList : function(){
      this.$router.push({ name: '강의관리', params: { }, })
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
