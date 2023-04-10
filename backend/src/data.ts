
export const sample_foods: any[] = [

    {
        id: '1',
        name: 'pizza',
        cookTime: '10-20',
        price:10,
        favorites: false,
        origins: ['italy'],
        stars: 4.5,
        imageurl: '/assets/images/img-1.jpg',
        tags: ['fastfood', 'pizza', 'lunch']
    }, 

    {
        id: '2',
        name: 'vegetable-chips',
        price: 20,
        cookTime: '20-30',
        favorites: true,
        origins: ['persia', 'middle-east', 'china'],
        stars: 4.7,
        imageurl: 'assets/images/img-2.jpg',
        tags: ['slowfood', 'lunch']
    },

    {
        id: '3',
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorites: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageurl: 'assets/images/img-3.jpg',
        tags: ['fastfood', 'Hamburger']

    },
    
    {
        id: '4',
        name: 'jollof-rice',
        price: 2,
        cookTime: '15-20',
        favorites: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageurl: '/assets/images/img-4.jpg',
        tags: ['fastfood', 'fry']
    },
    {
        id: '5',
        name: 'sauce',
        price: 15,
        cookTime: '50 - 60',
        favorites: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageurl: '/assets/images/img-5.jpg',
        tags: ['slowFood', 'soup']
    },

    {
        id: '6',
        name: 'vegetable pizza',
        price: 9,
        cookTime: '50 - 60',
        favorites: false,
        origins: ['italy'],
        stars: 3.0,
        imageurl: '/assets/images/img-6.jpg',
        tags: ['fastFood', 'pizza', 'lunch']

    }
]

export const sample_tags : any[] = [
    {name: 'All', count:6},
    {name: 'fastfood', count:4},
    {name: 'pizza', count: 3},
    {name: 'lunch', count: 2},
    {name: 'slowfoor', count: 2},
    {name: 'Hamburger', count: 1},
    {name: 'fry', count: 1},
    {name: 'soup', count: 1}
]

export const sample_users: any[]= [
    {
        Name: "JohnDoe",
        email: "john@gmail.com",
        passWord: "John dior",
        isAdmin: true
    },

    {
        Name: "Anna Doe",
        email: "Anna@gmail.com",
        passWord: "12345",
        address: "shanghai",
        isAdmin: false,
    }
]