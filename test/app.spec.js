
const request = require ('supertest');

const app = require('../app');
const data = require('../data')



describe ('api server', () => {
    let api;

    beforeAll (() => {
        api = app.listen(8000, () => {
            console.log('Test sever running on port 8000')
        })
    })

    afterAll ((done) => {
        console.log('Stopping test server')
        api.close(done)
    })


        
    

    // Test get / wtih 200 status



    
    // Test get /ipj with 200 status 
    test('it gets /ipj and responds with data', (done) => {
        request(api)
            .get('/ipj')
            .expect(data, done)
    })







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
            .expect({message: 'This journal entry does not exist'},done);
    })




    // Test delete /ipj/:id with status 204
    xtest('it responds to delete id with status 204', (done) => {
        request(api)
         .delete('/ipj/:id')
         .expect(204,done)
    })

    // Test that delete function works 

    xtest('it deletes a specific id form the data', () => {
        const deletedElement = data[0].id
        
        request(api)
         .delete('/ipj/2')
            expect(deletedElement).toEqual(2)
    })

    // Test to see if /comment posts a comment 

    test('it posts a new comment', (done) => {
       const testComment = {
        id:2,
        comment: "amazing read"
       }

       request(api)
       .post('/comment')
       .send(testComment)
       .expect((res) => {
        res.body.data[1].comment[3] = "amazing read"
       
      },done)
       
       
     
    //     app.post(fakePostEvent);
    //     expect(fetch.mock.calls[0][1]).toHaveProperty('method', 'POST');
    //     expect(fetch.mock.calls[0][1]).toHaveProperty('body', JSON.stringify({ name: "Bob", age: 4 }));
        
           
    })
    // Test to see if /emoji posts an emoji
    
    // test('it posts a new emoji', (done) => {
    //     const testEmoji = {
    //         "id": 2,
    //         "emoji": "&#128077;"
                  
    //     }


    //     request(api)
    //         .post('/emoji')
    //         .send(testEmoji)
    //     expect(data[1].emoji).toContain("&#128077;")
    // })


    // Test post to /ipj with status 201
    
    xtest ('it responds to post /ipj with a status 201 status', (done) => {
        const testData= {
                "title": "Test 5",
                "date": "03122021",
                "text": "Animated gifs and lores images from the classic 1980 Namco arcade game Pac-Man. Fun images to share with friends, and userful resources for web designers. To save these images, right click and select SAVE AS. Please be patient and allow the page to load (there are alot of images on this page).",
                "gif": "https://i.imgur.com/a3u5DxA.gif",
                "emoji": [
                "&#128077;",
                "&#128078;",
                "&#129505;"
                ],
                "comment": [
                "This is a very great post",
                "I love it",
                "very boring",
                "My favourite gif!!!!"
                ]
            }
        request(api)
            .post('/ipj')
            .send(testData)
            .expect(201)
            .expect({...testData, id: 4},done )
        })
    
    
    afterAll ((done) => {
        console.log('Stopping test server')
        api.close(done)

    })

    
})



