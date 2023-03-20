<template>
  <v-container fluid>
    <v-card>
      <v-card-text>
            <validation-provider
              v-slot="{ errors }"
              name="coatch_career"
              :rules="{
                required: false,
              }"
            >
              <v-text-field
                v-model="coatch_career"
                :counter="50"
                label="코치경력"
                name="coatch_career"
                :error-messages="errors"
              />
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="coatch_career_img"    
              :rules="{
                required: false,
                max: 100
              }"
            >
              <v-file-input
                id="coatch_career_img"
                ref="coatch_career_img"
                v-model="coatch_career_img"
                label="코치경력파일"
                name="coatch_career_img"
                multiple
                :error-messages="errors"
                @change="coatch_career_img_File"
              />
            </validation-provider>    
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Coatch_career',
  data: () => ({
    coatch_career_img: [],
    coatch_career:'',
  }),
  created() {
      console.log('Coatch_career component')
  },
  methods: {
      coatch_career_img_File : function(file_list) {
        const formData = new FormData()
        //console.log("e.target.certificate_img_File", file_list);
        for (const file of file_list) {
          formData.append('coatch_career_img', file)
        }      
      },        
  },
}
</script>