<script setup lang="ts">
import {

  toTypedSchema
} from '@vee-validate/yup';
import {object, string} from 'yup';

definePageMeta({
  layout: false,

  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/'
},

})
;
const {values, handleSubmit, errors} = useForm({
  validationSchema: toTypedSchema(
      object({
        email: string().required().default('admin@example.com'),
        password: string().required().default('password'),

      })
  ),
});
const store = useAuthStore()
const onSubmit = handleSubmit(values => {

  store.login({email:values.email,password:values.password})
});
const { value: email } = useField('email');
const { value: password } = useField('password');

</script>

<template v-show="store.isPageLoading">
  <div class="auth">

    <form @submit="onSubmit">
      <input type="email" v-model="email"/>
      <div>{{ errors.email }}</div>

      <input type="password" v-model="password"/>
      <div>{{ errors.password }}</div>

      <button>Submit</button>
    </form>
  </div>
</template>

<style scoped>
.auth {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
}
</style>
