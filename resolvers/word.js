export default {
    Query: {
        allWords: async (parent, args, { models }) => models.Word.findAll()
    },
    Mutation: {
        createWord: async (parent, args, { models, course }) => {
            try {
                await models.Word.create({ ...args, courseId: course.id });
                return true;
            } catch (err) {
                console.log(err);
                return false;
            }
        },
    }
};