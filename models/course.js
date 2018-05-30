export default (sequelize, DataTypes) => {
    const Course = sequelize.define('course', {
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        }
    });

    return Course;
}