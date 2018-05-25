export default `
    type Course {
        id: Int!
        name: String!
        description: String
        words: [Word!]!
    }
`;