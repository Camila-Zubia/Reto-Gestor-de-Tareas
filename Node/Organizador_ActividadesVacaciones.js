const activities = [
    { name: 'Snorkel', quantity: 5, category: 'Acuaticas' },
    { name: 'Kayak', quantity: 3, category: 'Acuaticas' },
    { name: 'Futbol', quantity: 2, category: 'Deportes' },
    { name: 'Kayak', quantity: 2, category: 'Acuaticas' },
    { name: 'Tenis', quantity: 4, category: 'Deportes' }
];

const activities2 = [
    { name: 'Tour', quantity: 10, category: 'Excursiones' },
    { name: 'Tour', quantity: 5, category: 'Excursiones' },
    { name: 'Pintura', quantity: 3, category: 'Arte' }
];

const organizeActivities = (activities) => {
    return activities.reduce((acc, activity) => {
        const { name, quantity, category } = activity;
        acc[category] = acc[category] || {};
        acc[category][name] = (acc[category][name] || 0) + quantity;
        return acc;
    }, {});
};

console.log(JSON.stringify(organizeActivities(activities), null, 2));

console.log(JSON.stringify(organizeActivities(activities2), null, 2));