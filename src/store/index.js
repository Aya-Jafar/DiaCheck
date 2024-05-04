import website from "../assets/website.png";
import decision from "../assets/decision.png";
import predective from "../assets/predective.png";
import faster from "../assets/faster.png";

export const articlesData = [
  // No Diabetes Category
  {
    id: 1,
    category: "no-diabetes",
    title: "Maintaining a Healthy Lifestyle",
    url: "https://www.who.int/philippines/news/feature-stories/detail/20-health-tips-for-2020",
  },
  {
    id: 2,
    category: "no-diabetes",
    title: "Understanding Prediabetes",
    url: "https://m.youtube.com/watch?v=TYINyqyp8xE",
  },
  {
    id: 3,
    category: "no-diabetes",
    title: "Healthy Eating on a Budget",
    url: "https://www.verywellfit.com/meal-plans-6386423",
  },
  {
    id: 4,
    category: "no-diabetes",
    title: "The Importance of Physical Activity",
    url: "https://www.cdc.gov/physicalactivity/basics/adults/index.htm",
  },
  {
    id: 5,
    category: "no-diabetes",
    title: "Managing Stress Levels",
    url: "https://www.wltx.com/article/news/health/stress-heart-health/101-97a14024-ed3a-488b-95ab-d09c57ac743f",
  },

  // Have a Risk of Diabetes Category
  {
    id: 6,
    category: "have-a-risk-of-diabetes",
    title: "Understanding Type 2 Diabetes",
    url: "https://www.niddk.nih.gov/health-information/diabetes",
  },
  {
    id: 7,
    category: "have-a-risk-of-diabetes",
    title: "Dietary Changes for Diabetes Prevention",
    url: "https://diabetes.org/",
  },
  {
    id: 8,
    category: "have-a-risk-of-diabetes",
    title: "Weight Loss and Diabetes Prevention",
    url: "https://bmcwomenshealth.biomedcentral.com/articles/10.1186/s12905-019-0864-5",
  },
  {
    id: 9,
    category: "have-a-risk-of-diabetes",
    title: "The Benefits of Exercise for Diabetes Prevention",
    url: "https://www.cdc.gov/diabetes/data/statistics-report/index.html",
  },
  {
    id: 10,
    category: "have-a-risk-of-diabetes",
    title: "Managing Prediabetes with Lifestyle Changes",
    url: "https://www.webmd.com/diabetes/video/reverse-prediabetes",
  },

  // Have Diabetes Category
  {
    id: 11,
    category: "have-diabetes",
    title: "Living Well with Diabetes",
    url: "https://www.cdc.gov/diabetes/basics/index.html",
  },
  {
    id: 12,
    category: "have-diabetes",
    title: "Managing Blood Sugar Levels",
    url: "https://my.clevelandclinic.org/departments/endocrinology-metabolism/depts/diabetes",
  },
  {
    id: 13,
    category: "have-diabetes",
    title: "Healthy Meal Planning for Diabetes",
    url: "https://diabetes.org/food-nutrition/meal-planning",
  },
  {
    id: 14,
    category: "have-diabetes",
    title: "Importance of Medication Adherence",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8037733/",
  },
  {
    id: 15,
    category: "have-diabetes",
    title: "Diabetes Complications and Prevention",
    url: "https://www.mayoclinic.org/diseases-conditions/peripheral-neuropathy/symptoms-causes/syc-20352061",
  },
];

export const features = [
  {
    title: "Revolutionizing Diabetes Risk Assessment with Machine Learning",
    description:
      "At the core of our innovative approach lies a powerful machine learning model. This sophisticated system analyzes a comprehensive set of your lab results, providing valuable insights into your potential risk for developing diabetes. Unlike traditional methods that can involve lengthy wait times and complex evaluations, our system delivers results quickly and conveniently. This empowers you to take charge of your health and make informed decisions sooner. No more waiting in the dark – our system sheds light on your health status, allowing you to proactively manage your well-being and potentially prevent future health concerns.",
    image: faster,
  },
  {
    description:
      "Our system goes beyond traditional analysis by leveraging the cutting-edge power of machine learning algorithms. These algorithms are trained on massive datasets of health information, allowing them to identify complex patterns and relationships within your lab results. Through this comprehensive analysis, we aim to deliver highly accurate assessments of your health status with a focus on potential diabetes risk. This sophisticated approach has the potential to reduce the need for additional examinations in the future, saving you valuable time and resources.  Furthermore, these insights empower you to take proactive steps towards maintaining your well-being and preventing potential health concerns.",
    title: "Unlocking the Power of Machine Learning for Early Detection",
    image: predective,
  },
  {
    title: "Unparalleled Accessibility: Analyze Your Health Data from Anywhere",
    description:
      "We understand that convenience is key in today's fast-paced world. That's why our user-friendly platform provides seamless accessibility from anywhere with an internet connection. There's no need for complicated software downloads or installations. Simply upload your lab results through our secure interface and receive your analysis within minutes. Additionally, you'll have access to a wealth of relevant educational resources  – all conveniently located in one place. This web-based accessibility empowers both individuals and healthcare professionals to make informed decisions about their health, regardless of their physical location.",
    image: website,
  },
  {
    title: "Actionable Insights: Partnering with You on Your Health Journey",
    description:
      "Our system is more than just a results provider; it's a partner in your health journey. We believe that knowledge is power, and that's why we go beyond simply offering data. Our analysis provides you with actionable insights that can be used to make informed decisions about your health. Early detection of potential diabetes allows for proactive management strategies, such as lifestyle modifications or preventative treatments. With our system's guidance, you'll be empowered to take control of your health and work towards a healthier future. Additionally, healthcare professionals can utilize our insights to personalize treatment plans and patient care, ultimately improving patient outcomes and quality of life.",
    image: decision,
  },
];



export const navItems = [
    {
        title: "Home",
        route: "/",
    },
    {
        title: "check your risk",
        route: "/riskCheck",
    },
    {
        title: "About us",
        route: "/about",
    },
    {
      title: "Articles",
      route: "/articles",
  },
];