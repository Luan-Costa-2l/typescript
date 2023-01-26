type Category = {
    [tag: string]: {
        title: string;
        color: string;
        expense: boolean;
    }
}

const categories: Category = {
    food: {title: 'Alimentação', color: 'blue', expense: true},
    rent: {title: 'Aluguel', color: 'brown', expense: true},
    salary: {title: 'Salário', color: 'green', expense: false},
}