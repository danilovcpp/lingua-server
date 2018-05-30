import Sequelize from 'sequelize';

const sequelize = new Sequelize('lingua', 'postgres', 'postgres', {
    dialect: 'postgres',
    operatorsAliases: Sequelize.Op,
    define: { underscored: true }
});

const models = {
    //User: sequelize.import('./user'),
    Word: sequelize.import('./word'),
    Course: sequelize.import('./course')
};

Object.keys(models).forEach((modelName) => {
    if ('associate' in models[modelName]) {
        models[modelName].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;