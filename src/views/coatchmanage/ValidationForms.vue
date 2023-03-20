<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        코치 등록
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
              name="id"
              :rules="{
                required: true,
                max: 30
              }"
            >
              <v-text-field
                v-model="id"
                :counter="20"
                label="코치아이디"
                name="id"
                :error-messages="errors"
              />
            </validation-provider>

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
                :counter="20"
                label="코치이름"
                name="nm"
                :error-messages="errors"
              />
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="coatch_motto"
              :rules="{
                required: false,
              }"
            >
              <v-text-field
                v-model="coatch_motto"
                :counter="50"
                label="코치좌우명"
                name="coatch_motto"
                :error-messages="errors"
              />
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="sports"
              :rules="{
                required: false,
              }"
            >
              <v-text-field
                v-model="sports"
                :counter="50"
                label="종목"
                name="sports"
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
                label="결제여부"
                type="checkbox"
                :error-messages="errors"
              />
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="payment_bank_nm"
              :rules="{
                required: false,
              }"
            >
              <v-text-field
                v-model="payment_bank_nm"
                :counter="50"
                label="결제은행"
                name="payment_bank_nm"
                :error-messages="errors"
              />
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="payment_account_number"
              :rules="{
                required: false,
              }"
            >
              <v-text-field
                v-model="payment_account_number"
                :counter="50"
                label="결제계좌"
                name="payment_account_number"
                :error-messages="errors"
              />
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="coatch_img"    
              :rules="{
                required: false,
                max: 100,
              }"
            >
              <v-file-input
                id="coatch_img"
                ref="coatch_img"
                v-model="coatch_img"
                label="코치사진"
                name="coatch_img"
                multiple
                :error-messages="errors"
                @change="coatch_img_File"
              />
            </validation-provider>              

            <validation-provider
              v-slot="{ errors }"
              name="identity_img"    
              :rules="{
                required: false,
                max: 100
              }"
            >
              <v-file-input
                id="identity_img"
                ref="identity_img"
                v-model="identity_img"
                label="신분증사진"
                name="identity_img"
                multiple
                :error-messages="errors"
                @change="identity_img_File"
              />
            </validation-provider> 

            <validation-provider
              v-slot="{ errors }"
              name="crime_safe_img"    
              :rules="{
                required: false,
                max: 100
              }"
            >
              <v-file-input
                id="crime_safe_img"
                ref="crime_safe_img"
                v-model="crime_safe_img"
                label="범죄경력확인파일"
                name="crime_safe_img"
                multiple
                :error-messages="errors"
                @change="crime_safe_img_File"
              />
            </validation-provider>              
            
            <v-btn 
              class="mr-4" 
              :disabled="invalid"
              @click="mycomponent_add"
            >
              코치경력추가
            </v-btn>      
            <v-btn 
              class="mr-4" 
              :disabled="invalid"
              @click="mycomponent_delete"
            >
            코치경력삭제
            </v-btn>  

            <div v-for="(k,i) in mycomponents" :key="i" :data-index="i">
              <component :is="comp"></component>
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
                type="checkbox"
                :error-messages="errors"
              />
            </validation-provider>

            
           
            
            <!-- <v-item>
              <a :href="coatch_file">{{ coatch_file }}</a>
            </v-item> -->
            
            <!-- <v-card v-if="coatch_file.length > 0" class="mx-auto">
              <v-list>
                <v-subheader>List of Files</v-subheader>
                <v-list-item-group color="primary">
                  <v-list-item v-for="(file, index) in coatch_file" :key="index">
                    <a :href="coatch_file">{{ coatch_file }}</a>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>             -->

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
import Career from '../../components/coatch_career/Coatch_Career'

