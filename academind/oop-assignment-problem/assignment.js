class Course {
  #price;

  get price() {
    return '$' + this.#price;
  }

  set price(value) {
    if (value < 0) {
      throw 'Invalid value!'
    } else {
      this.#price = value;
    }
  }

  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }

  resultCourse() {
    return this.length / this.#price;
  }

  infoCourse() {
    console.log(`Title: ${this.title}, Length: ${this.length}, Price: ${this.price}`);
  }
}

// Sesstion 1
const javaCourse = new Course('Java', 77, 35);
const kotlinCourse = new Course('Kotlin', 86, 20);
console.log(javaCourse);
console.log(kotlinCourse);


// Sesstion 2
console.log(javaCourse.resultCourse());
javaCourse.infoCourse();
console.log(kotlinCourse.resultCourse());
kotlinCourse.infoCourse();


// Sesstion 3
class PracticalCourse extends Course {
  constructor(title, length, price, numOfExercises) {
    super(title, length, price);
    this.numOfExercises = numOfExercises;
  }
}
const javascript = new PracticalCourse('Javascript', 99, 30, 10);
console.log(javascript);
console.log(javascript.infoCourse());

class TheoreticalCourse extends Course {
  publish() {
    console.log('Publishing...')
  }
}
const reactJs = new TheoreticalCourse('ReactJS', 33, 10);
reactJs.infoCourse();
reactJs.publish();

reactJs.price = 11;
// reactJs.#price = 112;