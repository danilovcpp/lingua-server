export default (sequelize, DataTypes) => {
    const Word = sequelize.define('word', {
        native: {
            type: DataTypes.STRING
        },
        translation: {
            type: DataTypes.STRING
        }
    });

    Word.associate = (models) => {
        Word.belongsTo(models.Course, {
            foreignKey: {
                name: 'courseId',
                field: 'course_id'
            }
        })
    }

    return Word;
}