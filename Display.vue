<template>
<div>
<p>Employee name: {{this.ename}}</p>
<p>Lead: {{this.elead}}</p>
 </div>
</template>
<script>
 import {mapState, mapGetters} from 'vuex';
export default {
computed:{  ...mapState({ Employee:state => state.modulename.Employeestate }),   
 },
}
</script>