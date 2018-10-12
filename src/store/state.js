let defaultCountry = '日本'

try {
  if (localStorage.country) {
    defaultCity = localStorage.country;
  }
} catch (e) {}

export default {
	country: defaultCountry,
	countryData: [
		{
			name: '日本',
			flagSrc: '../../../static/images/header/jp.png',
			area: [
				{name: "全部地区"},
				{name: "北海道"},
				{name: "东北"},
				{name: "关东"},
				{name: "北陆甲信越"},
				{name: "近畿"},
				{name: "中国四国"},
				{name: "东海"},
				{name: "九州冲绳"}
			],
			dataAPI: {
				getSchoolListUrl: 'http://manages.com/getkoreaschool'
			}
		},
		{
			name: '韩国',
			flagSrc: '../../../static/images/header/kr.png',
			area: [
				{
					name: "全部地区",
					city: [{name: "全部城市"}]
				},
				{
					name: "首尔特别市",
					city: [
					{name: "全部城市"},
					{name: "首尔"}
					]
				},
				{
					name: "庆尚南道",
					city: [
					{name: "全部城市"},
					{name: "马山市"},
					{name: "晋州市"},
					{name: "镇海市"},
					{name: "统营市"}
					]
				},
				{
					name: "庆尚北道",
					city: [
					{name: "全部城市"},
					{name: "浦项市"},
					{name: "庆州市"},
					{name: "金泉市"},
					{name: "安东市"},
					{name: "龟尾市"},
					{name: "庆山市"},
					{name: "昌原市"}
					]
				},
				{
					name: "全罗南道",
					city: [
					{name: "全部城市"},
					{name: "木浦市"},
					{name: "丽水市"},
					{name: "顺天市"},
					{name: "罗州市"},
					{name: "光阳市"},
					]
				},
				{
					name: "全罗北道",
					city: [
					{name: "全部城市"},
					{name: "全州市"},
					{name: "群山市"},
					{name: "益山市"},
					{name: "井邑市"}
					]
				},
				{
					name: "忠清南道",
					city: [
					{name: "全部城市"},
					{name: "天安市"},
					{name: "公州市"},
					{name: "保宁市"},
					{name: "牙山市"},
					]
				},
				{
					name: "忠清北道",
					city: [
					{name: "全部城市"},
					{name: "清州市"},
					{name: "忠州市"},
					{name: "堤川市"}
					]
				},
				{
					name: "江原道",
					city: [
					{name: "全部城市"},
					{name: "春川市"},
					{name: "原州市"},
					{name: "江陵市"},
					{name: "东海市"},
					{name: "太白市"}
					]
				},
				{
					name: "京畿道",
					city: [
					{name: "全部城市"},
					{name: "水原市"},
					{name: "城南市"},
					{name: "议政府市"},
					{name: "安养市"},
					{name: "富川市"},
					{name: "光明市"},
					{name: "平泽市"},
					{name: "东豆川市"}
					]
				},
				{
					name: "蔚山广域市",
					city: [
					{name: "全部城市"},
					{name: "蔚山"}
					]
				},
				{
					name: "大田广域市",
					city: [
					{name: "全部城市"},
					{name: "大田"},
					]
				},
				{
					name: "光州广域市",
					city: [
					{name: "全部城市"},
					{name: "光州"}
					]
				},
				{
					name: "仁川广域市",
					city: [
					{name: "全部城市"},
					{name: "仁川"}
					]
				},
				{
					name: "大邱广域市",
					city: [
					{name: "全部城市"},
					{name: "大邱"}
					]
				},
				{
					name: "釜山广域市",
					city: [
					{name: "全部城市"},
					{name: "釜山"}
					]
				},
				{
					name: "济州特别自治道",
					city: [
					{name: "全部城市"},
					{name: "济州市"}
					]
				}
			],
			
		},
		{
			name: '新加坡',
			flagSrc: '../../../static/images/header/sin.png',
			area: []
		}
	],
	selectedcountryData: {}
}