let users = ['Luan', 'Ellen', 'Vitor', 'Savia', 90];

users.forEach(function (item) {
    if(typeof item === 'string') {
        console.log(item.toUpperCase());
    } else {
        console.log(item);
    }
});