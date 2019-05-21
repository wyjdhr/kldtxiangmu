<template>
	<div>
		<!--头部提示信息-->
		<div class="tips">
			<span v-if="componentType=='home'" class="tips_num">{{getLevel}}</span>
			<span v-if="componentType=='question'" class="tips_num1">题目{{getQuestinNum}}</span>
		</div>
		<!--中间首页的logo图-->
		<div v-if="componentType=='home'">
			<div class="home_logo common_middle">
				
			</div>
			<!--开始按钮-->
			<!--to是一个prop，指定到需要跳转的路径-->
			<router-link class="start common_button" to="/question"></router-link>
		</div>
		<!--中间题目部分-->
		<div v-if="componentType=='question'">
			<!--题目列表-->
			<div class="question_container common_middle">
				<header class="question_title">{{getQuestionList[getQuestinNum-1].topic_name}}</header>
				<ul class="question_list">
		
		<li class="question_item" v-for="(item,index) in getQuestionList[getQuestinNum-1].topic_answer" @click="clickOption(index,item.topic_answer_id)">
						<span class="choose_char" :class="{choosed_char:index==chooseNum}">{{setChooseOption(index)}}</span>
						<span class="choose_option">{{item.answer_name}}</span>
					</li>
				</ul>
			</div>
			<!--下一题按钮-->
			<div class="next common_button" @click="goToNextQuestion" v-if="getQuestinNum<getQuestionList.length"></div>
			<div v-else class="submit common_button" @click="goToScore"></div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"container",
		data(){
			return {
				chooseNum:null,//记录我们点击选项的index值
				answerId:null,//记录我们选中你的选项的topic_answer_id值
			}
		},
//		props的对象写法用于验证
		props:{
//判断是home组件还是question组件
			componentType:{
				type:String
			}
		},
		computed:{
			getLevel(){
				return this.$store.state.level;
			},
			getQuestinNum(){
				return this.$store.state.questionNum;
			},
			getQuestionList(){
				return this.$store.state.questionList;
			}
		},
		created(){
			this.$store.commit("initData");
		},
		methods:{
			setChooseOption(index){
				switch(index){
					case 0:
						return 'A';
					case 1:
						return 'B';
					case 2:
						return 'C';
					case 3:
						return 'D';
				}
			},
			//点击选项
			clickOption(index,topic_answer_id){
				this.chooseNum=index;
				this.answerId=topic_answer_id;
			},
			//下一题
			goToNextQuestion(){
				//使用commit提交mutation
//				this.$store.commit("addQuestionNum");
				//使用dispatch触发action
				if(this.chooseNum!=null){
					this.$store.dispatch("addQuestionNumA");
					this.chooseNum=null;
					this.$store.dispatch("setMyQuestionA",this.answerId);
				}else{
					alert("请选择");
				}
				
			},
			//提交按钮点击事件
			goToScore(){
				//用api 来切换组件
				//把push改为replace就不会保存记录在历史记录中
				this.$router.push("score");
				this.$store.dispatch("setMyQuestionA",this.answerId);
			}
		}
	}
</script>

<style scoped lang="less">
	/*头部提示开始*/
	.tips{
		width: 4rem;
		height: 6rem;
		background: url(../images/WechatIMG2.png) no-repeat;
		background-size: 100% 100%;
		background-size: 100% 100%;
	    position: absolute;
	    right: 1.5rem;
		.tips_num{
			font-size: 0.6rem;
		    position: absolute;
		    top: 4.5rem;
		    left: 1.15rem;
		    color: purple;
		}
		.tips_num1{
			font-size: 0.6rem;
		    position: absolute;
		    top: 4.5rem;
		    left: 1.3rem;
		    color: purple;
		}
	}
	/*头部信息提示结束*/
	
	/*中间logo开始*/
	.home_logo{
		background: url(../images/1-2.png) no-repeat;
		background-size: 100% 100%;
	}
	.start{
		background: url(../images/1-4.png) no-repeat;
		background-size: 100% 100%;
		display: block;
	}
	.common_middle{
		width: 12rem;
		height: 10rem;
		position: absolute;
		top: 6rem;
		left: 50%;
		margin-left: -6rem;
	}
	.common_button{
		width: 4rem;
		height: 2rem;
		position: absolute;
	    top: 16rem;
	    left: 50%;
	    margin-left: -2rem;
	}
	/*中间logo结束*/
	
	/*中间题目部分开始*/
	.question_container{
		background: url(../images/2-1.png) no-repeat;
		background-size: 100% 100%;
		.question_title{
			font-size: 0.5rem;
			margin-top: 2rem;
			margin-left: 2rem;
		}
		.question_list{
			margin-left: 2rem;
			margin-top: 0.5rem;
			.question_item{
				line-height:1rem;
				height:1rem;
				.choose_option{
					font-size: 0.5rem;
					margin-left: 0.5rem;
				}
				.choose_char{
					display: inline-block;
					border: 1px solid gray;
					border-radius: 50%;
					font-size: 0.6rem;
					width: 0.8rem;
					height: 0.8rem;
					text-align: center;
					line-height: 0.8rem;
				}
				.choosed_char{
					background: yellow;
					border-color: yellow;
					color: black;
				}
			}
		}
	}
	/*中间题目部分结束*/
	
	/*下一题按钮开始*/
	.next{
		background: url(../images/2-2.png) no-repeat;
		background-size: 100% 100%;
	}
	.submit{
		background: url(../images/3-1.png) no-repeat;
		background-size: 100% 100%;
	}
	/*下一题按钮结束*/
</style>