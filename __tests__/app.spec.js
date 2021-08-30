//mocking and setup

const mockApp = {
    get: jest.fn(),
    listen: jest.fn(),
    set: jest.fn(),
    use: jest.fn()
}
jest.mock('express', () => jest.fn(() => mockApp))

const mockNodeFetch = jest.fn()
jest.mock('node-fetch', () => mockNodeFetch)

require('../app.js')

describe('Basic set up testing', () => {
    describe('job-roles testing', () => {

        test("job-roles route get method set up in express", () => {
            expect(mockApp.get).toHaveBeenCalledWith('/job-roles', expect.any(Function))
        });

        test("job-roles Route serves job-roles html page unhappy path", async () => {
            let thrownError = {
                message: 'request to http://localhost:8000/api/JobRoles failed, reason: connect ECONNREFUSED 127.0.0.1:8000'
            } 
            mockNodeFetch.mockImplementationOnce(() => Promise.reject(thrownError));
            //tracks all app.get calls when require('../app.js') line is run, get ('job-roles') is second hence [1][1] call
            const behaviour = mockApp.get.mock.calls[1][1] // grab the second [1] param of the second [1] call
            const res = { render: jest.fn() }
    
            expect(behaviour).rejects.toThrow(thrownError.message)
            //call function used by get handler
            await expect(res.render).not.toHaveBeenCalled()
        });

        test("job-roles Route serves job-roles html page happy path", async () => {
            mockNodeFetch.mockImplementationOnce(() => Promise.resolve({ status: 200, json: () => Promise.resolve({ data: "Test Data" })}))
            //tracks all app.get calls when require('../app.js') line is run, get ('job-roles') is second hence [1][1] call
            const behaviour = mockApp.get.mock.calls[1][1] // grab the second [1] param of the second [1] call
            const res = { render: jest.fn() }
                //call function used by get handler
            await behaviour(null, res)
            await expect(res.render).toHaveBeenCalledWith('job-roles', {apiData: {data: 'Test Data'}})
        });
    });

    describe("job-specification page testing", () =>{
        test("route for job-spec get method set up in express", () => {
            expect(mockApp.get).toHaveBeenCalledWith('/job-spec', expect.any(Function))
        });

        test("job-spec route serves job-roles html page unhappy path", async () => {
            let thrownError = {
                message: 'request to http://localhost:8000/api/JobSpecifications failed, reason: connect ECONNREFUSED 127.0.0.1:8000'
            } 
            mockNodeFetch.mockImplementationOnce(() => Promise.reject(thrownError));
            //tracks all app.get calls when require('../app.js') line is run, get ('job-roles') is second hence [1][1] call
            const behaviour = mockApp.get.mock.calls[2][1] // grab the second [1] param of the second [1] call
            const res = { render: jest.fn() }
    
            expect(behaviour).rejects.toThrow(thrownError.message)
            //call function used by get handler
            await expect(res.render).not.toHaveBeenCalled()
        })

        test("job-spec route serves job-roles html page happy path", async () => {
            mockNodeFetch.mockImplementationOnce(() => Promise.resolve({ status: 200, json: () => Promise.resolve({ data: "Test Data" })}))
            //tracks all app.get calls when require('../app.js') line is run, get ('job-roles') is second hence [1][1] call
            const behaviour = mockApp.get.mock.calls[2][1] // grab the second [1] param of the second [1] call
            const res = { render: jest.fn() }
                //call function used by get handler
            await behaviour(null, res)
            await expect(res.render).toHaveBeenCalledWith('job-spec', {jobSpec: {data: 'Test Data'}})
        });
    });

    describe("job-capabilities page testing", () =>{
        test("route for job-cabalities get method set up in express", () => {
            expect(mockApp.get).toHaveBeenCalledWith('/job-capabilities', expect.any(Function))
        });

        test("job-spec route serves job-capabilites html page unhappy path", async () => {
            let thrownError = {
                //specific error thrown back when java API endpoint is down
                message: 'request to http://localhost:8000/api/JobCapability failed, reason: connect ECONNREFUSED 127.0.0.1:8000'
            } 
            mockNodeFetch.mockImplementationOnce(() => Promise.reject(thrownError));
            //tracks all app.get calls when require('../app.js') line is run, get ('job-roles') is second hence [1][1] call
            const behaviour = mockApp.get.mock.calls[3][1] // grab the second [1] param of the second [1] call
            const res = { render: jest.fn() }
    
            expect(behaviour).rejects.toThrow(thrownError.message)
            //call function used by get handler
            await expect(res.render).not.toHaveBeenCalled()
        })

        test("job-spec route serves job-roles html page happy path", async () => {
            mockNodeFetch.mockImplementationOnce(() => Promise.resolve({ status: 200, json: () => Promise.resolve({ data: "Test Data" })}))
            //tracks all app.get calls when require('../app.js') line is run, get ('job-roles') is second hence [1][1] call
            const behaviour = mockApp.get.mock.calls[3][1] // grab the second [1] param of the second [1] call
            const res = { render: jest.fn() }
                //call function used by get handler
            await behaviour(null, res)
            await expect(res.render).toHaveBeenCalledWith('job-capability', {jobCapability: {data: 'Test Data'}})
        });
    });


    describe("band-levels page testing", () =>{
        test("route for band-levels get method set up in express", () => {
            expect(mockApp.get).toHaveBeenCalledWith('/band-levels', expect.any(Function))
        });

        test("job-spec route serves band-levels html page unhappy path", async () => {
            let thrownError = {
                //specific error thrown back when java API endpoint is down
                message: 'request to http://localhost:8000/api/BandLevels failed, reason: connect ECONNREFUSED 127.0.0.1:8000'
            } 
            mockNodeFetch.mockImplementationOnce(() => Promise.reject(thrownError));
            //tracks all app.get calls when require('../app.js') line is run, get ('job-roles') is second hence [1][1] call
            const behaviour = mockApp.get.mock.calls[4][1] // grab the second [1] param of the second [1] call
            const res = { render: jest.fn() }
    
            expect(behaviour).rejects.toThrow(thrownError.message)
            //call function used by get handler
            await expect(res.render).not.toHaveBeenCalled()
        })

        test("job-spec route serves band-roles html page happy path", async () => {
            mockNodeFetch.mockImplementationOnce(() => Promise.resolve({ status: 200, json: () => Promise.resolve({ data: "Test Data" })}))
            //tracks all app.get calls when require('../app.js') line is run, get ('job-roles') is second hence [1][1] call
            const behaviour = mockApp.get.mock.calls[4][1] // grab the second [1] param of the second [1] call
            const res = { render: jest.fn() }
                //call function used by get handler
            await behaviour(null, res)
            await expect(res.render).toHaveBeenCalledWith('band-levels', {bandLevels: {data: 'Test Data'}})
        });
    });


    test("root route serves index html page", () => {
        //call get function here?
        expect(mockApp.get).toHaveBeenCalledWith('/', expect.any(Function))

        const behaviour = mockApp.get.mock.calls[0][1] // grab the second [1] param of the first [0] call
        const res = { render: jest.fn() }
        //call function used by get handler
        behaviour(null, res)
        expect(res.render).toHaveBeenCalledWith('index')
    });


    test('Start successfully and listen on port 7999', () => {
        expect(mockApp.listen).toHaveBeenCalledWith(7999, expect.any(Function))
    })
});