export default `
    type Word {
        id: Int!
        native: String!
        translation: String!
    }

    type Query {
        allWords: [Word!]!
    }

    type Mutation {
        createWord(native: String!, translation: String!): Boolean!
    }
`;