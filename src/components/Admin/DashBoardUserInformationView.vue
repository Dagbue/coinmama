<template>
  <div class="alpha">
    <div class="body">
      <h2>Edit Deposit Prompts</h2>
      <div class="row trans-mgt">
        <div class="form-group fg--search">
          <button type="submit"><i class="fa fa-search"></i></button>
          <input type="text" class="input" placeholder="Search Investments..."/>
        </div>
        <div class="row filter_group">
          <!--          <div class="blue">Download transactions</div>-->
          <div class="action-content">
            <img src="@/assets/Filterslines.svg"  alt="Export"/>
            <p>Filter</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section-5">
<!--      <div class="empty-state" v-if="this.contacts.length === 0">-->
<!--        <img src="@/assets/empty.svg" alt="empty">-->
<!--        <p class="empty-state-text-1">You have nothing to see</p>-->
<!--        <p class="empty-state-text-2">This is where your Investments will appear</p>-->
<!--        &lt;!&ndash;        <p class="empty-state-text-3">&ndash;&gt;-->
<!--        &lt;!&ndash;          <i class='bx bx-plus' ></i>&ndash;&gt;-->
<!--        &lt;!&ndash;          Transaction&ndash;&gt;-->
<!--        &lt;!&ndash;        </p>&ndash;&gt;-->
<!--      </div>-->

      <div class="table">
        <table>
          <tr>
            <th>First Line</th>
            <th>Second Line</th>
<!--            <th>Deposit</th>-->
<!--            <th>Profits</th>-->
<!--            <th>Bonus</th>-->
<!--            <th>Ref Bonus</th>-->
<!--            <th>Withdrawal</th>-->
          </tr>

          <tbody >
          <tr>
            <td>{{contacts.text1}}</td>
            <td>{{contacts.text2}}</td>
<!--            <td>$ {{ child.deposit }}</td>-->
<!--            <td>$ {{child.profits}}</td>-->
<!--            <td>$ {{child.bonusMain}}</td>-->
<!--            <td>$ {{child.bonus}}</td>-->
<!--            <td>$ {{child.withdrawal}}</td>-->
          </tr>
          </tbody>

        </table>
<!--        <div class="pagination">-->
<!--          <button @click="previousPage" :disabled="currentPage === 1" class="previous">Previous</button>-->
<!--          <div class="page-indicator">-->
<!--            Page {{ currentPage }} of {{ totalPages }}-->
<!--          </div>-->
<!--          <button @click="nextPage" :disabled="currentPage === totalPages" class="previous">Next</button>-->
<!--        </div>-->
        <form>
          <div class="fields-alpha-2">

            <input type="text" v-model="text1" placeholder="Enter First Line"/>
            <button class="btn" @click="update1" type="button">Submit</button>

            <input type="text" v-model="text2" placeholder="Enter Second Line"/>
            <button class="btn" @click="update2" type="button">Submit</button>

          </div>
        </form>
      </div>

    </div>
  </div>
</template>

<script>
import {collection, getDocs, setDoc, doc} from "firebase/firestore";
import {db} from "@/firebase/config";
import Swal from "sweetalert2";
export default {
  name: "DashBoardUserInformationView",
  data () {
    return {
      SelectEmail: "",
      contacts: [],
      profits:"",
      bonus:"",
      bonusMain:"",
      currentPage: 1,
      itemsPerPage: 9,
      deposit:"",
      text1: "",
      text2: ""
    }
  },
  computed:{
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.contacts.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.contacts.length / this.itemsPerPage);
    },
  },
  async created() {
    const querySnapshot2 = await getDocs(collection(db, "FundWalletModals"));
    querySnapshot2.forEach((doc) => {
      let data = {
        'text1': doc.data().text1,
        'text2': doc.data().text2,
      }
      this.contacts = data
    })


  },

  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },

    goToPage(pageNumber) {
      if (pageNumber > 0 && pageNumber <= this.totalPages) {
        this.currentPage = pageNumber;
      }
    },

    async update1() {
      await setDoc(doc(db, "FundWalletModals" , "FirstLine" ), {
        text1: this.text1,
      },{ merge: true })
          .then(async () => {
            await Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Edited Successfully!',
            });
            await location.reload();
          })
    },

    async update2() {
      await setDoc(doc(db, "FundWalletModals" , "FirstLine" ), {
        text2: this.text2,
      },{ merge: true })
          .then(async () => {
            await Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Edited Successfully!',
            });
            await location.reload();
          })
    },


  }
}
</script>

<style scoped>
.body{
  padding: 32px;
}
h2{
  font-weight: 700;
  font-size: 19px;
  line-height: 25px;
  color: #353542;
}
.row{
  display: flex;

}
.trans-mgt{
  margin-top: 17px;
  /* align-items: center; */
}
.filter_group{
  margin-left: auto;
  gap: 16px;
}

