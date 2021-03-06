$boxes = [
	{
		label: "交通資訊",
		name: "transport",
	},
	{
		label: "稅務服務",
		name: "tax",
	},
	{
		label: "郵政服務",
		name: "post",
	},
	{
		label: "觀光旅遊",
		name: "tourism",
	},
	{
		label: "藝文活動",
		name: "event",
	},
	{
		label: "就業輔導",
		name: "job",
	},
	{
		label: "繳費功能",
		name: "payment",
	},
	{
		label: "醫療衛生",
		name: "medical",
	},
	{
		label: "公民參與",
		name: "citizen",
	},
	{
		label: "地方政府",
		name: "local",
	},
	{
		label: "法條規範",
		name: "law",
	},
	{
		label: "戶政機關",
		name: "tnecg",
	},
];


$Links = {
	transport : {
		links: [
			{title: "交通1", href:""},
			{title: "交通2", href:""},
		]
	},
	medical: {
		links: [
			{title: "聯合醫院各院區網路掛號", href: "http://webreg.tpech.gov.tw/RegOnline1.aspx"},
			{title: "醫療服務查詢", href: "http://health.gov.taipei/Default.aspx?tabid=669"},
			{title: "特殊照護服務", href: "http://health.gov.taipei/Default.aspx?tabid=670"},
			{title: "北市12區健康服務中心(原衛生所)", href: "http://www.health.gov.tw/health_center/"},

		]
	},
	tax: {
		links: [
			{title: "綜所稅結算申報", href: "http://tax.nat.gov.tw/info_IRX_download.html?id=1#"},
			{title: "營所稅結(決)算", href: "http://tax.nat.gov.tw/info.html?id=4"},
			{title: "房地合一申報", href: "http://tax.nat.gov.tw/info.html?id=17"},
			{title: "外僑綜所稅", href: "http://tax.nat.gov.tw/info.html?id=8"},
		]
	},
	tourism: {
		links: [
			{title: "觀光局最新資訊", href: "http://www.travel.taipei/frontsite/tw/cms/cmsAction.do?method=goCMSList&menuId=2010101&logMenuId=20151"},
			{title: "旅館查詢", href: "http://www.travel.taipei/frontsite/tw/store/hotelAction.do?method=findAll&menuId=2010202"},
			{title: "景點搜尋", href: "http://www.travel.taipei/tw/scene/"},
		]
	},
	event: {
		links: [
			{title: "藝文訂票入口", href: "http://www.travel.taipei/frontsite/tw/cms/cmsAction.do?method=goCMSDetail&listOne=true&contentId=3255&menuId=20121"},
			{title: "藝文資訊搜尋", href: "http://cultureexpress.taipei"},
		]
	},
	payment: {
		links: [
			{title: "停車繳費", href: "http://parkingfee.pma.gov.tw"},
			{title: "自來水繳費", href: "http://www.water.gov.tw/03online/counter0201_view.asp"},
			{title: "線上電費繳交", href: "http://www.taipower.com.tw/content/q_service/q_service01_6_2.aspx?NType=6"},
		]
	},
	post: {
		links: [
			{title: "郵件查詢", href: "http://postserv.post.gov.tw/webpost/CSController?cmd=POS4001_1&_SYS_ID=D&_MENU_ID=189&_ACTIVE_ID=190"},
			{title: "儲匯業務", href: "http://www.post.gov.tw/post/internet/B_saving/"},
			{title: "網路郵局", href: "https://ipost.post.gov.tw/web/CSController"},
		]
	},
	local: {
		links: [
			{title: "市政府最新消息", href: "http://www.gov.taipei/lp.asp?ctNode=5156&CtUnit=10399&BaseDSD=56&mp=100001"},
			{title: "市政信箱", href: "https://contact.taipei.gov.tw/cclm/clm/aspx/CLMG00000.aspx"},
			{title: "本市預決算", href: "http://www.gov.taipei/ct.asp?xItem=42588&CtNode=5318&mp=100001"},
		]
	},
	citizen: {
		links: [
			{title: "i-Voting", href: "https://ivoting.taipei"},
			{title: "市政府資料開放平台", href: "http://data.taipei"},
		]
	},
	tnecg: {
		links: [
			{title: "網路預約戶政登記", href: "https://www.ris.gov.tw/webapply/671"},
			{title: "戶政服務列表", href: "http://www.e-services.taipei.gov.tw/hypage.cgi?HYPAGE=index_01.htm&clsid0=1&clsid1=7&clsid2=403&cond=all&total_srv=72#showname_place"},
		]
	},
	transport: {
		links: [
			{title: "捷運整合資訊服務", href: "http://www.metro.taipei/ct.asp?xItem=78479152&CtNode=70089&mp=122035"},
			{title: "台灣高鐵網路訂票服務", href: "https://irs.thsrc.com.tw/IMINT?locale=tw"},
			{title: "台鐵網路訂票系統", href: "http://railway.hinet.net"},
		]
	},
	law: {
		links: [
			{title: "全國法規資料庫", href: "http://law.moj.gov.tw"},
			{title: "e化免費法律諮詢網", href: "http://law.twdetect.org.tw/contact.php"},
		]
	},
	job: {
		links: [
			{title: "北市就業服務處", href: "http://eso.gov.taipei/ct.asp?xItem=69075&CtNode=19058&mp=116041"},
			{title: "勞資信箱", href: "https://web.bola.taipei/mailbox/index.html"},
		]
	},
};