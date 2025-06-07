<template>
    <view class="content">
        <form class="app-update-pv">
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">预约编号</view>
                <input   disabled
                         :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"0","borderWidth":"2rpx 2rpx 2rpx 8rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                         :disabled="ro.shiyanshiYuyueUuidNumber" type="text" v-model="ruleForm.shiyanshiYuyueUuidNumber" placeholder="预约编号"></input>
            </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">课题名称</view>
                <input   disabled
                         :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"0","borderWidth":"2rpx 2rpx 2rpx 8rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                         :disabled="ro.shiyanshiYuyueName" type="text" v-model="ruleForm.shiyanshiYuyueName" placeholder="课题名称"></input>
            </view>
                <view :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                      class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">课题类型</view>
                    <picker @change="shiyanshiYuyueTypesChange" :value="shiyanshiYuyueTypesIndex" :range="shiyanshiYuyueTypesOptions" range-key="indexName">
                        <view
                                :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"0","borderWidth":"2rpx 2rpx 2rpx 8rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                                class="uni-input">{{ruleForm.shiyanshiYuyueTypes?ruleForm.shiyanshiYuyueValue:"请选择课题类型"}}</view>
                    </picker>
                </view>
<!-- text后缀 -->
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"210rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">课题介绍</view>
                <textarea :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"0","borderWidth":"2rpx 2rpx 2rpx 8rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx","height":"200rpx"}'
                          :disabled="ro.shiyanshiYuyueContent" v-model="ruleForm.shiyanshiYuyueContent" placeholder="课题介绍"/>
            </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">使用开始时间</view>
                <input
                        :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"0","borderWidth":"2rpx 2rpx 2rpx 8rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                        v-model="ruleForm.kaishiTime" placeholder="使用开始时间" :readonly="ro.kaishiTime"
                        @tap="toggleTab('kaishiTime')"></input>
            </view>
					            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">使用结束时间</view>
                <input
                        :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"0","borderWidth":"2rpx 2rpx 2rpx 8rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                        v-model="ruleForm.jieshuTime" placeholder="使用结束时间" :readonly="ro.jieshuTime"
                        @tap="toggleTab('jieshuTime')"></input>
            </view>
					
            <view class="btn">
                <button
                        :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,0) inset","backgroundColor":"var(--publicMainColor)","borderColor":"#409EFF","borderRadius":"8rpx","color":"rgba(255, 255, 255, 1)","borderWidth":"0","width":"70%","fontSize":"32rpx","borderStyle":"solid","height":"80rpx"}'
                        @tap="onSubmitTap" class="bg-red">提交</button>
            </view>
        </form>

					<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="insertTimeConfirm"
                              ref="insertTime" themeColor="#333333"></w-picker>
					<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="kaishiTimeConfirm"
                              ref="kaishiTime" themeColor="#333333"></w-picker>
					<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="jieshuTimeConfirm"
                              ref="jieshuTime" themeColor="#333333"></w-picker>
					<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="shiyanshiYuyueShenheTimeConfirm"
                              ref="shiyanshiYuyueShenheTime" themeColor="#333333"></w-picker>
					<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="createTimeConfirm"
                              ref="createTime" themeColor="#333333"></w-picker>


    </view>
</template>

