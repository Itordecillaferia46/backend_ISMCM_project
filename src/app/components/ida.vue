<template>
<div class="contenedor1">
  <br>
  <v-row>
    <center>
  <v-card
    class="mx-auto"
    max-width="884"
    outlined
  >
  
    <v-list-item >
      <v-list-item-content>
        <div  justific="center" aling="left" class="degrade" border="2px">
    <iframe  width="910" height="405" src="https://www.youtube.com/embed/1AX4eK6MJJo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  </div>
        
        
      </v-list-item-content>

      
    </v-list-item>

    
  </v-card>
  </center>
  <v-col>
    <div class="borB">
       <router-link :to="{ name: 'material_complementario' }">
  <v-btn color="primary" 
          ><label class="letras">Ver mas...</label>
        </v-btn>
    </router-link>
    </div>
   
  </v-col>
  
  </v-row>
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style scoped>


.degrade{
     background:radial-gradient(200px top, ellipse, white, #1162ac, black);
}
.borB {
  height: 170px;
  width: 250px;
  border-radius: 1rem;
   height: 100px;
  width: 175px;
}

</style>