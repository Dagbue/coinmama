<template>
  <div>
    <h2 class="header">Change Password</h2>
    <form @submit.prevent="message">
      <div class="bank-trans">
        <div class="bank-trans-form">
          <input type="password" placeholder="Enter Old Password" required="" name="bank-name"  />
        </div>
        <div class="bank-trans-form2">
          <input type="password" placeholder="Enter New Password" required="" name="bank-name"  />
        </div>
        <div class="bank-trans-form2">
          <input type="password" placeholder="Confirm New Password" required="" name="bank-name"  />
        </div>
      </div>
      <button class="bank-trans-btn">Submit</button>
    </form>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import router from "@/router";

export default {
  name: "DashBoardChangePasswordAdmin",
  methods: {
    async message() {
      await Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Password Reset Successfully!',
      });
      await router.push("/list-of-users")
    }
  }
}
</script>

<style scoped>
.header{
  text-align: center;
  margin-top: 1.5%;
}
.bank-trans{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: rgba(129, 138, 154, 0.5);
  color: #FFFFFF;
  margin: 3% 17% 1.5% 13%;
  padding: 5% 5% 7% 6%;
  border-radius: 5px;
}

.bank-trans-form{
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
}
.bank-trans-form2 {
  display: flex;
  flex-direction: column;
  padding-top: 30px;
}
input{
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 10px;
  background-color: rgba(247, 247, 249, 1);
  border: none;
  border-radius: 5px;
}
select{
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 10px;
  background-color: rgba(247, 247, 249, 1);
  border: none;
  border-radius: 5px;
}

.bank-trans-btn{
  padding: 11px 88px;
  color: white;
  background-color: rgb(43 101 232);
  border:1px solid rgb(43 101 232);
  border-radius: 5px;
  /*margin-right: 5%;*/
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.bank-trans-btn:hover{
  background-color: #ffffff;
  border:1px solid rgb(43 101 232);
  color: rgb(43 101 232);
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

@media (max-width: 550px) {
  .bank-trans{
    margin-right: unset;
    margin-left: unset;
  }
}
</style>