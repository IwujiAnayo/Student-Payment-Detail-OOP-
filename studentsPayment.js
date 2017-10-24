class student {
  constructor(rollNo,name,course) {
    this.rollNo = rollNo;
    this.name=name;
    this.course=course;
    this.feePaid=0;

  }

  payment(amount){
    this.feePaid = this.feePaid + amount;
    return (this.feePaid);
    }

  printStudent(){
    console.log("Student Name: "+ this.name + ", Rollnumber: "+ this.rollNo + ", Course Code: " + this.course + ", Fee Paid: " + this.feePaid);
    }

  dueAmount(){
    const totalFee = 3000;
    return (totalFee - this.feePaid);

  }
}


class addTax extends student{
  payment(amount){
    const taxRate = 0.1;
    this.feePaid = this.feePaid + (amount - (amount * taxRate));
    return this.feePaid;
  }

}
