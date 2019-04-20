import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const BasicInfo = () => import('@/components/BasicInfo');//基础信息
const DistributionFriends = () => import('@/components/DistributionFriends'); //好友分布
const SpecialSkill  = () => import('@/components/SpecialSkill'); //特殊技能
const ArticleAchievement = () => import('@/components/ArticleAchievement'); //文章成就
const WorkExperience = () => import('@/components/WorkExperience');//工作经验
const ProgrammingSkills = () => import('@/components/ProgrammingSkills'); //编程技能
const JobIntention = () => import('@/components/JobIntention'); //工作意向

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        BasicInfo: BasicInfo,
        DistributionFriends: DistributionFriends,
        SpecialSkill : SpecialSkill ,
        ArticleAchievement: ArticleAchievement,
        WorkExperience: WorkExperience,
        ProgrammingSkills: ProgrammingSkills,
        JobIntention: JobIntention
      }
    },
    {
      path: '/BasicInfo',
      name: 'BasicInfo',
      component: BasicInfo
    },
    {
      path: '/DistributionFriends',
      name: 'DistributionFriends',
      component: DistributionFriends
    },
    {
      path: '/SpecialSkill ',
      name: 'SpecialSkill ',
      component: SpecialSkill
    },
    {
      path: '/ArticleAchievement',
      name: 'ArticleAchievement',
      component: ArticleAchievement
    },
    {
      path: '/WorkExperience',
      name: 'WorkExperience',
      component: WorkExperience
    },
    {
      path: '/ProgrammingSkills',
      name: 'ProgrammingSkills',
      component: ProgrammingSkills
    },
    {
      path: '/JobIntention',
      name: 'JobIntention',
      component: JobIntention
    },
  ]
})
