<template>
  <div class="container">
    <Header :title="title" :date="date"></Header>
    <div class="doc">
   
      <div class="nav scrollClass">
        <div
          class="item"
          :class="{reading:reading==item._id}"
          v-for="item in articles"
          :key="item._id"
          @click="read(item)"
        >{{item.title}}</div>
      </div>
      <div class="content scrollClass">
        <!-- <mavon-editor  /> -->
        <div class="inactived" v-if="!content">初出茅庐，请多多指教！</div>
        <div class="actived" v-else>
          {{content}}
          <div class="line">没有更多内容了</div>
        </div>
      </div>
    </div>
  </div>
</template> 
 
<script>
import Header from "../components/header.vue";

export default {
  name: "Doc",
  components: {
    Header,
  },
  data() {
    return {
      title: "", //当前文章title传值给header
      date: "", //当前文章date 传值给header
      content: "", //当前文章显示
      reading: "", //当前阅读文章id
      loading: false, //是否加载中
      articles: [
        {
          _id: "a12s11da21sd",
          title: "HTML入门与进阶",
          date: "2020-07-01",
          content:
            "Lorem ipsum dolor, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate animi dicta, suscipit magnam adipisci quam nulla fuga eligendi eaque modi vitae eos accusamus voluptas praesentium ab nihil qui? Molestiae, laudantium.Aperiam distinctio est perferendis non reiciendis quidem adipisci cupiditate quod nesciunt error corporis, deserunt rerum commodi atque vero omnis esse, accusamus impedit. Recusandae dolor aperiam explicabo molestias alias quidem accusantium.Doloremque molestias beatae, laboriosam qui animi vitae, reiciendis doloribus, quibusdam natus accusamus iste a. Harum quisquam non officia officiis quas praesentium, aperiam deserunt delectus cupiditate sint adipisci, doloremque quae commodi.Eos repellat sint ipsum impedit vero quas itaque molestias qui officia reprehenderit molestiae, nesciunt voluptatum, saepe placeat corrupti ducimus aut perspiciatis quisquam illo libero obcaecati perferendis! Temporibus voluptatum quo minus.Assumenda autem et similique perspiciatis illo beatae nisi consectetur animi quaerat veritatis adipisci, eveniet enim dolores sed praesentium id modi at tenetur temporibus non, atque tempora fuga expedita. Voluptatem, velit?Laborum cupiditate facere vel quisquam magnam soluta minus odit et quos rem est explicabo iste rerum repellendus enim delectus possimus, consectetur exercitationem mollitia. Odio delectus temporibus, numquam deserunt ipsum maiores.Iusto et distinctio, sit sunt id facilis atque reiciendis quas nisi. Voluptatibus in quas dicta dolore voluptatem. Amet voluptatem ea vero quae nam, porro in dolor maxime sit unde distinctio. Minima ipsam ut in nobis ipsa laudantium rem nisi quam aspernatur impedit delectus doloremque ea velit nihil unde magnam neque maxime laboriosam, ratione consectetur sequi aperiam? Ab distinctio voluptates doloremque.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate animi dicta, suscipit magnam adipisci quam nulla fuga eligendi eaque modi vitae eos accusamus voluptas praesentium ab nihil qui? Molestiae, laudantium.Aperiam distinctio est perferendis non reiciendis quidem adipisci cupiditate quod nesciunt error corporis, deserunt rerum commodi atque vero omnis esse, accusamus impedit. Recusandae dolor aperiam explicabo molestias alias quidem accusantium.Doloremque molestias beatae, laboriosam qui animi vitae, reiciendis doloribus, quibusdam natus accusamus iste a. Harum quisquam non officia officiis quas praesentium, aperiam deserunt delectus cupiditate sint adipisci, doloremque quae commodi.Eos repellat sint ipsum impedit vero quas itaque molestias qui officia reprehenderit molestiae, nesciunt voluptatum, saepe placeat corrupti ducimus aut perspiciatis quisquam illo libero obcaecati perferendis! Temporibus voluptatum quo minus.Assumenda autem et similique perspiciatis illo beatae nisi consectetur animi quaerat veritatis adipisci, eveniet enim dolores sed praesentium id modi at tenetur temporibus non, atque tempora fuga expedita. Voluptatem, velit?Laborum cupiditate facere vel quisquam magnam soluta minus odit et quos rem est explicabo iste rerum repellendus enim delectus possimus, consectetur exercitationem mollitia. Odio delectus temporibus, numquam deserunt ipsum maiores.Iusto et distinctio, sit sunt id facilis atque reiciendis quas nisi. Voluptatibus in quas dicta dolore voluptatem. Amet voluptatem ea vero quae nam, porro in dolor maxime sit unde distinctio. Minima ipsam ut in nobis ipsa laudantium rem nisi quam aspernatur impedit delectus doloremque ea velit nihil unde magnam neque maxime laboriosam, ratione consectetur sequi aperiam? Ab distinctio voluptates doloremque.sit amet consectetur adipisicing elit. Cupiditate animi dicta, suscipit magnam adipisci quam nulla fuga eligendi eaque modi vitae eos accusamus voluptas praesentium ab nihil qui? Molestiae, laudantium.Aperiam distinctio est perferendis non reiciendis quidem adipisci cupiditate quod nesciunt error corporis, deserunt rerum commodi atque vero omnis esse, accusamus impedit. Recusandae dolor aperiam explicabo molestias alias quidem accusantium.Doloremque molestias beatae, laboriosam qui animi vitae, reiciendis doloribus, quibusdam natus accusamus iste a. Harum quisquam non officia officiis quas praesentium, aperiam deserunt delectus cupiditate sint adipisci, doloremque quae commodi.Eos repellat sint ipsum impedit vero quas itaque molestias qui officia reprehenderit molestiae, nesciunt voluptatum, saepe placeat corrupti ducimus aut perspiciatis quisquam illo libero obcaecati perferendis! Temporibus voluptatum quo minus.Assumenda autem et similique perspiciatis illo beatae nisi consectetur animi quaerat veritatis adipisci, eveniet enim dolores sed praesentium id modi at tenetur temporibus non, atque tempora fuga expedita. Voluptatem, velit?Laborum cupiditate facere vel quisquam magnam soluta minus odit et quos rem est explicabo iste rerum repellendus enim delectus possimus, consectetur exercitationem mollitia. Odio delectus temporibus, numquam deserunt ipsum maiores.Iusto et distinctio, sit sunt id facilis atque reiciendis quas nisi. Voluptatibus in quas dicta dolore voluptatem. Amet voluptatem ea vero quae nam, porro in dolor maxime sit unde distinctio. Minima ipsam ut in nobis ipsa laudantium rem nisi quam aspernatur impedit delectus doloremque ea velit nihil unde magnam neque maxime laboriosam, ratione consectetur sequi aperiam? Ab distinctio voluptates doloremque.",
        },
        {
          _id: "a12s11da22sd",
          title: "CSS入门与进阶",
          date: "2020-07-01",
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate animi dicta, suscipit magnam adipisci quam nulla fuga eligendi eaque modi vitae eos accusamus voluptas praesentium ab nihil qui? Molestiae, laudantium.Aperiam distinctio est perferendis non reiciendis quidem adipisci cupiditate quod nesciunt error corporis, deserunt rerum commodi atque vero omnis esse, accusamus impedit. Recusandae dolor aperiam explicabo molestias alias quidem accusantium.Doloremque molestias beatae, laboriosam qui animi vitae, reiciendis doloribus, quibusdam natus accusamus iste a. Harum quisquam non officia officiis quas praesentium, aperiam deserunt delectus cupiditate sint adipisci, doloremque quae commodi.Eos repellat sint ipsum impedit vero quas itaque molestias qui officia reprehenderit molestiae, nesciunt voluptatum, saepe placeat corrupti ducimus aut perspiciatis quisquam illo libero obcaecati perferendis! Temporibus voluptatum quo minus.Assumenda autem et similique perspiciatis illo beatae nisi consectetur animi quaerat veritatis adipisci, eveniet enim dolores sed praesentium id modi at tenetur temporibus non, atque tempora fuga expedita. Voluptatem, velit?Laborum cupiditate facere vel quisquam magnam soluta minus odit et quos rem est explicabo iste rerum repellendus enim delectus possimus, consectetur exercitationem mollitia. Odio delectus temporibus, numquam deserunt ipsum maiores.Iusto et distinctio, sit sunt id facilis atque reiciendis quas nisi. Voluptatibus in quas dicta dolore voluptatem. Amet voluptatem ea vero quae nam, porro in dolor maxime sit unde distinctio. Minima ipsam ut in nobis ipsa laudantium rem nisi quam aspernatur impedit delectus doloremque ea velit nihil unde magnam neque maxime laboriosam, ratione consectetur sequi aperiam? Ab distinctio voluptates doloremque.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate animi dicta, suscipit magnam adipisci quam nulla fuga eligendi eaque modi vitae eos accusamus voluptas praesentium ab nihil qui? Molestiae, laudantium.Aperiam distinctio est perferendis non reiciendis quidem adipisci cupiditate quod nesciunt error corporis, deserunt rerum commodi atque vero omnis esse, accusamus impedit. Recusandae dolor aperiam explicabo molestias alias quidem accusantium.Doloremque molestias beatae, laboriosam qui animi vitae, reiciendis doloribus, quibusdam natus accusamus iste a. Harum quisquam non officia officiis quas praesentium, aperiam deserunt delectus cupiditate sint adipisci, doloremque quae commodi.Eos repellat sint ipsum impedit vero quas itaque molestias qui officia reprehenderit molestiae, nesciunt voluptatum, saepe placeat corrupti ducimus aut perspiciatis quisquam illo libero obcaecati perferendis! Temporibus voluptatum quo minus.Assumenda autem et similique perspiciatis illo beatae nisi consectetur animi quaerat veritatis adipisci, eveniet enim dolores sed praesentium id modi at tenetur temporibus non, atque tempora fuga expedita. Voluptatem, velit?Laborum cupiditate facere vel quisquam magnam soluta minus odit et quos rem est explicabo iste rerum repellendus enim delectus possimus, consectetur exercitationem mollitia. Odio delectus temporibus, numquam deserunt ipsum maiores.Iusto et distinctio, sit sunt id facilis atque reiciendis quas nisi. Voluptatibus in quas dicta dolore voluptatem. Amet voluptatem ea vero quae nam, porro in dolor maxime sit unde distinctio. Minima ipsam ut in nobis ipsa laudantium rem nisi quam aspernatur impedit delectus doloremque ea velit nihil unde magnam neque maxime laboriosam, ratione consectetur sequi aperiam? Ab distinctio voluptates doloremque.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate animi dicta, suscipit magnam adipisci quam nulla fuga eligendi eaque modi vitae eos accusamus voluptas praesentium ab nihil qui? Molestiae, laudantium.Aperiam distinctio est perferendis non reiciendis quidem adipisci cupiditate quod nesciunt error corporis, deserunt rerum commodi atque vero omnis esse, accusamus impedit. Recusandae dolor aperiam explicabo molestias alias quidem accusantium.Doloremque molestias beatae, laboriosam qui animi vitae, reiciendis doloribus, quibusdam natus accusamus iste a. Harum quisquam non officia officiis quas praesentium, aperiam deserunt delectus cupiditate sint adipisci, doloremque quae commodi.Eos repellat sint ipsum impedit vero quas itaque molestias qui officia reprehenderit molestiae, nesciunt voluptatum, saepe placeat corrupti ducimus aut perspiciatis quisquam illo libero obcaecati perferendis! Temporibus voluptatum quo minus.Assumenda autem et similique perspiciatis illo beatae nisi consectetur animi quaerat veritatis adipisci, eveniet enim dolores sed praesentium id modi at tenetur temporibus non, atque tempora fuga expedita. Voluptatem, velit?Laborum cupiditate facere vel quisquam magnam soluta minus odit et quos rem est explicabo iste rerum repellendus enim delectus possimus, consectetur exercitationem mollitia. Odio delectus temporibus, numquam deserunt ipsum maiores.Iusto et distinctio, sit sunt id facilis atque reiciendis quas nisi. Voluptatibus in quas dicta dolore voluptatem. Amet voluptatem ea vero quae nam, porro in dolor maxime sit unde distinctio. Minima ipsam ut in nobis ipsa laudantium rem nisi quam aspernatur impedit delectus doloremque ea velit nihil unde magnam neque maxime laboriosam, ratione consectetur sequi aperiam? Ab distinctio voluptates doloremque.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate animi dicta, suscipit magnam adipisci quam nulla fuga eligendi eaque modi vitae eos accusamus voluptas praesentium ab nihil qui? Molestiae, laudantium.Aperiam distinctio est perferendis non reiciendis quidem adipisci cupiditate quod nesciunt error corporis, deserunt rerum commodi atque vero omnis esse, accusamus impedit. Recusandae dolor aperiam explicabo molestias alias quidem accusantium.Doloremque molestias beatae, laboriosam qui animi vitae, reiciendis doloribus, quibusdam natus accusamus iste a. Harum quisquam non officia officiis quas praesentium, aperiam deserunt delectus cupiditate sint adipisci, doloremque quae commodi.Eos repellat sint ipsum impedit vero quas itaque molestias qui officia reprehenderit molestiae, nesciunt voluptatum, saepe placeat corrupti ducimus aut perspiciatis quisquam illo libero obcaecati perferendis! Temporibus voluptatum quo minus.Assumenda autem et similique perspiciatis illo beatae nisi consectetur animi quaerat veritatis adipisci, eveniet enim dolores sed praesentium id modi at tenetur temporibus non, atque tempora fuga expedita. Voluptatem, velit?Laborum cupiditate facere vel quisquam magnam soluta minus odit et quos rem est explicabo iste rerum repellendus enim delectus possimus, consectetur exercitationem mollitia. Odio delectus temporibus, numquam deserunt ipsum maiores.Iusto et distinctio, sit sunt id facilis atque reiciendis quas nisi. Voluptatibus in quas dicta dolore voluptatem. Amet voluptatem ea vero quae nam, porro in dolor maxime sit unde distinctio. Minima ipsam ut in nobis ipsa laudantium rem nisi quam aspernatur impedit delectus doloremque ea velit nihil unde magnam neque maxime laboriosam, ratione consectetur sequi aperiam? Ab distinctio voluptates doloremque.",
        },
        {
          _id: "a12s11da23sd",
          title: "JavaScript入门与进阶",
          date: "2020-07-01",
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate animi dicta, suscipit magnam adipisci quam nulla fuga eligendi eaque modi vitae eos accus",
        },
        {
          _id: "a12s11dasdasdsd3sd",
          title: "VueJs",
          date: "2020-07-01",
          content:
            "Loredo, sit amet conioredlor, sit amet conioredolor, sit amet conit r, sit amet conit lor, sit amet conitt r, sit amet conit lor, sit amet conit amet consectesectetur adipisicing elit. Cupiditate animi dicta, suscipit magnam adipisci quam nulla fuga eligendi eaque modi vitae eos accus",
        },
        {
          _id: "a12asdasasdd3sd",
          title: "NodeJs",
          date: "2020-07-01",
          content:
            "oredolor, sit amet conoredolor, sit amet conit r, sit amet conit lor, sit amet conitit r, sit amet conit lor, sit amet conitoororedolor, sit amet conit r, sit amet conit lor, sit amet conitedolor, sit amet conit r, sit amet conit lor, sit amet conitredolor, sit amet conit r, sit amet conit lor, sit amet conit amet consectesectetur adipisicing elit. Cupiditate animi dicta, suscipit magnam adipisci quam nulla fuga eligendi eaque modi vitae eos accus",
        },
      ],
    };
  },
  methods: {
    async read(obj) {
      this.content = obj.content;
      this.title = obj.title;
      this.date = obj.date;
      this.reading = obj._id;
      //如果列表中item文章没有content字段 则可以发起网络请求
      //const res=await api.getArticleItem(obj._id)
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  .doc {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    // max-width: 1100px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    .scrollClass {
      overflow-y: scroll;
      scrollbar-width: 1px;
    }
    > .nav {
      max-width: 12%;
      width: 12%;
      height: 100%;
      background: #fff;
      box-shadow: #ddd 2px 8px 8px 4px;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      margin-right: 8px;
      font-size: 12px;

      &::-webkit-scrollbar {
        //
        width: 0;
      }
      &:hover {
        //划过显示滚动
        overflow: auto;
      }
      .item {
        padding: 8px 0;
        cursor: pointer;
        width: 100%;
        &.reading {
          color: #fff;
          background: rgba(31, 161, 212, 0.7);
          transition: all 0.5s;
        }
      }
    }
    .content {
      flex: 1; //grow
      height: 100%;
      box-sizing: border-box;
      position: relative;
      &::-webkit-scrollbar {
        //
        width: 0;
      }
      .inactived {
        text-align: center;
        margin: 0 auto;
        width: 100%;
        height: 100%;
        display: grid;
        place-content: center;
        color: rgb(31, 161, 212);
        font-size: 18px;
        font-weight: 700;
      }
      .actived {
        width: 100%;
        height: 100%;
        line-height: 1.5;
        box-sizing: border-box;
        .line {
          font-size: 12px;
          color: #999;
          display: flex;
          align-items: center;
          text-align: center;
          margin: 10px 0 10px 0;
          position: relative;
          bottom: 0;
          left: 35%;
          &::before,
          &::after {
            content: "";
            width: 100px;
            height: 1px;
            background: #999;
          }
        }
      }
    }
  }
}
</style>