import { gql } from "graphql-tag";


const allTestData = gql`
    query abc {
        allTestdata {
            id
            value
        }
    }
`
export { allTestData }