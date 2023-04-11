class job {
    constructor (name, industry, requiresDegree, field, salary){
    this.name=name;
    this.industry=industry;
    this.requiresDegree=requiresDegree;
    this.field=field;
    this.salary=salary;
}
getName() {
    return this.name;
  }

  getFieldAndIndustry() {
    return this.industry + " & " + this.field;
  }

  getrequiresDegree () {
    return this.requiresDegree;
  }
}
class jobExtension extends job{
    constructor (name, industry, requiresDegree, field, salary, jobSatisfaction){
    super (name, industry, requiresDegree, field, salary);
    this.jobSatisfaction=jobSatisfaction;
    }
}
const job1=new job("barista", "service", "no", "food and beverage","35,000", )
const job2=new job("cashier", "service", "no", "retail", "35,000",)
const job3=new job("account manager", "business","no", "advertising", "70,000",)

console.log(job1.getName());
console.log(job1.getFieldAndIndustry());
console.log(job2.getName());
console.log(job2.getFieldAndIndustry());
console.log(job3.getName());
console.log(job3.getFieldAndIndustry());

const specialJob=new jobExtension ("food delivery driver", "service", "no", "food and beverage", "35,000", "70%")

console.log (specialJob.getFieldAndIndustry())
console.log (specialJob.getName())
