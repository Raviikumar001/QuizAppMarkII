const readlineSync = require('readline-sync');
const chalk= require('chalk');
let score = 0;

let userName = readlineSync.question("Please enter your name? : ");

console.log(
  chalk.blue("\nWelcome "+ userName + " to the 🤣🤣 apna QUIZ.\n"));

  console.log(chalk.yellow("Chalo let's start a quiz the Quiz. LET\'s Start\n"))

  console.log(chalk.cyan("Well here are the rules.\n"+
  "1. For every right question you get 2 marks.\n"+
  "\n2. No marks for any wrong questions.\n "+
  "\n3. Just have fun.😁😁😁😁\n"));

  console.log(chalk.red("Let the game begin. \n"));


  
let choice= readlineSync.question(
chalk.red("1. Who's MOdi ji?\n")+
"0. Comedian \n"+
"1. Prime Minister.\n"+
"your Answer: ");

if(choice == 1)
{ score+=2;
  console.log("Yes! you are wright. \n");
  console.log("current score: " + score);
  console.log("-------------X-------------");
  
}else{
  console.log("Why would you think that!!\n");
}

choice= readlineSync.question(
chalk.red("1. When did India get its independance?\n")+
"0. 1985 \n"+
"1. 1947\n"+
"your Answer: ");


if(choice == 1)
{ score+=2;
  console.log("Yes! you are wright. ")
  console.log("current score: " + score);
  console.log("-------------X-------------");
}else{
  console.log("wrong.!! 😅\n");
  console.log("Bro are you Indian.!! 😅\n");
}

 choice= readlineSync.question(
chalk.red("1. Rani laxmi bhai is famous for.?\n")+
"0. Fighting British \n"+
"1. Being a wealthiest queen. \n"+
"your Answer: ");

if(choice == 0)
{ score+=2;
  console.log("Yes! you are wright. ")
  console.log("current score: " + score);
  console.log("-------------X-------------");
}else{
  console.log("Why would you think that!!\n😅Let me send you back in time.\n");
}

choice= readlineSync.question(
chalk.red("1. Where is kolkata located.?\n")+
"0. West Benal. \n"+
"1. Kerela\n"+
"2. Delhi.\n"+
"3.Moon\n"+
"your Answer: ");

if(choice == 0)
{ score+=2;
  console.log("Yes! you are wright. ")
  console.log("current score: " + score);
  console.log("-------------X-------------");
}else{
  console.log("NOpe!!\n😅hope you didn't choose Mooon.\n");
}

choice= readlineSync.question(
chalk.red("1. Triple Talak wars scraped in which year.?\n")+
"0. 2018 \n"+
"1. 2019\n"+
"your Answer: ");

if(choice == 1)
{ score+=2;
  console.log("Yes! you are wright. ")
  console.log("current score: " + score);
  console.log("-------------X-------------");
}else{
  console.log("Awww itni jaldi bhul gaya.😅!!\n ");
}

choice= readlineSync.question(
chalk.red("1. The Modi govt. won its historic election in.?\n")+
"0. 2014 \n"+
"1. 2015\n"+
"your Answer: ");

if(choice == 0)
{ score+=2;
  console.log("Yes! you are wright. ")
  console.log("current score: " + score);
  console.log("-------------X-------------");
}else{
  console.log("Nope 😅!!\n ");
}

choice= readlineSync.question(
chalk.red("1. Tik tok was banned in which year.?\n")+
"0.  2019\n"+
"1. 2020\n"+
"your Answer: ");

if(choice == 1)
{ score+=2;
  console.log("Yes! you are wright. ")
  console.log("current score: " + score);
  console.log("-------------X-------------");
}else{
  console.log("You secretly watch it on youtube maybe.😅!!\n ");
}
console.log(chalk.red("Your Score is: "+ score))

if(score>=12)
{
  console.log(chalk.cyan("!!😁😁Wow you really know."));
}else if(score>=8)
{
  console.log(chalk.cyan("!! That's a good score."));
}
else if(score>=4)
{
  console.log(chalk.cyan("!! Well it's ok."));
}