export default {
  data: () => ({
    id:'',
    nm: '',
    doc_key:'',
    center_id:'',
    center_nm:'',
    coatch_motto: '',
    payment_yn: '',
    payment_bank_nm: '',
    payment_account_number: '',
    coatch_img: [],
    identity_img: [],
    certificate_img: [],
    crime_safe_img: [],    
    use_yn: '',
    select: null,
    items: [
      { text: '일반회원', value: '01' },
      { text: '코치', value: '02' },
      { text: '센터장', value: '03' },
    ],
    checkbox: null,
    mycomponents: [],
    coatch_career: [],
    status:'',
    approval_yn:'',
    comp: '',
    sports:'',
  }),
  components: {
    Career,
  },
  created() {
    console.log('created')
  },
  mounted() { 
    var self = this;
    this.doc_key = this.$route.params.doc_key;
    if(this.$route.params.doc_key != ""){
      self.fetchUserOne();
    }
  },

  methods: {
    submit () {
      this.$refs.observer.validate().then(result => {
        if (result) {          
          console.log('this.$route.params.doc_key : ' + this.$route.params.doc_key)
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
      this.id ='';
      this.nm ='';
      
      this.$refs.observer.reset()
    },
    goback () {
      this.$router.go(-1);
    },
    fetchUserOne : function() {
      var self = this;
      axios.get('http://www.nacocha.com/nacocha/coatchs/one/' + this.doc_key)
            .then(function(response) {
            //console.log("coatchs/one" ,response.data);
            //console.log("nm", response.data[0].nm);
            //console.log("coatch_file", response.data[0].coatch_file);
            self.id = response.data[0].id;
            self.nm = response.data[0].nm;
            self.center_id = response.data[0].center_id;
            self.center_nm = response.data[0].center_nm;
            self.coatch_motto = response.data[0].coatch_motto;
            self.sports = response.data[0].sports;
            self.payment_bank_nm = response.data[0].payment_bank_nm;
            self.payment_account_number = response.data[0].payment_account_number;
            self.payment_yn = response.data[0].payment_yn;
            self.use_yn = response.data[0].use_yn;
            self.approval_yn = response.data[0].approval_yn;
            self.coatch_img = response.data[0].coatch_img;
            self.certificate_img = response.data[0].certificate_img;
            self.identity_img = response.data[0].identity_img;

            self.coatch_career = response.data[0].coatch_career;

            console.log("self.coatch_career", self.coatch_career);

            for(var i=0 ; i<self.coatch_career.length;i++){
              //self.mycomponent_add();
              console.log("self.lecture_schedule", i);
              console.log("self.lecture_schedule time ", self.coatch_career[i]);
              self.mycomponent_add();
            }

            console.log("fetchUserOne");
            })
            .catch(function(error) {
            console.log(error);
            })
            .finally(function(error) {
              var elements = document.getElementsByName("coatch_career");
              var i = 0;
              console.log("elements : ", elements);
              for (let elem of elements) {
                elem.setAttribute("value", self.coatch_career[i]);
                i++;
              }
            })            
            ;            
    },
    goinsert : function() {
        var form = document.getElementById('sendForm');
        var formData = new FormData(form);


        console.log("coatch_img value" + eval(this.coatch_career_img.length));
        console.log("coatch_career_img value" + eval(this.coatch_career_img));

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

        axios.post('http://www.nacocha.com/nacocha/coatchs/insert', 
                formData, headers
                ).then(response => {
                    console.warn("response : " + response)
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

        console.log(formData);
        axios.put('http://www.nacocha.com/nacocha/coatchs/update/' +this.doc_key, 
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
        axios.delete('http://www.nacocha.com/nacocha/coatchs/delete/' +this.doc_key, 
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
    coatch_img_File : function(file_list) {
      const formData = new FormData()
      //console.log("e.target.coatch_img_files", file_list);
      for (const file of file_list) {
        formData.append('coatch_img', file)
      }      
    },
    identity_img_File : function(file_list) {
      const formData = new FormData()
      //console.log("e.target.identity_img_File", file_list);
      for (const file of file_list) {
        formData.append('identity_img', file)
      }      
    },    
    certificate_img_File : function(file_list) {
      const formData = new FormData()
      //console.log("e.target.certificate_img_File", file_list);
      for (const file of file_list) {
        formData.append('certificate_img', file)
      }      
    },  
    crime_safe_img_File : function(file_list) {
      const formData = new FormData()
      //console.log("e.target.certificate_img_File", file_list);
      for (const file of file_list) {
        formData.append('crime_safe_img', file)
      }      
    },     
    coatch_career_img_File : function(file_list) {
      const formData = new FormData()
      //console.log("e.target.certificate_img_File", file_list);
      for (const file of file_list) {
        formData.append('coatch_career_img', file)
      }      
    },  
    itemList : function(){
      this.$router.push({ name: '코치관리', params: { }, })
    } ,
    mycomponent_add () {
      this.comp = 'Career';
			this.mycomponents.push(this.comp)
      
		},
    mycomponent_delete () {
			this.mycomponents.pop('mycomponent')
		} 


  },

    

}
</script>
<style lang="">

</style>
