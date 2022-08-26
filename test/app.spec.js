const request = require ('supertest');
const { describe } = require('yargs');
const app = require('../app');

describe ('api server', () => {
    let api;

    beforeAll (() => {
        api = app.listen(5000, () => {
            console.log('Test sever running on port 5000')
        })
    })

    afterAll ((done) => {
        console.log('Stopping test server')
        api.close(done)
    })


        
    

    // Test get / wtih 200 status



    
    // Test get /ipj with 200 status 





    // Test get /ipj/random with 200 status
    test('it responds to /ipj/random with a 200 status', (done) => {
        request(api)
            .get('/ipj/random')
            .expect(200, done)
    })


    // Test get /ipj/'outOfRang' with 404 status
    test ('it responds to a out of range post with a 404', (done) => {
        request(api)
            .get('/ipj/40')
            .expect(404)
            .expect({message: 'This post id does not exist'},done);
    })



    // Test delete /ipj/:id with status 204




    // Test post to /ipj with status 201
    
    
    

    
})
