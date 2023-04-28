import prompt from 'prompt';
class staffCategory {
    constructor(name, salary, sales_target) {
        this.name = name;
        this.salary = salary;
        this.sales_target = sales_target;
    }
}
class Staff {
    constructor(name, category, number_of_sales) {
        this.name = name;
        this.category = category;
        this.number_of_sales = number_of_sales;
    }

    calculate_bonus(bonus) {
        if (this.number_of_sales >= this.category.sales_target) {
            const staff_bonus = (this.category.salary / 100) * bonus;
            return staff_bonus;
        } else {
            return 0.0;
        }
    }
}
const tier_1 = new staffCategory('tier_1', 50000.0, 20);
const tier_2 = new staffCategory('tier_2', 99400.0, 30);
const tier_3 = new staffCategory('tier_3', 133000.0, 40);

const staff_category = {
    "tier_1": tier_1,
    "tier_2": tier_2,
    "tier_3": tier_3
};
const name = prompt('input the staff name:');
const category_name = prompt('input the staff category:');
const number_of_sales = parseInt(prompt('input the number of sales:'));
console.log(number_of_sales);

const category = staff_category[category_name];

const staff = new Staff(name, category, number_of_sales);
const bonus = staff.calculate_bonus(2.5);
const total_salary = bonus + category.salary;
console.log("staff Bonus:", bonus);
console.log("staff Total Salary:", total_salary);
 
