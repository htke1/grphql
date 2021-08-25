const express = require('express')
const expressGraphQl = require('express-graphql').graphqlHTTP
const app = express()
const { GraphQLSchema, GraphQLObjectType, GraphQLString} = require('graphql')

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'hipeople',
        fields: () =>({
            message: {
                type: GraphQLString,
               resolve: () =>"hello world"
            }
        })
    })
  

})

app.use('/graphql', expressGraphQl({
   schema: schema,
    graphiql: true
}))


app.listen(5000, ()=>console.log("server started"))