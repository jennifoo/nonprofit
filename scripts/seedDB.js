const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/ftcblog"
);

const postSeed = [
  {
    title: "heART for Freedom – Art Show! Get your tickets today!",
    author: "Julie Waters, JD",
    post:
      `HeArt for Freedom 2018 is a response by the fine arts community to the challenging reality of human trafficking in the Houston area. When faced with the ugliness of modern day slavery, we can run, we can cower or pretend that we don’t see, or we can stand and combat this darkness with the transformative power of art. And so, we are creating, bringing to live, materializing the imagined, and presenting it at HeArt for Freedom. Come and be changed for the better.
      
      Our Show and Auction is a one-day event where art connoisseurs and socially-minded individuals can purchase world-class pieces and, through their purchases, support Free the Captives, which combats the sex trafficking of minors in Houston. HeArt for Freedom will be hosted on Sept. 29, 2018, by the Church at 1548 Heights, in a historic 1920’s building with a lot of personality and heArt. The event will feature live music, performance painters, art, photography, artisan craft, hors d’oeuvres and more.
      
      Get your tickets today! <a href="https://www.heartforfreedom.com/">Click Here</a>`,
    date: new Date(Date.now())
  },
  {
    title: "Job Openings: Apply Today!",
    author: "Julie Waters, JD",
    post:
      `Houston is one of the top cities in the US for sex trafficking. The average of a girl being trafficked is between 12 to 14 years old. We have several anti-human trafficking job openings located in downtown Houston.

      Do you want to fight one of the most horrible epidemics that plagues Houston?
      Do you want to forever impact the life of a teenaged trafficking victim?
      Do you have what it takes to join Free the Captives’ team?
      We need committed, hard working individuals who want to make a long term difference in the lives of Free the Captives’ teen sex trafficking victims. This pre-employment letter gives you a realistic picture of who we are looking for and what it takes to be successful at Free the Captives. Please read it thoroughly before you apply. Open positions are listed below.
      
      So who are we looking for?
      
      Previous Volunteer or Intern Experience: First priority goes to people who have held internships at Free the Captives or who have volunteered extensively at multiple events. This allows us to get to know you pretty well. So if you have not attended any volunteer meetings or helped at our numerous events, get involved today. We also accept interns all year long.

      Long term: Free the Captives’ teen trafficking victims have been let down by numerous people in their young lives. Many have experienced abandonment, neglect and abuse from infancy. They have attachment issues. Everyone they have ever trusted has let them down. We are trying to break that pattern in their lives. We are looking people who can commit for the long-term. If you have not held a job for more than two or three years, we are not the organization for you. We need people who want to stay with Free the Captives for the next five years or more. When our girls get attached to you, and you leave, you are damaging their healing and setting them back tremendously.

      Financial stability: We are a non-profit ministry. We pay competitively, and all job positions list a salary range. But still, we pay what non-profits pay. Please do not apply if you are taking a $5,000 or $20,000 pay cut from your current position. (Yes, this has happened.) You will not be able to sustain your life style, and you will not be happy. It doesn’t matter how passionate you are. Passion doesn’t pay the bills. Be realistic when it comes to your budget. Also, do you have credit card debt? School debt is manageable and can be forgiven. Credit card debt cannot. Do not apply if you have a lot of credit card debt or have difficulty staying within a budget. Lastly, do you own a car, and is it reliable? In order to provide a high level of service to our girls, we have to drive to them, and they live all over Houston. So it is an important requirement that you have access to a highly reliable car all the time.

      Mentally and Physically Healthy: Working in the anti-trafficking field is mentally and physically demanding. We are dealing with very difficult issues. You need to be healthy, both emotionally and physically. Have you experienced sexual abuse or domestic violence? Do you struggle with depression? Have you dealt with past issues? People who have gone through difficult experiences are able to truly impact our girls because they can empathize. But if you have NOT successfully dealt with these issues, then you should not apply. You have to take care of yourself first, and deal with your own demons before you can help anyone else. People who have not healed from their own abuse will do more damage to our trafficked girls instead of good.

      Are you in good shape? Do you work out regularly on a weekly basis? Being healthy will enable you to do your best in stressful situations.

      Responsive and Detail Oriented: We are looking for people who can multi-task without making mistakes, pay attention to details and have strong written skills. Proper grammar is important. In this day and age of texting, commas and apostrophes seem to have fallen by the wayside. (Hint: always sign your cover letter, even if you are emailing it.) We need people who are quick but accurate and competent. Free the Captives is a very fast paced work environment. We have a limited amount of time to show these girls that we really care so every minute counts!

      Hard working: Again, we are a small nonprofit. And in a small non-profit, everyone does everything – from cleaning toilets to working with HPD to rescue girls. The hours at Free the Captives can be long. We are fighting sex trafficking. Sex trafficking doesn’t happen between the hours of 9 and 5. You may have to meet with a girl at 9:30pm because of an emergency. You may have to drive to the bad parts of Houston. We work on weekends and some week nights. The work week will be between 40 and 55 hours. Be prepared to work hard.

      And be prepared to make a difference.

      You are making a difference in the life of a girl who has seen the worst of humanity and has survived some of the most horrific abuse known to man. When you are hauling the umpteenth box of candles to an event or waiting at the DMV with a girl for the past five hours or doing another mundane task, you have to realize that your actions ensure that one teen trafficking survivor is having a chance at a better life because you are willing to do the less glamorous work.

      High Expectations for Highly Competent People: I expect the best from people. All of Free the Captives’ staff and volunteers are held to a high standard. Why? Because Free the Captives’ girls deserve the BEST. They have been let down their entire lives. We have the opportunity to change that.

      How do you restore the self esteem and confidence of a girl who has been called a “whore” or “slut” since she was 12 years old?

      By giving her our best.
      By being in it for the long haul.
      By going the extra mile for her.
      Don’t apply if you can’t do those three things. Too much is at stake.

      I want to hire highly competent people who are not afraid of hard work. This is not a place for people whose feelings get hurt easily or need hand holding or currently have a lot of personal issues. I want to hire people who are self starters, know how to take initiative, and will do what it takes to get the job done (even on the weekends).

      So now you know what it takes to be successful at Free the Captives. If you put in the hard work for the long term, you will see:

      Young trafficked girls grow into successful young ladies
      Who heal physically and emotionally
      Who go to college
      Who get jobs and become financially stable
      Who see themselves in a whole new light
      Lives changed
      But none of this happens overnight. We have worked with many of our girls for four or more years. We have seen them grow into young adults who have overcome so much.
      We have seen them laugh, find their self worth, and become independent, healthy young ladies.
      After reading this letter and having the proper expectations, if you feel like you’d be a good fit, please apply. Please make sure that you include all the required components. I look forward to reviewing your application!

      Many thanks,

      Julie Waters, JD

      Executive Director and Founder`,
    date: new Date(Date.now())
  },
  {
    title: "Trafficking conference fees increase Friday! Sign up today to save money!",
    author: "Julie Waters, JD",
    post:
      `Do you want the latest information and updates on human trafficking in Houston? Come to Free the Captives’ 8th Annual Houston Human Trafficking Conference! This is a fantastic opportunity to learn about human trafficking from the following experts:

      – Mayor’s Office
      – HPD Vice and Anti-Trafficking Unit
      – DA’s Office – Sex Crimes Unit
      – County Attorney’s Office
      – FBI
      – Governor’s Office – Child Sex Trafficking Team
      – Redeemed Ministries
      – A 2nd Cup
      – and MORE!!
      Join us on Friday, February 16, 2018, at the United Way, 50 Waugh Drive, Houston, TX 77007 from 8am to 4pm. The goal of Free the Captives’ conference is to equip and train nonprofit and ministry leaders as well as anyone in the community who wants to make a difference. We will provide you with critical information and practical tools to stop human trafficking.
      
      Register by THIS Friday, February 2.
      Prices increase afterwards.
      REGISTER TODAY!
      
      Summer Internship Deadline Extended
      Are you a college student who wants to help our teen trafficking survivors during our summer job program? This is your opportunity to have a direct impact on our girls by helping them develop job skills. This is a paid internship, and we have extended the deadline until February 15.

      Applications that are mailed in early will be given priority over those who are sent in later. For an internship application, please email volunteer@freethecaptiveshouston.com with the name of your school and your current classification.

      You can make a difference in a teen survivor’s restoration and healing!

      HELP Provide a Job for Trafficked Teens: (Urgent Need)
      Hurricane Harvey is threatening to end our job program for trafficked teens. We have to sell all the candles that our girls made this past summer before we can hire them again. Typically, we sell out by Christmas but due to Hurricane Harvey, several fall markets were cancelled and many of our buyers were flooded. We have sold 2700 candles but we still have 1500 left to sell. WE NEED YOUR HELP!

      If we do not sell the remaining candles, we cannot hire our girls again this summer.

      Buy our amazing teen trafficking survivors’ hand-poured soy candles! They are amazing gifts for your loved ones. Also please see if your church would share about our girls’ work and provide us with an opportunity to sell the candles on a Sunday. Email volunteer@freethecaptiveshouston.com with any questions. Thank you in advance for your help. Giving our girls a job is critical to their restoration!

      Buy a candle TODAY, and provide our teen trafficking survivors with a job!
      
      “Superheroes for Freedom” 5K
      Register today to save money for Free the Captives’ SuperHeroes for Freedom 5K! Start your own team or a fundraising page to earn some awesome prizes. This event is fun for the whole family. Join us in your best superhero costume, and help us fight teenaged trafficking in Houston!

      Register now to save money!`,
    date: new Date(Date.now())
  },
  {
    title: "Will Harvey end our job program for trafficked teens?",
    author: "Julie Waters, JD",
    post:
      `HELP Provide a Job for Trafficked Teens: (Urgent Need)
      Will you help provide our teen trafficking survivors with a job? We have to sell all the candles that our girls made this past summer before we can hire them again. Typically, we sell out by Christmas but due to Hurricane Harvey, several fall markets were cancelled and many of our buyers were flooded. We have sold 2700 candles but we still have 1500 left to sell. WE NEED YOUR HELP!
      
      If we do not sell the remaining candles, we cannot hire our girls again this summer.
      
      Buy our amazing teen trafficking survivors’ hand-poured soy candles! They are amazing gifts for your loved ones. Also please see if your church would share about our girls’ work and provide us with an opportunity to sell the candles on a Sunday. Email volunteer@freethecaptiveshouston.com with any questions. Thank you in advance for your help. Giving our girls a job is critical to their restoration!
      
      Buy a candle TODAY, and provide our teen trafficking survivors with a job!
      WWW.FREETHECAPTIVESHOUSTONSHOP.COM

      Do you want the latest information and updates on human trafficking in Houston? Come to Free the Captives’ 8th Annual Houston Human Trafficking Conference! This is a fantastic opportunity to learn about human trafficking from the experts and how you can get involved in fighting this terrible crime.Join us on Friday, February 16, 2018, at the United Way, 50 Waugh Drive, Houston, TX 77007 from 8am to 4pm. The goal of Free the Captives’ conference is to equip and train nonprofit and ministry leaders as well as anyone in the community who wants to make a difference. We will provide you with critical information and practical tools to stop human trafficking.
      Early registration ends this Friday, Jan. 12. REGISTER TODAY!
      http://www.freethecaptiveshouston.com/houston-human-trafficking-conference/

      Summer Internship Deadline Extended

      Are you a college student who wants to help our teen trafficking survivors during our summer job program? This is your opportunity to have a direct impact on our girls by helping them develop job skills. This is a paid internship, and we have extended the deadline until February 15.

      Applications that are mailed in early will be given priority over those who are sent in later. For an internship application, please email volunteer@freethecaptiveshouston.com with the name of your school and your current classification.

      You can make a difference in a teen survivor’s restoration and healing!

      “Superheroes for Freedom” 5K
      Register today to save money for Free the Captives’ SuperHeroes for Freedom 5K! Start your own team or a fundraising page to earn some awesome prizes. This event is fun for the whole family. Join us in your best superhero costume, and help us fight teenaged trafficking in Houston!

      Register now to save money!`,
    date: new Date(Date.now())
  }
];

db.Post
  .remove({})
  .then(() => db.Post.collection.insertMany(postSeed))
  .then(data => {
    console.log(data.result.n + " post records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
