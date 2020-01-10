process.env.NODE_ENV = "test"

const Task = require("../../models/User");
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../app');
const should = chai.should();
chai.use(chaiHttp);

const expect = chai.expect;

// Test to Get all task records
describe('/GET task', () => {
    it('it should Get all tasks', (done) => {
        chai
            .request(app)
            .get('/tasks')
            .end((err, res) => {
                res
                    .should
                    .have
                    .status(200);
                res
                    .body
                    .should
                    .be
                    .a('object');
                done();
            });
    });

    // Test to get task record
    it("should Get a task one record", (done) => {
        //existed task id in db
        const id = 62;
        chai.request(app)
            .get(`/tasks/${id}`)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
             });
    });
    
   // Test to get task record
   it("should not Get a task one record", (done) => {
       //not existed id in db
        const id = 65;
        chai.request(app)
            .get(`/tasks/${id}`)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
             });
    });

    //test post tast
    // it("should Post a task", (done) => {
    //      chai.request(app)
    //          .post(`/tasks`)
    //          .send({"task_name":"siema"})
    //          .end((err, res) => {
    //              res.should.have.status(200);
    //              res.body.should.be.a('object');
    //              done();
    //           });
    //  });

    //Test delete task
    it("should delete a task", (done) => {
        //existed id in db
         const id = 62;
         chai.request(app)
             .delete(`/tasks/${id}`)
             .end((err, res) => {
                 res.should.have.status(200);
                 res.body.should.be.a('object');
                 
                 done();
              });
     });
});

