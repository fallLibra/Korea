import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Application from '@/pages/application'
import Applydetails from '@/pages/application/applydetails'
import Applylist from '@/pages/application/applylist'
import School from '@/pages/school'
import Schooldetails from '@/pages/school/schooldetails'
import SchooldetailsJpyy from '@/pages/school/schooldetailsjpyy'
import Schooldetailsjpcoll from '@/pages/school/schooldetailsjpcoll'
import Case from '@/pages/case'
import Casethanks from '@/pages/case/casethanks'
import Caseadmission from '@/pages/case/caseadmission'
import Casedetails from '@/pages/case/casedetails'
import News from '@/pages/news'
import Newsdetails from '@/pages/news/newsdetails'



Vue.use(Router)

export default new Router({
	routes: [
	{
		path: '/',
		name: 'Index',
		component: Index
	},
	{
		path: '/application',
		name: 'Application',
		component: Application
		
	},
	{
		path: '/applylist',
		name: 'Applylist',
		component: Applylist
	},
	{
		path: '/applydetails/:id',
		name: 'Applydetails',
		component: Applydetails,

	},
	{
		path: '/school',
		name: 'School',
		component: School
	},
	{
		path: '/schooldetails/:id',
		name: 'Schooldetails',
		component: Schooldetails
	},
	{
		path: '/schooldetails/jpyy/:id',
		name: 'SchooldetailsJpyy',
		component: SchooldetailsJpyy
	},
	{
		path: '/schooldetails/jpcoll/:id',
		name: 'Schooldetailsjpcoll',
		component: Schooldetailsjpcoll
	},
	{
		path: '/case',
		name: 'Case',
		component: Case
	},
	{
		path: '/case/casethanks',
		name: 'Casethanks',
		component: Casethanks
	},
	{
		path: '/case/caseadmission',
		name: 'Caseadmission',
		component: Caseadmission
	},
	{
		path: '/casedetails/:id/:r_pic',
		name: 'Casedetails',
		component: Casedetails
	},
	{
		path: '/news',
		name: 'News',
		component: News
	},
	{
		path: '/newsdetails/:id',
		name: 'Newsdetails',
		component: Newsdetails
	}
	],
	
})
