import mongoose from 'mongoose'

mongoose
  .connect('mongodb://localhost:27017/graphql')
  .then(db => {
    console.log('Database is connected', db.connection.host)
  })
  .catch(err => {
    console.log('Error connecting to DB: ', err)
  })