<script>
    import wPicker from "@/components/w-picker/w-picker.vue";

    export default {
        data() {
            return {
                cross: '',
                ro:{
					shiyanshiId: false,
					laoshiId: false,
					shiyanshiYuyueUuidNumber: true,
					shiyanshiYuyueName: false,
					shiyanshiYuyueTypes: false,
					shiyanshiYuyueContent: false,
					insertTime: false,
					kaishiTime: false,
					jieshuTime: false,
					shiyanshiYuyueYesnoTypes: false,
					shiyanshiYuyueYesnoText: false,
					shiyanshiYuyueShenheTime: false,
					createTime: false,
        },
            ruleForm: {
					shiyanshiId: '',
					laoshiId: '',
					shiyanshiYuyueUuidNumber: this.getUUID(),//数字
					shiyanshiYuyueName: '',
					shiyanshiYuyueTypes: '',//数字
					shiyanshiYuyueValue: '',//数字对应的值
					shiyanshiYuyueContent: '',
					insertTime: '',
					kaishiTime: '',
					jieshuTime: '',
					shiyanshiYuyueYesnoTypes: '',//数字
					shiyanshiYuyueYesnoValue: '',//数字对应的值
					shiyanshiYuyueYesnoText: '',
					shiyanshiYuyueShenheTime: '',
					createTime: '',
            },
            // 登陆用户信息
            user: {},
				shiyanshiYuyueTypesOptions: [],
							shiyanshiYuyueTypesIndex : 0,
				shiyanshiYuyueYesnoTypesOptions: [],
							shiyanshiYuyueYesnoTypesIndex : 0,

        }
        },
        components: {
            wPicker
        },
        computed: {
            baseUrl() {
                return this.$base.url;
            },
        },
        async onLoad(options) {

		/*下拉框*/
			let shiyanshiYuyueTypesParams = {
                page: 1,
                limit: 100,
                dicCode: 'shiyanshi_yuyue_types',
            }
			let shiyanshiYuyueTypes = await this.$api.page(`dictionary`, shiyanshiYuyueTypesParams);
			this.shiyanshiYuyueTypesOptions = shiyanshiYuyueTypes.data.list
		/*下拉框*/
			let shiyanshiYuyueYesnoTypesParams = {
                page: 1,
                limit: 100,
                dicCode: 'shiyanshi_yuyue_yesno_types',
            }
			let shiyanshiYuyueYesnoTypes = await this.$api.page(`dictionary`, shiyanshiYuyueYesnoTypesParams);
			this.shiyanshiYuyueYesnoTypesOptions = shiyanshiYuyueYesnoTypes.data.list


            // 如果是更新操作
            if (options.id) {
                this.ruleForm.id = options.id;
                // 获取信息
                let res = await this.$api.info(`shiyanshiYuyue`, this.ruleForm.id);
                this.ruleForm = res.data;
            }
            if(options.shiyanshiYuyueId){
                this.ruleForm.shiyanshiYuyueId = options.shiyanshiYuyueId;
            }
            // 跨表
            // this.styleChange()
        },
        methods: {
            // 下拉变化
            shiyanshiYuyueTypesChange(e) {
                this.shiyanshiYuyueTypesIndex = e.target.value
                this.ruleForm.shiyanshiYuyueValue = this.shiyanshiYuyueTypesOptions[this.shiyanshiYuyueTypesIndex].indexName
                this.ruleForm.shiyanshiYuyueTypes = this.shiyanshiYuyueTypesOptions[this.shiyanshiYuyueTypesIndex].codeIndex
            },
            shiyanshiYuyueYesnoTypesChange(e) {
                this.shiyanshiYuyueYesnoTypesIndex = e.target.value
                this.ruleForm.shiyanshiYuyueYesnoValue = this.shiyanshiYuyueYesnoTypesOptions[this.shiyanshiYuyueYesnoTypesIndex].indexName
                this.ruleForm.shiyanshiYuyueYesnoTypes = this.shiyanshiYuyueYesnoTypesOptions[this.shiyanshiYuyueYesnoTypesIndex].codeIndex
            },


            // styleChange() {
            // 	this.$nextTick(() => {
            // 		// document.querySelectorAll('.app-update-pv .cu-form-group .uni-yaoxianStyle-yaoxianStyle').forEach(el=>{
            // 		//   el.style.backgroundColor = this.addUpdateForm.yaoxianStyle.content.backgroundColor
            // 		// })
            // 	})
            // },


			// 日期控件
			insertTimeConfirm(val) {
                this.ruleForm.insertTime = val.result;
                this.$forceUpdate();
            },
			// 日期控件
			kaishiTimeConfirm(val) {
                this.ruleForm.kaishiTime = val.result;
                this.$forceUpdate();
            },
			// 日期控件
			jieshuTimeConfirm(val) {
                this.ruleForm.jieshuTime = val.result;
                this.$forceUpdate();
            },
			// 日期控件
			shiyanshiYuyueShenheTimeConfirm(val) {
                this.ruleForm.shiyanshiYuyueShenheTime = val.result;
                this.$forceUpdate();
            },
			// 日期控件
			createTimeConfirm(val) {
                this.ruleForm.createTime = val.result;
                this.$forceUpdate();
            },




            getUUID() {
                return new Date().getTime();
            },
            async onSubmitTap() {
				if ((!this.ruleForm.shiyanshiYuyueUuidNumber)) {
                    this.$utils.msg(`预约编号不能为空`);
                    return
                }
				if ((!this.ruleForm.shiyanshiYuyueName)) {
                    this.$utils.msg(`课题名称不能为空`);
                    return
                }
				if ((!this.ruleForm.kaishiTime)) {
                    this.$utils.msg(`使用开始时间不能为空`);
                    return
                }
				if ((!this.ruleForm.jieshuTime)) {
                    this.$utils.msg(`使用结束时间不能为空`);
                    return
                }
                if (this.ruleForm.id) {
                    await this.$api.update(`shiyanshiYuyue`, this.ruleForm);
                } else {
                    await this.$api.add(`shiyanshiYuyue`, this.ruleForm);
                }
                uni.setStorageSync('pingluenStateState', true);
                this.$utils.msgBack('提交成功');
            },
            getDate(type) {
                const date = new Date();
                let year = date.getFullYear();
                let month = date.getMonth() + 1;
                let day = date.getDate();
                if (type === 'start') {
                    year = year - 60;
                } else if (type === 'end') {
                    year = year + 2;
                }
                month = month > 9 ? month : '0' + month;;
                day = day > 9 ? day : '0' + day;
                return `${year}-${month}-${day}`;
            },
            toggleTab(str) {
                this.$refs[str].show();
            }
        }
    }
</script>
<style lang="scss" scoped>
    .container {
        padding: 20upx;
    }

    .content:after {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        content: '';
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
    }

    textarea {
        border: 1upx solid #EEEEEE;
        border-radius: 20upx;
        padding: 20upx;
    }

    .title {
        width: 180upx;
    }

    .avator {
        width: 150upx;
        height: 60upx;
    }

    .right-input {
        flex: 1;
        text-align: left;
        padding: 0 24upx;
    }

    .cu-form-group.active {
        justify-content: space-between;
    }

    .cu-form-group .title {
        height: auto;
        line-height:30rpx
    }

    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 20upx 0;
    }

    .cu-form-group {
        padding: 0 24upx;
        background-color: transparent;
        min-height: inherit;
    }

    .cu-form-group+.cu-form-group {
        border: 0;
    }

    .cu-form-group uni-input {
        padding: 0 30upx;
    }

    .uni-input {
        padding: 0 30upx;
    }

    .cu-form-group uni-textarea {
        padding: 30upx;
        margin: 0;
    }

    .cu-form-group uni-picker::after {
        line-height: 80rpx;
    }

    .select .uni-input {
        line-height: 80rpx;
    }

    .input .right-input {
        line-height: 88rpx;
    }
</style>