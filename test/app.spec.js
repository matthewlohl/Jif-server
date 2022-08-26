
const { default: test } = require('node:test');
const request = require ('supertest');
const app = require('../app');
const data = require('../data')

describe ('api server', () => {
    let api;

    beforeAll (() => {
        api = app.listen(5000, () => {
            console.log('Test sever running on port 5000')
        })
    })




        
    

    // Test get / wtih 200 status



    
    // Test get /ipj with 200 status 
    test('it gets /ipj and responds with data', (done) => {
        request(api)
            .get('/ipj')
            .expect(data, done)
    })







    // Test get /ipj/random with 200 status
    // test('it responds to /ipj/random with a 200 status', (done) => {
    //     request(api)
    //         .get('/ipj/random')
    //         .expect(200, done)
    // })


    // Test get /ipj/'outOfRang' with 404 status
    // test ('it responds to a out of range post with a 404', (done) => {
    //     request(api)
    //         .get('/ipj/40')
    //         .expect(404)
    //         .expect({message: 'This post id does not exist'},done);
    // })



    // Test delete /ipj/:id with status 204
    test('it responds to delete id with status 204', (done) => {
        request(api)
         .delete('/ipj/:id')
         .expect(204,done)
    })

    // Test that delete function works 

    test('it deletes a specific id form the data', () => {
        const deletedElement = data[1].id
        
        request(api)
         .delete('/ipj/2')
            expect(deletedElement).toEqual(2)
    })

    // Test fo rgetting the correct element id


    // Test post to /ipj with status 201
    
    
    
    afterAll ((done) => {
        console.log('Stopping test server')
        api.close(done)
    })

    
})