.white{
  display: flex;
  align-items: center;
  align-content: center;
  background-color: #FFFFFF;
  border: 1px solid #D0D5DD;
  font-size: 13px;
  padding:  6px 14px;
  border-radius: 5px;
  gap: 10px;
}
.blue{
  display: flex;
  align-items: center;
  align-content: center;
  padding: 6px 14px;
  border-radius: 5px;
  font-size: 13px;
  background-color: #1570EF;
  border: 1px solid #1570EF;
  color: #ffffff;
}

.fg--search {
  background: white;
  position: relative;
  width: 400px;
  margin-left: 1%;
}
.fg--search input {
  width: 100%;
  padding: 10px;
  padding-left: 15px;
  display: block;
  background: #FFFFFF;
  border: 1px solid #D0D5DD;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 6px;
}

.fg--search button {
  background: transparent;
  border: none;
  cursor: pointer;
  display: inline-block;
  font-size: 10px;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  margin-top: 5px;
}

.fa-search{
  color: #667085;
  margin-right: 10px;
}
table {
  border-collapse: collapse;
  width: 100%;
}
.table{
  margin-left: 2%;
  margin-right: 3%;
}

tr{
  border: 1px solid #E3EBF6;
}

th {
  background-color: #F9FBFD;
  padding: 10px;
  letter-spacing: 0.5px;
  font-weight: 500;
  font-size: 14px;
  color: #667085;
  text-align: center;
}

td {
  /*border: 1px solid #E3EBF6;*/
  text-align: center;
  align-items: center;
  align-content: center;
  padding: 15px 8px;
  /*letter-spacing: 1px;*/
  color: #667085;
  font-weight: 200;
  font-size: 15px;
  /*border-bottom: 1px solid #E3EBF6;*/
}

.empty-state{
  text-align: center;
  margin-top: 7%;
  margin-right: 8%;
}


.empty-state-text-1{
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  color: #353542;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
}

.empty-state-text-2{
  font-weight: 200;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #353542;
  padding-bottom: 1.25%;
}

.empty-state-text-3{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  gap: 8px;
  width: 130px;
  margin-right: auto;
  margin-left: auto;
  height: 35px;
  background: #0765FF;
  color: #FFFFFF;
  border: 1px solid #0765FF;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 5px;
  font-size: 13px;
}

.empty-state-text-3:hover{
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
}

.action-content{
  display: flex;
  align-items: center;
  align-content: center;
  padding: 8px 14px;
  gap: 8px;
  width: 88px;
  height: 36px;
  background: #FFFFFF;
  border: 1px solid #D0D5DD;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 4px;
  margin-right: 13px;
}

.action-content:hover{
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.action-content p {
  color: #667085;
  font-size: 13px;
}

.fields-alpha-2{
  background-color: #818a91;
  padding-top: 15px;
  padding-bottom: 15px;
  /*padding-left: 2%;*/
  /*margin-left: 2%;*/
  /*margin-right: 3%;*/
  border-radius: 5px;
  margin-top: 2%;
}

label{
  color: #101828;
  /*padding-right: 5px;*/
  /*padding-left: 5px;*/
}

.btn{
  padding: 5px 15px;
  color: white;
  background-color: rgb(43 101 232);
  margin-left: 0.5%;
  margin-right: 0.5%;
  border: 1px solid rgb(43 101 232);
  border-radius: 5px;
  transition: all 0.3s ease-in;
}

.btn:hover{
  background-color: #ffffff;
  border: 1px solid rgb(43 101 232);
  color: rgb(43 101 232);
}


input {
  box-sizing: border-box;
  border: 1px solid #D0D5DD;
  border-radius: 5px;
  -webkit-transition: 0.3s;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 10px;
  transition: 0.3s;
  outline: none;
  color: #667085;
  width: 90%;
  letter-spacing: 0.5px;
  margin-left: 2%;
  margin-bottom: 1%;
  margin-top: 1%;
}

input:focus {
  border: 1px solid #24405A;
}

select{
  box-sizing: border-box;
  border: 1px solid #D0D5DD;
  border-radius: 5px;
  -webkit-transition: 0.3s;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 10px;
  transition: 0.3s;
  outline: none;
  color: #667085;
  letter-spacing: 0.5px;
  margin-left: 20px;
  margin-right: 10px;
}

select:focus {
  border: 1px solid #24405A;
}

.pagination{
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
}

.previous{
  /*display: flex;*/
  /*align-content: center;*/
  /*align-items: center;*/
  text-align: center;
  padding: 8px 14px;
  gap: 8px;
  font-size: 12px;
  width: 100px;
  height: 30px;
  background: transparent;
  color: #667085;
  /*border: 1px solid #1570EF;*/
  border: 1px solid #E3EBF6;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 4px;
}

.previous:hover{
  box-shadow: 0 0 5px rgba(16, 24, 40, 0.2);
}

.page-indicator{
  color: #667085;
  font-weight: 200;
  font-size: 13px;
}
</style>